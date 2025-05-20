import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  CardActionArea,
  CardActions
} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  link
}) => {
  return (
    <motion.div
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card 
        sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}
      >
        <CardActionArea component={RouterLink} to={link}>
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt={title}
            sx={{ objectFit: 'cover' }}
          />
          <CardContent sx={{ flexGrow: 1, p: 3 }}>
            <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 600 }}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ p: 2, pt: 0 }}>
          <Button 
            component={RouterLink} 
            to={link}
            size="small" 
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{ ml: 'auto' }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
