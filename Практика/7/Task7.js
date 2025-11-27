class Phone {
    constructor(brand = "N/A", price = 0) {
        this._brand = brand;
        this._price = price;
    }

    setProperties(brand, price) {
        this._brand = brand;
        this._price = price;
    }

    displayProperties() {
        console.log(`--- Phone Information ---`);
        console.log(`Марка: ${this._brand}`);
        console.log(`Цена: ${this._price} руб.`);
    }
}

class Mobile extends Phone {
    constructor(memorySize = 0, simCount = 1, brand, price) {
        super(brand, price);
        this._memorySize = memorySize;
        this._simCount = simCount;
    }

    inputProperties() {
        const brand = prompt("Введите марку телефона:");
        const price = parseFloat(prompt("Введите цену (число):"));
        
        this.setProperties(brand, price);

        this._memorySize = parseInt(prompt("Введите объем памяти (GB, число):"));
        this._simCount = parseInt(prompt("Введите количество SIM-карт (число):"));
    }

    displayProperties() {
        super.displayProperties();
        console.log(`--- Mobile Specifics ---`);
        console.log(`Объем памяти: ${this._memorySize} GB`);
        console.log(`Количество SIM-карт: ${this._simCount}`);
    }
}

// --- Демонстрация работы ---
const mobile1 = new Mobile(128, 2, "Samsung", 35000);
console.log("Создан mobile1 (с параметрами):");
mobile1.displayProperties();

const mobile2 = new Mobile();
console.log("Создан mobile2 (без параметров):");
mobile2.displayProperties();