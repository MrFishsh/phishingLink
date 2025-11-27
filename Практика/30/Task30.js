class Town {
    constructor(name = "N/A", population = 0, schoolCount = 0) {
        this._name = name;
        this._population = population;
        this._schoolCount = schoolCount;
    }

    setProperties(name, population, schoolCount) {
        this._name = name;
        this._population = population;
        this._schoolCount = schoolCount;
    }

    displayProperties() {
        console.log(`--- Town Information ---`);
        console.log(`Название города: ${this._name}`);
        console.log(`Количество жителей: ${this._population} чел.`);
        console.log(`Количество школ: ${this._schoolCount}`);
    }
}

class School extends Town {
    constructor(graduateCount = 0, name, population, schoolCount) {
        super(name, population, schoolCount);
        this._graduateCount = graduateCount; // Количество выпускников
    }

    inputProperties() {
        // Имитация ввода родительских свойств
        const name = prompt("Введите название города:");
        const population = parseInt(prompt("Введите количество жителей:"));
        const schoolCount = parseInt(prompt("Введите количество школ:"));
        this.setProperties(name, population, schoolCount);

        // Ввод собственных свойств
        this._graduateCount = parseInt(prompt("Введите количество выпускников:"));
    }

    displayProperties() {
        super.displayProperties();
        console.log(`--- School Specifics ---`);
        console.log(`Количество выпускников: ${this._graduateCount}`);
    }
}

// --- Демонстрация работы ---
const townSchool = new School(250, "Самара", 1160000, 150);
console.log("Создан townSchool (с параметрами):");
townSchool.displayProperties();