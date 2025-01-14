(() => {
  const openNav = document.querySelector(".open-menu"),
    closeNav = document.querySelector(".close-menu"),
    navMenu = document.querySelector(".nav-links-container"),
    background = document.querySelector(".background"),
    mediaSize = 992;

  openNav.addEventListener("click", toggleMenu);
  closeNav.addEventListener("click", toggleMenu);
  background.addEventListener("click", toggleMenu);

  function toggleMenu() {
    navMenu.classList.toggle("open");
    background.classList.toggle("active");
  }

  navMenu.addEventListener("click", (event) => {
    if (
      event.target.hasAttribute("data-toggle") &&
      window.innerWidth <= mediaSize
    ) {
      event.preventDefault();
      const dropdownMenuBranch = event.target.parentElement;

      if (dropdownMenuBranch.classList.contains("active")) {
        collapseDropdownMenu();
      } else {
        if (navMenu.querySelector(".dropdown-menu-branch.active")) {
          collapseDropdownMenu();
        }
        dropdownMenuBranch.classList.add("active");
        const dropdownMenu = dropdownMenuBranch.querySelector(".dropdown-menu");
        dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
      }
    }
  });

  function collapseDropdownMenu() {
    navMenu
      .querySelector(".dropdown-menu-branch.active .dropdown-menu")
      .removeAttribute("style");
    navMenu
      .querySelector(".dropdown-menu-branch.active")
      .classList.remove("active");
  }
})();
