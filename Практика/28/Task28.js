class Product {
    constructor(name = "N/A", price = 0, quantity = 0) {
        this._name = name;
        this._price = price;
        this._quantity = quantity;
    }

    setProperties(name, price, quantity) {
        this._name = name;
        this._price = price;
        this._quantity = quantity;
    }

    displayProperties() {
        console.log(`--- Product Information ---`);
        console.log(`Наименование: ${this._name}`);
        console.log(`Цена: ${this._price} руб.`);
        console.log(`Количество: ${this._quantity} шт.`);
    }
}

class Product1 extends Product {
    constructor(manufactureYear = 0, name, price, quantity) {
        super(name, price, quantity);
        this._manufactureYear = manufactureYear; // Год выпуска продукта 
    }

    inputProperties() {
        // Имитация ввода родительских свойств
        const name = prompt("Введите наименование товара:");
        const price = parseFloat(prompt("Введите цену (руб):"));
        const quantity = parseInt(prompt("Введите количество (шт):"));
        this.setProperties(name, price, quantity);

        // Ввод собственных свойств
        this._manufactureYear = parseInt(prompt("Введите год выпуска продукта:")); [125]
    }

    displayProperties() {
        super.displayProperties();
        console.log(`--- Product1 Specifics ---`);
        console.log(`Год выпуска продукта: ${this._manufactureYear}`); [125]
    }
}

// --- Демонстрация работы ---
const productA = new Product1(2024, "Ноутбук", 55000, 10);
console.log("Создан productA (с параметрами):");
productA.displayProperties();