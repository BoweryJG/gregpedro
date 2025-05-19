import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  TextField, 
  Button, 
  Paper, 
  FormControl, 
  FormControlLabel, 
  RadioGroup, 
  Radio,
  Snackbar,
  Alert,
  useTheme,
  Card,
  CardContent
} from '@mui/material';
import { 
  Phone as PhoneIcon, 
  Email as EmailIcon, 
  LocationOn as LocationIcon,
  AccessTime as TimeIcon 
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  const theme = useTheme();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    contactPreference: 'email',
    appointmentType: 'consultation'
  });
  
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send the form data to the server
    // For now, we'll just show a success message
    console.log('Form submitted:', formData);
    
    // Show success message
    setSnackbar({
      open: true,
      message: 'Your message has been sent! We will contact you shortly.',
      severity: 'success'
    });
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      contactPreference: 'email',
      appointmentType: 'consultation'
    });
  };
  
  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({
      ...prev,
      open: false
    }));
  };

  const contactInfo = [
    {
      icon: <PhoneIcon fontSize="large" />,
      title: 'Phone',
      content: '(123) 456-7890',
      action: 'tel:+1234567890'
    },
    {
      icon: <EmailIcon fontSize="large" />,
      title: 'Email',
      content: 'info@statenislandimplantdr.com',
      action: 'mailto:info@statenislandimplantdr.com'
    },
    {
      icon: <LocationIcon fontSize="large" />,
      title: 'Address',
      content: '123 Dental Ave, Staten Island, NY 10301',
      action: 'https://maps.google.com/?q=123+Dental+Ave,+Staten+Island,+NY+10301'
    },
    {
      icon: <TimeIcon fontSize="large" />,
      title: 'Office Hours',
      content: 'Mon-Fri: 9AM-5PM | Sat: 9AM-2PM',
      action: null
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        {/* Contact Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" component="h1" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
              We're here to answer your questions and help you schedule your appointment with Dr. Greg Pedro.
            </Typography>
          </motion.div>
        </Box>

        {/* Contact Info Cards */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  sx={{ 
                    height: '100%',
                    textAlign: 'center',
                    borderRadius: 2,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <CardContent>
                    <Box 
                      sx={{ 
                        color: theme.palette.primary.main,
                        mb: 2
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {info.title}
                    </Typography>
                    {info.action ? (
                      <Button 
                        href={info.action}
                        target={info.action.startsWith('http') ? '_blank' : undefined}
                        rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                        sx={{ 
                          color: theme.palette.text.secondary,
                          textDecoration: 'none',
                          '&:hover': {
                            color: theme.palette.primary.main,
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        {info.content}
                      </Button>
                    ) : (
                      <Typography variant="body2" color="text.secondary">
                        {info.content}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4, 
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                }}
              >
                <Typography variant="h4" gutterBottom>
                  Send Us a Message
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  Fill out the form below and we'll get back to you as soon as possible.
                </Typography>
                
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl component="fieldset" sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                          Preferred Contact Method
                        </Typography>
                        <RadioGroup
                          row
                          name="contactPreference"
                          value={formData.contactPreference}
                          onChange={handleRadioChange}
                        >
                          <FormControlLabel value="email" control={<Radio />} label="Email" />
                          <FormControlLabel value="phone" control={<Radio />} label="Phone" />
                          <FormControlLabel value="text" control={<Radio />} label="Text" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl component="fieldset" sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                          Appointment Type
                        </Typography>
                        <RadioGroup
                          row
                          name="appointmentType"
                          value={formData.appointmentType}
                          onChange={handleRadioChange}
                        >
                          <FormControlLabel value="consultation" control={<Radio />} label="Consultation" />
                          <FormControlLabel value="cleaning" control={<Radio />} label="Cleaning" />
                          <FormControlLabel value="emergency" control={<Radio />} label="Emergency" />
                          <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        sx={{ mt: 2 }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
          
          {/* Map and Office Info */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper 
                elevation={0}
                sx={{ 
                  height: '100%',
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                }}
              >
                <Box 
                  sx={{ 
                    width: '100%', 
                    height: 300,
                    position: 'relative'
                  }}
                >
                  <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.19453151405318!3d40.57887838324388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24a6a8c1a67e7%3A0x30e04d35c2a7fbac!2sStaten%20Island%2C%20NY!5e0!3m2!1sen!2sus!4v1621555834267!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </Box>
                
                <Box sx={{ p: 4 }}>
                  <Typography variant="h4" gutterBottom>
                    Visit Our Office
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Our modern dental office is equipped with the latest technology to provide you with the best possible care. We're conveniently located in Staten Island with ample parking available.
                  </Typography>
                  
                  <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
                    Office Hours
                  </Typography>
                  <Grid container spacing={1}>
                    {[
                      { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
                      { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
                      { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
                      { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
                      { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
                      { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
                      { day: 'Sunday', hours: 'Closed' }
                    ].map((item, index) => (
                      <React.Fragment key={index}>
                        <Grid item xs={4} sm={3}>
                          <Typography variant="body2" fontWeight={600}>
                            {item.day}:
                          </Typography>
                        </Grid>
                        <Grid item xs={8} sm={9}>
                          <Typography variant="body2">
                            {item.hours}
                          </Typography>
                        </Grid>
                      </React.Fragment>
                    ))}
                  </Grid>
                  
                  <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
                    Emergency Care
                  </Typography>
                  <Typography variant="body2">
                    If you're experiencing a dental emergency, please call our office immediately at <strong>(123) 456-7890</strong>. We reserve time in our schedule for emergency appointments.
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
      
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactPage;
