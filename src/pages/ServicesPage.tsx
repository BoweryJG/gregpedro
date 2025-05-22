import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme
} from '@mui/material';
import { 
  Check as CheckIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import ServiceCard from '../components/UI/ServiceCard';
import { services } from '../data/services';

const ServicesPage: React.FC = () => {
  const theme = useTheme();


  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          pt: 15, 
          pb: 10, 
          backgroundColor: 'primary.main',
          color: 'white',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/services-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h1" component="h1" gutterBottom>
              EXCEPTIONAL DENTAL SERVICES
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
              Dr. Pedro's approach to dental care combines artistic vision with advanced science for truly transformative results
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              component={RouterLink} 
              to="/contact"
              size="large"
              sx={{ px: 4, py: 1.5 }}
            >
              Schedule Your Consultation
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Yomi Robotic Technology Feature Callout */}
      <Box sx={{ py: 8, backgroundColor: 'secondary.light' }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4
          }}>
            <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
              <Typography 
                variant="h3" 
                component="h2" 
                sx={{ 
                  color: 'primary.main',
                  fontWeight: 'bold',
                  mb: 2 
                }}
              >
                ADVANCED YOMI ROBOTIC TECHNOLOGY
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 2,
                  fontWeight: 'medium'
                }}
              >
                Staten Island's ONLY Provider of Yomi Robotic Dental Implant Technology
              </Typography>
              <Typography variant="body1" paragraph>
                Dr. Greg Pedro is proud to be the only dentist in Staten Island and one of the few in New York City to offer Yomi Robotic-Guided Dental Implant Surgery. This revolutionary technology delivers unmatched precision, faster recovery times, and exceptional results for dental implant patients.
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                component={RouterLink} 
                to="/yomi-technology"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{ mt: 2 }}
              >
                Learn More About Yomi
              </Button>
            </Box>
            <Box 
              sx={{ 
                flex: 1,
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Box 
                component="img"
                src="/images/yomi-robot.jpg"
                alt="Yomi Robotic Dental Implant System"
                sx={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: 4,
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Services Introduction */}
      <Container maxWidth="lg">
        <Box sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h2" component="h2" gutterBottom>
            OUR SPECIALIZED SERVICES
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 800, mx: 'auto', mb: 6 }}>
            With over 30 years of experience and specialized training in prosthodontics, Dr. Greg Pedro offers a comprehensive range of dental implant and restorative services designed to transform your smile and improve your quality of life.
          </Typography>

          {/* Services Overview Cards */}
          <Box sx={{ display: 'flex', overflowX: 'auto', pb: 2, mb: 8 }}>
            {services.map((service) => (
              <Box key={service.id} sx={{ flex: '0 0 auto', minWidth: 280, mr: 2 }}>
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  image={service.image}
                  link={`/services/${service.id}`}
                />
              </Box>
            ))}
          </Box>

          <Box sx={{ py: 8, backgroundColor: 'background.paper', mt: 6, borderRadius: 4 }}>
            <Container maxWidth="lg">
              <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
                ADVANCED TECHNOLOGIES
              </Typography>
              
              {/* Yomi Robotic Technology */}
              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 4,
                mb: 8
              }}>
                <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography 
                    variant="h3" 
                    component="h2" 
                    sx={{ 
                      color: 'primary.main',
                      fontWeight: 'bold',
                      mb: 2 
                    }}
                  >
                    YOMI ROBOTIC TECHNOLOGY
                  </Typography>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 2,
                      fontWeight: 'medium'
                    }}
                  >
                    Staten Island's ONLY Provider of Yomi Robotic Dental Implant Technology
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Dr. Greg Pedro is proud to be the only dentist in Staten Island and one of the few in New York City to offer Yomi Robotic-Guided Dental Implant Surgery. This revolutionary technology delivers unmatched precision, faster recovery times, and exceptional results for dental implant patients.
                  </Typography>
                  <List>
                    {[
                      "Sub-millimeter precision for optimal implant placement",
                      "Minimally invasive procedures with less discomfort",
                      "Faster recovery times and reduced downtime",
                      "Fewer appointments needed compared to traditional implants",
                      "Same-day surgery possibilities for qualifying patients",
                      "Enhanced predictability for superior aesthetic results"
                    ].map((benefit, i) => (
                      <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary={benefit} />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    to="/services/dental-implants"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ mt: 2 }}
                  >
                    Learn More About Yomi
                  </Button>
                </Box>
                <Box 
                  sx={{ 
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <Box 
                    component="img"
                    src="/images/services/yomi-robot.jpg"
                    alt="Yomi Robotic Dental Implant System"
                    sx={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: 4,
                      boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
                    }}
                  />
                </Box>
              </Box>
              
              {/* BTL Emface Technology */}
              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row-reverse' },
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 4
              }}>
                <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography 
                    variant="h3" 
                    component="h2" 
                    sx={{ 
                      color: 'primary.main',
                      fontWeight: 'bold',
                      mb: 2 
                    }}
                  >
                    BTL EMFACE TECHNOLOGY
                  </Typography>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 2,
                      fontWeight: 'medium'
                    }}
                  >
                    Advanced Facial Rejuvenation Without Surgery
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Dr. Pedro has invested in the most sophisticated aesthetic technologies available, including the revolutionary BTL Emface treatment. This non-invasive facial rejuvenation procedure combines radiofrequency and targeted muscle stimulation to lift, tighten, and tone facial tissues.
                  </Typography>
                  <List>
                    {[
                      "Non-surgical alternative to traditional facelifts",
                      "Reduces fine lines and wrinkles",
                      "Lifts and tones facial muscles",
                      "No downtime required",
                      "Comfortable, pain-free treatment",
                      "Natural-looking results"
                    ].map((benefit, i) => (
                      <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary={benefit} />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    to="/services/aesthetic-treatments"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ mt: 2 }}
                  >
                    Learn More About BTL Emface
                  </Button>
                </Box>
                <Box 
                  sx={{ 
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <Box 
                    component="img"
                    src="/images/services/btl-emface.jpg"
                    alt="BTL Emface Treatment"
                    sx={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: 4,
                      boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
                    }}
                  />
                </Box>
              </Box>
            </Container>
          </Box>

          {/* CTA Section */}
          <Box 
            sx={{ 
              mt: 6, 
              p: 6, 
              textAlign: 'center',
              backgroundColor: theme.palette.primary.light,
              borderRadius: 4,
              color: 'white'
            }}
          >
            <Typography variant="h3" component="h2" gutterBottom>
              Ready to Transform Your Smile?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
              Schedule a consultation with Dr. Pedro to discuss your dental implant and restoration options.
            </Typography>
            <Button 
              variant="contained" 
              color="secondary" 
              component={RouterLink} 
              to="/contact"
              size="large"
              sx={{ 
                px: 4, 
                py: 1.5,
                fontSize: '1.1rem'
              }}
            >
              Book Your Consultation
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesPage;
