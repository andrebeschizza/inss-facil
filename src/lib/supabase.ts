import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types para o banco de dados
export type UserProfile = {
  id: string;
  user_id: string;
  full_name: string;
  cpf: string;
  birth_date: string;
  phone: string;
  plan: 'free' | 'basic' | 'premium' | 'vip';
  accessibility_enabled: boolean;
  created_at: string;
  updated_at: string;
};

export type Badge = {
  id: string;
  user_id: string;
  badge_type: string;
  earned_at: string;
};

export type ChatMessage = {
  id: string;
  user_id: string;
  role: 'user' | 'assistant';
  content: string;
  created_at: string;
};

export type ChecklistProgress = {
  id: string;
  user_id: string;
  checklist_type: string;
  step_index: number;
  completed: boolean;
  created_at: string;
};
