window.onload = () => {
    LoadTopMenu()
    console.log("Leht laadis")
    
    document.getElementById("submitbutton").onclick = () =>{
        console.log("VAJUTATI!!!");
    }
}

function LoadTopMenu(){
    fetch("TopMenu.html").then(result => result.text()).then(htmlData => {
        document.getElementById("topmenu").innerHTML = htmlData;
    });
}