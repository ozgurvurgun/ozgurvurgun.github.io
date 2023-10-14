const button = document.querySelector("button");
button.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      new Notification("Ornek bildirim", {
        body: "this is more text",
      });
    }
  });
});
