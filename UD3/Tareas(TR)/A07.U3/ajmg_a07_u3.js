function getRandom () {
    var num = []
    console.log(num);
    for (var i = 0; i < 10; i++) {
        num [i] = ' ' + (Math.floor(Math.random() * 20));
    }
    document.getElementById("res").innerHTML = num;
}

getRandom();
