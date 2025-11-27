class Student {
    constructor(initials = "N/A", address = "N/A", marks = [0, 0, 0]) {
        this._initials = initials;
        this._address = address;
        this._marks = marks; // Массив из 3 оценок
    }

    setProperties(initials, address, mark1, mark2, mark3) {
        this._initials = initials;
        this._address = address;
        this._marks = [mark1, mark2, mark3];
    }

    displayProperties() {
        console.log(`--- Student Information ---`);
        console.log(`ФИО: ${this._initials}`);
        console.log(`Адрес: ${this._address}`);
        console.log(`Оценки: ${this._marks.join(', ')}`);
    }
}

class Student1 extends Student {
    constructor(averageScore = 0, initials, address, marks) {
        super(initials, address, marks);
        this._averageScore = averageScore;
    }

    /**
     * Вычисляет и присваивает средний балл
     */
    calculateAverage() {
        const sum = this._marks.reduce((acc, mark) => acc + mark, 0);
        this._averageScore = (sum / this._marks.length).toFixed(2);
    }

    inputProperties() {
        // Имитация ввода родительских свойств
        const initials = prompt("Введите фамилию и инициалы:");
        const address = prompt("Введите адрес:");
        const mark1 = parseInt(prompt("Введите оценку по первому предмету:"));
        const mark2 = parseInt(prompt("Введите оценку по второму предмету:"));
        const mark3 = parseInt(prompt("Введите оценку по третьему предмету:"));
        this.setProperties(initials, address, mark1, mark2, mark3);
        
        // Вычисление среднего балла сразу после ввода оценок
        this.calculateAverage();
    }

    displayProperties() {
        // Убеждаемся, что средний балл вычислен, если не был установлен ранее
        if (this._averageScore === 0) {
            this.calculateAverage();
        }
        
        super.displayProperties();
        console.log(`--- Student1 Specifics ---`);
        console.log(`Средний балл: ${this._averageScore}`);
    }
}

// --- Демонстрация работы ---
const studentA = new Student1(0, "А.С. Пушкин", "Москва", [5, 4, 5]);
console.log("Создан studentA (с параметрами, средний балл будет вычислен):");
studentA.displayProperties();