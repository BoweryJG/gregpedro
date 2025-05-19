import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Button, 
  Card, 
  CardContent,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import HeroSection from '../components/UI/HeroSection';
import ServiceCard from '../components/UI/ServiceCard';
import TestimonialCard from '../components/UI/TestimonialCard';
import { Link as RouterLink } from 'react-router-dom';

const HomePage: React.FC = () => {
  const theme = useTheme();

  // Sample services data
  const services = [
    {
      title: 'Dental Implants',
      description: 'Replace missing teeth with permanent, natural-looking dental implants that function just like your natural teeth.',
      image: '/images/services/dental-implants.jpg',
      link: '/services/dental-implants'
    },
    {
      title: 'Implant Restoration',
      description: 'Restore damaged implants with our expert care, ensuring your smile stays beautiful and functional.',
      image: '/images/services/implant-restoration.jpg',
      link: '/services/implant-restoration'
    },
    {
      title: 'Full Mouth Reconstruction',
      description: 'Transform your smile completely with our comprehensive full mouth reconstruction services.',
      image: '/images/services/full-mouth.jpg',
      link: '/services/full-mouth-reconstruction'
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Enhance your smile with our range of cosmetic dental procedures designed to give you the perfect smile.',
      image: '/images/services/cosmetic-dentistry.jpg',
      link: '/services/cosmetic-dentistry'
    }
  ];

  // Sample testimonials data
  const testimonials = [
    {
      name: 'Sarah Johnson',
      quote: 'Dr. Pedro and his team changed my life! After years of dental issues, I finally have a smile I can be proud of.',
      rating: 5,
      date: 'March 15, 2025'
    },
    {
      name: 'Michael Rodriguez',
      quote: 'The implant procedure was much easier than I expected. Dr. Pedro made sure I was comfortable throughout the entire process.',
      rating: 5,
      date: 'February 3, 2025'
    },
    {
      name: 'Emily Chen',
      quote: 'I was terrified of dental work until I met Dr. Pedro. His gentle approach and clear explanations put me at ease.',
      rating: 4.5,
      date: 'April 22, 2025'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection
        title="Expert Dental Implants in Staten Island"
        subtitle="Restore your smile with the highest quality dental implant care from Dr. Greg Pedro"
        ctaText="Book a Consultation"
        ctaLink="/contact"
        backgroundImage="/images/hero-background.jpg"
      />

      {/* Welcome Section */}
      <Container maxWidth="lg">
        <Box sx={{ py: 8 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h2" component="h2" gutterBottom>
                  Welcome to Staten Island Implant Dr
                </Typography>
                <Typography variant="h5" color="primary" gutterBottom>
                  Your Trusted Dental Implant Specialist
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                  Dr. Greg Pedro has dedicated his career to providing exceptional dental implant services to the Staten Island community. With advanced training and years of experience, Dr. Pedro delivers life-changing results for patients seeking to restore their smiles.
                </Typography>
                <Typography variant="body1" paragraph>
                  Our state-of-the-art facility is equipped with the latest technology to ensure precise, comfortable, and successful implant procedures. We believe in creating personalized treatment plans that address each patient's unique needs and goals.
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  component={RouterLink} 
                  to="/about"
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Learn More About Us
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Box 
                  component="img"
                  src="/images/doctor-office.jpg"
                  alt="Dr. Greg Pedro's Office"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 4,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Services Section */}
      <Box sx={{ py: 8, backgroundColor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Our Services
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: 700, mx: 'auto' }}>
              We offer a comprehensive range of dental implant and restorative services to meet all your dental needs
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item={true} xs={12} sm={6} md={3} key={index}>
                <ServiceCard {...service} />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button 
              variant="outlined" 
              color="primary" 
              component={RouterLink} 
              to="/services"
              size="large"
            >
              View All Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Container maxWidth="lg">
        <Box sx={{ py: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom align="center">
            Why Choose Us
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}>
            We're committed to providing the highest quality dental care with a personalized approach
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: 'Expertise & Experience',
                description: 'Dr. Pedro has specialized training and extensive experience in dental implant procedures.',
                icon: '🏆'
              },
              {
                title: 'Advanced Technology',
                description: 'Our practice is equipped with state-of-the-art technology for precise and comfortable treatments.',
                icon: '🔬'
              },
              {
                title: 'Patient-Centered Care',
                description: 'We prioritize your comfort and satisfaction throughout your entire treatment journey.',
                icon: '❤️'
              },
              {
                title: 'Comprehensive Solutions',
                description: 'From single implants to full mouth reconstruction, we offer complete dental implant services.',
                icon: '✓'
              }
            ].map((item, index) => (
              <Grid item={true} xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    elevation={0}
                    sx={{ 
                      height: '100%',
                      backgroundColor: 'transparent',
                      textAlign: 'center',
                      p: 2
                    }}
                  >
                    <Typography variant="h1" sx={{ mb: 2, fontSize: '3rem' }}>
                      {item.icon}
                    </Typography>
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ py: 8, backgroundColor: theme.palette.primary.main, color: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Patient Testimonials
            </Typography>
            <Typography variant="h6">
              Don't just take our word for it - hear what our patients have to say
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item={true} xs={12} md={4} key={index}>
                <TestimonialCard {...testimonial} />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button 
              variant="contained" 
              color="secondary" 
              component={RouterLink} 
              to="/testimonials"
              size="large"
            >
              Read More Testimonials
            </Button>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="md">
        <Box 
          sx={{ 
            py: 8, 
            textAlign: 'center'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h3" component="h2" gutterBottom>
              Ready to Transform Your Smile?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, maxWidth: 700, mx: 'auto' }}>
              Schedule a consultation with Dr. Pedro to discuss your dental implant options and start your journey to a confident smile.
            </Typography>
            <Button 
              variant="contained" 
              color="secondary" 
              component={RouterLink} 
              to="/contact"
              size="large"
              sx={{ 
                px: 6, 
                py: 1.5,
                fontSize: '1.1rem'
              }}
            >
              Book Your Consultation
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
