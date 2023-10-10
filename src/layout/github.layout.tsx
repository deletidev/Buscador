import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Box, Container, Typography, Link } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { center, header } from './layout.styles';
import { FooterComponent } from './components';

interface Props {
  children: React.ReactNode;
  rute: string;
  company?: string;
}

export const AppLayout: React.FC<Props> = props => {
  const { children, rute, company } = props;
  return (
    <div css={center}>
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
            Back
          </Link>
          {company && (
            <Typography
              component="p"
              color="common.white"
              variant="body2"
            >{`Company:${company}`}</Typography>
          )}
        </Container>
      </Box>
      <Container
        component="main"
        maxWidth="md"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 2, sm: 3 }
        }}
      >
        {children}
      </Container>
      <FooterComponent></FooterComponent>
    </div>
  );
};
