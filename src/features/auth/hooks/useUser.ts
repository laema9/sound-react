import { useAuthContext } from '../contexts/AuthProvider';

export const useUser = () => {
  const { user } = useAuthContext();
  return user;
};
