class Biblio {
    constructor(regNumber = "0000", author = "N/A", title = "N/A", pageCount = 0) {
        this._regNumber = regNumber;
        this._author = author;
        this._title = title;
        this._pageCount = pageCount;
    }

    setProperties(regNumber, author, title, pageCount) {
        this._regNumber = regNumber;
        this._author = author;
        this._title = title;
        this._pageCount = pageCount;
    }

    displayProperties() {
        console.log(`--- Biblio Information ---`);
        console.log(`Регистрационный номер: ${this._regNumber}`);
        console.log(`Автор: ${this._author}`);
        console.log(`Название книги: ${this._title}`);
        console.log(`Количество страниц: ${this._pageCount}`);
    }
}

class DateClass extends Biblio { // Используем DateClass, чтобы избежать конфликта с встроенным классом Date
    constructor(issueDate = "N/A", regNumber, author, title, pageCount) {
        super(regNumber, author, title, pageCount);
        this._issueDate = issueDate; // Дата, когда выдана книга 
    }

    inputProperties() {
        // Имитация ввода родительских свойств
        const regNumber = prompt("Введите регистрационный номер:");
        const author = prompt("Введите автора:");
        const title = prompt("Введите название книги:");
        const pageCount = parseInt(prompt("Введите количество страниц:"));
        this.setProperties(regNumber, author, title, pageCount);

        // Ввод собственных свойств
        this._issueDate = prompt("Введите дату выдачи книги (ДД.ММ.ГГГГ):"); [123]
    }

    displayProperties() {
        super.displayProperties();
        console.log(`--- Date Specifics ---`);
        console.log(`Дата выдачи книги: ${this._issueDate}`); [123]
    }
}

// --- Демонстрация работы ---
const bookDate = new DateClass("01.09.2024", "1234", "Иванов И.И.", "Программирование", 500);
console.log("Создан bookDate (с параметрами):");
bookDate.displayProperties();