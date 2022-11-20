const TIMEPAT = /^[0-9]{1,2}:[0-9]{2}(:[0-9]{2})?(s?())?$/;

function hour() {
    var x = document.getElementById('npt').value;
    var m;
    x.match(TIMEPAT) ? m = "Formato correcto" : m = "Formato incorrecto";
    document.getElementById("res").innerHTML = m;
}
