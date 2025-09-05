import { Navigate, Route, Routes } from "react-router-dom";
import AuthCard from "./components/auth-card";
import MainLayout from "./components/layout/main-layout";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import { ProtectedRoute } from "./routing/protected-routes";

export function App() {
  return (

    <Routes>
      {/* Public routes */}
      <Route path="/auth" element={<AuthCard />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/home"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
      </Route>

      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

