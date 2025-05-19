import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button,
  Divider,
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

const ServicesPage: React.FC = () => {
  const theme = useTheme();

  // Service data with more detailed information
  const services = [
    {
      id: 'dental-implants',
      title: 'Dental Implants',
      shortDescription: 'Replace missing teeth with permanent, natural-looking dental implants.',
      fullDescription: 'Dental implants are titanium posts surgically placed into the jawbone beneath your gums to provide a stable foundation for artificial teeth. They offer a long-term solution for missing teeth and help preserve facial structure by preventing bone deterioration.',
      image: '/images/services/dental-implants.jpg',
      benefits: [
        'Looks and functions like natural teeth',
        'Prevents bone loss in the jaw',
        'Improves ability to eat and speak',
        'Long-lasting solution (can last a lifetime with proper care)',
        'No adhesives or removal needed'
      ],
      process: [
        'Initial consultation and treatment planning',
        'Implant placement surgery',
        'Healing period (osseointegration)',
        'Abutment placement',
        'Crown attachment'
      ]
    },
    {
      id: 'implant-restoration',
      title: 'Implant Restoration',
      shortDescription: 'Restore damaged implants with our expert care.',
      fullDescription: 'Implant restoration involves repairing or replacing the visible portion of an implant that may have become damaged or worn over time. Our expert team can restore your implants to ensure they continue to function properly and look natural.',
      image: '/images/services/implant-restoration.jpg',
      benefits: [
        'Extends the life of your dental implant',
        'Maintains proper function and aesthetics',
        'Prevents further complications',
        'Preserves your investment in dental implants',
        'Minimally invasive procedures'
      ],
      process: [
        'Evaluation of implant condition',
        'Treatment planning',
        'Restoration procedure',
        'Final adjustments',
        'Maintenance instructions'
      ]
    },
    {
      id: 'full-mouth-reconstruction',
      title: 'Full Mouth Reconstruction',
      shortDescription: 'Transform your smile completely with comprehensive reconstruction.',
      fullDescription: 'Full mouth reconstruction is a comprehensive treatment that rebuilds or simultaneously restores all of the teeth in both the upper and lower jaws. Dr. Pedro combines his expertise in implant dentistry with advanced techniques to create a functional, comfortable, and beautiful smile.',
      image: '/images/services/full-mouth.jpg',
      benefits: [
        'Complete transformation of your smile',
        'Improved oral function and health',
        'Enhanced facial appearance',
        'Long-term solution for multiple dental issues',
        'Customized treatment plan'
      ],
      process: [
        'Comprehensive examination and diagnosis',
        'Digital treatment planning',
        'Preparatory procedures if needed',
        'Implant placement and temporary restoration',
        'Final restoration placement'
      ]
    },
    {
      id: 'cosmetic-dentistry',
      title: 'Cosmetic Dentistry',
      shortDescription: 'Enhance your smile with our range of cosmetic dental procedures.',
      fullDescription: 'Our cosmetic dentistry services focus on improving the appearance of your smile. From teeth whitening to veneers, we offer a variety of treatments to help you achieve the smile you have always wanted.',
      image: '/images/services/cosmetic-dentistry.jpg',
      benefits: [
        'Enhanced smile aesthetics',
        'Increased confidence',
        'Customized to your preferences',
        'Can address multiple concerns simultaneously',
        'Modern techniques for natural-looking results'
      ],
      process: [
        'Smile analysis consultation',
        'Treatment planning and digital previews',
        'Preparation procedures',
        'Treatment implementation',
        'Final adjustments and maintenance plan'
      ]
    },
    {
      id: 'preventive-care',
      title: 'Preventive Care',
      shortDescription: 'Maintain your oral health with regular preventive care.',
      fullDescription: 'Preventive dentistry is the practice of caring for your teeth to keep them healthy. This helps to avoid cavities, gum disease, enamel wear, and more. We offer comprehensive preventive care services to help you maintain optimal oral health.',
      image: '/images/services/preventive-care.jpg',
      benefits: [
        'Prevents dental problems before they start',
        'Reduces the need for extensive dental work',
        'Saves money in the long run',
        'Maintains overall health',
        'Regular monitoring of oral conditions'
      ],
      process: [
        'Regular dental check-ups',
        'Professional cleanings',
        'Diagnostic imaging when needed',
        'Oral cancer screenings',
        'Personalized home care instructions'
      ]
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        {/* Services Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" component="h1" gutterBottom>
              Our Services
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
              Dr. Greg Pedro offers a comprehensive range of dental implant and restorative services
              to help you achieve a healthy, functional, and beautiful smile.
            </Typography>
          </motion.div>
        </Box>

        {/* Services Overview Cards */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 12px 20px rgba(0,0,0,0.12)'
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {service.shortDescription}
                    </Typography>
                    <Button 
                      component={RouterLink} 
                      to={`#${service.id}`}
                      variant="text" 
                      color="primary"
                      endIcon={<ArrowForwardIcon />}
                      sx={{ mt: 'auto' }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Detailed Service Sections */}
        {services.map((service, index) => (
          <Box 
            key={service.id} 
            id={service.id}
            sx={{ 
              scrollMarginTop: '100px',
              mb: 10
            }}
          >
            <Grid 
              container 
              spacing={6} 
              direction={index % 2 === 0 ? 'row' : 'row-reverse'}
              alignItems="center"
            >
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Typography 
                    variant="h3" 
                    component="h2" 
                    gutterBottom
                    sx={{ color: theme.palette.primary.main }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {service.fullDescription}
                  </Typography>
                  
                  <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                    Benefits:
                  </Typography>
                  <List>
                    {service.benefits.map((benefit, i) => (
                      <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary={benefit} />
                      </ListItem>
                    ))}
                  </List>
                  
                  <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                    Our Process:
                  </Typography>
                  <List>
                    {service.process.map((step, i) => (
                      <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                        <ListItemText 
                          primary={
                            <Box sx={{ display: 'flex' }}>
                              <Typography 
                                component="span" 
                                sx={{ 
                                  color: theme.palette.secondary.main,
                                  fontWeight: 600,
                                  width: 24,
                                  mr: 1
                                }}
                              >
                                {i+1}.
                              </Typography>
                              {step}
                            </Box>
                          } 
                        />
                      </ListItem>
                    ))}
                  </List>
                  
                  <Button 
                    variant="contained" 
                    color="primary"
                    component={RouterLink}
                    to="/contact"
                    sx={{ mt: 4 }}
                  >
                    Schedule a Consultation
                  </Button>
                </motion.div>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Box 
                    component="img"
                    src={service.image}
                    alt={service.title}
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
            
            {index < services.length - 1 && (
              <Divider sx={{ my: 6 }} />
            )}
          </Box>
        ))}

        {/* CTA Section */}
        <Box 
          sx={{ 
            mt: 6, 
            p: 6, 
            textAlign: 'center',
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            borderRadius: 4
          }}
        >
          <Typography variant="h4" gutterBottom>
            Ready to Transform Your Smile?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: 700, mx: 'auto' }}>
            Contact us today to schedule a consultation with Dr. Pedro. We'll discuss your dental concerns,
            goals, and create a personalized treatment plan just for you.
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
  );
};

export default ServicesPage;
