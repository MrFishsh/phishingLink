// Используем классы (Class syntax) для создания функционального конструктора и наследования.

/**
 * Базовый класс User
 * Скрывает элементы-данные от пользователя, используя префикс _ (общепринятая конвенция для "приватных" свойств в JS)
 */
class User {
    constructor(lastName = "", firstName = "", birthDate = [0, 0, 0]) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._birthDate = birthDate; // [День, Месяц, Год]
    }

    /**
     * Метод для присваивания значений свойствам класса
     */
    setProperties(lastName, firstName, day, month, year) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._birthDate = [day, month, year];
    }

    /**
     * Метод для вывода значений свойств класса на экран
     */
    displayProperties() {
        const dateStr = this._birthDate.join('.');
        console.log(`--- User Information ---`);
        console.log(`Фамилия, Имя: ${this._lastName}, ${this._firstName}`);
        console.log(`Дата рождения: ${dateStr}`);
    }
}

/**
 * Производный класс Contacts (наследует от User)
 */
class Contacts extends User {
    constructor(email = "default@mail.com", phoneNumber = "N/A", lastName, firstName, birthDate) {
        super(lastName, firstName, birthDate); // Вызов конструктора родителя
        this._email = email;
        this._phoneNumber = phoneNumber;
    }

    /**
     * Метод, осуществляющий ввод значений свойств класса с клавиатуры (имитация через prompt)
     */
    inputProperties() {
        const lastName = prompt("Введите фамилию пользователя:");
        const firstName = prompt("Введите имя пользователя:");
        const day = parseInt(prompt("Введите день рождения (число):"));
        const month = parseInt(prompt("Введите месяц рождения (число):"));
        const year = parseInt(prompt("Введите год рождения (число):"));
        
        this.setProperties(lastName, firstName, day, month, year);

        this._email = prompt("Введите электронную почту:");
        this._phoneNumber = prompt("Введите номер телефона:");
    }

    /**
     * Метод, осуществляющий вывод значений свойств класса на экран (расширяет родительский вывод)
     */
    displayProperties() {
        super.displayProperties(); // Вывод свойств родителя
        console.log(`--- Contacts Information ---`);
        console.log(`Электронная почта: ${this._email}`);
        console.log(`Номер телефона: ${this._phoneNumber}`);
    }
}

// --- Демонстрация работы ---

// 1. Создание экземпляра класса User без параметров
const user1 = new User();
console.log("Создан user1 (без параметров):");
user1.displayProperties();
user1.setProperties("Иванов", "Иван", 15, 5, 1990);
console.log("После присваивания значений user1:");
user1.displayProperties();
console.log("----------------------------");

// 2. Создание и демонстрация производного класса Contacts
const contact1 = new Contacts("new@mail.com", "555-1234", "Петров", "Петр", [10, 1, 2000]);
console.log("Создан contact1 (с параметрами):");
contact1.displayProperties();
console.log("----------------------------");

// 3. Демонстрация метода ввода (раскомментировать для интерактивного ввода)
// console.log("Демонстрация ввода для contact2:");
// const contact2 = new Contacts();
// contact2.inputProperties(); 
// contact2.displayProperties();