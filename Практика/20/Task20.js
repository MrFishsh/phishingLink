class Car {
    constructor(brand = "N/A", power = 0, color = "N/A") {
        this._brand = brand;
        this._power = power;
        this._color = color;
    }

    setProperties(brand, power, color) {
        this._brand = brand;
        this._power = power;
        this._color = color;
    }

    displayProperties() {
        console.log(`--- Car Information ---`);
        console.log(`Марка: ${this._brand}`);
        console.log(`Мощность: ${this._power} л.с.`);
        console.log(`Цвет: ${this._color}`);
    }
}

class Price extends Car {
    constructor(carPrice = 0, brand, power, color) {
        super(brand, power, color);
        this._carPrice = carPrice;
    }

    inputProperties() {
        // Имитация ввода родительских свойств
        const brand = prompt("Введите марку автомобиля:");
        const power = parseInt(prompt("Введите мощность (л.с.):"));
        const color = prompt("Введите цвет:");
        this.setProperties(brand, power, color);

        // Ввод собственных свойств
        this._carPrice = parseFloat(prompt("Введите стоимость автомобиля (руб):"));
    }

    displayProperties() {
        super.displayProperties();
        console.log(`--- Price Specifics ---`);
        // Используем toLocaleString для форматирования числа
        console.log(`Стоимость: ${this._carPrice.toLocaleString('ru-RU')} руб.`);
    }
}

// --- Демонстрация работы ---
const carPrice1 = new Price(1250000, "Lada Vesta", 106, "Белый");
console.log("Создан carPrice1 (с параметрами):");
carPrice1.displayProperties();