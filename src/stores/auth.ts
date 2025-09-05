// src/stores/auth.ts
import { create } from "zustand"

interface User {
  id: string
  username: string
  avatarUrl?: string
}

interface AuthState {
  user: User | null
  setUser: (user: User | null) => void
  clearUser: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}))
