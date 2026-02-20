(() => {
  const dropdownToggle = document.getElementById("dropdown-toggle");
  const dropdownMenu = document.getElementById("dropdown-menu");

  if (!dropdownToggle || !dropdownMenu) return;

  const dropdownLinks = dropdownMenu.querySelectorAll("a");

  function openMenu() {
    dropdownMenu.classList.add("show");
    dropdownToggle.classList.add("active");
  }

  function closeMenu() {
    dropdownMenu.classList.remove("show");
    dropdownToggle.classList.remove("active");
  }

  function toggleMenu() {
    if (dropdownMenu.classList.contains("show")) closeMenu();
    else openMenu();
  }

  // Make it callable from other scripts (like gallery modal open/close)
  window.closeMobileDropdown = closeMenu;

  // Toggle button
  dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });

  // Link click closes menu after navigation logic runs
  dropdownLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // tiny delay lets any category-render code run first
      setTimeout(closeMenu, 0);
    });
  });

  // Click outside closes
  window.addEventListener("click", (e) => {
    if (dropdownToggle.contains(e.target) || dropdownMenu.contains(e.target)) return;
    closeMenu();
  });

  // Escape closes
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Ensure starting clean
  closeMenu();
})();