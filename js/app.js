/**
 * MAIN APP CONTROLLER FOR SEPARATE PAGES
 * Mengontrol halaman terpisah, Theme Switcher, Form submission & Audio Widget.
 */

document.addEventListener("DOMContentLoaded", () => {
  APP.init();
});

const APP = {
  isMusicPlaying: false,

  init() {
    this.initTheme();
    AUTH.init();
    // RENDERER dideklarasikan const di top-level → TIDAK ada di window.
    // Cek via typeof (sama seperti bug AUTH dulu), bukan window.RENDERER.
    if (typeof RENDERER !== "undefined") {
      RENDERER.init();
    }
    this.bindEvents();
  },

  initTheme() {
    const savedTheme = localStorage.getItem("theme_preference") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    this.updateThemeIcon(savedTheme);
  },

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme_preference", newTheme);
    this.updateThemeIcon(newTheme);
  },

  updateThemeIcon(theme) {
    const btns = document.querySelectorAll(".theme-toggle-btn");
    btns.forEach(btn => {
      btn.textContent = theme === "dark" ? "🌙" : "☀️";
      btn.setAttribute("title", `Ganti ke Mode ${theme === "dark" ? "Terang" : "Gelap"}`);
    });
  },

  bindEvents() {
    // Theme Switchers
    document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
      btn.addEventListener("click", () => this.toggleTheme());
    });

    // Landing Login Form
    const loginLandingForm = document.getElementById("landing-login-form");
    if (loginLandingForm) {
      loginLandingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("landing-username-input").value;
        const pass = document.getElementById("landing-pass-input") ? document.getElementById("landing-pass-input").value : "";

        const result = AUTH.login(username, pass);
        if (result.success) {
          alert(`Selamat Datang, ${result.user.badge} ${result.user.name}! Membuka Beranda Kelas...`);
          window.location.href = "beranda.html";
        } else {
          alert(result.message);
        }
      });
    }

    // Logout Button
    const logoutBtn = document.getElementById("nav-logout-btn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        if (confirm("Apakah Anda yakin ingin keluar dari Portal Kelas?")) {
          AUTH.logout();
        }
      });
    }

    // Add Task Form — data dikelola __TASKS (tasks.js), bukan CLASS_DATA.initialTasks
    // (yang dikomentari di data.js sehingga selalu undefined dan bikin modal crash).
    const addTaskForm = document.getElementById("add-task-form");
    if (addTaskForm) {
      addTaskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const subject = document.getElementById("task-subject-input").value;
        const title = document.getElementById("task-title-input").value;
        const dueDate = document.getElementById("task-date-input").value;
        const priority = document.getElementById("task-priority-input").value;
        const note = document.getElementById("task-note-input").value;

        if (typeof __TASKS !== "undefined" && __TASKS.addTask) {
          __TASKS.addTask({ subject, title, dueDate, priority, note });
        }
        this.closeModal("add-task-modal");
        addTaskForm.reset();
        alert("Tugas pengingat baru berhasil ditambahkan!");
      });
    }
  },

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add("active");
  },

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("active");
  },

  toggleMusic() {
    const disc = document.getElementById("music-disc");
    const btn = document.getElementById("btn-music-toggle");
    const audio = document.getElementById("bg-lofi-audio");

    if (!this.isMusicPlaying) {
      this.isMusicPlaying = true;
      if (disc) disc.classList.add("playing");
      if (btn) btn.textContent = "⏸️ Pause";
      if (audio) {
        audio.play().catch(err => {
          console.log("Audio play prevented:", err);
        });
      }
    } else {
      this.isMusicPlaying = false;
      if (disc) disc.classList.remove("playing");
      if (btn) btn.textContent = "▶️ Play";
      if (audio) audio.pause();
    }
  }
};
