class City {
    constructor(name = "N/A", population = 0, universityCount = 0) {
        this._name = name;
        this._population = population;
        this._universityCount = universityCount;
    }

    setProperties(name, population, universityCount) {
        this._name = name;
        this._population = population;
        this._universityCount = universityCount;
    }

    displayProperties() {
        console.log(`--- City Information ---`);
        console.log(`Название города: ${this._name}`);
        console.log(`Количество жителей: ${this._population} чел.`);
        console.log(`Количество ВУЗов: ${this._universityCount}`);
    }
}

class School extends City {
    constructor(graduateCount = 0, name, population, universityCount) {
        super(name, population, universityCount);
        this._graduateCount = graduateCount;
    }

    inputProperties() {
        // Имитация ввода родительских свойств
        const name = prompt("Введите название города:");
        const population = parseInt(prompt("Введите количество жителей:"));
        const universityCount = parseInt(prompt("Введите количество ВУЗов:"));
        this.setProperties(name, population, universityCount);

        // Ввод собственных свойств
        this._graduateCount = parseInt(prompt("Введите количество выпускников школы:"));
    }

    displayProperties() {
        super.displayProperties();
        console.log(`--- School Specifics ---`);
        console.log(`Количество выпускников: ${this._graduateCount}`);
    }
}

// --- Демонстрация работы ---
const school1 = new School(150, "Москва", 13000000, 300);
console.log("Создан school1 (с параметрами):");
school1.displayProperties();