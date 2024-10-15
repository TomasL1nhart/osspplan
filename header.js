function updateHeader() {
    const header = document.querySelector('header');
    const links = document.querySelectorAll('header a');

    if (window.scrollY > 50) {
        // Přidání třídy pro scrolled hlavičku
        header.classList.add('scrolled');
        links.forEach(link => {
            link.style.color = 'black'; // Černý text po scrollu
            link.style.textShadow = 'none'; // Odstraníme stín

            // Změna barvy při hoveru
            link.onmouseenter = function() {
                link.style.color = 'gray'; // Šedá barva při hoveru
            };

            link.onmouseleave = function() {
                link.style.color = 'black'; // Černá barva po opuštění hoveru
            };
        });
    } else {
        // Vrácení rozmazané hlavičky (bez scrolled třídy)
        header.classList.remove('scrolled');
        links.forEach(link => {
            link.style.color = 'white'; // Bílý text, když není scroll
            link.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.7)'; // Přidáme stín pro lepší viditelnost

            // Změna barvy při hoveru
            link.onmouseenter = function() {
                link.style.color = 'black'; // Černá barva při hoveru
                link.style.textShadow = 'none'; // Stín zmizí při hoveru
            };

            link.onmouseleave = function() {
                link.style.color = 'white'; // Vrácení bílé barvy po opuštění hoveru
                link.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.7)'; // Obnovení stínu
            };
        });
    }
}

// Spustíme funkci při scrollování
window.addEventListener('scroll', updateHeader);

// Spustíme funkci hned po načtení stránky, aby byla barva správná i bez scrollování
window.addEventListener('load', updateHeader);
