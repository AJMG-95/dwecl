const PATTERN = /^\w+|(?<=\.)(\s|\n)\w+/gm;

function deleteChidren() {
    var fatherNode = document.getElementById('res');
    while (fatherNode.firstChild) {
        fatherNode.removeChild(fatherNode.firstChild);
    }
}

function getFrstWrd() {
    deleteChidren();
    var txt = document.getElementById("text").value;
    var frst = txt.match(PATTERN);
    if (frst) {
        for (i in frst) {
            var father = document.getElementById("res");
            var son = document.createElement("li");
            son.innerHTML = frst[i];
            father.appendChild(son);
        }

    }
}
