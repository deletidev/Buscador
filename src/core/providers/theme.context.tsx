import React from 'react';
import { Theme, ThemeProvider, createTheme } from '@mui/material';

import { myTheme } from '@/core';

interface ThemeContextModel {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
interface Props {
  children: React.ReactNode;
}

const MyThemeContext = React.createContext<ThemeContextModel>({
  theme: createTheme(),
  setTheme: (theme: Theme) => {}
});

export const MyThemeProvider: React.FC<Props> = props => {
  const { children } = props;
  const [theme, setTheme] = React.useState(myTheme);

  return (
    <MyThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MyThemeContext.Provider>
  );
};

export const useMyThemeContext = () => React.useContext(MyThemeContext);
