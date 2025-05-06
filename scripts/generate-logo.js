const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function convertSvgToPng() {
  const svgPath = path.join(__dirname, '../public/images/logo-icon.svg');
  const pngPath = path.join(__dirname, '../public/images/logo-icon.png');
  
  try {
    // Read the SVG file
    const svgBuffer = fs.readFileSync(svgPath);
    
    // Convert SVG to PNG
    await sharp(svgBuffer)
      .png()
      .toFile(pngPath);
    
    console.log('Successfully converted SVG to PNG');
  } catch (error) {
    console.error('Error converting SVG to PNG:', error);
  }
}

convertSvgToPng(); 