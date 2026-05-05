import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { leadService } from "@/services/leadService";
import { Loader2 } from "lucide-react";


const quoteSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  phone: z.string().min(10, "Telefone deve ter DDD e número").max(16, "Telefone muito longo"),
  email: z.string().email("E-mail inválido"),
  company: z.string().optional(),
  origin: z.string().min(2, "Origem é obrigatória"),
  destination: z.string().min(2, "Destino é obrigatória"),
  cargo_type: z.string().min(2, "Tipo de carga é obrigatório"),
  estimated_weight: z.string().optional(),
  message: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "João Exemplo",
      phone: "(35) 99999-9999",
      email: "cliente@exemplo.com",
      company: "Minha Empresa LTDA",
      origin: "Guaxupé/MG",
      destination: "São Paulo/SP",
      cargo_type: "Carga Seca",
      estimated_weight: "10 toneladas",
      message: "Gostaria de uma cotação para transporte regular.",
    },
  });

  async function onSubmit(data: QuoteFormValues) {
    setIsSubmitting(true);
    try {
      await leadService.saveLead(data as any);
      
      setIsSuccess(true);
      toast({
        title: "Cotação enviada!",
        description: "Entraremos em contato em breve.",
      });
      form.reset();
    } catch (error) {
      console.error("[QuoteForm] Submission error:", error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-6 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center shadow-lg shadow-gold/20">
          <svg className="w-10 h-10 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white">Mensagem Recebida!</h3>
          <p className="text-slate-400 max-w-xs mx-auto">
            Obrigado pelo contato. Nossa equipe analisará sua rota e ligará para você em breve.
          </p>
        </div>
        <Button 
          variant="outline" 
          className="border-slate-700 text-white hover:bg-white/5"
          onClick={() => setIsSuccess(false)}
        >
          Solicitar Outra Cotação
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} className="bg-white/5 border-slate-700 h-12 rounded-xl focus:border-gold/50 transition-colors" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input placeholder="(00) 00000-0000" {...field} className="bg-white/5 border-slate-700 h-12 rounded-xl focus:border-gold/50 transition-colors" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="email@exemplo.com" {...field} className="bg-white/5 border-slate-700 h-12 rounded-xl focus:border-gold/50 transition-colors" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="origin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Origem</FormLabel>
                <FormControl>
                  <Input placeholder="Cidade de origem" {...field} className="bg-white/5 border-slate-700 h-12 rounded-xl focus:border-gold/50 transition-colors" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="destination"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Destino</FormLabel>
                <FormControl>
                  <Input placeholder="Cidade de destino" {...field} className="bg-white/5 border-slate-700 h-12 rounded-xl focus:border-gold/50 transition-colors" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="cargo_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de Carga</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Grãos, Maquinário" {...field} className="bg-white/5 border-slate-700 h-12 rounded-xl focus:border-gold/50 transition-colors" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="estimated_weight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Peso Estimado</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: 10 toneladas" {...field} className="bg-white/5 border-slate-700 h-12 rounded-xl focus:border-gold/50 transition-colors" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>


        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Observações</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Informações adicionais sobre sua carga" 
                  {...field} 
                  className="bg-white/5 border-slate-700 min-h-[100px] rounded-xl focus:border-gold/50 transition-colors" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-gold text-slate-950 hover:bg-gold/90 font-black uppercase tracking-wider h-14 rounded-xl shadow-gold"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Solicitar Cotação"
          )}
        </Button>

      </form>
    </Form>
  );
};
