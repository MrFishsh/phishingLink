class Product {
    constructor(name = "N/A", producer = "N/A", expirationDate = "N/A") {
        this._name = name;
        this._producer = producer;
        this._expirationDate = expirationDate; 
    }

    setProperties(name, producer, expirationDate) {
        this._name = name;
        this._producer = producer;
        this._expirationDate = expirationDate;
    }

    displayProperties() {
        console.log(`--- Product Information ---`);
        console.log(`Название: ${this._name}`);
        console.log(`Производитель: ${this._producer}`);
        console.log(`Срок годности: ${this._expirationDate}`);
    }
}

class Price extends Product {
    constructor(productPrice = 0, name, producer, expirationDate) {
        super(name, producer, expirationDate);
        this._productPrice = productPrice;
    }

    inputProperties() {
        // Имитация ввода родительских свойств
        const name = prompt("Введите название товара:");
        const producer = prompt("Введите производителя:");
        const expirationDate = prompt("Введите срок годности (ДД.ММ.ГГГГ):");
        this.setProperties(name, producer, expirationDate);

        // Ввод собственных свойств
        this._productPrice = parseFloat(prompt("Введите стоимость товара (руб):"));
    }

    displayProperties() {
        super.displayProperties();
        console.log(`--- Price Specifics ---`);
        console.log(`Стоимость: ${this._productPrice} руб.`);
    }
}

// --- Демонстрация работы ---
const productPrice1 = new Price(99.99, "Молоко", "Рога и Копыта", "15.12.2025");
console.log("Создан productPrice1 (с параметрами):");
productPrice1.displayProperties();