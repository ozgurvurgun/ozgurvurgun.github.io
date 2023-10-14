const container = document.querySelector(".container");
const coffees = [
  { name: "Perspiciatis", image: "images/1667593744391.jpg" },
  { name: "Voluptatem", image: "images/1667593744391.jpg" },
  { name: "Explicabo", image: "images/1667593744391.jpg" },
  { name: "Rchitecto", image: "images/1667593744391.jpg" },
  { name: " Beatae", image: "images/1667593744391.jpg" },
  { name: " Vitae", image: "images/1667593744391.jpg" },
  { name: "Inventore", image: "images/1667593744391.jpg" },
  { name: "Veritatis", image: "images/1667593744391.jpg" },
  { name: "Accusantium", image: "images/1667593744391.jpg" },
];

const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", function () {
//     navigator.serviceWorker
//       .register("/serviceWorker.js")
//       .then((res) => console.log("service worker registered"))
//       .catch((err) => console.log("service worker not registered", err));
//   });
// }
