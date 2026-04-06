import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { firstName, lastName, email, phone, techStack, helpType, reason, formType, source } = req.body;

  const isContactForm = formType === 'contact';
  const fullName = isContactForm ? `${firstName} ${lastName}`.trim() : firstName;
  
  if (!email || !phone || !fullName) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Try Google Sheets first
  try {
    console.log('Attempting to save to Google Sheets...');
    console.log('Project ID:', process.env.GOOGLE_PROJECT_ID);
    console.log('Client Email:', process.env.GOOGLE_CLIENT_EMAIL);
    console.log('Sheet ID:', process.env.GOOGLE_SHEET_ID);
    console.log('Private key starts with:', process.env.GOOGLE_PRIVATE_KEY?.substring(0, 50));

    // Fix the private key - handle both quoted and unquoted formats
    let privateKey = process.env.GOOGLE_PRIVATE_KEY || '';
    console.log('Key length:', privateKey.length);
    
    // Remove surrounding quotes if present
    if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
      privateKey = privateKey.slice(1, -1);
    }
    
    // Replace escaped newlines and literal \n with actual newlines
    privateKey = privateKey.replace(/\\n/g, '\n').replace(/\\\\n/g, '\n');

    console.log('Processed key length:', privateKey.length);

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const formType = req.body.formType || 'hire';
    let spreadsheetId;
    let range;
    let values;

    if (formType === 'contact') {
      spreadsheetId = process.env.GOOGLE_SHEET_ID_CONTACT || process.env.GOOGLE_SHEET_ID;
      range = (process.env.GOOGLE_SHEET_NAME_CONTACT || 'Contact') + '!A:F';
      values = [
        [
          new Date().toISOString(),
          `${firstName} ${lastName}`.trim(),
          email,
          phone,
          source || '',
          reason || '',
        ],
      ];
    } else {
      spreadsheetId = process.env.GOOGLE_SHEET_ID;
      range = 'Sheet1!A:G';
      values = [
        [
          new Date().toISOString(),
          firstName,
          lastName,
          email,
          phone,
          techStack || '',
          helpType || '',
        ],
      ];
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values },
    });

    console.log('✅ Data saved to Google Sheets successfully!');
    return res.status(200).json({
      success: true,
      message: 'Data saved to Google Sheets',
    });
  } catch (error) {
    console.error('❌ Google Sheets error:', error.message);
    return res.status(500).json({ success: false, error: 'Failed to save data' });
  }
}