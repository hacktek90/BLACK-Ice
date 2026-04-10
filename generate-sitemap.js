const fs = require("fs");
const path = require("path");

const baseUrl = "https://blackice-ac.vercel.app/scrapsites";
const dir = path.join(__dirname, "scrapsites");

const files = fs.readdirSync(dir);

const urls = files
  .filter(file => file.endsWith(".html"))
  .map(file => {
    return `
  <url>
    <loc>${baseUrl}/${file}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`;
  })
  .join("");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

fs.writeFileSync(path.join(dir, "sitemap.xml"), sitemap);

console.log("✅ sitemap generated");
