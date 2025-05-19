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
  Fade
} from '@mui/material';
import { 
  Send as SendIcon, 
  Close as CloseIcon,
  SmartToy as BotIcon,
  Chat as ChatIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { handlePatientQuestion } from '../../services/openRouter';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi there! I'm Dr. Pedro's virtual assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '') return;
    
    const userMessage: Message = {
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      const response = await handlePatientQuestion(input);
      
      const botMessage: Message = {
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      
      const errorMessage: Message = {
        text: "I'm sorry, I'm having trouble connecting right now. Please try again later or contact our office directly.",
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
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

  return (
    <Box sx={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
      <Collapse in={isOpen} timeout={300}>
        <Paper 
          elevation={3}
          sx={{ 
            width: { xs: '100vw', sm: 350 },
            height: 450,
            maxWidth: { xs: 'calc(100vw - 40px)', sm: 350 },
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
                Dental Assistant
              </Typography>
            </Box>
            <IconButton 
              size="small" 
              onClick={toggleChat}
              sx={{ color: 'white' }}
            >
              <CloseIcon />
            </IconButton>
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
                
                <Paper 
                  sx={{ 
                    p: 1.5,
                    maxWidth: '80%',
                    borderRadius: 2,
                    bgcolor: message.sender === 'user' ? 'primary.main' : 'grey.100',
                    color: message.sender === 'user' ? 'white' : 'text.primary',
                    ml: message.sender === 'user' ? 1 : 0
                  }}
                >
                  <Typography variant="body2">
                    {message.text}
                  </Typography>
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
              placeholder="Type your question..."
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

export default ChatBot;
