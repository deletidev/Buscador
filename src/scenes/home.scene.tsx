import React from 'react';

import { myTheme, useMyThemeContext } from '@/core';
import { HomeLayout } from '@/layout';
import { ContainerHome } from '@/pods';

export const HomeScene: React.FC = () => {
  const { setTheme } = useMyThemeContext();
  React.useEffect(() => {
    setTheme(myTheme);
  }, []);
  return (
    <HomeLayout>
      <ContainerHome></ContainerHome>
    </HomeLayout>
  );
};
