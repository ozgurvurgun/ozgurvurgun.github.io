const button = document.querySelector("button");

button.addEventListener("click", () => {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        registrations[0].showNotification("bildirim kafasi");
      });
});