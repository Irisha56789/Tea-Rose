<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "my_database";

// Подключение к базе данных
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка подключения
if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
} else {
    echo "Подключение к базе данных успешно установлено.<br>";
}

// Проверка наличия данных из формы
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'], $_POST['email'], $_POST['message'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        
        // Подготовка SQL-запроса для вставки данных в таблицу
        if ($stmt = $conn->prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)")) {
            $stmt->bind_param("sss", $name, $email, $message);
            echo "Выполняется запрос на вставку: $name, $email, $message<br>";

            // Выполнение запроса
            if ($stmt->execute()) {
                echo "<script>alert('Сообщение успешно отправлено!');</script>";
            } else {
                echo "Ошибка: " . $stmt->error;
            }

            // Закрытие подготовленного выражения
            $stmt->close();
        } else {
            die("Ошибка подготовки: " . $conn->error);
        }
    } else {
        die("Ошибка: Не все данные формы были отправлены.");
    }
} else {
    die("Ошибка: Неверный метод запроса.");
}

// Закрытие соединения
$conn->close();
echo "Скрипт выполнен полностью.";
?>
