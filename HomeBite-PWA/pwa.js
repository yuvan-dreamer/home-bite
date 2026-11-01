// PWA setup: service workers require HTTPS or localhost.
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(err => console.warn("Offline setup:", err)));
}
let installPrompt;
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  installPrompt = event;
  const button = document.getElementById("installApp");
  if (button) {
    button.hidden = false;
    button.addEventListener("click", async () => {
      if (!installPrompt) return;
      installPrompt.prompt();
      await installPrompt.userChoice;
      installPrompt = null;
      button.hidden = true;
    }, { once: true });
  }
});
window.addEventListener("appinstalled", () => {
  const button = document.getElementById("installApp");
  if (button) button.hidden = true;
});
