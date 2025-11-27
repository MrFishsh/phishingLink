class Building {
    constructor(houseNumber = 0, floorCount = 1, buildYear = 2000) {
        this._houseNumber = houseNumber;
        this._floorCount = floorCount;
        this._buildYear = buildYear;
    }

    setProperties(houseNumber, floorCount, buildYear) {
        this._houseNumber = houseNumber;
        this._floorCount = floorCount;
        this._buildYear = buildYear;
    }

    displayProperties() {
        console.log(`--- Building Information ---`);
        console.log(`Номер дома: ${this._houseNumber}`);
        console.log(`Количество этажей: ${this._floorCount}`);
        console.log(`Год постройки: ${this._buildYear}`);
    }
}

class House extends Building {
    constructor(apartmentCount = 0, houseNumber, floorCount, buildYear) {
        super(houseNumber, floorCount, buildYear);
        this._apartmentCount = apartmentCount;
    }

    inputProperties() {
        // Имитация ввода родительских свойств
        const houseNumber = parseInt(prompt("Введите номер дома:"));
        const floorCount = parseInt(prompt("Введите количество этажей:"));
        const buildYear = parseInt(prompt("Введите год постройки:"));
        this.setProperties(houseNumber, floorCount, buildYear);

        // Ввод собственных свойств
        this._apartmentCount = parseInt(prompt("Введите количество квартир:"));
    }

    displayProperties() {
        super.displayProperties();
        console.log(`--- House Specifics ---`);
        console.log(`Количество квартир: ${this._apartmentCount}`);
    }
}

// --- Демонстрация работы ---
const house1 = new House(72, 10, 5, 1985);
console.log("Создан house1 (с параметрами):");
house1.displayProperties();