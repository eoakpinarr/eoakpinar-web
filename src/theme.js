import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Ana mavi ton
    },
    secondary: {
      main: '#757575', // Ana pembe ton
    },
  },
  
});

export default theme;
