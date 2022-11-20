function isCircle() {
    return document.getElementById('s').value == '1';
}


function isTriangle() {
    return document.getElementById('s').value == '2';
}


function deleteChidren() {
    var fatherNode = document.getElementById('aux');
    while (fatherNode.firstChild) {
        fatherNode.removeChild(fatherNode.firstChild);
    }
}


function setInputs() {

    deleteChidren();

    if (isCircle()) {
        document.getElementById('text').innerHTML = "<strong>Introduce el radio del círculo</strong>";
        var father = document.getElementById('aux');
        var son = document.createElement('input');
        son.setAttribute('id', 'ra');
        son.setAttribute('type', 'number');
        son.setAttribute('placeholder', 'radio');
        father.appendChild(son);
    }

    if (isTriangle()) {
        document.getElementById('text').innerHTML = "<strong>Introduce la base y la altura</strong>";
        var father = document.getElementById('aux');
        var son1 = document.createElement('input');
        var son2 = document.createElement('input');
        son1.setAttribute('id', 'a');
        son1.setAttribute('type', 'number');
        son1.setAttribute('placeholder', 'base');
        son2.setAttribute('id', 'b');
        son2.setAttribute('type', 'number');
        son2.setAttribute('placeholder', 'altura');
        father.appendChild(son1);
        father.appendChild(son2);
    }

}


function areaCircle() {
    if (document.getElementById("ra") != null && document.getElementById('ra') != undefined){
        var radius = document.getElementById("ra").value;
        var res = (Math.PI * Math.pow(radius, 2)).toFixed(2);
        document.getElementById("res").innerHTML = `El área de un círculo es ${res} cm²`;
    }
}


function areaTriangle() {
    if (document.getElementById("a")!= null && document.getElementById('a')!= undefined){
        if(document.getElementById("b")!= null && document.getElementById('b') != undefined){
            var radius = document.getElementById("a").value;
            if(radius < 0 && isNaN(radius)) {
                document.getElementById("res").innerHTML = `El valor introducido debe ser un número igual o superior a 0`
            }
            var res = 2 * Math.PI * radius;
            var h = document.getElementById("a").value;
            var b = document.getElementById("b").value;
            var res = ((b * h) / 2).toFixed(2);
            document.getElementById("res").innerHTML = `El área de un triangulo es ${res} cm²`;
        }
    }
}


function calculate() {
    if (isCircle) {
        areaCircle();
    }

    if (isTriangle) {
        areaTriangle();
    }
}


function cleaner() {
    document.getElementById('res').innerHTML = "";
}

setInputs();
