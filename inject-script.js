const fs = require("fs");
const path = require("path");

const ROOT_DIR = "./";

function processFiles(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      processFiles(fullPath);
    } else if (file.endsWith(".html")) {
      let content = fs.readFileSync(fullPath, "utf8");

      // Skip if already added
      if (content.includes("portalloader.js")) return;

      // Inject before </body>
      content = content.replace(
        "</body>",
        `  <script src="/test/portalloader.js" defer></script>\n</body>`
      );

      fs.writeFileSync(fullPath, content);
      console.log("Injected:", fullPath);
    }
  });
}

processFiles(ROOT_DIR);
