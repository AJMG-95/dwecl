class vehicle {
    static countInstaces = 0;


    constructor(brand, model, color, year, carDisplacement, speed, engineOn = false) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
        this.displacement = carDisplacement;
        this.speed = speed;
        this.engineOn = engineOn;
        this.instanceId = ++vehicle.countInstaces;
        this.properties = Object.keys(this);
    }


    getDates() {
        let carDates = `Marca: ${this.brand}\nModelo: ${this.model}\nColor: ${this.color}\nAño: ${this.year}`;
        if (this.speed) { carDates += `\nVelocidad: ${this.speed}Km/h` };
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


    engineStatus() {
        if (this.engineOn) return "Arrancado";
        else return "Apagado";
    }


    brakeCar() {
        if (!this.engineOn) {
            alert(`El coche ${this.brand} ${this.model} ${this.color} ya estaba parado`);
        } else {
            this.speed = 0;
            alert(`El coche ${this.brand} ${this.model} ${this.color} ha parado`);
        }
    }


    showTableOfDates() {
        const body = document.body;
        body.style.margin = '200px';
        const tbl = document.createElement('table');
        tbl.style.border = '1px solid black';
        tbl.style.margin = 'auto';
        tbl.style.padding = '10px'
        tbl.style.width = '70%';

        const th = tbl.insertRow();
        th.appendChild(document.createTextNode(`Objeto nº${this.instanceId} de la clase vehículo`));
        th.style.textAlign = 'center';

        for (let i = 0; i < vehicle.countInstaces - 1; i++) {
            const tr = tbl.insertRow();
            this.properties.forEach(element => {
                if (element != "instanceId") {
                    const td = tr.insertCell();
                    let prop = element;
                    let h3 = td.appendChild(document.createElement('h3'));
                    let p = td.appendChild(document.createElement('p'));
                    h3.appendChild(document.createTextNode(prop));
                    let node = document.createTextNode(this[prop])
                    node == undefined ? p.appendChild("") : p.appendChild(node);

                    td.style.border = '2px solid black';
                    td.style.textAlign = 'center';
                    td.style.padding = '10px';
                    h3.style.border = '2px solid black';
                    h3.style.padding = '20px';
                    h3.style.margin = 'auto';
                    if(prop == "engineOn") {
                        h3.style.backgroundColor = this[prop] ? "green" : "red";
                    }
                }
            })
        }
        body.appendChild(tbl);
    }
}


const coche1 = new vehicle("Mazda", "cX-5", "blaco", "2022", 2000,),
        coche2 = new vehicle("Ford", "Puma", "Azul", "2022", 4500, 200, true);


coche1.showTableOfDates();
coche2.showTableOfDates()
