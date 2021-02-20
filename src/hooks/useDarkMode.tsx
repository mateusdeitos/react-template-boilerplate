import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ITheme } from '../themes/dto/ITheme';
import themes from '../themes/index';

interface DarkModeContextData {
  toggleColorMode(): void;
  isDarkMode: boolean;
  currentTheme: ITheme;
}

const DarkModeContext = createContext<DarkModeContextData>(
  {} as DarkModeContextData,
);

const DarkModeProvider: React.FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('isDarkMode') === 'S',
  );
  const [currentTheme, setCurrentTheme] = useState(() =>
    localStorage.getItem('isDarkMode') === 'S' ? themes.dark : themes.light,
  );

  useEffect(() => {
    if (isDarkMode) {
      setCurrentTheme(themes.dark);
    } else {
      setCurrentTheme(themes.light);
    }
  }, [isDarkMode]);

  const toggleColorMode = useCallback(() => {
    localStorage.setItem('isDarkMode', isDarkMode ? 'N' : 'S');
    setIsDarkMode(() => !isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider
      value={{
        toggleColorMode,
        isDarkMode,
        currentTheme,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

function useDarkMode(): DarkModeContextData {
  return useContext(DarkModeContext);
}

export { DarkModeProvider, useDarkMode };
