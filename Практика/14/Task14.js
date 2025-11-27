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

class Ship extends Transport {
    constructor(length = 0, displacement = 0, brand, capacity, power, speed) {
        super(brand, capacity, power, speed);
        this._length = length;
        this._displacement = displacement;
    }

    inputProperties() {
        // Имитация ввода родительских свойств
        const brand = prompt("Введите марку судна:");
        const capacity = parseInt(prompt("Введите вместительность пассажиров:"));
        const power = parseInt(prompt("Введите мощность (л.с.):"));
        const speed = parseInt(prompt("Введите скорость (км/ч):"));
        this.setProperties(brand, capacity, power, speed);

        // Ввод собственных свойств
        this._length = parseFloat(prompt("Введите длину (метры):"));
        this._displacement = parseInt(prompt("Введите водоизмещение (тонны):"));
    }

    displayProperties() {
        super.displayProperties();
        console.log(`--- Ship Specifics ---`);
        console.log(`Длина: ${this._length} м`);
        console.log(`Водоизмещение: ${this._displacement} т`);
    }
}

// --- Демонстрация работы ---
const ship1 = new Ship(150.5, 50000, "Harmony", 1500, 40000, 40);
console.log("Создан ship1 (с параметрами):");
ship1.displayProperties();