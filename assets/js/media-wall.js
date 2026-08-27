document.documentElement.classList.add("has-media-motion");

document.addEventListener("DOMContentLoaded", () => {
  const mediaPage = document.querySelector("[data-media-wall]");
  if (!mediaPage) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = Array.from(mediaPage.querySelectorAll("[data-media-reveal]"));
  const viewer = document.querySelector("[data-media-viewer]");
  const viewerStage = viewer?.querySelector("[data-media-stage]");
  const viewerTitle = viewer?.querySelector("[data-media-viewer-title]");
  const viewerCategory = viewer?.querySelector("[data-media-viewer-category]");
  let returnTarget = null;

  const revealItem = (item) => item.classList.add("is-visible");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(revealItem);
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          revealItem(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );
    revealItems.forEach((item) => observer.observe(item));
  }

  const releaseVideo = () => {
    const video = viewerStage?.querySelector("video");
    if (video) {
      video.pause();
      video.currentTime = 0;
      video.removeAttribute("src");
      video.load();
    }
    viewerStage?.replaceChildren();
  };

  const closeViewer = () => {
    if (!viewer?.open) return;
    releaseVideo();
    viewer.close();
    document.body.classList.remove("media-viewer-open");
    returnTarget?.focus();
  };

  const openViewer = (trigger) => {
    if (!viewer || !viewerStage || !viewerTitle || !viewerCategory) return;

    releaseVideo();
    returnTarget = trigger;

    const video = document.createElement("video");
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.poster = trigger.dataset.videoPoster;
    video.src = trigger.dataset.videoSrc;
    video.setAttribute("aria-label", trigger.dataset.videoTitle);
    viewerStage.append(video);

    viewerTitle.textContent = trigger.dataset.videoTitle;
    viewerCategory.textContent = trigger.dataset.videoCategory;
    viewer.showModal();
    document.body.classList.add("media-viewer-open");
    viewer.querySelector("[data-media-close]")?.focus();
  };

  mediaPage.querySelectorAll("[data-media-showcase]").forEach((showcase) => {
    const items = Array.from(showcase.querySelectorAll("[data-media-item]"));
    const previous = showcase.querySelector("[data-media-previous]");
    const next = showcase.querySelector("[data-media-next]");
    const status = showcase.querySelector("[data-media-status]");
    let currentIndex = 0;
    let changing = false;

    const updateStatus = () => {
      if (!status) return;
      const current = String(currentIndex + 1).padStart(2, "0");
      const total = String(items.length).padStart(2, "0");
      status.textContent = `${current} / ${total}`;
    };

    const showItem = (direction) => {
      if (changing || items.length < 2) return;

      changing = true;
      releaseVideo();

      const outgoing = items[currentIndex];
      const targetIndex = (currentIndex + direction + items.length) % items.length;
      const incoming = items[targetIndex];
      const suffix = direction > 0 ? "next" : "previous";

      incoming.hidden = false;
      incoming.setAttribute("aria-hidden", "false");
      outgoing.classList.add(`is-leaving-${suffix}`);
      incoming.classList.add(`is-entering-${suffix}`);

      const finish = () => {
        outgoing.hidden = true;
        outgoing.setAttribute("aria-hidden", "true");
        outgoing.classList.remove("is-current", `is-leaving-${suffix}`);
        incoming.classList.remove(`is-entering-${suffix}`);
        incoming.classList.add("is-current");
        currentIndex = targetIndex;
        updateStatus();
        changing = false;
      };

      window.setTimeout(finish, reduceMotion ? 20 : 370);
    };

    if (items.length < 2) {
      previous?.setAttribute("hidden", "");
      next?.setAttribute("hidden", "");
    } else {
      previous?.addEventListener("click", () => showItem(-1));
      next?.addEventListener("click", () => showItem(1));
      showcase.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        showItem(event.key === "ArrowLeft" ? -1 : 1);
      });
    }
    updateStatus();
  });

  mediaPage.querySelectorAll("[data-media-open]").forEach((trigger) => {
    trigger.addEventListener("click", () => openViewer(trigger));
  });

  viewer?.querySelector("[data-media-close]")?.addEventListener("click", closeViewer);
  viewer?.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeViewer();
  });
  viewer?.addEventListener("click", (event) => {
    if (event.target === viewer) closeViewer();
  });
  viewer?.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;

    const focusable = Array.from(viewer.querySelectorAll("button:not([disabled]), video[controls], [tabindex]:not([tabindex='-1'])")).filter(
      (element) => element.getClientRects().length > 0
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
});
