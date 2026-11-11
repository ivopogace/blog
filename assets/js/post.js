// Small comforts on a post page. The page reads the same without this file.
(function () {
  var prose = document.querySelector(".prose");
  if (!prose) return;

  // A link next to each section heading, so a reader can share that section.
  prose.querySelectorAll("h2[id], h3[id]").forEach(function (heading) {
    var link = document.createElement("a");
    link.className = "anchor";
    link.href = "#" + heading.id;
    link.textContent = "#";
    link.setAttribute("aria-label", "Link to the section: " + heading.textContent.trim());
    heading.appendChild(link);
  });

  // A copy button on each code block.
  if (!navigator.clipboard) return;
  prose.querySelectorAll("pre").forEach(function (pre) {
    var holder = pre.closest(".highlighter-rouge") || pre;
    if (holder.querySelector(".copy")) return;
    var button = document.createElement("button");
    button.type = "button";
    button.className = "copy";
    button.textContent = "Copy";
    button.addEventListener("click", function () {
      var code = pre.querySelector("code") || pre;
      navigator.clipboard.writeText(code.innerText.replace(/\n$/, "")).then(function () {
        button.textContent = "Copied";
        setTimeout(function () { button.textContent = "Copy"; }, 2000);
      }, function () {
        button.textContent = "Not copied";
        setTimeout(function () { button.textContent = "Copy"; }, 2000);
      });
    });
    holder.classList.add("has-copy");
    holder.insertBefore(button, holder.firstChild);
  });
})();
