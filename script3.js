const textField = document.getElementById("esimenetekst")
const vastus = document.getElementById("playCount")
let i = textField.textContent;

const JärgmineLehtNupp = document.getElementById("JärgmineLehtNupp")
const body = document.getElementById("body1")

const Pluss1Nupp = document.getElementById("+1Nupp")
const Miinus1Nupp = document.getElementById("-1Nupp")
const KalkulaatorTulemus = document.getElementById("KalkulaatorTulemus")
let a = 0;
const fontSizeSlider = document.getElementById("fontSizeSlider")

textField.addEventListener("input", function(){
    vastus.textContent = textField.value;
});

JärgmineLehtNupp.addEventListener("click", function(){
    if (body.classList.contains("body1")){
        body.classList.remove("body1")
        body.classList.add("body0")
    }
});

Miinus1Nupp.addEventListener("click", function(){
    a--;
    KalkulaatorTulemus.textContent = a;
});

Pluss1Nupp.addEventListener("click", function(){
    a++;
    KalkulaatorTulemus.textContent = a;
});

fontSizeSlider.addEventListener("input", function(){
    const fontSize = fontSizeSlider.value;
    KalkulaatorTulemus.style.fontSize = fontSize + "px"
});