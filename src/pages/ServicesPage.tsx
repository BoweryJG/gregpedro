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
      ],
      technology: 'yomi'
    },
    {
      id: 'tmj-treatment',
      title: 'TMJ Treatment',
      shortDescription: 'Find relief from TMJ pain and dysfunction with Dr. Pedro\'s specialized treatment options.',
      fullDescription: 'Temporomandibular Joint (TMJ) disorders can cause significant pain and dysfunction in the jaw joint and muscles. As Staten Island\'s leading TMJ specialist, Dr. Pedro offers comprehensive treatment options to alleviate pain, restore function, and improve overall oral health for those suffering from TMJ disorders. His approach combines advanced diagnostic techniques with personalized treatment plans to address the root cause of your TMJ issues.',
      image: '/images/services/tmj-treatment.jpg',
      benefits: [
        'Relief from jaw pain, headaches, and migraines',
        'Improved jaw function and range of motion',
        'Reduced teeth grinding and clenching',
        'Better sleep quality and overall well-being',
        'Non-surgical options available for most patients'
      ],
      process: [
        'Comprehensive TMJ evaluation and diagnosis',
        'Customized treatment plan based on your specific condition',
        'Implementation of appropriate therapies (oral appliances, Botox, etc.)',
        'Regular monitoring and adjustments as needed',
        'Long-term management strategies for lasting relief'
      ],
      faq: [
        {
          question: 'What causes TMJ disorders?',
          answer: 'TMJ disorders can be caused by various factors including jaw injury, stress, arthritis, teeth grinding (bruxism), misaligned teeth, dental procedures, connective tissue disorders, tooth loss, and jaw muscle fatigue.'
        },
        {
          question: 'Does TMJ require surgery?',
          answer: 'TMJ does not always require surgery. In many cases, it can be treated with non-surgical methods such as physical therapy, stress management, pain medication, lifestyle changes, oral splints or guards, or injections. Surgery may be recommended in severe cases.'
        },
        {
          question: 'Is Botox safe for TMJ?',
          answer: 'Yes, Botox treatment for TMJ is very safe and approved by the American Dental Association (ADA) for TMJ treatment. Relief typically lasts 3-6 months, though some patients experience longer or even permanent success.'
        }
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
      id: 'aesthetic-treatments',
      title: 'Aesthetic Treatments',
      shortDescription: 'Enhance your facial appearance with our advanced aesthetic treatments including BTL Emface.',
      fullDescription: 'About Face Dental & Aesthetic Boutique offers cutting-edge aesthetic treatments to complement your beautiful smile. Dr. Pedro has invested in the most sophisticated technologies available to maximize your success with minimal discomfort and downtime. Our aesthetic treatments are designed to enhance your natural beauty and help you look as good as you feel.',
      image: '/images/services/btl-emface.jpg',
      benefits: [
        'Non-surgical facial rejuvenation with advanced technologies',
        'Reduced fine lines and wrinkles for a more youthful appearance',
        'Improved skin texture and tone with minimal downtime',
        'Comprehensive approach combining dental and facial aesthetics',
        'Treatments performed in a comfortable, spa-like environment'
      ],
      process: [
        'Comprehensive skin analysis using Emage IMAGE PRO technology',
        'Personalized treatment plan based on your aesthetic goals',
        'Implementation of appropriate treatments (BTL Emface, etc.)',
        'Follow-up care and maintenance recommendations',
        'Ongoing support for long-lasting results'
      ],
      technology: 'emface'
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
                        {service.title === "Dental Implants" && (
                          <Box sx={{ 
                            display: 'inline-block', 
                            bgcolor: 'secondary.main', 
                            color: 'white',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 1,
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            mb: 1
                          }}>
                            YOMI ROBOTIC TECHNOLOGY
                          </Box>
                        )}
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
                    
                    {service.title === "Dental Implants" && (
                      <>
                        <Typography variant="h6" gutterBottom sx={{ mt: 4, color: theme.palette.secondary.main, fontWeight: 'bold' }}>
                          Exclusive Yomi Robotic Technology:
                        </Typography>
                        <Typography variant="body1" paragraph>
                          Dr. Pedro is the only dentist in Staten Island and one of the few in New York City to offer Yomi Robotic-Guided Dental Implant Surgery. This revolutionary technology provides:
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
                      </>
                    )}
                    
                    {service.id === "tmj-treatment" && (
                      <>
                        <Typography variant="h6" gutterBottom sx={{ mt: 4, color: theme.palette.secondary.main, fontWeight: 'bold' }}>
                          Frequently Asked Questions:
                        </Typography>
                        {service.faq && service.faq.map((item, i) => (
                          <Box key={i} sx={{ mb: 2 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                              {item.question}
                            </Typography>
                            <Typography variant="body2">
                              {item.answer}
                            </Typography>
                          </Box>
                        ))}
                      </>
                    )}
                    
                    {service.id === "aesthetic-treatments" && (
                      <>
                        <Typography variant="h6" gutterBottom sx={{ mt: 4, color: theme.palette.secondary.main, fontWeight: 'bold' }}>
                          BTL Emface Technology:
                        </Typography>
                        <Typography variant="body1" paragraph>
                          Dr. Pedro offers the revolutionary BTL Emface treatment, a non-invasive facial rejuvenation procedure that combines radiofrequency and targeted muscle stimulation to:
                        </Typography>
                        <List>
                          {[
                            "Lift and tone facial muscles without needles or surgery",
                            "Reduce fine lines and wrinkles for a more youthful appearance",
                            "Improve skin texture and elasticity",
                            "Provide natural-looking results with no downtime",
                            "Complement your beautiful smile with facial rejuvenation",
                            "Enhance overall facial aesthetics in a comfortable setting"
                          ].map((benefit, i) => (
                            <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 36 }}>
                                <CheckIcon color="secondary" />
                              </ListItemIcon>
                              <ListItemText primary={benefit} />
                            </ListItem>
                          ))}
                        </List>
                      </>
                    )}
                    
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

          {/* Technology Showcase Section */}
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
                    to="#dental-implants"
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
                    to="#aesthetic-treatments"
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
