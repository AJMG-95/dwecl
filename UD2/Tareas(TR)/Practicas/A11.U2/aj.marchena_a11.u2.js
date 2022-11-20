var res;

function opers() {
    var op1 = parseFloat(document.getElementById("v1").value);
    var op2 = parseFloat(document.getElementById("v2").value);
    var ar = [op1, op2];
    return ar;
}

function sum() {
    var ar = opers();
    res = ar[0] + ar[1];
    result(res);
}

function resta() {
    var ar = opers();
    res = ar[0] - ar[1];
    result(res);
}

function mult() {
    var ar = opers();
    res = ar[0] * ar[1];
    result(res);
}

function dvd() {
    var ar = opers();
    if (ar[2]) {
        document.getElementById("resultado").innerHTML = MathError;
    } else {
        res = ar[0] / ar[1];
        result(res);
    }
}

function mdl() {
    var ar = opers();
    res = ar[0] % ar[1];
    result(res);
}

function brk() {
    var c = confirm();
    if (c) {
        alert("Adios");
        document.getElementById("tl").innerHTML = "";
    }
}

function result(r) {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("resultado").innerHTML = r;
}
