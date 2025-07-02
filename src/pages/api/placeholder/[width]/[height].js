export default function handler(req, res) {
  const { width, height } = req.query;

  const w = parseInt(width, 10);
  const h = parseInt(height, 10);

  if (isNaN(w) || isNaN(h)) {
    return res.status(400).send('Invalid width or height');
  }

  const svg = `
    <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#e0e0e0"/>
      <text x="50%" y="50%" font-size="20" text-anchor="middle" fill="#888" dy=".3em">${w}x${h}</text>
    </svg>
  `;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.status(200).send(svg);
}
