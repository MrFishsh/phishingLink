class Transport {
    constructor(brand = "N/A", capacity = 0, power = 0) {
        this._brand = brand;
        this._passengerCapacity = capacity;
        this._power = power;
    }

    setProperties(brand, capacity, power) {
        this._brand = brand;
        this._passengerCapacity = capacity;
        this._power = power;
    }

    displayProperties() {
        console.log(`--- Transport Information ---`);
        console.log(`Марка: ${this._brand}`);
        console.log(`Вместительность пассажиров: ${this._passengerCapacity}`);
        console.log(`Мощность: ${this._power} л.с.`);
    }
}

class Automobile extends Transport {
    constructor(doorCount = 4, brand, capacity, power) {
        super(brand, capacity, power);
        this._doorCount = doorCount;
    }

    inputProperties() {
        // Имитация ввода родительских свойств
        const brand = prompt("Введите марку:");
        const capacity = parseInt(prompt("Введите вместительность пассажиров:"));
        const power = parseInt(prompt("Введите мощность (л.с.):"));
        this.setProperties(brand, capacity, power);

        // Ввод собственных свойств
        this._doorCount = parseInt(prompt("Введите количество дверей:"));
    }

    displayProperties() {
        super.displayProperties();
        console.log(`--- Automobile Specifics ---`);
        console.log(`Количество дверей: ${this._doorCount}`);
    }
}

// --- Демонстрация работы ---
const car = new Automobile(4, "Toyota", 5, 150);
console.log("Создан car (с параметрами):");
car.displayProperties();