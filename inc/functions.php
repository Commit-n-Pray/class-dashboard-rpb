<?php
// functions.php – common helper functions

// Sanitize input for HTML output (prevents XSS)
function esc($data) {
    return htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
}

// Validate email format
function is_valid_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Generate a CSRF token and store in session
function csrf_token() {
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

// Verify CSRF token from POST data
function verify_csrf() {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $token = $_POST['csrf_token'] ?? '';
        if (!hash_equals($_SESSION['csrf_token'] ?? '', $token)) {
            die('Invalid CSRF token');
        }
    }
}

// Check if user is logged in
function require_login() {
    if (empty($_SESSION['user_id'])) {
        header('Location: login.php');
        exit();
    }
}

// Get current user's role name (e.g., developer, guru, ketua, bendahara, siswa)
function current_role() {
    return $_SESSION['role_name'] ?? '';
}

// Role checking – $allowed can be string or array of allowed role names
function check_role($allowed) {
    $role = current_role();
    $allowed = (array)$allowed;
    if (!in_array($role, $allowed)) {
        // unauthorized – show 403 page or redirect
        header('HTTP/1.1 403 Forbidden');
        echo '<h1>403 Forbidden</h1><p>You do not have permission to access this page.</p>';
        exit();
    }
}
?>
