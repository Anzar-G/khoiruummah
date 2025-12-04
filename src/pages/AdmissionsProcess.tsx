import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Phone, Mail, ArrowRight, FileText } from 'lucide-react';

export default function AdmissionsProcess() {
    return (
        <div className="flex flex-col gap-10 pb-20">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[400px] w-full overflow-hidden rounded-3xl">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80")' }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-4 font-display"
                    >
                        Proses Pendaftaran
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-200 max-w-2xl"
                    >
                        Panduan langkah demi langkah untuk bergabung dengan komunitas Schola.
                    </motion.p>
                </div>
            </section>

            {/* Introduction */}
            <section className="px-4 md:px-8 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-neutral-800 dark:text-white mb-6">Bergabunglah Bersama Kami</h2>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-lg">
                    Kami menyambut siswa-siswi berbakat dari berbagai latar belakang. Proses seleksi kami dirancang untuk mengenal potensi akademik dan karakter setiap calon siswa secara menyeluruh.
                </p>
            </section>

            {/* Steps Section */}
            <section className="px-4 md:px-8 max-w-6xl mx-auto w-full">
                <div className="grid gap-8">
                    {[
                        {
                            title: "1. Pendaftaran Online",
                            desc: "Isi formulir pendaftaran online melalui website kami. Pastikan data yang dimasukkan lengkap dan benar.",
                            icon: <FileText className="h-6 w-6 text-white" />
                        },
                        {
                            title: "2. Penyerahan Dokumen",
                            desc: "Unggah dokumen yang diperlukan seperti akta kelahiran, kartu keluarga, dan rapor sekolah sebelumnya.",
                            icon: <FileText className="h-6 w-6 text-white" />
                        },
                        {
                            title: "3. Pembayaran Biaya Pendaftaran",
                            desc: "Lakukan pembayaran biaya pendaftaran sesuai dengan petunjuk yang dikirimkan ke email Anda.",
                            icon: <FileText className="h-6 w-6 text-white" />
                        },
                        {
                            title: "4. Tes Seleksi & Wawancara",
                            desc: "Calon siswa akan mengikuti tes potensi akademik dan wawancara. Orang tua juga akan diwawancara.",
                            icon: <FileText className="h-6 w-6 text-white" />
                        },
                        {
                            title: "5. Pengumuman Hasil",
                            desc: "Hasil seleksi akan diumumkan melalui email dan portal pendaftaran dalam waktu 7 hari kerja.",
                            icon: <FileText className="h-6 w-6 text-white" />
                        },
                        {
                            title: "6. Daftar Ulang",
                            desc: "Siswa yang diterima wajib melakukan daftar ulang dan pembayaran biaya masuk.",
                            icon: <FileText className="h-6 w-6 text-white" />
                        },
                        {
                            title: "7. Orientasi Siswa Baru",
                            desc: "Siswa baru wajib mengikuti kegiatan orientasi untuk pengenalan lingkungan sekolah.",
                            icon: <FileText className="h-6 w-6 text-white" />
                        }
                    ].map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex gap-6 items-start bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="bg-brand-purple p-3 rounded-xl flex-shrink-0">
                                {step.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-2">{step.title}</h3>
                                <p className="text-neutral-600 dark:text-neutral-400">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Required Documents */}
            <section className="bg-neutral-50 dark:bg-neutral-800/50 py-16">
                <div className="px-4 md:px-8 max-w-6xl mx-auto w-full">
                    <h2 className="text-3xl font-bold text-neutral-800 dark:text-white mb-10 text-center">Dokumen yang Diperlukan</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Fotokopi Akta Kelahiran",
                            "Fotokopi Kartu Keluarga",
                            "Pas Foto Terbaru (3x4)",
                            "Rapor 2 Tahun Terakhir",
                            "Surat Keterangan Sehat",
                            "Surat Pindah (Jika Pindahan)"
                        ].map((doc, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-white dark:bg-neutral-800 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
                                <CheckCircle className="text-brand-green h-5 w-5 flex-shrink-0" />
                                <span className="text-neutral-700 dark:text-neutral-200 font-medium">{doc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Important Dates */}
            <section className="px-4 md:px-8 max-w-6xl mx-auto w-full">
                <h2 className="text-3xl font-bold text-neutral-800 dark:text-white mb-10 text-center">Tanggal Penting</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Gelombang 1", date: "1 Sep - 30 Nov", status: "Dibuka" },
                        { title: "Gelombang 2", date: "1 Des - 28 Feb", status: "Segera" },
                        { title: "Gelombang 3", date: "1 Mar - 31 Mei", status: "Segera" }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 text-center">
                            <Calendar className="h-8 w-8 text-brand-purple mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-2">{item.title}</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-4">{item.date}</p>
                            <span className="inline-block px-4 py-1 rounded-full bg-brand-green/10 text-brand-green font-semibold text-sm">
                                {item.status}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact & CTA */}
            <section className="px-4 md:px-8 max-w-4xl mx-auto w-full text-center">
                <div className="bg-brand-purple text-white p-10 rounded-3xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6">Butuh Bantuan?</h2>
                        <p className="text-white/90 mb-8 text-lg">
                            Tim penerimaan kami siap membantu menjawab pertanyaan Anda seputar proses pendaftaran.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
                            <div className="flex items-center justify-center gap-2">
                                <Phone className="h-5 w-5" />
                                <span>+62 21 1234 5678</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <Mail className="h-5 w-5" />
                                <span>admissions@schola.sch.id</span>
                            </div>
                        </div>
                        <button className="bg-white text-brand-purple px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                            Mulai Pendaftaran
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
