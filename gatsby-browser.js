import './src/styles/global.css';
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./src/theme";
import Footer from './src/components/Footer/Footer';
import Navbar from './src/components/Navbar/Navbar';
import Box from '@mui/material/Box';
import FloatingActionButtons from './src/components/FloatingActionButtons/FloatingActionButtons';

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowX: 'hidden' }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          {element}
          <FloatingActionButtons />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};
