import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <CssBaseline />
      <Header />
      <Box component="main" sx={{ 
        flexGrow: 1,
        width: '100%',
        pt: 2,
        pb: 4
      }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
