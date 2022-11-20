const arr = [-1, 30, 39, 10, 13];
var newArr = [];
var positives = false;
var result;

document.getElementById("original").innerHTML = arr.join(", ");

const checkNumber = (currentValue) => (Number.isInteger(currentValue) && currentValue >= 0);
positives = arr.every(checkNumber);
document.getElementById("checkNumber").innerHTML = positives;

newArr = arr.map(element => element * 3)
document.getElementById("newarr").innerHTML = newArr.join(", ")

result = newArr.reduce(function (a, b) { return a * b; });
document.getElementById("result").innerHTML = result;
