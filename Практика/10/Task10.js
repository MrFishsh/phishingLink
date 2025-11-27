class Gadget {
    constructor(power = 0, isOn = false) {
        this._power = power;
        this._isOn = isOn;
    }

    setProperties(power, isOn) {
        this._power = power;
        this._isOn = isOn;
    }

    displayProperties() {
        console.log(`--- Gadget Information ---`);
        console.log(`Мощность: ${this._power} Вт`);
        console.log(`Состояние включения: ${this._isOn ? "Включен" : "Выключен"}`);
    }
}

class Television extends Gadget {
    constructor(manufacturer = "N/A", diagonal = 0, power, isOn) {
        super(power, isOn);
        this._manufacturer = manufacturer;
        this._screenDiagonal = diagonal;
    }

    inputProperties() {
        // Имитация ввода родительских свойств
        const power = parseInt(prompt("Введите мощность (Вт):"));
        const isOn = prompt("Телевизор включен? (true/false):").toLowerCase() === 'true';
        this.setProperties(power, isOn);

        // Ввод собственных свойств
        this._manufacturer = prompt("Введите производителя:");
        this._screenDiagonal = parseInt(prompt("Введите диагональ экрана (дюймы):"));
    }

    displayProperties() {
        super.displayProperties();
        console.log(`--- Television Specifics ---`);
        console.log(`Производитель: ${this._manufacturer}`);
        console.log(`Диагональ экрана: ${this._screenDiagonal} дюймов`);
    }
}

// --- Демонстрация работы ---
const tv = new Television("LG", 55, 120, true);
console.log("Создан tv (с параметрами):");
tv.displayProperties();