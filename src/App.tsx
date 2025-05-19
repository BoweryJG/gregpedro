import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';

// Layout
import Layout from './components/Layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

// AI Components
import ChatBot from './components/AI/ChatBot';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Add more routes as needed */}
            <Route path="*" element={<HomePage />} />
          </Routes>
          <ChatBot />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
