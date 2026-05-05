import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-6 text-center bg-slate-950 rounded-3xl border border-white/10 m-4">
          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/20">
            <AlertTriangle className="text-red-500 w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Ops! Algo deu errado.</h2>
          <p className="text-slate-400 max-w-md mb-8">
            Ocorreu um erro inesperado ao carregar este componente. Nossa equipe técnica já foi notificada.
          </p>
          <Button 
            onClick={this.handleReset}
            className="bg-gold hover:bg-gold/90 text-slate-950 font-bold gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Recarregar Página
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
