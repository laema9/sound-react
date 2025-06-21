import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useRequireAuth } from "../hooks/useRequireAuth";

/**
 * Usage :
 * <ProtectedRoute><DashboardPage /></ProtectedRoute>
 */
export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { session, loading } = useRequireAuth();

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
