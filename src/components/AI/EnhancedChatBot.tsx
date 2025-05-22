import React, { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Paper, 
  Avatar, 
  IconButton,
  CircularProgress,
  Collapse,
  Fade,
  Chip,
  Tooltip,
  Menu,
  MenuItem,
  Divider
} from '@mui/material';
import { 
  Send as SendIcon, 
  Close as CloseIcon,
  SmartToy as BotIcon,
  Chat as ChatIcon,
  MoreVert as MoreIcon,
  CalendarToday as CalendarIcon,
  Info as InfoIcon,
  MedicalServices as MedicalIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { processPatientQuery } from '../../services/dentalChatbot';
import { 
  scheduleAppointment, 
  sendYomiInfo, 
  scheduleVirtualConsultation,
  verifyInsuranceCoverage
} from '../../services/api';

interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  category?: 'yomi' | 'tmj' | 'em-face' | 'general';
  actionButtons?: Array<{
    label: string;
    icon: React.ReactNode;
    action: () => void;
    tooltip: string;
  }>;
}

interface UserInfo {
  name?: string;
  email?: string;
  phone?: string;
}

const EnhancedChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      text: "Hi there! I'm Dr. Pedro's virtual assistant, specializing in Yomi robotic dental implants, TMJ treatments, and EM face aesthetic procedures. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
      category: 'general'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  // We're tracking this info for potential future use
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userInfo, setUserInfo] = useState<UserInfo>({});
  const [isCollectingInfo, setIsCollectingInfo] = useState(false);
  const [infoType, setInfoType] = useState<'appointment' | 'yomi-info' | 'consultation' | 'insurance' | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Convert messages to format needed by chatbot service
  const getConversationHistory = () => {
    return messages.map(msg => ({
      role: msg.sender === 'user' ? 'user' as const : 'assistant' as const,
      content: msg.text
    }));
  };

  const handleSend = async () => {
    if (input.trim() === '') return;
    
    const userMessage: ChatMessage = {
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // If we're collecting user info, process that instead of sending to AI
    if (isCollectingInfo && infoType) {
      handleInfoCollection(input);
      return;
    }
    
    try {
      // Get conversation history for context
      const history = getConversationHistory();
      
      // Process query through our specialized dental chatbot
      const response = await processPatientQuery(input, history);
      
      if (!response.success) {
        throw new Error(response.error || 'Unknown error');
      }
      
      // Determine category based on content
      const lowerResponse = response.message.toLowerCase();
      let category: 'yomi' | 'tmj' | 'em-face' | 'general' = 'general';
      
      if (lowerResponse.includes('yomi') || lowerResponse.includes('implant')) {
        category = 'yomi';
      } else if (lowerResponse.includes('tmj') || lowerResponse.includes('jaw pain')) {
        category = 'tmj';
      } else if (lowerResponse.includes('em face') || lowerResponse.includes('aesthetic')) {
        category = 'em-face';
      }
      
      // Create action buttons based on context
      const actionButtons = generateActionButtons(category, response.message);
      
      const botMessage: ChatMessage = {
        text: response.message,
        sender: 'bot',
        timestamp: new Date(),
        category,
        actionButtons
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      
      // Enhanced error message with more debugging information
      let errorText = "I'm sorry, I'm having trouble connecting right now. Please try again later or contact our office directly at (347) 344-5806.";
      
      // For development environment, add more details
      if (process.env.NODE_ENV === 'development') {
        errorText += "\n\nDebug info: " + (error instanceof Error ? error.message : String(error));
      }
      
      const errorMessage: ChatMessage = {
        text: errorText,
        sender: 'bot',
        timestamp: new Date(),
        category: 'general'
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Generate contextual action buttons based on message content
  const generateActionButtons = (
    category: 'yomi' | 'tmj' | 'em-face' | 'general',
    message: string
  ) => {
    const buttons = [];
    
    // Always offer appointment scheduling
    buttons.push({
      label: 'Schedule',
      icon: <CalendarIcon fontSize="small" />,
      action: () => startInfoCollection('appointment'),
      tooltip: 'Schedule an appointment'
    });
    
    // Add category-specific actions
    if (category === 'yomi') {
      buttons.push({
        label: 'Yomi Info',
        icon: <InfoIcon fontSize="small" />,
        action: () => startInfoCollection('yomi-info'),
        tooltip: 'Get detailed Yomi information'
      });
    }
    
    // Add consultation option for TMJ and EM-face
    if (category === 'tmj' || category === 'em-face') {
      buttons.push({
        label: 'Consultation',
        icon: <MedicalIcon fontSize="small" />,
        action: () => startInfoCollection('consultation'),
        tooltip: 'Schedule a virtual consultation'
      });
    }
    
    // Add insurance verification for all categories
    buttons.push({
      label: 'Insurance',
      icon: <CheckCircleIcon fontSize="small" />,
      action: () => startInfoCollection('insurance'),
      tooltip: 'Verify insurance coverage'
    });
    
    return buttons;
  };
  
  // Start collecting user info for a specific action
  const startInfoCollection = (type: 'appointment' | 'yomi-info' | 'consultation' | 'insurance') => {
    setIsCollectingInfo(true);
    setInfoType(type);
    
    let message = '';
    switch (type) {
      case 'appointment':
        message = "I'd be happy to help you schedule an appointment. Could you please provide your name, email, and phone number? (separated by commas)";
        break;
      case 'yomi-info':
        message = "I'll send you detailed information about our Yomi robotic implant technology. Could you share your name and email address? (separated by a comma)";
        break;
      case 'consultation':
        message = "Virtual consultations are a great way to discuss your needs with Dr. Pedro. Please provide your name, email, and phone number for scheduling. (separated by commas)";
        break;
      case 'insurance':
        message = "I can help verify your insurance coverage. Please provide your name, email, and insurance provider. (separated by commas)";
        break;
    }
    
    const botMessage: ChatMessage = {
      text: message,
      sender: 'bot',
      timestamp: new Date(),
      category: 'general'
    };
    
    setMessages(prev => [...prev, botMessage]);
  };
  
  // Handle the collected user information
  const handleInfoCollection = async (input: string) => {
    setIsLoading(true);
    console.log('Processing user information for:', infoType);
    
    try {
      const parts = input.split(',').map(part => part.trim());
      const name = parts[0];
      const email = parts[1];
      const thirdValue = parts[2]; // phone or insurance provider
      
      setUserInfo({
        name,
        email,
        phone: infoType !== 'insurance' ? thirdValue : undefined
      });
      
      let response;
      let successMessage = '';
      
      switch (infoType) {
        case 'appointment':
          response = await scheduleAppointment({
            name,
            email,
            phone: thirdValue,
            preferredDate: '', // Will be collected in follow-up
            preferredTime: '', // Will be collected in follow-up
            procedureType: '', // Will be collected in follow-up
            notes: ''
          });
          successMessage = `Thank you, ${name}. Our office will contact you soon to finalize your appointment details. Is there anything specific you'd like us to know about your appointment needs?`;
          break;
          
        case 'yomi-info':
          response = await sendYomiInfo({
            name,
            email
          });
          successMessage = `Thanks, ${name}. We've sent comprehensive information about our Yomi robotic implant technology to ${email}. Do you have any specific questions about Yomi implants?`;
          break;
          
        case 'consultation':
          response = await scheduleVirtualConsultation({
            name,
            email,
            phone: thirdValue,
            consultationType: 'other', // Default, will be refined later
            preferredDate: '', // Will be collected in follow-up
            preferredTime: '', // Will be collected in follow-up
            notes: ''
          });
          successMessage = `Thank you, ${name}. Our team will reach out to schedule your virtual consultation. What specific concerns would you like to discuss during your consultation?`;
          break;
          
        case 'insurance':
          response = await verifyInsuranceCoverage({
            name,
            email,
            insuranceProvider: thirdValue,
            procedureType: 'other' // Default, will be refined based on conversation
          });
          successMessage = `Thanks, ${name}. We'll verify your coverage with ${thirdValue} and send the details to ${email}. Which specific procedure are you interested in having covered?`;
          break;
      }
      
      if (!response?.success) {
        throw new Error('Failed to process your request');
      }
      
      const botMessage: ChatMessage = {
        text: successMessage,
        sender: 'bot',
        timestamp: new Date(),
        category: 'general'
      };
      
      setMessages(prev => [...prev, botMessage]);
      
    } catch (error) {
      console.error('Error processing user info:', error);
      
      const errorMessage: ChatMessage = {
        text: `I'm sorry, there was an issue processing your information. Please try again or contact our office directly at (347) 344-5806.`,
        sender: 'bot',
        timestamp: new Date(),
        category: 'general'
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setIsCollectingInfo(false);
      setInfoType(null);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  const clearChat = () => {
    setMessages([
      {
        text: "Hi there! I'm Dr. Pedro's virtual assistant, specializing in Yomi robotic dental implants, TMJ treatments, and EM face aesthetic procedures. How can I help you today?",
        sender: 'bot',
        timestamp: new Date(),
        category: 'general'
      }
    ]);
    handleMenuClose();
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
      <Collapse in={isOpen} timeout={300}>
        <Paper 
          elevation={3}
          sx={{ 
            width: { xs: '100vw', sm: 380 },
            height: 500,
            maxWidth: { xs: 'calc(100vw - 40px)', sm: 380 },
            borderRadius: 2,
            overflow: 'hidden',
            mb: 2,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Chat Header */}
          <Box 
            sx={{ 
              p: 2, 
              backgroundColor: 'primary.main', 
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <BotIcon sx={{ mr: 1 }} />
              <Typography variant="h6">
                Dr. Pedro's Assistant
              </Typography>
            </Box>
            <Box>
              <IconButton 
                size="small" 
                onClick={handleMenuOpen}
                sx={{ color: 'white', mr: 1 }}
              >
                <MoreIcon />
              </IconButton>
              <IconButton 
                size="small" 
                onClick={toggleChat}
                sx={{ color: 'white' }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={clearChat}>Clear conversation</MenuItem>
              <Divider />
              <MenuItem onClick={() => {
                window.location.href = 'tel:+13473445806';
                handleMenuClose();
              }}>
                Call Office: (347) 344-5806
              </MenuItem>
            </Menu>
          </Box>
          
          {/* Messages Area */}
          <Box 
            sx={{ 
              p: 2, 
              flexGrow: 1, 
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            {messages.map((message, index) => (
              <Box 
                key={index}
                sx={{ 
                  display: 'flex',
                  flexDirection: message.sender === 'user' ? 'row-reverse' : 'row',
                  alignItems: 'flex-start',
                  mb: 1
                }}
              >
                {message.sender === 'bot' && (
                  <Avatar 
                    sx={{ 
                      bgcolor: 'primary.main',
                      width: 32,
                      height: 32,
                      mr: 1
                    }}
                  >
                    <BotIcon fontSize="small" />
                  </Avatar>
                )}
                
                <Box sx={{ maxWidth: '80%' }}>
                  <Paper 
                    sx={{ 
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: message.sender === 'user' ? 'primary.main' : 'grey.100',
                      color: message.sender === 'user' ? 'white' : 'text.primary',
                      ml: message.sender === 'user' ? 1 : 0
                    }}
                  >
                    <Typography variant="body2">
                      {message.text}
                    </Typography>
                    
                    {message.category && message.sender === 'bot' && (
                      <Chip 
                        label={message.category === 'yomi' ? 'Yomi Implants' : 
                               message.category === 'tmj' ? 'TMJ Treatment' :
                               message.category === 'em-face' ? 'EM Face' : 'General'}
                        size="small"
                        color={message.category === 'yomi' ? 'primary' : 
                               message.category === 'tmj' ? 'secondary' :
                               message.category === 'em-face' ? 'success' : 'default'}
                        sx={{ mt: 1, mr: 1, fontSize: '0.7rem' }}
                      />
                    )}
                    
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        display: 'block', 
                        mt: 0.5,
                        opacity: 0.7,
                        textAlign: message.sender === 'user' ? 'right' : 'left'
                      }}
                    >
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </Typography>
                  </Paper>
                  
                  {/* Action Buttons */}
                  {message.actionButtons && message.actionButtons.length > 0 && (
                    <Box sx={{ display: 'flex', gap: 1, mt: 1, flexWrap: 'wrap' }}>
                      {message.actionButtons.map((btn, i) => (
                        <Tooltip key={i} title={btn.tooltip}>
                          <Button
                            size="small"
                            variant="outlined"
                            startIcon={btn.icon}
                            onClick={btn.action}
                            sx={{ fontSize: '0.7rem', py: 0.5 }}
                          >
                            {btn.label}
                          </Button>
                        </Tooltip>
                      ))}
                    </Box>
                  )}
                </Box>
              </Box>
            ))}
            
            {isLoading && (
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 5 }}>
                <CircularProgress size={20} sx={{ mr: 2 }} />
                <Typography variant="body2" color="text.secondary">
                  Thinking...
                </Typography>
              </Box>
            )}
            
            <div ref={messagesEndRef} />
          </Box>
          
          {/* Input Area */}
          <Box 
            sx={{ 
              p: 2, 
              borderTop: '1px solid',
              borderColor: 'divider',
              backgroundColor: 'background.paper',
              display: 'flex'
            }}
          >
            <TextField
              fullWidth
              placeholder={isCollectingInfo 
                ? "Enter the requested information..." 
                : "Ask about Yomi implants, TMJ, or EM face..."}
              variant="outlined"
              size="small"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              sx={{ mr: 1 }}
            />
            <Button 
              variant="contained" 
              color="primary"
              disabled={isLoading || input.trim() === ''}
              onClick={handleSend}
              sx={{ minWidth: 'auto', px: 2 }}
            >
              <SendIcon />
            </Button>
          </Box>
        </Paper>
      </Collapse>
      
      <Fade in={!isOpen}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={toggleChat}
            sx={{ 
              width: 60,
              height: 60,
              borderRadius: '50%',
              boxShadow: 3
            }}
          >
            <ChatIcon />
          </Button>
        </motion.div>
      </Fade>
    </Box>
  );
};

export default EnhancedChatBot;
