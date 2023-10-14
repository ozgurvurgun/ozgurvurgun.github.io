let button = document.querySelector('button');
navigator.serviceWorker.register('sw.js');
button.addEventListener('click', () => {
    Notification.requestPermission(function(result) {
      if (result === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
          registration.showNotification('Notification with ServiceWorker');
        });
      }
    });
});

