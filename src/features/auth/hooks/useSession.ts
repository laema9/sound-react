import { useAuthContext } from '../contexts/AuthProvider';

export const useSession = () => {
  const { session } = useAuthContext();
  return session;
};
