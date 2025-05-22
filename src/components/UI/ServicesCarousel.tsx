import React from 'react';
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
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
  const [touchStart, setTouchStart] = React.useState<number | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const slideWidth = isMobile ? 0.8 : 0.5;

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStart === null) return;
    const delta = e.changedTouches[0].clientX - touchStart;
    if (delta > 50) {
      handlePrev();
    } else if (delta < -50) {
      handleNext();
    }
    setTouchStart(null);
  };

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        sx={{
          display: 'flex',
          width: `${services.length * slideWidth * 100}%`,
          transform: `translateX(-${index * slideWidth * 100}%)`,
          transition: 'transform 0.5s ease',
          cursor: 'grab',
        }}
      >
        {services.map((service) => (
          <Box
            key={service.title}
            sx={{ flex: `0 0 ${slideWidth * 100}%`, p: 2, display: 'flex', justifyContent: 'center' }}
          >
            <Box sx={{ width: '100%', maxWidth: 300 }}>
              <ServiceCard {...service} />
            </Box>
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
      <Typography variant="caption" align="center" sx={{ mt: 2, width: '100%' }}>
        Swipe to explore services
      </Typography>
    </Box>
  );
};

export default ServicesCarousel;
