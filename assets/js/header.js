const sidebarBtn = document.querySelector(".sidebar-btn");
const overlay = document.querySelector(".overlay");
const sidebar = document.querySelector(".sidebar");
const closeSidebarBtn = document.querySelector(".close-sidebar-btn");

// abre sidebar ao clicar no botao
sidebarBtn.addEventListener("click", () => {
    overlay.classList.add("active");
    sidebar.classList.add("active");
});

// fecha sidebar ao clicar no botao
closeSidebarBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
    sidebar.classList.remove("active");
});

// fecha sidebar ao clica no overlay
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.classList.remove("active");
        sidebar.classList.remove("active");
    }
});

// fechar sidebar ao chega em 900px
window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) {
        overlay.classList.remove("active");
        sidebar.classList.remove("active");
    }
});