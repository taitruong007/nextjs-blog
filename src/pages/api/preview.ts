import { NextApiRequest, NextApiResponse } from 'next';

// A simple example for testing it manually from your browser.
// If this is located at pages/api/preview.js, then
// open /api/preview from your browser.
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({});
  res.end('Preview mode enabled');
}
