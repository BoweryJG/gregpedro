// Make.com integration for automations
// This service connects to your Make.com instance to trigger scenarios and automations

interface ScenarioPayload {
  [key: string]: any;
}

interface MakeResponse {
  success: boolean;
  data?: any;
  error?: string;
}

// Webhook URLs for your Make.com scenarios
const MAKE_WEBHOOK_BASE = process.env.REACT_APP_MAKE_WEBHOOK_BASE || 'https://hook.us.make.com';
// Individual webhook endpoints for different scenarios
const MAKE_WEBHOOKS = {
  APPOINTMENT: process.env.REACT_APP_MAKE_APPOINTMENT_WEBHOOK || '/hook/your-appointment-webhook-id',
  YOMI_INFO: process.env.REACT_APP_MAKE_YOMI_INFO_WEBHOOK || '/hook/your-yomi-info-webhook-id',
  CONSULTATION: process.env.REACT_APP_MAKE_CONSULTATION_WEBHOOK || '/hook/your-consultation-webhook-id',
  INSURANCE: process.env.REACT_APP_MAKE_INSURANCE_WEBHOOK || '/hook/your-insurance-webhook-id',
  CONTENT: process.env.REACT_APP_MAKE_CONTENT_WEBHOOK || '/hook/your-content-webhook-id',
};

/**
 * Trigger a Make.com scenario by webhook
 * @param webhookPath - The webhook path for the scenario
 * @param payload - Data to send to the scenario
 */
export const triggerScenario = async (
  webhookPath: string, 
  payload: ScenarioPayload
): Promise<MakeResponse> => {
  try {
    const response = await fetch(`${MAKE_WEBHOOK_BASE}${webhookPath}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Scenario error: ${response.status}`);
    }

    // Make.com webhooks may not always return JSON
    let data;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }
    
    return { success: true, data };
  } catch (error) {
    console.error('Error triggering Make.com scenario:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
};

/**
 * Schedule a patient appointment
 * @param patientInfo - Patient information and appointment details
 */
export const scheduleAppointment = async (patientInfo: {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  procedureType: string;
  notes?: string;
}): Promise<MakeResponse> => {
  return triggerScenario(MAKE_WEBHOOKS.APPOINTMENT, patientInfo);
};

/**
 * Send information about Yomi implant technology to a patient
 * @param patientInfo - Patient contact information
 */
export const sendYomiInfo = async (patientInfo: {
  name: string;
  email: string;
  phone?: string;
}): Promise<MakeResponse> => {
  return triggerScenario(MAKE_WEBHOOKS.YOMI_INFO, patientInfo);
};

/**
 * Register a patient for a virtual consultation
 * @param consultationInfo - Consultation details
 */
export const scheduleVirtualConsultation = async (consultationInfo: {
  name: string;
  email: string;
  phone: string;
  consultationType: 'implant' | 'tmj' | 'em-face' | 'other';
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}): Promise<MakeResponse> => {
  return triggerScenario(MAKE_WEBHOOKS.CONSULTATION, consultationInfo);
};

/**
 * Verify insurance coverage for a specific procedure
 * @param insuranceInfo - Patient insurance information
 */
export const verifyInsuranceCoverage = async (insuranceInfo: {
  name: string;
  email: string;
  insuranceProvider: string;
  insuranceMemberId?: string;
  procedureType: 'implant' | 'tmj' | 'em-face' | 'other';
}): Promise<MakeResponse> => {
  return triggerScenario(MAKE_WEBHOOKS.INSURANCE, insuranceInfo);
};

/**
 * Subscribe patient to educational content series
 * @param subscriptionInfo - Patient subscription preferences
 */
export const subscribeToContentSeries = async (subscriptionInfo: {
  name: string;
  email: string;
  interests: Array<'implants' | 'tmj' | 'em-face' | 'general'>;
}): Promise<MakeResponse> => {
  return triggerScenario(MAKE_WEBHOOKS.CONTENT, subscriptionInfo);
};
