import React from 'react';

import { useGithubContext, path } from '@/core';
import { AppLayout } from '@/layout';
import { GithubDetailContainer } from '@/pods';

export const GithubDetailScene: React.FC = () => {
  const { github } = useGithubContext();
  return (
    <AppLayout rute={path.SEARCHGITHUB} company={github.company}>
      <GithubDetailContainer></GithubDetailContainer>
    </AppLayout>
  );
};
