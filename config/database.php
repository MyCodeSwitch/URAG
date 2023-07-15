<?php 
$hostname = 'localhost';
$username = 'jing';
$password = '123456';
$database = 'URAG';

try {
    $pdo = new PDO("mysql:host=$hostname;dbname=$database", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

if (isset($_POST['email'])) {
    $email = $_POST['email'];

    // Validate and sanitize email
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response = array('status' => 'error', 'message' => 'Invalid email format!');
    } else {
        $stmt = $pdo->prepare("INSERT INTO `email_list` (email) VALUES (:email)");
        $stmt->bindParam(':email', $email);

        try {
            $stmt->execute();
            $response = array('status' => 'success', 'message' => 'The email has been added to the URAG email list');
        } catch (PDOException $e) {
            $response = array('status' => 'error', 'message' => 'Error: ' . $e->getMessage());
        }
    }

    header('Content-Type: application/json');
    echo json_encode($response);
    exit();
}
?>