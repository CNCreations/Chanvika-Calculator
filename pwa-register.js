(function () {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      var script = document.currentScript;
      var scriptUrl = script ? new URL(script.src) : new URL("./pwa-register.js", document.baseURI);
      var swUrl = new URL("./sw.js", scriptUrl);
      var scopeUrl = new URL("./", scriptUrl);

      navigator.serviceWorker.register(swUrl, { scope: scopeUrl.pathname }).catch(function (error) {
        console.error("Chanvika Calculator service worker registration failed:", error);
      });
    });
  }
})();
