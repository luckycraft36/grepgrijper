document.addEventListener('DOMContentLoaded', () => {
    const ruimteschip_heen = document.getElementById('ruimteschip_heen');
    const ruimteschip_terug = document.getElementById('ruimteschip_terug');
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
            // Beweeg ruimteschip naar Mercurius
            ruimteschip_heen.style.left = 'calc(100% - 70px)'; // 20px van rechterkant (100% - 50px schip - 20px marge)
            ruimteschip_heen.style.bottom = 'calc(100% - 120px)'; // 20px van bovenkant (100% - 100px planeet - 20px marge)
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
        // Beweeg ruimteschip terug naar Aarde
        ruimteschip_terug.style.left = '20px';
        ruimteschip_terug.style.bottom = '70px';
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
