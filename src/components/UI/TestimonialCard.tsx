import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Avatar, 
  Box, 
  Rating 
} from '@mui/material';
import { FormatQuote as FormatQuoteIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  quote: string;
  rating: number;
  image?: string;
  date?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  quote,
  rating,
  image,
  date
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card 
        sx={{ 
          height: '100%',
          p: 2,
          borderRadius: 3,
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          position: 'relative',
          overflow: 'visible'
        }}
      >
        <Box 
          sx={{ 
            position: 'absolute', 
            top: -20, 
            left: 20, 
            color: 'primary.main',
            backgroundColor: 'white',
            borderRadius: '50%',
            p: 1,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        >
          <FormatQuoteIcon fontSize="large" />
        </Box>
        
        <CardContent sx={{ pt: 3 }}>
          <Typography 
            variant="body1" 
            sx={{ 
              fontStyle: 'italic',
              mb: 3,
              minHeight: '80px'
            }}
          >
            "{quote}"
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <Avatar 
              src={image} 
              alt={name}
              sx={{ 
                width: 50, 
                height: 50,
                mr: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              {name.charAt(0)}
            </Avatar>
            
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {name}
              </Typography>
              
              {date && (
                <Typography variant="caption" color="text.secondary">
                  {date}
                </Typography>
              )}
              
              <Rating 
                value={rating} 
                readOnly 
                precision={0.5}
                size="small"
                sx={{ mt: 0.5 }}
              />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
