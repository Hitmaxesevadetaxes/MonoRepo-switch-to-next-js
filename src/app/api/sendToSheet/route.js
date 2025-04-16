import { google } from 'googleapis';

const credentials = {
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  spreadsheetId: process.env.SPREADSHEET_ID,
};

async function sendDataToSheet(data, sheetIndex) {
  const auth = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
  );

  const sheets = google.sheets({ version: 'v4', auth });

  const ranges = [
    'Пн!A2:F10',
    'Вт!A2:F10',
    'Ср!A2:F10',
    'Чт!A2:F10',
    'Пт!A2:F10'
  ];

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: credentials.spreadsheetId,
    range: ranges[sheetIndex], // Use the sheetIndex to select the range dynamically
    valueInputOption: 'RAW',
    requestBody: {
      values: [data],
    },
  });

  return response.data;
}

export async function POST(req) {
  try {
    const formData = await req.json();
    const result = await sendDataToSheet(
      [formData.name, formData.first, formData.second, formData.snack],
      formData.sheetIndex // Pass the sheetIndex to the backend
    );
    return new Response(JSON.stringify({ success: true, result }), { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
