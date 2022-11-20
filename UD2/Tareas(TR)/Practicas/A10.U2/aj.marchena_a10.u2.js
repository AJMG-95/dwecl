var res;

function intt() {
    res = 0;
    var npt = document.getElementById("nmbr").value;
    npt = npt.substring(0, npt.indexOf(".")).split('').forEach(npt => res += parseInt(npt));
    document.getElementById("sltn").innerHTML = res;
}

function adl() {
    res = 0;
    var npt = document.getElementById("nmbr").value.split("");
    npt[npt.indexOf(".")] = 0;
    npt = npt.forEach(npt => res += parseInt(npt));
    document.getElementById("sltn").innerHTML = res;
}
