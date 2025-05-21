// Helpers for working with Google Meet links using the Google Calendar API
// This file provides basic functions to initialize the Google API client,
// authenticate the user, and generate a Meet meeting link.

// The API key and OAuth client ID are expected to be provided via environment variables:
// REACT_APP_GOOGLE_API_KEY and REACT_APP_GOOGLE_CLIENT_ID.

declare global {
  interface Window {
    gapi: any;
  }
}

/**
 * Loads the Google API script if it hasn't been loaded yet.
 */
export const loadGoogleApi = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (window.gapi) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Google API'));
    document.body.appendChild(script);
  });
};

/**
 * Initializes the Google API client with Calendar scope.
 */
export const initGoogleClient = async (): Promise<void> => {
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  if (!apiKey || !clientId) {
    throw new Error('Google API credentials are missing');
  }

  await new Promise<void>((resolve, reject) => {
    window.gapi.load('client:auth2', {
      callback: async () => {
        try {
          await window.gapi.client.init({
            apiKey,
            clientId,
            discoveryDocs: [
              'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
            ],
            scope: 'https://www.googleapis.com/auth/calendar.events'
          });
          resolve();
        } catch (err) {
          reject(err);
        }
      },
      onerror: () => reject(new Error('gapi failed to load'))
    });
  });
};

/**
 * Ensures the user is signed in before making API requests.
 */
export const signInIfNeeded = async (): Promise<void> => {
  const auth = window.gapi.auth2.getAuthInstance();
  if (!auth.isSignedIn.get()) {
    await auth.signIn();
  }
};

interface EventOptions {
  summary?: string;
  start?: Date;
  end?: Date;
}

/**
 * Creates a Calendar event with Google Meet conferencing enabled and returns the meeting link.
 */
export const createMeetLink = async (
  options: EventOptions = {}
): Promise<string | null> => {
  try {
    const {
      summary = 'Virtual Consultation',
      start = new Date(),
      end = new Date(start.getTime() + 30 * 60 * 1000)
    } = options;

    const event = {
      summary,
      start: { dateTime: start.toISOString() },
      end: { dateTime: end.toISOString() },
      conferenceData: {
        createRequest: { requestId: 'meet-' + Date.now() }
      }
    };

    const response = await window.gapi.client.calendar.events.insert({
      calendarId: 'primary',
      conferenceDataVersion: 1,
      resource: event
    });

    return response.result.hangoutLink as string;
  } catch (error) {
    console.error('Error creating Google Meet link:', error);
    return null;
  }
};

/**
 * Returns a formatted Meet embed URL from a standard meeting link.
 */
export const getEmbedLink = (meetLink: string): string => {
  if (!meetLink) return '';
  const parts = meetLink.split('/');
  return `https://meet.google.com/${parts[parts.length - 1]}`;
};

export default {
  loadGoogleApi,
  initGoogleClient,
  signInIfNeeded,
  createMeetLink,
  getEmbedLink
};
