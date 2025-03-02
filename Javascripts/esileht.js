const tuvastatudTekst = document.getElementById("seadmetekst")

function KasutajaOnTelefonis() {
    const kasutaja = navigator.userAgent.toLowerCase();
    if (/mobile/i.test(kasutaja)){
        return true;
    }
    else{
        return false;
    }
}

function TuvastaTelefon() {
    if (KasutajaOnTelefonis()){
        tuvastatudTekst.textContent = "Tuvastatud telefon";
    }
    else{
        tuvastatudTekst.textContent = "Tuvastatud arvuti";
    }

    requestAnimationFrame(TuvastaTelefon());
}

requestAnimationFrame(TuvastaTelefon());