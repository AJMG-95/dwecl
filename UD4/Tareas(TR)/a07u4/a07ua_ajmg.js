var array = [];

function generteArray() {
    while (array.length < 10) {
        array.push(Math.floor(Math.random() * 11));
    }
    return array;
}

function filterValues() {
    array = array.filter(element => element <= 8);

    return array;
}

function replaceValues() {
    array = array.map(element => element % 2 != 0 ? "impar" : element);

    return array;
}


function onLoadWebPage() {
    document.getElementById("original").innerHTML = generteArray().join(", ");
    document.getElementById("filter").innerHTML = filterValues().join(", ");
    document.getElementById("formated").innerHTML = replaceValues().join(", ");
}
