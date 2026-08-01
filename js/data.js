/**
 * CLASSROOM DATA STORE (2020 MODERN CLASS HUB)
 * Data struktur kelas: Profil Pengurus, Siswa, Jadwal Pelajaran & Seragam, Tugas, Kas, Pengumuman, dan Galeri Foto.
 */

const CLASS_DATA = {
  info: {
    className: "XII MIPA 1",
    tagline: "The Future Leaders & Innovators Class of 2026",
    schoolName: "SMA NEGERI 1 UNGGULAN",
    academicYear: "2025/2026",
    motto: "Bersatu, Berprestasi, Berakhlak Mulia",
    logoUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=150&auto=format&fit=crop&q=80",
    bgHero: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&auto=format&fit=crop&q=80"
  },

  // 1. Jadwal Mapel & Baju Seragam Harian
  schedules: [
    {
      day: "Senin",
      uniform: "OSIS Lengkap (Putih Abu-abu + Dasi + Topi + Sabuk Black)",
      icon: "👔",
      subjects: [
        { time: "07:00 - 07:45", name: "Upacara Bendera", room: "Lap. Utama", teacher: "Tim Kesiswaan" },
        { time: "07:45 - 09:15", name: "Matematika Wajib", room: "Lab R.301", teacher: "Drs. Eko Prasetyo" },
        { time: "09:30 - 11:00", name: "Fisika", room: "R. XII MIPA 1", teacher: "Hj. Ratna Sari, M.Pd" },
        { time: "11:00 - 12:30", name: "Bahasa Indonesia", room: "R. XII MIPA 1", teacher: "Siti Rahmawati, S.Pd" },
        { time: "13:00 - 14:30", name: "Sejarah Indonesia", room: "R. XII MIPA 1", teacher: "Budi Utomo, M.Hum" }
      ]
    },
    {
      day: "Selasa",
      uniform: "Pramuka Lengkap (Coklat + Kacu + Baret/Kecak)",
      icon: "🏕️",
      subjects: [
        { time: "07:00 - 08:30", name: "Kimia", room: "Lab Kimia", teacher: "Dr. Irwan Firmansyah" },
        { time: "08:30 - 10:00", name: "Biologi", room: "Lab Bio", teacher: "Nurlaila, S.Si" },
        { time: "10:15 - 11:45", name: "Bahasa Inggris", room: "R. XII MIPA 1", teacher: "Mr. David Miller, M.A" },
        { time: "12:30 - 14:00", name: "Matematika Peminatan", room: "R. XII MIPA 1", teacher: "Drs. Eko Prasetyo" }
      ]
    },
    {
      day: "Rabu",
      uniform: "Batik Khas Sekolah & Celana/Rok Putih",
      icon: "🎨",
      subjects: [
        { time: "07:00 - 09:15", name: "Pendidikan Penjas / Olahraga", room: "Gedung Olahraga", teacher: "Rahmat Hidayat, S.Pd" },
        { time: "09:30 - 11:00", name: "Pendidikan Agama & Budi Pekerti", room: "R. XII MIPA 1", teacher: "Ust. Ahmad Fauzi, S.Ag" },
        { time: "11:00 - 12:30", name: "Seni Budaya", room: "Studio Seni", teacher: "Dewi Anggraini, S.Sn" },
        { time: "13:00 - 14:30", name: "Prakarya & Kewirausahaan", room: "R. XII MIPA 1", teacher: "Endang Suwarni, M.M" }
      ]
    },
    {
      day: "Kamis",
      uniform: "Seragam Khas / Batik Almamater Kelas",
      icon: "✨",
      subjects: [
        { time: "07:00 - 08:30", name: "PPKn (Pancasila)", room: "R. XII MIPA 1", teacher: "Drs. Tri Wahyudi" },
        { time: "08:30 - 10:00", name: "Fisika Lanjutan", room: "Lab Fisika", teacher: "Hj. Ratna Sari, M.Pd" },
        { time: "10:15 - 11:45", name: "Informatika / Pemrograman", room: "Lab Komputer 2", teacher: "Farhan Dev, S.Kom" },
        { time: "12:30 - 14:00", name: "Bahasa Jepang / Asing", room: "R. Bahasa", teacher: "Kenji Sensei" }
      ]
    },
    {
      day: "Jumat",
      uniform: "Busana Muslim Sekolah / Baju Imtaq & Olahraga Pagi",
      icon: "🕌",
      subjects: [
        { time: "07:00 - 08:00", name: "Jumat Bersih & Yasinan / Bimbingan", room: "Masjid / Kelas", teacher: "Wali Kelas" },
        { time: "08:00 - 09:30", name: "Biologi Praktikum", room: "Lab Biologi", teacher: "Nurlaila, S.Si" },
        { time: "09:45 - 11:15", name: "Bimbingan Konseling (BK)", room: "R. XII MIPA 1", teacher: "Dra. Maya Kartika" }
      ]
    }
  ],

  // 2. Profil Wali Kelas, Pengurus, Dev & Anggota
  members: [
    {
      id: "m0",
      name: "Drs. Budi Santoso, M.Pd",
      role: "Wali Kelas",
      roleCategory: "Wali Kelas",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
      quote: "Bercita-citalah setinggi langit, jika kau jatuh kau akan jatuh di antara bintang-bintang.",
      contact: "0812-3456-7890",
      instagram: "@budi_santoso_official",
      hobby: "Membaca & Research Pendidikan"
    },
    {
      id: "m1",
      name: "Arya Pratama",
      role: "Ketua Kelas",
      roleCategory: "Ketua",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
      quote: "Disiplin adalah jembatan antara cita-cita dan pencapaian.",
      contact: "0857-1122-3344",
      instagram: "@arya_pratama26",
      hobby: "Basket & Public Speaking"
    },
    {
      id: "m2",
      name: "Siti Nurhaliza",
      role: "Wakil Ketua Kelas",
      roleCategory: "Wakil",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
      quote: "Selalu berikan yang terbaik dalam setiap langkah kecil.",
      contact: "0858-9900-1122",
      instagram: "@sitinur_h",
      hobby: "Organisasi & Musik"
    },
    {
      id: "m3",
      name: "Nabila Putri",
      role: "Sekretaris 1",
      roleCategory: "Sekretaris",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
      quote: "Catatan yang rapi membuat pikiran lebih jernih.",
      contact: "0819-3344-5566",
      instagram: "@nabila_ptr",
      hobby: "Desain Grafis & Menulis"
    },
    {
      id: "m4",
      name: "Rizky Ramadhan",
      role: "Bendahara 1",
      roleCategory: "Bendahara",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      quote: "Jangan lupa bayar kas tepat waktu demi kedamaian kelas!",
      contact: "0813-8899-0011",
      instagram: "@rizky_rmd",
      hobby: "Akuntansi & Catur"
    },
    {
      id: "m5",
      name: "Farhan Dev",
      role: "Class Tech Lead & Developer",
      roleCategory: "Dev",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
      quote: "Turning coffee and code into sleek classroom solutions.",
      contact: "0896-1234-5678",
      instagram: "@farhan_devcode",
      hobby: "Coding, UI/UX & Robotics"
    },
    {
      id: "m6",
      name: "Aditya Kusuma",
      role: "Anggota (Seksi Olahraga)",
      roleCategory: "Member",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop&q=80",
      quote: "Tubuh yang sehat melahirkan pikiran yang kuat.",
      contact: "0821-4455-6677",
      instagram: "@aditya_ksm",
      hobby: "Futsal & Bulutangkis"
    },
    {
      id: "m7",
      name: "Anisa Rahma",
      role: "Anggota (Seksi Kebersihan)",
      roleCategory: "Member",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
      quote: "Kebersihan adalah sebagian dari iman dan kenyamanan belajar.",
      contact: "0852-7788-9900",
      instagram: "@anisa_rhm",
      hobby: "Tanaman & Decor"
    },
    {
      id: "m8",
      name: "Bagas Setiawan",
      role: "Anggota (Seksi Keamanan)",
      roleCategory: "Member",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
      quote: "Damai dan kondusif adalah kunci fokus meraih masa depan.",
      contact: "0878-1122-4455",
      instagram: "@bagas_stw",
      hobby: "Pencak Silat"
    },
    {
      id: "m9",
      name: "Cantika Melati",
      role: "Anggota (Seksi Kerohanian)",
      roleCategory: "Member",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
      quote: "Ilmu tanpa agama adalah buta, agama tanpa ilmu adalah lumpuh.",
      contact: "0895-6677-8899",
      instagram: "@cantika_m",
      hobby: "Seni Kaligrafi"
    }
  ],

  // 3. Tugas Pengingat (Homework & Assignment Reminder)
  initialTasks: [
    {
      id: "t1",
      subject: "Fisika",
      title: "Laporan Praktikum Gelombang Elektromagnetik",
      dueDate: "2026-08-05",
      priority: "Tinggi", // Tinggi, Sedang, Rendah
      status: "Belum", // Belum, Proses, Selesai
      note: "Diketik dan diprint HVS A4, dikumpul di meja Ibu Ratna sebelum jam 08:00.",
      assignedBy: "Sekretaris"
    },
    {
      id: "t2",
      subject: "Matematika Wajib",
      title: "Latihan Soal Uji Kompetensi Bab 3 (Halaman 112)",
      dueDate: "2026-08-06",
      priority: "Sedang",
      status: "Proses",
      note: "Kerjakan nomor 1-10 genap di buku tugas bergaris.",
      assignedBy: "Ketua Kelas"
    },
    {
      id: "t3",
      subject: "Kimia",
      title: "Tugas Kelompok Presentation Reaksi Redoks",
      dueDate: "2026-08-08",
      priority: "Tinggi",
      status: "Belum",
      note: "Buat PPT Canva minimal 10 slide per kelompok.",
      assignedBy: "Sekretaris"
    },
    {
      id: "t4",
      subject: "Bahasa Inggris",
      title: "Analytical Exposition Essay Writing",
      dueDate: "2026-08-10",
      priority: "Rendah",
      status: "Selesai",
      note: "Minimal 300 kata topik tentang Digital Literacy.",
      assignedBy: "Wali Kelas"
    }
  ],

  // 4. Kas Kelas (Financial Transparency)
  finance: {
    currentBalance: 1450000,
    monthlyTarget: 2000000,
    feePerStudentWeek: 5000,
    history: [
      { date: "2026-08-01", desc: "Pemasukan Kas Minggu I Agustus", amount: 120000, type: "in" },
      { date: "2026-07-28", desc: "Pembelian Spidol Boardmarker & Penghapus", amount: 35000, type: "out" },
      { date: "2026-07-25", desc: "Sumbangan Karangan Bunga Lomba", amount: 100000, type: "out" },
      { date: "2026-07-20", desc: "Pemasukan Kas Minggu IV Juli", amount: 150000, type: "in" }
    ]
  },

  // 5. Papan Pengumuman Kelas (Bulletin Board)
  announcements: [
    {
      id: "a1",
      title: "📢 Pengumpulan Uang Kas & Seragam Batik Baru",
      date: "2026-08-01",
      category: "Penting",
      content: "Diharapkan seluruh siswa melunasi kas sampai minggu ini dan mengambil ukuran batik di Bendahara."
    },
    {
      id: "a2",
      title: "🎉 Persiapan Pentas Seni & Classmeet Semester Ini",
      date: "2026-07-29",
      category: "Kegiatan",
      content: "Rapat pembentukan panitia internal XII MIPA 1 diadakan hari Jumat sehabis sholat Jumat di kelas."
    }
  ],

  // 6. Galeri Foto Momen Kelas (Memories)
  gallery: [
    {
      id: "g1",
      title: "Juara 1 Futsal Classmeet",
      category: "Olahraga",
      imageUrl: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=600&auto=format&fit=crop&q=80",
      caption: "Momen selebrasi kemenangan tim futsal kelas melawan XI IPS 2!"
    },
    {
      id: "g2",
      title: "Praktikum Biologi Lapangan",
      category: "Belajar",
      imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&auto=format&fit=crop&q=80",
      caption: "Penelitian ekosistem dan pengamatan jaringan tumbuhan."
    },
    {
      id: "g3",
      title: "Surprise Ulang Tahun Wali Kelas",
      category: "Event",
      imageUrl: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&auto=format&fit=crop&q=80",
      caption: "Kejutan kue dan kado spesial untuk Pak Budi Santoso tercinta."
    },
    {
      id: "g4",
      title: "Buka Puasa Bersama Kelas",
      category: "Kebersamaan",
      imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&auto=format&fit=crop&q=80",
      caption: "Kehangatan silaturahmi seluruh keluarga besar XII MIPA 1."
    }
  ]
};
