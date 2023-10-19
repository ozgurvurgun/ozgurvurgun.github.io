const button = document.querySelector("button");

Notification.requestPermission().then(async () => {
  if (Notification.permission == "granted") {
    const registration = await navigator.serviceWorker.getRegistration();
    registration.showNotification(title, {
      tag: tag,
      body: "This notification was scheduled 30 seconds ago",
      showTrigger: new TimestampTrigger(Date.now() + 5 * 1000),
    });
  }
});
