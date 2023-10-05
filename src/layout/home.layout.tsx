import React from 'react';

import { Container } from '@mui/material';

import { FooterComponent } from './components';
import { center } from './layout.styles';

interface Props {
  children: React.ReactNode;
}

export const HomeLayout: React.FC<Props> = props => {
  const { children } = props;
  return (
    <div css={center}>
      <Container
        component="main"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2
        }}
      >
        {children}
      </Container>
      <FooterComponent></FooterComponent>
    </div>
  );
};
