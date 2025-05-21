import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  IconButton,
  Divider,
  useTheme
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Facebook as FacebookIcon, 
  Instagram as InstagramIcon, 
  Twitter as TwitterIcon, 
  LinkedIn as LinkedInIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Staten Island Implant Dr
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Dr. Greg Pedro provides expert dental implant services with a focus on patient comfort and exceptional results.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="inherit" aria-label="Facebook" component="a" href="https://facebook.com" target="_blank">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram" component="a" href="https://instagram.com/GregPedroMD" target="_blank">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter" component="a" href="https://twitter.com" target="_blank">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn" component="a" href="https://linkedin.com" target="_blank">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {['Home', 'Services', 'Treatment Options', 'About', 'Contact'].map((text) => (
                <Box component="li" key={text} sx={{ mb: 1 }}>
                  <Link 
                    component={RouterLink} 
                    to={`/${text === 'Home' ? '' : text.toLowerCase().replace(' ', '-')}`} 
                    color="inherit" 
                    underline="hover"
                  >
                    {text}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {['Dental Implants', 'Implant Restoration', 'Full Mouth Reconstruction', 'Cosmetic Dentistry', 'Preventive Care'].map((text) => (
                <Box component="li" key={text} sx={{ mb: 1 }}>
                  <Link 
                    component={RouterLink} 
                    to={`/services#${text.toLowerCase().replace(/\s+/g, '-')}`} 
                    color="inherit" 
                    underline="hover"
                  >
                    {text}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                4300 Hylan Blvd, Staten Island, NY 10312
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Link href="tel:+1234567890" color="inherit" underline="hover">
                (123) 456-7890
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Link href="mailto:info@statenislandimplantdr.com" color="inherit" underline="hover">
                info@statenislandimplantdr.com
              </Link>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', my: 3 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Typography variant="body2" sx={{ mb: { xs: 2, md: 0 } }}>
            © {currentYear} Staten Island Implant Dr. All rights reserved.
          </Typography>
          <Box>
            <Link component={RouterLink} to="/privacy-policy" color="inherit" underline="hover" sx={{ mr: 2 }}>
              Privacy Policy
            </Link>
            <Link component={RouterLink} to="/terms-of-service" color="inherit" underline="hover">
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
