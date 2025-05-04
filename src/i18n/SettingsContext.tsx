import AsyncStorage from '@react-native-async-storage/async-storage';
import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {darkTheme, lightTheme} from '../theme';

// Define the types for the SettingsContext
type SettingsContextType = {
  theme: typeof DefaultTheme | typeof DarkTheme;
  toggleTheme: () => void;
  isDark: boolean;
};

// Helper function to apply custom colors to the default themes
const applyCustomTheme = (
  theme: typeof DefaultTheme | typeof DarkTheme,
  customColors: typeof lightTheme | typeof darkTheme,
) => ({
  ...theme,
  colors: {
    ...theme.colors,
    background: customColors.background,
    text: customColors.text,
    primary: customColors.primary,
    notification: customColors.notification,
    border: customColors.border,
    card: customColors.card,
  },
});

// Create context with the specified types
const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined,
);

// Settings provider component
interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider = ({children}: SettingsProviderProps) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  // Load the stored theme preference from AsyncStorage when the app starts
  useEffect(() => {
    const loadThemePreference = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem('theme');
        if (storedTheme === 'dark') {
          setIsDark(true);
        } else {
          setIsDark(false);
        }
      } catch (error) {
        console.error('Failed to load theme preference:', error);
      }
    };

    loadThemePreference();
  }, []);

  // Function to toggle theme and save the preference
  const toggleTheme = async () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    try {
      await AsyncStorage.setItem('theme', newTheme ? 'dark' : 'light');
    } catch (error) {
      console.error('Failed to save theme preference:', error);
    }
  };

  // Apply the custom colors based on the current theme
  const theme = isDark
    ? applyCustomTheme(DarkTheme, darkTheme)
    : applyCustomTheme(DefaultTheme, lightTheme);

  return (
    <SettingsContext.Provider value={{theme, toggleTheme, isDark}}>
      {children}
    </SettingsContext.Provider>
  );
};

// Custom hook to access settings context
export const useSettingsContext = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error(
      'useSettingsContext must be used within a SettingsProvider',
    );
  }
  return context;
};
