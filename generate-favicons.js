import sharp from 'sharp';
import fs from 'fs';

async function generateFavicons() {
  const logoPath = 'client/public/images/markitup_logo.png';
  
  // favicon-32x32.png
  await sharp(logoPath)
    .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .toFile('client/public/favicon-32x32.png');

  // favicon-16x16.png
  await sharp(logoPath)
    .resize(16, 16, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .toFile('client/public/favicon-16x16.png');
    
  // apple-touch-icon.png
  await sharp(logoPath)
    .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .toFile('client/public/apple-touch-icon.png');
    
  // favicon.ico
  fs.copyFileSync('client/public/favicon-32x32.png', 'client/public/favicon.ico');
  
  console.log('Favicons generated successfully.');
}

generateFavicons().catch(console.error);
