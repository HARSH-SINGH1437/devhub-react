// src/hooks/useAuth.ts
import { useEffect, useState } from "react"
import { useAuthStore } from "@/stores/auth"
import { fetchMe } from "@/api/auth"

export function useAuth() {
  const { user, setUser, clearUser } = useAuthStore()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadUser() {
      try {
        const me = await fetchMe()
        setUser(me)
      } catch (err) {
        clearUser()
      } finally {
        setLoading(false)
      }
    }
    loadUser()
  }, [setUser, clearUser])

  return { user, loading, setUser, clearUser }
}
