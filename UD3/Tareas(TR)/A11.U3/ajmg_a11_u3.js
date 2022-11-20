function letters(){
    var npt = document.getElementById("npt").value;
    var upperCase = npt.toUpperCase();
    var lowerCase = npt.toLowerCase();
    if (npt === upperCase){
        document.getElementById("res").innerHTML = "Está compusta solo por mayúsculas";
    } else if (npt === lowerCase){
        document.getElementById("res").innerHTML = "Está compusta solo por minúsculas";
    } else {
        document.getElementById("res").innerHTML = "Está compusta por mayúsculas y minúsculas";
    }
}
