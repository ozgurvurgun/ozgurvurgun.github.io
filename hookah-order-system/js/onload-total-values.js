//////////////////////////////////TOPLAM FİYAT VE ÜRÜN ADEDİ
function topFiyatTopAdet() {
    localStorage.setItem("totalFiyat", (Number(localStorage.getItem("totalSeftaliFiyat")) + Number(localStorage.getItem("totalVisneFiyat")) + Number(localStorage.getItem("totalCappucinoFiyat")) + Number(localStorage.getItem("totalalfakherUzumFiyat")) + Number(localStorage.getItem("totalalfakherKavunFiyat")) + Number(localStorage.getItem("totalalfakherCelmaFiyat")) + Number(localStorage.getItem("totalAdalyaPlnFiyat")) + Number(localStorage.getItem("totalAdalyaBakuFiyat")) + Number(localStorage.getItem("totalAdalyaLadyFiyat")) + Number(localStorage.getItem("totaladalyalovesixsixFiyat")) + Number(localStorage.getItem("totaladalyamerlinFiyat")) + Number(localStorage.getItem("totaladalyaberlinFiyat")) + Number(localStorage.getItem("totaladalyamoskowFiyat")) + Number(localStorage.getItem("totaladalyaicebonbonFiyat")) + Number(localStorage.getItem("totaladalyaizmirromantikFiyat")) + Number(localStorage.getItem("totalbestcoupleuzumnaneFiyat")) + Number(localStorage.getItem("totalbestcoupleuzumvisneFiyat")) + Number(localStorage.getItem("totalbestcoupleuzumyabanFiyat")) + Number(localStorage.getItem("totalbestcoupleelmananeFiyat")) + Number(localStorage.getItem("totalbestcouplekarpuzcilekFiyat")) + Number(localStorage.getItem("totalbestcouplelimoncilekFiyat")) + Number(localStorage.getItem("totalbestcoupleseftalikavunFiyat")) + Number(localStorage.getItem("totalbestcouplevanilyakaramelFiyat")) + Number(localStorage.getItem("totalbestcouplebluemistbogurtlenFiyat")) + Number(localStorage.getItem("totaltruepassioncindrellaFiyat")) + Number(localStorage.getItem("totaltruepassionarticlineFiyat")) + Number(localStorage.getItem("totaltruepassionpineappleFiyat")) + Number(localStorage.getItem("totaltruepassionholopeachFiyat")) + Number(localStorage.getItem("totaltruepassioncasablancaFiyat")) + Number(localStorage.getItem("totaltruepassionokolommentoFiyat")) + Number(localStorage.getItem("totaldaimdejavuFiyat")) + Number(localStorage.getItem("totaldaimdondurmaFiyat")) + Number(localStorage.getItem("totaldaimtatlicadiFiyat")) + Number(localStorage.getItem("totaldaimyesilelmaFiyat")) + Number(localStorage.getItem("totaldaimlimonbuzFiyat")) + Number(localStorage.getItem("totaldaimsakiznaneFiyat")) + Number(localStorage.getItem("totalfumarigummibearFiyat")) + Number(localStorage.getItem("totalfumarimojitomojoFiyat")) + Number(localStorage.getItem("totalfumarimochaccinoFiyat")) + Number(localStorage.getItem("totalfumariicecreamFiyat")) + Number(localStorage.getItem("totalfumarisurpriseFiyat"))));
    localStorage.setItem("totalAdet", (Number(localStorage.getItem("seftaliAdet")) + Number(localStorage.getItem("visneAdet")) + Number(localStorage.getItem("cappucinoAdet")) + Number(localStorage.getItem("alfakherUzumAdet")) + Number(localStorage.getItem("alfakherKavunAdet")) + Number(localStorage.getItem("alfakherCelmaAdet")) + Number(localStorage.getItem("adalyaPlnAdet")) + Number(localStorage.getItem("adalyaBakuAdet")) + Number(localStorage.getItem("adalyaLadyAdet")) + Number(localStorage.getItem("adalyalovesixsixAdet")) + Number(localStorage.getItem("adalyamerlinAdet")) + Number(localStorage.getItem("adalyaberlinAdet")) + Number(localStorage.getItem("adalyamoskowAdet")) + Number(localStorage.getItem("adalyaicebonbonAdet")) + Number(localStorage.getItem("adalyaizmirromantikAdet")) + Number(localStorage.getItem("bestcoupleuzumnaneAdet")) + Number(localStorage.getItem("bestcoupleuzumvisneAdet")) + Number(localStorage.getItem("bestcoupleuzumyabanAdet")) + Number(localStorage.getItem("bestcoupleelmananeAdet")) + Number(localStorage.getItem("bestcouplekarpuzcilekAdet")) + Number(localStorage.getItem("bestcouplelimoncilekAdet")) + Number(localStorage.getItem("bestcoupleseftalikavunAdet")) + Number(localStorage.getItem("bestcouplevanilyakaramelAdet")) + Number(localStorage.getItem("bestcouplebluemistbogurtlenAdet")) + Number(localStorage.getItem("truepassioncindrellaAdet")) + Number(localStorage.getItem("truepassionarticlineAdet")) + Number(localStorage.getItem("truepassionpineappleAdet")) + Number(localStorage.getItem("truepassionholopeachAdet")) + Number(localStorage.getItem("truepassioncasablancaAdet")) + Number(localStorage.getItem("truepassionokolommentoAdet")) + Number(localStorage.getItem("daimdejavuAdet")) + Number(localStorage.getItem("daimdondurmaAdet")) + Number(localStorage.getItem("daimtatlicadiAdet")) + Number(localStorage.getItem("daimyesilelmaAdet")) + Number(localStorage.getItem("daimlimonbuzAdet")) + Number(localStorage.getItem("daimsakiznaneAdet")) + Number(localStorage.getItem("fumarigummibearAdet")) + Number(localStorage.getItem("fumarimojitomojoAdet")) + Number(localStorage.getItem("fumarimochaccinoAdet")) + Number(localStorage.getItem("fumariicecreamAdet")) + Number(localStorage.getItem("fumarisurpriseAdet"))));
    document.querySelector("#item-count").innerHTML = localStorage.getItem("totalAdet");
    document.querySelector("#total").innerHTML = localStorage.getItem("totalFiyat");
}
window.onload = function () { fiyatPrintAll() }
function fiyatPrintAll() {
    if (localStorage.getItem("visneAdet") > 0) {
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
    if (localStorage.getItem("seftaliAdet") > 0) {
        document.getElementById("shop-kapsayici-nakhla-seftali").innerHTML =
            '<div  class="cart-item">' +
            '<button type="button" class="fas fa-times" onclick="decreaseSeftali();"></button>' +
            '<img src="' + imgPage + '" alt="menu">' +
            '<div class="content">' +
            '<h3>' + localStorage.getItem("seftaliName") + '&nbsp;&nbsp;&nbsp;<span style="color: red;font-size:medium">x</span><span id="miktar" style="color: red;font-size:medium">&nbsp;' + localStorage.getItem("seftaliAdet") + '</span> </h3>' +
            '<div" class="price">' + localStorage.getItem("seftaliFiyat") + '₺</div>' +
            '</div>' +
            '</div>';
        topFiyatTopAdet();
    }
    if (localStorage.getItem("cappucinoAdet") > 0) {
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
    if (localStorage.getItem("alfakherUzumAdet") > 0) {
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
    if (localStorage.getItem("alfakherKavunAdet") > 0) {
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
    if (localStorage.getItem("alfakherCelmaAdet") > 0) {
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
    if (localStorage.getItem("adalyaPlnAdet") > 0) {
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
    if (localStorage.getItem("adalyaBakuAdet") > 0) {
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
    if (localStorage.getItem("adalyaLadyAdet") > 0) {
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
    if (localStorage.getItem("adalyalovesixsixAdet") > 0) {
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
    if (localStorage.getItem("adalyamerlinAdet") > 0) {
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
    if (localStorage.getItem("adalyaberlinAdet") > 0) {
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
    if (localStorage.getItem("adalyamoskowAdet") > 0) {
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
    if (localStorage.getItem("adalyaicebonbonAdet") > 0) {
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
    if (localStorage.getItem("adalyaizmirromantikAdet") > 0) {
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
    if (localStorage.getItem("bestcoupleuzumnaneAdet") > 0) {
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
    if (localStorage.getItem("bestcoupleuzumvisneAdet") > 0) {
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
    if (localStorage.getItem("bestcoupleuzumyabanAdet") > 0) {
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
    if (localStorage.getItem("bestcoupleelmananeAdet") > 0) {
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
    if (localStorage.getItem("bestcouplekarpuzcilekAdet") > 0) {
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
    if (localStorage.getItem("bestcouplelimoncilekAdet") > 0) {
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
    if (localStorage.getItem("bestcoupleseftalikavunAdet") > 0) {
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
    if (localStorage.getItem("bestcouplevanilyakaramelAdet") > 0) {
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
    if (localStorage.getItem("bestcouplebluemistbogurtlenAdet") > 0) {
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
    if (localStorage.getItem("truepassioncindrellaAdet") > 0) {
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
    if (localStorage.getItem("truepassionarticlineAdet") > 0) {
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
    if (localStorage.getItem("truepassionpineappleAdet") > 0) {
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
    if (localStorage.getItem("truepassionholopeachAdet") > 0) {
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
    if (localStorage.getItem("truepassioncasablancaAdet") > 0) {
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
    if (localStorage.getItem("truepassionokolommentoAdet") > 0) {
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
    if (localStorage.getItem("daimdejavuAdet") > 0) {
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
    if (localStorage.getItem("daimdondurmaAdet") > 0) {
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
    if (localStorage.getItem("daimtatlicadiAdet") > 0) {
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
    if (localStorage.getItem("daimyesilelmaAdet") > 0) {
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
    if (localStorage.getItem("daimlimonbuzAdet") > 0) {
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
    if (localStorage.getItem("daimsakiznaneAdet") > 0) {
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
    if (localStorage.getItem("fumarigummibearAdet") > 0) {
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
    if (localStorage.getItem("fumarimojitomojoAdet") > 0) {
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
    if (localStorage.getItem("fumarimochaccinoAdet") > 0) {
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
    if (localStorage.getItem("fumariicecreamAdet") > 0) {
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
    if (localStorage.getItem("fumarisurpriseAdet") > 0) {
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
}