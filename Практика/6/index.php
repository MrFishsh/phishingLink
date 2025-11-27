<?php
// 1. Начинаем сессию. Это позволяет хранить уникальный ID для каждого пользователя.
session_start();

$activeUsersFile = 'active_users.json';
$ip = $_SERVER['REMOTE_ADDR'];
$sessionId = session_id();
$currentTime = time();
$timeout = 300; // 5 минут (300 секунд)

// --- Функция для чтения списка активных пользователей ---
function getActiveUsers($file) {
    if (file_exists($file) && filesize($file) > 0) {
        $data = file_get_contents($file);
        return json_decode($data, true) ?: [];
    }
    return [];
}

// --- Функция для записи списка активных пользователей ---
function saveActiveUsers($file, $users) {
    file_put_contents($file, json_encode($users, JSON_PRETTY_PRINT));
}

// 2. Загружаем текущий список активных пользователей
$activeUsers = getActiveUsers($activeUsersFile);

// 3. Обновляем статус текущего пользователя и удаляем просроченные сессии
$updatedUsers = [];
$isNewUser = true;

foreach ($activeUsers as $id => $user) {
    // 3a. Удаляем сессии, которые неактивны дольше времени таймаута
    if ($currentTime - $user['timestamp'] < $timeout) {
        if ($id === $sessionId) {
            // 3b. Обновляем текущего пользователя
            $updatedUsers[$id] = ['ip' => $ip, 'timestamp' => $currentTime];
            $isNewUser = false;
        } else {
            // Сохраняем других активных пользователей
            $updatedUsers[$id] = $user;
        }
    }
}

// 4. Если это действительно новый пользователь, добавляем его в список
if ($isNewUser) {
    $updatedUsers[$sessionId] = ['ip' => $ip, 'timestamp' => $currentTime];
}

// 5. Сохраняем обновленный список
saveActiveUsers($activeUsersFile, $updatedUsers);

$userCount = count($updatedUsers);
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Учет Сессий</title>
</head>
<body>
    <h1>Учет Сессий на Сервере</h1>

    <p>Текущий IP-адрес: <strong><?php echo htmlspecialchars($ip); ?></strong></p>
    <p>Ваш ID сессии: <strong><?php echo htmlspecialchars($sessionId); ?></strong></p>
    <p>Всего активных пользователей (за последние <?php echo $timeout/60; ?> мин): <strong><?php echo $userCount; ?></strong></p>
    
    <h2>Список активных пользователей и их IP-адреса:</h2>
    
    <?php if ($userCount > 0): ?>
        <table border="1" cellpadding="10" cellspacing="0">
            <tr>
                <th>IP Адрес</th>
                <th>Время последнего обращения</th>
                <th>Сессия</th>
            </tr>
            <?php foreach ($updatedUsers as $id => $user): ?>
            <tr>
                <td><?php echo htmlspecialchars($user['ip']); ?></td>
                <td><?php echo date('H:i:s', $user['timestamp']); ?></td>
                <td><?php echo htmlspecialchars($id); ?></td>
            </tr>
            <?php endforeach; ?>
        </table>
    <?php else: ?>
        <p>Нет активных пользователей (кроме, возможно, вас).</p>
    <?php endif; ?>
    
    <p><em>Обновите страницу для обновления данных.</em></p>
</body>
</html>