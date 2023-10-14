const button = document.querySelector("button")

button.addEventListener("click",()=>{
    Notification.requestPermission().then(perm =>{
        const notification = new Notification("example notification" ,{
            body: "this is more notification",
            data: {hello: "world"}
        })

        notification.addEventListener("error", e =>{
            alert("error")
        })
        if (perm =="granted") {

        }
    })
})