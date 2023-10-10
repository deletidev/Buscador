import { createTheme } from '@mui/material/styles';

export const myTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#21f3e3'
    },
    secondary: {
      main: 'rgb(230, 155, 253)'
    },
    background: {
      paper: '#020229',
      default: '#000023'
    },
    text: {
      primary: '#efefef'
    }
  },
  typography: {
    fontFamily: 'Noto Sans Mono',
    button: {
      fontSize: '1rem',
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 1.1
    },
    fontSize: 16,
    h1: {
      fontSize: '1.75rem',
      fontWeight: 700
    }
  },
  spacing: 10,
  shape: {
    borderRadius: 5
  }
});
