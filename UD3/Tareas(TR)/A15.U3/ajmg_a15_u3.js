const TIMEPAT = /^\d{4}\s[A-Z]{3}$/

function car() {
    var x = document.getElementById('npt').value;
    var m;
    x.match(TIMEPAT) ? m = "Formato correcto" : m = "Formato incorrecto";
    document.getElementById("res").innerHTML = m;
}
