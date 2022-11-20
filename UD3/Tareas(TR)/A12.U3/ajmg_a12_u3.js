function setDates(){
    var npt = document.getElementById("npt").value;
    var wrd = document.getElementById("wrd").value;
    if (npt.includes(wrd)) {
        document.getElementById("res1").innerHTML = `La palabra ${wrd} aparece en la frase ${npt}`;
        var pos = npt.indexOf(wrd);
        document.getElementById("res2").innerHTML = `Se encuentra en la posición ${pos}`;
        var wrdlength = wrd.length;
        document.getElementById("res3").innerHTML = `La longitud de ${wrd} es ${wrdlength}`
        var newnpt = npt.replace(wrd, 'dwecl');
        document.getElementById("res4").innerHTML = newnpt;
    } else {
        document.getElementById("res1").innerHTML = "La palabra no se encuentra en la frase";
    }
}
