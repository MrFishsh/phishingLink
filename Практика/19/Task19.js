class Worker {
    constructor(lastName = "N/A", firstName = "N/A", birthDate = [0, 0, 0], department = "N/A") {
        this._lastName = lastName;
        this._firstName = firstName;
        this._birthDate = birthDate; 
        this._department = department;
    }

    setProperties(lastName, firstName, day, month, year, department) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._birthDate = [day, month, year];
        this._department = department;
    }

    displayProperties() {
        const dateStr = this._birthDate.join('.');
        console.log(`--- Worker Information ---`);
        console.log(`ФИО: ${this._lastName} ${this._firstName}`);
        console.log(`Дата рождения: ${dateStr}`);
        console.log(`Отдел: ${this._department}`);
    }
}

class Engineer extends Worker {
    constructor(experience = 0, category = "None", lastName, firstName, birthDate, department) {
        super(lastName, firstName, birthDate, department);
        this._experience = experience; // Стаж в годах
        this._category = category;     // Категория (младший, средний, старший)
    }

    inputProperties() {
        // Имитация ввода родительских свойств
        const lastName = prompt("Введите фамилию:");
        const firstName = prompt("Введите имя:");
        const day = parseInt(prompt("Введите день рождения:"));
        const month = parseInt(prompt("Введите месяц рождения:"));
        const year = parseInt(prompt("Введите год рождения:"));
        const department = prompt("Введите отдел:");
        this.setProperties(lastName, firstName, day, month, year, department);

        // Ввод собственных свойств
        this._experience = parseInt(prompt("Введите стаж работы (лет):"));
        this._category = prompt("Введите категорию инженера:");
    }

    displayProperties() {
        super.displayProperties();
        console.log(`--- Engineer Specifics ---`);
        console.log(`Стаж работы: ${this._experience} лет`);
        console.log(`Категория: ${this._category}`);
    }
}

// --- Демонстрация работы ---
const engineer1 = new Engineer(5, "Senior", "Васильев", "Олег", [1, 1, 1990], "Разработка");
console.log("Создан engineer1 (с параметрами):");
engineer1.displayProperties();