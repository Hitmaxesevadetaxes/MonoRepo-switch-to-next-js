import { google } from 'googleapis';

const credentials = {
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  spreadsheetId: process.env.SPREADSHEET_ID,
};

async function getMenuOptions() {
  const auth = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    ['https://www.googleapis.com/auth/spreadsheets.readonly']
  );

  const sheets = google.sheets({ version: 'v4', auth });

  try {
    // Запит до таблиці для отримання даних
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: credentials.spreadsheetId,
      range: 'Меню!A2:F6', // Замініть на правильний діапазон ваших страв
    });

    const rows = response.data.values;

    if (rows.length) {
      // Перетворюємо дані на зручний формат
      const options = rows.map(row => ({
        first: row[0], // Перша страва
        second: row[1], // Основна страва
        snack: row[2], // Підвечірок (або інше)
      }));

      return options;
    } else {
      throw new Error('Дані не знайдено в таблиці');
    }
  } catch (error) {
    console.error('Помилка при отриманні даних з таблиці:', error);
    throw error;
  }
}

export async function GET(req) {
  try {
    const menuOptions = await getMenuOptions();
    return new Response(JSON.stringify(menuOptions), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
