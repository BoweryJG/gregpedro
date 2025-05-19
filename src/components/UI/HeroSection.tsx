import React from 'react';
import { Box, Typography, Button, Container, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage = '/images/hero-background.jpg',
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '75vh', md: '85vh' },
        maxHeight: '850px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundImage: `linear-gradient(120deg, rgba(11,132,255,0.90) 0%, rgba(108,47,242,0.85) 100%), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        borderBottom: '6px solid #00F5D4',
        boxShadow: '0 10px 50px 0 rgba(11,132,255,0.15)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 70% 30%, rgba(0,245,212,0.12) 0%, rgba(0,0,0,0) 50%)',
          pointerEvents: 'none',
        },
      }}  
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={6}>
            <Box sx={{ p: { xs: 2, md: 4 } }}>
              {/* Yomi Technology Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Box 
                  className="yomi-badge"
                  sx={{ 
                    display: 'inline-flex',
                    mb: 3,
                    background: 'linear-gradient(90deg, rgba(0,245,212,0.9) 0%, rgba(0,245,212,0.2) 100%)',
                    color: '#1A1E35',
                    fontWeight: 700,
                    padding: '6px 14px',
                    borderRadius: '20px',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.85rem',
                    letterSpacing: '0.5px',
                    boxShadow: '0px 4px 20px rgba(0,245,212,0.25)',
                    border: '1px solid rgba(0,245,212,0.4)',
                    textTransform: 'uppercase',
                  }}
                >
                  <Box 
                    component="span" 
                    sx={{ 
                      width: 8, 
                      height: 8, 
                      borderRadius: '50%', 
                      background: '#00F5D4',
                      boxShadow: '0 0 10px #00F5D4',
                      animation: 'pulse 2s infinite',
                      '@keyframes pulse': {
                        '0%': { opacity: 0.6, transform: 'scale(0.8)' },
                        '50%': { opacity: 1, transform: 'scale(1.2)' },
                        '100%': { opacity: 0.6, transform: 'scale(0.8)' },
                      }
                    }}
                  />
                  Exclusive Yomi Robotic Technology
                </Box>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{ 
                    mb: 2,
                    fontWeight: 800, 
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.8rem' },
                    background: 'linear-gradient(90deg, #FFFFFF 30%, rgba(255,255,255,0.8) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 5px 30px rgba(0,0,0,0.2)',
                    letterSpacing: '-0.5px',
                    lineHeight: 1.1,
                  }}
                >
                  {title}
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ 
                    mb: 4, 
                    fontWeight: 400,
                    fontSize: { xs: '1.1rem', md: '1.5rem' },
                    color: 'rgba(255,255,255,0.9)',
                    textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                    maxWidth: '600px',
                    lineHeight: 1.6,
                    letterSpacing: '0.3px',
                  }}
                >
                  {subtitle}
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {ctaText && ctaLink && (
                  <Button
                    variant="contained"
                    size="large"
                    href={ctaLink}
                    sx={{
                      mt: 3,
                      px: 5,
                      py: 1.6,
                      fontWeight: 700,
                      borderRadius: 50,
                      fontSize: '1.1rem',
                      background: 'linear-gradient(90deg, #00F5D4 0%, #2CE69B 100%)',
                      color: '#1A1E35',
                      textTransform: 'none',
                      boxShadow: '0 6px 25px rgba(0,245,212,0.4)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
                        transform: 'translateX(-100%)',
                        transition: 'transform 0.6s',
                      },
                      '&:hover': {
                        background: 'linear-gradient(90deg, #2CE69B 0%, #00F5D4 100%)',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 10px 30px rgba(0,245,212,0.5)',
                        '&::after': {
                          transform: 'translateX(100%)',
                        },
                      },
                      transition: 'all 0.3s',
                    }}
                  >
                    {ctaText}
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
