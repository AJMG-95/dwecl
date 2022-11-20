const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
    'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    /**
     * Valida el formato y el contenido del dni proporcionado por el usuario
     */
function validate() {
    var nif = document.getElementById("dni").value;
    var numbers = nif.substring(0, nif.length - 1);
    var letter = nif.substring(nif.length - 1).toUpperCase();
    var value = parseInt(numbers) % 23;
    var result;

    if (numbers.length != 8) {
        result = "Ha introducido mal la numeración";

    } else if (letters[value] != letter) {
        result = "Ha introducido mal la letra";

    } else {
        result = "Su DNI/NIF es válido";
    }

    document.getElementById("result").innerHTML = result;
}
