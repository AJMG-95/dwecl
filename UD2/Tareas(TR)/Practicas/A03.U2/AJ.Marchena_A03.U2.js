function mult() {
    var minValue = parseInt(document.getElementById("min").value);
    var maxValue = parseInt(document.getElementById("max").value);
    var array = [];

    // Asegura que la variable minValue contenga el valor más peqeño proporcionado por el usuario
    if (minValue > maxValue) {
        confirm("Reajustando valores");
        aux = minValue;
        minValue = maxValue;
        maxValue = aux;
    }

    // Calcula los multiplos de 8
    for (i = minValue;  i <= maxValue; i++) {
        if ((i % 8) == 0) {
            if (!array.includes(i)) {
                array.push(" " + i);

            }
        }
    }

    document.getElementById("result").innerHTML = "<strong>El resultado es:<strong/>" + array;
}
