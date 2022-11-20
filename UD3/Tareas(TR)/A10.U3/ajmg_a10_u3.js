function setData(){
    var x = document.getElementById("phrs").value;
    var a = x.indexOf(document.getElementById("lmt1").value);
    var b = x.indexOf(document.getElementById("lmt2").value);
    document.getElementById("original").innerHTML += x;
    document.getElementById("new").innerHTML += x.slice(a, b + 1);
}
