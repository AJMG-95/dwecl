var array = [];

for (var i = 1; i < 22; i = i + 2) {
    array.push(i);
}

document.getElementById("numbers").innerHTML = `${array.join(", ")}`;
document.getElementById("sum1").innerHTML = `La suma es: ${array.reduce((a, b) => a + b, 0)}`;

function getInput() {
    return parseInt(document.getElementById("input").value);
}

function deleteSearch() {
    if (array.includes(getInput())) {
        delete(array[array.indexOf(getInput())]);
        var result = "La búsqueda se realizó con éxito.\nEl elemento fue eliminado.";
        document.getElementById("newsum").innerHTML = `La nueva suma es: ${array.reduce((a, b) => a + b)}`;
        document.getElementById("newarray").innerHTML = `La nueva lista es: ${array.reverse().join(", ")}`;
        document.getElementById("order").innerHTML = `La nueva lista ordenada es: ${array.reverse().join(", ")}`;
    } else {
        result = "La búsqueda no tuvo éxito";
    }
    document.getElementById("result").innerHTML = result;

}
