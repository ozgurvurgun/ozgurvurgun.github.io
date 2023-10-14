const button = document.querySelector("button")

button.addEventListener("click",()=>{
    Notification.requestPermission().then(perm =>{
        if (perm =="granted") {
            const notification =  new Notification("example notification" ,{
                body: "this is more notification",
                data: {hello: "world"}
            })

            notification.addEventListener("close", e =>{
                console.log(e);
            })
        }
    })
})