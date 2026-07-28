const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 2 });
  const svgPath = path.join(__dirname, "..", "partner", "assets", "architecture-diagram.svg");
  const svg = fs.readFileSync(svgPath, "utf8");
  await page.setContent(`
    <html><body style="margin:0;background:#12161e;">
      <div style="width:960px;">${svg}</div>
    </body></html>
  `);
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(__dirname, "diagram-preview.png") });
  await browser.close();
  console.log("done");
})();
