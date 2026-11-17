#!/usr/bin/env node
// Makes the 1200x630 preview images that LinkedIn, Slack and chat apps show
// when a page of the blog is shared: assets/og/<slug>.png for each post and
// assets/og/default.png for every other page.
//
//   node tools/og-cards.js          make the cards that are missing
//   node tools/og-cards.js --all    remake every card
//   node tools/og-cards.js --list-missing   only name the posts without a card
//
// Making cards needs Node and Playwright with Chromium (npm install
// playwright). The site build runs this for posts that have no card yet.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const out = path.join(root, "assets", "og");
const all = process.argv.includes("--all");
const listMissing = process.argv.includes("--list-missing");

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
const embed = (file) => fs.readFileSync(path.join(root, "assets", "fonts", file)).toString("base64");
const font = embed("bricolage-grotesque-latin-wght-normal.woff2");
const mono = embed("jetbrains-mono-latin-wght-normal.woff2");

// The card is drawn like the dark side of the site: the name with its dot, the
// title hanging from a line of the tree, and the date and address in mono.
function card({ title, foot }) {
  const size = title.length > 70 ? 60 : title.length > 42 ? 72 : 88;
  return `<!doctype html><meta charset="utf-8"><style>
@font-face { font-family: B; font-weight: 200 800; src: url(data:font/woff2;base64,${font}) format("woff2"); }
@font-face { font-family: M; font-weight: 100 800; src: url(data:font/woff2;base64,${mono}) format("woff2"); }
* { box-sizing: border-box; margin: 0; }
body { width: 1200px; height: 630px; background: #0e1013; color: #d9dde3; font-family: M, monospace;
  padding: 64px 80px 60px; display: flex; flex-direction: column; }
.top { display: flex; align-items: center; gap: 18px; font-size: 30px; font-weight: 700; text-transform: lowercase; }
.top::before { content: ""; width: 18px; height: 18px; border-radius: 50%; background: #ff8a5c; }
.top span { margin-left: auto; font-weight: 400; color: #8a929c; text-transform: none; }
.branch { flex: 1; margin-left: 8px; border-left: 2px solid #4a525c; display: flex; align-items: flex-end; }
h1 { position: relative; padding-left: 64px; font-family: B, sans-serif; font-size: ${size}px; font-weight: 700; line-height: 1.06; letter-spacing: -0.03em; text-wrap: balance; max-width: 1030px; }
h1::before { content: ""; position: absolute; left: 0; bottom: 0.5em; width: 40px; border-top: 2px solid #4a525c; }
.foot { margin: 36px 0 0 72px; font-size: 24px; color: #8a929c; display: flex; justify-content: space-between; }
</style>
<div class="top">${esc(site.title)}<span>${esc(site.tagline)}</span></div>
<div class="branch"><h1>${esc(title)}</h1></div>
<div class="foot"><div>${esc(foot)}</div><div>${esc(site.address)}</div></div>`;
}

(async () => {
  const posts = fs.readdirSync(path.join(root, "_posts")).filter((f) => f.endsWith(".md"))
    .map((f) => readPost(path.join(root, "_posts", f)));
  const cards = [{ slug: "default", title: site.tagline, foot: `Notes by ${site.title}` }, ...posts]
    .filter((c) => all || !fs.existsSync(path.join(out, `${c.slug}.png`)));
  if (listMissing) return cards.forEach((c) => console.log(c.slug));
  if (cards.length === 0) return console.log("Every post already has a card. Use --all to remake them.");
  const { chromium } = require("playwright");
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
