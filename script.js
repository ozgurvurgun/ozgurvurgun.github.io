let button = document.querySelector('button');

button.addEventListener('click', () => {
    navigator.serviceWorker.register('sw.js');
    Notification.requestPermission(function(result) {
      if (result === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
          registration.showNotification('Notification with ServiceWorker');
        });
      }
    });
});

