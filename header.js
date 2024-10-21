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

// Funkce pro "zaseknutí" headeru u sekce "Útěk"
function stickyHeaderAtSection() {
    const header = document.querySelector('header');
    const sectionUtek = document.querySelector('#onas'); // Selektor pro sekci "Útěk"
    
    const utekTop = sectionUtek.offsetTop; // Získáme pozici sekce "Útěk"
    const headerHeight = header.offsetHeight; // Výška hlavičky

    // Kontrola scrollování
    window.addEventListener('scroll', function() {
        if (window.scrollY >= (utekTop - headerHeight)) {
            // Hlavička je u sekce "Útěk", "zasekneme" ji
            header.style.position = 'absolute';
            header.style.top = `${utekTop - headerHeight}px`;
        } else {
            // Normální chování hlavičky při scrollování nahoru
            header.style.position = 'fixed';
            header.style.top = '0';
        }
    });
}

// Spustíme funkci po načtení stránky
window.addEventListener('load', stickyHeaderAtSection);

function showVideoAndReload() {
    var videoOverlay = document.getElementById('video-overlay');
    var faqVideo = document.getElementById('faq-video');

    videoOverlay.style.display = 'block'; // Zobrazíme overlay
    faqVideo.muted = false; // Odstraníme mutování videa
    faqVideo.play(); // Přehráváme video

    // Po skončení videa zastavíme video a skryjeme overlay
    faqVideo.onended = function() {
        faqVideo.pause(); // Zastavíme video
        faqVideo.currentTime = 0; // Resetujeme čas videa na začátek
        videoOverlay.style.display = 'none'; // Skryjeme overlay
    };
}

// Přidání události pro kliknutí na FAQ
document.getElementById('faq-link').addEventListener('click', function(event) {
    event.preventDefault(); // Zabráníme výchozímu chování odkazu
    showVideoAndReload(); // Zavoláme naši funkci
});
