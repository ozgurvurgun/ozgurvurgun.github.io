// const button = document.querySelector("button");
window.addEventListener("load", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      const notification = new Notification("Ornek bildirim", {
        body: "this is more text",
        icon: "1667593744391.jpg",
      });
    }
  });
});
