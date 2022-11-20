var array = [];
while (array.length < 10){
    array.push(Math.floor(Math.random() * (1000 + 1)));
}

var arrayMinMax = [Math.min(... array), Math.max(... array)];

var arrayCopy = array.sort(function(a, b){return a - b}).slice(1, 9);

document.getElementById('original').innerHTML += array.join(", ");
document.getElementById('minmax').innerHTML += arrayMinMax.join(", ");
document.getElementById('copy').innerHTML += arrayCopy.join(", ");
