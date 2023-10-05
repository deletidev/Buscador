import React from 'react';

import { path } from '@/core';
import { RickLayout } from '@/layout';
import { RickDetailContainer } from '@/pods';

export const RickDetailScene: React.FC = () => {
  return (
    <RickLayout rute={path.SEARCHRICK}>
      <RickDetailContainer></RickDetailContainer>
    </RickLayout>
  );
};
