document.addEventListener('DOMContentLoaded', () => {
    const ruimteschipHeen = document.getElementById('ruimteschip_heen');
    const ruimteschipTerug = document.getElementById('ruimteschip_terug');
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
            // Beweeg ruimteschip_heen naar Mercurius
            ruimteschipHeen.style.left = 'calc(100% - 70px)';
            ruimteschipHeen.style.bottom = 'calc(100% - 120px)';
            opAarde = false;
            setTimeout(() => {
                // Verberg ruimteschip_heen na 2 seconden
                ruimteschipHeen.style.display = 'none';
                verzamelGrep();
            }, 8000); // 8 seconden reistijd
        }
    }

    function verzamelGrep() {
        // Wacht 2 seconden voordat ruimteschip_terug verschijnt
        setTimeout(() => {
            ruimteschipTerug.style.display = 'block';
            grepVoorraad += 10; // Verzamelt 10 grep
            console.log('Grep verzameld op Mercurius.');
            updateStatus();
        }, 2000);
    }

    function vliegNaarAarde() {
        if (!opAarde) {
            // Beweeg ruimteschip_terug naar Aarde
            ruimteschipTerug.style.left = '20px';
            ruimteschipTerug.style.bottom = '70px';
            setTimeout(() => {
                // Verberg ruimteschip_terug en toon ruimteschip_heen
                ruimteschipTerug.style.display = 'none';
                ruimteschipHeen.style.display = 'block';
                opAarde = true;
                verkoopGrep();
            }, 8000); // 8 seconden reistijd
        }
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
