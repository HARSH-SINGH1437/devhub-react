import { useAuth } from "@/hooks/useAuth"
import { Navigate, Outlet } from "react-router-dom"
import { LoadingSpinner } from "@/components/ui/loading"
export function ProtectedRoute() {
  const { user, loading } = useAuth()


  if (loading) return <LoadingSpinner size="lg" className="text-primary" />

  return user ? <Outlet /> : <Navigate to="/auth" replace />
}
