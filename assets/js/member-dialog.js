document.addEventListener("DOMContentLoaded", () => {
  const triggers = Array.from(document.querySelectorAll("[data-member-target]"));
  const dialogs = Array.from(document.querySelectorAll(".member-dialog"));
  let returnTarget = null;

  const focusableSelector = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "[tabindex]:not([tabindex='-1'])",
  ].join(",");

  const setHash = (memberId) => {
    const url = new URL(window.location.href);
    url.hash = memberId ? memberId : "";
    window.history.replaceState(null, "", url);
  };

  const closeDialog = (dialog, restoreFocus = true) => {
    if (!dialog || !dialog.open) return;
    dialog.close();
    document.body.classList.remove("member-dialog-open");
    setHash("");
    if (restoreFocus && returnTarget) returnTarget.focus();
  };

  const openDialog = (memberId, trigger = null) => {
    const dialog = document.getElementById(`dialog-${memberId}`);
    if (!dialog) return;

    dialogs.forEach((item) => {
      if (item !== dialog && item.open) item.close();
    });

    returnTarget = trigger || document.querySelector(`[data-member-target="${memberId}"]`);
    dialog.showModal();
    document.body.classList.add("member-dialog-open");
    setHash(memberId);
    dialog.querySelector("[data-dialog-close]")?.focus();
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => openDialog(trigger.dataset.memberTarget, trigger));
  });

  dialogs.forEach((dialog) => {
    dialog.querySelector("[data-dialog-close]")?.addEventListener("click", () => closeDialog(dialog));

    dialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      closeDialog(dialog);
    });

    dialog.addEventListener("click", (event) => {
      const panel = dialog.querySelector(".member-dialog-panel");
      if (panel && !panel.contains(event.target)) closeDialog(dialog);
    });

    dialog.addEventListener("keydown", (event) => {
      if (event.key !== "Tab") return;

      const focusable = Array.from(dialog.querySelectorAll(focusableSelector)).filter(
        (element) => !element.hasAttribute("hidden") && element.getClientRects().length > 0,
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

  const openFromHash = () => {
    const memberId = window.location.hash.slice(1);
    if (memberId && document.getElementById(`dialog-${memberId}`)) openDialog(memberId);
  };

  window.addEventListener("hashchange", openFromHash);
  openFromHash();
});
