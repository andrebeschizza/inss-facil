import { supabase } from './supabase';
import type { UserProfile, Badge, ChatMessage, ChecklistProgress } from './supabase';

// ============= PERFIL DE USUÁRIO =============

export async function createUserProfile(data: {
  user_id: string;
  full_name: string;
  cpf: string;
  birth_date: string;
  phone: string;
  accessibility_enabled: boolean;
}) {
  const { data: profile, error } = await supabase
    .from('user_profiles')
    .insert([{
      ...data,
      plan: 'free'
    }])
    .select()
    .single();

  if (error) throw error;
  return profile;
}

export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error && error.code !== 'PGRST116') throw error;
  return data;
}

export async function updateUserProfile(userId: string, updates: Partial<UserProfile>) {
  const { data, error } = await supabase
    .from('user_profiles')
    .update(updates)
    .eq('user_id', userId)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateUserPlan(userId: string, plan: 'free' | 'basic' | 'premium' | 'vip') {
  return updateUserProfile(userId, { plan });
}

// ============= BADGES (GAMIFICAÇÃO) =============

export async function getUserBadges(userId: string) {
  const { data, error } = await supabase
    .from('badges')
    .select('*')
    .eq('user_id', userId)
    .order('earned_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function addBadge(userId: string, badgeType: string) {
  // Verifica se já tem o badge
  const { data: existing } = await supabase
    .from('badges')
    .select('id')
    .eq('user_id', userId)
    .eq('badge_type', badgeType)
    .single();

  if (existing) return existing;

  const { data, error } = await supabase
    .from('badges')
    .insert([{
      user_id: userId,
      badge_type: badgeType
    }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

// ============= MENSAGENS DO CHAT (DR. INSS) =============

export async function getChatHistory(userId: string, limit = 50) {
  const { data, error } = await supabase
    .from('chat_messages')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: true })
    .limit(limit);

  if (error) throw error;
  return data || [];
}

export async function saveChatMessage(userId: string, role: 'user' | 'assistant', content: string) {
  const { data, error } = await supabase
    .from('chat_messages')
    .insert([{
      user_id: userId,
      role,
      content
    }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function clearChatHistory(userId: string) {
  const { error } = await supabase
    .from('chat_messages')
    .delete()
    .eq('user_id', userId);

  if (error) throw error;
}

// ============= PROGRESSO DOS CHECKLISTS =============

export async function getChecklistProgress(userId: string, checklistType: string) {
  const { data, error } = await supabase
    .from('checklist_progress')
    .select('*')
    .eq('user_id', userId)
    .eq('checklist_type', checklistType);

  if (error) throw error;
  return data || [];
}

export async function updateChecklistStep(
  userId: string,
  checklistType: string,
  stepIndex: number,
  completed: boolean
) {
  // Verifica se já existe
  const { data: existing } = await supabase
    .from('checklist_progress')
    .select('id')
    .eq('user_id', userId)
    .eq('checklist_type', checklistType)
    .eq('step_index', stepIndex)
    .single();

  if (existing) {
    const { data, error } = await supabase
      .from('checklist_progress')
      .update({ completed })
      .eq('id', existing.id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  const { data, error } = await supabase
    .from('checklist_progress')
    .insert([{
      user_id: userId,
      checklist_type: checklistType,
      step_index: stepIndex,
      completed
    }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

// ============= AUTENTICAÇÃO =============

export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) throw error;
  return data;
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}
