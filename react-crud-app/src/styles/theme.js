import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#161616',
      white: '#fff',
      darkTransparent: '#000000b8',
    },
  },
  typography: {
    fontFamily: 'Karla, sans-serif;',
    logoFont: 'Homemade Apple, cursive;',
  },
});

export default theme;
