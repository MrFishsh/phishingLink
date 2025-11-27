document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем стандартную отправку формы
    
    // Скрываем все сообщения об ошибках и успеха
    document.querySelectorAll('.error').forEach(el => el.style.display = 'none');
    document.getElementById('successMessage').style.display = 'none';

    let isValid = true;

    // 1. Валидация Имени и Фамилии (Кириллические буквы, ВЕРХНИЙ регистр, max 30)
    // RegExp: ^[А-ЯЁ]{1,30}$
    const nameRegex = /^[А-ЯЁ]{1,30}$/; [121]
    
    const firstName = document.getElementById('firstName').value.trim();
    if (!nameRegex.test(firstName)) {
        document.getElementById('errorFirstName').style.display = 'block';
        isValid = false;
    }

    const lastName = document.getElementById('lastName').value.trim();
    if (!nameRegex.test(lastName)) {
        document.getElementById('errorLastName').style.display = 'block';
        isValid = false;
    }

    // 2. Валидация Курса (Только число, 1 символ, не больше 4)
    // RegExp: ^[1-4]$
    const courseRegex = /^[1-4]$/; [121]
    const course = document.getElementById('course').value.trim();
    if (!courseRegex.test(course)) {
        document.getElementById('errorCourse').style.display = 'block';
        isValid = false;
    }

    // 3. Валидация Номера группы (Числа 1-3, затем Кириллица 1-3)
    // RegExp: ^\d{1,3}[А-Яа-яЁё]{1,3}$
    // Примечание: В условии указано "буквы кириллические", но не указан регистр, я использую оба.
    // Если нужно только верхний регистр: ^\d{1,3}[А-ЯЁ]{1,3}$
    const groupRegex = /^\d{1,3}[А-Яа-яЁё]{1,3}$/; [121]
    const groupNumber = document.getElementById('groupNumber').value.trim();
    if (!groupRegex.test(groupNumber)) {
        document.getElementById('errorGroupNumber').style.display = 'block';
        isValid = false;
    }

    // 4. Результат
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        console.log("Форма успешно прошла валидацию.");
        // В реальном приложении здесь была бы отправка данных:
        // this.submit(); 
    }
});