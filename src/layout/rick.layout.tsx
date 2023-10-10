import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Box, Container, Link } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import logo from '@/assets/logo_rym.svg';

import { center, header, rick } from './layout.styles';

interface Props {
  children: React.ReactNode;
  rute: string;
}

export const RickLayout: React.FC<Props> = props => {
  const { children, rute } = props;
  return (
    <div css={[center, rick]}>
      <Box component="header" sx={header} color="common.white">
        <Container
          maxWidth="xl"
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Link
            component={RouterLink}
            to={rute}
            color="common.white"
            variant="body2"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <ArrowBackIosNewIcon fontSize="inherit" />
            <span>Back</span>
          </Link>

          <img src={logo} alt="Rick and Morty logo" height="38px" />
        </Container>
      </Box>
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 2, sm: 3 },
          paddingLeft: { xs: 3, sm: 5 },
          paddingRight: { xs: 3, sm: 5 }
        }}
      >
        {children}
      </Container>
      <Box
        component="footer"
        sx={{
          color: 'common.white',
          width: '100%',
          paddingTop: 1.5,
          paddingBottom: 1.5,
          fontSize: 12,
          textAlign: 'left',
          marginTop: 2
        }}
        bgcolor={'common.black'}
      >
        <Container maxWidth="xl">
          <p>Desarrollado con React, TypeScrip, MUI, Vite</p>
        </Container>
      </Box>
    </div>
  );
};
