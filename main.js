/*** popup start ***/
function createPopup(id) {
  let popupNode = document.querySelector(id);
  let overlay = popupNode.querySelector(".overlay");
  let closeBtn = popupNode.querySelector(".close-btn");
  function openPopup() {
    popupNode.classList.add("active");
  }
  function closePopup() {
    popupNode.classList.remove("active");
  }
  overlay.addEventListener("click", closePopup);
  closeBtn.addEventListener("click", closePopup);
  return openPopup;
}

let popup = createPopup("#popup");
document.querySelector("#basket").addEventListener("click", popup);
/*** popup end ***/

/*** get product start ***/
const categoryButtons = document.querySelectorAll(".category-item");
const xhttp = new XMLHttpRequest();
categoryButtons.forEach((button) => {
  button.addEventListener("click", function () {
    let categoryID = button.getAttribute("data-category-id");
    let categoryName = button.getAttribute("data-category-name");
    getProducts(categoryID, categoryName);
  });
});
document.querySelectorAll(".category-item")[0].click();
function getProducts(categoryID, categoryName) {
  xhttp.onreadystatechange = async function () {
    if (this.readyState == 4 && this.status == 200) {
      let productDataView = "";
      document.getElementById("products").style.opacity = "0";
      document.querySelector(".product-header").style.opacity = "0";

      if (this.responseText === "228") {
        productDataView = ` <h2 style="margin:auto;margin-top:45px;">Kategoriye Ait Ürün Bulunamadı</h2>`;
      } else {
        let productData = await JSON.parse(this.responseText);
        productData.forEach((element) => {
          productDataView += `
          <div class="product-item">
            <img class="product-image"src="${base_url}images/${routing_name}/products/${element.product_picture}">
            <div class="product-info">
              <h3 class="product-name">${element.product_name}</h3>
              <p class="product-price">${element.product_price}</p>
            </div>
            <button class="btn-add-to-cart" data-product-id="${element.id}"><i class="fa-solid fa-plus"></i></button>
          </div>
          `;
        });

        setTimeout(() => {
          addToCartData(productData);
        }, 1000);
      }
      setTimeout(function () {
        document.querySelector(".product-header").innerHTML = categoryName;
        document.getElementById("products").innerHTML = productDataView;
        document.getElementById("products").style.opacity = "1";
        document.querySelector(".product-header").style.opacity = "1";
      }, 200);
    }
  };

  xhttp.open("GET", `apis/${categoryName}.json`, true);
  xhttp.send();
}
/*** get product end ***/

/*** order system start ***/
const cartBtn = document.querySelector(".basket");
const cartItems = document.querySelector(".basket-count");
const cartTotal = document.querySelector(".subtotal-value");
const cartContent = document.querySelector(".modal-products");

let cart = [];
if (localStorage.getItem("cart") != null) {
  cart = JSON.parse(localStorage.getItem("cart"));
  /** ilk yuklemede sepet sayisi hizli gelsin diye */
  let totalProduct = 0;
  cart.forEach((element) => {
    totalProduct += Number(element.amount);
  });
  cartItems.innerHTML = totalProduct;
}
function addToCartData(productData) {
  const addToCartButtons = [...document.querySelectorAll(".btn-add-to-cart")];
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      button.disabled = true;
      let product_id = button.getAttribute("data-product-id");
      productData.forEach((product) => {
        if (product.id == product_id) {
          const indeks = cart.findIndex((product) => product.id == product_id);
          if (indeks !== -1) {
            cart[indeks].amount += 1;
          } else {
            cart.push({ ...product, amount: 1 });
          }
        }
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      uiDraw();
      setTimeout(() => {
        button.disabled = false;
      }, 200);
    });
  });
}

function uiDraw() {
  let basketDOM = "";
  cart.forEach((element) => {
    basketDOM += ` 
        <div class="product-item">
           <img class="product-image" src="${base_url}images/${routing_name}/products/${element.product_picture}">
           <div class="product-info">
             <h3 class="product-name">${element.product_name}</h3>
             <p class="product-price">${element.product_price}</p>
           </div>
           <div class="product-item-right">
             <div class="product-item-right-quantity">
               <button class="quantity-plus" data-product-id="${element.id}">
                 <i class="fa-solid fa-plus"></i>
               </button>
               <span class="quantity">${element.amount}</span>
               <button class="quantity-minus" data-product-id="${element.id}">
                 <i class="fa-solid fa-minus"></i>
               </button>
             </div>
           </div>
        </div>
      `;
  });
  cartContent.innerHTML = basketDOM;
  let totalProduct = 0;
  let totalPrice = 0;
  cart.forEach((element) => {
    totalProduct += Number(element.amount);
    totalPrice += Number(element.product_price) * Number(element.amount);
  });
  cartItems.innerHTML = totalProduct;
  cartTotal.innerHTML = `${totalPrice}<span class="tl"> TL</span>`;
  setTimeout(() => {
    productPlus();
    productMinus();
  }, 200);
}
function productPlus() {
  const quantityPlus = [...document.querySelectorAll(".quantity-plus")];
  quantityPlus.forEach((button) => {
    button.addEventListener("click", function () {
      let productID = button.getAttribute("data-product-id");
      let product = cart.find((item) => item.id == parseInt(productID));
      if (product) {
        product.amount += 1;
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      uiDraw();
    });
  });
}
function productMinus() {
  const quantityMinus = [...document.querySelectorAll(".quantity-minus")];
  quantityMinus.forEach((button) => {
    button.addEventListener("click", function () {
      let productID = button.getAttribute("data-product-id");
      let product = cart.find((item) => item.id == parseInt(productID));
      if (product) {
        product.amount -= 1;
        if (product.amount <= 0) {
          cart = cart.filter((item) => item.id !== product.id);
        }
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      uiDraw();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    uiDraw();
  }, 500);
});
/*** order system end ***/
