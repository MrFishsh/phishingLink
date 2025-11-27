// Обратите внимание: класс Transport в этом задании имеет свойство "скорость"
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
        console.log(`--- Transport Information (Air) ---`);
        console.log(`Марка: ${this._brand}`);
        console.log(`Вместительность пассажиров: ${this._passengerCapacity}`);
        console.log(`Мощность: ${this._power} л.с.`);
        console.log(`Скорость: ${this._speed} км/ч`);
    }
}

class Airplane extends Transport {
    constructor(engineCount = 2, flightAltitude = 0, brand, capacity, power, speed) {
        super(brand, capacity, power, speed);
        this._engineCount = engineCount;
        this._flightAltitude = flightAltitude;
    }

    inputProperties() {
        // Имитация ввода родительских свойств
        const brand = prompt("Введите марку самолета:");
        const capacity = parseInt(prompt("Введите вместительность пассажиров:"));
        const power = parseInt(prompt("Введите мощность (л.с.):"));
        const speed = parseInt(prompt("Введите скорость (км/ч):"));
        this.setProperties(brand, capacity, power, speed);

        // Ввод собственных свойств
        this._engineCount = parseInt(prompt("Введите количество двигателей:"));
        this._flightAltitude = parseInt(prompt("Введите высоту полета (метры):"));
    }

    displayProperties() {
        super.displayProperties();
        console.log(`--- Airplane Specifics ---`);
        console.log(`Количество двигателей: ${this._engineCount}`);
        console.log(`Высота полета: ${this._flightAltitude} м`);
    }
}

// --- Демонстрация работы ---
const plane = new Airplane(4, 10000, "Boeing", 300, 50000, 900);
console.log("Создан plane (с параметрами):");
plane.displayProperties();