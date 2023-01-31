let infoAbout = document.getElementById("infoAbout");
let infoExperience = document.getElementById("infoExperience");
let infoProjects = document.getElementById("infoProjects");
let infoContact = document.getElementById("infoContact");

let buttonExperience = document.getElementById("buttonExperience");
let buttonProjects = document.getElementById("buttonProjects");
let buttonContact = document.getElementById("buttonContact");

let selectedSection = infoExperience;

buttonExperience.onclick = function () {
    selectSection(infoExperience);
};

buttonProjects.onclick = function () {
    selectSection(infoProjects);
};

buttonContact.onclick = function () {
    selectSection(infoContact);
};

let selectedSectionToggleOn = true;
function selectSection(incoming) {
    infoExperience.style.display = "none";
    infoProjects.style.display = "none";
    infoContact.style.display = "none";

    if (selectedSection != incoming) {
        selectedSection = incoming;
        incoming.style.display = "inline";
    } else {
        if (selectedSectionToggleOn) {
            incoming.style.display = "inline";
            selectedSectionToggleOn = false;
        } else {
            incoming.style.display = "none";
            selectedSectionToggleOn = true;
        }
    }
}

function init() {
    infoExperience.style.display = "none";
    infoProjects.style.display = "none";
    infoContact.style.display = "none";
}

init();
