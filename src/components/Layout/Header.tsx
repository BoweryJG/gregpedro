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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Dr. Greg Pedro
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            button 
            component={RouterLink} 
            to={item.path} 
            key={item.text}
            sx={{ textAlign: 'center' }}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem>
          <Button 
            variant="contained" 
            color="secondary" 
            fullWidth
            startIcon={<PhoneIcon />}
            href="tel:+1234567890"
          >
            Book Now
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="default" elevation={2} sx={{ backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'primary.main',
                textDecoration: 'none',
                flexGrow: { xs: 0, md: 1 }
              }}
            >
              Staten Island Implant Dr
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component={RouterLink}
                to="/"
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontWeight: 700,
                  color: 'primary.main',
                  textDecoration: 'none',
                  alignItems: 'center'
                }}
              >
                Dr. Greg Pedro
              </Typography>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto' }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  sx={{ 
                    mx: 1, 
                    color: 'text.primary',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'transparent'
                    }
                  }}
                >
                  {item.text}
                </Button>
              ))}
              <Button 
                variant="contained" 
                color="secondary"
                startIcon={<PhoneIcon />}
                sx={{ ml: 2 }}
                href="tel:+1234567890"
              >
                Book Now
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
