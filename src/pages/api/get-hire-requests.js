import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const filePath = path.join(process.cwd(), 'hire-requests.csv');
    console.log('Looking for file at:', filePath);
    console.log('File exists:', fs.existsSync(filePath));

    if (!fs.existsSync(filePath)) {
      return res.status(200).json({ 
        success: true, 
        data: [],
        message: 'No data found yet'
      });
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    console.log('File content:', fileContent.substring(0, 200));
    const lines = fileContent.trim().split('\n');

    if (lines.length < 2) {
      return res.status(200).json({ 
        success: true, 
        data: [],
        message: 'No data found yet'
      });
    }

    const headers = lines[0].split(',').map(h => h.replace(/"/g, ''));
    console.log('Headers:', headers);
    const data = [];

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(v => v.replace(/"/g, ''));
      const entry = {};
      headers.forEach((header, index) => {
        entry[header] = values[index] || '';
      });
      data.push(entry);
    }

    console.log('Parsed data:', data);

    return res.status(200).json({ 
      success: true, 
      data,
      total: data.length
    });
  } catch (error) {
    console.error('Error reading data:', error);
    return res.status(500).json({ success: false, error: 'Failed to read data' });
  }
}