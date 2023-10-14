let button = document.querySelector('button');

button.addEventListener('click', () => {

    if(!window.Notification) return;
   
    Notification
    .requestPermission()
    .then(showNotification)
});


function showNotification(permission){
    if(permission !== 'granted') return;

    let notification = new window.Notification('My Title', {
        body:"Hi, how are you today?",
        icon:'icon.png'        
    })

    notification.onclick = () => {
        // window.open('https://google.com')

        window.location.href= "https://www.google.com"
    }
}

