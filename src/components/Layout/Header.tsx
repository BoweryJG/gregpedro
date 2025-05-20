import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton,
  Container,
  useTheme
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  HomeOutlined,
  MedicalServicesOutlined,
  PrecisionManufacturingOutlined,
  HealingOutlined,
  InfoOutlined,
  MenuBookOutlined,
  MailOutline,
} from '@mui/icons-material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

// Define the menu item type
interface MenuItemType {
  text: string;
  path: string;
  icon: React.ElementType; // Changed from ReactElement to ElementType
}

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const { pathname } = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mainMenuItems: MenuItemType[] = [
  { text: 'Home', path: '/', icon: HomeOutlined },
  { text: 'Services', path: '/services', icon: MedicalServicesOutlined },
  { text: 'Contact', path: '/contact', icon: MailOutline },
];
const drawerMenuItems: MenuItemType[] = [
  { text: 'Home', path: '/', icon: HomeOutlined },
  { text: 'Services', path: '/services', icon: MedicalServicesOutlined },
  { text: 'Yomi Technology', path: '/yomi-technology', icon: PrecisionManufacturingOutlined },
  { text: 'Treatment Options', path: '/treatment-options', icon: HealingOutlined },
  { text: 'About', path: '/about', icon: InfoOutlined },
  { text: 'Patient Resources', path: '/patient-resources', icon: MenuBookOutlined },
  { text: 'Contact', path: '/contact', icon: MailOutline },
];

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          background: '#FFFFFF',
          borderBottom: '1px solid rgba(229,231,235,0.8)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          zIndex: 1100,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 74 }, p: 0 }}>
            {/* Logo and title */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
  <IconButton
    component={RouterLink}
    to="/"
    sx={{ p: 0, mr: 1, height: 48 }}
    disableRipple
    aria-label="Home"
  >
    <img
      src={logo}
      alt="Dr. Gregory Pedro Logo"
      style={{
        height: 60,
        width: 'auto',
        display: 'block',
        background: 'transparent',
        borderRadius: 0,
        boxShadow: 'none',
        objectFit: 'contain',
        mixBlendMode: 'multiply', // helps remove white backgrounds visually
        WebkitMaskImage: 'linear-gradient(black, black)', // fallback for masking
      }}
    />
  </IconButton>
  <Typography
    variant="h6"
    component={RouterLink}
    to="/"
    sx={{
      fontWeight: 600,
      color: theme.palette.primary.main,
      textDecoration: 'none',
      fontFamily: 'Montserrat, Roboto, Helvetica, Arial, sans-serif',
      fontSize: { xs: '1.1rem', md: '1.25rem' },
      letterSpacing: '-0.01em',
    }}
  >
    Dr. Greg Pedro
  </Typography>
  <Typography
    variant="caption"
    sx={{
      ml: 2,
      color: '#1E293B',
      opacity: 0.7,
      fontSize: '0.7rem',
      letterSpacing: '0.03em',
      fontWeight: 500,
      display: { xs: 'none', md: 'block' }
    }}
  >
    PROSTHODONTIST & IMPLANT SPECIALIST
  </Typography>
</Box>

            {/* Desktop navigation */}
            <Box 
  sx={{ 
    display: { xs: 'none', md: 'flex' }, 
    ml: 'auto',
    height: '100%',
    alignItems: 'center',
    minWidth: 0,
    overflow: 'hidden',
    gap: 3,
  }}
>
  {mainMenuItems.map((item) => (
    <Button
      key={item.text}
      component={RouterLink}
      to={item.path}
      sx={{
        px: 2.5,
        py: 0,
        minWidth: 0,
        height: '44px',
        color: '#1E293B',
        fontWeight: 500,
        fontSize: '1rem',
        background: 'transparent',
        borderRadius: 1,
        letterSpacing: '0.04em',
        boxShadow: 'none',
        transition: 'color 0.2s',
        textTransform: 'none',
        '&:hover': {
          color: theme.palette.primary.main,
          background: 'transparent',
        },
        ...(pathname === item.path && {
          color: theme.palette.primary.main,
          fontWeight: 700,
        })
      }}
    >
      {item.text}
    </Button>
  ))}
</Box>
  

            {/* Mobile Menu Icon */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, ml: 'auto' }}
            >
              <MenuIcon sx={{ fontSize: 28, color: '#334155' }} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        anchor="right"
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '80%', 
            maxWidth: '300px',
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon sx={{ color: '#4B5563' }} />
            </IconButton>
          </Box>
          
          <List>
  {drawerMenuItems.map((item) => (
    <ListItem key={item.text} disablePadding>
      <ListItemButton
        component={RouterLink}
        to={item.path}
        onClick={handleDrawerToggle}
        sx={{
          py: 1.5,
          color: item.text === 'Yomi Technology' ? theme.palette.secondary.main : '#1E293B',
          fontWeight: item.text === 'Yomi Technology' ? 700 : 500,
          fontSize: '1rem',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.02)',
          },
          borderBottom: '1px solid rgba(229,231,235,0.5)',
        }}
      >
        {item.text}
      </ListItemButton>
    </ListItem>
  ))}
</List>
          
          
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
