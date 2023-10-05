import React from 'react';

import { useProfileContext, path } from '@/core';
import { AppLayout } from '@/layout';
import { GithubDetailContainer } from '@/pods';

export const GithubDetailScene: React.FC = () => {
  const { userCompany } = useProfileContext();
  return (
    <AppLayout rute={path.SEARCHGITHUB} company={userCompany}>
      <GithubDetailContainer></GithubDetailContainer>
    </AppLayout>
  );
};
