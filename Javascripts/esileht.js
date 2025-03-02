window.onload = function() {
    const tuvastatudTekst = document.getElementById("seadmetekst");

    function KasutajaOnTelefonis() {
        const kasutaja = navigator.userAgent.toLowerCase();
        return /mobile/i.test(kasutaja); // Lihtsustatud tagastamine
    }

    function TuvastaTelefon() {
        if (KasutajaOnTelefonis()) {
            tuvastatudTekst.textContent = "Tuvastatud telefon";
        } else {
            tuvastatudTekst.textContent = "Tuvastatud arvuti";
        }

        requestAnimationFrame(TuvastaTelefon); // Kutsume iga kaadriga
    }

    requestAnimationFrame(TuvastaTelefon); // Algatame tuvastamise
};
