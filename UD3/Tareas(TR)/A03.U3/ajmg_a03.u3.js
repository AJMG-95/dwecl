function calculate() {
    var nptDate = document.getElementById("bornDate").value;

    if (nptDate == "") {
        return;
    }

    nptDate = nptDate.split("/");
    const CURRENTDATE = new Date();
    var bornDate = new Date(nptDate[0], nptDate[1] - 1, nptDate[2]);
    var days = CURRENTDATE.getUTCDate() - bornDate.getUTCDate();
    var months = CURRENTDATE.getUTCMonth() - bornDate.getUTCMonth();
    var years = CURRENTDATE.getUTCFullYear() - bornDate.getUTCFullYear();


    if (days < 0) {
        months--;
        days = 30 + days;
    }

    if (months < 0) {
        years--;
        months = 12 + months;
    }

    return [years, months, days];
}

function showResult() {
    var aux = calculate();
    var changeImg = document.getElementById("imgs");
    var changeCal = document.getElementById("calification");
    changeCal.innerHTML = "";

    document.getElementById("result").innerHTML = `${aux[0]} años ${aux[1]} meses ${aux[2]} dias`

    if (aux[0] <= 18) {
        changeImg.src = "imgs/baby.jpg";
        changeCal.innerHTML = "Eres un bebé";
    } else if (aux[0] <= 20) {
        changeImg.src = "imgs/ratboy.jpg";
        changeCal.innerHTML = "Eres un niño rata";
    } else if (aux[0] <= 30) {
        changeImg.src = "imgs/youngadult.png";
        changeCal.innerHTML = "Eres un adulto joven";
    } else if (aux[0] <= 40) {
        changeImg.src = "imgs/oldadult.jpg";
        changeCal.innerHTML = "Ya se notan los años";
    } else if (aux[0] <= 50) {
        changeImg.src = "imgs/creapyadult.jpg";
        changeCal.innerHTML = "Eres una persona mayor";
    } else {
        changeImg.src = "imgs/oldboys.webp";
        changeCal.innerHTML = "El cuerpo te pide tierra";
    }

}
