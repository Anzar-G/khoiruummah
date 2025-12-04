import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        question: "Kapan pendaftaran siswa baru dibuka?",
        answer: "Pendaftaran siswa baru dibuka mulai bulan September setiap tahunnya untuk tahun ajaran berikutnya. Kami menyarankan untuk mendaftar lebih awal karena kuota terbatas."
    },
    {
        question: "Apakah ada tes masuk?",
        answer: "Ya, calon siswa akan mengikuti tes potensi akademik dan wawancara. Untuk jenjang TK dan SD kelas awal, tes lebih difokuskan pada observasi kesiapan belajar."
    },
    {
        question: "Berapa rasio guru dan murid di kelas?",
        answer: "Kami menjaga rasio guru dan murid yang ideal, yaitu 1:15 untuk TK dan 1:20 untuk SD hingga SMA, untuk memastikan setiap siswa mendapatkan perhatian yang cukup."
    },
    {
        question: "Apakah sekolah menyediakan layanan antar-jemput?",
        answer: "Ya, kami bekerja sama dengan penyedia layanan transportasi sekolah terpercaya yang melayani berbagai rute di sekitar area sekolah."
    },
    {
        question: "Apakah ada program ekstrakurikuler?",
        answer: "Tentu saja. Kami menawarkan lebih dari 20 kegiatan ekstrakurikuler mulai dari olahraga, seni, musik, hingga klub sains dan teknologi."
    }
];

export default function AdmissionsFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="flex flex-col gap-10 pb-20">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[400px] w-full overflow-hidden rounded-3xl">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80")' }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-4 font-display"
                    >
                        FAQ
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-200 max-w-2xl"
                    >
                        Pertanyaan yang sering diajukan seputar pendaftaran.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="px-4 md:px-8 max-w-4xl mx-auto w-full">
                <div className="flex flex-col gap-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors"
                            >
                                <span className="font-bold text-lg text-neutral-800 dark:text-white">{faq.question}</span>
                                <Plus
                                    className={`h-5 w-5 text-neutral-500 transition-transform duration-300 ${openIndex === idx ? 'rotate-45' : ''}`}
                                />
                            </button>
                            <motion.div
                                initial={false}
                                animate={{ height: openIndex === idx ? 'auto' : 0 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-neutral-100 dark:border-neutral-700/50">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4">Masih punya pertanyaan lain?</p>
                    <button className="bg-brand-purple text-white px-8 py-3 rounded-full font-bold hover:bg-brand-purple/90 transition-colors">
                        Hubungi Kami
                    </button>
                </div>
            </section>
        </div>
    );
}
