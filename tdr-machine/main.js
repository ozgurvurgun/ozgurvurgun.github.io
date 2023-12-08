let upButton = document.querySelector(".up-wrapper");
window.onscroll = () => {
  if (
    document.body.scrollTop > window.innerHeight ||
    document.documentElement.scrollTop > window.innerHeight
  ) {
    upButton.style.visibility = "visible";
    upButton.style.opacity = 1;
  } else {
    upButton.style.visibility = "hidden";
    upButton.style.opacity = 0;
  }
};

upButton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
