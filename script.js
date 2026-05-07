// Lógica da Navbar sumir/aparecer no scroll
let lastScroll = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    
    // Mostra/Esconde Navbar
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.top = "-100px"; // Some
    } else {
        header.style.top = "0"; // Aparece
    }
    
    // Altera background se rolar
    if (currentScroll > 50) {
        header.style.background = "rgba(44, 76, 59, 0.95)";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
    } else {
        header.style.background = "#2c4c3b";
    }

    // Botão Voltar ao Topo
    const backToTop = document.getElementById("backToTop");
    if (currentScroll > 500) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

    lastScroll = currentScroll;
});

// Clique para voltar ao topo suave
document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- LÓGICA DO MENU HAMBÚRGUER ---
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

if(mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        // Abre ou fecha o menu lateral
        navMenu.classList.toggle('active');
        
        // Troca o ícone de "Barras" para "X"
        const icon = mobileMenu.querySelector('i');
        if(navMenu.classList.contains('active')){
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });
}

// Fecha o menu automaticamente ao clicar em qualquer link
const navLinks = document.querySelectorAll('.nav-menu li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        
        // Volta o ícone para as barras originais
        const icon = mobileMenu.querySelector('i');
        if(icon) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });
});