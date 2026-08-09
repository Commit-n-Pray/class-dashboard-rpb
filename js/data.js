/**
 * CLASSROOM DATA STORE (2020 MODERN CLASS HUB)
 * Data struktur kelas: Profil Pengurus, Siswa, Jadwal Pelajaran & Seragam,
 * Tugas, Kas, Pengumuman, dan Galeri Foto.
 */

const CLASS_DATA = {
  info: {
    className: "X-RPB | SKARIGA",
    tagline: "Crafting Code. Creating Impact.",
    schoolName: "SMKS PGRI 3 Malang",
    academicYear: "2026/2029",
    motto: "SUCCESS BY DISCIPLINE",
    logoUrl:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=150&auto=format&fit=crop&q=80",
    bgHero:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&auto=format&fit=crop&q=80",
  },

  // 1. Jadwal Mapel & Baju Seragam Harian
  schedules: [
    {
      day: "Senin",
      uniform: "Wearpack | Praktik (Lab)",
      icon: "👔",
      subjects: [
        {
          time: "07:30 - 08:10",
          name: "Dasar Program Keahlian - Pengembangan Perangkat Lunak dan Gim",
          room: "Lab. Oracle",
          teacher: "Venny Meida Hersianty, S. Tr.Kom",
        },
        {
          time: "08:10 - 08:50",
          name: "Dasar Program Keahlian - Pengembangan Perangkat Lunak dan Gim",
          room: "Lab. Oracle",
          teacher: "Venny Meida Hersianty, S. Tr.Kom",
        },
        {
          time: "08:50 - 09:30",
          name: "Dasar Program Keahlian - Pengembangan Perangkat Lunak dan Gim",
          room: "Lab. Oracle",
          teacher: "Venny Meida Hersianty, S. Tr.Kom",
        },
        {
          time: "09:50 - 10:30",
          name: "Dasar Program Keahlian - Pengembangan Perangkat Lunak dan Gim",
          room: "Lab. Oracle",
          teacher: "Venny Meida Hersianty, S. Tr.Kom",
        },
        {
          time: "10:30 - 11:10",
          name: "Dasar Program Keahlian - Pengembangan Perangkat Lunak dan Gim",
          room: "Lab. Oracle",
          teacher: "Venny Meida Hersianty, S. Tr.Kom",
        },
        {
          time: "10:10 - 12:00",
          name: "Dasar Program Keahlian - Pengembangan Perangkat Lunak dan Gim",
          room: "Lab. Oracle",
          teacher: "Venny Meida Hersianty, S. Tr.Kom",
        },
        {
          time: "12:35 - 13:15",
          name: "Dasar Program Keahlian - Pengembangan Perangkat Lunak dan Gim",
          room: "Lab. Oracle",
          teacher: "Venny Meida Hersianty, S. Tr.Kom",
        },
        {
          time: "13:15 - 13:55",
          name: "Dasar Program Keahlian - Pengembangan Perangkat Lunak dan Gim",
          room: "Lab. Oracle",
          teacher: "Venny Meida Hersianty, S. Tr.Kom",
        },
        {
          time: "13:55 - 14:35",
          name: "Dasar Program Keahlian - Pengembangan Perangkat Lunak dan Gim",
          room: "Lab. Oracle",
          teacher: "Venny Meida Hersianty, S. Tr.Kom",
        },
        {
          time: "14:35 - 15:15",
          name: "Dasar Program Keahlian - Pengembangan Perangkat Lunak dan Gim",
          room: "Lab. Oracle",
          teacher: "Venny Meida Hersianty, S. Tr.Kom",
        },
      ],
    },

    {
      day: "Selasa",
      uniform: "Seragam Putih Biru",
      icon: "🏕️",
      subjects: [
        {
          time: "07:30 - 08:10",
          name: "Bahasa Inggris",
          room: "B. 3.9",
          teacher: "Erna Susilowati, S.Pd",
        },
        {
          time: "08:10 - 08:50",
          name: "Bahasa Inggris",
          room: "B. 3.9",
          teacher: "Erna Susilowati, S.Pd",
        },
        {
          time: "08:50 - 09:30",
          name: "Bahasa Inggris",
          room: "B. 3.9",
          teacher: "Erna Susilowati, S.Pd",
        },
        {
          time: "09:50 - 10:30",
          name: "Bahasa Inggris",
          room: "B. 3.9",
          teacher: "Erna Susilowati, S.Pd",
        },
        {
          time: "10:30 - 11:10",
          name: "Matematika",
          room: "B. 3.9",
          teacher: "Febriana Fathonah, S. Pd",
        },
        {
          time: "10:10 - 12:00",
          name: "Matematika",
          room: "B. 3.9",
          teacher: "Febriana Fathonah, S. Pd",
        },
        {
          time: "12:35 - 13:15",
          name: "Matematika",
          room: "B. 3.9",
          teacher: "Febriana Fathonah, S. Pd",
        },
        {
          time: "13:15 - 13:55",
          name: "Matematika",
          room: "B. 3.9",
          teacher: "Febriana Fathonah, S. Pd",
        },
        {
          time: "13:55 - 14:35",
          name: "Seni",
          room: "B. 3.9",
          teacher: "Hiannanta, S.Pd",
        },
        {
          time: "14:35 - 15:15",
          name: "Seni",
          room: "B. 3.9",
          teacher: "Hiannanta, S.Pd",
        },
      ],
    },

    {
      day: "Rabu",
      uniform: "Pramuka / Seragam Pramuka",
      icon: "🎨",
      subjects: [
        {
          time: "07:30 - 08:10",
          name: "Informatika",
          room: "Lab. Oracle",
          teacher: "Erna Susilowati, S.Pd",
        },
        {
          time: "08:10 - 08:50",
          name: "Informatika",
          room: "Lab. Oracle",
          teacher: "Erna Susilowati, S.Pd",
        },
        {
          time: "08:50 - 09:30",
          name: "Informatika",
          room: "Lab. Oracle",
          teacher: "Erna Susilowati, S.Pd",
        },
        {
          time: "09:50 - 10:30",
          name: "Informatika",
          room: "Lab. Oracle",
          teacher: "Erna Susilowati, S.Pd",
        },
        {
          time: "10:30 - 11:10",
          name: "Sejarah",
          room: "B. 3.9",
          teacher: "Chrisnanto, S. Pd",
        },
        {
          time: "10:10 - 12:00",
          name: "Sejarah",
          room: "B. 3.9",
          teacher: "Chrisnanto, S. Pd",
        },
        {
          time: "12:35 - 13:15",
          name: "Projek Ilmu Pengetahuan Alam Dan Sosial",
          room: "B. 3.9",
          teacher: "Masykuri Anwar, S. Si",
        },
        {
          time: "13:15 - 13:55",
          name: "Projek Ilmu Pengetahuan Alam Dan Sosial",
          room: "B. 3.9",
          teacher: "Masykuri Anwar, S. Si",
        },
        {
          time: "13:55 - 14:35",
          name: "Projek Ilmu Pengetahuan Alam Dan Sosial",
          room: "B. 3.9",
          teacher: "Masykuri Anwar, S. Si",
        },
        {
          time: "14:35 - 15:15",
          name: "Projek Ilmu Pengetahuan Alam Dan Sosial",
          room: "B. 3.9",
          teacher: "Masykuri Anwar, S. Si",
        },
      ],
    },

    {
      day: "Kamis",
      uniform: "Wearpack | Praktik (Lab)",
      icon: "✨",
      subjects: [
        {
          time: "07:30 - 08:10",
          name: "Koding dan Kecerdasan Artifisial",
          room: "Lab. Oracle",
          teacher: "Yanuar Setyoningsih, S.Pd",
        },
        {
          time: "08:10 - 08:50",
          name: "Koding dan Kecerdasan Artifisial",
          room: "Lab. Oracle",
          teacher: "Yanuar Setyoningsih, S.Pd",
        },
        {
          time: "08:50 - 09:30",
          name: "Dasar Program Keahlian - Pengembangan Perangkat Lunak dan Gim",
          room: "Lab. Oracle",
          teacher: "Venny Meida Hersianty, S. Tr.Kom",
        },
        {
          time: "09:50 - 10:30",
          name: "Dasar Program Keahlian - Pengembangan Perangkat Lunak dan Gim",
          room: "Lab. Oracle",
          teacher: "Venny Meida Hersianty, S. Tr.Kom",
        },
        {
          time: "10:30 - 11:10",
          name: "Dasar Program Keahlian - Pengembangan Perangkat Lunak dan Gim",
          room: "Lab. Oracle",
          teacher: "Venny Meida Hersianty, S. Tr.Kom",
        },
        {
          time: "10:10 - 12:00",
          name: "Bahasa Inggris & Bahasa Indonesia",
          room: "B. 3.9",
          teacher: "Erna Susilowati, S.Pd",
        },
        {
          time: "12:35 - 13:15",
          name: "Bahasa Inggris & Bahasa Indonesia",
          room: "B. 3.9",
          teacher: "Erna Susilowati, S.Pd",
        },
        {
          time: "13:15 - 13:55",
          name: "Bahasa Inggris & Bahasa Indonesia",
          room: "B. 3.9",
          teacher: "Erna Susilowati, S.Pd",
        },
        {
          time: "13:55 - 14:35",
          name: "Bahasa Inggris & Bahasa Indonesia",
          room: "B. 3.9",
          teacher: "Erna Susilowati, S.Pd",
        },
        {
          time: "14:35 - 15:15",
          name: "Bahasa Inggris & Bahasa Indonesia",
          room: "B. 3.9",
          teacher: "Erna Susilowati, S.Pd",
        },
      ],
    },

    {
      day: "Jumat",
      uniform: "Seragam Batik Kelas",
      icon: "🎭",
      subjects: [
        {
          time: "07:30 - 08:10",
          name: "Pendidikan Agama Islam / Kristen / Katolik",
          room: "B. 3.9",
          teacher: "M. Yuri Zain, S.Pd.I",
        },
        {
          time: "08:10 - 08:50",
          name: "Pendidikan Agama Islam / Kristen / Katolik",
          room: "B. 3.9",
          teacher: "M. Yuri Zain, S.Pd.I",
        },
        {
          time: "08:50 - 09:30",
          name: "Dasar Program Keahlian - Pengembangan Perangkat Lunak dan Gim",
          room: "Lab. Oracle",
          teacher: "Venny Meida Hersianty, S. Tr.Kom",
        },
        {
          time: "09:50 - 10:30",
          name: "Dasar Program Keahlian - Pengembangan Perangkat Lunak dan Gim",
          room: "Lab. Oracle",
          teacher: "Venny Meida Hersianty, S. Tr.Kom",
        },
        {
          time: "10:30 - 11:10",
          name: "Dasar Program Keahlian - Pengembangan Perangkat Lunak dan Gim",
          room: "Lab. Oracle",
          teacher: "Venny Meida Hersianty, S. Tr.Kom",
        },
        {
          time: "10:10 - 12:00",
          name: "Koding dan Kecerdasan Artifisial",
          room: "Lab. Oracle",
          teacher: "Yanuar Setyoningsih, S.Pd",
        },
        {
          time: "12:35 - 13:15",
          name: "Koding dan Kecerdasan Artifisial",
          room: "Lab. Oracle",
          teacher: "Yanuar Setyoningsih, S.Pd",
        },
        {
          time: "13:15 - 13:55",
          name: "Koding dan Kecerdasan Artifisial",
          room: "Lab. Oracle",
          teacher: "Yanuar Setyoningsih, S.Pd",
        },
        {
          time: "13:55 - 14:35",
          name: "Koding dan Kecerdasan Artifisial",
          room: "Lab. Oracle",
          teacher: "Yanuar Setyoningsih, S.Pd",
        },
        {
          time: "14:35 - 15:15",
          name: "Koding dan Kecerdasan Artifisial",
          room: "Lab. Oracle",
          teacher: "Yanuar Setyoningsih, S.Pd",
        },
      ],
    },
  ],

  // 2. Data Anggota Kelas & Organisasi
  members: [
    {
      id: "m0",
      name: "Budi Santoso",
      role: "Wali Kelas",
      roleCategory: "Guru",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      quote:
        "Bercita-citalah setinggi langit, jika kau jatuh kau akan jatuh di antara bintang-bintang.",
      contact: "0812-3456-7890",
      instagram: "@budi_santoso_official",
      hobby: "Membaca & Research Pendidikan",
    },
    {
      id: "m1",
      name: "Arya Pratama",
      role: "Ketua Kelas",
      roleCategory: "Ketua",
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
      quote: "Disiplin adalah jembatan antara cita-cita dan pencapaian.",
      contact: "0857-1122-3344",
      instagram: "@arya_pratama26",
      hobby: "Basket & Public Speaking",
    },
    {
      id: "m2",
      name: "Siti Nurhaliza",
      role: "Wakil Ketua Kelas",
      roleCategory: "Wakil",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
      quote: "Selalu berikan yang terbaik dalam setiap langkah kecil.",
      contact: "0858-9900-1122",
      instagram: "@sitinur_h",
      hobby: "Organisasi & Musik",
    },
    {
      id: "m3",
      name: "Nabila Putri",
      role: "Sekretaris 1",
      roleCategory: "Sekretaris
