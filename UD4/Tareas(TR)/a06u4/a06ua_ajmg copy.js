class alumn {
    static countInstaces = 0;

    constructor(name, n1, n2, n3) {
    this.name = name;
    this.Modulo1 = n1;
    this.Modulo2 = n2;
    this.Modulo3 = n3;
    this.instanceId = ++alumn.countInstaces;
    this.properties = Object.keys(this);
    }

    checker() {
        this.properties.forEach(element => {
            if ([null, undefined, ""].includes(this[element])) {
                alert("Debe especificar un valor para todos los elementos (nombre, modulo1, modulo2, modulo3)");
                return false;
            }
            if (["Modulo1","Modulo2","Modulo3"].includes(element)) {
                if(this[element] < 0 || this[element] > 10) {
                    alert("El las notas deben estar clmprendidas entre 0 y 10");
                    return false;
                }
            }
            return true;
        })

    }

    showTableOfDates() {
        this.checker();
        const body = document.body;
        body.style.margin = "200px";

        const tbl = document.createElement("table");
        tbl.style.border = "1px solid black";
        tbl.style.margin = "auto";
        tbl.style.padding = "10px";
        tbl.style.width = "70%";

        const th = tbl.insertRow();
        th.appendChild(document.createTextNode(`Objeto nº${this.instanceId} de la clase alumno`));
        th.style.textAlign = "center";

        for (let i = 0; i < alumn.countInstaces - 1; i++) {
            const tr = tbl.insertRow();
            this.properties.forEach((element) => {
                if (element != "instanceId") {
                    const td = tr.insertCell();
                    let prop = element;
                    let h3 = td.appendChild(document.createElement("h3"));
                    let p = td.appendChild(document.createElement("p"));
                    h3.appendChild(document.createTextNode(prop));
                    let node = document.createTextNode(this[prop]);
                    node == undefined ? p.appendChild("") : p.appendChild(node);

                    td.style.border = "2px solid black";
                    td.style.textAlign = "center";
                    td.style.padding = "10px";
                    h3.style.border = "2px solid black";
                    h3.style.padding = "20px";
                    h3.style.margin = "auto";
                    if (prop == "engineOn") {
                        h3.style.backgroundColor = this[prop] ? "green" : "red";
                    }
                }
            });
        }
        body.appendChild(tbl)
    }
}

const alumn1 = new alumn("Pepe", 4, 5, -4),
    alumn2 = new alumn("pepa", 5, 7, 6);

alumn1.showTableOfDates();
alumn2.showTableOfDates();
