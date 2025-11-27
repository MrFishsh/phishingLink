class Book {
    constructor(title = "N/A", pageCount = 0) {
        this._title = title;
        this._pageCount = pageCount;
    }

    setProperties(title, pageCount) {
        this._title = title;
        this._pageCount = pageCount;
    }

    displayProperties() {
        console.log(`--- Book Information ---`);
        console.log(`Название: ${this._title}`);
        console.log(`Количество страниц: ${this._pageCount}`);
    }
}

class Author extends Book {
    constructor(lastName = "N/A", firstName = "N/A", title, pageCount) {
        super(title, pageCount);
        this._lastName = lastName;
        this._firstName = firstName;
    }

    inputProperties() {
        // Имитация ввода родительских свойств
        const title = prompt("Введите название книги:");
        const pageCount = parseInt(prompt("Введите количество страниц:"));
        this.setProperties(title, pageCount);

        // Ввод собственных свойств
        this._lastName = prompt("Введите фамилию автора:");
        this._firstName = prompt("Введите имя автора:");
    }

    displayProperties() {
        super.displayProperties();
        console.log(`--- Author Specifics ---`);
        console.log(`Автор: ${this._lastName} ${this._firstName}`);
    }
}

// --- Демонстрация работы ---
const book1 = new Author("Толстой", "Лев", "Война и мир", 1300);
console.log("Создан book1 (с параметрами):");
book1.displayProperties();