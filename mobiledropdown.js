if (window.innerWidth <= 768) {
    const dropdownToggle = document.getElementById("dropdown-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");

    dropdownToggle.addEventListener("click", () => {
        dropdownMenu.classList.toggle("show");
        dropdownToggle.classList.toggle("active");
    });

    const dropdownLinks = dropdownMenu.querySelectorAll("a");
    dropdownLinks.forEach(link => {
        link.addEventListener("click", () => {
            setTimeout(() => {
                dropdownMenu.classList.remove("show");
                dropdownToggle.classList.remove("active");
            }, 10);
        });
    });

    window.addEventListener("click", (e) => {
        if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove("show");
            dropdownToggle.classList.remove("active");
        }
    });
}
