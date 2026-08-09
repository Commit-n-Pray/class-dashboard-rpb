/**
 * TASK MANAGER — Halaman Pengingat Tugas
 * Manajer tugas fungsional (localStorage), pengganti renderer yang mati.
 * Data awal kosong sesuai desain asli (initialTasks dikomentari di data.js).
 * Pengurus/Wali/Dev dapat menambah tugas; semua pengguna dapat menandai selesai.
 */

const __TASKS = {
  STORAGE_KEY: "xrpb_tasks_v1",
  tasks: [],
  activeFilter: "Semua",

  init() {
    this.load();
    // Chip filter sudah memakai onclick inline di HTML (pola sama seperti anggota.html),
    // jadi tidak perlu bind event di sini agar setFilter tidak terpanggil dua kali.
    this.setFilter(this.activeFilter);
    this.applyPerm();
  },

  load() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      this.tasks = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(this.tasks)) this.tasks = [];
    } catch (e) {
      this.tasks = [];
    }
  },

  save() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.tasks));
    } catch (e) {
      console.warn("Gagal menyimpan tugas:", e);
    }
  },

  setFilter(status) {
    this.activeFilter = status || "Semua";
    document.querySelectorAll(".task-filter-chip").forEach(el => {
      el.classList.toggle("active", (el.dataset.status || "Semua") === this.activeFilter);
    });
    this.render();
  },

  addTask(data) {
    const user = (typeof AUTH !== "undefined" && AUTH.getCurrentUser) ? AUTH.getCurrentUser() : null;
    const task = {
      id: "t" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      subject: data.subject || "",
      title: data.title || "",
      dueDate: data.dueDate || "",
      priority: data.priority || "Sedang",
      status: "Belum",
      note: data.note || "Tugas baru ditambahkan pengurus.",
      assignedBy: user ? user.name : "Pengurus"
    };
    this.tasks.unshift(task);
    this.save();
    this.render();
    return task;
  },

  toggleTask(taskId) {
    const task = this.tasks.find(t => t.id === taskId);
    if (!task) return;
    task.status = task.status === "Selesai" ? "Belum" : "Selesai";
    this.save();
    this.render();
  },

  visibleTasks() {
    if (this.activeFilter === "Semua") return this.tasks;
    return this.tasks.filter(t => t.status === this.activeFilter);
  },

  esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  },

  render() {
    const gridEl = document.getElementById("task-grid");
    if (!gridEl) return;

    const list = this.visibleTasks();

    if (list.length === 0) {
      const msg = this.tasks.length === 0
        ? "Belum ada tugas. Pengurus bisa menambahkan tugas baru di tombol &quot;Tambah Tugas Baru&quot;."
        : `Tidak ada tugas dengan status "${this.activeFilter}".`;
      gridEl.innerHTML = `<div class="empty-state">${msg}</div>`;
      return;
    }

    gridEl.innerHTML = list.map(task => `
      <div class="task-card${task.status === "Selesai" ? " task-done" : ""}">
        <div class="task-card-header">
          <span class="task-subject">${this.esc(task.subject)}</span>
          <span class="priority-tag priority-${this.esc(task.priority)}">Priority: ${this.esc(task.priority)}</span>
        </div>
        <h4 class="task-title">${this.esc(task.title)}</h4>
        <div class="task-note">📌 ${this.esc(task.note)}</div>
        <div class="task-footer">
          <span>Deadline: <strong>${this.esc(task.dueDate)}</strong></span>
          <label class="task-status-checkbox">
            <input type="checkbox" data-task-id="${this.esc(task.id)}" ${task.status === "Selesai" ? "checked" : ""}>
            <span style="font-weight: 700; color: ${task.status === "Selesai" ? "var(--accent-emerald)" : "var(--text-main)"};">
              ${task.status}
            </span>
          </label>
        </div>
      </div>
    `).join("");

    gridEl.querySelectorAll("input[data-task-id]").forEach(cb => {
      cb.addEventListener("change", () => this.toggleTask(cb.dataset.taskId));
    });
  },

  applyPerm() {
    let can = false;
    if (typeof AUTH !== "undefined" && AUTH.getCurrentUser) {
      const u = AUTH.getCurrentUser();
      can = !!(u && u.canEdit);
    }
    document.querySelectorAll(".admin-only").forEach(el => {
      el.classList.toggle("hidden-perm", !can);
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  __TASKS.init();
});
