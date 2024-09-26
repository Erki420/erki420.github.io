const question1 = document.getElementById("esimene küsimus")
const question1Background = document.getElementById("question-div1")

const question2 = document.getElementById("teine küsimus")
const question2Background = document.getElementById("question-div2")

const question3 = document.getElementById("kolmas küsimus")
const question3Background = document.getElementById("question-div3")

const question4 = document.getElementById("neljas küsimus")
const question4Background = document.getElementById("question-div4")

const question5 = document.getElementById("viies küsimus")
const question5Background = document.getElementById("question-div5")

const question6 = document.getElementById("kuues küsimus")
const question6Background = document.getElementById("question-div6")

const question7 = document.getElementById("seitsmes küsimus")
const question7Background = document.getElementById("question-div7")


const correctAnswersText = document.getElementById("correctAnswersText")
const checkButton = document.getElementById("check")
let correctAnswers = 0;

checkButton.addEventListener('click', function(){
    correctAnswers = 0;

    if (question1.value === "Ta kandis alati punast mütsi."){
        question1Background.style.backgroundColor = "green";
        correctAnswers++;
    }
    else {
        question1Background.style.backgroundColor = "red";
    }

    if (question2.value === "Vanaema juurde."){
        question2Background.style.backgroundColor = "green";
        correctAnswers++;
    }
    else {
        question2Background.style.backgroundColor = "red";
    }

    if (question3.value === "Ärge rääkige võõrastega ja jääge eemale hämaratest kohtadest."){
        question3Background.style.backgroundColor = "green";
        correctAnswers++;
    }
    else {
        question3Background.style.backgroundColor = "red";
    }

    if (question4.value === "Ta riietus välja nagu vanaema."){
        question4Background.style.backgroundColor = "green";
        correctAnswers++;
    }
    else {
        question4Background.style.backgroundColor = "red";
    }

    if (question5.value === "Ta kuulis häält ja tuli uurima."){
        question5Background.style.backgroundColor = "green";
        correctAnswers++;
    }
    else {
        question5Background.style.backgroundColor = "red";
    }

    if (question6.value === "Hunt jooksis minema."){
        question6Background.style.backgroundColor = "green";
        correctAnswers++;
    }
    else {
        question6Background.style.backgroundColor = "red";
    }

    if (question7.value === "Et peab alati olema ettevaatlik ja ema nõuandeid järgima."){
        question7Background.style.backgroundColor = "green";
        correctAnswers++;
    }
    else {
        question7Background.style.backgroundColor = "red";
    }

    correctAnswersText.textContent = correctAnswers + "/7";
})