window.onload = () => {
    LoadTopMenu()
    console.log("Leht laadis")
}

function LoadTopMenu(){
    fetch("TopMenu.html").then(result => result.text()).then(htmlData => {
        document.getElementById("topmenu").innerHTML = htmlData;
    });
}