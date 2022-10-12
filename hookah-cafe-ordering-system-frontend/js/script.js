const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

//buttons
const cartbtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");


cartbtn.addEventListener("click",function(){
    cartItem.classList.toggle("active");
    document.addEventListener("click",function(e){
        if (!e.composedPath().includes(cartbtn)&&!e.composedPath().includes(cartItem)) {
            cartItem.classList.remove("active");
        }
    })
});


menuBtn.addEventListener("click",function(){
    navbar.classList.toggle("active");
    document.addEventListener("click",function(e){
        if (!e.composedPath().includes(menuBtn)&&!e.composedPath().includes(navbar)) {
            navbar.classList.remove("active");
        }
    })
})
