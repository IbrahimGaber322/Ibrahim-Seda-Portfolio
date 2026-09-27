// Renders cv-source/IbrahimGaber.html to src/cv/IbrahimGaber.pdf with headless Chrome/Edge.
const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);
const browser = candidates.find((c) => fs.existsSync(c));
if (!browser) throw new Error("No Chrome/Edge found. Set CHROME_PATH.");

const src = path.join(__dirname, "IbrahimGaber.html");
const out = path.join(__dirname, "..", "src", "cv", "IbrahimGaber.pdf");
execFileSync(browser, [
  "--headless=new",
  "--disable-gpu",
  "--no-pdf-header-footer",
  `--print-to-pdf=${out}`,
  pathToFileURL(src).href,
], { stdio: "inherit" });
