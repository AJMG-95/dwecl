var array = [];

array.__proto__.crear = function () {
    while (array.length < 10) {
        array.push(Math.floor(Math.random() * (1000 + 1)));
    }
    return array;
}


array.__proto__.maxMin = function () {
    var arrayMinMax = [Math.min(...array), Math.max(...array)];
    return arrayMinMax;
}

array.__proto__.eliminarMaxMin = function () {
    var arrayCopy = array.sort((a, b) => a - b ).slice(1, 9);
    return arrayCopy;
}

var a = array.crear();
var b = a.maxMin();
var c = a.eliminarMaxMin();

document.getElementById('original').innerHTML += a.join(", ");
document.getElementById('minmax').innerHTML += b.join(", ");
document.getElementById('copy').innerHTML += c.join(", ");
