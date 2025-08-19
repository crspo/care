const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'static/images';
const outputDir = 'static/images-optimized';

fs.mkdirSync(outputDir, { recursive: true });

fs.readdirSync(inputDir).forEach(file => {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file.replace(/\.[^.]+$/, '.avif'));

  sharp(inputPath)
    .resize({ width: 1200 }) // Resize to max width
    .toFormat('avif', { quality: 50 })
    .toFile(outputPath)
    .then(() => console.log(`Optimized: ${file}`))
    .catch(err => console.error(`Error processing ${file}:`, err));
});

