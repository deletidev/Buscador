import { CssBaseline } from '@mui/material';

import {
  AppRouter,
  MyThemeProvider,
  ProfileProvider,
  SearchCharacterProvider
} from '@/core';

export const App = () => {
  return (
    <MyThemeProvider>
      <CssBaseline />
      <SearchCharacterProvider>
        <ProfileProvider>
          <AppRouter />
        </ProfileProvider>
      </SearchCharacterProvider>
    </MyThemeProvider>
  );
};
