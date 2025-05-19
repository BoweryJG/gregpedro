import { createClient } from '@supabase/supabase-js';

// These will be replaced with actual values when deploying
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'your-supabase-url';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'your-supabase-anon-key';

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
