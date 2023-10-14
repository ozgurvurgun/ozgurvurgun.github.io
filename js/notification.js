const button = document.querySelector("button");
button.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      const notification = new Notification("Ornek bildirim", {
        body: "this is more text",
        data: { hello: "world" },
      });

      notification.addEventListener("close", e =>{
        console.log(e);
      })
    }
  });
});
