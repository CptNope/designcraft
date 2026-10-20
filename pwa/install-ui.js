let deferredInstall;
window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredInstall = e;
  const btn = document.getElementById("designcraft-install");
  if (btn) btn.hidden = false;
});
window.addEventListener("appinstalled", () => {
  deferredInstall = undefined;
  const btn = document.getElementById("designcraft-install");
  if (btn) btn.hidden = true;
});
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.id = "designcraft-install";
  btn.textContent = "Install DesignCraft";
  btn.type = "button";
  btn.hidden = true;
  Object.assign(btn.style, {
    position: "fixed", right: "12px", bottom: "12px", zIndex: "1000",
    padding: "10px 15px", border: "1px solid #526eb0", borderRadius: "12px",
    background: "#5a3485", color: "#fff", font: "600 13px system-ui",
    boxShadow: "0 2px 12px #0003", cursor: "pointer"
  });
  btn.addEventListener("click", async () => {
    if (!deferredInstall) return;
    const prompt = deferredInstall;
    deferredInstall = undefined;
    btn.hidden = true;
    try { await prompt.prompt(); await prompt.userChoice; }
    catch (error) { console.warn("DesignCraft install:", error); }
  });
  document.body.appendChild(btn);
});
