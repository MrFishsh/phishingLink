class Tenant {
    constructor(initials = "N/A", birthDate = [0, 0, 0], address = "N/A") {
        this._initials = initials;
        this._birthDate = birthDate; // [День, Месяц, Год]
        this._address = address;
    }

    setProperties(initials, day, month, year, address) {
        this._initials = initials;
        this._birthDate = [day, month, year];
        this._address = address;
    }

    displayProperties() {
        const dateStr = this._birthDate.join('.');
        console.log(`--- Tenant Information ---`);
        console.log(`ФИО: ${this._initials}`);
        console.log(`Дата рождения: ${dateStr}`);
        console.log(`Адрес: ${this._address}`);
    }
}

class Count extends Tenant {
    constructor(stopsCount = 0, initials, birthDate, address) {
        super(initials, birthDate, address);
        this._stopsCount = stopsCount; // Количество остановок в отеле 
    }

    inputProperties() {
        // Имитация ввода родительских свойств
        const initials = prompt("Введите фамилию и инициалы:");
        const day = parseInt(prompt("Введите день рождения:"));
        const month = parseInt(prompt("Введите месяц рождения:"));
        const year = parseInt(prompt("Введите год рождения:"));
        const address = prompt("Введите адрес:");
        this.setProperties(initials, day, month, year, address);

        // Ввод собственных свойств
        this._stopsCount = parseInt(prompt("Введите количество остановок в отеле:")); [119]
    }

    displayProperties() {
        super.displayProperties();
        console.log(`--- Count Specifics ---`);
        console.log(`Количество остановок в отеле: ${this._stopsCount}`); [119]
    }
}

// --- Демонстрация работы ---
const count1 = new Count(3, "А.В. Петров", [10, 8, 1985], "ул. Ленина, 1");
console.log("Создан count1 (с параметрами):");
count1.displayProperties();