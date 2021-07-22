export default ($app) => {
  $app.addEventListener("click", closeDropdown);

  function closeDropdown() {
    const dropdownList = document.querySelectorAll(".dropdown-list-active");
    for (const $dropdown of dropdownList) {
      $dropdown.classList.remove("dropdown-list-active");
    }
  }
};
