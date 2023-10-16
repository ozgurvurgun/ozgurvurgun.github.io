const button = document.querySelector("button");


  Notification.requestPermission().then(() => {
    if (Notification.permission == "granted") {
      navigator.serviceWorker.getRegistrations().then(function (registrations) {
        registrations[0].showNotification("Yeni Mesajınız Var", {
          body: "Ne zamandır yoksun dayı bir uğra ;)",
          icon: "icon.png",
          showTrigger: new TimestampTrigger(Date.now() + 20 * 1000)
        });
      });
    }
  });


