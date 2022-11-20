const DAYS = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"
    , "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

const PATTERN = /^([a-z\u00C0-\u017F]{5,9})\s([0-9]{1,2})$/i;


function day() {
    var input = document.getElementById("npt").value;
    var isValidDay = false;

    if (input.match(PATTERN)) {
        var aux = input.split(" ");
        isValidDay = DAYS.includes(aux[0]) ? true : false;
        isValidDay = aux[1] > 31 ? false : aux[1] <= 0 ? false : true;
    }

    var m = isValidDay ? "Expresión válida" : "Expresión no válida";
    document.getElementById("res").innerHTML = m;
}
