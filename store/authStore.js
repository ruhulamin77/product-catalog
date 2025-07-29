import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  isLoggedIn: false,

  checkAuth: async () => {
    try {
      const res = await fetch('/api/me', { credentials: 'include' });
      set({ isLoggedIn: res.ok });
    } catch {
      set({ isLoggedIn: false });
    }
  },

  logout: async () => {
    await fetch('/api/logout', {
      method: 'POST',
      credentials: 'include',
    });
    set({ isLoggedIn: false });
  },
}));
