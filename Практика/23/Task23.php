<?php
// PHP-реализация ООП

/**
 * Базовый класс City
 */
class City {
    // Приватные свойства
    private $name;
    private $population;
    private $universityCount;

    public function __construct($name = "N/A", $population = 0, $universityCount = 0) {
        $this->name = $name;
        $this->population = $population;
        $this->universityCount = $universityCount;
    }

    // Метод для присваивания свойств
    public function setProperties($name, $population, $universityCount) {
        $this->name = $name;
        $this->population = $population;
        $this->universityCount = $universityCount;
    }

    // Метод для вывода свойств
    public function displayProperties() {
        echo "--- City Information ---\n";
        echo "Название города: " . $this->name . "\n";
        echo "Количество жителей: " . $this->population . " чел.\n";
        echo "Количество ВУЗов: " . $this->universityCount . "\n";
    }
}

/**
 * Производный класс School
 */
class School extends City {
    private $graduateCount;

    public function __construct($graduateCount = 0, $name = "N/A", $population = 0, $universityCount = 0) {
        parent::__construct($name, $population, $universityCount); // Вызов конструктора родителя
        $this->graduateCount = $graduateCount;
    }

    // Метод, осуществляющий ввод значений свойств класса (имитация считывания)
    public function inputProperties($name, $population, $universityCount, $graduateCount) {
        // Вызов родительского метода присваивания
        $this->setProperties($name, $population, $universityCount);
        
        // Присваивание собственного свойства
        $this->graduateCount = $graduateCount;
    }

    // Метод, осуществляющий вывод значений свойств класса на экран
    public function displayProperties() {
        parent::displayProperties(); // Вызов родительского метода вывода
        echo "--- School Specifics ---\n";
        echo "Количество выпускников: " . $this->graduateCount . "\n";
    }
}

// --- Демонстрация работы ---
// Создание экземпляра
$school1 = new School(150, "Минск", 2000000, 15);

// Вывод
echo "<pre>"; // Используем <pre> для корректного вывода \n в браузере
$school1->displayProperties();
echo "</pre>";

// Демонстрация ввода (имитация: обычно данные приходят из формы)
$school2 = new School();
$school2->inputProperties("Брест", 350000, 5, 80);

echo "<pre>";
$school2->displayProperties();
echo "</pre>";
?>