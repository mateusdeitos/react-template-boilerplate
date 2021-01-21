import React, { createContext, useCallback, useContext, useState } from 'react';

interface DarkModeContextData {
  toggleColorMode(): void;
  isDarkMode: boolean;
}

const DarkModeContext = createContext<DarkModeContextData>(
  {} as DarkModeContextData,
);

const DarkModeProvider: React.FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('isDarkMode') === 'S',
  );

  const toggleColorMode = useCallback(() => {
    localStorage.setItem('isDarkMode', isDarkMode ? 'N' : 'S');
    setIsDarkMode(() => !isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ toggleColorMode, isDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

function useDarkMode(): DarkModeContextData {
  return useContext(DarkModeContext);
}

export { DarkModeProvider, useDarkMode };
