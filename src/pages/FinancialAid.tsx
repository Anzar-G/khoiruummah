import { motion } from 'framer-motion';
import { HeartHandshake, CheckCircle } from 'lucide-react';

export default function FinancialAid() {
    return (
        <div className="flex flex-col gap-10 pb-20">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[400px] w-full overflow-hidden rounded-3xl">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80")' }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-4 font-display"
                    >
                        Bantuan Keuangan
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-200 max-w-2xl"
                    >
                        Kami percaya setiap anak berhak mendapatkan pendidikan terbaik.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="px-4 md:px-8 max-w-6xl mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="bg-brand-green/10 p-4 rounded-full w-fit mb-6">
                            <HeartHandshake className="h-8 w-8 text-brand-green" />
                        </div>
                        <h2 className="text-3xl font-bold text-neutral-800 dark:text-white mb-6">Program Beasiswa</h2>
                        <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                            Schola menawarkan berbagai program bantuan keuangan dan beasiswa untuk siswa berprestasi dan keluarga yang membutuhkan dukungan finansial.
                        </p>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-2">Beasiswa Prestasi</h3>
                                <p className="text-neutral-600 dark:text-neutral-400">Diberikan kepada siswa dengan pencapaian akademik atau non-akademik yang luar biasa.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-2">Bantuan Finansial</h3>
                                <p className="text-neutral-600 dark:text-neutral-400">Dukungan biaya pendidikan berdasarkan kondisi ekonomi keluarga.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-neutral-800 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-700 shadow-lg">
                        <h3 className="text-2xl font-bold text-neutral-800 dark:text-white mb-6">Syarat Pengajuan</h3>
                        <ul className="space-y-4">
                            {[
                                "Mengisi formulir pengajuan bantuan",
                                "Melampirkan bukti penghasilan orang tua",
                                "Surat rekomendasi dari sekolah sebelumnya",
                                "Portofolio prestasi (untuk beasiswa prestasi)",
                                "Wawancara dengan komite beasiswa"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="text-brand-purple h-5 w-5 flex-shrink-0 mt-1" />
                                    <span className="text-neutral-700 dark:text-neutral-200">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full mt-8 bg-brand-purple text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-purple/90 transition-colors">
                            Ajukan Sekarang
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
