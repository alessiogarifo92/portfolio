// Renders cv/cv.html to assets/Alessio_Garifo_CV.pdf with headless Chromium (Playwright).
// Run from the repo root: node scripts/build-cv.js  (needs the `playwright` package and a Chromium).
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const root = path.resolve(__dirname, '..');
  const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  const page = await browser.newPage();
  await page.goto('file://' + path.join(root, 'cv', 'cv.html'));
  await page.pdf({ path: path.join(root, 'assets', 'Alessio_Garifo_CV.pdf'), format: 'A4', preferCSSPageSize: true, printBackground: true });
  await browser.close();
})();
