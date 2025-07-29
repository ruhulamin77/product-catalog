import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
  user: null,

  login: (token, user) => {
    console.log('token', user);
    localStorage.setItem('token', token);
    set({ token, user });
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ token: null, user: null });
  },
}));
