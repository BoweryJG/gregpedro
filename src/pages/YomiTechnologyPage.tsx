import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  useTheme
} from '@mui/material';
import { 
  Check as CheckIcon,
  ExpandMore as ExpandMoreIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const YomiTechnologyPage: React.FC = () => {
  const theme = useTheme();

  // Yomi benefits data
  const benefits = [
    {
      title: "Unmatched Precision",
      description: "Sub-millimeter accuracy ensures optimal implant placement for better function, aesthetics, and longevity.",
      icon: "/images/icons/precision.svg"
    },
    {
      title: "Minimally Invasive",
      description: "Less invasive procedures mean reduced pain, swelling, and faster recovery times for patients.",
      icon: "/images/icons/minimally-invasive.svg"
    },
    {
      title: "Reduced Treatment Time",
      description: "Fewer appointments needed compared to traditional implants, saving you valuable time.",
      icon: "/images/icons/time-saving.svg"
    },
    {
      title: "Same-Day Possibilities",
      description: "Many patients can receive implants and temporary restorations in a single visit.",
      icon: "/images/icons/same-day.svg"
    },
    {
      title: "Improved Success Rates",
      description: "Robotic precision leads to better implant integration and higher long-term success rates.",
      icon: "/images/icons/success.svg"
    },
    {
      title: "Natural-Looking Results",
      description: "Perfect positioning ensures the most aesthetic and functional outcomes for your smile.",
      icon: "/images/icons/aesthetic.svg"
    }
  ];

  // Process steps data
  const processSteps = [
    {
      title: "Initial Consultation",
      description: "Dr. Pedro evaluates your dental health, discusses your goals, and determines if you're a candidate for Yomi robotic implant surgery.",
      image: "/images/yomi-consultation.jpg"
    },
    {
      title: "Digital Planning",
      description: "A 3D CT scan creates a detailed map of your mouth. Dr. Pedro uses this to precisely plan your implant placement with the Yomi system.",
      image: "/images/yomi-planning.jpg"
    },
    {
      title: "Robotic-Guided Surgery",
      description: "During your procedure, the Yomi robot provides real-time guidance to Dr. Pedro, ensuring the implant is placed with sub-millimeter accuracy.",
      image: "/images/yomi-surgery.jpg"
    },
    {
      title: "Faster Recovery",
      description: "With minimally invasive techniques, most patients experience less discomfort and swelling compared to traditional implant surgery.",
      image: "/images/yomi-recovery.jpg"
    },
    {
      title: "Final Restoration",
      description: "Once healed, your custom-crafted crown, bridge, or denture is attached to your implant for a beautiful, functional smile.",
      image: "/images/yomi-final.jpg"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "Is Dr. Pedro the only dentist in Staten Island who offers Yomi robotic technology?",
      answer: "Yes, Dr. Greg Pedro is currently the only dental provider in Staten Island and one of the few in all of New York City to offer Yomi robotic-guided dental implant technology."
    },
    {
      question: "How does Yomi robotic technology compare to traditional implant surgery?",
      answer: "Yomi robotic technology offers several advantages over traditional implant surgery, including greater precision (sub-millimeter accuracy), less invasive procedures, faster recovery times, fewer appointments, and in many cases, the possibility of same-day implant placement with temporary restorations."
    },
    {
      question: "Is Yomi robotic implant surgery more expensive?",
      answer: "While the technology is advanced, Dr. Pedro strives to make Yomi implant procedures accessible. The long-term benefits often outweigh any additional cost, as the precision can lead to fewer complications and longer-lasting results. We offer financing options to help make this advanced care affordable."
    },
    {
      question: "Is Yomi robotic implant surgery painful?",
      answer: "Most patients report less discomfort with Yomi robotic implant surgery compared to traditional methods. The precision of the robot allows for more minimally invasive techniques, which typically result in less post-operative pain and swelling."
    },
    {
      question: "How long does recovery take after Yomi implant surgery?",
      answer: "Recovery time varies by individual, but most patients experience significantly shorter recovery times compared to traditional implant surgery. Many patients return to work and normal activities within 1-2 days, with minimal discomfort."
    },
    {
      question: "Am I a candidate for Yomi robotic implant surgery?",
      answer: "Most patients who need dental implants are candidates for Yomi robotic surgery. During your consultation, Dr. Pedro will evaluate your oral health, bone density, and medical history to determine if this advanced procedure is right for you."
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          pt: 15, 
          pb: 10, 
          backgroundColor: 'primary.dark',
          color: 'white',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/yomi-hero-background.jpg)',
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
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h1" component="h1" gutterBottom>
                YOMI ROBOTIC DENTAL IMPLANT TECHNOLOGY
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
                Experience the future of dental implants with Dr. Greg Pedro — Staten Island's ONLY provider of Yomi Robotic Implant Technology
              </Typography>
              <Button 
                variant="contained" 
                color="secondary" 
                component={RouterLink} 
                to="/contact"
                size="large"
                sx={{ px: 4, py: 1.5 }}
              >
                Schedule Your Yomi Consultation
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Introduction Section */}
      <Container maxWidth="lg">
        <Box sx={{ py: 10 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h2" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
                  REVOLUTIONARY PRECISION IMPLANT TECHNOLOGY
                </Typography>
                <Typography variant="body1" paragraph>
                  Dr. Greg Pedro is proud to be the <strong>only dental provider in Staten Island</strong> and one of the few in New York City to offer the groundbreaking Yomi Robotic-Guided Dental Implant System.
                </Typography>
                <Typography variant="body1" paragraph>
                  Yomi is the first and only FDA-cleared robotic device for dental implant surgery. This cutting-edge technology represents a significant leap forward in implant dentistry, combining the expertise of Dr. Pedro with the precision of robotics to deliver exceptional results.
                </Typography>
                <Typography variant="body1" paragraph>
                  With Yomi's haptic guidance system, Dr. Pedro maintains complete control throughout your procedure while the robotic assistant provides real-time physical feedback to ensure sub-millimeter accuracy in implant placement.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={RouterLink}
                  to="/contact"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ mt: 2 }}
                >
                  Schedule Your Consultation
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
                  src="/images/yomi-robot-system.jpg"
                  alt="Yomi Robotic Dental Implant System"
                  sx={{
                    width: '100%',
                    borderRadius: 4,
                    boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* How Yomi Works Section */}
      <Box sx={{ py: 10, backgroundColor: 'grey.50' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ mb: 6, color: 'primary.main' }}>
              HOW YOMI TECHNOLOGY WORKS
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h5" gutterBottom sx={{ color: 'secondary.main', fontWeight: 'bold' }}>
                  Precision Dental Robotics
                </Typography>
                <Typography variant="body1" paragraph>
                  The Yomi system combines advanced 3D imaging, real-time tracking, and haptic robotic guidance to assist Dr. Pedro during dental implant surgery. Unlike passive systems that only provide visual guidance, Yomi offers physical guidance through the robotic arm while Dr. Pedro maintains complete control.
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ color: 'secondary.main', fontWeight: 'bold', mt: 4 }}>
                  Multi-sensory Guidance
                </Typography>
                <Typography variant="body1" paragraph>
                  During your procedure, Yomi provides haptic guidance that Dr. Pedro can feel through the handpiece, ensuring the implant is placed at the exact angle, depth, and position planned. This multi-sensory approach creates an unprecedented level of accuracy while still allowing Dr. Pedro's expertise to drive the procedure.
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ color: 'secondary.main', fontWeight: 'bold', mt: 4 }}>
                  Dynamic Navigation
                </Typography>
                <Typography variant="body1" paragraph>
                  Unlike static surgical guides, Yomi's dynamic navigation adjusts in real-time to any patient movement, maintaining perfect positioning throughout the procedure. This adaptive approach ensures optimal results even in the most complex cases.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box 
                  component="img"
                  src="/images/yomi-how-it-works.jpg"
                  alt="How Yomi Robotic Technology Works"
                  sx={{
                    width: '100%',
                    borderRadius: 4,
                    boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                    mb: 4
                  }}
                />
                <Typography variant="h5" gutterBottom sx={{ color: 'secondary.main', fontWeight: 'bold' }}>
                  Key Technical Advantages:
                </Typography>
                <List>
                  {[
                    "Real-time haptic guidance for unprecedented accuracy",
                    "Sub-millimeter precision in implant placement",
                    "Dynamic adjustment to patient movement during surgery",
                    "Comprehensive 3D treatment planning before your procedure",
                    "Minimally invasive approach reduces recovery time",
                    "Compatible with same-day implant procedures"
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckIcon color="secondary" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Container maxWidth="lg">
        <Box sx={{ py: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ mb: 6, color: 'primary.main' }}>
              BENEFITS OF YOMI ROBOTIC IMPLANT TECHNOLOGY
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ 
                    height: '100%', 
                    borderRadius: 3,
                    boxShadow: '0 8px 16px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 16px 32px rgba(0,0,0,0.12)'
                    }
                  }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 2,
                        color: 'primary.main'
                      }}>
                        <Box 
                          component="img"
                          src={benefit.icon}
                          alt={benefit.title}
                          sx={{ width: 48, height: 48, mr: 2 }}
                        />
                        <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                          {benefit.title}
                        </Typography>
                      </Box>
                      <Typography variant="body1">
                        {benefit.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* The Yomi Process Section */}
      <Box sx={{ py: 10, backgroundColor: 'grey.50' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ mb: 6, color: 'primary.main' }}>
              THE YOMI IMPLANT PROCESS
            </Typography>
            <Typography variant="h6" align="center" sx={{ mb: 8, maxWidth: 800, mx: 'auto' }}>
              Experience a streamlined, comfortable approach to dental implants with Dr. Pedro's Yomi robotic technology
            </Typography>
          </motion.div>

          {processSteps.map((step, index) => (
            <Box key={index} sx={{ mb: index === processSteps.length - 1 ? 0 : 8 }}>
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
                      component="h3" 
                      gutterBottom
                      sx={{ 
                        color: theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <Box 
                        component="span" 
                        sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          backgroundColor: 'secondary.main',
                          color: 'white',
                          mr: 2,
                          fontSize: '1.25rem',
                          fontWeight: 'bold'
                        }}
                      >
                        {index + 1}
                      </Box>
                      {step.title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {step.description}
                    </Typography>
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
                      src={step.image}
                      alt={step.title}
                      sx={{
                        width: '100%',
                        borderRadius: 4,
                        boxShadow: '0 12px 30px rgba(0,0,0,0.15)'
                      }}
                    />
                  </motion.div>
                </Grid>
              </Grid>
              {index < processSteps.length - 1 && (
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    my: 4
                  }}
                >
                  <Box sx={{ 
                    width: 2, 
                    height: 50, 
                    backgroundColor: 'secondary.main',
                    mx: 'auto'
                  }} />
                </Box>
              )}
            </Box>
          ))}
        </Container>
      </Box>

      {/* Patient Testimonial */}
      <Container maxWidth="md">
        <Box sx={{ py: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card sx={{ 
              borderRadius: 4, 
              boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}>
              <Grid container>
                <Grid item xs={12} md={5}>
                  <Box
                    component="img"
                    src="/images/yomi-testimonial-patient.jpg"
                    alt="Yomi Patient Testimonial"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={7}>
                  <CardContent sx={{ p: 5 }}>
                    <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
                      Patient Success Stories
                    </Typography>
                    <Typography variant="h6" sx={{ fontStyle: 'italic', mb: 4 }}>
                      "I needed two dental implants and was nervous about the procedure. Dr. Pedro explained how the Yomi robot would assist with precision placement. I was amazed at how quick and comfortable the process was! I had minimal discomfort afterward, and was back to my normal routine the next day. My new teeth look and feel completely natural. I'm so grateful for this advanced technology and Dr. Pedro's expertise."
                    </Typography>
                    <Divider sx={{ my: 3 }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      Michael Reynolds
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Yomi Robotic Dental Implant Patient
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </motion.div>
        </Box>
      </Container>

      {/* FAQs Section */}
      <Box sx={{ py: 10, backgroundColor: 'grey.50' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ mb: 6, color: 'primary.main' }}>
              FREQUENTLY ASKED QUESTIONS
            </Typography>
          </motion.div>

          <Box sx={{ maxWidth: 900, mx: 'auto' }}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Accordion 
                  sx={{ 
                    mb: 2, 
                    borderRadius: 2, 
                    overflow: 'hidden',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                    '&:before': {
                      display: 'none',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ 
                      backgroundColor: index % 2 === 0 ? 'grey.100' : 'white',
                      p: 2
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ p: 3 }}>
                    <Typography variant="body1">
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box 
        sx={{ 
          py: 12, 
          backgroundColor: 'primary.main',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" component="h2" gutterBottom>
              READY TO EXPERIENCE THE FUTURE OF DENTAL IMPLANTS?
            </Typography>
            <Typography variant="h5" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
              As Staten Island's only provider of Yomi robotic implant technology, Dr. Greg Pedro offers a truly unique dental experience
            </Typography>
            <Button 
              variant="contained" 
              color="secondary" 
              component={RouterLink} 
              to="/contact"
              size="large"
              sx={{ 
                px: 5, 
                py: 2,
                fontSize: '1.1rem',
                borderRadius: 3
              }}
            >
              Schedule Your Consultation Today
            </Button>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default YomiTechnologyPage;
