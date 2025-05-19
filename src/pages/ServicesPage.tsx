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
      shortDescription: 'Replace missing teeth with permanent, natural-looking dental implants crafted by Dr. Pedro.',
      fullDescription: 'Dental implants are titanium posts surgically placed into the jawbone beneath your gums to provide a stable foundation for artificial teeth. With Dr. Pedro\'s artistic eye and championship-level precision, these implants offer a long-term solution for missing teeth while preserving facial structure and preventing bone deterioration. As an ADA-Certified Prosthodontist with over 30 years of experience, Dr. Pedro brings unparalleled expertise to every implant procedure.',
      image: '/images/services/dental-implants.jpg',
      benefits: [
        'Looks and functions like natural teeth with Dr. Pedro\'s artistic approach',
        'Prevents bone loss in the jaw through precise placement techniques',
        'Improves ability to eat and speak with confidence',
        'Long-lasting solution (can last a lifetime with proper care)',
        'No adhesives or removal needed - a truly permanent solution'
      ],
      process: [
        'Comprehensive consultation with Dr. Pedro for personalized treatment planning',
        'Precision implant placement surgery using advanced techniques',
        'Monitored healing period (osseointegration)',
        'Custom abutment placement designed for your unique smile',
        'Artistically crafted crown attachment for natural aesthetics'
      ]
    },
    {
      id: 'implant-restoration',
      title: 'Implant Restoration',
      shortDescription: 'Restore damaged implants with Dr. Pedro\'s expert care and artistic vision.',
      fullDescription: 'Implant restoration involves repairing or replacing the visible portion of an implant that may have become damaged or worn over time. Dr. Pedro\'s specialized training in prosthodontics and over 600 hours of continuing education make him uniquely qualified to restore your implants, ensuring they continue to function properly and look completely natural for years to come.',
      image: '/images/services/implant-restoration.jpg',
      benefits: [
        'Extends the life of your dental implant with expert care',
        'Maintains proper function and aesthetics with artistic precision',
        'Prevents further complications through early intervention',
        'Preserves your investment in dental implants for the long term',
        'Minimally invasive procedures for your comfort'
      ],
      process: [
        'Detailed evaluation of implant condition by Dr. Pedro personally',
        'Customized treatment planning based on your specific needs',
        'Precision restoration procedure using advanced techniques',
        'Meticulous final adjustments for perfect fit and function',
        'Comprehensive maintenance instructions for lasting results'
      ]
    },
    {
      id: 'full-mouth-reconstruction',
      title: 'Full Mouth Reconstruction',
      shortDescription: 'Transform your smile completely with Dr. Pedro\'s comprehensive reconstruction expertise.',
      fullDescription: 'Full mouth reconstruction is a comprehensive treatment that rebuilds or simultaneously restores all of the teeth in both the upper and lower jaws. Dr. Pedro combines his expertise in implant dentistry with advanced techniques and artistic vision to create a functional, comfortable, and beautiful smile. His background as a Staten Island sports legend translates into the same championship-level dedication to your complete smile transformation.',
      image: '/images/services/full-mouth.jpg',
      benefits: [
        'Complete transformation of your smile with life-changing results',
        'Improved oral function and health through comprehensive planning',
        'Enhanced facial appearance with Dr. Pedro\'s aesthetic expertise',
        'Long-term solution for multiple dental issues with unified treatment',
        'Customized treatment plan tailored to your unique needs and goals'
      ],
      process: [
        'In-depth examination and diagnosis with Dr. Pedro',
        'Advanced digital treatment planning for precision results',
        'Preparatory procedures if needed for optimal outcomes',
        'Strategic implant placement and comfortable temporary restoration',
        'Artistic final restoration placement for natural beauty'
      ]
    },
    {
      id: 'cosmetic-dentistry',
      title: 'Cosmetic Dentistry',
      shortDescription: 'Enhance your smile with our range of cosmetic dental procedures designed by Dr. Pedro.',
      fullDescription: 'Our cosmetic dentistry services focus on improving the appearance of your smile while maintaining optimal function. From teeth whitening to veneers, Dr. Pedro offers a variety of treatments to help you achieve the smile you have always wanted. His artistic eye and attention to detail ensure results that are not just beautiful, but natural-looking and harmonious with your facial features.',
      image: '/images/services/cosmetic-dentistry.jpg',
      benefits: [
        'Enhanced smile aesthetics with personalized design',
        'Increased confidence in your smile',
        'Customized to your preferences and needs',
        'Can address multiple concerns simultaneously',
        'Modern techniques for natural-looking results'
      ],
      process: [
        'Smile analysis consultation with Dr. Pedro',
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
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          height: '50vh', 
          minHeight: '400px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/services-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
          p: 4
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              EXCEPTIONAL CARE, EXTRAORDINARY RESULTS
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
                        sx={{ mt: 'auto', alignSelf: 'flex-start' }}
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
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
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
