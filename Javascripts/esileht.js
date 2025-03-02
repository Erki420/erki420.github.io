const tuvastatudTekst = document.getElementById("seadmetekst")
const tuvstamisNupp = document.getElementById("nupp")

function KasutajaOnTelefonis() {
    const kasutaja = navigator.userAgent.toLowerCase();
return /Android/iPhone/i.test(navigator.userAgent.toLowerCase)

}
console.log(KasutajaOnTelefonis());
tuvastamisNupp.onclick = TuvastaTelefon;
function TuvastaTelefon() {
    if (KasutajaOnTelefonis()){
        tuvastatudTekst.textContent = "Tuvastatud telefon";
    }
    else{
        tuvastatudTekst.textContent = "Tuvastatud arvuti";
    }
}
