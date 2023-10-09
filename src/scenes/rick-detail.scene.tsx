import React from 'react';

import { path, rickTheme, useMyThemeContext } from '@/core';
import { RickLayout } from '@/layout';
import { RickDetailContainer } from '@/pods';

export const RickDetailScene: React.FC = () => {
  const { setTheme } = useMyThemeContext();
  React.useEffect(() => {
    setTheme(rickTheme);
  }, []);

  return (
    <RickLayout rute={path.SEARCHRICK}>
      <RickDetailContainer></RickDetailContainer>
    </RickLayout>
  );
};
