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

class Sportsman extends Human {
    constructor(awardsCount = 0, competitionsCount = 0, lastName, firstName, height, weight, birthDate) {
        super(lastName, firstName, height, weight, birthDate);
        this._awardsCount = awardsCount;
        this._competitionsCount = competitionsCount;
    }

    inputProperties() {
        // Имитация ввода родительских свойств
        const lastName = prompt("Введите фамилию:");
        const firstName = prompt("Введите имя:");
        const height = parseInt(prompt("Введите рост (см):"));
        const weight = parseInt(prompt("Введите вес (кг):"));
        const day = parseInt(prompt("Введите день рождения:"));
        const month = parseInt(prompt("Введите месяц рождения:"));
        const year = parseInt(prompt("Введите год рождения:"));
        this.setProperties(lastName, firstName, height, weight, day, month, year);

        // Ввод собственных свойств
        this._awardsCount = parseInt(prompt("Введите число наград:"));
        this._competitionsCount = parseInt(prompt("Введите количество проведенных соревнований:"));
    }

    displayProperties() {
        super.displayProperties();
        console.log(`--- Sportsman Specifics ---`);
        console.log(`Число наград: ${this._awardsCount}`);
        console.log(`Количество соревнований: ${this._competitionsCount}`);
    }
}

// --- Демонстрация работы ---
const sportsman = new Sportsman(10, 50, "Смирнов", "Олег", 175, 70, [1, 1, 1999]);
console.log("Создан sportsman (с параметрами):");
sportsman.displayProperties();