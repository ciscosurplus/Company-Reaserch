import { API_CONFIG } from '../config/api';

export async function sendWebhook(text: string) {
  const response = await fetch(API_CONFIG.WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error('Failed to send webhook');
  }

  // Get the response as text instead of trying to parse JSON
  const responseText = await response.text();
  return responseText || 'No response received';
}
