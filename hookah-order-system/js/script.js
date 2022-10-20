"use strict";
let urlPath = window.location.pathname;
let imgPage;
if (urlPath === "/dejavu_hookah/" || urlPath === "/dejavu_hookah/index.php") {
    imgPage = "images/nargilejpg.jpg";
}
else {
    imgPage = "../images/nargilejpg.jpg";
}
var url;
url = window.location.pathname;
if (url === "/dejavu_hookah/pages/nakhla.php") {
    //alert(window.location.pathname)
}

//////////////NAKHLA.PHP VISNE START
const visne = document.querySelector("#visne_add");
const visneFiyat = Number(document.querySelector("#visne_fiyat").innerHTML);
var visneAdet;
visne.addEventListener("click", toListVisne);
function toListVisne(par) {
    document.getElementById("shop-kapsayici-nakhla-visne").style.display = "block";
    if (par == "azalt") { //parametreye "azalt" stringine eşit ise vişne ürününü bir azalt
        visneAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("visneAdet") == "null" || localStorage.getItem("visneAdet") == "undefined" || localStorage.getItem("visneAdet") == "NaN") {
        localStorage.setItem("visneAdet", 0);
        visneAdet = localStorage.getItem("visneAdet");
    }
    visneAdet = localStorage.getItem("visneAdet");
    if (par != "azalt") { // parametre "azalt" stringine eşit değilse click olayında vişne ürün sayısı bir art
        visneAdet++;
    }
    localStorage.setItem("visneName", "vişne");
    localStorage.setItem("visneFiyat", visneFiyat);
    localStorage.setItem("visneAdet", visneAdet);
    document.getElementById("shop-kapsayici-nakhla-visne").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decrease();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("visneName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("visneAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("visneFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totalVisneFiyat", localStorage.getItem("visneFiyat") * localStorage.getItem("visneAdet"));
    fiyatPrintVisne();
};
function fiyatPrintVisne() {   //bu fonksiyonu neden yazdığımı hatırlamıyorum. kaldırdığım da sepet güncellenmiyor. şu anlık buna kafa yormayacağım
    document.getElementById("shop-kapsayici-nakhla-visne").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreaseVisne();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("visneName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("visneAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("visneFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
//ürün silme
function decreaseVisne() {
    if (localStorage.getItem("visneAdet") < 1) {
        const list = document.getElementById("shop-kapsayici-nakhla-visne");
        list.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("visneAdet", localStorage.getItem("visneAdet") - 1);
        toListVisne("azalt"); //toListVisne fonksiyonuna "azalt" adında bir buyruk gönderiyorum. giden "azalt" değerini yakalayıp ürün azaltma işlemini yapıyorum.
        if (localStorage.getItem("visneAdet") < 1) {
            document.getElementById("shop-kapsayici-nakhla-visne").style.display = "none";
        }
    }
}
//////////////NAKHLA.PHP VISNE END

//////////////NAKHLA.PHP SEFTALI START
const seftali = document.querySelector("#seftali_add");
const seftaliFiyat = Number(document.querySelector("#seftali_fiyat").innerHTML);
var seftaliAdet;
seftali.addEventListener("click", toListSeftali);
function toListSeftali(par) {
    document.getElementById("shop-kapsayici-nakhla-seftali").style.display = "block";
    if (par == "azalt") {
        seftaliAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("seftaliAdet") == "null" || localStorage.getItem("seftaliAdet") == "undefined" || localStorage.getItem("seftaliAdet") == "NaN") {
        localStorage.setItem("seftaliAdet", 0);
        seftaliAdet = localStorage.getItem("seftaliAdet");
    }
    seftaliAdet = localStorage.getItem("seftaliAdet");
    if (par != "azalt") {
        seftaliAdet++;
    }
    localStorage.setItem("seftaliName", "şeftali");
    localStorage.setItem("seftaliFiyat", seftaliFiyat);
    localStorage.setItem("seftaliAdet", seftaliAdet);
    document.getElementById("shop-kapsayici-nakhla-seftali").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreaseSeftali();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("seftaliName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("seftaliAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("seftaliFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totalSeftaliFiyat", localStorage.getItem("seftaliFiyat") * localStorage.getItem("seftaliAdet"));
    fiyatPrintSeftali();
};
function fiyatPrintSeftali() {
    document.getElementById("shop-kapsayici-nakhla-seftali").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreaseSeftali();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("seftaliName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("seftaliAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("seftaliFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreaseSeftali() {
    if (localStorage.getItem("seftaliAdet") < 1) {
        const list = document.getElementById("shop-kapsayici-nakhla-seftali");
        list.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("seftaliAdet", localStorage.getItem("seftaliAdet") - 1);
        toListSeftali("azalt");
        if (localStorage.getItem("seftaliAdet") < 1) {
            document.getElementById("shop-kapsayici-nakhla-seftali").style.display = "none";
        }
    }
}
//////////////NAKHLA.PHP SEFTALI END



//////////////NAKHLA.PHP CAPPUCINO START
const cappucino = document.querySelector("#cappucino_add");
const cappucinoFiyat = Number(document.querySelector("#cappucino_fiyat").innerHTML);
var cappucinoAdet;
cappucino.addEventListener("click", toListCappucino);
function toListCappucino(par) {
    document.getElementById("shop-kapsayici-nakhla-cappucino").style.display = "block";
    if (par == "azalt") {
        cappucinoAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("cappucinoAdet") == "null" || localStorage.getItem("cappucinoiAdet") == "undefined" || localStorage.getItem("cappucinoAdet") == "NaN") {
        localStorage.setItem("cappucinoAdet", 0);
        cappucinoAdet = localStorage.getItem("cappucinoiAdet");
    }
    cappucinoAdet = localStorage.getItem("cappucinoAdet");
    if (par != "azalt") {
        cappucinoAdet++;
    }
    localStorage.setItem("cappucinoName", "cappucino");
    localStorage.setItem("cappucinoFiyat", cappucinoFiyat);
    localStorage.setItem("cappucinoAdet", cappucinoAdet);
    document.getElementById("shop-kapsayici-nakhla-cappucino").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreaseCappucino();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("cappucinoName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("cappucinoAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("cappucinoFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totalCappucinoFiyat", localStorage.getItem("cappucinoFiyat") * localStorage.getItem("cappucinoAdet"));
    fiyatPrintCappucino();
};
function fiyatPrintCappucino() {
    document.getElementById("shop-kapsayici-nakhla-cappucino").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreaseCappucino();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("cappucinoName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("cappucinoAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("cappucinoFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreaseCappucino() {
    if (localStorage.getItem("cappucinoAdet") < 1) {
        const list = document.getElementById("shop-kapsayici-nakhla-cappucino");
        list.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("cappucinoAdet", localStorage.getItem("cappucinoAdet") - 1);
        toListCappucino("azalt");
        if (localStorage.getItem("cappucinoAdet") < 1) {
            document.getElementById("shop-kapsayici-nakhla-cappucino").style.display = "none";
        }
    }
}
//////////////NAKHLA.PHP CAPPUCINO END



//////////////ALFAKHER.PHP UZUM START
const alfakherUzum = document.querySelector("#alfakher-uzum-add");
const alfakherUzumFiyat = Number(document.querySelector("#alfakher-uzum-fiyat").innerHTML);
var alfakherUzumAdet;
alfakherUzum.addEventListener("click", toListAlfakherUzum);
function toListAlfakherUzum(par) {
    document.getElementById("shop-kapsayici-alfakher-uzum").style.display = "block";
    if (par == "azalt") {
        alfakherUzumAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("alfakherUzumAdet") == "null" || localStorage.getItem("alfakherUzumAdet") == "undefined" || localStorage.getItem("alfakherUzumAdet") == "NaN") {
        localStorage.setItem("alfakherUzumAdet", 0);
        alfakherUzumAdet = localStorage.getItem("alfakherUzumAdet");
    }
    alfakherUzumAdet = localStorage.getItem("alfakherUzumAdet");
    if (par != "azalt") {
        alfakherUzumAdet++;
    }
    localStorage.setItem("alfakherUzumName", "üzüm");
    localStorage.setItem("alfakherUzumFiyat", alfakherUzumFiyat);
    localStorage.setItem("alfakherUzumAdet", alfakherUzumAdet);
    document.getElementById("shop-kapsayici-alfakher-uzum").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreaseAlfakherUzum();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("alfakherUzumName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("alfakherUzumAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("alfakherUzumFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totalalfakherUzumFiyat", localStorage.getItem("alfakherUzumFiyat") * localStorage.getItem("alfakherUzumAdet"));
    fiyatPrintAlfakherUzum();
};
function fiyatPrintAlfakherUzum() {
    document.getElementById("shop-kapsayici-alfakher-uzum").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreaseAlfakherUzum();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("alfakherUzumName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("alfakherUzumAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("alfakherUzumFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreaseAlfakherUzum() {
    if (localStorage.getItem("alfakherUzumAdet") < 1) {
        const listAlfakher = document.getElementById("shop-kapsayici-alfakher-uzum");
        listAlfakher.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("alfakherUzumAdet", localStorage.getItem("alfakherUzumAdet") - 1);
        toListAlfakherUzum("azalt");
        if (localStorage.getItem("alfakherUzumAdet") < 1) {
            document.getElementById("shop-kapsayici-alfakher-uzum").style.display = "none";
        }
    }
}
//////////////ALFAKHER.PHP UZUM END




//////////////ALFAKHER.PHP KAVUN START
const alfakherKavun = document.querySelector("#alfakher-kavun-add");
const alfakherKavunFiyat = Number(document.querySelector("#alfakher-kavun-fiyat").innerHTML);
var alfakherKavunAdet;
alfakherKavun.addEventListener("click", toListAlfakherKavun);
function toListAlfakherKavun(par) {
    document.getElementById("shop-kapsayici-alfakher-kavun").style.display = "block";
    if (par == "azalt") {
        alfakherKavunAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("alfakherKavunAdet") == "null" || localStorage.getItem("alfakherKavunAdet") == "undefined" || localStorage.getItem("alfakherKavunAdet") == "NaN") {
        localStorage.setItem("alfakherKavunAdet", 0);
        alfakherKavunAdet = localStorage.getItem("alfakherKavunAdet");
    }
    alfakherKavunAdet = localStorage.getItem("alfakherKavunAdet");
    if (par != "azalt") {
        alfakherKavunAdet++;
    }
    localStorage.setItem("alfakherKavunName", "Kavun");
    localStorage.setItem("alfakherKavunFiyat", alfakherKavunFiyat);
    localStorage.setItem("alfakherKavunAdet", alfakherKavunAdet);
    document.getElementById("shop-kapsayici-alfakher-kavun").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreaseAlfakherKavun();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("alfakherKavunName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("alfakherKavunAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("alfakherKavunFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totalalfakherKavunFiyat", localStorage.getItem("alfakherKavunFiyat") * localStorage.getItem("alfakherKavunAdet"));
    fiyatPrintAlfakherKavun();
};
function fiyatPrintAlfakherKavun() {
    document.getElementById("shop-kapsayici-alfakher-kavun").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreaseAlfakherKavun();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("alfakherKavunName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("alfakherKavunAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("alfakherKavunFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreaseAlfakherKavun() {
    if (localStorage.getItem("alfakherKavunAdet") < 1) {
        const listAlfakher = document.getElementById("shop-kapsayici-alfakher-kavun");
        listAlfakher.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("alfakherKavunAdet", localStorage.getItem("alfakherKavunAdet") - 1);
        toListAlfakherKavun("azalt");
        if (localStorage.getItem("alfakherKavunAdet") < 1) {
            document.getElementById("shop-kapsayici-alfakher-kavun").style.display = "none";
        }
    }
}
//////////////ALFAKHER.PHP KAVUN END



//////////////ALFAKHER.PHP CIFT ELMA START
const alfakherCelma = document.querySelector("#alfakher-ciftelma-add");
const alfakherCelmaFiyat = Number(document.querySelector("#alfakher-ciftelma-fiyat").innerHTML);
var alfakherCelmaAdet;
alfakherCelma.addEventListener("click", toListAlfakherCelma);
function toListAlfakherCelma(par) {
    document.getElementById("shop-kapsayici-alfakher-ciftelma").style.display = "block";
    if (par == "azalt") {
        alfakherCelmaAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("alfakherCelmaAdet") == "null" || localStorage.getItem("alfakherCelmaAdet") == "undefined" || localStorage.getItem("alfakherCelmaAdet") == "NaN") {
        localStorage.setItem("alfakherCelmaAdet", 0);
        alfakherCelmaAdet = localStorage.getItem("alfakherCelmaAdet");
    }
    alfakherCelmaAdet = localStorage.getItem("alfakherCelmaAdet");
    if (par != "azalt") {
        alfakherCelmaAdet++;
    }
    localStorage.setItem("alfakherCelmaName", "çift elma");
    localStorage.setItem("alfakherCelmaFiyat", alfakherCelmaFiyat);
    localStorage.setItem("alfakherCelmaAdet", alfakherCelmaAdet);
    document.getElementById("shop-kapsayici-alfakher-ciftelma").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreaseAlfakherCelma();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("alfakherCelmaName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("alfakherCelmaAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("alfakherCelmaFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totalalfakherCelmaFiyat", localStorage.getItem("alfakherCelmaFiyat") * localStorage.getItem("alfakherCelmaAdet"));
    fiyatPrintAlfakherCelma();
};
function fiyatPrintAlfakherCelma() {
    document.getElementById("shop-kapsayici-alfakher-ciftelma").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreaseAlfakherCelma();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("alfakherCelmaName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("alfakherCelmaAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("alfakherCelmaFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreaseAlfakherCelma() {
    if (localStorage.getItem("alfakherCelmaAdet") < 1) {
        const listAlfakher = document.getElementById("shop-kapsayici-alfakher-ciftelma");
        listAlfakher.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("alfakherCelmaAdet", localStorage.getItem("alfakherCelmaAdet") - 1);
        toListAlfakherCelma("azalt");
        if (localStorage.getItem("alfakherCelmaAdet") < 1) {
            document.getElementById("shop-kapsayici-alfakher-ciftelma").style.display = "none";
        }
    }
}
//////////////ALFAKHER.PHP CIFT ELMA END





//////////////ADALYA.PHP PLN START
const adalyaPln = document.querySelector("#adalya-pln-add");
const adalyaPlnFiyat = Number(document.querySelector("#adalya-pln-fiyat").innerHTML);
var adalyaPlnAdet;
adalyaPln.addEventListener("click", toListAdalyaPln);
function toListAdalyaPln(par) {
    document.getElementById("shop-kapsayici-adalya-pln").style.display = "block";
    if (par == "azalt") {
        adalyaPlnAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("adalyaPlnAdet") == "null" || localStorage.getItem("adalyaPlnAdet") == "undefined" || localStorage.getItem("adalyaPlnAdet") == "NaN") {
        localStorage.setItem("adalyaPlnAdet", 0);
        adalyaPlnAdet = localStorage.getItem("adalyaPlnAdet");
    }
    adalyaPlnAdet = localStorage.getItem("adalyaPlnAdet");
    if (par != "azalt") {
        adalyaPlnAdet++;
    }
    localStorage.setItem("adalyaPlnName", "pln");
    localStorage.setItem("adalyaPlnFiyat", adalyaPlnFiyat);
    localStorage.setItem("adalyaPlnAdet", adalyaPlnAdet);
    document.getElementById("shop-kapsayici-adalya-pln").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreaseAdalyaPln();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("adalyaPlnName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("adalyaPlnAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("adalyaPlnFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totalAdalyaPlnFiyat", localStorage.getItem("adalyaPlnFiyat") * localStorage.getItem("adalyaPlnAdet"));
    fiyatPrintAdalyaPln();
};
function fiyatPrintAdalyaPln() {
    document.getElementById("shop-kapsayici-adalya-pln").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreaseAdalyaPln();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("adalyaPlnName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("adalyaPlnAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("adalyaPlnFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreaseAdalyaPln() {
    if (localStorage.getItem("adalyaPlnAdet") < 1) {
        const listAdalyaPln = document.getElementById("shop-kapsayici-adalya-pln");
        listAdalyaPln.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("adalyaPlnAdet", localStorage.getItem("adalyaPlnAdet") - 1);
        toListAdalyaPln("azalt");
        if (localStorage.getItem("adalyaPlnAdet") < 1) {
            document.getElementById("shop-kapsayici-adalya-pln").style.display = "none";
        }
    }
}
//////////////ADALYA.PHP PLN END




//////////////ADALYA.PHP BAKU START
const adalyaBaku = document.querySelector("#adalya-baku-add");
const adalyaBakuFiyat = Number(document.querySelector("#adalya-baku-fiyat").innerHTML);
var adalyaBakuAdet;
adalyaBaku.addEventListener("click", toListAdalyaBaku);
function toListAdalyaBaku(par) {
    document.getElementById("shop-kapsayici-adalya-baku").style.display = "block";
    if (par == "azalt") {
        adalyaBakuAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("adalyaBakuAdet") == "null" || localStorage.getItem("adalyaBakuAdet") == "undefined" || localStorage.getItem("adalyaBakuAdet") == "NaN") {
        localStorage.setItem("adalyaBakuAdet", 0);
        adalyaBakuAdet = localStorage.getItem("adalyaBakuAdet");
    }
    adalyaBakuAdet = localStorage.getItem("adalyaBakuAdet");
    if (par != "azalt") {
        adalyaBakuAdet++;
    }
    localStorage.setItem("adalyaBakuName", "bakü");
    localStorage.setItem("adalyaBakuFiyat", adalyaBakuFiyat);
    localStorage.setItem("adalyaBakuAdet", adalyaBakuAdet);
    document.getElementById("shop-kapsayici-adalya-baku").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreaseAdalyaBaku();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("adalyaBakuName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("adalyaBakuAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("adalyaBakuFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totalAdalyaBakuFiyat", localStorage.getItem("adalyaBakuFiyat") * localStorage.getItem("adalyaBakuAdet"));
    fiyatPrintAdalyaBaku();
};
function fiyatPrintAdalyaBaku() {
    document.getElementById("shop-kapsayici-adalya-baku").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreaseAdalyaBaku();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("adalyaBakuName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("adalyaBakuAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("adalyaBakuFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreaseAdalyaBaku() {
    if (localStorage.getItem("adalyaBakuAdet") < 1) {
        const listAdalyaBaku = document.getElementById("shop-kapsayici-adalya-baku");
        listAdalyaBaku.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("adalyaBakuAdet", localStorage.getItem("adalyaBakuAdet") - 1);
        toListAdalyaBaku("azalt");
        if (localStorage.getItem("adalyaBakuAdet") < 1) {
            document.getElementById("shop-kapsayici-adalya-baku").style.display = "none";
        }
    }
}
//////////////ADALYA.PHP BAKU END


//////////////ADALYA.PHP LADY START
const adalyaLady = document.querySelector("#adalya-lady-add");
const adalyaLadyFiyat = Number(document.querySelector("#adalya-lady-fiyat").innerHTML);
var adalyaLadyAdet;
adalyaLady.addEventListener("click", toListAdalyaLady);
function toListAdalyaLady(par) {
    document.getElementById("shop-kapsayici-adalya-lady").style.display = "block";
    if (par == "azalt") {
        adalyaLadyAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("adalyaLadyAdet") == "null" || localStorage.getItem("adalyaLadyAdet") == "undefined" || localStorage.getItem("adalyaLadyAdet") == "NaN") {
        localStorage.setItem("adalyaLadyAdet", 0);
        adalyaLadyAdet = localStorage.getItem("adalyaLadyAdet");
    }
    adalyaLadyAdet = localStorage.getItem("adalyaLadyAdet");
    if (par != "azalt") {
        adalyaLadyAdet++;
    }
    localStorage.setItem("adalyaLadyName", "lady");
    localStorage.setItem("adalyaLadyFiyat", adalyaLadyFiyat);
    localStorage.setItem("adalyaLadyAdet", adalyaLadyAdet);
    document.getElementById("shop-kapsayici-adalya-lady").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreaseAdalyaLady();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("adalyaLadyName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("adalyaLadyAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("adalyaLadyFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totalAdalyaLadyFiyat", localStorage.getItem("adalyaLadyFiyat") * localStorage.getItem("adalyaLadyAdet"));
    fiyatPrintAdalyaLady();
};
function fiyatPrintAdalyaLady() {
    document.getElementById("shop-kapsayici-adalya-lady").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreaseAdalyaLady();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("adalyaLadyName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("adalyaLadyAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("adalyaLadyFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreaseAdalyaLady() {
    if (localStorage.getItem("adalyaLadyAdet") < 1) {
        const listAdalyaLady = document.getElementById("shop-kapsayici-adalya-lady");
        listAdalyaLady.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("adalyaLadyAdet", localStorage.getItem("adalyaLadyAdet") - 1);
        toListAdalyaLady("azalt");
        if (localStorage.getItem("adalyaLadyAdet") < 1) {
            document.getElementById("shop-kapsayici-adalya-lady").style.display = "none";
        }
    }
}
//////////////ADALYA.PHP LADY END


//////////////ADALYA.PHP LOVE SIX SIX START
const adalyalovesixsix = document.querySelector("#adalya-lovesixsix-add");
const adalyalovesixsixFiyat = Number(document.querySelector("#adalya-lovesixsix-fiyat").innerHTML);
var adalyalovesixsixAdet;
adalyalovesixsix.addEventListener("click", toListadalyalovesixsix);
function toListadalyalovesixsix(par) {
    document.getElementById("shop-kapsayici-adalya-lovesixsix").style.display = "block";
    if (par == "azalt") {
        adalyalovesixsixAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("adalyalovesixsixAdet") == "null" || localStorage.getItem("adalyalovesixsixAdet") == "undefined" || localStorage.getItem("adalyalovesixsixAdet") == "NaN") {
        localStorage.setItem("adalyalovesixsixAdet", 0);
        adalyalovesixsixAdet = localStorage.getItem("adalyalovesixsixAdet");
    }
    adalyalovesixsixAdet = localStorage.getItem("adalyalovesixsixAdet");
    if (par != "azalt") {
        adalyalovesixsixAdet++;
    }
    localStorage.setItem("adalyalovesixsixName", "love 66");
    localStorage.setItem("adalyalovesixsixFiyat", adalyalovesixsixFiyat);
    localStorage.setItem("adalyalovesixsixAdet", adalyalovesixsixAdet);
    document.getElementById("shop-kapsayici-adalya-lovesixsix").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreaseadalyalovesixsix();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("adalyalovesixsixName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("adalyalovesixsixAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("adalyalovesixsixFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totaladalyalovesixsixFiyat", localStorage.getItem("adalyalovesixsixFiyat") * localStorage.getItem("adalyalovesixsixAdet"));
    fiyatPrintadalyalovesixsix();
};
function fiyatPrintadalyalovesixsix() {
    document.getElementById("shop-kapsayici-adalya-lovesixsix").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreaseadalyalovesixsix();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("adalyalovesixsixName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("adalyalovesixsixAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("adalyalovesixsixFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreaseadalyalovesixsix() {
    if (localStorage.getItem("adalyalovesixsixAdet") < 1) {
        const listadalyalovesixsix = document.getElementById("shop-kapsayici-adalya-lovesixsix");
        listadalyalovesixsix.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("adalyalovesixsixAdet", localStorage.getItem("adalyalovesixsixAdet") - 1);
        toListadalyalovesixsix("azalt");
        if (localStorage.getItem("adalyalovesixsixAdet") < 1) {
            document.getElementById("shop-kapsayici-adalya-lovesixsix").style.display = "none";
        }
    }
}
//////////////ADALYA.PHP LOVE SIX SIX END


//////////////ADALYA.PHP MERLIN START
const adalyamerlin = document.querySelector("#adalya-merlin-add");
const adalyamerlinFiyat = Number(document.querySelector("#adalya-merlin-fiyat").innerHTML);
var adalyamerlinAdet;
adalyamerlin.addEventListener("click", toListadalyamerlin);
function toListadalyamerlin(par) {
    document.getElementById("shop-kapsayici-adalya-merlin").style.display = "block";
    if (par == "azalt") {
        adalyamerlinAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("adalyamerlinAdet") == "null" || localStorage.getItem("adalyamerlinAdet") == "undefined" || localStorage.getItem("adalyamerlinAdet") == "NaN") {
        localStorage.setItem("adalyamerlinAdet", 0);
        adalyamerlinAdet = localStorage.getItem("adalyamerlinAdet");
    }
    adalyamerlinAdet = localStorage.getItem("adalyamerlinAdet");
    if (par != "azalt") {
        adalyamerlinAdet++;
    }
    localStorage.setItem("adalyamerlinName", "merlin");
    localStorage.setItem("adalyamerlinFiyat", adalyamerlinFiyat);
    localStorage.setItem("adalyamerlinAdet", adalyamerlinAdet);
    document.getElementById("shop-kapsayici-adalya-merlin").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreaseadalyamerlin();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("adalyamerlinName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("adalyamerlinAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("adalyamerlinFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totaladalyamerlinFiyat", localStorage.getItem("adalyamerlinFiyat") * localStorage.getItem("adalyamerlinAdet"));
    fiyatPrintadalyamerlin();
};
function fiyatPrintadalyamerlin() {
    document.getElementById("shop-kapsayici-adalya-merlin").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreaseadalyamerlin();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("adalyamerlinName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("adalyamerlinAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("adalyamerlinFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreaseadalyamerlin() {
    if (localStorage.getItem("adalyamerlinAdet") < 1) {
        const listadalyamerlin = document.getElementById("shop-kapsayici-adalya-merlin");
        listadalyamerlin.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("adalyamerlinAdet", localStorage.getItem("adalyamerlinAdet") - 1);
        toListadalyamerlin("azalt");
        if (localStorage.getItem("adalyamerlinAdet") < 1) {
            document.getElementById("shop-kapsayici-adalya-merlin").style.display = "none";
        }
    }
}
//////////////ADALYA.PHP MERLIN END



//////////////ADALYA.PHP BERLIN START
const adalyaberlin = document.querySelector("#adalya-berlin-add");
const adalyaberlinFiyat = Number(document.querySelector("#adalya-berlin-fiyat").innerHTML);
var adalyaberlinAdet;
adalyaberlin.addEventListener("click", toListadalyaberlin);
function toListadalyaberlin(par) {
    document.getElementById("shop-kapsayici-adalya-berlin").style.display = "block";
    if (par == "azalt") {
        adalyaberlinAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("adalyaberlinAdet") == "null" || localStorage.getItem("adalyaberlinAdet") == "undefined" || localStorage.getItem("adalyaberlinAdet") == "NaN") {
        localStorage.setItem("adalyaberlinAdet", 0);
        adalyaberlinAdet = localStorage.getItem("adalyaberlinAdet");
    }
    adalyaberlinAdet = localStorage.getItem("adalyaberlinAdet");
    if (par != "azalt") {
        adalyaberlinAdet++;
    }
    localStorage.setItem("adalyaberlinName", "berlin");
    localStorage.setItem("adalyaberlinFiyat", adalyaberlinFiyat);
    localStorage.setItem("adalyaberlinAdet", adalyaberlinAdet);
    document.getElementById("shop-kapsayici-adalya-berlin").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreaseadalyaberlin();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("adalyaberlinName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("adalyaberlinAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("adalyaberlinFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totaladalyaberlinFiyat", localStorage.getItem("adalyaberlinFiyat") * localStorage.getItem("adalyaberlinAdet"));
    fiyatPrintadalyaberlin();
};
function fiyatPrintadalyaberlin() {
    document.getElementById("shop-kapsayici-adalya-berlin").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreaseadalyaberlin();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("adalyaberlinName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("adalyaberlinAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("adalyaberlinFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreaseadalyaberlin() {
    if (localStorage.getItem("adalyaberlinAdet") < 1) {
        const listadalyaberlin = document.getElementById("shop-kapsayici-adalya-berlin");
        listadalyaberlin.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("adalyaberlinAdet", localStorage.getItem("adalyaberlinAdet") - 1);
        toListadalyaberlin("azalt");
        if (localStorage.getItem("adalyaberlinAdet") < 1) {
            document.getElementById("shop-kapsayici-adalya-berlin").style.display = "none";
        }
    }
}
//////////////ADALYA.PHP BERLIN END



//////////////ADALYA.PHP MOSKOW START
const adalyamoskow = document.querySelector("#adalya-moskow-add");
const adalyamoskowFiyat = Number(document.querySelector("#adalya-moskow-fiyat").innerHTML);
var adalyamoskowAdet;
adalyamoskow.addEventListener("click", toListadalyamoskow);
function toListadalyamoskow(par) {
    document.getElementById("shop-kapsayici-adalya-moskow").style.display = "block";
    if (par == "azalt") {
        adalyamoskowAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("adalyamoskowAdet") == "null" || localStorage.getItem("adalyamoskowAdet") == "undefined" || localStorage.getItem("adalyamoskowAdet") == "NaN") {
        localStorage.setItem("adalyamoskowAdet", 0);
        adalyamoskowAdet = localStorage.getItem("adalyamoskowAdet");
    }
    adalyamoskowAdet = localStorage.getItem("adalyamoskowAdet");
    if (par != "azalt") {
        adalyamoskowAdet++;
    }
    localStorage.setItem("adalyamoskowName", "moskow");
    localStorage.setItem("adalyamoskowFiyat", adalyamoskowFiyat);
    localStorage.setItem("adalyamoskowAdet", adalyamoskowAdet);
    document.getElementById("shop-kapsayici-adalya-moskow").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreaseadalyamoskow();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("adalyamoskowName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("adalyamoskowAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("adalyamoskowFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totaladalyamoskowFiyat", localStorage.getItem("adalyamoskowFiyat") * localStorage.getItem("adalyamoskowAdet"));
    fiyatPrintadalyamoskow();
};
function fiyatPrintadalyamoskow() {
    document.getElementById("shop-kapsayici-adalya-moskow").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreaseadalyamoskow();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("adalyamoskowName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("adalyamoskowAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("adalyamoskowFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreaseadalyamoskow() {
    if (localStorage.getItem("adalyamoskowAdet") < 1) {
        const listadalyamoskow = document.getElementById("shop-kapsayici-adalya-moskow");
        listadalyamoskow.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("adalyamoskowAdet", localStorage.getItem("adalyamoskowAdet") - 1);
        toListadalyamoskow("azalt");
        if (localStorage.getItem("adalyamoskowAdet") < 1) {
            document.getElementById("shop-kapsayici-adalya-moskow").style.display = "none";
        }
    }
}
//////////////ADALYA.PHP MOSKOW END


//////////////ADALYA.PHP ICEBONBON START
const adalyaicebonbon = document.querySelector("#adalya-icebonbon-add");
const adalyaicebonbonFiyat = Number(document.querySelector("#adalya-icebonbon-fiyat").innerHTML);
var adalyaicebonbonAdet;
adalyaicebonbon.addEventListener("click", toListadalyaicebonbon);
function toListadalyaicebonbon(par) {
    document.getElementById("shop-kapsayici-adalya-icebonbon").style.display = "block";
    if (par == "azalt") {
        adalyaicebonbonAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("adalyaicebonbonAdet") == "null" || localStorage.getItem("adalyaicebonbonAdet") == "undefined" || localStorage.getItem("adalyaicebonbonAdet") == "NaN") {
        localStorage.setItem("adalyaicebonbonAdet", 0);
        adalyaicebonbonAdet = localStorage.getItem("adalyaicebonbonAdet");
    }
    adalyaicebonbonAdet = localStorage.getItem("adalyaicebonbonAdet");
    if (par != "azalt") {
        adalyaicebonbonAdet++;
    }
    localStorage.setItem("adalyaicebonbonName", "icebonbon");
    localStorage.setItem("adalyaicebonbonFiyat", adalyaicebonbonFiyat);
    localStorage.setItem("adalyaicebonbonAdet", adalyaicebonbonAdet);
    document.getElementById("shop-kapsayici-adalya-icebonbon").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreaseadalyaicebonbon();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("adalyaicebonbonName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("adalyaicebonbonAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("adalyaicebonbonFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totaladalyaicebonbonFiyat", localStorage.getItem("adalyaicebonbonFiyat") * localStorage.getItem("adalyaicebonbonAdet"));
    fiyatPrintadalyaicebonbon();
};
function fiyatPrintadalyaicebonbon() {
    document.getElementById("shop-kapsayici-adalya-icebonbon").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreaseadalyaicebonbon();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("adalyaicebonbonName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("adalyaicebonbonAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("adalyaicebonbonFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreaseadalyaicebonbon() {
    if (localStorage.getItem("adalyaicebonbonAdet") < 1) {
        const listadalyaicebonbon = document.getElementById("shop-kapsayici-adalya-icebonbon");
        listadalyaicebonbon.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("adalyaicebonbonAdet", localStorage.getItem("adalyaicebonbonAdet") - 1);
        toListadalyaicebonbon("azalt");
        if (localStorage.getItem("adalyaicebonbonAdet") < 1) {
            document.getElementById("shop-kapsayici-adalya-icebonbon").style.display = "none";
        }
    }
}
//////////////ADALYA.PHP ICEBONBON END

//////////////ADALYA.PHP IZMIR ROMANTIK START
const adalyaizmirromantik = document.querySelector("#adalya-izmirromantik-add");
const adalyaizmirromantikFiyat = Number(document.querySelector("#adalya-izmirromantik-fiyat").innerHTML);
var adalyaizmirromantikAdet;
adalyaizmirromantik.addEventListener("click", toListadalyaizmirromantik);
function toListadalyaizmirromantik(par) {
    document.getElementById("shop-kapsayici-adalya-izmirromantik").style.display = "block";
    if (par == "azalt") {
        adalyaizmirromantikAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("adalyaizmirromantikAdet") == "null" || localStorage.getItem("adalyaizmirromantikAdet") == "undefined" || localStorage.getItem("adalyaizmirromantikAdet") == "NaN") {
        localStorage.setItem("adalyaizmirromantikAdet", 0);
        adalyaizmirromantikAdet = localStorage.getItem("adalyaizmirromantikAdet");
    }
    adalyaizmirromantikAdet = localStorage.getItem("adalyaizmirromantikAdet");
    if (par != "azalt") {
        adalyaizmirromantikAdet++;
    }
    localStorage.setItem("adalyaizmirromantikName", "izmir romantik");
    localStorage.setItem("adalyaizmirromantikFiyat", adalyaizmirromantikFiyat);
    localStorage.setItem("adalyaizmirromantikAdet", adalyaizmirromantikAdet);
    document.getElementById("shop-kapsayici-adalya-izmirromantik").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreaseadalyaizmirromantik();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("adalyaizmirromantikName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("adalyaizmirromantikAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("adalyaizmirromantikFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totaladalyaizmirromantikFiyat", localStorage.getItem("adalyaizmirromantikFiyat") * localStorage.getItem("adalyaizmirromantikAdet"));
    fiyatPrintadalyaizmirromantik();
};
function fiyatPrintadalyaizmirromantik() {
    document.getElementById("shop-kapsayici-adalya-izmirromantik").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreaseadalyaizmirromantik();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("adalyaizmirromantikName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("adalyaizmirromantikAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("adalyaizmirromantikFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreaseadalyaizmirromantik() {
    if (localStorage.getItem("adalyaizmirromantikAdet") < 1) {
        const listadalyaizmirromantik = document.getElementById("shop-kapsayici-adalya-izmirromantik");
        listadalyaizmirromantik.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("adalyaizmirromantikAdet", localStorage.getItem("adalyaizmirromantikAdet") - 1);
        toListadalyaizmirromantik("azalt");
        if (localStorage.getItem("adalyaizmirromantikAdet") < 1) {
            document.getElementById("shop-kapsayici-adalya-izmirromantik").style.display = "none";
        }
    }
}
//////////////ADALYA.PHP IZMIR ROMANTIK END


//////////////BESTCOUPLE.PHP UZUM-NANE START
const bestcoupleuzumnane = document.querySelector("#bestcouple-uzumnane-add");
const bestcoupleuzumnaneFiyat = Number(document.querySelector("#bestcouple-uzumnane-fiyat").innerHTML);
var bestcoupleuzumnaneAdet;
bestcoupleuzumnane.addEventListener("click", toListbestcoupleuzumnane);
function toListbestcoupleuzumnane(par) {
    document.getElementById("shop-kapsayici-bestcouple-uzumnane").style.display = "block";
    if (par == "azalt") {
        bestcoupleuzumnaneAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("bestcoupleuzumnaneAdet") == "null" || localStorage.getItem("bestcoupleuzumnaneAdet") == "undefined" || localStorage.getItem("bestcoupleuzumnaneAdet") == "NaN") {
        localStorage.setItem("bestcoupleuzumnaneAdet", 0);
        bestcoupleuzumnaneAdet = localStorage.getItem("bestcoupleuzumnaneAdet");
    }
    bestcoupleuzumnaneAdet = localStorage.getItem("bestcoupleuzumnaneAdet");
    if (par != "azalt") {
        bestcoupleuzumnaneAdet++;
    }
    localStorage.setItem("bestcoupleuzumnaneName", "Üzüm-nane");
    localStorage.setItem("bestcoupleuzumnaneFiyat", bestcoupleuzumnaneFiyat);
    localStorage.setItem("bestcoupleuzumnaneAdet", bestcoupleuzumnaneAdet);
    document.getElementById("shop-kapsayici-bestcouple-uzumnane").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasebestcoupleuzumnane();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("bestcoupleuzumnaneName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("bestcoupleuzumnaneAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("bestcoupleuzumnaneFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totalbestcoupleuzumnaneFiyat", localStorage.getItem("bestcoupleuzumnaneFiyat") * localStorage.getItem("bestcoupleuzumnaneAdet"));
    fiyatPrintbestcoupleuzumnane();
};
function fiyatPrintbestcoupleuzumnane() {
    document.getElementById("shop-kapsayici-bestcouple-uzumnane").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasebestcoupleuzumnane();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("bestcoupleuzumnaneName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("bestcoupleuzumnaneAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("bestcoupleuzumnaneFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasebestcoupleuzumnane() {
    if (localStorage.getItem("bestcoupleuzumnaneAdet") < 1) {
        const listbestcoupleuzumnane = document.getElementById("shop-kapsayici-bestcouple-uzumnane");
        listbestcoupleuzumnane.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("bestcoupleuzumnaneAdet", localStorage.getItem("bestcoupleuzumnaneAdet") - 1);
        toListbestcoupleuzumnane("azalt");
        if (localStorage.getItem("bestcoupleuzumnaneAdet") < 1) {
            document.getElementById("shop-kapsayici-bestcouple-uzumnane").style.display = "none";
        }
    }
}
//////////////BESTCOUPLE.PHP UZUM-NANE END


//////////////BESTCOUPLE.PHP UZUM-VISNE START
const bestcoupleuzumvisne = document.querySelector("#bestcouple-uzumvisne-add");
const bestcoupleuzumvisneFiyat = Number(document.querySelector("#bestcouple-uzumvisne-fiyat").innerHTML);
var bestcoupleuzumvisneAdet;
bestcoupleuzumvisne.addEventListener("click", toListbestcoupleuzumvisne);
function toListbestcoupleuzumvisne(par) {
    document.getElementById("shop-kapsayici-bestcouple-uzumvisne").style.display = "block";
    if (par == "azalt") {
        bestcoupleuzumvisneAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("bestcoupleuzumvisneAdet") == "null" || localStorage.getItem("bestcoupleuzumvisneAdet") == "undefined" || localStorage.getItem("bestcoupleuzumvisneAdet") == "NaN") {
        localStorage.setItem("bestcoupleuzumvisneAdet", 0);
        bestcoupleuzumvisneAdet = localStorage.getItem("bestcoupleuzumvisneAdet");
    }
    bestcoupleuzumvisneAdet = localStorage.getItem("bestcoupleuzumvisneAdet");
    if (par != "azalt") {
        bestcoupleuzumvisneAdet++;
    }
    localStorage.setItem("bestcoupleuzumvisneName", "Üzüm-vişne");
    localStorage.setItem("bestcoupleuzumvisneFiyat", bestcoupleuzumvisneFiyat);
    localStorage.setItem("bestcoupleuzumvisneAdet", bestcoupleuzumvisneAdet);
    document.getElementById("shop-kapsayici-bestcouple-uzumvisne").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasebestcoupleuzumvisne();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("bestcoupleuzumvisneName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("bestcoupleuzumvisneAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("bestcoupleuzumvisneFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totalbestcoupleuzumvisneFiyat", localStorage.getItem("bestcoupleuzumvisneFiyat") * localStorage.getItem("bestcoupleuzumvisneAdet"));
    fiyatPrintbestcoupleuzumvisne();
};
function fiyatPrintbestcoupleuzumvisne() {
    document.getElementById("shop-kapsayici-bestcouple-uzumvisne").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasebestcoupleuzumvisne();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("bestcoupleuzumvisneName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("bestcoupleuzumvisneAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("bestcoupleuzumvisneFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasebestcoupleuzumvisne() {
    if (localStorage.getItem("bestcoupleuzumvisneAdet") < 1) {
        const listbestcoupleuzumvisne = document.getElementById("shop-kapsayici-bestcouple-uzumvisne");
        listbestcoupleuzumvisne.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("bestcoupleuzumvisneAdet", localStorage.getItem("bestcoupleuzumvisneAdet") - 1);
        toListbestcoupleuzumvisne("azalt");
        if (localStorage.getItem("bestcoupleuzumvisneAdet") < 1) {
            document.getElementById("shop-kapsayici-bestcouple-uzumvisne").style.display = "none";
        }
    }
}
//////////////BESTCOUPLE.PHP UZUM-VİSNE END


//////////////BESTCOUPLE.PHP UZUM-YABAN START
const bestcoupleuzumyaban = document.querySelector("#bestcouple-uzumyaban-add");
const bestcoupleuzumyabanFiyat = Number(document.querySelector("#bestcouple-uzumyaban-fiyat").innerHTML);
var bestcoupleuzumyabanAdet;
bestcoupleuzumyaban.addEventListener("click", toListbestcoupleuzumyaban);
function toListbestcoupleuzumyaban(par) {
    document.getElementById("shop-kapsayici-bestcouple-uzumyaban").style.display = "block";
    if (par == "azalt") {
        bestcoupleuzumyabanAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("bestcoupleuzumyabanAdet") == "null" || localStorage.getItem("bestcoupleuzumyabanAdet") == "undefined" || localStorage.getItem("bestcoupleuzumyabanAdet") == "NaN") {
        localStorage.setItem("bestcoupleuzumyabanAdet", 0);
        bestcoupleuzumyabanAdet = localStorage.getItem("bestcoupleuzumyabanAdet");
    }
    bestcoupleuzumyabanAdet = localStorage.getItem("bestcoupleuzumyabanAdet");
    if (par != "azalt") {
        bestcoupleuzumyabanAdet++;
    }
    localStorage.setItem("bestcoupleuzumyabanName", "Üzüm-yaban");
    localStorage.setItem("bestcoupleuzumyabanFiyat", bestcoupleuzumyabanFiyat);
    localStorage.setItem("bestcoupleuzumyabanAdet", bestcoupleuzumyabanAdet);
    document.getElementById("shop-kapsayici-bestcouple-uzumyaban").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasebestcoupleuzumyaban();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("bestcoupleuzumyabanName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("bestcoupleuzumyabanAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("bestcoupleuzumyabanFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totalbestcoupleuzumyabanFiyat", localStorage.getItem("bestcoupleuzumyabanFiyat") * localStorage.getItem("bestcoupleuzumyabanAdet"));
    fiyatPrintbestcoupleuzumyaban();
};
function fiyatPrintbestcoupleuzumyaban() {
    document.getElementById("shop-kapsayici-bestcouple-uzumyaban").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasebestcoupleuzumyaban();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("bestcoupleuzumyabanName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("bestcoupleuzumyabanAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("bestcoupleuzumyabanFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasebestcoupleuzumyaban() {
    if (localStorage.getItem("bestcoupleuzumyabanAdet") < 1) {
        const listbestcoupleuzumyaban = document.getElementById("shop-kapsayici-bestcouple-uzumyaban");
        listbestcoupleuzumyaban.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("bestcoupleuzumyabanAdet", localStorage.getItem("bestcoupleuzumyabanAdet") - 1);
        toListbestcoupleuzumyaban("azalt");
        if (localStorage.getItem("bestcoupleuzumyabanAdet") < 1) {
            document.getElementById("shop-kapsayici-bestcouple-uzumyaban").style.display = "none";
        }
    }
}
//////////////BESTCOUPLE.PHP UZUM-YABAN END



//////////////BESTCOUPLE.PHP ELMA-NANE START
const bestcoupleelmanane = document.querySelector("#bestcouple-elmanane-add");
const bestcoupleelmananeFiyat = Number(document.querySelector("#bestcouple-elmanane-fiyat").innerHTML);
var bestcoupleelmananeAdet;
bestcoupleelmanane.addEventListener("click", toListbestcoupleelmanane);
function toListbestcoupleelmanane(par) {
    document.getElementById("shop-kapsayici-bestcouple-elmanane").style.display = "block";
    if (par == "azalt") {
        bestcoupleelmananeAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("bestcoupleelmananeAdet") == "null" || localStorage.getItem("bestcoupleelmananeAdet") == "undefined" || localStorage.getItem("bestcoupleelmananeAdet") == "NaN") {
        localStorage.setItem("bestcoupleelmananeAdet", 0);
        bestcoupleelmananeAdet = localStorage.getItem("bestcoupleelmananeAdet");
    }
    bestcoupleelmananeAdet = localStorage.getItem("bestcoupleelmananeAdet");
    if (par != "azalt") {
        bestcoupleelmananeAdet++;
    }
    localStorage.setItem("bestcoupleelmananeName", "elma-nane");
    localStorage.setItem("bestcoupleelmananeFiyat", bestcoupleelmananeFiyat);
    localStorage.setItem("bestcoupleelmananeAdet", bestcoupleelmananeAdet);
    document.getElementById("shop-kapsayici-bestcouple-elmanane").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasebestcoupleelmanane();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("bestcoupleelmananeName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("bestcoupleelmananeAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("bestcoupleelmananeFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totalbestcoupleelmananeFiyat", localStorage.getItem("bestcoupleelmananeFiyat") * localStorage.getItem("bestcoupleelmananeAdet"));
    fiyatPrintbestcoupleelmanane();
};
function fiyatPrintbestcoupleelmanane() {
    document.getElementById("shop-kapsayici-bestcouple-elmanane").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasebestcoupleelmanane();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("bestcoupleelmananeName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("bestcoupleelmananeAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("bestcoupleelmananeFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasebestcoupleelmanane() {
    if (localStorage.getItem("bestcoupleelmananeAdet") < 1) {
        const listbestcoupleelmanane = document.getElementById("shop-kapsayici-bestcouple-elmanane");
        listbestcoupleelmanane.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("bestcoupleelmananeAdet", localStorage.getItem("bestcoupleelmananeAdet") - 1);
        toListbestcoupleelmanane("azalt");
        if (localStorage.getItem("bestcoupleelmananeAdet") < 1) {
            document.getElementById("shop-kapsayici-bestcouple-elmanane").style.display = "none";
        }
    }
}
//////////////BESTCOUPLE.PHP ELMA-NANE END



//////////////BESTCOUPLE.PHP KARPUZ-CILEK START
const bestcouplekarpuzcilek = document.querySelector("#bestcouple-karpuzcilek-add");
const bestcouplekarpuzcilekFiyat = Number(document.querySelector("#bestcouple-karpuzcilek-fiyat").innerHTML);
var bestcouplekarpuzcilekAdet;
bestcouplekarpuzcilek.addEventListener("click", toListbestcouplekarpuzcilek);
function toListbestcouplekarpuzcilek(par) {
    document.getElementById("shop-kapsayici-bestcouple-karpuzcilek").style.display = "block";
    if (par == "azalt") {
        bestcouplekarpuzcilekAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("bestcouplekarpuzcilekAdet") == "null" || localStorage.getItem("bestcouplekarpuzcilekAdet") == "undefined" || localStorage.getItem("bestcouplekarpuzcilekAdet") == "NaN") {
        localStorage.setItem("bestcouplekarpuzcilekAdet", 0);
        bestcouplekarpuzcilekAdet = localStorage.getItem("bestcouplekarpuzcilekAdet");
    }
    bestcouplekarpuzcilekAdet = localStorage.getItem("bestcouplekarpuzcilekAdet");
    if (par != "azalt") {
        bestcouplekarpuzcilekAdet++;
    }
    localStorage.setItem("bestcouplekarpuzcilekName", "karpuz-Çilek");
    localStorage.setItem("bestcouplekarpuzcilekFiyat", bestcouplekarpuzcilekFiyat);
    localStorage.setItem("bestcouplekarpuzcilekAdet", bestcouplekarpuzcilekAdet);
    document.getElementById("shop-kapsayici-bestcouple-karpuzcilek").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasebestcouplekarpuzcilek();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("bestcouplekarpuzcilekName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("bestcouplekarpuzcilekAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("bestcouplekarpuzcilekFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totalbestcouplekarpuzcilekFiyat", localStorage.getItem("bestcouplekarpuzcilekFiyat") * localStorage.getItem("bestcouplekarpuzcilekAdet"));
    fiyatPrintbestcouplekarpuzcilek();
};
function fiyatPrintbestcouplekarpuzcilek() {
    document.getElementById("shop-kapsayici-bestcouple-karpuzcilek").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasebestcouplekarpuzcilek();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("bestcouplekarpuzcilekName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("bestcouplekarpuzcilekAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("bestcouplekarpuzcilekFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasebestcouplekarpuzcilek() {
    if (localStorage.getItem("bestcouplekarpuzcilekAdet") < 1) {
        const listbestcouplekarpuzcilek = document.getElementById("shop-kapsayici-bestcouple-karpuzcilek");
        listbestcouplekarpuzcilek.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("bestcouplekarpuzcilekAdet", localStorage.getItem("bestcouplekarpuzcilekAdet") - 1);
        toListbestcouplekarpuzcilek("azalt");
        if (localStorage.getItem("bestcouplekarpuzcilekAdet") < 1) {
            document.getElementById("shop-kapsayici-bestcouple-karpuzcilek").style.display = "none";
        }
    }
}
//////////////BESTCOUPLE.PHP KARPUZ-CILEK END



//////////////BESTCOUPLE.PHP LIMON-CILEK START
const bestcouplelimoncilek = document.querySelector("#bestcouple-limoncilek-add");
const bestcouplelimoncilekFiyat = Number(document.querySelector("#bestcouple-limoncilek-fiyat").innerHTML);
var bestcouplelimoncilekAdet;
bestcouplelimoncilek.addEventListener("click", toListbestcouplelimoncilek);
function toListbestcouplelimoncilek(par) {
    document.getElementById("shop-kapsayici-bestcouple-limoncilek").style.display = "block";
    if (par == "azalt") {
        bestcouplelimoncilekAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("bestcouplelimoncilekAdet") == "null" || localStorage.getItem("bestcouplelimoncilekAdet") == "undefined" || localStorage.getItem("bestcouplelimoncilekAdet") == "NaN") {
        localStorage.setItem("bestcouplelimoncilekAdet", 0);
        bestcouplelimoncilekAdet = localStorage.getItem("bestcouplelimoncilekAdet");
    }
    bestcouplelimoncilekAdet = localStorage.getItem("bestcouplelimoncilekAdet");
    if (par != "azalt") {
        bestcouplelimoncilekAdet++;
    }
    localStorage.setItem("bestcouplelimoncilekName", "limon-Çilek");
    localStorage.setItem("bestcouplelimoncilekFiyat", bestcouplelimoncilekFiyat);
    localStorage.setItem("bestcouplelimoncilekAdet", bestcouplelimoncilekAdet);
    document.getElementById("shop-kapsayici-bestcouple-limoncilek").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasebestcouplelimoncilek();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("bestcouplelimoncilekName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("bestcouplelimoncilekAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("bestcouplelimoncilekFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totalbestcouplelimoncilekFiyat", localStorage.getItem("bestcouplelimoncilekFiyat") * localStorage.getItem("bestcouplelimoncilekAdet"));
    fiyatPrintbestcouplelimoncilek();
};
function fiyatPrintbestcouplelimoncilek() {
    document.getElementById("shop-kapsayici-bestcouple-limoncilek").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasebestcouplelimoncilek();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("bestcouplelimoncilekName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("bestcouplelimoncilekAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("bestcouplelimoncilekFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasebestcouplelimoncilek() {
    if (localStorage.getItem("bestcouplelimoncilekAdet") < 1) {
        const listbestcouplelimoncilek = document.getElementById("shop-kapsayici-bestcouple-limoncilek");
        listbestcouplelimoncilek.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("bestcouplelimoncilekAdet", localStorage.getItem("bestcouplelimoncilekAdet") - 1);
        toListbestcouplelimoncilek("azalt");
        if (localStorage.getItem("bestcouplelimoncilekAdet") < 1) {
            document.getElementById("shop-kapsayici-bestcouple-limoncilek").style.display = "none";
        }
    }
}
//////////////BESTCOUPLE.PHP LIMON-CILEK END


//////////////BESTCOUPLE.PHP SEFTALI-KAVUN START
const bestcoupleseftalikavun = document.querySelector("#bestcouple-seftalikavun-add");
const bestcoupleseftalikavunFiyat = Number(document.querySelector("#bestcouple-seftalikavun-fiyat").innerHTML);
var bestcoupleseftalikavunAdet;
bestcoupleseftalikavun.addEventListener("click", toListbestcoupleseftalikavun);
function toListbestcoupleseftalikavun(par) {
    document.getElementById("shop-kapsayici-bestcouple-seftalikavun").style.display = "block";
    if (par == "azalt") {
        bestcoupleseftalikavunAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("bestcoupleseftalikavunAdet") == "null" || localStorage.getItem("bestcoupleseftalikavunAdet") == "undefined" || localStorage.getItem("bestcoupleseftalikavunAdet") == "NaN") {
        localStorage.setItem("bestcoupleseftalikavunAdet", 0);
        bestcoupleseftalikavunAdet = localStorage.getItem("bestcoupleseftalikavunAdet");
    }
    bestcoupleseftalikavunAdet = localStorage.getItem("bestcoupleseftalikavunAdet");
    if (par != "azalt") {
        bestcoupleseftalikavunAdet++;
    }
    localStorage.setItem("bestcoupleseftalikavunName", "seftali-kavun");
    localStorage.setItem("bestcoupleseftalikavunFiyat", bestcoupleseftalikavunFiyat);
    localStorage.setItem("bestcoupleseftalikavunAdet", bestcoupleseftalikavunAdet);
    document.getElementById("shop-kapsayici-bestcouple-seftalikavun").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasebestcoupleseftalikavun();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("bestcoupleseftalikavunName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("bestcoupleseftalikavunAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("bestcoupleseftalikavunFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totalbestcoupleseftalikavunFiyat", localStorage.getItem("bestcoupleseftalikavunFiyat") * localStorage.getItem("bestcoupleseftalikavunAdet"));
    fiyatPrintbestcoupleseftalikavun();
};
function fiyatPrintbestcoupleseftalikavun() {
    document.getElementById("shop-kapsayici-bestcouple-seftalikavun").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasebestcoupleseftalikavun();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("bestcoupleseftalikavunName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("bestcoupleseftalikavunAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("bestcoupleseftalikavunFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasebestcoupleseftalikavun() {
    if (localStorage.getItem("bestcoupleseftalikavunAdet") < 1) {
        const listbestcoupleseftalikavun = document.getElementById("shop-kapsayici-bestcouple-seftalikavun");
        listbestcoupleseftalikavun.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("bestcoupleseftalikavunAdet", localStorage.getItem("bestcoupleseftalikavunAdet") - 1);
        toListbestcoupleseftalikavun("azalt");
        if (localStorage.getItem("bestcoupleseftalikavunAdet") < 1) {
            document.getElementById("shop-kapsayici-bestcouple-seftalikavun").style.display = "none";
        }
    }
}
//////////////BESTCOUPLE.PHP SEFTALI-KAVUN END


//////////////BESTCOUPLE.PHP VANILYA-KARAMEL START
const bestcouplevanilyakaramel = document.querySelector("#bestcouple-vanilyakaramel-add");
const bestcouplevanilyakaramelFiyat = Number(document.querySelector("#bestcouple-vanilyakaramel-fiyat").innerHTML);
var bestcouplevanilyakaramelAdet;
bestcouplevanilyakaramel.addEventListener("click", toListbestcouplevanilyakaramel);
function toListbestcouplevanilyakaramel(par) {
    document.getElementById("shop-kapsayici-bestcouple-vanilyakaramel").style.display = "block";
    if (par == "azalt") {
        bestcouplevanilyakaramelAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("bestcouplevanilyakaramelAdet") == "null" || localStorage.getItem("bestcouplevanilyakaramelAdet") == "undefined" || localStorage.getItem("bestcouplevanilyakaramelAdet") == "NaN") {
        localStorage.setItem("bestcouplevanilyakaramelAdet", 0);
        bestcouplevanilyakaramelAdet = localStorage.getItem("bestcouplevanilyakaramelAdet");
    }
    bestcouplevanilyakaramelAdet = localStorage.getItem("bestcouplevanilyakaramelAdet");
    if (par != "azalt") {
        bestcouplevanilyakaramelAdet++;
    }
    localStorage.setItem("bestcouplevanilyakaramelName", "vanilya-karamel");
    localStorage.setItem("bestcouplevanilyakaramelFiyat", bestcouplevanilyakaramelFiyat);
    localStorage.setItem("bestcouplevanilyakaramelAdet", bestcouplevanilyakaramelAdet);
    document.getElementById("shop-kapsayici-bestcouple-vanilyakaramel").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasebestcouplevanilyakaramel();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("bestcouplevanilyakaramelName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("bestcouplevanilyakaramelAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("bestcouplevanilyakaramelFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totalbestcouplevanilyakaramelFiyat", localStorage.getItem("bestcouplevanilyakaramelFiyat") * localStorage.getItem("bestcouplevanilyakaramelAdet"));
    fiyatPrintbestcouplevanilyakaramel();
};
function fiyatPrintbestcouplevanilyakaramel() {
    document.getElementById("shop-kapsayici-bestcouple-vanilyakaramel").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasebestcouplevanilyakaramel();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("bestcouplevanilyakaramelName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("bestcouplevanilyakaramelAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("bestcouplevanilyakaramelFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasebestcouplevanilyakaramel() {
    if (localStorage.getItem("bestcouplevanilyakaramelAdet") < 1) {
        const listbestcouplevanilyakaramel = document.getElementById("shop-kapsayici-bestcouple-vanilyakaramel");
        listbestcouplevanilyakaramel.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("bestcouplevanilyakaramelAdet", localStorage.getItem("bestcouplevanilyakaramelAdet") - 1);
        toListbestcouplevanilyakaramel("azalt");
        if (localStorage.getItem("bestcouplevanilyakaramelAdet") < 1) {
            document.getElementById("shop-kapsayici-bestcouple-vanilyakaramel").style.display = "none";
        }
    }
}
//////////////BESTCOUPLE.PHP VANILYA-KARAMEL END



//////////////BESTCOUPLE.PHP BLUEMIST-BOGURTLEN START
const bestcouplebluemistbogurtlen = document.querySelector("#bestcouple-bluemistbogurtlen-add");
const bestcouplebluemistbogurtlenFiyat = Number(document.querySelector("#bestcouple-bluemistbogurtlen-fiyat").innerHTML);
var bestcouplebluemistbogurtlenAdet;
bestcouplebluemistbogurtlen.addEventListener("click", toListbestcouplebluemistbogurtlen);
function toListbestcouplebluemistbogurtlen(par) {
    document.getElementById("shop-kapsayici-bestcouple-bluemistbogurtlen").style.display = "block";
    if (par == "azalt") {
        bestcouplebluemistbogurtlenAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("bestcouplebluemistbogurtlenAdet") == "null" || localStorage.getItem("bestcouplebluemistbogurtlenAdet") == "undefined" || localStorage.getItem("bestcouplebluemistbogurtlenAdet") == "NaN") {
        localStorage.setItem("bestcouplebluemistbogurtlenAdet", 0);
        bestcouplebluemistbogurtlenAdet = localStorage.getItem("bestcouplebluemistbogurtlenAdet");
    }
    bestcouplebluemistbogurtlenAdet = localStorage.getItem("bestcouplebluemistbogurtlenAdet");
    if (par != "azalt") {
        bestcouplebluemistbogurtlenAdet++;
    }
    localStorage.setItem("bestcouplebluemistbogurtlenName", "bluemist-böğürtlen");
    localStorage.setItem("bestcouplebluemistbogurtlenFiyat", bestcouplebluemistbogurtlenFiyat);
    localStorage.setItem("bestcouplebluemistbogurtlenAdet", bestcouplebluemistbogurtlenAdet);
    document.getElementById("shop-kapsayici-bestcouple-bluemistbogurtlen").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasebestcouplebluemistbogurtlen();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("bestcouplebluemistbogurtlenName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("bestcouplebluemistbogurtlenAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("bestcouplebluemistbogurtlenFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totalbestcouplebluemistbogurtlenFiyat", localStorage.getItem("bestcouplebluemistbogurtlenFiyat") * localStorage.getItem("bestcouplebluemistbogurtlenAdet"));
    fiyatPrintbestcouplebluemistbogurtlen();
};
function fiyatPrintbestcouplebluemistbogurtlen() {
    document.getElementById("shop-kapsayici-bestcouple-bluemistbogurtlen").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasebestcouplebluemistbogurtlen();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("bestcouplebluemistbogurtlenName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("bestcouplebluemistbogurtlenAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("bestcouplebluemistbogurtlenFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasebestcouplebluemistbogurtlen() {
    if (localStorage.getItem("bestcouplebluemistbogurtlenAdet") < 1) {
        const listbestcouplebluemistbogurtlen = document.getElementById("shop-kapsayici-bestcouple-bluemistbogurtlen");
        listbestcouplebluemistbogurtlen.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("bestcouplebluemistbogurtlenAdet", localStorage.getItem("bestcouplebluemistbogurtlenAdet") - 1);
        toListbestcouplebluemistbogurtlen("azalt");
        if (localStorage.getItem("bestcouplebluemistbogurtlenAdet") < 1) {
            document.getElementById("shop-kapsayici-bestcouple-bluemistbogurtlen").style.display = "none";
        }
    }
}
//////////////BESTCOUPLE.PHP BLUEMIST-BOGURTLEN END


//////////////TRUEPASSION.PHP CINDRELLA START
const truepassioncindrella = document.querySelector("#truepassion-cindrella-add");
const truepassioncindrellaFiyat = Number(document.querySelector("#truepassion-cindrella-fiyat").innerHTML);
var truepassioncindrellaAdet;
truepassioncindrella.addEventListener("click", toListtruepassioncindrella);
function toListtruepassioncindrella(par) {
    document.getElementById("shop-kapsayici-truepassion-cindrella").style.display = "block";
    if (par == "azalt") {
        truepassioncindrellaAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("truepassioncindrellaAdet") == "null" || localStorage.getItem("truepassioncindrellaAdet") == "undefined" || localStorage.getItem("truepassioncindrellaAdet") == "NaN") {
        localStorage.setItem("truepassioncindrellaAdet", 0);
        truepassioncindrellaAdet = localStorage.getItem("truepassioncindrellaAdet");
    }
    truepassioncindrellaAdet = localStorage.getItem("truepassioncindrellaAdet");
    if (par != "azalt") {
        truepassioncindrellaAdet++;
    }
    localStorage.setItem("truepassioncindrellaName", "cindrella");
    localStorage.setItem("truepassioncindrellaFiyat", truepassioncindrellaFiyat);
    localStorage.setItem("truepassioncindrellaAdet", truepassioncindrellaAdet);
    document.getElementById("shop-kapsayici-truepassion-cindrella").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasetruepassioncindrella();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("truepassioncindrellaName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("truepassioncindrellaAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("truepassioncindrellaFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totaltruepassioncindrellaFiyat", localStorage.getItem("truepassioncindrellaFiyat") * localStorage.getItem("truepassioncindrellaAdet"));
    fiyatPrinttruepassioncindrella();
};
function fiyatPrinttruepassioncindrella() {
    document.getElementById("shop-kapsayici-truepassion-cindrella").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasetruepassioncindrella();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("truepassioncindrellaName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("truepassioncindrellaAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("truepassioncindrellaFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasetruepassioncindrella() {
    if (localStorage.getItem("truepassioncindrellaAdet") < 1) {
        const listtruepassioncindrella = document.getElementById("shop-kapsayici-truepassion-cindrella");
        listtruepassioncindrella.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("truepassioncindrellaAdet", localStorage.getItem("truepassioncindrellaAdet") - 1);
        toListtruepassioncindrella("azalt");
        if (localStorage.getItem("truepassioncindrellaAdet") < 1) {
            document.getElementById("shop-kapsayici-truepassion-cindrella").style.display = "none";
        }
    }
}
//////////////TRUEPASSION.PHP CINDRELLA END


//////////////TRUEPASSION.PHP ARTICLINE START
const truepassionarticline = document.querySelector("#truepassion-articline-add");
const truepassionarticlineFiyat = Number(document.querySelector("#truepassion-articline-fiyat").innerHTML);
var truepassionarticlineAdet;
truepassionarticline.addEventListener("click", toListtruepassionarticline);
function toListtruepassionarticline(par) {
    document.getElementById("shop-kapsayici-truepassion-articline").style.display = "block";
    if (par == "azalt") {
        truepassionarticlineAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("truepassionarticlineAdet") == "null" || localStorage.getItem("truepassionarticlineAdet") == "undefined" || localStorage.getItem("truepassionarticlineAdet") == "NaN") {
        localStorage.setItem("truepassionarticlineAdet", 0);
        truepassionarticlineAdet = localStorage.getItem("truepassionarticlineAdet");
    }
    truepassionarticlineAdet = localStorage.getItem("truepassionarticlineAdet");
    if (par != "azalt") {
        truepassionarticlineAdet++;
    }
    localStorage.setItem("truepassionarticlineName", "articline");
    localStorage.setItem("truepassionarticlineFiyat", truepassionarticlineFiyat);
    localStorage.setItem("truepassionarticlineAdet", truepassionarticlineAdet);
    document.getElementById("shop-kapsayici-truepassion-articline").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasetruepassionarticline();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("truepassionarticlineName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("truepassionarticlineAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("truepassionarticlineFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totaltruepassionarticlineFiyat", localStorage.getItem("truepassionarticlineFiyat") * localStorage.getItem("truepassionarticlineAdet"));
    fiyatPrinttruepassionarticline();
};
function fiyatPrinttruepassionarticline() {
    document.getElementById("shop-kapsayici-truepassion-articline").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasetruepassionarticline();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("truepassionarticlineName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("truepassionarticlineAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("truepassionarticlineFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasetruepassionarticline() {
    if (localStorage.getItem("truepassionarticlineAdet") < 1) {
        const listtruepassionarticline = document.getElementById("shop-kapsayici-truepassion-articline");
        listtruepassionarticline.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("truepassionarticlineAdet", localStorage.getItem("truepassionarticlineAdet") - 1);
        toListtruepassionarticline("azalt");
        if (localStorage.getItem("truepassionarticlineAdet") < 1) {
            document.getElementById("shop-kapsayici-truepassion-articline").style.display = "none";
        }
    }
}
//////////////TRUEPASSION.PHP ARTICLINE END


//////////////TRUEPASSION.PHP PINEAPPLE START
const truepassionpineapple = document.querySelector("#truepassion-pineapple-add");
const truepassionpineappleFiyat = Number(document.querySelector("#truepassion-pineapple-fiyat").innerHTML);
var truepassionpineappleAdet;
truepassionpineapple.addEventListener("click", toListtruepassionpineapple);
function toListtruepassionpineapple(par) {
    document.getElementById("shop-kapsayici-truepassion-pineapple").style.display = "block";
    if (par == "azalt") {
        truepassionpineappleAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("truepassionpineappleAdet") == "null" || localStorage.getItem("truepassionpineappleAdet") == "undefined" || localStorage.getItem("truepassionpineappleAdet") == "NaN") {
        localStorage.setItem("truepassionpineappleAdet", 0);
        truepassionpineappleAdet = localStorage.getItem("truepassionpineappleAdet");
    }
    truepassionpineappleAdet = localStorage.getItem("truepassionpineappleAdet");
    if (par != "azalt") {
        truepassionpineappleAdet++;
    }
    localStorage.setItem("truepassionpineappleName", "pineapple");
    localStorage.setItem("truepassionpineappleFiyat", truepassionpineappleFiyat);
    localStorage.setItem("truepassionpineappleAdet", truepassionpineappleAdet);
    document.getElementById("shop-kapsayici-truepassion-pineapple").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasetruepassionpineapple();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("truepassionpineappleName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("truepassionpineappleAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("truepassionpineappleFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totaltruepassionpineappleFiyat", localStorage.getItem("truepassionpineappleFiyat") * localStorage.getItem("truepassionpineappleAdet"));
    fiyatPrinttruepassionpineapple();
};
function fiyatPrinttruepassionpineapple() {
    document.getElementById("shop-kapsayici-truepassion-pineapple").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasetruepassionpineapple();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("truepassionpineappleName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("truepassionpineappleAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("truepassionpineappleFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasetruepassionpineapple() {
    if (localStorage.getItem("truepassionpineappleAdet") < 1) {
        const listtruepassionpineapple = document.getElementById("shop-kapsayici-truepassion-pineapple");
        listtruepassionpineapple.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("truepassionpineappleAdet", localStorage.getItem("truepassionpineappleAdet") - 1);
        toListtruepassionpineapple("azalt");
        if (localStorage.getItem("truepassionpineappleAdet") < 1) {
            document.getElementById("shop-kapsayici-truepassion-pineapple").style.display = "none";
        }
    }
}
//////////////TRUEPASSION.PHP PINEAPPLE END



//////////////TRUEPASSION.PHP HOLOPEACH START
const truepassionholopeach = document.querySelector("#truepassion-holopeach-add");
const truepassionholopeachFiyat = Number(document.querySelector("#truepassion-holopeach-fiyat").innerHTML);
var truepassionholopeachAdet;
truepassionholopeach.addEventListener("click", toListtruepassionholopeach);
function toListtruepassionholopeach(par) {
    document.getElementById("shop-kapsayici-truepassion-holopeach").style.display = "block";
    if (par == "azalt") {
        truepassionholopeachAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("truepassionholopeachAdet") == "null" || localStorage.getItem("truepassionholopeachAdet") == "undefined" || localStorage.getItem("truepassionholopeachAdet") == "NaN") {
        localStorage.setItem("truepassionholopeachAdet", 0);
        truepassionholopeachAdet = localStorage.getItem("truepassionholopeachAdet");
    }
    truepassionholopeachAdet = localStorage.getItem("truepassionholopeachAdet");
    if (par != "azalt") {
        truepassionholopeachAdet++;
    }
    localStorage.setItem("truepassionholopeachName", "holopeach");
    localStorage.setItem("truepassionholopeachFiyat", truepassionholopeachFiyat);
    localStorage.setItem("truepassionholopeachAdet", truepassionholopeachAdet);
    document.getElementById("shop-kapsayici-truepassion-holopeach").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasetruepassionholopeach();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("truepassionholopeachName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("truepassionholopeachAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("truepassionholopeachFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totaltruepassionholopeachFiyat", localStorage.getItem("truepassionholopeachFiyat") * localStorage.getItem("truepassionholopeachAdet"));
    fiyatPrinttruepassionholopeach();
};
function fiyatPrinttruepassionholopeach() {
    document.getElementById("shop-kapsayici-truepassion-holopeach").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasetruepassionholopeach();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("truepassionholopeachName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("truepassionholopeachAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("truepassionholopeachFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasetruepassionholopeach() {
    if (localStorage.getItem("truepassionholopeachAdet") < 1) {
        const listtruepassionholopeach = document.getElementById("shop-kapsayici-truepassion-holopeach");
        listtruepassionholopeach.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("truepassionholopeachAdet", localStorage.getItem("truepassionholopeachAdet") - 1);
        toListtruepassionholopeach("azalt");
        if (localStorage.getItem("truepassionholopeachAdet") < 1) {
            document.getElementById("shop-kapsayici-truepassion-holopeach").style.display = "none";
        }
    }
}
//////////////TRUEPASSION.PHP HOLOPEACH END


//////////////TRUEPASSION.PHP CASABLANCA START
const truepassioncasablanca = document.querySelector("#truepassion-casablanca-add");
const truepassioncasablancaFiyat = Number(document.querySelector("#truepassion-casablanca-fiyat").innerHTML);
var truepassioncasablancaAdet;
truepassioncasablanca.addEventListener("click", toListtruepassioncasablanca);
function toListtruepassioncasablanca(par) {
    document.getElementById("shop-kapsayici-truepassion-casablanca").style.display = "block";
    if (par == "azalt") {
        truepassioncasablancaAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("truepassioncasablancaAdet") == "null" || localStorage.getItem("truepassioncasablancaAdet") == "undefined" || localStorage.getItem("truepassioncasablancaAdet") == "NaN") {
        localStorage.setItem("truepassioncasablancaAdet", 0);
        truepassioncasablancaAdet = localStorage.getItem("truepassioncasablancaAdet");
    }
    truepassioncasablancaAdet = localStorage.getItem("truepassioncasablancaAdet");
    if (par != "azalt") {
        truepassioncasablancaAdet++;
    }
    localStorage.setItem("truepassioncasablancaName", "casablanca");
    localStorage.setItem("truepassioncasablancaFiyat", truepassioncasablancaFiyat);
    localStorage.setItem("truepassioncasablancaAdet", truepassioncasablancaAdet);
    document.getElementById("shop-kapsayici-truepassion-casablanca").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasetruepassioncasablanca();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("truepassioncasablancaName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("truepassioncasablancaAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("truepassioncasablancaFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totaltruepassioncasablancaFiyat", localStorage.getItem("truepassioncasablancaFiyat") * localStorage.getItem("truepassioncasablancaAdet"));
    fiyatPrinttruepassioncasablanca();
};
function fiyatPrinttruepassioncasablanca() {
    document.getElementById("shop-kapsayici-truepassion-casablanca").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasetruepassioncasablanca();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("truepassioncasablancaName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("truepassioncasablancaAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("truepassioncasablancaFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasetruepassioncasablanca() {
    if (localStorage.getItem("truepassioncasablancaAdet") < 1) {
        const listtruepassioncasablanca = document.getElementById("shop-kapsayici-truepassion-casablanca");
        listtruepassioncasablanca.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("truepassioncasablancaAdet", localStorage.getItem("truepassioncasablancaAdet") - 1);
        toListtruepassioncasablanca("azalt");
        if (localStorage.getItem("truepassioncasablancaAdet") < 1) {
            document.getElementById("shop-kapsayici-truepassion-casablanca").style.display = "none";
        }
    }
}
//////////////TRUEPASSION.PHP CASABLANCA END


//////////////TRUEPASSION.PHP OKOLOMMENTO START
const truepassionokolommento = document.querySelector("#truepassion-okolommento-add");
const truepassionokolommentoFiyat = Number(document.querySelector("#truepassion-okolommento-fiyat").innerHTML);
var truepassionokolommentoAdet;
truepassionokolommento.addEventListener("click", toListtruepassionokolommento);
function toListtruepassionokolommento(par) {
    document.getElementById("shop-kapsayici-truepassion-okolommento").style.display = "block";
    if (par == "azalt") {
        truepassionokolommentoAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("truepassionokolommentoAdet") == "null" || localStorage.getItem("truepassionokolommentoAdet") == "undefined" || localStorage.getItem("truepassionokolommentoAdet") == "NaN") {
        localStorage.setItem("truepassionokolommentoAdet", 0);
        truepassionokolommentoAdet = localStorage.getItem("truepassionokolommentoAdet");
    }
    truepassionokolommentoAdet = localStorage.getItem("truepassionokolommentoAdet");
    if (par != "azalt") {
        truepassionokolommentoAdet++;
    }
    localStorage.setItem("truepassionokolommentoName", "okolom mento");
    localStorage.setItem("truepassionokolommentoFiyat", truepassionokolommentoFiyat);
    localStorage.setItem("truepassionokolommentoAdet", truepassionokolommentoAdet);
    document.getElementById("shop-kapsayici-truepassion-okolommento").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasetruepassionokolommento();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("truepassionokolommentoName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("truepassionokolommentoAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("truepassionokolommentoFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totaltruepassionokolommentoFiyat", localStorage.getItem("truepassionokolommentoFiyat") * localStorage.getItem("truepassionokolommentoAdet"));
    fiyatPrinttruepassionokolommento();
};
function fiyatPrinttruepassionokolommento() {
    document.getElementById("shop-kapsayici-truepassion-okolommento").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasetruepassionokolommento();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("truepassionokolommentoName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("truepassionokolommentoAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("truepassionokolommentoFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasetruepassionokolommento() {
    if (localStorage.getItem("truepassionokolommentoAdet") < 1) {
        const listtruepassionokolommento = document.getElementById("shop-kapsayici-truepassion-okolommento");
        listtruepassionokolommento.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("truepassionokolommentoAdet", localStorage.getItem("truepassionokolommentoAdet") - 1);
        toListtruepassionokolommento("azalt");
        if (localStorage.getItem("truepassionokolommentoAdet") < 1) {
            document.getElementById("shop-kapsayici-truepassion-okolommento").style.display = "none";
        }
    }
}
//////////////TRUEPASSION.PHP OKOLOMMENTO END



//////////////DAIM.PHP DEJAVU START
const daimdejavu = document.querySelector("#daim-dejavu-add");
const daimdejavuFiyat = Number(document.querySelector("#daim-dejavu-fiyat").innerHTML);
var daimdejavuAdet;
daimdejavu.addEventListener("click", toListdaimdejavu);
function toListdaimdejavu(par) {
    document.getElementById("shop-kapsayici-daim-dejavu").style.display = "block";
    if (par == "azalt") {
        daimdejavuAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("daimdejavuAdet") == "null" || localStorage.getItem("daimdejavuAdet") == "undefined" || localStorage.getItem("daimdejavuAdet") == "NaN") {
        localStorage.setItem("daimdejavuAdet", 0);
        daimdejavuAdet = localStorage.getItem("daimdejavuAdet");
    }
    daimdejavuAdet = localStorage.getItem("daimdejavuAdet");
    if (par != "azalt") {
        daimdejavuAdet++;
    }
    localStorage.setItem("daimdejavuName", "dejavu");
    localStorage.setItem("daimdejavuFiyat", daimdejavuFiyat);
    localStorage.setItem("daimdejavuAdet", daimdejavuAdet);
    document.getElementById("shop-kapsayici-daim-dejavu").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasedaimdejavu();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("daimdejavuName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("daimdejavuAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("daimdejavuFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totaldaimdejavuFiyat", localStorage.getItem("daimdejavuFiyat") * localStorage.getItem("daimdejavuAdet"));
    fiyatPrintdaimdejavu();
};
function fiyatPrintdaimdejavu() {
    document.getElementById("shop-kapsayici-daim-dejavu").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasedaimdejavu();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("daimdejavuName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("daimdejavuAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("daimdejavuFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasedaimdejavu() {
    if (localStorage.getItem("daimdejavuAdet") < 1) {
        const listdaimdejavu = document.getElementById("shop-kapsayici-daim-dejavu");
        listdaimdejavu.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("daimdejavuAdet", localStorage.getItem("daimdejavuAdet") - 1);
        toListdaimdejavu("azalt");
        if (localStorage.getItem("daimdejavuAdet") < 1) {
            document.getElementById("shop-kapsayici-daim-dejavu").style.display = "none";
        }
    }
}
//////////////DAIM.PHP DEJAVU END


//////////////DAIM.PHP DONDURMA START
const daimdondurma = document.querySelector("#daim-dondurma-add");
const daimdondurmaFiyat = Number(document.querySelector("#daim-dondurma-fiyat").innerHTML);
var daimdondurmaAdet;
daimdondurma.addEventListener("click", toListdaimdondurma);
function toListdaimdondurma(par) {
    document.getElementById("shop-kapsayici-daim-dondurma").style.display = "block";
    if (par == "azalt") {
        daimdondurmaAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("daimdondurmaAdet") == "null" || localStorage.getItem("daimdondurmaAdet") == "undefined" || localStorage.getItem("daimdondurmaAdet") == "NaN") {
        localStorage.setItem("daimdondurmaAdet", 0);
        daimdondurmaAdet = localStorage.getItem("daimdondurmaAdet");
    }
    daimdondurmaAdet = localStorage.getItem("daimdondurmaAdet");
    if (par != "azalt") {
        daimdondurmaAdet++;
    }
    localStorage.setItem("daimdondurmaName", "dondurma");
    localStorage.setItem("daimdondurmaFiyat", daimdondurmaFiyat);
    localStorage.setItem("daimdondurmaAdet", daimdondurmaAdet);
    document.getElementById("shop-kapsayici-daim-dondurma").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasedaimdondurma();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("daimdondurmaName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("daimdondurmaAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("daimdondurmaFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totaldaimdondurmaFiyat", localStorage.getItem("daimdondurmaFiyat") * localStorage.getItem("daimdondurmaAdet"));
    fiyatPrintdaimdondurma();
};
function fiyatPrintdaimdondurma() {
    document.getElementById("shop-kapsayici-daim-dondurma").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasedaimdondurma();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("daimdondurmaName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("daimdondurmaAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("daimdondurmaFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasedaimdondurma() {
    if (localStorage.getItem("daimdondurmaAdet") < 1) {
        const listdaimdondurma = document.getElementById("shop-kapsayici-daim-dondurma");
        listdaimdondurma.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("daimdondurmaAdet", localStorage.getItem("daimdondurmaAdet") - 1);
        toListdaimdondurma("azalt");
        if (localStorage.getItem("daimdondurmaAdet") < 1) {
            document.getElementById("shop-kapsayici-daim-dondurma").style.display = "none";
        }
    }
}
//////////////DAIM.PHP DONDURMA END



//////////////DAIM.PHP TATLI CADI START
const daimtatlicadi = document.querySelector("#daim-tatlicadi-add");
const daimtatlicadiFiyat = Number(document.querySelector("#daim-tatlicadi-fiyat").innerHTML);
var daimtatlicadiAdet;
daimtatlicadi.addEventListener("click", toListdaimtatlicadi);
function toListdaimtatlicadi(par) {
    document.getElementById("shop-kapsayici-daim-tatlicadi").style.display = "block";
    if (par == "azalt") {
        daimtatlicadiAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("daimtatlicadiAdet") == "null" || localStorage.getItem("daimtatlicadiAdet") == "undefined" || localStorage.getItem("daimtatlicadiAdet") == "NaN") {
        localStorage.setItem("daimtatlicadiAdet", 0);
        daimtatlicadiAdet = localStorage.getItem("daimtatlicadiAdet");
    }
    daimtatlicadiAdet = localStorage.getItem("daimtatlicadiAdet");
    if (par != "azalt") {
        daimtatlicadiAdet++;
    }
    localStorage.setItem("daimtatlicadiName", "tatlı cadı");
    localStorage.setItem("daimtatlicadiFiyat", daimtatlicadiFiyat);
    localStorage.setItem("daimtatlicadiAdet", daimtatlicadiAdet);
    document.getElementById("shop-kapsayici-daim-tatlicadi").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasedaimtatlicadi();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("daimtatlicadiName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("daimtatlicadiAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("daimtatlicadiFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totaldaimtatlicadiFiyat", localStorage.getItem("daimtatlicadiFiyat") * localStorage.getItem("daimtatlicadiAdet"));
    fiyatPrintdaimtatlicadi();
};
function fiyatPrintdaimtatlicadi() {
    document.getElementById("shop-kapsayici-daim-tatlicadi").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasedaimtatlicadi();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("daimtatlicadiName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("daimtatlicadiAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("daimtatlicadiFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasedaimtatlicadi() {
    if (localStorage.getItem("daimtatlicadiAdet") < 1) {
        const listdaimtatlicadi = document.getElementById("shop-kapsayici-daim-tatlicadi");
        listdaimtatlicadi.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("daimtatlicadiAdet", localStorage.getItem("daimtatlicadiAdet") - 1);
        toListdaimtatlicadi("azalt");
        if (localStorage.getItem("daimtatlicadiAdet") < 1) {
            document.getElementById("shop-kapsayici-daim-tatlicadi").style.display = "none";
        }
    }
}
//////////////DAIM.PHP TATLI CADI END



//////////////DAIM.PHP YESIL ELMA START
const daimyesilelma = document.querySelector("#daim-yesilelma-add");
const daimyesilelmaFiyat = Number(document.querySelector("#daim-yesilelma-fiyat").innerHTML);
var daimyesilelmaAdet;
daimyesilelma.addEventListener("click", toListdaimyesilelma);
function toListdaimyesilelma(par) {
    document.getElementById("shop-kapsayici-daim-yesilelma").style.display = "block";
    if (par == "azalt") {
        daimyesilelmaAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("daimyesilelmaAdet") == "null" || localStorage.getItem("daimyesilelmaAdet") == "undefined" || localStorage.getItem("daimyesilelmaAdet") == "NaN") {
        localStorage.setItem("daimyesilelmaAdet", 0);
        daimyesilelmaAdet = localStorage.getItem("daimyesilelmaAdet");
    }
    daimyesilelmaAdet = localStorage.getItem("daimyesilelmaAdet");
    if (par != "azalt") {
        daimyesilelmaAdet++;
    }
    localStorage.setItem("daimyesilelmaName", "yeşil elma");
    localStorage.setItem("daimyesilelmaFiyat", daimyesilelmaFiyat);
    localStorage.setItem("daimyesilelmaAdet", daimyesilelmaAdet);
    document.getElementById("shop-kapsayici-daim-yesilelma").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasedaimyesilelma();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("daimyesilelmaName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("daimyesilelmaAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("daimyesilelmaFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totaldaimyesilelmaFiyat", localStorage.getItem("daimyesilelmaFiyat") * localStorage.getItem("daimyesilelmaAdet"));
    fiyatPrintdaimyesilelma();
};
function fiyatPrintdaimyesilelma() {
    document.getElementById("shop-kapsayici-daim-yesilelma").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasedaimyesilelma();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("daimyesilelmaName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("daimyesilelmaAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("daimyesilelmaFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasedaimyesilelma() {
    if (localStorage.getItem("daimyesilelmaAdet") < 1) {
        const listdaimyesilelma = document.getElementById("shop-kapsayici-daim-yesilelma");
        listdaimyesilelma.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("daimyesilelmaAdet", localStorage.getItem("daimyesilelmaAdet") - 1);
        toListdaimyesilelma("azalt");
        if (localStorage.getItem("daimyesilelmaAdet") < 1) {
            document.getElementById("shop-kapsayici-daim-yesilelma").style.display = "none";
        }
    }
}
//////////////DAIM.PHP YESIL ELMA END


//////////////DAIM.PHP lIMON BUZ START
const daimlimonbuz = document.querySelector("#daim-limonbuz-add");
const daimlimonbuzFiyat = Number(document.querySelector("#daim-limonbuz-fiyat").innerHTML);
var daimlimonbuzAdet;
daimlimonbuz.addEventListener("click", toListdaimlimonbuz);
function toListdaimlimonbuz(par) {
    document.getElementById("shop-kapsayici-daim-limonbuz").style.display = "block";
    if (par == "azalt") {
        daimlimonbuzAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("daimlimonbuzAdet") == "null" || localStorage.getItem("daimlimonbuzAdet") == "undefined" || localStorage.getItem("daimlimonbuzAdet") == "NaN") {
        localStorage.setItem("daimlimonbuzAdet", 0);
        daimlimonbuzAdet = localStorage.getItem("daimlimonbuzAdet");
    }
    daimlimonbuzAdet = localStorage.getItem("daimlimonbuzAdet");
    if (par != "azalt") {
        daimlimonbuzAdet++;
    }
    localStorage.setItem("daimlimonbuzName", "limon buz");
    localStorage.setItem("daimlimonbuzFiyat", daimlimonbuzFiyat);
    localStorage.setItem("daimlimonbuzAdet", daimlimonbuzAdet);
    document.getElementById("shop-kapsayici-daim-limonbuz").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasedaimlimonbuz();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("daimlimonbuzName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("daimlimonbuzAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("daimlimonbuzFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totaldaimlimonbuzFiyat", localStorage.getItem("daimlimonbuzFiyat") * localStorage.getItem("daimlimonbuzAdet"));
    fiyatPrintdaimlimonbuz();
};
function fiyatPrintdaimlimonbuz() {
    document.getElementById("shop-kapsayici-daim-limonbuz").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasedaimlimonbuz();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("daimlimonbuzName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("daimlimonbuzAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("daimlimonbuzFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasedaimlimonbuz() {
    if (localStorage.getItem("daimlimonbuzAdet") < 1) {
        const listdaimlimonbuz = document.getElementById("shop-kapsayici-daim-limonbuz");
        listdaimlimonbuz.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("daimlimonbuzAdet", localStorage.getItem("daimlimonbuzAdet") - 1);
        toListdaimlimonbuz("azalt");
        if (localStorage.getItem("daimlimonbuzAdet") < 1) {
            document.getElementById("shop-kapsayici-daim-limonbuz").style.display = "none";
        }
    }
}
//////////////DAIM.PHP LIMON BUZ END



//////////////DAIM.PHP SAKIZ NANE START
const daimsakiznane = document.querySelector("#daim-sakiznane-add");
const daimsakiznaneFiyat = Number(document.querySelector("#daim-sakiznane-fiyat").innerHTML);
var daimsakiznaneAdet;
daimsakiznane.addEventListener("click", toListdaimsakiznane);
function toListdaimsakiznane(par) {
    document.getElementById("shop-kapsayici-daim-sakiznane").style.display = "block";
    if (par == "azalt") {
        daimsakiznaneAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("daimsakiznaneAdet") == "null" || localStorage.getItem("daimsakiznaneAdet") == "undefined" || localStorage.getItem("daimsakiznaneAdet") == "NaN") {
        localStorage.setItem("daimsakiznaneAdet", 0);
        daimsakiznaneAdet = localStorage.getItem("daimsakiznaneAdet");
    }
    daimsakiznaneAdet = localStorage.getItem("daimsakiznaneAdet");
    if (par != "azalt") {
        daimsakiznaneAdet++;
    }
    localStorage.setItem("daimsakiznaneName", "sakız nane");
    localStorage.setItem("daimsakiznaneFiyat", daimsakiznaneFiyat);
    localStorage.setItem("daimsakiznaneAdet", daimsakiznaneAdet);
    document.getElementById("shop-kapsayici-daim-sakiznane").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasedaimsakiznane();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("daimsakiznaneName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("daimsakiznaneAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("daimsakiznaneFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totaldaimsakiznaneFiyat", localStorage.getItem("daimsakiznaneFiyat") * localStorage.getItem("daimsakiznaneAdet"));
    fiyatPrintdaimsakiznane();
};
function fiyatPrintdaimsakiznane() {
    document.getElementById("shop-kapsayici-daim-sakiznane").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasedaimsakiznane();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("daimsakiznaneName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("daimsakiznaneAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("daimsakiznaneFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasedaimsakiznane() {
    if (localStorage.getItem("daimsakiznaneAdet") < 1) {
        const listdaimsakiznane = document.getElementById("shop-kapsayici-daim-sakiznane");
        listdaimsakiznane.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("daimsakiznaneAdet", localStorage.getItem("daimsakiznaneAdet") - 1);
        toListdaimsakiznane("azalt");
        if (localStorage.getItem("daimsakiznaneAdet") < 1) {
            document.getElementById("shop-kapsayici-daim-sakiznane").style.display = "none";
        }
    }
}
//////////////DAIM.PHP SAKIZ NANE END


//////////////FUMARI.PHP GUMMNI BEAR START
const fumarigummibear = document.querySelector("#fumari-gummibear-add");
const fumarigummibearFiyat = Number(document.querySelector("#fumari-gummibear-fiyat").innerHTML);
var fumarigummibearAdet;
fumarigummibear.addEventListener("click", toListfumarigummibear);
function toListfumarigummibear(par) {
    document.getElementById("shop-kapsayici-fumari-gummibear").style.display = "block";
    if (par == "azalt") {
        fumarigummibearAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("fumarigummibearAdet") == "null" || localStorage.getItem("fumarigummibearAdet") == "undefined" || localStorage.getItem("fumarigummibearAdet") == "NaN") {
        localStorage.setItem("fumarigummibearAdet", 0);
        fumarigummibearAdet = localStorage.getItem("fumarigummibearAdet");
    }
    fumarigummibearAdet = localStorage.getItem("fumarigummibearAdet");
    if (par != "azalt") {
        fumarigummibearAdet++;
    }
    localStorage.setItem("fumarigummibearName", "Gummi Bear Red&White");
    localStorage.setItem("fumarigummibearFiyat", fumarigummibearFiyat);
    localStorage.setItem("fumarigummibearAdet", fumarigummibearAdet);
    document.getElementById("shop-kapsayici-fumari-gummibear").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasefumarigummibear();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("fumarigummibearName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("fumarigummibearAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("fumarigummibearFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totalfumarigummibearFiyat", localStorage.getItem("fumarigummibearFiyat") * localStorage.getItem("fumarigummibearAdet"));
    fiyatPrintfumarigummibear();
};
function fiyatPrintfumarigummibear() {
    document.getElementById("shop-kapsayici-fumari-gummibear").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasefumarigummibear();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("fumarigummibearName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("fumarigummibearAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("fumarigummibearFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasefumarigummibear() {
    if (localStorage.getItem("fumarigummibearAdet") < 1) {
        const listfumarigummibear = document.getElementById("shop-kapsayici-fumari-gummibear");
        listfumarigummibear.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("fumarigummibearAdet", localStorage.getItem("fumarigummibearAdet") - 1);
        toListfumarigummibear("azalt");
        if (localStorage.getItem("fumarigummibearAdet") < 1) {
            document.getElementById("shop-kapsayici-fumari-gummibear").style.display = "none";
        }
    }
}
//////////////FUMARI.PHP GUMMNI BEAR END


//////////////FUMARI.PHP MOJITO MOJO START
const fumarimojitomojo = document.querySelector("#fumari-mojitomojo-add");
const fumarimojitomojoFiyat = Number(document.querySelector("#fumari-mojitomojo-fiyat").innerHTML);
var fumarimojitomojoAdet;
fumarimojitomojo.addEventListener("click", toListfumarimojitomojo);
function toListfumarimojitomojo(par) {
    document.getElementById("shop-kapsayici-fumari-mojitomojo").style.display = "block";
    if (par == "azalt") {
        fumarimojitomojoAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("fumarimojitomojoAdet") == "null" || localStorage.getItem("fumarimojitomojoAdet") == "undefined" || localStorage.getItem("fumarimojitomojoAdet") == "NaN") {
        localStorage.setItem("fumarimojitomojoAdet", 0);
        fumarimojitomojoAdet = localStorage.getItem("fumarimojitomojoAdet");
    }
    fumarimojitomojoAdet = localStorage.getItem("fumarimojitomojoAdet");
    if (par != "azalt") {
        fumarimojitomojoAdet++;
    }
    localStorage.setItem("fumarimojitomojoName", "mojito mojo");
    localStorage.setItem("fumarimojitomojoFiyat", fumarimojitomojoFiyat);
    localStorage.setItem("fumarimojitomojoAdet", fumarimojitomojoAdet);
    document.getElementById("shop-kapsayici-fumari-mojitomojo").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasefumarimojitomojo();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("fumarimojitomojoName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("fumarimojitomojoAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("fumarimojitomojoFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totalfumarimojitomojoFiyat", localStorage.getItem("fumarimojitomojoFiyat") * localStorage.getItem("fumarimojitomojoAdet"));
    fiyatPrintfumarimojitomojo();
};
function fiyatPrintfumarimojitomojo() {
    document.getElementById("shop-kapsayici-fumari-mojitomojo").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasefumarimojitomojo();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("fumarimojitomojoName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("fumarimojitomojoAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("fumarimojitomojoFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasefumarimojitomojo() {
    if (localStorage.getItem("fumarimojitomojoAdet") < 1) {
        const listfumarimojitomojo = document.getElementById("shop-kapsayici-fumari-mojitomojo");
        listfumarimojitomojo.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("fumarimojitomojoAdet", localStorage.getItem("fumarimojitomojoAdet") - 1);
        toListfumarimojitomojo("azalt");
        if (localStorage.getItem("fumarimojitomojoAdet") < 1) {
            document.getElementById("shop-kapsayici-fumari-mojitomojo").style.display = "none";
        }
    }
}
//////////////FUMARI.PHP MOJITO MOJO END

//////////////FUMARI.PHP MOCHACCINO START
const fumarimochaccino = document.querySelector("#fumari-mochaccino-add");
const fumarimochaccinoFiyat = Number(document.querySelector("#fumari-mochaccino-fiyat").innerHTML);
var fumarimochaccinoAdet;
fumarimochaccino.addEventListener("click", toListfumarimochaccino);
function toListfumarimochaccino(par) {
    document.getElementById("shop-kapsayici-fumari-mochaccino").style.display = "block";
    if (par == "azalt") {
        fumarimochaccinoAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("fumarimochaccinoAdet") == "null" || localStorage.getItem("fumarimochaccinoAdet") == "undefined" || localStorage.getItem("fumarimochaccinoAdet") == "NaN") {
        localStorage.setItem("fumarimochaccinoAdet", 0);
        fumarimochaccinoAdet = localStorage.getItem("fumarimochaccinoAdet");
    }
    fumarimochaccinoAdet = localStorage.getItem("fumarimochaccinoAdet");
    if (par != "azalt") {
        fumarimochaccinoAdet++;
    }
    localStorage.setItem("fumarimochaccinoName", "mochaccino");
    localStorage.setItem("fumarimochaccinoFiyat", fumarimochaccinoFiyat);
    localStorage.setItem("fumarimochaccinoAdet", fumarimochaccinoAdet);
    document.getElementById("shop-kapsayici-fumari-mochaccino").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasefumarimochaccino();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("fumarimochaccinoName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("fumarimochaccinoAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("fumarimochaccinoFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totalfumarimochaccinoFiyat", localStorage.getItem("fumarimochaccinoFiyat") * localStorage.getItem("fumarimochaccinoAdet"));
    fiyatPrintfumarimochaccino();
};
function fiyatPrintfumarimochaccino() {
    document.getElementById("shop-kapsayici-fumari-mochaccino").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasefumarimochaccino();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("fumarimochaccinoName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("fumarimochaccinoAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("fumarimochaccinoFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasefumarimochaccino() {
    if (localStorage.getItem("fumarimochaccinoAdet") < 1) {
        const listfumarimochaccino = document.getElementById("shop-kapsayici-fumari-mochaccino");
        listfumarimochaccino.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("fumarimochaccinoAdet", localStorage.getItem("fumarimochaccinoAdet") - 1);
        toListfumarimochaccino("azalt");
        if (localStorage.getItem("fumarimochaccinoAdet") < 1) {
            document.getElementById("shop-kapsayici-fumari-mochaccino").style.display = "none";
        }
    }
}
//////////////FUMARI.PHP MOCHACCINO END

//////////////FUMARI.PHP ICE CREAM START
const fumariicecream = document.querySelector("#fumari-icecream-add");
const fumariicecreamFiyat = Number(document.querySelector("#fumari-icecream-fiyat").innerHTML);
var fumariicecreamAdet;
fumariicecream.addEventListener("click", toListfumariicecream);
function toListfumariicecream(par) {
    document.getElementById("shop-kapsayici-fumari-icecream").style.display = "block";
    if (par == "azalt") {
        fumariicecreamAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("fumariicecreamAdet") == "null" || localStorage.getItem("fumariicecreamAdet") == "undefined" || localStorage.getItem("fumariicecreamAdet") == "NaN") {
        localStorage.setItem("fumariicecreamAdet", 0);
        fumariicecreamAdet = localStorage.getItem("fumariicecreamAdet");
    }
    fumariicecreamAdet = localStorage.getItem("fumariicecreamAdet");
    if (par != "azalt") {
        fumariicecreamAdet++;
    }
    localStorage.setItem("fumariicecreamName", "ice cream");
    localStorage.setItem("fumariicecreamFiyat", fumariicecreamFiyat);
    localStorage.setItem("fumariicecreamAdet", fumariicecreamAdet);
    document.getElementById("shop-kapsayici-fumari-icecream").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasefumariicecream();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("fumariicecreamName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("fumariicecreamAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("fumariicecreamFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totalfumariicecreamFiyat", localStorage.getItem("fumariicecreamFiyat") * localStorage.getItem("fumariicecreamAdet"));
    fiyatPrintfumariicecream();
};
function fiyatPrintfumariicecream() {
    document.getElementById("shop-kapsayici-fumari-icecream").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasefumariicecream();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("fumariicecreamName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("fumariicecreamAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("fumariicecreamFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasefumariicecream() {
    if (localStorage.getItem("fumariicecreamAdet") < 1) {
        const listfumariicecream = document.getElementById("shop-kapsayici-fumari-icecream");
        listfumariicecream.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("fumariicecreamAdet", localStorage.getItem("fumariicecreamAdet") - 1);
        toListfumariicecream("azalt");
        if (localStorage.getItem("fumariicecreamAdet") < 1) {
            document.getElementById("shop-kapsayici-fumari-icecream").style.display = "none";
        }
    }
}
//////////////FUMARI.PHP ICE CREAM END


//////////////FUMARI.PHP SURPRISE START
const fumarisurprise = document.querySelector("#fumari-surprise-add");
const fumarisurpriseFiyat = Number(document.querySelector("#fumari-surprise-fiyat").innerHTML);
var fumarisurpriseAdet;
fumarisurprise.addEventListener("click", toListfumarisurprise);
function toListfumarisurprise(par) {
    document.getElementById("shop-kapsayici-fumari-surprise").style.display = "block";
    if (par == "azalt") {
        fumarisurpriseAdet--;
        // localStorage.setItem("visneAdet", 0);  // değer çok büyürse sıfırlamak için
    }
    if (localStorage.getItem("fumarisurpriseAdet") == "null" || localStorage.getItem("fumarisurpriseAdet") == "undefined" || localStorage.getItem("fumarisurpriseAdet") == "NaN") {
        localStorage.setItem("fumarisurpriseAdet", 0);
        fumarisurpriseAdet = localStorage.getItem("fumarisurpriseAdet");
    }
    fumarisurpriseAdet = localStorage.getItem("fumarisurpriseAdet");
    if (par != "azalt") {
        fumarisurpriseAdet++;
    }
    localStorage.setItem("fumarisurpriseName", "surprise");
    localStorage.setItem("fumarisurpriseFiyat", fumarisurpriseFiyat);
    localStorage.setItem("fumarisurpriseAdet", fumarisurpriseAdet);
    document.getElementById("shop-kapsayici-fumari-surprise").innerHTML =
        '<div class="cart-item">' +
        '<button type="button" class="fas fa-times" onclick="decreasefumarisurprise();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("fumarisurpriseName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("fumarisurpriseAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("fumarisurpriseFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    localStorage.setItem("totalfumarisurpriseFiyat", localStorage.getItem("fumarisurpriseFiyat") * localStorage.getItem("fumarisurpriseAdet"));
    fiyatPrintfumarisurprise();
};
function fiyatPrintfumarisurprise() {
    document.getElementById("shop-kapsayici-fumari-surprise").innerHTML =
        '<div class="cart-item">' +
        '<button  type="button" class="fas fa-times" onclick="decreasefumarisurprise();"></button>' +
        '<img src="' + imgPage + '" alt="menu">' +
        '<div class="content">' +
        '<h3>' + localStorage.getItem("fumarisurpriseName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("fumarisurpriseAdet") + '</span> </h3>' +
        '<div class="price">' + localStorage.getItem("fumarisurpriseFiyat") + '₺</div>' +
        '</div>' +
        '</div>';
    topFiyatTopAdet();
}
function decreasefumarisurprise() {
    if (localStorage.getItem("fumarisurpriseAdet") < 1) {
        const listfumarisurprise = document.getElementById("shop-kapsayici-fumari-surprise");
        listfumarisurprise.removeChild(list.firstElementChild);
    }
    else {
        localStorage.setItem("fumarisurpriseAdet", localStorage.getItem("fumarisurpriseAdet") - 1);
        toListfumarisurprise("azalt");
        if (localStorage.getItem("fumarisurpriseAdet") < 1) {
            document.getElementById("shop-kapsayici-fumari-surprise").style.display = "none";
        }
    }
}
//////////////FUMARI.PHP SURPRISE END























