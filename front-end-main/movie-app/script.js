/* SLIDER START */
const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");
arrows.forEach((arrow, i) => {
  const widthRatio = Math.floor(window.innerWidth / 300);
  let counter = 0;
  const itemNumber = movieList[i].querySelectorAll("img").length;
  arrow.addEventListener("click", () => {
    counter++;
    if (itemNumber - (4 + counter) + (4 - widthRatio) >= 0) {
      movieList[i].style.transform = `translateX(${
        movieList[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieList[i].style.transform = "translateX(0)";
      counter = 0;
    }
  });
});

/* DARK-LIGHT MODE START */
const ball = document.querySelector(".toogle-ball");
const items = document.querySelectorAll(
  ".container, .navbar, .sidebar, .sidebar i, .toogle, .toogle-ball, .movie-list-filter select, .movie-list-title"
);
ball.addEventListener("click", () => {
  items.forEach((item) => item.classList.toggle("active"));
});
