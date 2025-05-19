import React from 'react';
import { Box, Typography, Button, Container, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage = '/images/hero-bg.jpg',
  title = 'Precision Dental Implants With Yomi Robotics',
  subtitle = 'Experience the unmatched accuracy of Yomi robotic-guided dental implant surgery, available exclusively at our Staten Island practice.',
  ctaText = 'Schedule a Consultation',
  ctaLink = '/contact',
}) => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '60vh', md: '70vh' },
        maxHeight: '600px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundImage: `linear-gradient(120deg, rgba(11,59,96,0.92) 0%, rgba(0,95,89,0.88) 100%), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
      }}  
    >
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12} md={9} lg={7}>
            <Box sx={{ pt: { xs: 4, md: 0 } }}>
              {/* Yomi Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Box 
                  className="yomi-badge"
                  sx={{ 
                    display: 'inline-flex',
                    mb: 3,
                    background: 'rgba(255,255,255,0.12)',
                    color: '#FFFFFF',
                    fontWeight: 500,
                    padding: '6px 12px',
                    borderRadius: '2px',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.7rem',
                    letterSpacing: '0.05em',
                    position: 'relative',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  <Box 
                    component="span" 
                    sx={{ 
                      width: 4, 
                      height: 4, 
                      borderRadius: '50%', 
                      background: theme.palette.accent.main,
                    }}
                  />
                  STATEN ISLAND'S EXCLUSIVE YOMI PROVIDER
                </Box>
              </motion.div>
              
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Typography
                  variant="h1"
                  sx={{ 
                    mb: 2,
                    fontWeight: 600, 
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    color: '#FFFFFF',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.2,
                  }}
                >
                  {title}
                </Typography>
              </motion.div>
              
              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ 
                    mb: 4,
                    fontWeight: 400, 
                    fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' },
                    color: 'rgba(255,255,255,0.85)',
                    maxWidth: '600px',
                    lineHeight: 1.5,
                  }}
                >
                  {subtitle}
                </Typography>
              </motion.div>
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {ctaLink && (
                  <Button
                    variant="contained"
                    size="large"
                    href={ctaLink}
                    sx={{
                      backgroundColor: theme.palette.accent.main,
                      color: theme.palette.accent.contrastText,
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      px: 3,
                      py: 1.2,
                      borderRadius: 1,
                      boxShadow: 'none',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: theme.palette.accent.dark,
                        boxShadow: '0 2px 8px rgba(185,148,84,0.2)',
                      },
                    }}
                  >
                    Schedule a Yomi Consultation
                  </Button>
                )}
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
