const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const sourcePath = path.join(__dirname, "factsheet-source.html");
  await page.goto("file://" + sourcePath);
  await page.pdf({
    path: path.join(__dirname, "..", "partner", "assets", "partner-factsheet.pdf"),
    format: "A4",
    printBackground: true,
    margin: { top: "0", bottom: "0", left: "0", right: "0" },
  });
  await browser.close();
  console.log("done");
})();
