
import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#00e5ff',
    },
    error: {
      main: '#1de9b6',
    },
    background: {
      default: '#121212',
      secondary: '#212121',
    },
    text: {
      primary: '#00e5ff',
      secondary: '#1de9b6',
    },
    
  },
});

export default theme;