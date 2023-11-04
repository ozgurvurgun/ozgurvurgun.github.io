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
