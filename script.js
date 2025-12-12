function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

/* Effetto fade-in */
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transition = '1s';
    setTimeout(() => { card.style.opacity = '1'; }, 300);
});


