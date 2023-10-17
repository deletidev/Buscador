import { CssBaseline } from '@mui/material';

import {
  AppRouter,
  MyThemeProvider,
  GithubProvider,
  SearchCharacterProvider
} from '@/core';

export const App = () => {
  return (
    <MyThemeProvider>
      <CssBaseline />
      <SearchCharacterProvider>
        <GithubProvider>
          <AppRouter />
        </GithubProvider>
      </SearchCharacterProvider>
    </MyThemeProvider>
  );
};
