// Spustíme funkci při scrollování
window.addEventListener('scroll', updateHeader);

// Spustíme funkci hned po načtení stránky, aby byla barva správná i bez scrollování
window.addEventListener('load', updateHeader);

function stickyHeaderAtSection() {
    const header = document.querySelector('header');
    const sectionUtek = document.querySelector('#onas'); // Selektor pro sekci "O nás"
    const hamburger = document.querySelector('.hamburger'); // Selektor pro hamburger menu

    const utekTop = sectionUtek.offsetTop; // Získáme pozici sekce "O nás"
    const headerHeight = header.offsetHeight; // Výška hlavičky

    // Kontrola scrollování
    window.addEventListener('scroll', function() {
        const isHamburgerVisible = hamburger.offsetParent !== null; // Kontrola viditelnosti hamburger menu

        if (window.scrollY >= (utekTop - headerHeight) && !isHamburgerVisible) {
            // Hlavička je u sekce "O nás", "zasekneme" ji
            header.style.position = 'fixed'; // Zajištění, že hlavička zůstane nahoře
            header.style.top = '0'; // Ujistíme se, že je na vrchu
        } else {
            // Normální chování hlavičky při scrollování nahoru
            header.style.position = 'fixed'; // Zajištění, že hlavička zůstane nahoře
            header.style.top = '0';
        }
    });
}

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
