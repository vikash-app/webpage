import sharp from "sharp";
import fs from "fs";
import path from "path";

const IMAGES_DIR = "/Users/vikashkumar/Developer/GitHub/webpage/src/assets";
const OUTPUT_DIR = "./watermarked";
const watermarkText = "vikash.app";

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

fs.readdirSync(IMAGES_DIR).forEach((file) => {
  if (!file.match(/\.(jpg|jpeg|png)$/i)) return;

  const inputPath = path.join(IMAGES_DIR, file);
  const outputPath = path.join(OUTPUT_DIR, file);

  sharp(inputPath)
   // .rotate()  <-- auto-rotate
    .composite([
      {
        input: Buffer.from(
          `<svg width="500" height="80">
            <text x="490" y="70" font-size="40" font-family="Arial"
              fill="white" fill-opacity="0.6" text-anchor="end">${watermarkText}</text>
          </svg>`
        ),
        gravity: "southeast",
      },
    ])
    .toFile(outputPath)
    .then(() => console.log(`Watermarked: ${file}`))
    .catch((err) => console.error(`Error processing ${file}:`, err));
});