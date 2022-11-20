var alumnsDateList = [];
var alumnName = [];
var alumnNotes = [];


function getAlumnName() {
    var alumnNameInput = document.getElementById('alumname').value;
    alumnNameInput !== "" ? alumnName.push(alumnNameInput) : alert("Debe introducir un nombre");
}

function getAlumnNote() {
    var alumnNote1 = document.getElementById('alumnNote1').value;
    var alumnNote2 = document.getElementById('alumnNote2').value;
    var alumnNote3 = document.getElementById('alumnNote3').value;
    alumnNotes.push(alumnNote1, alumnNote2, alumnNote3);
    alumnNotes.forEach(element => { parseFloat(element) });
}

function notesAreCorrect() {
    var correct = [];
    alumnNotes.forEach(element => { correct.push(element >= 0 && element <= 10 ? true : false) });
    return correct.includes(false) ? false : true;
}


function alumnNameExists() {
    return alumnName.length != 0;
}

function alumnNoteExistsAndComplted() {
    return alumnNotes.length == 3;
}


function inputData() {
    getAlumnName();
    getAlumnNote();
    checkAndCreateAlumnList();
}

function checkAndCreateAlumnList() {
    if (alumnNotes.length != 3 || !notesAreCorrect()) {
        alert("Deber haber 3 notas y estas deben estar comprendidas entre o y 10");
        alumnName = [];
    }
    if (alumnName.length != 0) {
        var alumnDates = alumnName + ": " + (alumnNotes.join(", "));
        alumnsDateList.push(alumnDates);
    }
    alumnNotes = [];
    alumnName = [];
}

function showData() {
    document.getElementById("datos").innerHTML = alumnsDateList.join("<br />");
}

function addOtherAlumn() {
    document.getElementById('alumname').value = "";
    document.getElementById('alumnNote1').value = "";
    document.getElementById('alumnNote2').value = "";
    document.getElementById('alumnNote3').value = "";
}
