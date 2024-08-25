// pages/api/config.ts
import { NextApiRequest, NextApiResponse } from 'next';

type ConfigData = {
  username: string;
  theme: string;
  language: string;
  timezone: string;
};

let configData: ConfigData | null = null;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, theme, language, timezone } = req.body;

    // Validate the received data
    if (!username || !theme || !language || !timezone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Store the configuration data
    configData = {
      username,
      theme,
      language,
      timezone,
    };

    return res.status(200).json({ message: 'Configuration saved successfully', config: configData });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
