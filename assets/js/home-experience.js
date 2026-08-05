document.documentElement.classList.add("has-home-reveal");

document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const sections = document.querySelectorAll(".home-reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
  }

  document.querySelector("[data-scroll-to-home]")?.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#home-content")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  });
});
