
const IVA = { "1": 21, "2": 10, "3": 5 }

function obtenerImporteConImpuestos(precio, tipo) {
    var precio = parseInt(document.getElementById("pr").value);
    console.log(precio)
    var m;

    var tipo = document.getElementById("tipo").value;
    var iva;
    IVA.hasOwnProperty(tipo) ? iva = IVA[tipo] : iva = IVA["1"];
    var total = precio + ((precio * iva)/ 100);
    isNaN(precio) ? m = "Debe introducir una valor numérico para el precio" : m = `Importe: ${precio},  iva: ${iva}%,  Total: ${total}`;
    document.getElementById("res").innerHTML = m;
}
