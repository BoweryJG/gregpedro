import supabase from './supabase';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  contactPreference: string;
  appointmentType: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  const { error } = await supabase.from('contact_requests').insert([data]);
  return { error };
};
