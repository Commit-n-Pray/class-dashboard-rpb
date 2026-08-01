<?php
require_once __DIR__.'/inc/auth.php';

// If already logged in, redirect to dashboard
if (!empty($_SESSION['user_id'])) {
    header('Location: dashboard.php');
    exit();
}

$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    verify_csrf();
    $username_or_email = trim($_POST['username_email'] ?? '');
    $password = $_POST['password'] ?? '';
    $result = login_user($username_or_email, $password);
    if ($result === true) {
        header('Location: dashboard.php');
        exit();
    } else {
        $error = $result;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login - Class Website</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="login-page">
<?php include __DIR__.'/inc/header.php'; ?>
<div class="container">
    <h2>Login</h2>
    <?php if ($error): ?>
        <div class="alert alert-danger"><?php echo esc($error); ?></div>
    <?php endif; ?>
    <form method="post" action="login.php">
        <input type="hidden" name="csrf_token" value="<?php echo esc(csrf_token()); ?>">
        <div class="form-group">
            <label for="username_email">Username or Email</label>
            <input type="text" id="username_email" name="username_email" required class="form-control">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <p>Belum punya akun? <a href="register.php">Daftar di sini</a></p>
</div>
<?php include __DIR__.'/inc/footer.php'; ?>
</body>
</html>
