import React from 'react';
import AppRouter from './router';
import { AuthProvider } from '@/features/auth/contexts/AuthProvider';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
