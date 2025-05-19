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
      title: 'Location',
      content: '123 Main Street, Staten Island, NY 10301',
      action: 'https://maps.google.com/?q=123+Main+Street,+Staten+Island,+NY+10301'
    }
  ];
  
  const officeHours = [
    { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 3:00 PM' },
    { day: 'Saturday - Sunday', hours: 'Closed' }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        {/* Page Title */}
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          BEGIN YOUR SMILE TRANSFORMATION
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
          Schedule your consultation with Dr. Greg Pedro, Staten Island's premier implant specialist, and discover the life-changing difference his artistic approach and championship-level precision can make.
        </Typography>
        
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4, 
                  borderRadius: 2,
                  height: '100%'
                }}
              >
                <Typography variant="h4" gutterBottom>
                  Request an Appointment
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                  Fill out the form below and our team will contact you promptly to schedule your personalized consultation with Dr. Pedro.
                </Typography>
                
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
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
                      <Typography variant="subtitle1" gutterBottom>
                        Preferred Contact Method
                      </Typography>
                      <FormControl component="fieldset">
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
                      <Typography variant="subtitle1" gutterBottom>
                        Appointment Type
                      </Typography>
                      <FormControl component="fieldset">
                        <RadioGroup 
                          row 
                          name="appointmentType" 
                          value={formData.appointmentType}
                          onChange={handleRadioChange}
                        >
                          <FormControlLabel value="consultation" control={<Radio />} label="Consultation" />
                          <FormControlLabel value="implant" control={<Radio />} label="Dental Implant" />
                          <FormControlLabel value="cosmetic" control={<Radio />} label="Cosmetic Dentistry" />
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
                        placeholder="Please share any specific concerns or questions you have for Dr. Pedro"
                      />
                    </Grid>
                    
                    <Grid item xs={12}>
                      <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        size="large"
                        fullWidth
                        sx={{ py: 1.5 }}
                      >
                        Submit Request
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </motion.div>
          </Grid>
          
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Card 
                  elevation={3} 
                  sx={{ 
                    p: 3, 
                    borderRadius: 2,
                    mb: 4,
                    backgroundColor: theme.palette.primary.main,
                    color: 'white'
                  }}
                >
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      THE ABOUT FACE DIFFERENCE
                    </Typography>
                    <Typography variant="body1" paragraph>
                      When you visit Dr. Pedro's practice, you'll experience dental care like never before. Our luxurious facility features massage chairs, Netflix viewing during treatment, and a warm, welcoming environment designed to make even the most anxious patients feel at ease.
                    </Typography>
                    <Typography variant="body1">
                      Dr. Pedro's gentle approach, painless injections, and compassionate care have earned him over 100 five-star reviews from patients who once described themselves as dental phobic.
                    </Typography>
                  </CardContent>
                </Card>
                
                <Card 
                  elevation={3} 
                  sx={{ 
                    p: 3, 
                    borderRadius: 2,
                    mb: 4
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Contact Information
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                      {contactInfo.map((info, index) => (
                        <Box 
                          key={index} 
                          component="a"
                          href={info.action}
                          sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            mb: 3,
                            color: 'inherit',
                            textDecoration: 'none',
                            '&:hover': {
                              color: theme.palette.primary.main
                            }
                          }}
                        >
                          <Box sx={{ 
                            mr: 2, 
                            color: theme.palette.primary.main,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(25, 118, 210, 0.1)'
                          }}>
                            {info.icon}
                          </Box>
                          <Box>
                            <Typography variant="h6">
                              {info.title}
                            </Typography>
                            <Typography variant="body1">
                              {info.content}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
                
                <Card 
                  elevation={3} 
                  sx={{ 
                    p: 3, 
                    borderRadius: 2,
                    flexGrow: 1
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <TimeIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                      <Typography variant="h5">
                        Office Hours
                      </Typography>
                    </Box>
                    
                    {officeHours.map((item, index) => (
                      <Box 
                        key={index} 
                        sx={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          borderBottom: index < officeHours.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none',
                          py: 1.5
                        }}
                      >
                        <Typography variant="body1" fontWeight={500}>
                          {item.day}
                        </Typography>
                        <Typography variant="body1">
                          {item.hours}
                        </Typography>
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
        
        {/* Map Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
            Find Us
          </Typography>
          <Paper 
            elevation={3} 
            sx={{ 
              borderRadius: 2,
              overflow: 'hidden',
              height: 450
            }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193578.74109041138!2d-74.25986773513004!3d40.697403441436814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sStaten%20Island%2C%20NY!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </Paper>
        </Box>
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
