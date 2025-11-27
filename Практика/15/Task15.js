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

class Director extends Human {
    constructor(employeeScore = 0, lastName, firstName, height, weight, birthDate) {
        super(lastName, firstName, height, weight, birthDate);
        this._employeeScore = employeeScore; // Оценка в баллах
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
        this._employeeScore = parseInt(prompt("Введите оценку сотрудников (баллы):"));
    }

    displayProperties() {
        super.displayProperties();
        console.log(`--- Director Specifics ---`);
        console.log(`Оценка (в баллах) сотрудников: ${this._employeeScore}`);
    }
}

// --- Демонстрация работы ---
const director1 = new Director(95, "Орлов", "Сергей", 178, 85, [5, 12, 1975]);
console.log("Создан director1 (с параметрами):");
director1.displayProperties();