# Long-open, heavily upvoted feature requests that a strong AI model might now make feasible for one engineer

Research date: 2026-11-27. Read this first, because it limits what these notes can support:

- **Only github.com, api.github.com and gitlab.com were reachable from this session.** Every vendor board and non-GitHub tracker named in the brief was blocked at the network level (jira.atlassian.com, bugzilla.mozilla.org, bugs.kde.org, bugs.documentfoundation.org, forum.obsidian.md, feedbackportal.microsoft.com, community.spotify.com, forum.figma.com, community.home-assistant.io, forums.zotero.org, projects.blender.org, gitlab.gnome.org, issuetracker.google.com, ideas.salesforce.com, ideas.fabric.microsoft.com, bugs.launchpad.net, news.ycombinator.com, reddit.com, web.archive.org).
- **WebSearch returned nothing**: the shared search budget for the turn was already used up, so zero web searches were performed. Nothing in these notes comes from a search snippet.
- So the evidence base is **GitHub and GitLab issue trackers only** (about 150 repositories listed by thumbs-up, 24 threads opened and read). Claims about Atlassian, Microsoft, Mozilla, LibreOffice, Spotify, Notion, Figma, Salesforce, Power BI, Obsidian, Blender, GIMP, Calibre and Zotero forums could not be checked and appear only under Gaps.

Evidence labels used below:

- **VERIFIED** = the issue page was opened and read on 2026-11-27 (via page fetch, summarised by a small model), and the open state, date and thumbs-up count also match the GitHub search API listing taken the same day.
- **LISTING** = title, open state, creation date, thumbs-up and comment counts come from the GitHub/GitLab API listing on 2026-11-27 (`api.github.com/search/issues?q=repo:OWNER/REPO+is:issue+is:open&sort=reactions-%2B1`); the thread itself was not read, so reasons and alternatives are unknown.
- Thumbs-up counts are for the opening post only. Comment counts are from the API where given; where a page fetch only showed a partial timeline, that is said.

---

## 1. What are the most-upvoted, longest-open feature requests in widely used products and open-source projects?

### Takeaway
On GitHub, the biggest long-open requests (1,000-3,800 thumbs-up, 7-11 years open) are mostly things that must live inside the product (language features, core UI, OS internals); only a minority can be delivered from outside. The externally buildable ones with the strongest numbers are: GitHub Desktop for Linux (3,147), Metabase cross-database joins (1,797) and REST-API data source (876), VS Code whole-project diagnostics (1,511) and macro recording (1,229), and the Mermaid "new diagram type" family (150-475 each).

### Cited Findings

Top of each tracker, all still open on 2026-11-27. "Ext?" = could an outsider ship a useful version without the vendor.

**Externally buildable (at least partly)**

- GitHub Desktop for Linux: opened 2017-05-17, 3,147 thumbs-up, 346 comments, labelled `not-planned`; two duplicates filed and closed into it in May-June 2026; comments through October 2026. VERIFIED. Ext: yes, as a fork. — [desktop/desktop#1525](https://github.com/desktop/desktop/issues/1525)
- Metabase "Join across multiple databases": opened 2016-12-14, 1,797 thumbs-up, 51 comments; a Metabase contributor called it "the most requested feature on our list" on 2025-03-09; latest comment 2026-11-05. VERIFIED. Ext: yes, as a gateway that Metabase sees as one database. — [metabase/metabase#3953](https://github.com/metabase/metabase/issues/3953)
- Metabase "Driver: REST API": opened 2017-04-21, 876 thumbs-up, 55 comments; "some news in 2026?" posted 2026-01-29. VERIFIED. Ext: yes (community driver or gateway). — [metabase/metabase#4831](https://github.com/metabase/metabase/issues/4831)
- Metabase "Driver: ElasticSearch": opened 2015-10-21, 1,219 thumbs-up, 83 comments. LISTING. — [metabase/metabase#1300](https://github.com/metabase/metabase/issues/1300)
- VS Code "Show all errors and warnings in project for all JavaScript and TypeScript files, not just opened ones": opened 2016-10-18, 1,511 thumbs-up, 210 comments, milestone Backlog since 2017-02-23; duplicate filed 2026-06-04; comments through 2026-10-01. VERIFIED. Ext: yes, as an extension. — [microsoft/vscode#13953](https://github.com/microsoft/vscode/issues/13953)
- VS Code "Macro recording": opened 2016-03-21, 1,229 thumbs-up, 280 comments, Backlog since 2016-07-07; active discussion April and October 2026. VERIFIED. Ext: yes, as an extension. — [microsoft/vscode#4490](https://github.com/microsoft/vscode/issues/4490)
- VS Code for iPad: opened 2019-03-19, 1,348 thumbs-up, 285 comments, Backlog; duplicate marked 2026-09-07. VERIFIED. Ext: only partly (see section 3). — [microsoft/vscode#70764](https://github.com/microsoft/vscode/issues/70764)
- Mermaid new diagram types, all open: sequence-diagram styling (2017-04-20, 475 thumbs-up, 103 comments, LISTING) [#523](https://github.com/mermaid-js/mermaid/issues/523); component diagram (2020-06-10, 364, 80, VERIFIED) [#1462](https://github.com/mermaid-js/mermaid/issues/1462); network topology (2020-01-28, 329, 57, VERIFIED) [#1227](https://github.com/mermaid-js/mermaid/issues/1227); activity diagram (2020-09-10, 178, 33, LISTING) [#1674](https://github.com/mermaid-js/mermaid/issues/1674); BPMN (2022-01-13, 154, 57, VERIFIED) [#2623](https://github.com/mermaid-js/mermaid/issues/2623); C4 models (2020-02-24, 153, 34, LISTING) [#1276](https://github.com/mermaid-js/mermaid/issues/1276); tree chart (2023-01-13, 126, 45, LISTING) [#3989](https://github.com/mermaid-js/mermaid/issues/3989).
- Typst "HTML Export": opened 2023-04-10, 272 thumbs-up, 114 comments. VERIFIED. — [typst/typst#721](https://github.com/typst/typst/issues/721). Typst "Support EPUB output": opened 2023-03-23, 116 thumbs-up, 23 comments, latest comment 2026-11-18. VERIFIED. — [typst/typst#188](https://github.com/typst/typst/issues/188)
- Streamlit "Export to standalone HTML file": opened 2019-11-03, 221 thumbs-up, 65 comments, labelled `status:unlikely`. VERIFIED. — [streamlit/streamlit#611](https://github.com/streamlit/streamlit/issues/611)
- mdBook "Add multilingual support": opened 2015-07-29, 182 thumbs-up, 66 comments. VERIFIED. — [rust-lang/mdBook#5](https://github.com/rust-lang/mdBook/issues/5). mdBook "Support ebooks and pdf export": opened 2015-12-30, 90 thumbs-up, 70 comments, labelled `S-On-hold`. VERIFIED. — [rust-lang/mdBook#88](https://github.com/rust-lang/mdBook/issues/88)
- Mastodon "Support Post Migration": opened 2019-11-18, 479 thumbs-up, 308 comments, latest comments 2026-04-14. VERIFIED. Ext: only partly (protocol). — [mastodon/mastodon#12423](https://github.com/mastodon/mastodon/issues/12423)
- GitLab "Enable Drawio Across GitLab": opened 2016-09-15, 338 upvotes, 86 notes. LISTING (GitLab API, sorted by popularity). — [gitlab-org/gitlab#15932](https://gitlab.com/gitlab-org/gitlab/-/issues/15932)
- Overleaf "Export PDF with comments": opened 2023-06-22, 86 thumbs-up, 34 comments. VERIFIED. — [overleaf/overleaf#1126](https://github.com/overleaf/overleaf/issues/1126)

**Not externally buildable (listed for scale; all LISTING unless marked)**

- VS Code "Allow to change the font size and font of the workbench": opened 2015-11-24, 3,808 thumbs-up, 604 comments — the most-upvoted open issue found anywhere in this sweep. — [microsoft/vscode#519](https://github.com/microsoft/vscode/issues/519)
- VS Code "Allow customization of mouse shortcuts": 2016-02-18, 1,938 thumbs-up, 455 comments. — [microsoft/vscode#3130](https://github.com/microsoft/vscode/issues/3130)
- TypeScript "@ts-ignore for the block scope and imports": 2017-10-30, 1,828, 214 comments — [microsoft/TypeScript#19573](https://github.com/microsoft/TypeScript/issues/19573); "Exact Types": 2016-12-15, 1,293, 312 — [#12936](https://github.com/microsoft/TypeScript/issues/12936)
- Terraform "inverse targeting / exclude": 2015-06-06, 1,540, 169 comments; a commenter on 2026-11-08 called it the most upvoted issue in the repo. VERIFIED. — [hashicorp/terraform#2253](https://github.com/hashicorp/terraform/issues/2253)
- Kubernetes "Facilitate ConfigMap rollouts / management": 2016-03-02, 1,406, 302 comments; on 2026-08-11 a past contributor said nobody is working on it and that they burned out. VERIFIED. — [kubernetes/kubernetes#22368](https://github.com/kubernetes/kubernetes/issues/22368)
- Flutter "Code Push / Hot Update": 2018-01-29, 1,241, 290 comments; description says "not on Flutter's roadmap". VERIFIED. — [flutter/flutter#14330](https://github.com/flutter/flutter/issues/14330)
- WSL "WSL 2 should automatically release disk space back to the host OS": 2019-11-20, 1,199, 381 comments. — [microsoft/WSL#4699](https://github.com/microsoft/WSL/issues/4699)
- Go "add sum types / discriminated unions": 2017-03-05, 1,045, 436 comments. — [golang/go#19412](https://github.com/golang/go/issues/19412)
- Godot "nullable static types in GDScript": 2019-10-16, 887, 280 comments. — [godotengine/godot-proposals#162](https://github.com/godotengine/godot-proposals/issues/162)
- Mastodon "Disable replies": 2018-09-02, 845, 250 comments. — [mastodon/mastodon#8565](https://github.com/mastodon/mastodon/issues/8565)
- PowerToys "Improved subpixel text rendering for OLED": 2023-04-18, 821, 361 comments. — [microsoft/PowerToys#25595](https://github.com/microsoft/PowerToys/issues/25595)
- Immich "Better sharing": 2024-09-12, 749, 260 comments — [immich-app/immich#12614](https://github.com/immich-app/immich/issues/12614); PhotoPrism multi-user sharing: 2019-02-22, 609, 147 — [photoprism/photoprism#98](https://github.com/photoprism/photoprism/issues/98)

**Trackers where GitHub reactions turned out to be weak evidence**

- Projects whose real feedback channel is elsewhere show tiny numbers on GitHub/GitLab: Inkscape's top open issue has 13 upvotes ([inkscape/inkscape](https://gitlab.com/inkscape/inkscape/-/issues/5682)), Inkscape's feature inbox tops out at 19 ([inkscape/inbox#2613](https://gitlab.com/inkscape/inbox/-/issues/2613)), KiCad at 95 for in-PCB FEM simulation ([kicad#8398](https://gitlab.com/kicad/code/kicad/-/issues/8398)), FreeCAD at 34 ([FreeCAD#8290](https://github.com/FreeCAD/FreeCAD/issues/8290)), Anki at 66, Zotero at 62 ([zotero#1007](https://github.com/zotero/zotero/issues/1007)), Audacity at 12, OBS at 21. LISTING.
- Home Assistant's core repo is bug reports only; its top open items are vendor-cloud login failures such as Xiaomi Miio (opened 2025-06-19, 170 thumbs-up, 348 comments). LISTING. — [home-assistant/core#147122](https://github.com/home-assistant/core/issues/147122)

### Inferences
- A raw "sort by thumbs-up" list is dominated by requests that only the vendor can satisfy. The useful filter is "can it be shipped as a fork, plugin, driver, gateway or converter"; after that filter the field is small.
- The 1,000+ club is almost entirely developer tooling. That reflects who uses GitHub reactions, not where unmet demand is greatest. Consumer and office-software demand lives on the boards this session could not reach.
- Requests that are both externally buildable and backed by paying organisations (the Metabase pair) are the best-evidenced commercial openings in this data.

### Gaps
- No data at all from Atlassian JRACLOUD/CONFCLOUD, Microsoft Feedback Portal, Mozilla Bugzilla / Mozilla Connect, LibreOffice Bugzilla, KDE/GNOME, Blender Right-Click Select, GIMP, Obsidian forum, Zotero forums, Calibre, Spotify, Notion, Figma, Slack, Adobe, Salesforce IdeaExchange, Power BI Ideas, Google Issue Tracker, GitHub Community discussions or Stack Overflow meta: hosts blocked and search budget exhausted. These need a follow-up pass with those hosts allowed.
- Thumbs-up counts are from the opening post; duplicates were only noted where the thread showed them. No systematic duplicate count was possible.
- For LISTING items I did not read the thread, so "still unfulfilled" means only "the issue is still open".

---

## 2. Which classes of request recur across many independent products?

### Takeaway
Six classes recur across independent GitHub trackers: (a) official builds for platforms the vendor ignores, (b) "one more output format" for document toolchains, (c) multilingual documentation, (d) "one more connector / data source / importer", (e) "one more diagram type", and (f) version-control-friendly handling of non-text files. Classes (b)-(e) share one shape: a long tail of tedious per-format or per-integration work that maintainers say they have no capacity for. Accessibility and right-to-left text recur just as widely but need changes deep inside each product.

### Cited Findings

**(a) Ports and official packages for ignored platforms** — the single most upvoted class.
- GitHub Desktop for Linux, 3,147 thumbs-up (VERIFIED) — [desktop/desktop#1525](https://github.com/desktop/desktop/issues/1525)
- VS Code for iPad, 1,348 (VERIFIED) — [microsoft/vscode#70764](https://github.com/microsoft/vscode/issues/70764)
- Fork (closed-source Git client) "Linux version?", opened 2017-11-06, 464 thumbs-up, 210 comments (LISTING) — [fork-dev/Tracker#153](https://github.com/fork-dev/Tracker/issues/153)
- FreeBSD: VS Code Remote, 2019-06-18, 223 thumbs-up, 123 comments — [vscode-remote-release#727](https://github.com/microsoft/vscode-remote-release/issues/727); GitHub Actions runner, 2020-03-24, 199 — [actions/runner#385](https://github.com/actions/runner/issues/385); Electron, 2015-12-12, 92 thumbs-up, 155 comments — [electron/electron#3797](https://github.com/electron/electron/issues/3797) (all LISTING)
- Linux packaging formats: Flutter as Flatpak (2019, 183) [flutter#41737](https://github.com/flutter/flutter/issues/41737); Signal Desktop AppImage (2017-11-11, 161 thumbs-up, 185 comments) [Signal-Desktop#1758](https://github.com/signalapp/Signal-Desktop/issues/1758); Warp via Flatpak (2024, 127) [warp#4662](https://github.com/warpdotdev/warp/issues/4662); RStudio as Flatpak/Snap/AppImage (2018-06-26, 110 thumbs-up, 192 comments) [rstudio#3079](https://github.com/rstudio/rstudio/issues/3079); Joplin flatpak (2018, 94) [joplin#738](https://github.com/laurent22/joplin/issues/738) and F-Droid (2017, 129 thumbs-up, 250 comments) [joplin#15](https://github.com/laurent22/joplin/issues/15); NewPipe ports to other platforms (2018, 100 thumbs-up, 135 comments) [NewPipe#1051](https://github.com/TeamNewPipe/NewPipe/issues/1051) (all LISTING)

**(b) One more output format for document toolchains**
- Typst HTML (272) and EPUB (116); mdBook PDF/EPUB (90, plus a second issue with 51: [mdBook#815](https://github.com/rust-lang/mdBook/issues/815)); Streamlit standalone HTML (221); Overleaf PDF-with-comments (86) — all VERIFIED, URLs in section 1.
- Swift book "offline reading experience (ePUB, PDF, etc.)", 2022-08-24, 35 thumbs-up, 32 comments (LISTING) — [swiftlang/swift-book#2](https://github.com/swiftlang/swift-book/issues/2)
- Pandoc: "internal links to tables and figures and headers", opened 2013-04-04, 68 thumbs-up, 155 comments — [jgm/pandoc#813](https://github.com/jgm/pandoc/issues/813); "List of tables… in html, odt, docx", 2015-02-20, 19 — [#1965](https://github.com/jgm/pandoc/issues/1965); "Page-break in other output formats than LaTeX", 2015-02-10, 21 thumbs-up, 36 comments — [#1934](https://github.com/jgm/pandoc/issues/1934) (LISTING)
- Quarto "Google slides output", 2022-08-20, 25 (LISTING) — [quarto-cli#2022](https://github.com/quarto-dev/quarto-cli/issues/2022); Penpot "export to .html files", 2022, 13 (LISTING) — [penpot#2540](https://github.com/penpot/penpot/issues/2540); OpenSCAD "Export to STEP format", opened 2014-08-01, 24 thumbs-up, 48 comments (LISTING) — [openscad#893](https://github.com/openscad/openscad/issues/893)

**(c) Multilingual documentation and content**
- mdBook (2015, 182, VERIFIED) [#5](https://github.com/rust-lang/mdBook/issues/5); Quarto "Multilingual websites / books" (2022-01-20, 27 thumbs-up, 45 comments, milestone "Future", VERIFIED) [quarto-cli#275](https://github.com/quarto-dev/quarto-cli/issues/275)
- SvelteKit "i18n brainstorming" (2019-02-23, 234 thumbs-up, 262 comments) [sveltejs/kit#553](https://github.com/sveltejs/kit/issues/553) and "Translations" (2021-04-29, 145, 168) [#1274](https://github.com/sveltejs/kit/issues/1274); Gridsome i18n (2018, 139) [gridsome#23](https://github.com/gridsome/gridsome/issues/23); GitHub Pages multilingual plugin (2017, 56) [pages-gem#401](https://github.com/github/pages-gem/issues/401); Appsmith editor i18n (2021, 32 thumbs-up, 42 comments) [appsmith#4404](https://github.com/appsmithorg/appsmith/issues/4404); Superset "Content Localization for Dashboards, Charts, and Filters" (2026-02-08) [superset#37789](https://github.com/apache/superset/issues/37789) (all LISTING)
- The GitHub search for open issues with "multilingual" in the title returns 5,515 matches (noisy, includes unrelated repos). — [search](https://api.github.com/search/issues?q=multilingual+in:title+is:issue+is:open&sort=reactions-%2B1)

**(d) One more connector, data source or importer**
- Metabase cross-database joins (1,797), REST API (876), ElasticSearch (1,219) — section 1.
- rclone back-ends: Mediafire (2017, 90) [rclone#1465](https://github.com/rclone/rclone/issues/1465), Proton Drive Photos (2024, 89) [#7832](https://github.com/rclone/rclone/issues/7832), Cryptomator (2017, 66) [#1647](https://github.com/rclone/rclone/issues/1647), Degoo (2020, 59) [#4424](https://github.com/rclone/rclone/issues/4424) (LISTING)
- Importers from competing products, each with modest counts: NocoDB "cross copy bases across installations" (2024-10-06, 81) [nocodb#9596](https://github.com/nocodb/nocodb/issues/9596); HTTPie "Import from OpenAPI" (2022, 91) [httpie/desktop#14](https://github.com/httpie/desktop/issues/14); markitdown "Any plan on onenote?" (2024-12-16, 38) [markitdown#47](https://github.com/microsoft/markitdown/issues/47); Penpot "Sketch file import" (2021-04-16, 19, VERIFIED) [penpot#849](https://github.com/penpot/penpot/issues/849); Papra "Paperless importer" (2025, 17) [papra#237](https://github.com/papra-hq/papra/issues/237); Firefly III "QIF / QFX import support" (2024, 10) [firefly-iii#9209](https://github.com/firefly-iii/firefly-iii/issues/9209) and US bank importer (2023, 11 thumbs-up, 30 comments) [#7790](https://github.com/firefly-iii/firefly-iii/issues/7790); AppFlowy "Bulk export all md files" (2023, 23) [AppFlowy#3334](https://github.com/AppFlowy-IO/AppFlowy/issues/3334) (LISTING unless marked)
- Mastodon post migration (479, VERIFIED) is the high-count member of this class but depends on protocol work.
- Home automation device integrations break when vendor clouds change (Xiaomi Miio 170 thumbs-up/348 comments, Tuya 41/136, Tado 59/29). LISTING. — [home-assistant/core](https://github.com/home-assistant/core/issues/147122)

**(e) One more diagram type** — the Mermaid family in section 1 (seven open issues, 126-475 thumbs-up each, 2017-2023), plus GitLab draw.io (338) and Excalidraw "table" (2022-02-26, 260 thumbs-up, 147 comments, LISTING) [excalidraw#4847](https://github.com/excalidraw/excalidraw/issues/4847) and Excalidraw-to-Mermaid round trip (2024, 65 thumbs-up, 56 comments, LISTING) [mermaid-to-excalidraw#66](https://github.com/excalidraw/mermaid-to-excalidraw/issues/66).

**(f) Version control for non-text files**
- FreeCAD "A file format that integrates well with git" (2024-01-08, 26 thumbs-up, 37 comments, VERIFIED) [FreeCAD#11936](https://github.com/FreeCAD/FreeCAD/issues/11936) and an older twin (2023, 11 thumbs-up, 49 comments, LISTING) [#9432](https://github.com/FreeCAD/FreeCAD/issues/9432); Poetry "Make the lock file more merge-friendly" (2018-10-16, 123 thumbs-up, 72 comments, LISTING) [poetry#496](https://github.com/python-poetry/poetry/issues/496); Overleaf commenters asking for comments in Git (VERIFIED, 2025-2026 comments) [overleaf#1126](https://github.com/overleaf/overleaf/issues/1126).

**Recurring but needing core changes**
- Right-to-left / bidirectional text: VS Code (2016-09-09, 310 thumbs-up, 193 comments) [vscode#11770](https://github.com/microsoft/vscode/issues/11770) and (2016, 230) [#4994](https://github.com/microsoft/vscode/issues/4994); Sublime Text (opened 2013-07-22, 230, 94) [sublime_text#109](https://github.com/sublimehq/sublime_text/issues/109); Alacritty (2017, 52) [alacritty#663](https://github.com/alacritty/alacritty/issues/663); xterm.js (2017, 51) [xterm.js#701](https://github.com/xtermjs/xterm.js/issues/701); Windows Terminal (2019, 48) [terminal#538](https://github.com/microsoft/terminal/issues/538); Ghostty (2024, 71) [ghostty#1442](https://github.com/ghostty-org/ghostty/issues/1442); pdfmake (2015, 67) [pdfmake#184](https://github.com/bpampuch/pdfmake/issues/184). LISTING.
- Screen-reader accessibility: Telegram Desktop (opened 2015-02-09, 32 thumbs-up, 239 comments) [tdesktop#476](https://github.com/telegramdesktop/tdesktop/issues/476); Postman (2017, 19, 37) [postman-app-support#3121](https://github.com/postmanlabs/postman-app-support/issues/3121); Oxygen builder "mega report" (2019, 95) [oxygen#403](https://github.com/soflyy/oxygen-bugs-and-features/issues/403). LISTING.

**Classes the brief suggested that GitHub data did not support**
- Natural-language querying: the best open issue with "natural language" in the title has 32 thumbs-up ([tasks/tasks#784](https://github.com/tasks/tasks/issues/784)); Metabase's natural-language data-stories request has 18 ([metabase#16012](https://github.com/metabase/metabase/issues/16012)). LISTING.
- Note-app migration: title searches return many open issues (185 for "Notion … import", 715 for "Evernote", 728 for "OneNote") but the top ones have under 40 thumbs-up. LISTING, noisy. — [search](https://api.github.com/search/issues?q=OneNote+in:title+is:issue+is:open&sort=reactions-%2B1)
- OCR and table extraction: Tesseract table structure (2018, 12 thumbs-up, VERIFIED) [tesseract#1714](https://github.com/tesseract-ocr/tesseract/issues/1714); Flameshot OCR hook (2020, 61) [flameshot#702](https://github.com/flameshot-org/flameshot/issues/702); Grocy receipt OCR (2019, 30) [grocy#404](https://github.com/grocy/grocy/issues/404). Low counts.

### Inferences
- Classes (b), (c), (d), (e) are the ones where the stated blocker matches what a strong model is good at: lots of similar, individually unglamorous code against documented formats or APIs.
- Class (a) has the highest raw numbers, but the demand is specifically for an *official* build; forks exist and users still ask (see section 4).
- Importer/migration demand is real but fragmented: hundreds of small issues across dozens of products instead of one big one. A single "any-to-any" converter would have to aggregate demand that no single tracker shows.
- Natural-language query and OCR look thin here probably because people now get them from general AI tools, not because nobody wants them. This is a guess; I have no data either way.

### Gaps
- Office-document fidelity (docx/odt/pdf round-tripping) is the class the brief most expected, and the evidence for it lives in LibreOffice Bugzilla, Microsoft Feedback and ONLYOFFICE forums. LibreOffice was unreachable; ONLYOFFICE's GitHub trackers top out at 43-49 thumbs-up on unrelated items. I found no usable evidence for or against this class.
- Legacy file-format support (PSD, DWG, Altium, CorelDRAW): only weak GitHub signals (PowerToys PSD preview, 2020, 77 thumbs-up, LISTING [PowerToys#4824](https://github.com/microsoft/PowerToys/issues/4824); Aseprite PSD, 2014, 12 [aseprite#114](https://github.com/aseprite/aseprite/issues/114)). GIMP, Inkscape importers and KiCad importers are discussed on trackers I could not reach or that showed low counts.
- Offline support, cross-app search, documentation gaps: not investigated in depth; title searches returned nothing with strong counts.

---

## 3. For each strong candidate: why is it still open, and is the blocker one a strong AI model removes?

### Takeaway
Across the threads read, maintainers rarely say "no". They say "no capacity", "hard to do well", "paying customers' votes count more", or nothing at all for years. Where the blocker is volume of tedious code (connectors, diagram types, export back-ends, translation upkeep, fork maintenance), a strong model plausibly removes it. Where the blocker is review bandwidth, platform rules, protocol agreement or user trust in third parties, it does not.

### Cited Findings

**C1. Cross-source querying and REST-API-as-table for BI tools (Metabase)**
- 2016-12-14, maintainer: it "wouldn't exactly be easy to implement"; invited a contributor PR. 2025-03-09, Metabase contributor: working toward support only for engines with database.schema.table naming, no timeline; for other engines a join means loading both tables into Metabase's memory or disk, impractical at scale; recommends foreign data wrappers, DuckDB extensions, Trino/Presto. — [metabase#3953](https://github.com/metabase/metabase/issues/3953)
- REST API source: 2017-10-19, maintainer suggested users write their own driver; 2018-02-21, contributor said record browsing is easy but aggregation is "much harder, probably out of scope"; 2024-10-24, contributor: "paid customer votes count much more than upvotes". — [metabase#4831](https://github.com/metabase/metabase/issues/4831)
- Blocker type: architecture (where the join executes) plus a long tail of per-API work (auth, paging, schema inference). The second half is the AI-removable kind; the first is ordinary engineering that an external gateway sidesteps.

**C2. Missing diagram types in Mermaid**
- 2026-04-21, maintainer on network topology: the issue is "Status: Approved" and "Contributor needed"; "no one on the core team has capacity to pick it up right now"; points to an example-diagram template. 2026-05-28, another maintainer suggests extending the existing `architecture-beta` type instead. — [mermaid#1227](https://github.com/mermaid-js/mermaid/issues/1227)
- Component diagram: approved for work on 2026-08-27; a volunteer proposed a `component-beta` syntax on 2026-10-09 and asked for direction; a second person asked on 2026-11-17 whether that is still moving, with no reply shown. — [mermaid#1462](https://github.com/mermaid-js/mermaid/issues/1462)
- BPMN: by 2026-09-10 a contributor counted three competing implementations and a keyword clash; on 2026-10-05 and 2026-10-19 contributors said they were waiting on maintainer decisions (core vs plugin, scope); questions put to the lead maintainer on 2026-07-31 show no reply. — [mermaid#2623](https://github.com/mermaid-js/mermaid/issues/2623)
- Blocker type: was implementation capacity; as of late 2026 it is maintainer decision and review capacity. A model removes the first, not the second.

**C3. Multilingual documentation**
- mdBook: 2015-08-12 "not the highest priority"; 2016-01-14 a maintainer objected to blocking English changes on translations ("I am paid for my work, but others are not"); the design question (one shared table of contents vs one per language) was never settled; 2025-01-18 a would-be contributor said it is unclear whether a PR would be welcome. — [mdBook#5](https://github.com/rust-lang/mdBook/issues/5)
- Quarto: 2022-01-20 lead developer: "I am sure we will implement this at some point but I'm not sure exactly when"; 2025-09-03 team member: "There is no documentation because it's not supported at this point, thus the many workarounds"; 2026-01-05 team member suggested an external orchestration tool, possibly building on babelquarto. — [quarto-cli#275](https://github.com/quarto-dev/quarto-cli/issues/275)
- Blocker type: design indecision plus the ongoing human cost of keeping translations in step with the source. The second is exactly what machine translation with a model changes; the first can be bypassed by an external orchestrator, which a Quarto team member explicitly suggested.

**C4. Extra export targets for document toolchains**
- Typst HTML: being built upstream behind a feature flag; maintainers want semantic output; as of mid-2025 math, some diagram packages and typographic quotes were missing in HTML. EPUB: 2023-04-02 maintainer "planned, but will take some time"; a contributor on 2025-11-27 named minimal XHTML support as the blocker. — [typst#721](https://github.com/typst/typst/issues/721), [typst#188](https://github.com/typst/typst/issues/188)
- mdBook PDF/EPUB: maintainer in 2015-2016 preferred it be done out of tree via the renderer interface and did not want to depend on a GUI tool; label `S-On-hold` with no explanation. — [mdBook#88](https://github.com/rust-lang/mdBook/issues/88)
- Streamlit: 2023-11-14 maintainer: "it would be extremely hard to allow pure HTML export, based on the architecture of Streamlit"; not on the roadmap; labelled "Will probably not implement". — [streamlit#611](https://github.com/streamlit/streamlit/issues/611)
- Overleaf PDF-with-comments: no maintainer reply on the page at all since 2023. — [overleaf#1126](https://github.com/overleaf/overleaf/issues/1126)
- Blocker type: mixed. Tree-to-linear conversion, link rewriting and per-format edge cases are tedious-code problems. Streamlit's is architectural (apps need a running Python server).

**C5. Official builds for ignored platforms**
- GitHub Desktop: 2017-05-17 maintainer cited parity work, Electron differences across platforms and "a lack of in-house Linux expertise"; early 2021: "We have no immediate plans to support an official Linux version"; later labelled `not-planned`. The community fork's own difficulty was that its maintainer is "only one person". — [desktop#1525](https://github.com/desktop/desktop/issues/1525)
- VS Code for iPad: no maintainer explanation anywhere on the page; sits in Backlog. — [vscode#70764](https://github.com/microsoft/vscode/issues/70764)
- Blocker type: no business incentive, then the grind of tracking upstream in a fork. The grind is AI-reducible. Apple's platform rules for iPad are not.

**C6. VS Code features that fit in an extension**
- Whole-project diagnostics: only maintainer statements are from 2016-2017 ("This is on our radar. No firm timeline yet."). Macro recording: no maintainer reasoning on the page; Backlog since 2016. — [vscode#13953](https://github.com/microsoft/vscode/issues/13953), [vscode#4490](https://github.com/microsoft/vscode/issues/4490)
- Blocker type: priority. In October 2026 commenters on the macro thread complained that recent changelogs are mostly AI features.

**C7. Moving your data between competing products**
- Mastodon post migration: 2019 member comments said posts are tied to accounts, backfill is ruled out for performance, and redelivering 100,000 activities per move is "wildly inefficient"; no maintainer comment 2020-2025; on 2026-04-14 a contributor described staged protocol work done in spare time, targeting a fork first. — [mastodon#12423](https://github.com/mastodon/mastodon/issues/12423)
- Penpot Sketch import: 2021 "working on" it; 2022-04-11 "still have not a planned date"; 2022-06-20 "We have not progressed yet"; last comment 2024-08-13. — [penpot#849](https://github.com/penpot/penpot/issues/849)
- Blocker type: for file-based imports, tedious per-format code (AI-removable). For Mastodon, cross-server protocol agreement (not AI-removable).

**C8. Version control for non-text design files (FreeCAD)**
- 2024-01-11 maintainer rejected dropping cached geometry ("A workflow without it is simply not efficient at all") and rejected a directory format because diffs of internal files are "meaningless"; advised waiting for better Git support. In March 2026 a core developer called porting an existing "save as directory" branch "a very large project" and opened a PR to make cached geometry discardable. — [FreeCAD#11936](https://github.com/FreeCAD/FreeCAD/issues/11936)
- Blocker type: design disagreement about what must be stored; partly solvable outside with Git filters.

**C9. Updating reference metadata in Zotero**
- 2018-08-17 lead developer discouraged a plugin because the feature was planned "in the very near future" and said the hard part is conflicting fields; 2018-08-29 "We're working on this internally"; 2020-06-15 "Yes, we're working on it"; 2022-02-03 "Not quite yet"; on 2025-01-12 a user noted the linked PR was never merged and has likely rotted; no reply. — [zotero#1515](https://github.com/zotero/zotero/issues/1515)
- Blocker type: doing the merge well (deciding which of two conflicting field values is right). That is a judgement-on-messy-text problem, which is the kind a model helps with.

### Inferences
- The most common real reason is silence: four of the 24 threads read have no maintainer explanation at all (VS Code macros, VS Code iPad, Overleaf, Mermaid BPMN), and several others have nothing after 2017-2019.
- "We'd take a PR" has turned into "we cannot review the PRs" where AI-assisted contributors have shown up (Mermaid, 2026). For a builder, that argues for shipping outside the project (plugin, gateway, separate tool) instead of waiting on a merge.
- Commercial open-source vendors (Metabase) openly rank paying customers above upvotes, so a very high public count can coexist with indefinite delay. That is a durable opening for a third party.

### Gaps
- Maintainer reasoning for LISTING items (Metabase ElasticSearch, GitLab draw.io, Fork for Linux, the FreeBSD requests, RTL requests) was not read.
- Flutter's 2019 and 2022 maintainer explanations for declining code push are linked from the issue but were not shown on the fetched page.
- Page fetches showed only part of long threads (GitHub collapses the middle), so maintainer comments from roughly 2018-2024 may have been missed in the VS Code, Mastodon, Kubernetes and Flutter threads.

---

## 4. Could one engineer deliver it externally, what exists already, and why do people in the thread find it inadequate?

### Takeaway
Yes for most candidates, and in 2026 people visibly started doing so: at least six of the threads show a burst of one-person tools announced between January and November 2026. That means the window is open but not empty. What the threads say is still missing is less often raw functionality and more often completeness, trust (an "official" or verified build) and distribution into the place the content is rendered.

### Cited Findings

**C1. BI cross-source gateway / REST-as-table — buildable externally: yes. Adequate today: no.**
- Existing: foreign data wrappers, PostgreSQL dblink, Trino/Presto, Dremio, DuckDB extensions; for REST, the pgsql-http PostgreSQL extension and Steampipe. Complaints: views only work on one server; pgsql-http needs PostgreSQL with the extension installed and is "not pretty" (2025-08-27), unusable for a user not on PostgreSQL (2026-01-29); Trino-class tools mean running more infrastructure. — [metabase#3953](https://github.com/metabase/metabase/issues/3953), [metabase#4831](https://github.com/metabase/metabase/issues/4831)
- New in November 2026: "pgfederate", a self-announced gateway that runs joins in embedded DuckDB and presents itself to Metabase as a PostgreSQL database. Author's own stated limits: read-only, single process, no aggregation pushdown, REST data is a snapshot, only listed clients tested. Self-promotion by its author; quality unknown. — [metabase#3953](https://github.com/metabase/metabase/issues/3953)

**C2. Mermaid diagram types — buildable externally: yes as a plugin; value depends on upstream merge. Adequate today: no.**
- Existing: PlantUML (the thing users say they are forced to keep using for component diagrams, 2025-12-08); `architecture-beta` and block diagrams, judged insufficient in December 2025 and March 2026; LikeC4 and D2 as places users defected to (2024-08-07); for BPMN, bpmn-js/Kroki render XML but offer no text syntax, BPMN Sketch Miner is not open source. — [mermaid#1462](https://github.com/mermaid-js/mermaid/issues/1462), [mermaid#1227](https://github.com/mermaid-js/mermaid/issues/1227), [mermaid#2623](https://github.com/mermaid-js/mermaid/issues/2623)
- New in 2026: external plugin `@okhp3/mermaid-diagram-bpmn` (August, partial BPMN 2.0 coverage); an in-repo BPMN PR series (August-October); "schematex" for device topology (June, self-announced). — same threads
- A commenter notes Obsidian bundles its own Mermaid, so an external plugin does not reach users there. — [mermaid#2623](https://github.com/mermaid-js/mermaid/issues/2623)

**C3. Multilingual docs — buildable externally: yes (preprocessor/orchestrator). Adequate today: partly.**
- mdBook: `mdbook-i18n-helpers` (Gettext workflow, announced 2023-04-04; used by Comprehensive Rust with about 18 translations by August 2023). Complaints: each language is effectively a separate book with duplicated assets; adding a language picker meant copying a theme file ("a pain point right now"); without official support it is "another system to get into" and "more likely to break" (2025-01-17). — [mdBook#5](https://github.com/rust-lang/mdBook/issues/5)
- Quarto: babelquarto (third-party, R); profile + Lua-filter setups that build twice and duplicate metadata (December 2025); an unintended shortcode trick the team warned is unstable (September 2025); on 2026-07-30 a user reported labels and aria-labels staying in English on French pages. — [quarto-cli#275](https://github.com/quarto-dev/quarto-cli/issues/275)
- None of the tools in either thread is described as doing or maintaining the translation itself.

**C4. Export targets — buildable externally: yes. Adequate today: varies, mostly "works with caveats".**
- mdBook: browser print (internal links break), `mdbook-pdf` (needs headless Chrome), `mdbook-pandoc` (PDF and EPUB, announced 2023-12-23), `mdbookhtml2pdf` (2025-02-18). — [mdBook#88](https://github.com/rust-lang/mdBook/issues/88)
- Typst EPUB: "Rheo", a third-party Typst-to-EPUB tool (2026-01-17, recommended again 2026-11-18); a manual five-step pipeline ending in Sigil (2025-12-18); one user went back to Pandoc for ebook and website output (2026-05-23). — [typst#188](https://github.com/typst/typst/issues/188)
- Typst HTML: a suggestion to convert Typst PDFs to HTML with an LLM drew 70 thumbs-down (2025-05-26). — [typst#721](https://github.com/typst/typst/issues/721)
- Streamlit: print-to-PDF improved in release 1.34 (partial); Datapane export lost Plotly charts; Microsoft's Chartifact promoted as an alternative (2025-10-08). No tool in the thread exports a working interactive app. — [streamlit#611](https://github.com/streamlit/streamlit/issues/611)
- Overleaf comments: four independent exporters appeared June-September 2026 (browser extensions and CLIs). Stated limits: text-based matching handles citations, cross-references and maths only approximately; one of 83 comments missed in the author's test; one tool needs a manual browser snapshot; PDF embedding missing in two. On 2026-09-22 a user asked whether they solve the workflow; no answer. — [overleaf#1126](https://github.com/overleaf/overleaf/issues/1126)

**C5. Platform ports — buildable externally: yes where the source is open. Adequate today: partly, and users still want "official".**
- GitHub Desktop: the `shiftkey/desktop` fork had "not had a change in over a year" by March 2026 and was called dead in October 2026; `desktop-plus/desktop-plus` (formerly pol-rivero/github-desktop-plus) is described as "very active" (March, June, October 2026). Users still ask GitHub for official support (2026-05-15) and two duplicates were filed in 2026. Two commenters argued AI makes a port feasible (2026-05-16, 2026-10-16). — [desktop#1525](https://github.com/desktop/desktop/issues/1525)
- VS Code on iPad: code-server (settings/sync and iOS key-event problems, 2019), vscode.dev (slower, needs a stable connection, 2025), Codespaces ("nice to have" but not native, July 2025), CodeApp (existing iPad app; a 2025 fork was criticised as seven commits ahead). — [vscode#70764](https://github.com/microsoft/vscode/issues/70764)
- Fork for Linux (464 thumbs-up) is closed source, so no external port is possible. LISTING. — [fork-dev/Tracker#153](https://github.com/fork-dev/Tracker/issues/153)

**C6. VS Code extensions — buildable externally: yes. Adequate today: partly; the gap is trust.**
- Whole-project diagnostics: a `$tsc-watch` task (separate compile cycle, updates only on save); an experimental TypeScript server setting whose errors vanish when a file is closed and which needs toggling to re-run (described 2026-05-26); "Project Problems" extension announced 2026-09-27 (covers unopened files, includes TypeScript 7; only in trusted folders). One commenter refused to install it over supply-chain concerns (2026-09-28). In March 2026 commenters argued over whether an AI agent running the type-checker makes the feature unnecessary. — [vscode#13953](https://github.com/microsoft/vscode/issues/13953)
- Macro recording: `kb-macro` extension (about five years old). Complaints on 2026-04-07: custom keybindings must be individually enabled for it; text typed into Find/Replace is not recorded; one organisation blocks extensions without a verified code-signing certificate; another only allows Microsoft-supported or licensed extensions. — [vscode#4490](https://github.com/microsoft/vscode/issues/4490)

**C7. Data migration — buildable externally: yes for file formats, only partly for Mastodon.**
- Mastodon: a 2020 script that broke and overloaded the target server; an archive extractor its author calls "far from perfect"; "Mastodon-Migrate" (2025-10-10; public data only, one storage back-end, "98% there"). Complaints: unreliable, heavy server load, incomplete, original timestamps lost. — [mastodon#12423](https://github.com/mastodon/mastodon/issues/12423)
- Penpot/Sketch: workaround is Sketch → Figma → Penpot via a Figma plugin (2024-08-13); a Figma-imported design kit "doesn't work so well"; open-source Sketch readers exist (sketch-constructor, sketch-to-svg) as a base. — [penpot#849](https://github.com/penpot/penpot/issues/849)

**C8. Git for FreeCAD files — buildable externally: yes. Adequate today: crowded and unproven.**
- Five community tools in five months: a cache-remover add-on and "GitCAD" (2026-01-03), a flattening script (2026-01-05), a pre-commit hook (2026-03-13), "freecad-git" (2026-05-29). Complaints: Git LFS breaks independent clones; removing cached geometry causes slow recomputes and cannot be done for imported or non-parametric objects; tools unproven on complex models. — [FreeCAD#11936](https://github.com/FreeCAD/FreeCAD/issues/11936)

**C9. Zotero metadata update — buildable externally: probably (plugin). Adequate today: no, per the thread.**
- Workarounds: add by identifier then merge duplicates ("way too cumbersome", May 2020); re-check by DOI (wrong fields persist); convert to standalone attachment and recreate ("a pain", January 2025); using Mendeley to clean metadata. A January 2024 comment asked for batch update over many selected items. No third-party plugin is named in the thread. — [zotero#1515](https://github.com/zotero/zotero/issues/1515)

**Rejected, with reason**
- Language and compiler features (TypeScript, Go, Rust, GDScript; 800-1,800 thumbs-up each): must be in the compiler; a fork has no users. — [TypeScript#19573](https://github.com/microsoft/TypeScript/issues/19573)
- VS Code workbench font (3,808) and mouse shortcuts (1,938): core UI, not reachable by the extension interface as far as the listing shows (thread not read). — [vscode#519](https://github.com/microsoft/vscode/issues/519)
- WSL disk reclaim, file performance, networking (500-1,200): closed OS/hypervisor internals. — [WSL#4699](https://github.com/microsoft/WSL/issues/4699)
- Kubernetes ConfigMap rollouts (1,406): needs an API change through the enhancement process; contributor burned out. — [kubernetes#22368](https://github.com/kubernetes/kubernetes/issues/22368)
- Flutter code push (1,241): already served by a paid third party (Shorebird, called "production ready" on 2025-02-09); remaining complaints are price and self-hosting; original post says blockers "are not technological" (app-store rules). — [flutter#14330](https://github.com/flutter/flutter/issues/14330)
- Terraform `-exclude` (1,540): already delivered by the OpenTofu fork since 1.9 per commenters (2024-11-30, 2026-10-30, 2026-11-08); a wrapper tool also exists. — [terraform#2253](https://github.com/hashicorp/terraform/issues/2253)
- Home Assistant vendor-cloud integrations (Xiaomi, Tuya, Tado): need the physical devices and depend on vendors' private cloud APIs. — [home-assistant/core#147122](https://github.com/home-assistant/core/issues/147122)
- PowerToys OLED subpixel rendering (821): lives in the Windows text renderer. — [PowerToys#25595](https://github.com/microsoft/PowerToys/issues/25595)
- VS Code as a native iPad app (1,348): closed platform rules; only remote/web variants are possible externally and those exist. — [vscode#70764](https://github.com/microsoft/vscode/issues/70764)
- Fork for Linux (464): closed source. — [fork-dev/Tracker#153](https://github.com/fork-dev/Tracker/issues/153)
- Server-side product decisions (Mastodon disable replies 845, Bluesky 2FA 661, Immich sharing 749, PhotoPrism multi-user 609): must be in the service itself. — [mastodon#8565](https://github.com/mastodon/mastodon/issues/8565)
- Tesseract table extraction (12 thumbs-up): thin demand on the tracker, and the thread's only 2026 activity is an author promoting a different OCR tool. — [tesseract#1714](https://github.com/tesseract-ocr/tesseract/issues/1714)
- Nothing in the candidate set has surveillance, manipulation or spam as its main use.

### Inferences

Rough ordering by strength of evidence that (i) many people want it, (ii) an outsider can ship it, (iii) what exists is judged inadequate, (iv) the remaining work is the kind a strong model speeds up. This is my judgement from the findings above, not something any source states.

1. **C1 BI federation / REST-as-table gateway.** Highest count among externally buildable items (1,797 + 876 + 1,219), ten years open, vendor says outright it favours paying customers, existing workarounds require heavy infrastructure, and the per-API connector tail is ideal model work. A competitor appeared this month, self-described as limited.
2. **C3 Multilingual docs with machine-maintained translations.** Recurs across at least eight tools; a Quarto team member invited an external orchestrator; existing helpers handle file plumbing but not the translation upkeep that maintainers named as the original objection. Counts per issue are moderate (27-234).
3. **C2 Diagram types for Mermaid.** Clear demand (seven issues, about 1,780 thumbs-up combined) and explicit maintainer approval, but three people are already competing on BPMN and the bottleneck has moved to maintainer review. Best approached as a separate renderer or as the one contributor who finishes, not as "write the code".
4. **C4 Export back-ends (EPUB/PDF/HTML/annotated PDF).** Broad class, modest counts each, many partial tools. An opening exists for one tool that does the dull parts properly (link rewriting, math, cross-references), but no single thread shows large unmet demand.
5. **C5 Maintained ports/forks.** Biggest raw number (3,147) but an active fork exists and what users lack is the vendor's name on it. A model lowers the cost of keeping a fork current; it does not supply legitimacy.
6. **C6 VS Code extensions.** Big numbers (1,511 and 1,229) and easy to build, but an extension for diagnostics shipped in September 2026, and the stated remaining barrier is corporate policy against unverified extensions.
7. **C9 Zotero metadata repair, C7 file-format importers, C8 Git for CAD files.** Good fit for a model (fuzzy matching, per-format parsers) but thin or fragmented evidence in the trackers I could reach.

Other inferences:
- The 2026 burst of solo tools (pgfederate, Project Problems, four Overleaf exporters, five FreeCAD Git tools, three Mermaid BPMN attempts, Rheo, a Terraform wrapper) is itself evidence that capable models have already lowered the cost of answering old requests. Expect any obvious candidate to have a weekend-quality competitor; the differentiator will be completeness and trust.
- Demand is thinner than the headline number in two cases: GitHub Desktop for Linux (alternatives such as other Git clients are suggested in-thread, and a fork works) and VS Code whole-project errors (some commenters say AI agents running the type-checker already cover it).

### Gaps
- I did not test any of the third-party tools; adequacy judgements are those of thread commenters, several of whom are the tools' own authors.
- No download, star or revenue numbers were gathered for the existing alternatives.
- Whether Metabase's own partial cross-database work (mentioned March 2025, and a Metabase blog post linked in May 2025) has since shipped was not confirmed; the issue is still open.
- Whether VS Code's extension interface can or cannot change the workbench font was not checked.

---

## 5. Are there well-known lists or articles of "most requested features never built" or "oldest open bugs" that corroborate?

### Takeaway
None could be retrieved: search was unavailable and Hacker News, Reddit and news sites were unreachable. The only corroboration is inside the threads themselves.

### Cited Findings
- A Metabase contributor called cross-database joins "the most requested feature on our list" (2025-03-09). — [metabase#3953](https://github.com/metabase/metabase/issues/3953)
- A commenter called the Terraform exclude request the most upvoted issue in that repository and warned users may move to alternatives (2026-11-08); the API listing agrees it is the top open issue by thumbs-up. — [terraform#2253](https://github.com/hashicorp/terraform/issues/2253)
- A commenter on the VS Code whole-project-errors issue noted in March 2026 that it would turn ten years old in October. — [vscode#13953](https://github.com/microsoft/vscode/issues/13953)
- Two threads contain explicit 2026 claims that AI now makes the long-refused work feasible (GitHub Desktop Linux port, 2026-05-16 and 2026-10-16), and one contains pushback against treating AI as a substitute for the feature (VS Code diagnostics, 2026-03-09). — [desktop#1525](https://github.com/desktop/desktop/issues/1525), [vscode#13953](https://github.com/microsoft/vscode/issues/13953)

### Inferences
- The in-thread statements support the specific items they are attached to but do not amount to an independent "notorious requests" list.

### Gaps
- No external article, ranking or discussion thread was found or read. This question is effectively unanswered.
- Leads from my own prior knowledge, **not checked in this session and not to be cited as findings**: Atlassian's public Jira tracker is widely reported to hold suggestions more than ten years old with thousands of votes; several once-notorious requests are, as far as I recall, now fulfilled and should be confirmed before anyone cites them as open (Notion offline mode, Thunderbird native Exchange support, Spotify lossless audio, Excel's automatic date conversion switch). A follow-up with jira.atlassian.com, feedbackportal.microsoft.com, bugzilla.mozilla.org, bugs.documentfoundation.org, community.spotify.com and forum.obsidian.md allowed would settle these.
