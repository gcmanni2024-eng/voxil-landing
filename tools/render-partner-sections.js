const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const vw = 1280, vh = 900;
  const page = await browser.newPage({ viewport: { width: vw, height: vh } });
  const filePath = path.join(__dirname, "..", "partner", "index.html");
  await page.goto("file://" + filePath, { waitUntil: "networkidle" });
  await page.waitForTimeout(300);

  const fullHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log("fullHeight", fullHeight);
  let i = 0;
  for (let y = 0; y < fullHeight; y += vh) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(80);
    await page.screenshot({
      path: path.join(__dirname, `partner-section-${String(i).padStart(2, "0")}.png`),
    });
    i++;
  }
  await browser.close();
  console.log("done", i, "chunks");
})();
