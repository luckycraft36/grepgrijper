document.addEventListener('DOMContentLoaded', () => {
    const ruimteschip = document.getElementById('ruimteschip');
    const aarde = document.getElementById('aarde');
    const mercurius = document.getElementById('mercurius');

    let opAarde = true;
    let grepVoorraad = 0;
    let geld = 0;

    function updateStatus() {
        console.log(`Grep: ${grepVoorraad}, Geld: €${geld}`);
        // Hier kun je de UI bijwerken om de speler op de hoogte te houden
    }

    function vliegNaarMercurius() {
        if (opAarde) {
            ruimteschip.style.bottom = '80%';
            opAarde = false;
            setTimeout(() => {
                verzamelGrep();
            }, 8000); // 8 seconden reistijd
        }
    }

    function verzamelGrep() {
        grepVoorraad += 10; // Verzamelt 10 grep
        console.log('Grep verzameld op Mercurius.');
        updateStatus();
        setTimeout(() => {
            vliegNaarAarde();
        }, 2000); // 2 seconden wachten voordat terugkeer
    }

    function vliegNaarAarde() {
        ruimteschip.style.bottom = '50px';
        setTimeout(() => {
            opAarde = true;
            verkoopGrep();
        }, 8000); // 8 seconden reistijd
    }

    function verkoopGrep() {
        geld += grepVoorraad * 5; // Verkoopt grep voor €5 per stuk
        grepVoorraad = 0;
        console.log('Grep verkocht op Aarde.');
        updateStatus();
    }

    // Eventlisteners voor klikken op planeten
    aarde.addEventListener('click', () => {
        if (!opAarde) {
            vliegNaarAarde();
        }
    });

    mercurius.addEventListener('click', () => {
        if (opAarde) {
            vliegNaarMercurius();
        }
    });

    updateStatus();
});
