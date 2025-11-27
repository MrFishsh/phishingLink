document.getElementById('studentForm').addEventListener('submit', function(event) {
    // 1. Предотвращаем стандартную отправку формы
    event.preventDefault(); 

    // 2. Проверяем валидацию (HTML5 'required' атрибут поможет с базовой проверкой)
    if (!this.checkValidity()) {
        alert('Пожалуйста, заполните все обязательные поля.');
        return; 
    }

    // 3. Собираем данные формы
    const formData = new FormData(this);
    const studentData = {};

    // 4. Собираем данные в JavaScript-объект
    for (let [name, value] of formData.entries()) {
        studentData[name] = value;
    }

    // 5. Выводим объект в консоль (имитация "отправки на сервер")
    console.log("Собранный объект данных студента для отправки на сервер:");
    console.log(studentData);

    // Дополнительно: вывод на страницу для наглядности
    alert('Данные успешно собраны и готовы к отправке. Проверьте консоль для просмотра объекта.');

    // В реальном приложении здесь был бы вызов fetch() или XMLHttpRequest 
    // для отправки объекта studentData на сервер.
    // fetch('/submit-data-url', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(studentData),
    // })
});