"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Magang Umum di Perum Peruri - Pengembangan Aplikasi Perusahaan",
    company: "Bagian TI",
    period: "Agustus 2024 - Desember 2025",
    highlights: [
      "Pengembangan Sistem Informasi Manajemen Aset Terintegrasi untuk meningkatkan efisiensi operasional dan akuntabilitas inventaris di lingkungan Peruri.",
      "Terlibat dalam perencanaan dan pengembangan HMI & MES untuk proyek Smart Factory Uang Logam.",
      "Terlibat dalam perencanaan dan pengembangan HMI & MES untuk proyek Smart Factory SBU HSS Pita Cukai.",
      "Terlibat dalam proyek Validasi Barcode yang bertujuan meningkatkan akurasi dan keamanan proses pengiriman serta pengemasan uang kertas.",
      "Berkontribusi dalam pengembangan aplikasi PERURI Connect dan MONTAIN (Pemantauan Tagihan Pelanggan), termasuk pelaksanaan User Acceptance Testing (UAT), identifikasi masalah, dan koordinasi pengembangan fitur baru.",
      "Membantu pembuatan Notulensi Rapat (MoM), materi presentasi, video, desain visual untuk berbagai acara, serta pengolahan data menggunakan Excel.",
      "Mengikuti berbagai seminar, lokakarya, dan kompetisi di bidang Teknologi Informasi, DevOps, Business Intelligence, dan bidang terkait.",
      "Berpartisipasi aktif dalam rapat dan sesi berbagi bersama tim Pengembangan TI untuk koordinasi proyek dan inovasi teknologi.",
      "Bertanggung jawab membuat poster untuk kajian rutin hari Senin dan Rabu di Masjid Falatehan Peruri, menyiapkan kebutuhan live streaming, serta mengelola akun media sosial untuk publikasi dan dokumentasi kegiatan.",
      "Bertanggung jawab membuat formulir survei pada aplikasi Survei Peruri sesuai kebutuhan pengguna serta melakukan transfer pengetahuan terkait penggunaannya.",
    ],
  },
  {
    role: "Bisnis Thrift Online Zersbus.id - Pemilik",
    company: "Usaha Mandiri",
    period: "Desember 2022 - Maret 2025",
    highlights: [
      "Mengelola operasional harian toko thrift online, termasuk pengadaan barang, pengelolaan inventaris, dan pengemasan pesanan.",
      "Bertanggung jawab atas pemasaran dan promosi produk melalui media sosial.",
      "Menangani layanan pelanggan, termasuk pertanyaan, keluhan, dan pengembalian barang, dengan profesionalisme dan responsivitas.",
      "Menganalisis data penjualan untuk mengidentifikasi tren dan peluang pasar, serta menyusun strategi guna meningkatkan penjualan dan keuntungan.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        minHeight: "100vh",
        padding: "90px 24px 100px",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <h2
            style={{
              marginTop: 0,
              fontSize: "clamp(32px, 5vw, 56px)",
              lineHeight: 1,
              fontWeight: 800,
            }}
          >
            EXPERIENCE
          </h2>
        </motion.div>

        <div style={{ marginTop: 52, display: "grid", gap: 24 }}>
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.role}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className="experience-item"
              style={{
                display: "grid",
                gap: 30,
                padding: "28px 0",
                borderTop: "1px solid var(--border)",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 9, color: "var(--text-primary)" }}>
                  <Briefcase size={17} />
                  <h3 style={{ fontSize: 18, lineHeight: 1.35, fontWeight: 700 }}>
                    {experience.role}
                  </h3>
                </div>
                <p style={{ marginTop: 12, color: "var(--text-secondary)", fontSize: 14 }}>
                  {experience.company}
                </p>
                <p
                  style={{
                    marginTop: 18,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: "var(--text-muted)",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 12,
                  }}
                >
                  <Calendar size={14} />
                  {experience.period}
                </p>
              </div>

              <ul
                style={{
                  paddingLeft: 19,
                  color: "var(--text-secondary)",
                  fontSize: 14,
                  lineHeight: 1.75,
                }}
              >
                {experience.highlights.map((highlight) => (
                  <li key={highlight} style={{ paddingLeft: 5, marginBottom: 9 }}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
