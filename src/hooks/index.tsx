import React from 'react';
import { AuthProvider } from './useAuth';
import { ConfirmationServiceProvider } from './useConfirmation';
import { DarkModeProvider } from './useDarkMode';

const HooksProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <DarkModeProvider>{children}</DarkModeProvider>
    </AuthProvider>
  );
};

export default HooksProvider;
