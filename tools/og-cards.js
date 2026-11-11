#!/usr/bin/env node
// Makes the 1200x630 preview images that LinkedIn, Slack and chat apps show
// when a page of the blog is shared: assets/og/<slug>.png for each post and
// assets/og/default.png for every other page.
//
//   node tools/og-cards.js          make the cards that are missing
//   node tools/og-cards.js --all    remake every card
//
// Needs Node and Playwright with Chromium (npm install playwright).
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const root = path.join(__dirname, "..");
const out = path.join(root, "assets", "og");
const all = process.argv.includes("--all");

const config = fs.readFileSync(path.join(root, "_config.yml"), "utf8");
// A value may be written with or without quotes, and may be followed by a comment.
const unquote = (value) => {
  const v = value.trim();
  const quoted = v.match(/^(["'])(.*?)\1/);
  return quoted ? quoted[2] : v.replace(/\s+#.*$/, "");
};
const setting = (key) => unquote((config.match(new RegExp(`^${key}:\\s*(.+)$`, "m")) || [, ""])[1]);
const site = {
  title: setting("title"),
  tagline: setting("tagline"),
  address: setting("url").replace(/^https?:\/\//, "") + setting("baseurl"),
};

const months = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

function readPost(file) {
  const name = path.basename(file, ".md");
  const [, y, m, d, slug] = name.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);
  const front = fs.readFileSync(file, "utf8").split(/^---\s*$/m)[1] || "";
  const title = unquote((front.match(/^title:\s*(.+)$/m) || [, slug])[1]);
  return { slug, title, foot: `${Number(d)} ${months[Number(m) - 1]} ${y}` };
}

const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const font = fs.readFileSync(path.join(root, "assets", "fonts", "bricolage-grotesque-latin-wght-normal.woff2")).toString("base64");

function card({ title, foot }) {
  const size = title.length > 70 ? 60 : title.length > 42 ? 72 : 88;
  return `<!doctype html><meta charset="utf-8"><style>
@font-face { font-family: B; font-weight: 200 800; src: url(data:font/woff2;base64,${font}) format("woff2"); }
* { box-sizing: border-box; margin: 0; }
body { width: 1200px; height: 630px; background: #fcfcfa; color: #1d1f21; font-family: B, sans-serif;
  border-top: 16px solid #b4411a; padding: 64px 80px 60px; display: flex; flex-direction: column; }
.top { display: flex; align-items: center; gap: 18px; font-size: 32px; font-weight: 700; letter-spacing: -0.01em; }
.top svg { width: 52px; height: 52px; }
.top span { margin-left: auto; font-weight: 500; color: #5c6166; }
h1 { margin-top: auto; font-size: ${size}px; font-weight: 700; line-height: 1.06; letter-spacing: -0.03em; text-wrap: balance; max-width: 1000px; }
.foot { margin-top: 36px; font-size: 28px; font-weight: 500; color: #5c6166; display: flex; justify-content: space-between; }
</style>
<div class="top"><svg viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#b4411a"/><path d="M9 9h14v3H17.5v8H23v3H9v-3h5.5v-8H9z" fill="#fcfcfa"/></svg>${esc(site.title)}<span>${esc(site.tagline)}</span></div>
<h1>${esc(title)}</h1>
<div class="foot"><div>${esc(foot)}</div><div>${esc(site.address)}</div></div>`;
}

(async () => {
  const posts = fs.readdirSync(path.join(root, "_posts")).filter((f) => f.endsWith(".md"))
    .map((f) => readPost(path.join(root, "_posts", f)));
  const cards = [{ slug: "default", title: site.tagline, foot: `Notes by ${site.title}` }, ...posts]
    .filter((c) => all || !fs.existsSync(path.join(out, `${c.slug}.png`)));
  if (cards.length === 0) return console.log("Every post already has a card. Use --all to remake them.");
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  for (const c of cards) {
    await page.setContent(card(c));
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: path.join(out, `${c.slug}.png`) });
    console.log(`assets/og/${c.slug}.png`);
  }
  await browser.close();
})();
