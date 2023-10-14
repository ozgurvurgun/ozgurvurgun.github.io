const button = document.querySelector("button");

button.addEventListener("click", () => {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        registrations[0].showNotification("Yeni Mesajınız Var",{
            body: "Ne zamandır yoksun dayı bir uğra ;)",
            icon: "icon.png"
        });
      });
});