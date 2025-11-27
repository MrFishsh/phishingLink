<?php
// Проверяем, что запрос был методом POST и данные присутствуют
if ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST)) {
    // 1. Собираем данные из POST запроса
    $firstName = $_POST['firstName'] ?? 'N/A';
    $lastName = $_POST['lastName'] ?? 'N/A';
    $groupNumber = $_POST['groupNumber'] ?? 'N/A';
    $gender = $_POST['gender'] ?? 'N/A';
    $course = $_POST['course'] ?? 'N/A';

    // 2. Формируем строку данных для CSV
    // Элементы массива будут разделены запятыми при записи в CSV
    $data = [
        $firstName,
        $lastName,
        $groupNumber,
        $gender,
        $course
    ];

    $filename = 'students.csv';
    
    // 3. Открываем файл для записи. 'a' - открывает файл для записи, помещая указатель в конец файла. 
    // Если файл не существует, пытается его создать[cite: 58].
    $file = fopen($filename, 'a');

    // Если файл не существует или пуст, записываем заголовок
    if (filesize($filename) == 0) {
        $header = ['Имя', 'Фамилия', 'Номер группы', 'Пол', 'Курс'];
        fputcsv($file, $header);
    }
    
    // 4. Записываем данные в файл в формате CSV
    fputcsv($file, $data);
    
    // 5. Закрываем файл
    fclose($file);

    // 6. Выводим сообщение пользователю
    echo "<h1>Данные успешно записаны!</h1>";
    echo "<p>Информация о студенте сохранена в файле **students.csv**.</p>";
    echo '<p><a href="index.html">Вернуться к форме</a></p>';

} else {
    // Если запрос не POST или пустой
    header('Location: index.html'); // Перенаправляем обратно на форму
    exit;
}
?>

// php -S localhost:8080 - перед запускам кодя для запускасервака