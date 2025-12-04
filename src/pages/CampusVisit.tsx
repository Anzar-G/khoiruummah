import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock } from 'lucide-react';

export default function CampusVisit() {
    return (
        <div className="flex flex-col gap-10 pb-20">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[400px] w-full overflow-hidden rounded-3xl">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80")' }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-4 font-display"
                    >
                        Kunjungan Kampus
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-200 max-w-2xl"
                    >
                        Rasakan langsung suasana belajar di Schola.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="px-4 md:px-8 max-w-6xl mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-neutral-800 dark:text-white mb-6">Jadwalkan Tur Anda</h2>
                        <p className="text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
                            Kami mengundang calon siswa dan orang tua untuk mengunjungi kampus kami. Tur kampus adalah kesempatan terbaik untuk melihat fasilitas kami, bertemu dengan staf pengajar, dan merasakan komunitas Schola.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-brand-purple/10 p-3 rounded-xl">
                                    <Clock className="h-6 w-6 text-brand-purple" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-neutral-800 dark:text-white">Waktu Tur</h3>
                                    <p className="text-neutral-600 dark:text-neutral-400">Senin - Jumat: 09.00 - 15.00 WIB</p>
                                    <p className="text-neutral-600 dark:text-neutral-400">Sabtu: 09.00 - 12.00 WIB (Dengan Perjanjian)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-brand-green/10 p-3 rounded-xl">
                                    <MapPin className="h-6 w-6 text-brand-green" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-neutral-800 dark:text-white">Lokasi</h3>
                                    <p className="text-neutral-600 dark:text-neutral-400">Jl. Pendidikan No. 123, Jakarta Selatan</p>
                                    <a href="#" className="text-brand-purple hover:underline text-sm font-medium">Lihat di Google Maps</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-neutral-800 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-700 shadow-lg">
                        <h3 className="text-2xl font-bold text-neutral-800 dark:text-white mb-6">Formulir Kunjungan</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Nama Depan" className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 border-none focus:ring-2 focus:ring-brand-purple" />
                                <input type="text" placeholder="Nama Belakang" className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 border-none focus:ring-2 focus:ring-brand-purple" />
                            </div>
                            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 border-none focus:ring-2 focus:ring-brand-purple" />
                            <input type="tel" placeholder="Nomor Telepon" className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 border-none focus:ring-2 focus:ring-brand-purple" />
                            <div className="relative">
                                <Calendar className="absolute left-4 top-3.5 h-5 w-5 text-neutral-400" />
                                <input type="date" className="w-full pl-12 pr-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 border-none focus:ring-2 focus:ring-brand-purple" />
                            </div>
                            <button type="button" className="w-full bg-brand-purple text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-purple/90 transition-colors">
                                Kirim Permintaan
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
