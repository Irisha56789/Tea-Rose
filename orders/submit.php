<?php
// Включаем файл для подключения к базе данных
require_once 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы и удаляем лишние пробелы
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);

    // Проверяем, что все поля заполнены
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Валидация email
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            try {
                // Подготовим SQL-запрос для вставки данных
                $sql = "INSERT INTO messages (name, email, message) VALUES (:name, :email, :message)";
                $stmt = $pdo->prepare($sql);
                // Привязываем значения
                $stmt->bindParam(':name', $name);
                $stmt->bindParam(':email', $email);
                $stmt->bindParam(':message', $message);

                // Выполняем запрос
                $stmt->execute();

                // Перенаправляем пользователя на страницу с сообщением об успешной отправке
                header("Location: success.php");
                exit();
            } catch (PDOException $e) {
                // В случае ошибки выводим сообщение
                echo "Ошибка при записи в базу данных: " . $e->getMessage();
            }
        } else {
            echo "Неверный формат email!";
        }
    } else {
        echo "Пожалуйста, заполните все поля!";
    }
} else {
    echo "Форма не отправлена!";
}
