import { createContext } from 'react';

type Theme = 'dark' | 'light';

export const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({
  theme: 'dark',
  toggleTheme: () => {},
});


