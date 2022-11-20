var inputList = [];

function onLoadIndexPage() {
    cleanLocalStorage();
}

function onLoadResultPage() {
    var localStorageList = window.localStorage.getItem("list");
    showList(localStorageList);
    showReversedInputs(localStorageList);
    showFirstInputWord(localStorageList)
    showLastInputWord(localStorageList);
    showInputWordCount(localStorageList);
    showOrderedInputList(localStorageList);
    showReversedInputList(localStorageList)
}

function showList(localStorageList) {
    document.getElementById("inputlist").innerHTML = localStorageList.replaceAll(",", ", ");
}

function showReversedInputs(localStorageList) {
    document.getElementById("reverseinput").innerHTML = localStorageList.split(",").reverse().join(", ");
}

function showFirstInputWord(localStorageList) {
    document.getElementById("firstword").innerHTML = localStorageList.substring(0, localStorageList.indexOf(","));
}

function showLastInputWord(localStorageList) {
    document.getElementById("lastword").innerHTML = localStorageList.substring(localStorageList.lastIndexOf(",") + 1, localStorageList.length)
}

function showInputWordCount(localStorageList) {
    document.getElementById("wordscount").innerHTML = localStorageList.split(",").length;
}

function showOrderedInputList(localStorageList) {
    document.getElementById("orderedlist").innerHTML = localStorageList.split(",").sort().join(", ");
}

function showReversedInputList(localStorageList) {
    document.getElementById("reversedorderedlist").innerHTML = localStorageList.split(",").sort().reverse().join(", ");
}

function getInputs() {
    input = document.getElementById("input");
    if (input.value !== "") {
        inputList.push(input.value);
    }
    input.value = "";
}

function operar() {
    localStorage.setItem("list", inputList);
    if (window.confirm("Los datos introducidos se borran automáticamente tras realizar la consulta")) {
        window.open("a05ua_ajmg2.html");
    }
}

function cleanLocalStorage() {
    window.localStorage.clear();
}

function enterPress(e) {
    if (e.key == "Enter") {
        e.preventDefault();
        getInputs();
    }
}
