const upButton = document.querySelector(".up-wrapper");
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

const toggleButton = document.querySelector(".toggle-btn");
const tooggleButtonIcon = document.querySelector(".toggle-btn i");
const dropdownMenu = document.querySelector(".dropdown-menu");

toggleButton.addEventListener("click", () => {
  const isOpen = dropdownMenu.classList.toggle("dropdown-open");

  tooggleButtonIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
});


// setInterval(() => {
//   window.scrollTo({
//     top: document.documentElement.scrollHeight // Sayfanın en altındaki pozisyon
//   });
// }, 200);
