function getInputs() {
    var a = []
    var s1 = document.getElementById("str1").value;
    var s2 = document.getElementById("str2").value;
    var n1 = document.getElementById("nmbr1").value;
    var n2 = document.getElementById("nmbr2").value;
    var b1 = document.getElementById("bool1").value;
    var b2 = document.getElementById("bool2").value;
    a = [s1, s2, n1, n2, b1, b2];
    return a;
}

function calc() {
    var outs = ": Es el mayor";
    var bres1;
    var bres2;
    var nres1;
    var nres2;
    var a = getInputs();

    if (a[0] == a[1]) {
        outs = "Son de igual tama&ntildeo";
    } else if (a[0] > a[1]) {
        outs = a[0] + outs;
    } else {
        outs = a[1] + outs;
    }

    var setTrue1 = (a[4] == "true");
    var setTrue2 = (a[5] == "true");
    bres1 = setTrue1 && setTrue2;
    bres2 = setTrue1 || setTrue2;

    nres1 = parseInt(a[2]) + parseInt(a[3]);
    nres2 = parseInt(a[2]) - parseInt(a[3]);

    document.getElementById("s").innerHTML = outs;
    document.getElementById("bl1").innerHTML = bres1;
    document.getElementById("bl2").innerHTML = bres2;
    document.getElementById("n1").innerHTML = nres1;
    document.getElementById("n2").innerHTML = nres2;
}
