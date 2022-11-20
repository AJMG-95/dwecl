// Borra el contenido de una lista "ul" en html
function dlt() {
    var father = document.getElementById("list");
    while (father.firstChild) {
        father.removeChild(father.firstChild);
    }
}

/**  Añade elementos hijos al elemento ul que contienen la tabla de
* de multiplicar del número proporcionado por el usuario
*/
function table() {
    dlt()
    var nmbr = parseInt(document.getElementById("num").value);
    var res;

    for (i = 0; i <= 10; i++) {
        res = nmbr * i;
        var li = document.createElement("li");
        li.innerHTML = `${nmbr} x ${i} = ${res}`;
        document.getElementById("list").appendChild(li);
    }
}
