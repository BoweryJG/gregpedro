import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase environment variables are missing');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

app.post('/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message, contactPreference, appointmentType } = req.body;

    const { error } = await supabase.from('contact_messages').insert({
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      message,
      contact_preference: contactPreference,
      appointment_type: appointmentType,
    });

    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to save message' });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error handling contact request:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
