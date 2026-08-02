/**
 * MULTI-PAGE AUTHENTICATION & ACCESS CONTROL SYSTEM
 * Mengelola alur login dan proteksi halaman terpisah.
 */

const AUTH = {
  CURRENT_USER_KEY: "classroom_user_session_v3",

  // Roles Config
  ROLES_CONFIG: {
    siswa: { name: "Siswa", pass: "", badge: "Siswa", canEdit: false },
    pengurus: { name: "Pengurus Kelas", pass: "1234", badge: "Pengurus", canEdit: true },
    walikelas: { name: "Wali Kelas", pass: "guru123", badge: "Wali Kelas", canEdit: true },
    dev: { name: "Developer", pass: "dev123", badge: "Dev", canEdit: true }
  },

  init() {
    this.protectPages();
  },

  getCurrentUser() {
    const saved = localStorage.getItem(this.CURRENT_USER_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return null;
      }
    }
    return null;
  },

  login(roleKey, name, passInput) {
    const config = this.ROLES_CONFIG[roleKey];
    if (!config) return { success: false, message: "Role tidak valid!" };

    if (config.pass && passInput !== config.pass) {
      return { success: false, message: `Password/PIN salah untuk ${config.name}! (Hint PIN: ${config.pass})` };
    }

    const userData = {
      role: roleKey,
      name: name || config.name,
      badge: config.badge,
      canEdit: config.canEdit,
      loginTime: new Date().toISOString()
    };

    localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(userData));
    return { success: true, user: userData };
  },

  logout() {
    localStorage.removeItem(this.CURRENT_USER_KEY);
    window.location.href = "index.html";
  },

  protectPages() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const user = this.getCurrentUser();

    const isLoginPage = currentPage === "index.html" || currentPage === "";

    if (!user && !isLoginPage) {
      // User is not logged in trying to access a protected page -> Redirect to Login Page
      window.location.href = "index.html";
      return;
    }

    if (user && isLoginPage) {
      // User is already logged in on login page -> Redirect to Home/Beranda
      window.location.href = "beranda.html";
      return;
    }

    // Update UI elements if logged in on protected pages
    if (user) {
      const userBadgeEl = document.getElementById("user-role-badge");
      if (userBadgeEl) {
        userBadgeEl.textContent = `${user.badge} - ${user.name}`;
      }

      const adminControls = document.querySelectorAll(".admin-only");
      adminControls.forEach(el => {
        if (user.canEdit) {
          el.classList.remove("hidden-perm");
        } else {
          el.classList.add("hidden-perm");
        }
      });
    }

     // Local UI Logic (Role Selection Styling)
    const roleCards = document.querySelectorAll('.role-card-opt');
    roleCards.forEach(card => {
      card.addEventListener('click', () => {
        roleCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        
        const role = card.getAttribute('data-role');
        const passGroup = document.getElementById('landing-pass-group');
        // Logic show/hide pass group based on role
        if (role !== 'siswa') {
          passGroup.classList.remove('hidden');
        } else {
          passGroup.classList.add('hidden');
        }
      });
    });
  }
};
