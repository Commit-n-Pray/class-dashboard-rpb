<?php
// inc/auth.php – authentication helper functions
session_start();
require_once __DIR__.'/db.php';
require_once __DIR__.'/functions.php';

// Register a new user
function register_user($username, $email, $password, $role_id) {
    // Basic validation
    if (empty($username) || empty($email) || empty($password)) {
        return 'All fields are required.';
    }
    if (!is_valid_email($email)) {
        return 'Invalid email address.';
    }
    // Check if username or email already exists
    $stmt = $GLOBALS['pdo']->prepare('SELECT id FROM users WHERE username = ? OR email = ?');
    $stmt->execute([$username, $email]);
    if ($stmt->fetch()) {
        return 'Username or email already taken.';
    }
    $hash = password_hash($password, PASSWORD_BCRYPT);
    $stmt = $GLOBALS['pdo']->prepare('INSERT INTO users (username, email, password_hash, role_id) VALUES (?, ?, ?, ?)');
    $stmt->execute([$username, $email, $hash, $role_id]);
    return true;
}

// Login a user
function login_user($username_or_email, $password) {
    $stmt = $GLOBALS['pdo']->prepare('SELECT u.id, u.username, u.role_id, r.name AS role_name, u.password_hash FROM users u JOIN roles r ON u.role_id = r.id WHERE u.username = ? OR u.email = ?');
    $stmt->execute([$username_or_email, $username_or_email]);
    $user = $stmt->fetch();
    if ($user && password_verify($password, $user['password_hash'])) {
        // Regenerate session ID to prevent fixation
        session_regenerate_id(true);
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        $_SESSION['role_id'] = $user['role_id'];
        $_SESSION['role_name'] = $user['role_name'];
        // Set CSRF token
        csrf_token();
        return true;
    }
    return 'Invalid credentials.';
}

function logout_user() {
    $_SESSION = [];
    if (ini_get('session.use_cookies')) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000,
            $params['path'], $params['domain'],
            $params['secure'], $params['httponly']
        );
    }
    session_destroy();
    header('Location: login.php');
    exit();
}
?>
