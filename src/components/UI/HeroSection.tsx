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
        height: { xs: '70vh', md: '80vh' },
        maxHeight: '800px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={6}>
            <Box sx={{ p: { xs: 2, md: 4 } }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                  }}
                >
                  {title}
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    fontWeight: 400,
                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                  }}
                >
                  {subtitle}
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  href={ctaLink}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    boxShadow: theme.shadows[4],
                  }}
                >
                  {ctaText}
                </Button>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
