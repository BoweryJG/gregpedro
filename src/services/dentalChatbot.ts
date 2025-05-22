// Specialized Dental Chatbot for Dr. Pedro's practice
// Focused on TMJ, EM face, dental implants, and Yomi robotic implant procedures
// Now using backend proxy to OpenRouter for improved security

interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface ChatResponse {
  message: string;
  success: boolean;
  error?: string;
}

// Knowledge context about Dr. Pedro's specialized procedures
const specialistKnowledge = `
Dr. Greg Pedro is the only dentist in Staten Island and one of the few in New York City to offer Yomi robotic technology for dental implant placement.

Key Procedures:
1. Yomi Robotic Dental Implants:
   - Sub-millimeter precision and accuracy
   - Minimally invasive procedures
   - Faster recovery times and less downtime
   - Reduced number of appointments
   - Same-day surgery possibilities
   - Enhanced predictability of outcomes

2. TMJ Procedures:
   - Comprehensive TMJ disorder diagnosis
   - Non-surgical TMJ treatments
   - Custom oral appliances
   - Therapeutic injections
   - Physical therapy modalities
   - Long-term TMJ management

3. EM Face Aesthetic Procedures:
   - Facial rejuvenation
   - Dermal fillers
   - Neurotoxin treatments
   - Facial contouring
   - Non-surgical facial enhancement
   - Combined dental-aesthetic approaches
`;

import { sendAIChatMessage } from './api';

/**
 * Generates a dental assistant response using GPT-4o through backend proxy to OpenRouter
 * with a Socratic and thoughtful tone
 */
export const generateDentalResponse = async (
  userQuery: string,
  conversationHistory: ChatMessage[] = []
): Promise<ChatResponse> => {
  try {
    // Build conversation with history, specialist knowledge, and style guidance
    const messages: ChatMessage[] = [
      {
        role: 'system',
        content: `You are Dr. Pedro's dental assistant specializing in Yomi robotic dental implants, TMJ procedures, and EM face aesthetic treatments in Staten Island, NY. 
        
        ${specialistKnowledge}
        
        COMMUNICATION STYLE:
        - Use a Socratic, thoughtful tone that guides patients to understanding
        - Be concise and clear, never verbose
        - Focus on accuracy and educational value
        - When appropriate, ask thoughtful questions to better understand patient needs
        - Highlight Dr. Pedro's unique capabilities, especially being the only Yomi provider in Staten Island
        - For appointment requests or complex questions, recommend contacting the office directly
        
        SPECIAL INSTRUCTIONS:
        - Always provide accurate information about dental procedures
        - When discussing Yomi implants, emphasize the precision and reduced recovery benefits
        - For TMJ inquiries, acknowledge the complexity and customized treatment approach
        - For EM face questions, highlight the aesthetic and functional benefits
        - Never diagnose specific conditions
        - If unsure, suggest an in-person consultation rather than speculating`
      },
      ...conversationHistory,
      {
        role: 'user',
        content: userQuery
      }
    ];

    // Call our backend API instead of OpenRouter directly
    const result = await sendAIChatMessage({
      messages,
      model: 'openai/gpt-4o',
      maxTokens: 500,
      temperature: 0.7
    });

    if (!result.success || !result.data) {
      throw new Error(result.error || 'Unknown error');
    }

    return {
      success: true,
      message: result.data.message
    };
  } catch (error) {
    console.error('Error generating dental assistant response:', error);
    return {
      success: false,
      message: "I apologize, but I'm having trouble accessing my knowledge base right now. Please try again or contact our office directly at (347) 344-5806 for immediate assistance.",
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

/**
 * Specialized function for Yomi implant inquiries
 */
export const handleYomiImplantQuery = async (
  query: string,
  conversationHistory: ChatMessage[] = []
): Promise<ChatResponse> => {
  // Add Yomi-specific context to the user query
  const enhancedQuery = `Regarding Yomi robotic dental implants: ${query}`;
  return generateDentalResponse(enhancedQuery, conversationHistory);
};

/**
 * Specialized function for TMJ procedure inquiries
 */
export const handleTMJQuery = async (
  query: string,
  conversationHistory: ChatMessage[] = []
): Promise<ChatResponse> => {
  // Add TMJ-specific context to the user query
  const enhancedQuery = `About TMJ treatment: ${query}`;
  return generateDentalResponse(enhancedQuery, conversationHistory);
};

/**
 * Specialized function for EM Face aesthetic inquiries
 */
export const handleEMFaceQuery = async (
  query: string,
  conversationHistory: ChatMessage[] = []
): Promise<ChatResponse> => {
  // Add EM Face-specific context to the user query
  const enhancedQuery = `Regarding EM Face aesthetic procedures: ${query}`;
  return generateDentalResponse(enhancedQuery, conversationHistory);
};

/**
 * Categorize a query and route to specialized handlers
 */
export const processPatientQuery = async (
  query: string,
  conversationHistory: ChatMessage[] = []
): Promise<ChatResponse> => {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('yomi') || 
      lowerQuery.includes('robot') || 
      lowerQuery.includes('implant')) {
    return handleYomiImplantQuery(query, conversationHistory);
  }
  
  if (lowerQuery.includes('tmj') || 
      lowerQuery.includes('jaw') || 
      lowerQuery.includes('joint')) {
    return handleTMJQuery(query, conversationHistory);
  }
  
  if (lowerQuery.includes('em face') || 
      lowerQuery.includes('aesthetic') || 
      lowerQuery.includes('cosmetic')) {
    return handleEMFaceQuery(query, conversationHistory);
  }
  
  // For general inquiries
  return generateDentalResponse(query, conversationHistory);
};
