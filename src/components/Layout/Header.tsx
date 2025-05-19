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
  useMediaQuery, 
  Container,
  useTheme
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Phone as PhoneIcon,
  HomeOutlined,
  MedicalServicesOutlined,
  PrecisionManufacturingOutlined,
  HealingOutlined,
  InfoOutlined,
  MenuBookOutlined,
  MailOutline,
} from '@mui/icons-material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

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

  const menuItems: MenuItemType[] = [
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
                mr: 2,
                height: '100%',
                alignItems: 'center',
                flexWrap: 'wrap',
                minWidth: 0,
                overflow: 'hidden',
                gap: 0.5,
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    mx: 0.25,
                    px: 0.75,
                    py: 0,
                    minWidth: 0,
                    height: '42px',
                    color: '#1E293B',
                    fontWeight: 400,
                    fontSize: '0.92rem',
                    background: 'transparent',
                    borderRadius: 0,
                    letterSpacing: '0.04em',
                    boxShadow: 'none',
                    transition: 'color 0.2s',
                    position: 'relative',
                    textTransform: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: '50%',
                      bottom: 0,
                      width: 0,
                      height: '2px',
                      background: theme.palette.secondary.main,
                      transition: 'width 0.2s',
                      transform: 'translateX(-50%)',
                    },
                    '&:hover': {
                      color: theme.palette.primary.main,
                      background: 'transparent',
                      '&::after': {
                        width: '60%',
                      },
                    },
                    ...(pathname === item.path && {
                      color: theme.palette.primary.main,
                      fontWeight: 500,
                      '&::after': {
                        width: '60%',
                      },
                    }),
                    ...(item.text === 'Yomi Technology' && {
                      color: theme.palette.secondary.main,
                      fontWeight: 500,
                      letterSpacing: '0.06em',
                    })
                  }}
                >
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      minWidth: 28,
                      minHeight: 28,
                      borderRadius: '50%',
                      background: '#F3F4F6', // Light grey background for the icon circle
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <item.icon style={{ color: '#A0AEC0', fontSize: 18 }} />
                  </Box>
                  {item.text}
                </Button>
              ))}
            </Box>

            {/* Call to Action Button */}
            <Button
              variant="contained"
              color="secondary"
              href="tel:+17182274447" // Direct telephone link
              sx={{
                display: { xs: 'none', md: 'inline-flex' },
                fontWeight: 600,
                fontSize: '0.875rem',
                letterSpacing: '0.05em',
                py: 1.25,
                px: 2.5,
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
                }
              }}
            >
              Call (718) 227-4447
            </Button>

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
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component={RouterLink}
                  to={item.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    py: 1.5,
                    color: item.text === 'Yomi Technology' ? theme.palette.secondary.main : '#1E293B',
                    fontWeight: item.text === 'Yomi Technology' ? 600 : 500,
                    fontSize: '0.9rem',
                    '&:hover': {
                      backgroundColor: 'rgba(0,0,0,0.02)',
                    },
                    borderBottom: '1px solid rgba(229,231,235,0.5)',
                  }}
                >
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      minWidth: 28,
                      minHeight: 28,
                      borderRadius: '50%',
                      background: '#F3F4F6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 1.5,
                    }}
                  >
                    <item.icon style={{ color: '#A0AEC0', fontSize: 18 }} />
                  </Box>
                  {item.text}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          
          {/* Mobile Call Button */}
          <Box sx={{ mt: 2, px: 1 }}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              href="tel:+17182274447"
              startIcon={<PhoneIcon />}
              sx={{
                py: 1.25,
                fontWeight: 600,
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
              }}
            >
              Call Us Today
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
