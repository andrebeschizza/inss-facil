"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import {
  getUserProfile,
  createUserProfile,
  updateUserPlan,
  getUserBadges,
  addBadge,
  getChatHistory,
  saveChatMessage,
  getChecklistProgress,
  updateChecklistStep,
  getCurrentUser
} from '@/lib/supabase-queries';
import type { UserProfile, Badge, ChatMessage } from '@/lib/supabase';

export function useSupabaseData() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [badges, setBadges] = useState<Badge[]>([]);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(true);

  // Carrega dados iniciais
  useEffect(() => {
    loadUserData();

    // Listener para mudanças de autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          setUser(session.user);
          await loadUserProfile(session.user.id);
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
          setProfile(null);
          setBadges([]);
          setChatHistory([]);
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function loadUserData() {
    try {
      const currentUser = await getCurrentUser();
      if (currentUser) {
        setUser(currentUser);
        await loadUserProfile(currentUser.id);
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setLoading(false);
    }
  }

  async function loadUserProfile(userId: string) {
    try {
      const userProfile = await getUserProfile(userId);
      setProfile(userProfile);

      if (userProfile) {
        const userBadges = await getUserBadges(userId);
        setBadges(userBadges);

        const history = await getChatHistory(userId);
        setChatHistory(history);
      }
    } catch (error) {
      console.error('Erro ao carregar perfil:', error);
    }
  }

  // Função para criar perfil após cadastro
  async function createProfile(data: {
    full_name: string;
    cpf: string;
    birth_date: string;
    phone: string;
    accessibility_enabled: boolean;
  }) {
    if (!user) throw new Error('Usuário não autenticado');

    try {
      const newProfile = await createUserProfile({
        user_id: user.id,
        ...data
      });
      setProfile(newProfile);
      return newProfile;
    } catch (error) {
      console.error('Erro ao criar perfil:', error);
      throw error;
    }
  }

  // Função para atualizar plano
  async function changePlan(plan: 'free' | 'basic' | 'premium' | 'vip') {
    if (!user) throw new Error('Usuário não autenticado');

    try {
      const updated = await updateUserPlan(user.id, plan);
      setProfile(updated);
      return updated;
    } catch (error) {
      console.error('Erro ao atualizar plano:', error);
      throw error;
    }
  }

  // Função para adicionar badge
  async function earnBadge(badgeType: string) {
    if (!user) return;

    try {
      const badge = await addBadge(user.id, badgeType);
      setBadges(prev => [...prev, badge]);
      return badge;
    } catch (error) {
      console.error('Erro ao adicionar badge:', error);
    }
  }

  // Função para salvar mensagem do chat
  async function saveMessage(role: 'user' | 'assistant', content: string) {
    if (!user) throw new Error('Usuário não autenticado');

    try {
      const message = await saveChatMessage(user.id, role, content);
      setChatHistory(prev => [...prev, message]);
      return message;
    } catch (error) {
      console.error('Erro ao salvar mensagem:', error);
      throw error;
    }
  }

  // Função para atualizar progresso do checklist
  async function updateProgress(checklistType: string, stepIndex: number, completed: boolean) {
    if (!user) throw new Error('Usuário não autenticado');

    try {
      await updateChecklistStep(user.id, checklistType, stepIndex, completed);
    } catch (error) {
      console.error('Erro ao atualizar progresso:', error);
      throw error;
    }
  }

  // Função para carregar progresso do checklist
  async function loadProgress(checklistType: string) {
    if (!user) return [];

    try {
      return await getChecklistProgress(user.id, checklistType);
    } catch (error) {
      console.error('Erro ao carregar progresso:', error);
      return [];
    }
  }

  return {
    user,
    profile,
    badges,
    chatHistory,
    loading,
    createProfile,
    changePlan,
    earnBadge,
    saveMessage,
    updateProgress,
    loadProgress
  };
}
