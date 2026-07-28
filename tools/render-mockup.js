const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 2 });
  const sourcePath = path.join(__dirname, "mockup-source.html");
  await page.goto("file://" + sourcePath);
  const frame = await page.$(".frame");
  await frame.screenshot({
    path: path.join(__dirname, "..", "partner", "assets", "plumbing-mockup.png"),
  });
  await browser.close();
  console.log("done");
})();
