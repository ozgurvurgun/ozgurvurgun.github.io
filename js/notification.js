const button = document.querySelector("button");


button.addEventListener("click", ()=>{
  Notification.requestPermission().then(async () => {
    if (Notification.permission == "granted") {
      const registration = await navigator.serviceWorker.getRegistration();
      registration.showNotification("baslik baslik", {
        tag: "buda tagmis",
        body: "This notification was scheduled 30 seconds ago",
        showTrigger: new TimestampTrigger(Date.now() + 5 * 1000),
      });
    }
  });
});


