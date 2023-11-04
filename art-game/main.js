let countdownDisplay = document.querySelector(".countdown");
let countdown = 10;

// let counter = setInterval(() => {
//   countdown--;
//   countdownDisplay.innerHTML = `${countdown}s`;
//   if (countdown == 0) {
//     clearInterval(counter);
//     countdownDisplay.innerHTML = `${10}s`;
//   }
// }, 1000);

async function getData() {
  const RESPONSE = await fetch("data/question.json");
  const data = await RESPONSE.json();
  console.log(data);
}
getData();

// document.addEventListener("contextmenu", function (e) {
//   e.preventDefault(); // Sağ tıklama olayını engelle
// });

document.addEventListener("DOMContentLoaded", () => {
  let pageHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  console.log(pageHeight);
  document.querySelector(".nav-right").style.height = pageHeight - 100 + "px";
});
