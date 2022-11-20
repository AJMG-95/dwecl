function saludar() {

    var tiempo = new Date();
    var hora = tiempo.getHours();
    var minuto = tiempo.getMinutes();
    var segundo = tiempo.getSeconds();

    if (parseInt(minuto) < 10) {minuto = "0" + String(minuto)}
    if (parseInt(segundo) < 10) {segundo = "0" + String(segundo)}

    var cad = `son las ${hora}:${minuto}:${segundo}`;

    (hora < 12) ? cad = "Buenos días, " + cad :
        (hora < 18) ? cad = "Buenas tardes, " + cad : cad = "Buenas noches, " + cad;

    /*     if (hora < 12) {
            cad = "Buenos días, " + cad;
        } else if (hora < 18) {
            cad = "Buenas tardes, " + cad;
        } else {
            cad = "Buenas noches, " + cad;
        } */

    document.getElementById('res').innerHTML = cad;
}

saludar();
