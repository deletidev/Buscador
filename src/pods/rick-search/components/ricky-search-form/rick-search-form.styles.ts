import { css } from '@mui/material';

export const input = {
  width: '100%',
  backgroundColor: 'common.white',
  border: '6px solid',
  borderColor: 'primary.main',
  position: 'relative',
  marginTop: 2,
  marginBottom: { xs: 1.5, sm: 2 }
};

export const inputIcon = {
  height: 'fit-content',
  backgroundColor: 'transparent',
  border: 'none',
  lineHeight: 1.8,
  cursor: 'pointer'
};

export const inputAdornment = {
  position: 'relative',
  bottom: { xs: '15px', sm: '22.5px' },
  left: '-11px',
  zIndex: 1
};

export const imgSearch = css`
  width: 76px;
  @media screen and (min-width: 600px) {
    width: 90px;
  }
`;
