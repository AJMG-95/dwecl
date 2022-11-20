class vehicle {
    constructor(brand, model, color, year, carDisplacement) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
        this.displacement = carDisplacement;
        this.engineOn = false;
        this.speed = 0;
    }

    showDates() {
        var carDates = `Marca: ${this.brand}\nModelo: ${this.model}\nColor: ${this.color}\nAño: ${this.year}`;
        if (this.speed) {carDates += `\nVelocidad: ${this.speed}Km/h`};
        alert(carDates);
    }

    speedUp(speed) {
        this.speed = speed;
    }

    turnCarOn() {
        if (!this.engineOn) {
            alert(`El coche ${this.brand} ${this.model} ha arrancado`);
            this.engineOn = true;
        }
        else {
            alert(`El coche ${this.brand} ${this.model} ya estaba arrancado`);
        }
    }

    brakeCar() {
        if (!this.engineOn) {
            alert(`El coche ${this.brand} ${this.model} ${this.color} ya estaba parado`);
        } else {
            this.speed = 0;
            alert(`El coche ${this.brand} ${this.model} ${this.color} ha parado`);
        }
    }
}

var coche1 = new vehicle("Mazda", "cX-5", "blaco", "2022", 2000);
var coche2 = new vehicle("Ford", "Puma", "Azul", "2022", 4500);

alert(coche1.brand);
alert(coche2.color);
alert(Object.keys(coche1));
coche1.turnCarOn();
coche1.turnCarOn();
coche1.speedUp(69);
coche1.showDates();
