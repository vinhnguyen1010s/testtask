import { red, teal } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

const themeDefault = createTheme({
  palette: {
    breakpoints: {
      values: {
        xs: 0,
        sm: 640, // Handset portrait  (small, medium, large) | handset landscape (small)
        md: 960, // handset landcapse (medium, large) | tablet portrait (smallm large)
        lg: 1280, // tablet landscape (small, large)
        xl: 1600, // large desktops
      },
    },

    primary: {
      main: red[400],
      dark: red[900],
      light: red[200],
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: teal[500],
      dark: teal[900],
      light: teal[300],
      contrastText: '#FFFFFF',
    },
  },

  typography: {
    body1: {
      fontWeight: 400,
      fontSize: '1.25rem',
    },
  },
});

export default themeDefault;
