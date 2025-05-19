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
  ListItemText, 
  useMediaQuery, 
  Container,
  useTheme
} from '@mui/material';
import { Menu as MenuIcon, Phone as PhoneIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Services', path: '/services' },
    { text: 'Yomi Technology', path: '/yomi-technology' },
    { text: 'Treatment Options', path: '/treatment-options' },
    { text: 'About', path: '/about' },
    { text: 'Patient Resources', path: '/resources' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(12px)',
          borderRadius: '0 0 20px 20px',
          margin: { xs: '0 0', md: '0 24px' },
          maxWidth: { md: 'calc(100% - 48px)' },
          top: { xs: 0, md: '16px' },
          boxShadow: '0 8px 32px 0 rgba(11,132,255,0.08)',
          border: '1px solid rgba(255,255,255,0.6)',
          borderTop: 'none',
          zIndex: 1100,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 70, md: 90 }, px: { xs: 2, md: 3 } }}>
            <Typography
              variant="h5"
              component={RouterLink}
              to="/"
              sx={{
                mr: 4,
                fontWeight: 800,
                background: 'linear-gradient(90deg, #0B84FF 0%, #6C2FF2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '1px',
                textDecoration: 'none',
                fontFamily: 'Montserrat, Roboto, Helvetica, Arial, sans-serif',
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-5px',
                  left: '0',
                  width: '40%',
                  height: '3px',
                  background: 'linear-gradient(90deg, #00F5D4 0%, rgba(0,245,212,0) 100%)',
                  borderRadius: '4px',
                }
              }}
            >
              Dr. Greg Pedro
            </Typography>

            {/* Mobile menu icon and logo */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  mr: 2,
                  color: '#0B84FF',
                  '&:hover': {
                    background: 'rgba(11,132,255,0.08)'
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            
            {/* Desktop navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto', alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    mx: 1.5,
                    py: 1,
                    px: 1.5,
                    color: '#1A1E35',
                    fontWeight: 500,
                    position: 'relative',
                    fontSize: '0.95rem',
                    letterSpacing: '0.3px',
                    transition: 'all 0.3s',
                    '&:hover': {
                      background: 'rgba(11,132,255,0.06)',
                      color: '#0B84FF',
                      transform: 'translateY(-2px)'
                    },
                    '&.active': {
                      color: '#0B84FF',
                      fontWeight: 600,
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '60%',
                        height: '3px',
                        background: 'linear-gradient(90deg, #0B84FF 0%, #6C2FF2 100%)',
                        borderRadius: '4px',
                      }
                    },
                    ...(item.text === 'Yomi Technology' && {
                      background: 'rgba(0,245,212,0.1)',
                      color: '#00a890',
                      fontWeight: 600,
                      borderRadius: '30px',
                      px: 2,
                      '&:before': {
                        content: '""',
                        display: 'inline-block',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#00F5D4',
                        marginRight: '6px',
                        boxShadow: '0 0 8px #00F5D4',
                      },
                      '&:hover': {
                        background: 'rgba(0,245,212,0.18)',
                        color: '#007c68',
                        transform: 'translateY(-2px)'
                      }
                    })
                  }}
                >
                  {item.text}
                </Button>
              ))}
              <Button
                variant="contained"
                href="tel:+1234567890"
                endIcon={<PhoneIcon fontSize="small" />}
                sx={{
                  ml: 3,
                  borderRadius: '30px',
                  background: 'linear-gradient(90deg, #00F5D4 0%, #2CE69B 100%)',
                  color: '#1A1E35',
                  fontWeight: 600,
                  px: 3,
                  py: 1.2,
                  boxShadow: '0 8px 25px rgba(0,245,212,0.25)',
                  '&:hover': {
                    boxShadow: '0 10px 30px rgba(0,245,212,0.35)',
                    transform: 'translateY(-2px)',
                    background: 'linear-gradient(90deg, #2CE69B 0%, #00F5D4 100%)',
                  }
                }}
              >
                Book Now
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '0 20px 20px 0',
            boxShadow: '10px 0 60px rgba(108,47,242,0.08)',
            border: '1px solid rgba(230,231,249,0.7)',
            borderLeft: 'none',
          },
        }}
      >
        <Box sx={{ py: 5, px: 3 }}>
          {/* Drawer Header with Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, ml: 1 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(90deg, #0B84FF 0%, #6C2FF2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'Montserrat, sans-serif',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-5px',
                  left: '0',
                  width: '40%',
                  height: '3px',
                  background: 'linear-gradient(90deg, #00F5D4 0%, rgba(0,245,212,0) 100%)',
                  borderRadius: '4px',
                }
              }}
            >
              Dr. Greg Pedro
            </Typography>
          </Box>
            
          {/* Mobile Yomi Tag */}
          <Box 
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(0,245,212,0.1)',
              py: 1.2,
              px: 2.5,
              borderRadius: '30px',
              mb: 3,
              ml: 1,
              width: 'fit-content',
              boxShadow: '0 4px 20px rgba(0,245,212,0.15)',
              border: '1px solid rgba(0,245,212,0.2)',
            }}
          >
            <Box 
              component="span"
              sx={{ 
                width: 8, 
                height: 8, 
                borderRadius: '50%', 
                background: '#00F5D4',
                boxShadow: '0 0 8px #00F5D4',
                mr: 1,
                animation: 'pulse 2s infinite',
                '@keyframes pulse': {
                  '0%': { opacity: 0.6, transform: 'scale(0.8)' },
                  '50%': { opacity: 1, transform: 'scale(1.2)' },
                  '100%': { opacity: 0.6, transform: 'scale(0.8)' },
                }
              }}
            />
            <Typography
              variant="caption"
              sx={{
                color: '#00866e',
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
              }}
            >
              Exclusive Yomi Technology
            </Typography>
          </Box>
            
          {/* Menu Items */}
          <List sx={{ mt: 1 }}>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
                <Button
                  component={RouterLink}
                  to={item.path}
                  fullWidth
                  sx={{
                    justifyContent: 'flex-start',
                    color: '#1A1E35',
                    fontWeight: 500,
                    fontFamily: 'Montserrat',
                    fontSize: '1rem',
                    px: 3,
                    py: 1.5,
                    borderRadius: '12px',
                    textAlign: 'left',
                    transition: 'all 0.2s',
                    '&:hover': {
                      background: 'rgba(11,132,255,0.06)',
                      color: '#0B84FF',
                      transform: 'translateX(5px)'
                    },
                    ...(item.text === 'Yomi Technology' && {
                      background: 'rgba(0,245,212,0.1)',
                      color: '#00a890',
                      fontWeight: 600,
                      '&:hover': {
                        background: 'rgba(0,245,212,0.18)',
                        color: '#007c68',
                        transform: 'translateX(5px)'
                      }
                    })
                  }}
                  onClick={handleDrawerToggle}
                >
                  {item.text}
                </Button>
              </ListItem>
            ))}
            <ListItem sx={{ mt: 2 }}>
              <Button
                variant="contained"
                fullWidth
                startIcon={<PhoneIcon />}
                href="tel:+1234567890"
                sx={{
                  py: 1.5,
                  borderRadius: '16px',
                  background: 'linear-gradient(90deg, #00F5D4 0%, #2CE69B 100%)',
                  color: '#1A1E35',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  letterSpacing: '0.3px',
                  boxShadow: '0 8px 25px rgba(0,245,212,0.25)',
                  textTransform: 'none',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #2CE69B 0%, #00F5D4 100%)',
                    boxShadow: '0 10px 30px rgba(0,245,212,0.35)',
                  },
                }}
                onClick={handleDrawerToggle}
              >
                Book Now
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
