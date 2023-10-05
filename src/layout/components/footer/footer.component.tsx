import { footerCss } from './footer.component.styles';
import { Box, Container } from '@mui/material';

export const FooterComponent: React.FC = () => {
  return (
    <Box component="footer" sx={footerCss} bgcolor={'primary.dark'}>
      <Container maxWidth="xl">
        <p>Desarrollado con React, TypeScrip, MUI, Vite</p>
      </Container>
    </Box>
  );
};
