// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   Notification.requestPermission().then((perm) => {
//     if (perm === "granted") {
//       const notification = new Notification("Ornek bildirim", {
//         body: "this is more text",
//         icon: "1667593744391.jpg",
//       });
//     }
//   });
// });



document.querySelector("button").addEventListener('click', () => {
    setTimeout(() => {
        if ('Notification' in window) {
            Notification.requestPermission()
                .then((permission) => {
                    if (permission === 'granted') {
                        const notification = new Notification('Başlık', {
                            body: '5 saniye sonra gecikmeli bildirim metni.',
                            icon: 'icon.png', // İstediğiniz bir ikon dosyasının yolu
                        });
                    }
                });
        }
    }, 6000); // 5 saniye (5000 milisaniye) gecikme
});
