"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Founder & Strategist",
    company: "Astralise Digital Solution",
    period: "April 2026 - Sekarang",
    highlights: [
      "Strategi Produk & Analisis Kebutuhan: Mentransformasikan kebutuhan bisnis klien menjadi arsitektur solusi digital yang terukur (scalable).",
      "Pengembangan Full-Stack & SDLC: Mengelola seluruh siklus hidup pengembangan perangkat lunak (Software Development Life Cycle), mulai dari perancangan basis data, API, hingga antarmuka web dan mobile.",
      "Desain UI/UX & Berbasis Pengguna: Merancang antarmuka visual yang intuitif dan estetik untuk memastikan pengalaman pengguna (user experience) yang optimal.",
      "Tata Kelola Proyek & Pemeliharaan Sistem: Mengawasi timeline proyek, mengelola komunikasi dengan klien, serta menjaga keandalan sistem dan pemeliharaan pasca-rilis.",
    ],
  },
  {
    role: "Enterprise Application Development Intern",
    company: "Perum Peruri",
    period: "Agustus 2024 - Desember 2025",
    highlights: [
      "Berperan dalam pengembangan Sistem Informasi Manajemen Aset Terintegrasi untuk meningkatkan efisiensi operasional dan akuntabilitas inventaris perusahaan.",
      "Berkontribusi dalam perencanaan dan pengembangan HMI & MES pada proyek Smart Factory Uang Logam serta Smart Factory SBU HSS Pita Cukai.",
      "Terlibat dalam proyek Barcode Validation untuk meningkatkan akurasi dan keamanan pada proses pengemasan dan pengiriman uang kertas.",
      "Memberikan layanan IT Support & Helpdesk untuk e-Meterai Peruri, menangani troubleshooting, serta membantu kebutuhan operasional user dan klien.",
      "Berkontribusi dalam pengembangan aplikasi PERURI Connect dan MONTAIN (Customer Bill Monitoring), mencakup UAT, identifikasi isu, dan koordinasi fitur baru.",
      "Mengelola pembuatan formulir survei digital pada aplikasi Peruri Survey serta melakukan knowledge transfer terkait penggunaannya.",
      "Membantu pembuatan Minutes of Meeting (MoM), materi presentasi, desain visual, konten video, serta pengolahan data menggunakan Excel.",
      "Mengelola kebutuhan publikasi Masjid Falatehan Peruri, meliputi poster kajian rutin, persiapan live streaming, dan pengelolaan akun media sosial.",
      "Mengikuti berbagai seminar, workshop, dan kompetisi di bidang Teknologi Informasi, DevOps, Business Intelligence, dan domain terkait lainnya.",
    ],
  },
  {
    role: "Business Owner",
    company: "Thrift Store Online Zersbus.id",
    period: "Desember 2022 - Maret 2025",
    highlights: [
      "Mengelola operasional harian toko thrift online, mulai dari pencarian produk (sourcing), manajemen inventaris, hingga pengemasan pesanan.",
      "Bertanggung jawab penuh atas strategi pemasaran, promosi, dan branding produk melalui media sosial.",
      "Menangani layanan pelanggan secara profesional dan responsif, termasuk pertanyaan, keluhan, dan proses pengembalian barang.",
      "Menganalisis data penjualan secara berkala untuk mengidentifikasi tren pasar, peluang bisnis, serta merumuskan strategi untuk meningkatkan omzet dan keuntungan.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="experience-section"
    >
      <div className="experience-container">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="experience-heading">
            <span className="section-eyebrow">CAREER JOURNEY</span>
            <h2>Experience</h2>
          </div>
        </motion.div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.role}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className="experience-item"
            >
              <div className="experience-meta">
                <div className="experience-role">
                  <Briefcase size={17} />
                  <h3>{experience.role}</h3>
                </div>
                <p className="experience-company">{experience.company}</p>
                <p className="experience-period">
                  <Calendar size={14} />
                  {experience.period}
                </p>
              </div>

              <ul className="experience-highlights">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>
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
