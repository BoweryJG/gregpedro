import React from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import ServiceCard from './ServiceCard';

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ServicesCarouselProps {
  services: ServiceItem[];
}

const ServicesCarousel: React.FC<ServicesCarouselProps> = ({ services }) => {
  const [index, setIndex] = React.useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex',
          width: `${services.length * 100}%`,
          transform: `translateX(-${index * (100 / services.length)}%)`,
          transition: 'transform 0.5s ease',
        }}
      >
        {services.map((service) => (
          <Box key={service.title} sx={{ flex: '0 0 100%', p: 2 }}>
            <ServiceCard {...service} />
          </Box>
        ))}
      </Box>
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 8,
          transform: 'translateY(-50%)',
          backgroundColor: 'background.paper',
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 8,
          transform: 'translateY(-50%)',
          backgroundColor: 'background.paper',
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default ServicesCarousel;
