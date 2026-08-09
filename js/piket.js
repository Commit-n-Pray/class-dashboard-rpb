/**
 * JADWAL PIKET — Halaman piket kelas X-RPB
 * Penyimpanan memakai localStorage (situs statis tanpa backend).
 */
(function () {
  "use strict";

  const STORAGE_KEY = "xrpb_piket_v1";
  const PETUGAS = [
    "BOB ABYZAR",
    "CITRA LESTARI",
    "DIKA RAMADHAN",
    "EKA WULANDARI",
    "FAJAR NUGROHO",
    "GITA PERMATA",
    "HAFIZ ALFARIZI",
    "JOREL SAPUTRA",
    "RATHERRA AYU",
    "REMON PRATAMA",
  ];

  let schedules = [];
  let selected = new Set();
  let calCursor = new Date();
  calCursor.setDate(1);

  function load() {
    try {
      schedules = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
      schedules = [];
    }
    // Saring data rusak/tamper dari localStorage
    schedules = schedules.filter(
      (s) =>
        s &&
        typeof s.id !== "undefined" &&
        typeof s.date === "string" &&
        /^\d{4}-\d{2}-\d{2}$/.test(s.date) &&
        Array.isArray(s.petugas) &&
        s.petugas.length > 0 &&
        !Number.isNaN(toDateParts(s.date).getTime())
    );
  }

  function persist() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(schedules));
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function toDateParts(dateStr) {
    const parts = dateStr.split("-").map(Number);
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }

  function todayStr() {
    const t = new Date();
    const p = (n) => String(n).padStart(2, "0");
    return `${t.getFullYear()}-${p(t.getMonth() + 1)}-${p(t.getDate())}`;
  }

  /* ---------- Pilih petugas (pill toggle) ---------- */
  function renderPills() {
    const wrap = document.getElementById("petugas-pills");
    if (!wrap) return;
    wrap.innerHTML = PETUGAS.map(
      (name) =>
        `<button type="button" class="petugas-pill${selected.has(name) ? " selected" : ""}" data-name="${name}">${name}</button>`
    ).join("");
  }

  /* ---------- Kalender mini ---------- */
  function renderCalendar() {
    const el = document.getElementById("mini-calendar");
    const monthEl = document.getElementById("cal-month");
    if (!el) return;

    const year = calCursor.getFullYear();
    const month = calCursor.getMonth();
    if (monthEl) monthEl.textContent = calCursor.toLocaleDateString("id-ID", { month: "long", year: "numeric" });

    const startDow = new Date(year, month, 1).getDay(); // 0 = Minggu
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const offset = (startDow + 6) % 7; // kalender mulai dari Senin
    const today = todayStr();
    const schedDates = new Set(schedules.map((s) => s.date));
    const weekdays = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

    let html = weekdays.map((w) => `<div class="cal-weekday">${w}</div>`).join("");
    for (let i = 0; i < offset; i++) html += '<div class="cal-day other"></div>';
    for (let d = 1; d <= daysInMonth; d++) {
      const ds = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const cls = ["cal-day"];
      if (schedDates.has(ds)) cls.push("has-piket");
      if (ds === today) cls.push("today");
      html += `<div class="${cls.join(" ")}">${d}</div>`;
    }
    el.innerHTML = html;
  }

  /* ---------- Riwayat piket ---------- */
  function renderList() {
    const listEl = document.getElementById("piket-list");
    const countEl = document.getElementById("piket-count");
    if (!listEl) return;

    const sorted = schedules.slice().sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
    if (countEl) countEl.textContent = `${sorted.length} Jadwal`;

    if (!sorted.length) {
      listEl.innerHTML =
        '<div class="empty-state">Belum ada jadwal piket.<br>Gunakan form di atas untuk menambah petugas piket harian.</div>';
      return;
    }

    listEl.innerHTML = sorted
      .map((s) => {
        const dt = toDateParts(s.date);
        const dayNum = dt.getDate();
        const wd = dt.toLocaleDateString("id-ID", { weekday: "long" }).toUpperCase();
        const full = dt.toLocaleDateString("id-ID", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        });
        const names = s.petugas.map((n) => `<span class="piket-name">${n}</span>`).join("");
        const note = s.note ? `<div class="piket-note">📌 ${escapeHtml(s.note)}</div>` : "";
        return `
          <div class="piket-row">
            <div class="piket-date-box">
              <div class="d">${dayNum}</div>
              <div class="wd">${wd}, ${dayNum}</div>
            </div>
            <div class="piket-info">
              <div class="piket-date-full">${full}</div>
              <div class="piket-names">${names}</div>
              ${note}
            </div>
            <button type="button" class="btn-hapus admin-only hidden-perm" data-id="${s.id}">Hapus</button>
          </div>`;
      })
      .join("");
  }

  /* ---------- Sembunyikan/tampilkan kontrol admin ---------- */
  function applyPerm() {
    let can = false;
    try {
      // AUTH adalah const global (tidak menempel di window) — akses lewat lexical scope
      can = !!(typeof AUTH !== "undefined" && AUTH.getCurrentUser() && AUTH.getCurrentUser().canEdit);
    } catch (e) {
      can = false;
    }
    document.querySelectorAll(".admin-only").forEach((el) => {
      el.classList.toggle("hidden-perm", !can);
    });
  }

  /* ---------- Aksi ---------- */
  function addSchedule(ev) {
    ev.preventDefault();
    const dateEl = document.getElementById("piket-date");
    const noteEl = document.getElementById("piket-note");
    const date = dateEl ? dateEl.value : "";
    const note = noteEl ? noteEl.value.trim() : "";

    if (!date) {
      alert("Pilih tanggal dulu ya!");
      return;
    }
    if (selected.size === 0) {
      alert("Pilih minimal satu petugas piket!");
      return;
    }

    schedules.push({ id: date + "-" + Date.now(), date, note, petugas: [...selected] });
    persist();
    selected.clear();
    if (noteEl) noteEl.value = "";
    renderPills();
    renderCalendar();
    renderList();
    applyPerm();
  }

  function remove(id) {
    schedules = schedules.filter((s) => s.id !== id);
    persist();
    renderCalendar();
    renderList();
    applyPerm();
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    load();

    const dateEl = document.getElementById("piket-date");
    if (dateEl) dateEl.value = todayStr();

    const wrap = document.getElementById("petugas-pills");
    if (wrap) {
      wrap.addEventListener("click", (ev) => {
        const btn = ev.target.closest(".petugas-pill");
        if (!btn) return;
        const name = btn.dataset.name;
        if (selected.has(name)) selected.delete(name);
        else selected.add(name);
        renderPills();
      });
    }

    const form = document.getElementById("piket-form");
    if (form) form.addEventListener("submit", addSchedule);

    // Delegasi event untuk tombol Hapus (elemen dibuat dinamis)
    const listEl = document.getElementById("piket-list");
    if (listEl) {
      listEl.addEventListener("click", (ev) => {
        const btn = ev.target.closest(".btn-hapus");
        if (!btn) return;
        remove(btn.dataset.id);
      });
    }

    const prevBtn = document.getElementById("cal-prev");
    const nextBtn = document.getElementById("cal-next");
    if (prevBtn) prevBtn.addEventListener("click", () => { calCursor.setMonth(calCursor.getMonth() - 1); renderCalendar(); });
    if (nextBtn) nextBtn.addEventListener("click", () => { calCursor.setMonth(calCursor.getMonth() + 1); renderCalendar(); });

    renderPills();
    renderCalendar();
    renderList();
    applyPerm();
  });

})();
