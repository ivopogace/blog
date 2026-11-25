// Interactive parts of a step-by-step guide post. Without this file the steps
// are plain open sections and the screenshots plain images.
(function () {
  var guide = document.querySelector(".guide");
  if (!guide) return;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  var key = "guide:" + location.pathname;

  // Steps: a "done" box on each, and a bar that counts them.
  var steps = Array.prototype.slice.call(guide.querySelectorAll("details.step"));
  var done = {};
  try { done = JSON.parse(store.get(key) || "{}") || {}; } catch (e) { done = {}; }
  var progress = document.createElement("div");
  progress.className = "guide-progress";
  progress.innerHTML = '<div class="guide-progress-bar"><span></span></div><p role="status"></p>' +
    '<p class="guide-progress-actions"><button type="button" data-act="open">Open all steps</button>' +
    '<button type="button" data-act="reset">Clear ticks</button></p>';
  guide.insertBefore(progress, guide.firstChild);
  var bar = progress.querySelector(".guide-progress-bar span");
  var said = progress.querySelector("p[role=status]");
  function count() {
    var n = steps.filter(function (s) { return done[s.id]; }).length;
    bar.style.width = (steps.length ? (100 * n / steps.length) : 0) + "%";
    said.textContent = n + " of " + steps.length + " steps done";
  }
  steps.forEach(function (step) {
    var label = document.createElement("label");
    label.className = "step-done";
    var box = document.createElement("input");
    box.type = "checkbox";
    box.checked = !!done[step.id];
    label.appendChild(box);
    label.appendChild(document.createTextNode(" I have done this step"));
    step.appendChild(label);
    step.classList.toggle("is-done", box.checked);
    box.addEventListener("change", function () {
      if (box.checked) done[step.id] = 1; else delete done[step.id];
      step.classList.toggle("is-done", box.checked);
      store.set(key, JSON.stringify(done));
      count();
      // Ticking a step closes it and opens the next one.
      if (box.checked) {
        var next = steps[steps.indexOf(step) + 1];
        step.open = false;
        if (next) { next.open = true; next.querySelector("summary").focus(); }
      }
    });
  });
  progress.addEventListener("click", function (ev) {
    var act = ev.target.getAttribute("data-act");
    if (act === "open") steps.forEach(function (s) { s.open = true; });
    if (act === "reset") {
      done = {};
      store.set(key, "{}");
      steps.forEach(function (s) { s.classList.remove("is-done"); s.querySelector(".step-done input").checked = false; });
    }
    count();
  });
  count();
  // A link to a step opens it.
  function openFromHash() {
    var target = location.hash && document.getElementById(location.hash.slice(1));
    var step = target && target.closest("details.step");
    if (step) step.open = true;
  }
  window.addEventListener("hashchange", openFromHash);
  openFromHash();

  // Screenshots: buttons that zoom into the part that matters, and a click on
  // the image that shows it full size.
  var dialog = document.createElement("dialog");
  dialog.className = "shot-dialog";
  dialog.innerHTML = '<form method="dialog"><button class="shot-close" aria-label="Close">Close</button></form><img alt="">';
  document.body.appendChild(dialog);
  dialog.addEventListener("click", function (ev) { if (ev.target === dialog) dialog.close(); });
  guide.querySelectorAll("figure.shot").forEach(function (fig) {
    var view = fig.querySelector(".shot-view");
    var img = view.querySelector("img");
    var spots = [];
    try { spots = JSON.parse(fig.getAttribute("data-focus") || "[]"); } catch (e) {}
    var zoomBtn = document.createElement("button");
    zoomBtn.type = "button";
    zoomBtn.className = "shot-full";
    zoomBtn.textContent = "Full size";
    zoomBtn.setAttribute("aria-label", "Show the screenshot full size");
    function showFull() {
      var big = dialog.querySelector("img");
      big.src = img.currentSrc || img.src;
      big.alt = img.alt;
      if (dialog.showModal) dialog.showModal(); else window.open(img.src);
    }
    img.addEventListener("click", showFull);
    zoomBtn.addEventListener("click", showFull);
    var tools = document.createElement("div");
    tools.className = "shot-tools";
    var spotlight = document.createElement("span");
    spotlight.className = "shot-spot";
    spotlight.setAttribute("aria-hidden", "true");
    view.appendChild(spotlight);
    var current = null;
    // Crop the view to the spot with a little of what is around it, scale the
    // spot to the frame's width, and dim the rest.
    function focusOn(spot) {
      current = spot;
      if (!spot) {
        img.style.transform = "";
        view.style.height = "";
        fig.classList.remove("is-focused");
        return;
      }
      var W = view.clientWidth;
      var H = W * (img.naturalHeight || +img.getAttribute("height")) / (img.naturalWidth || +img.getAttribute("width"));
      var s = Math.max(1, Math.min(0.97 / spot.w, 3));
      var top = Math.max(0, spot.y - 0.05), bottom = Math.min(1, spot.y + spot.h + 0.05);
      var tx = Math.min(0, Math.max(1 - s, 0.5 - s * (spot.x + spot.w / 2))) * W;
      var ty = -top * H * s;
      img.style.transform = "translate(" + tx + "px," + ty + "px) scale(" + s + ")";
      view.style.height = ((bottom - top) * H * s) + "px";
      spotlight.style.left = (tx + s * spot.x * W) + "px";
      spotlight.style.top = (ty + s * spot.y * H) + "px";
      spotlight.style.width = (s * spot.w * W) + "px";
      spotlight.style.height = (s * spot.h * H) + "px";
      fig.classList.add("is-focused");
    }
    window.addEventListener("resize", function () { if (current) focusOn(current); });
    var buttons = spots.map(function (spot) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = "Focus: " + spot.label;
      b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", function () {
        var on = b.getAttribute("aria-pressed") !== "true";
        buttons.forEach(function (o) { o.setAttribute("aria-pressed", "false"); });
        if (on) b.setAttribute("aria-pressed", "true");
        focusOn(on ? spot : null);
      });
      tools.appendChild(b);
      return b;
    });
    tools.appendChild(zoomBtn);
    view.parentNode.insertBefore(tools, view.nextSibling);
  });

  // The LinkedIn text escaper.
  var esc = guide.querySelector(".escaper");
  if (esc) {
    var input = esc.querySelector("textarea");
    var tags = esc.querySelector("input");
    var output = esc.querySelector("output");
    function render() {
      var body = input.value.replace(/[\\|{}@\[\]()<>#*_~]/g, "\\$&");
      var list = tags.value.split(/[\s,]+/).map(function (t) { return t.replace(/^#/, ""); })
        .filter(Boolean).map(function (t) { return "{hashtag|\\#|" + t + "}"; });
      output.textContent = body + (list.length ? "\n\n" + list.join(" ") : "");
    }
    input.addEventListener("input", render);
    tags.addEventListener("input", render);
    render();
  }
})();
