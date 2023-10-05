import { Link } from 'react-router-dom';
import { path } from '@/core/router/const';

import { Box, Button } from '@mui/material';

const ulStyles = {
  display: 'flex',
  justifyContent: 'center',
  gap: 2,
  flexWrap: 'wrap'
};

export const MenuComponent: React.FC = () => {
  return (
    <nav>
      <Box component="ul" sx={ulStyles}>
        <li>
          <Button component={Link} to={path.SEARCHGITHUB} variant="contained">
            Buscar en Github
          </Button>
        </li>
        <li>
          <Button
            component={Link}
            color="secondary"
            to={path.SEARCHRICK}
            variant="contained"
          >
            Buscar en Rick y Morty
          </Button>
        </li>
      </Box>
    </nav>
  );
};
