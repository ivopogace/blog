// Small comforts on a post page. The page reads the same without this file.
(function () {
  var prose = document.querySelector(".prose");
  if (!prose) return;

  // The post's sections as a small tree. The stylesheet shows it in the left
  // margin on wide screens only, and the section being read is marked.
  var sections = Array.prototype.slice.call(prose.querySelectorAll("h2[id]"));
  if (sections.length > 1) {
    var rail = document.createElement("nav");
    rail.className = "rail";
    rail.setAttribute("aria-label", "In this post");
    var railRoot = document.createElement("p");
    railRoot.className = "root";
    railRoot.textContent = "in this post";
    var railList = document.createElement("ul");
    railList.className = "tree";
    var railLinks = sections.map(function (heading) {
      var item = document.createElement("li");
      var link = document.createElement("a");
      link.href = "#" + heading.id;
      link.textContent = heading.textContent.trim();
      item.appendChild(link);
      railList.appendChild(item);
      return link;
    });
    rail.appendChild(railRoot);
    rail.appendChild(railList);
    prose.parentNode.appendChild(rail);
    var marking = false;
    function markSection() {
      marking = false;
      // The section being read is the last one whose heading has passed the
      // upper third of the window.
      var current = 0;
      sections.forEach(function (heading, i) {
        if (heading.getBoundingClientRect().top < window.innerHeight / 3) current = i;
      });
      railLinks.forEach(function (link, i) {
        if (i === current) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    }
    markSection();
    window.addEventListener("scroll", function () {
      if (!marking) { marking = true; requestAnimationFrame(markSection); }
    }, { passive: true });
  }

  // A link next to each section heading, so a reader can share that section.
  prose.querySelectorAll("h2[id], h3[id]").forEach(function (heading) {
    var link = document.createElement("a");
    link.className = "anchor";
    link.href = "#" + heading.id;
    link.textContent = "#";
    link.setAttribute("aria-label", "Link to the section: " + heading.textContent.trim());
    heading.appendChild(link);
  });

  // Wide tables and code scroll sideways. Each table gets a wrapper that
  // scrolls, and whatever really overflows can be reached and scrolled with
  // the keyboard and is named for screen readers.
  var scrollers = [];
  prose.querySelectorAll("table").forEach(function (table) {
    var wrap = document.createElement("div");
    wrap.className = "table-scroll";
    table.parentNode.insertBefore(wrap, table);
    wrap.appendChild(table);
    scrollers.push({ el: wrap, label: "Table, scrolls sideways" });
  });
  prose.querySelectorAll("pre").forEach(function (pre) {
    scrollers.push({ el: pre, label: "Code, scrolls sideways" });
  });
  function markScrollers() {
    scrollers.forEach(function (s) {
      if (s.el.scrollWidth > s.el.clientWidth + 1) {
        s.el.setAttribute("tabindex", "0");
        s.el.setAttribute("role", "region");
        s.el.setAttribute("aria-label", s.label);
      } else {
        s.el.removeAttribute("tabindex");
        s.el.removeAttribute("role");
        s.el.removeAttribute("aria-label");
      }
    });
  }
  markScrollers();
  window.addEventListener("resize", markScrollers);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(markScrollers);

  // A copy button on each code block.
  if (!navigator.clipboard) return;
  var status = document.createElement("div");
  status.className = "sr-only";
  status.setAttribute("role", "status");
  // Beside the text, not inside it, so it is never the text's last element.
  prose.parentNode.appendChild(status);
  function report(button, shown, spoken) {
    button.textContent = shown;
    status.textContent = spoken;
    setTimeout(function () {
      button.textContent = "Copy";
      status.textContent = "";
    }, 2000);
  }
  prose.querySelectorAll("pre").forEach(function (pre) {
    // The button sits on a box around the code, so it stays put when the code
    // scrolls. Markdown code already has that box; a bare <pre> gets one.
    var holder = pre.closest(".highlighter-rouge");
    if (!holder) {
      holder = document.createElement("div");
      holder.className = "code-block";
      pre.parentNode.insertBefore(holder, pre);
      holder.appendChild(pre);
    }
    if (holder.querySelector(".copy")) return;
    var button = document.createElement("button");
    button.type = "button";
    button.className = "copy";
    button.textContent = "Copy";
    button.addEventListener("click", function () {
      var code = pre.querySelector("code") || pre;
      navigator.clipboard.writeText(code.innerText.replace(/\n$/, "")).then(function () {
        report(button, "Copied", "Code copied");
      }, function () {
        report(button, "Not copied", "The code could not be copied");
      });
    });
    holder.classList.add("has-copy");
    holder.insertBefore(button, holder.firstChild);
  });
})();
