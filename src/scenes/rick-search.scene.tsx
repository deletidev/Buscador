import React from 'react';

import { rickTheme, useMyThemeContext, path } from '@/core';
import { RickLayout } from '@/layout';
import { RickSearchContainer } from '@/pods';

export const RickSearchScene: React.FC = () => {
  const { setTheme } = useMyThemeContext();
  React.useEffect(() => {
    setTheme(rickTheme);
  }, []);
  return (
    <RickLayout rute={path.HOME}>
      <RickSearchContainer></RickSearchContainer>
    </RickLayout>
  );
};
