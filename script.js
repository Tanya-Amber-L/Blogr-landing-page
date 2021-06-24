const hamburgerIcon = document.getElementById("hamburger-icon"),
crossIcon = document.getElementById("cross-icon"),
dropdownMenus = document.getElementById("dropdown-container");

hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.style.display = "none";
    crossIcon.style.display = "block";
    dropdownMenus.style.display = "flex";
})
crossIcon.addEventListener("click", () => {
    crossIcon.style.display = "none";
    hamburgerIcon.style.display = "block";
    dropdownMenus.style.display = "none";
})