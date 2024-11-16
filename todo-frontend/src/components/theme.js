import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#387478', 
    },
    secondary: {
      main: '#629584', 
    },
    background: {
      default: '#E2F1E7', 
      paper: '#243642', // Card color
    },
    text: {
      primary: '#243642', // Main text color
      secondary: '#629584', // Muted text
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default theme;
