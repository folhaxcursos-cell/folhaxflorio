import { supabase } from "@/lib/supabase";

export interface Lead {
  id?: string;
  name: string;
  email: string;
  phone: string;
  origin: string;
  destination: string;
  cargo_type: string;
  company?: string;
  estimated_weight?: string;
  message?: string;
  status?: 'new' | 'contacted' | 'negotiating' | 'closed' | 'lost';
  created_at?: string;
}

export const leadService = {
  saveLead: async (leadData: Omit<Lead, 'id' | 'status' | 'created_at'>): Promise<any> => {
    if (!supabase) {
      console.warn("Supabase não configurado. Simulando envio de lead.");
      return { success: true };
    }
    
    try {
      const { data, error } = await supabase
        .from('leads')
        .insert([{ ...leadData, status: 'new' }])
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (err: any) {
      console.error("Erro ao salvar lead no Supabase:", err);
      throw err;
    }
  },
};
