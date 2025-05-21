import React, { useState } from 'react';
import { Button, Box, CircularProgress } from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import {
  loadGoogleApi,
  initGoogleClient,
  signInIfNeeded,
  createMeetLink
} from '../../services/googleMeet';

const GoogleMeetConsultation: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleStart = async () => {
    setLoading(true);
    try {
      await loadGoogleApi();
      await initGoogleClient();
      await signInIfNeeded();
      const link = await createMeetLink();
      if (link) {
        window.open(link, '_blank');
      } else {
        alert('Unable to create a meeting link at this time.');
      }
    } catch (err) {
      console.error('Google Meet error:', err);
      alert('There was an error connecting to Google Meet.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleStart}
        startIcon={!loading ? <VideoCallIcon /> : undefined}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Start Virtual Consultation'}
      </Button>
    </Box>
  );
};

export default GoogleMeetConsultation;
