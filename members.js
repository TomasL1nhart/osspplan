const memberCards = document.querySelectorAll('.member-card');
const footer = document.querySelector('footer'); // Získání footera
let currentCardIndex = 0;

// Zobrazíme pouze první kartu
memberCards[0].classList.add('active');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Kontrola, zda je aktuální karta na obrazovce
    if (scrollPosition > windowHeight * (currentCardIndex + 1) - 100) {
        if (currentCardIndex < memberCards.length - 1) {
            memberCards[currentCardIndex].classList.remove('active');
            currentCardIndex++;
            memberCards[currentCardIndex].classList.add('active');
        }
    }

    // Zobrazit footer po poslední kartě
    if (currentCardIndex === memberCards.length - 1 && scrollPosition + windowHeight >= document.body.offsetHeight) {
        footer.style.display = 'block'; // Zobrazíme footer
    } else {
        footer.style.display = 'none'; // Skryjeme footer
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    currentCardIndex = 0;
    memberCards.forEach(card => card.classList.remove('active'));
    memberCards[0].classList.add('active');
}