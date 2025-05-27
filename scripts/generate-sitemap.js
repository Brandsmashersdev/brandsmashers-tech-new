const fs = require("fs");
const globby = require("globby");

(async () => {
  const pages = await globby([
    "src/pages/**/*.js",
    "!src/pages/_*.js",       // exclude _app.js, _document.js etc.
    "!src/pages/**/[*.js",    // exclude dynamic routes if not needed statically
    "!src/pages/api",         // exclude API routes
  ]);

  const sitemapEntries = pages.map((page) => {
    const path = page
      .replace("src/pages", "")
      .replace(".js", "")
      .replace("/index", "");

    const route = path === "" ? "/" : path;
    return `<url><loc>https://yourdomain.com${route}</loc></url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join("\n")}
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
  console.log("✅ Sitemap generated at public/sitemap.xml");
})();
