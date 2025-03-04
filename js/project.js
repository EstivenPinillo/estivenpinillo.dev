function addDevelopedOn(){
    let elements = this.querySelector(".developed-in");
    elements.classList.add('developed-on');
}

function removeDevelopedOn(){
    let elements = this.querySelector(".developed-in");
    elements.classList.remove('developed-on');
}

function softwareOn () {
    let software = document.getElementsByClassName("software");
    for (let i = 0; i < software.length; i++) {
        software[i].addEventListener("mouseover",addDevelopedOn);
        software[i].addEventListener("mouseout",removeDevelopedOn);
    }
}
