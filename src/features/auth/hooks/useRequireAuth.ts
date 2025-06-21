import { useAuthContext } from '../contexts/AuthProvider';

export const useRequireAuth = () => {
  const { session, loading } = useAuthContext();
  return { session, loading };
};
