class Operator {
    constructor(name = "Default Operator", cost = 0, coverage = "N/A") {
        this._name = name;
        this._costPerMinute = cost;
        this._coverageArea = coverage;
    }

    setProperties(name, cost, coverage) {
        this._name = name;
        this._costPerMinute = cost;
        this._coverageArea = coverage;
    }

    displayProperties() {
        console.log(`--- Operator Information ---`);
        console.log(`Название оператора: ${this._name}`);
        console.log(`Стоимость 1 минуты: ${this._costPerMinute} руб.`);
        console.log(`Площадь покрытия: ${this._coverageArea}`);
    }
}

class Client extends Operator {
    constructor(balance = 0, name, cost, coverage) {
        super(name, cost, coverage);
        this._accountBalance = balance;
    }

    inputProperties() {
        const name = prompt("Введите название оператора:");
        const cost = parseFloat(prompt("Введите стоимость 1 минуты (число):"));
        const coverage = prompt("Введите площадь покрытия:");
        
        this.setProperties(name, cost, coverage);

        this._accountBalance = parseFloat(prompt("Введите количество средств на счете (число):"));
    }

    displayProperties() {
        super.displayProperties();
        console.log(`--- Client Account Information ---`);
        console.log(`Количество средств на счете: ${this._accountBalance} руб.`);
    }
}

// --- Демонстрация работы ---
const client1 = new Client(150.50, "MegaWeb", 2.5, "Город N");
console.log("Создан client1 (с параметрами):");
client1.displayProperties();

// Демонстрация работы родительских методов
client1.setProperties("WebPlus", 1.99, "Область K"); 
console.log("После обновления свойств родителя:");
client1.displayProperties();