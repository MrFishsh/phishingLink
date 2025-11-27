class Human {
    constructor(lastName = "", firstName = "", height = 0, weight = 0, birthDate = [0, 0, 0]) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._height = height;
        this._weight = weight;
        this._birthDate = birthDate;
    }

    setProperties(lastName, firstName, height, weight, day, month, year) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._height = height;
        this._weight = weight;
        this._birthDate = [day, month, year];
    }

    displayProperties() {
        const dateStr = this._birthDate.join('.');
        console.log(`--- Human Information ---`);
        console.log(`ФИО: ${this._lastName} ${this._firstName}`);
        console.log(`Рост/Вес: ${this._height} см / ${this._weight} кг`);
        console.log(`Дата рождения: ${dateStr}`);
    }
}

class Programmer extends Human {
    constructor(languages = [], lastName, firstName, height, weight, birthDate) {
        super(lastName, firstName, height, weight, birthDate);
        this._knownLanguages = languages;
    }

    inputProperties() {
        const lastName = prompt("Введите фамилию:");
        const firstName = prompt("Введите имя:");
        const height = parseInt(prompt("Введите рост (см):"));
        const weight = parseInt(prompt("Введите вес (кг):"));
        const day = parseInt(prompt("Введите день рождения:"));
        const month = parseInt(prompt("Введите месяц рождения:"));
        const year = parseInt(prompt("Введите год рождения:"));
        
        this.setProperties(lastName, firstName, height, weight, day, month, year);

        const langs = prompt("Введите языки программирования через запятую (напр.: JS, PHP, Python):");
        this._knownLanguages = langs.split(',').map(lang => lang.trim());
    }

    displayProperties() {
        super.displayProperties();
        console.log(`--- Programmer Specifics ---`);
        console.log(`Языки программирования: ${this._knownLanguages.join(', ')}`);
    }
}

// --- Демонстрация работы ---
const programmer1 = new Programmer(["JavaScript", "HTML", "CSS"], "Сидоров", "Алексей", 180, 75, [20, 11, 1995]);
console.log("Создан programmer1 (с параметрами):");
programmer1.displayProperties();

// Демонстрация работы родительских методов
programmer1.setProperties("Новый", "Человек", 190, 80, 1, 1, 2001); 
console.log("После обновления свойств родителя:");
programmer1.displayProperties();
