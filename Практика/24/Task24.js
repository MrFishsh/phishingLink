class Transport {
    constructor(brand = "N/A", capacity = 0, power = 0, speed = 0) {
        this._brand = brand;
        this._passengerCapacity = capacity;
        this._power = power;
        this._speed = speed;
    }

    setProperties(brand, capacity, power, speed) {
        this._brand = brand;
        this._passengerCapacity = capacity;
        this._power = power;
        this._speed = speed;
    }

    displayProperties() {
        console.log(`--- Transport Information (Base) ---`);
        console.log(`Марка: ${this._brand}`);
        console.log(`Вместительность пассажиров: ${this._passengerCapacity} чел.`);
        console.log(`Мощность: ${this._power} л.с.`);
        console.log(`Скорость: ${this._speed} км/ч`);
    }
}

class Train extends Transport {
    constructor(wagonCount = 0, brand, capacity, power, speed) {
        super(brand, capacity, power, speed);
        this._wagonCount = wagonCount; // Количество вагонов 
    }

    inputProperties() {
        // Имитация ввода родительских свойств
        const brand = prompt("Введите марку поезда:");
        const capacity = parseInt(prompt("Введите вместительность пассажиров:"));
        const power = parseInt(prompt("Введите мощность (л.с.):"));
        const speed = parseInt(prompt("Введите скорость (км/ч):"));
        this.setProperties(brand, capacity, power, speed);

        // Ввод собственных свойств
        this._wagonCount = parseInt(prompt("Введите количество вагонов:")); [117]
    }

    displayProperties() {
        super.displayProperties();
        console.log(`--- Train Specifics ---`);
        console.log(`Количество вагонов: ${this._wagonCount}`); [117]
    }
}

// --- Демонстрация работы ---
const train1 = new Train(15, "Ласточка", 800, 5000, 160);
console.log("Создан train1 (с параметрами):");
train1.displayProperties();