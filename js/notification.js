const button = document.querySelector("button")
button.addEventListener("click", ()=>{
    Notification.requestPermission().then(perm =>{
        alert(perm)
    })
})