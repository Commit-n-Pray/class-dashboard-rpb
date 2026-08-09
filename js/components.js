/**
 * MULTI-PAGE UI COMPONENTS RENDERER
 * Perenderan komponen dinamis yang disesuaikan dengan setiap halaman terpisah.
 */

const RENDERER = {
  activeDay: "Senin",
  activeMemberRole: "All",
  activeTaskFilter: "Semua",

  init() {
    this.detectCurrentDay();

    // Dynamically check which page we are on and render appropriate sections
    if (document.getElementById("hero-today-banner")) {
      this.renderHeroTodayBanner();
    }
    if (document.getElementById("schedule-tabs")) {
      this.renderSchedule();
    }
    if (document.getElementById("task-grid")) {
      this.renderTasks();
    }
    if (document.getElementById("member-grid")) {
      this.renderMembers();
    }
    if (document.getElementById("kas-balance-amount")) {
      this.renderFinance();
    }
    if (document.getElementById("announcement-list")) {
      this.renderAnnouncements();
    }
    if (document.getElementById("gallery-grid")) {
      this.renderGallery();
    }
  },

  detectCurrentDay() {
    const daysMap = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const now = new Date();
    const currentDayName = daysMap[now.getDay()];
    if (currentDayName === "Minggu" || currentDayName === "Sabtu") {
      this.activeDay = "Senin";
    } else {
      this.activeDay = currentDayName;
    }
  },

  // 1. Render Hero Today Banner (Beranda Page)
  renderHeroTodayBanner() {
    const bannerEl = document.getElementById("hero-today-banner");
    if (!bannerEl) return;

    // Guard: sebagian data (members/tasks/finance) boleh kosong dulu
    const members = CLASS_DATA.members || [];
    const tasks = CLASS_DATA.initialTasks || [];
    const balance = (CLASS_DATA.finance && CLASS_DATA.finance.currentBalance) || 0;

    const todaySched = CLASS_DATA.schedules.find(s => s.day === this.activeDay) || CLASS_DATA.schedules[0];

    bannerEl.innerHTML = `
      <div class="today-header">
        <h3><span class="day-tag">HARI INI</span> ${todaySched.day}</h3>
        <span style="font-size: 0.8rem; color: var(--text-muted);">${new Date().toLocaleDateString('id-ID', { dateStyle: 'full' })}</span>
      </div>
      <div class="today-uniform-box">
        <strong>Baju Seragam Hari Ini:</strong>
        <p style="font-weight: 700; color: var(--text-main); margin-top: 0.2rem;">${todaySched.icon} ${todaySched.uniform}</p>
      </div>
      <div>
        <strong style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Pelajaran Hari Ini (${todaySched.subjects.length} Mapel):</strong>
        <ul style="list-style: none; margin-top: 0.4rem; display: flex; flex-direction: column; gap: 0.35rem;">
          ${todaySched.subjects.map(sub => `
            <li style="font-size: 0.85rem; display: flex; justify-content: space-between; background: var(--bg-card-solid); padding: 0.4rem 0.6rem; border-radius: var(--radius-sm);">
              <span><strong>${sub.name}</strong> (${sub.room})</span>
              <span style="color: var(--accent-cyan); font-weight: 600;">${sub.time}</span>
            </li>
          `).join('')}
        </ul>
      </div>
      <div class="today-stats">
        <div class="stat-item">
          <div class="stat-num">${members.length}</div>
          <div class="stat-label">Siswa & Wali</div>
        </div>
        <div class="stat-item">
          <div class="stat-num">${tasks.filter(t => t.status !== 'Selesai').length}</div>
          <div class="stat-label">Tugas Pending</div>
        </div>
        <div class="stat-item">
          <div class="stat-num">${balance > 0 ? `Rp ${Math.round(balance / 1000).toLocaleString('id-ID')}k` : 'Rp 0'}</div>
          <div class="stat-label">Kas Kelas</div>
        </div>
      </div>
    `;
  },

  // 2. Render Schedule Page
  renderSchedule() {
    const tabsEl = document.getElementById("schedule-tabs");
    const containerEl = document.getElementById("schedule-content");
    if (!tabsEl || !containerEl) return;

    tabsEl.innerHTML = CLASS_DATA.schedules.map(s => `
      <button class="day-tab-btn ${s.day === this.activeDay ? 'active' : ''}" onclick="RENDERER.switchScheduleDay('${s.day}')">
        ${s.icon} ${s.day}
      </button>
    `).join('');

    const sched = CLASS_DATA.schedules.find(s => s.day === this.activeDay) || CLASS_DATA.schedules[0];

    containerEl.innerHTML = `
      <div class="uniform-card">
        <div class="uniform-icon">${sched.icon}</div>
        <div>
          <h4 style="font-size: 1rem; font-weight: 800;">Seragam Wajib ${sched.day}:</h4>
          <p style="font-size: 0.95rem; color: var(--text-main); font-weight: 600;">${sched.uniform}</p>
        </div>
      </div>
      <div class="timetable-grid" style="margin-top: 1.25rem;">
        ${sched.subjects.map(sub => `
          <div class="subject-card">
            <div class="subject-time">${sub.time}</div>
            <h4 class="subject-name">${sub.name}</h4>
            <div class="subject-meta">
              <span>Ruang: <strong>${sub.room}</strong></span>
              <span>👨Pengampu: <strong>${sub.teacher}</strong></span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  switchScheduleDay(dayName) {
    this.activeDay = dayName;
    this.renderSchedule();
  },

  // 3. Render Tasks Page
  renderTasks() {
    const gridEl = document.getElementById("task-grid");
    if (!gridEl) return;

    // Halaman tugas memakai manajer __TASKS (tasks.js) yang merender grid
    // sendiri via DOMContentLoaded — biarkan __TASKS yang pegang kendali.
    if (typeof __TASKS !== "undefined") return;

    let tasks = CLASS_DATA.initialTasks || [];
    if (this.activeTaskFilter !== "Semua") {
      tasks = tasks.filter(t => t.status === this.activeTaskFilter);
    }

    if (tasks.length === 0) {
      gridEl.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-muted);">Tidak ada tugas dengan status "${this.activeTaskFilter}".</div>`;
      return;
    }

    gridEl.innerHTML = tasks.map(task => `
      <div class="task-card">
        <div class="task-card-header">
          <span class="task-subject">${task.subject}</span>
          <span class="priority-tag priority-${task.priority}">Priority: ${task.priority}</span>
        </div>
        <h4 class="task-title">${task.title}</h4>
        <div class="task-note">📌 ${task.note}</div>
        <div class="task-footer">
          <span>Deadline: <strong>${task.dueDate}</strong></span>
          <label class="task-status-checkbox">
            <input type="checkbox" ${task.status === 'Selesai' ? 'checked' : ''} onchange="RENDERER.toggleTaskStatus('${task.id}')">
            <span style="font-weight: 700; color: ${task.status === 'Selesai' ? 'var(--accent-emerald)' : 'var(--text-main)'};">
              ${task.status}
            </span>
          </label>
        </div>
      </div>
    `).join('');
  },

  filterTasks(status) {
    this.activeTaskFilter = status;
    document.querySelectorAll(".task-filter-chip").forEach(el => {
      el.classList.toggle("active", (el.dataset.status || "Semua") === status);
    });
    this.renderTasks();
  },

  toggleTaskStatus(taskId) {
    const task = CLASS_DATA.initialTasks.find(t => t.id === taskId);
    if (task) {
      task.status = task.status === "Selesai" ? "Belum" : "Selesai";
      this.renderTasks();
      if (document.getElementById("hero-today-banner")) {
        this.renderHeroTodayBanner();
      }
    }
  },

  // 4. Render Members Page
  renderMembers() {
    const gridEl = document.getElementById("member-grid");
    if (!gridEl) return;

    let members = CLASS_DATA.members || [];
    if (this.activeMemberRole !== "All") {
      members = members.filter(m => m.roleCategory === this.activeMemberRole);
    }

    if (members.length === 0) {
      gridEl.innerHTML = `<div class="empty-state" style="grid-column: 1 / -1;">Belum ada data member. Pengurus akan segera melengkapi profil kelas.</div>`;
      return;
    }

    gridEl.innerHTML = members.map(m => `
      <div class="member-card">
        <img src="${m.avatar}" alt="${m.name}" class="member-avatar">
        <h4 class="member-name">${m.name}</h4>
        <span class="member-role-badge">${m.role}</span>
        <p class="member-quote">"${m.quote}"</p>
        <div style="margin-top: 0.85rem; font-size: 0.75rem; color: var(--accent-cyan); font-weight: 600;">
          IG: ${m.instagram}
        </div>
      </div>
    `).join('');
  },

  filterMembers(roleCat) {
    this.activeMemberRole = roleCat;
    document.querySelectorAll(".member-filter-chip").forEach(el => {
      if (el.dataset.role === roleCat) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
    this.renderMembers();
  },

  // 5. Render Finance (Kas Kelas)
  renderFinance() {
    const balanceEl = document.getElementById("kas-balance-amount");
    const historyEl = document.getElementById("kas-history-list");
    if (!balanceEl || !historyEl) return;

    const finance = CLASS_DATA.finance || {};
    balanceEl.textContent = `Rp ${(finance.currentBalance || 0).toLocaleString('id-ID')}`;

    const history = finance.history || [];
    if (!history.length) {
      historyEl.innerHTML = `<div class="empty-state">Belum ada transaksi tercatat.</div>`;
      return;
    }

    historyEl.innerHTML = history.map(item => `
      <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-input); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border-left: 3px solid ${item.type === 'in' ? 'var(--accent-emerald)' : '#ef4444'};">
        <div>
          <strong style="font-size: 0.85rem;">${item.desc}</strong>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${item.date}</div>
        </div>
        <span style="font-weight: 800; font-size: 0.9rem; color: ${item.type === 'in' ? 'var(--accent-emerald)' : '#ef4444'};">
          ${item.type === 'in' ? '+' : '-'} Rp ${item.amount.toLocaleString('id-ID')}
        </span>
      </div>
    `).join('');
  },

  // 6. Render Announcements
  renderAnnouncements() {
    const containerEl = document.getElementById("announcement-list");
    if (!containerEl) return;

    const announcements = CLASS_DATA.announcements || [];
    if (!announcements.length) {
      containerEl.innerHTML = `<div class="empty-state">Belum ada pengumuman baru. Pengurus akan memasang pengumuman di sini.</div>`;
      return;
    }

    containerEl.innerHTML = announcements.map(ann => `
      <div class="announcement-item">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.7rem; font-weight: 800; padding: 0.15rem 0.5rem; border-radius: var(--radius-full); background: var(--accent-primary); color: #fff;">
            ${ann.category}
          </span>
          <span class="announcement-date">${ann.date}</span>
        </div>
        <h4 class="announcement-title">${ann.title}</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted);">${ann.content}</p>
      </div>
    `).join('');
  },

  // 7. Render Gallery
  renderGallery() {
    const gridEl = document.getElementById("gallery-grid");
    if (!gridEl) return;

    // Data galeri masih kosong → biarkan konten statis (figure) tetap tampil
    const gallery = CLASS_DATA.gallery || [];
    if (!gallery.length) return;

    gridEl.innerHTML = gallery.map(item => `
      <div class="gallery-item">
        <img src="${item.imageUrl}" alt="${item.title}">
        <div class="gallery-overlay">
          <span style="font-size: 0.75rem; font-weight: 800; color: var(--accent-cyan); text-transform: uppercase;">${item.category}</span>
          <h4 style="font-size: 0.95rem; font-weight: 700;">${item.title}</h4>
          <p style="font-size: 0.75rem; opacity: 0.9;">${item.caption}</p>
        </div>
      </div>
    `).join('');
  }
};
