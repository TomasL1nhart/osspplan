function updateHeader() {
    const header = document.querySelector('header');
    const links = document.querySelectorAll('header a');

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        links.forEach(link => {
            link.style.color = 'black'; // Černý text po scrollu
            link.style.textShadow = 'none'; // Odstraníme stín
        });
    } else {
        header.classList.remove('scrolled');
        links.forEach(link => {
            link.style.color = 'white'; // Bílý text na začátku
            link.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.7)'; // Přidáme stín pro lepší viditelnost
        });
    }
}

// Spustíme funkci při scrollování
window.addEventListener('scroll', updateHeader);

// Spustíme funkci hned po načtení stránky, aby byla barva správná i bez scrollování
window.addEventListener('load', updateHeader);
