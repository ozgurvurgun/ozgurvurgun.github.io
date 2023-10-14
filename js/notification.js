// const button = document.querySelector("button");
window.addEventListener("load", () => {
  Notification.requestPermission().then((perm) => {
    alert("1. giris")
    if (perm === "granted") {
        alert("2. giris")
      const notification = new Notification("Ornek bildirim", {
        body: "this is more text",
        icon: "1667593744391.jpg",
      });
    }
  });
});
