<?php
// inc/header.php – common header with navbar and optional dark mode toggle
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?php echo esc($page_title ?? 'Class Website'); ?></title>
    <link rel="stylesheet" href="css/style.css">
    <script defer src="js/main.js"></script>
</head>
<body class="<?php echo isset($_SESSION['dark_mode']) && $_SESSION['dark_mode'] ? 'dark' : ''; ?>">
    <nav class="navbar">
        <div class="navbar-brand">Class Website</div>
        <ul class="navbar-menu">
            <?php if (!empty($_SESSION['user_id'])): ?>
                <li><a href="dashboard.php">Dashboard</a></li>
                <li><a href="logout.php">Logout (<?php echo esc($_SESSION['username']); ?>)</a></li>
                <li><button id="darkToggle" class="btn btn-sm">🌙</button></li>
            <?php else: ?>
                <li><a href="login.php">Login</a></li>
                <li><a href="register.php">Register</a></li>
            <?php endif; ?>
        </ul>
    </nav>
    <div class="wrapper">
        <aside class="sidebar">
            <?php if (!empty($_SESSION['user_id'])): ?>
                <?php
                $role = current_role();
                // Define menu items per role
                $menus = [
                    'developer' => [
                        ['href'=>'admin/users.php','label'=>'User Management'],
                        ['href'=>'admin/announcements.php','label'=>'Pengumuman'],
                        ['href'=>'admin/schedules.php','label'=>'Jadwal'],
                        ['href'=>'admin/tasks.php','label'=>'Tugas'],
                        ['href'=>'admin/gallery.php','label'=>'Galeri'],
                        ['href'=>'admin/kas.php','label'=>'Kas Kelas'],
                    ],
                    'guru' => [
                        ['href'=>'guru/announcements.php','label'=>'Pengumuman'],
                        ['href'=>'guru/schedules.php','label'=>'Jadwal'],
                        ['href'=>'guru/tasks.php','label'=>'Tugas'],
                        ['href'=>'guru/gallery.php','label'=>'Galeri'],
                    ],
                    'ketua' => [
                        ['href'=>'guru/announcements.php','label'=>'Pengumuman'],
                        ['href'=>'guru/schedules.php','label'=>'Jadwal'],
                        ['href'=>'guru/tasks.php','label'=>'Tugas'],
                        ['href'=>'guru/gallery.php','label'=>'Galeri'],
                    ],
                    'bendahara' => [
                        ['href'=>'bendahara/kas.php','label'=>'Kas Kelas'],
                    ],
                    'siswa' => [
                        ['href'=>'siswa/announcements.php','label'=>'Pengumuman'],
                        ['href'=>'siswa/schedules.php','label'=>'Jadwal'],
                        ['href'=>'siswa/tasks.php','label'=>'Tugas'],
                        ['href'=>'siswa/gallery.php','label'=>'Galeri'],
                        ['href'=>'siswa/kas.php','label'=>'Kas Kelas (Read)'],
                    ],
                ];
                foreach ($menus[$role] ?? [] as $item):
                ?>
                    <a class="sidebar-item" href="<?php echo esc($item['href']); ?>"><?php echo esc($item['label']); ?></a>
                <?php endforeach; ?>
            <?php endif; ?>
        </aside>
        <main class="content">
