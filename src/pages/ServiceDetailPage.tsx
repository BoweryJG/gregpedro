import React from 'react';
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button
} from '@mui/material';
import { Check as CheckIcon, ArrowBack } from '@mui/icons-material';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { services, Service } from '../data/services';

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string}>();
  const service: Service | undefined = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" align="center">Service not found</Typography>
        <Button component={RouterLink} to="/services" sx={{ mt: 2 }} startIcon={<ArrowBack />}>Back to Services</Button>
      </Container>
    );
  }

  return (
    <Box>
      <Box sx={{ pt: 10, pb: 5, backgroundColor: 'primary.main', color: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1">{service.title}</Typography>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Box sx={{ py: 6 }}>
          <Box component="img" src={service.image} alt={service.title} sx={{ width: '100%', borderRadius: 4, mb: 4 }} />
          <Typography variant="body1" paragraph>{service.fullDescription}</Typography>

          {service.benefits && (
            <>
              <Typography variant="h5" gutterBottom>Benefits</Typography>
              <List>
                {service.benefits.map((benefit, i) => (
                  <ListItem key={i} disableGutters>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckIcon color="secondary" /></ListItemIcon>
                    <ListItemText primary={benefit} />
                  </ListItem>
                ))}
              </List>
            </>
          )}

          {service.process && (
            <>
              <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>Our Process</Typography>
              <List>
                {service.process.map((step, i) => (
                  <ListItem key={i} disableGutters>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckIcon color="secondary" /></ListItemIcon>
                    <ListItemText primary={step} />
                  </ListItem>
                ))}
              </List>
            </>
          )}

          {service.faq && (
            <>
              <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>FAQs</Typography>
              {service.faq.map((item, i) => (
                <Box key={i} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{item.question}</Typography>
                  <Typography variant="body2">{item.answer}</Typography>
                </Box>
              ))}
            </>
          )}

          <Button variant="contained" color="primary" component={RouterLink} to="/contact" sx={{ mt: 4 }}>
            Schedule a Consultation
          </Button>
          <Button component={RouterLink} to="/services" sx={{ mt: 2, ml: 2 }} startIcon={<ArrowBack />}>Back to Services</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceDetailPage;
