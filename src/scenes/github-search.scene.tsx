import { path } from '@/core';
import { AppLayout } from '@/layout';
import { GithubSearchContainer } from '@/pods';

export const GithubSearchScene: React.FC = () => {
  return (
    <AppLayout rute={path.HOME}>
      <GithubSearchContainer></GithubSearchContainer>
    </AppLayout>
  );
};
