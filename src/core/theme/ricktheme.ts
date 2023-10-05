import { createTheme } from '@mui/material/styles';

export const rickTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#02B0C8'
    },
    secondary: {
      main: '#6FE335'
    },
    background: {
      paper: '#02330f',
      default: '#0E1B0E'
    },
    text: {
      primary: '#efefef',
      secondary: '#2f2f2f'
    },
    divider: 'rgba(152,29,29,0.65)'
  },
  typography: {
    fontFamily: 'Orbitron',
    button: {
      fontSize: '1rem',
      fontWeight: 600,
      letterSpacing: '1px'
    },
    fontSize: 16,
    body1: { letterSpacing: '1px' },

    h1: {
      fontSize: '4rem'
    },
    h3: {
      fontSize: '2.5rem'
    }
  },
  spacing: 8,
  shape: {
    borderRadius: 0
  }
});

// export const ricktheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#21f3e3'
//     },
//     secondary: {
//       main: 'rgb(230, 155, 253)'
//     },
//     background: {
//       paper: 'green',
//       default: 'green'
//     },
//     text: {
//       primary: 'red'
//     }
//   },
//   typography: {
//     fontFamily: 'Noto Sans Mono',
//     button: {
//       fontSize: '1rem',
//       fontWeight: 800,
//       textTransform: 'none',
//       letterSpacing: 1.1
//     },
//     fontSize: 16,
//     h1: {
//       fontSize: '1.75rem',
//       fontWeight: 700
//     }
//   },
//   spacing: 10,
//   shape: {
//     borderRadius: 5
//   }
// });
