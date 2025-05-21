import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Button, 
  Card, 
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Check as CheckIcon,
  ArrowForward as ArrowForwardIcon,
  Spa as SpaIcon,
  PrecisionManufacturing as PrecisionManufacturingIcon,
  Favorite as FavoriteIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import ServiceCard from '../components/UI/ServiceCard';
import TestimonialCard from '../components/UI/TestimonialCard';
import { Link as RouterLink } from 'react-router-dom';

const HomePage: React.FC = () => {

  // Sample services data
  const services = [
    {
      title: 'Dental Implants',
      description: 'Replace missing teeth with permanent, natural-looking dental implants that function just like your natural teeth, personally crafted by Dr. Pedro.',
      image: require('../assets/dentalimplants.gif'),
      link: '/services/dental-implants'
    },
    {
      title: 'Implant Restoration',
      description: 'Restore damaged implants with our expert care, ensuring your smile stays beautiful and functional with Dr. Pedro\'s artistic approach.',
      image: require('../assets/implantrestoration2.gif'),
      link: '/services/implant-restoration'
    },
    {
      title: 'Full Mouth Reconstruction',
      description: 'Transform your smile completely with our comprehensive full mouth reconstruction services, combining art and science for extraordinary results.',
      image: require('../assets/fullmouthreconstruction.gif'),
      link: '/services/full-mouth-reconstruction'
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Enhance your smile with our range of cosmetic dental procedures designed to give you the perfect smile with Dr. Pedro\'s championship-level precision.',
      image: require('../assets/cosmeticdenstistry.gif'),
      link: '/services/cosmetic-dentistry'
    }
  ];

  // Sample testimonials data
  const testimonials = [
    {
      name: 'Maria S.',
      quote: 'After years of dental anxiety, I finally found Dr. Pedro. His gentle approach and incredible skill gave me back my smile and my confidence. The massage chairs and Netflix were unexpected bonuses that made the experience actually enjoyable!',
      rating: 5,
      date: 'March 15, 2025'
    },
    {
      name: 'James T.',
      quote: 'As a former dental phobic, I never thought I\'d look forward to dental appointments. Dr. Pedro changed everything with his painless injections and genuine care. My implants look and feel completely natural—better than my original teeth!',
      rating: 5,
      date: 'February 3, 2025'
    },
    {
      name: 'Robert K.',
      quote: 'Dr. Pedro\'s sports background shows in his precision and teamwork approach. His staff is amazing, and the results of my full-mouth restoration exceeded all my expectations. Worth every penny.',
      rating: 5,
      date: 'April 22, 2025'
    }
  ];

  return (
    <Box>

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
                  MEET DR. GREG PEDRO
                </Typography>
                <Typography variant="h5" color="primary" gutterBottom>
                  A STATEN ISLAND LEGEND DEDICATED TO YOUR SMILE
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                  Born and raised on Staten Island, Dr. Greg Pedro is more than just a dental specialist—he's a hometown hero with a remarkable journey. From leading St. Peter's to Staten Island's only AA city basketball championship to becoming an ADA-Certified Prosthodontist with over 30 years of experience, Dr. Pedro brings the same championship-level dedication to your dental care.
                </Typography>
                <Typography variant="body1" paragraph>
                  After graduating from Temple University's prestigious dental program in 1994, Dr. Pedro has dedicated his career to mastering the art and science of dental implants and prosthodontics. His exceptional training includes over 600 hours of specialized continuing education, advanced certification in smile design and dental implantology, specialized TMJ/TMD treatment expertise, and pioneering techniques in aesthetic dentistry.
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  component={RouterLink} 
                  to="/about"
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Learn More About Dr. Pedro
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
                  src={require('../assets/GPaboutGP.jpg')}
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

      {/* Featured Technology Section - Yomi Robotic Dental Implant System */}
      <Box sx={{ py: 12, backgroundColor: 'grey.100' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Typography 
                  variant="h2" 
                  component="h2" 
                  gutterBottom 
                  sx={{ 
                    color: 'primary.main',
                    fontWeight: 'bold' 
                  }}
                >
                  REVOLUTIONARY YOMI ROBOTIC TECHNOLOGY
                </Typography>
                <Typography variant="h5" sx={{ mb: 3, color: 'secondary.main', fontWeight: 'medium' }}>
                  The Future of Dental Implant Surgery is Here
                </Typography>
                <Typography variant="body1" paragraph>
                  Dr. Greg Pedro is proud to be the <strong>only dentist in Staten Island</strong> and one of the few in New York City to offer Yomi Robotic-Guided Dental Implant Surgery. This cutting-edge technology represents a significant advancement in dental implant procedures.
                </Typography>
                <Typography variant="body1" paragraph>
                  The Yomi robotic system provides unprecedented precision and control during implant placement, resulting in faster healing times, reduced discomfort, and exceptional outcomes for our patients.
                </Typography>
                <List sx={{ mb: 3 }}>
                  {[
                    "Greater precision and accuracy with sub-millimeter control",
                    "Minimally invasive procedures with less discomfort",
                    "Faster recovery times and reduced appointments",
                    "Same-day surgery possibilities for qualifying patients",
                    "Enhanced predictability for superior aesthetic results"
                  ].map((benefit, i) => (
                    <ListItem key={i} sx={{ py: 0.5 }}>
                      <ListItemIcon>
                        <CheckIcon color="secondary" />
                      </ListItemIcon>
                      <ListItemText primary={benefit} />
                    </ListItem>
                  ))}
                </List>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={RouterLink}
                  to="/yomi-technology"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ mt: 2 }}
                >
                  LEARN MORE ABOUT YOMI TECHNOLOGY
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  component="img"
                  src={require('../assets/Yomi.jpg')}
                  alt="Yomi Robotic Dental Implant System"
                  sx={{
                    width: '100%',
                    borderRadius: 4,
                    boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                  }}
                />
                <Box sx={{ mt: 3, p: 3, backgroundColor: 'white', borderRadius: 2, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                  <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                    "The Yomi technology has transformed my practice. It allows me to provide my patients with the most precise, comfortable implant experience available today."
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                    — Dr. Greg Pedro
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 8, backgroundColor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" gutterBottom>
              EXCEPTIONAL CARE, EXTRAORDINARY RESULTS
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: 700, mx: 'auto' }}>
              Dr. Pedro's approach to dental implants goes beyond standard care—it's a transformative journey using state-of-the-art technology and his artistic eye to create solutions that are indistinguishable from natural teeth.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
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
              Explore All Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Patient Experience Section */}
      <Container maxWidth="lg">
        <Box sx={{ py: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom align="center">
            THE ABOUT FACE DIFFERENCE
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}>
            At Dr. Pedro's practice, we've revolutionized the dental experience. Our patients—even those with severe dental anxiety—consistently rate their visits as surprisingly comfortable and stress-free.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card elevation={2} sx={{ height: '100%', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <SpaIcon sx={{ color: 'primary.main', fontSize: 50 }} />
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom align="center">
                    Luxurious Comfort
                  </Typography>
                  <Typography variant="body1" align="center">
                    Massage chairs that soothe away tension, Netflix viewing during your treatment, and warm towel service to conclude your visit.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card elevation={2} sx={{ height: '100%', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <PrecisionManufacturingIcon sx={{ color: 'primary.main', fontSize: 50 }} />
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom align="center">
                    Advanced Technology
                  </Typography>
                  <Typography variant="body1" align="center">
                    Fiber-optic soft-sound handpieces for quieter procedures and Biolase laser technology for minimally invasive treatments.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card elevation={2} sx={{ height: '100%', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <FavoriteIcon sx={{ color: 'primary.main', fontSize: 50 }} />
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom align="center">
                    Compassionate Care
                  </Typography>
                  <Typography variant="body1" align="center">
                    Dr. Pedro's kind, caring and compassionate chairside manner gives his patients the confidence they need to pursue the treatments they deserve.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ py: 8, backgroundColor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" gutterBottom align="center">
            STORIES OF TRANSFORMATION
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}>
            Hear from our patients who have experienced the life-changing results of Dr. Pedro's exceptional care
          </Typography>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <TestimonialCard {...testimonial} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Yomi Testimonial */}
      <Box sx={{ py: 6, backgroundColor: 'secondary.light' }}>
        <Container maxWidth="md">
          <Box sx={{ 
            p: 4, 
            borderRadius: 4, 
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            backgroundColor: 'white'
          }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={4}>
                <Box
                  component="img"
                  src={require('../assets/patient1.png')}
                  alt="Happy Yomi Dental Implant Patient"
                  sx={{
                    width: '100%',
                    borderRadius: '50%',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  }}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography 
                  variant="h5" 
                  sx={{ mb: 2, fontStyle: 'italic', color: 'primary.main' }}
                >
                  "I was amazed at how quick and comfortable my dental implant procedure was with Dr. Pedro's Yomi robotic technology. I was back to work the next day with minimal discomfort, and my new tooth looks completely natural. It's incredible how advanced dentistry has become!"
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Sarah Thompson
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Yomi Robotic-Assisted Dental Implant Patient
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="md">
        <Box sx={{ py: 10, textAlign: 'center' }}>
          <Typography variant="h2" component="h2" gutterBottom>
            YOUR NEW SMILE JOURNEY BEGINS HERE
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, maxWidth: 700, mx: 'auto' }}>
            Schedule your complimentary consultation with Dr. Pedro today and discover why patients from across Staten Island and beyond trust their smiles to Staten Island's premier implant specialist.
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            component={RouterLink} 
            to="/contact"
            size="large"
            sx={{ py: 1.5, px: 4, fontSize: '1.1rem' }}
          >
            BOOK YOUR CONSULTATION
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
