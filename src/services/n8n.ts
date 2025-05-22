// n8n integration service
// This file provides a simple interface to n8n workflows

/**
 * Basic response interface for all n8n API calls
 */
interface N8nResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

/**
 * Trigger an n8n workflow by webhook
 */
export const triggerWorkflow = async (
  webhookId: string,
  data: any
): Promise<N8nResponse> => {
  try {
    const n8nUrl = process.env.REACT_APP_N8N_WEBHOOK_URL;
    
    if (!n8nUrl) {
      console.error('N8n webhook URL is not configured');
      return { 
        success: false, 
        error: 'N8n webhook URL is not configured' 
      };
    }
    
    const url = `${n8nUrl}/${webhookId}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    
    // Check if the response is JSON
    const contentType = response.headers.get('content-type');
    const isJson = contentType && contentType.includes('application/json');
    
    const responseData = isJson ? await response.json() : await response.text();
    
    return {
      success: true,
      data: responseData
    };
  } catch (error) {
    console.error('Error triggering n8n workflow:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

export default {
  triggerWorkflow
};
