class Score {
    constructor(payerAccount = "N/A", recipientAccount = "N/A", amount = 0) {
        this._payerAccount = payerAccount;
        this._recipientAccount = recipientAccount;
        this._amount = amount;
    }

    setProperties(payerAccount, recipientAccount, amount) {
        this._payerAccount = payerAccount;
        this._recipientAccount = recipientAccount;
        this._amount = amount;
    }

    displayProperties() {
        console.log(`--- Score Information (Перевод) ---`);
        console.log(`Счет плательщика: ${this._payerAccount}`);
        console.log(`Счет получателя: ${this._recipientAccount}`);
        console.log(`Сумма перевода: ${this._amount.toLocaleString('ru-RU')} руб.`);
    }
}

class Bank extends Score {
    constructor(senderBank = "N/A", payerAccount, recipientAccount, amount) {
        super(payerAccount, recipientAccount, amount);
        this._senderBank = senderBank; // Банк-отправитель
    }

    inputProperties() {
        // Имитация ввода родительских свойств
        const payerAccount = prompt("Введите расчетный счет плательщика:");
        const recipientAccount = prompt("Введите расчетный счет получателя:");
        const amount = parseFloat(prompt("Введите перечисляемую сумму (руб):"));
        this.setProperties(payerAccount, recipientAccount, amount);

        // Ввод собственных свойств
        this._senderBank = prompt("Введите название банка-отправителя:");
    }

    displayProperties() {
        super.displayProperties();
        console.log(`--- Bank Specifics ---`);
        console.log(`Банк-отправитель: ${this._senderBank}`);
    }
}

// --- Демонстрация работы ---
const payment = new Bank("Сбербанк", "408170001...", "408170002...", 50000.50);
console.log("Создан payment (с параметрами):");
payment.displayProperties();