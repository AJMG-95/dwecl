function getValue() {
    var val = document.getElementById("in").value.trim();

    if(val.charAt(val.length - 1) == '.'){
        val = val.substring(0, val.length - 1);
    }
    return val.split(" ");
}


function phrsLenth() {
    var p = getValue().length;
    return p;
}


function frstWord() {
    var f = getValue()[0];
    return f;

}

function lstWord() {
    var l = getValue()[phrsLenth() - 1];
    return l;
}

function exam() {
    document.getElementById("p1").innerHTML = frstWord();
    document.getElementById("lp").innerHTML = lstWord();
    document.getElementById("np").innerHTML = phrsLenth()
}
