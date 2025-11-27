class Bus {
    constructor(destination = "N/A", routeNumber = 0, departureTime = "00:00") {
        this._destination = destination;
        this._routeNumber = routeNumber;
        this._departureTime = departureTime;
    }

    setProperties(destination, routeNumber, departureTime) {
        this._destination = destination;
        this._routeNumber = routeNumber;
        this._departureTime = departureTime;
    }

    displayProperties() {
        console.log(`--- Bus Information ---`);
        console.log(`Пункт назначения: ${this._destination}`);
        console.log(`Номер маршрута: ${this._routeNumber}`);
        console.log(`Время отправления: ${this._departureTime}`);
    }
}

class Bilet extends Bus {
    constructor(price = 0, destination, routeNumber, departureTime) {
        super(destination, routeNumber, departureTime);
        this._price = price;
    }

    inputProperties() {
        // Имитация ввода родительских свойств
        const destination = prompt("Введите пункт назначения:");
        const routeNumber = parseInt(prompt("Введите номер маршрута:"));
        const departureTime = prompt("Введите время отправления (ЧЧ:ММ):");
        this.setProperties(destination, routeNumber, departureTime);

        // Ввод собственных свойств
        this._price = parseFloat(prompt("Введите стоимость билета (руб):"));
    }

    displayProperties() {
        super.displayProperties();
        console.log(`--- Bilet Specifics ---`);
        console.log(`Стоимость билета: ${this._price} руб.`);
    }
}

// --- Демонстрация работы ---
const ticket = new Bilet(550.00, "Санкт-Петербург", 42, "18:30");
console.log("Создан ticket (с параметрами):");
ticket.displayProperties();