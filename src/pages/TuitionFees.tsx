import { motion } from 'framer-motion';
import { CheckCircle, Download } from 'lucide-react';

export default function TuitionFees() {
    return (
        <div className="flex flex-col gap-10 pb-20">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[400px] w-full overflow-hidden rounded-3xl">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80")' }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-4 font-display"
                    >
                        Biaya & SPP
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-200 max-w-2xl"
                    >
                        Investasi untuk masa depan pendidikan putra-putri Anda.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="px-4 md:px-8 max-w-6xl mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-neutral-800 dark:text-white mb-6">Rincian Biaya</h2>
                        <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                            Kami berkomitmen untuk memberikan transparansi penuh mengenai struktur biaya pendidikan kami. Biaya ini mencakup seluruh fasilitas akademik, kegiatan ekstrakurikuler, dan dukungan pengembangan siswa.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Biaya Pendaftaran (Sekali bayar)",
                                "Biaya Pengembangan Bangunan (Tahunan)",
                                "SPP Bulanan",
                                "Biaya Buku & Seragam",
                                "Biaya Kegiatan & Ekskursi"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <CheckCircle className="text-brand-green h-5 w-5 flex-shrink-0" />
                                    <span className="text-neutral-700 dark:text-neutral-200">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-brand-purple/5 p-8 rounded-3xl border border-brand-purple/10">
                        <h3 className="text-2xl font-bold text-brand-purple mb-4">Unduh Brosur Biaya</h3>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                            Dapatkan rincian lengkap mengenai biaya pendidikan untuk tahun ajaran 2025/2026.
                        </p>
                        <button className="flex items-center gap-2 bg-brand-purple text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-purple/90 transition-colors">
                            <Download className="h-5 w-5" />
                            Unduh PDF
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
