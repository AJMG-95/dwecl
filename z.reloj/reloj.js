function crono() {
    var elCrono;
    var miFecha = new Date();
    var horas = miFecha.getHours();
    var minutos = miFecha.getMinutes();
    var segundos = miFecha.getSeconds();

    if (horas > 12) {
        ampm = 'pm';
        horas -= 12;
    } else {
        ampm = 'am';
    }

    if (horas < 10) { horas = '0' + horas; }
    if (minutos < 10) { minutos = '0' + minutes; }
    if (segundos < 10) { segundos = '0' + segundos; }

    var texto = document.getElementById('laHora');
    texto.innerHTML = horas + ':' + minutos + ':' + segundos + ' ' + ampm;
}
window.onload = function () {
    elCrono = setInterval(crono, 1000);
}
