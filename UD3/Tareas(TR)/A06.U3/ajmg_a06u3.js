var crono = new Object();
crono.myDate = new Date ();
crono.hours = crono.myDate.getUTCHours();
console.log(crono.hours);
crono.minutes = crono.myDate.getUTCMinutes();



function hora() {
    var h = crono.hours;
    var m = crono.minutes;
    var utc = document.getElementById("options").value;
    h = parseInt(h) + parseInt(utc);
    (h > 24) ? (h -= 24) : h;
    document.getElementById("hour").innerHTML = `Las ${h} horas, ${m} minutos`;
}

hora()
