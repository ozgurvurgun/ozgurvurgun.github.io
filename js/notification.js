// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   Notification.requestPermission().then((perm) => {
//     if (perm === "granted") {
//       const notification = new Notification("Ornek bildirim", {
//         body: "this is more text",
//         data: { hello: "world" },
//         icon: "1667593744391.jpg"
//       });

//       notification.addEventListener("close", e =>{
//         console.log(e);
//       })
//     }
//   });
// });

const button = document.querySelector("button");
button.addEventListener("click", () => {
    Notification.requestPermission().then((result) => {
      if (result === "granted") {
        randomNotification();
      }
    });
  });


  function randomNotification() {
    const randomItem = Math.floor(Math.random() * games.length);
    const notifTitle = games[randomItem].name;
    const notifBody = `Created by ${games[randomItem].author}.`;
    const notifImg = `data/img/${games[randomItem].slug}.jpg`;
    const options = {
      body: notifBody,
      icon: notifImg,
    };
    new Notification(notifTitle, options);
    setTimeout(randomNotification, 30000);
  }
