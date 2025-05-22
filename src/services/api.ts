// Direct API Integration for Dr. Pedro's dental practice
// Connects frontend directly to backend endpoints for various functions

// Response type for all API calls
interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

// Base URL for backend API
// Default to Netlify functions for local development/deployments
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || '/.netlify/functions';

/**
 * Generic function to make API requests
 */
export async function apiRequest<T = any>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  data?: any,
  headers?: Record<string, string>
): Promise<ApiResponse<T>> {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const requestOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      ...(data && { body: JSON.stringify(data) })
    };
    
    const response = await fetch(url, requestOptions);
    
    // Check if the response is JSON
    const contentType = response.headers.get('content-type');
    const isJson = contentType && contentType.includes('application/json');
    
    const responseData = isJson ? await response.json() : await response.text();
    
    if (!response.ok) {
      throw new Error(
        isJson && responseData.message 
          ? responseData.message 
          : `API error: ${response.status}`
      );
    }
    
    return { 
      success: true, 
      data: responseData
    };
  } catch (error) {
    console.error('API request failed:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Schedule a patient appointment
 */
export const scheduleAppointment = async (patientInfo: {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  procedureType: string;
  notes?: string;
}): Promise<ApiResponse> => {
  return apiRequest('/api/appointments', 'POST', patientInfo);
};

/**
 * Send information about Yomi implant technology to a patient
 */
export const sendYomiInfo = async (patientInfo: {
  name: string;
  email: string;
  phone?: string;
}): Promise<ApiResponse> => {
  return apiRequest('/api/yomi-info', 'POST', patientInfo);
};

/**
 * Register a patient for a virtual consultation
 */
export const scheduleVirtualConsultation = async (consultationInfo: {
  name: string;
  email: string;
  phone: string;
  consultationType: 'implant' | 'tmj' | 'em-face' | 'other';
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}): Promise<ApiResponse> => {
  return apiRequest('/api/consultations', 'POST', consultationInfo);
};

/**
 * Verify insurance coverage for a specific procedure
 */
export const verifyInsuranceCoverage = async (insuranceInfo: {
  name: string;
  email: string;
  insuranceProvider: string;
  insuranceMemberId?: string;
  procedureType: 'implant' | 'tmj' | 'em-face' | 'other';
}): Promise<ApiResponse> => {
  return apiRequest('/api/insurance-verification', 'POST', insuranceInfo);
};

/**
 * Subscribe patient to educational content series
 */
export const subscribeToContentSeries = async (subscriptionInfo: {
  name: string;
  email: string;
  interests: Array<'implants' | 'tmj' | 'em-face' | 'general'>;
}): Promise<ApiResponse> => {
  return apiRequest('/api/content-subscriptions', 'POST', subscriptionInfo);
};

/**
 * Contact form submission
 */
export const submitContactForm = async (contactInfo: {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject?: string;
}): Promise<ApiResponse> => {
  return apiRequest('/api/contact', 'POST', contactInfo);
};

/**
 * Get available appointment slots
 */
export const getAvailableAppointments = async (
  startDate: string,
  endDate: string,
  procedureType?: string
): Promise<ApiResponse> => {
  return apiRequest(
    `/api/appointments/available?startDate=${startDate}&endDate=${endDate}${procedureType ? `&procedureType=${procedureType}` : ''}`
  );
};

/**
 * Submit a review or testimonial
 */
export const submitReview = async (reviewData: {
  name: string;
  email: string;
  rating: number;
  procedure: string;
  reviewText: string;
  consentToPublish: boolean;
}): Promise<ApiResponse> => {
  return apiRequest('/api/reviews', 'POST', reviewData);
};

/**
 * Request before/after photos for a specific procedure
 */
export const requestBeforeAfterPhotos = async (requestData: {
  name: string;
  email: string;
  procedure: 'implant' | 'tmj' | 'em-face' | 'other';
}): Promise<ApiResponse> => {
  return apiRequest('/api/before-after-photos', 'POST', requestData);
};

/**
 * Send a message to the AI chatbot via backend proxy to OpenRouter
 */
export const sendAIChatMessage = async (data: {
  messages: Array<{role: 'system' | 'user' | 'assistant', content: string}>;
  model?: string;
  maxTokens?: number;
  temperature?: number;
}): Promise<ApiResponse<{message: string}>> => {
  try {
    console.log('Sending AI chat message to', `${API_BASE_URL}/api/ai/chat`);
    const response = await apiRequest<{message: string}>('/api/ai/chat', 'POST', data);
    
    // Log response for debugging
    if (!response.success) {
      console.error('AI chat message failed:', response.error);
    } else {
      console.log('AI chat message succeeded with data:', response.data);
    }
    
    return response;
  } catch (error) {
    console.error('Error in sendAIChatMessage:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error in sendAIChatMessage'
    };
  }
};
