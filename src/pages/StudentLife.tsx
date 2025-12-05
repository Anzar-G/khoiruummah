import { Link } from 'react-router-dom';
import { TestimonialCarousel } from '../components/TestimonialCarousel';

export default function StudentLife() {
    // Data for Student Voices (Testimonials)
    const studentVoices = [
        {
            id: 1,
            quote: "Saya sangat senang bisa menghafal Al-Qur'an di sini. Guru-gurunya sabar dan teman-temannya baik.",
            name: "Ahmad Fatih",
            role: "Kelas 5 | Hafiz 2 Juz",
            avatar: "https://ui-avatars.com/api/?name=Ahmad+Fatih&background=random"
        },
        {
            id: 2,
            quote: "Ekstrakurikuler memanah adalah favorit saya! Saya belajar fokus dan disiplin.",
            name: "Zahra Amira",
            role: "Kelas 4 | Klub Memanah",
            avatar: "https://ui-avatars.com/api/?name=Zahra+Amira&background=random"
        },
        {
            id: 3,
            quote: "Kegiatan Mukhayam setiap tahun sangat seru. Kami belajar mandiri dan kerjasama tim.",
            name: "Ibrahim Khalid",
            role: "Kelas 6 | Ketua Regu Pramuka",
            avatar: "https://ui-avatars.com/api/?name=Ibrahim+Khalid&background=random"
        }
    ];

    return (
        <div className="w-full font-display text-dark-gray">
            {/* Hero Section */}
            <section
                className="relative flex min-h-[300px] flex-col justify-end bg-cover bg-center p-6 text-white md:min-h-[450px] md:p-12"
                style={{
                    backgroundImage:
                        'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 100%), url("https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=2070&auto=format&fit=crop")',
                }}
            >
                <div className="absolute left-0 top-0 w-full p-6 md:p-8">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Link className="hover:underline" to="/">
                            Beranda
                        </Link>
                        <span className="text-brand-green">/</span>
                        <span className="font-semibold text-white">Kehidupan Santri</span>
                    </div>
                </div>
                <div className="z-10 max-w-4xl">
                    <h1 className="text-3xl font-bold leading-tight md:text-5xl">
                        Kehidupan Santri SD Khoiru Ummah
                    </h1>
                    <p className="mt-2 text-base text-gray-200 md:text-xl">
                        Membentuk karakter Islami melalui kegiatan yang bermanfaat dan menyenangkan.
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="relative z-20 -mt-10 px-4 pb-16 md:-mt-20 md:px-8 lg:px-16">
                <div className="mx-auto max-w-7xl rounded-2xl bg-white p-6 shadow-xl md:p-12 lg:p-16">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-2xl font-bold text-brand-purple md:text-3xl">
                                Kegiatan Santri yang Beragam
                            </h2>
                            <p className="mb-4 leading-relaxed text-gray-600">
                                Di SD Khoiru Ummah, pembelajaran tidak hanya terjadi di dalam kelas. Kami percaya bahwa pengembangan karakter dan keterampilan hidup sama pentingnya dengan prestasi akademik.
                            </p>
                            <p className="leading-relaxed text-gray-600">
                                Melalui berbagai kegiatan ekstrakurikuler, program keagamaan, dan aktivitas sosial, kami membimbing santri untuk menjadi pribadi yang berakhlak mulia, mandiri, dan bermanfaat bagi umat.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="rounded-xl bg-light-gray-1 p-6 text-center transition-transform hover:-translate-y-1">
                                <span className="material-symbols-outlined mb-2 text-4xl text-brand-green">
                                    mosque
                                </span>
                                <h3 className="mb-1 text-2xl font-bold text-brand-purple">15+</h3>
                                <p className="text-sm font-medium text-gray-600">Kegiatan Ekstrakurikuler</p>
                            </div>
                            <div className="rounded-xl bg-light-gray-1 p-6 text-center transition-transform hover:-translate-y-1">
                                <span className="material-symbols-outlined mb-2 text-4xl text-brand-purple">
                                    sports_soccer
                                </span>
                                <h3 className="mb-1 text-2xl font-bold text-brand-purple">8+</h3>
                                <p className="text-sm font-medium text-gray-600">Jenis Olahraga</p>
                            </div>
                            <div className="rounded-xl bg-light-gray-1 p-6 text-center transition-transform hover:-translate-y-1">
                                <span className="material-symbols-outlined mb-2 text-4xl text-brand-green">
                                    volunteer_activism
                                </span>
                                <h3 className="mb-1 text-2xl font-bold text-brand-purple">200+</h3>
                                <p className="text-sm font-medium text-gray-600">Jam Kegiatan Sosial</p>
                            </div>
                            <div className="rounded-xl bg-light-gray-1 p-6 text-center transition-transform hover:-translate-y-1">
                                <span className="material-symbols-outlined mb-2 text-4xl text-brand-purple">
                                    auto_stories
                                </span>
                                <h3 className="mb-1 text-2xl font-bold text-brand-purple">100%</h3>
                                <p className="text-sm font-medium text-gray-600">Lulusan Hafal Juz 30</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extracurriculars Section */}
            <section className="bg-light-gray-1 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-brand-green">
                            Minat & Bakat
                        </span>
                        <h2 className="text-3xl font-bold text-brand-purple md:text-4xl">Ekstrakurikuler</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                            Mengembangkan potensi santri melalui kegiatan yang positif dan membangun skill.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Card 1 */}
                        <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl">
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1584286595398-a59f21d313f5?q=80&w=2070&auto=format&fit=crop"
                                    alt="Tahfizh Al-Quran"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                                    Tahfizh & Muroja'ah
                                </h3>
                            </div>
                            <div className="p-6">
                                <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                                    Program unggulan untuk menghafal dan memelihara hafalan Al-Qur'an dengan metode yang menyenangkan dan efektif.
                                </p>
                                <a href="#" className="inline-flex items-center text-sm font-bold text-brand-purple hover:text-brand-green">
                                    Selengkapnya <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
                                </a>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl">
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?q=80&w=2071&auto=format&fit=crop"
                                    alt="Seni Kaligrafi"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                                    Kaligrafi Arab
                                </h3>
                            </div>
                            <div className="p-6">
                                <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                                    Melatih kesabaran dan keindahan melalui seni menulis huruf Arab yang indah (Khat).
                                </p>
                                <a href="#" className="inline-flex items-center text-sm font-bold text-brand-purple hover:text-brand-green">
                                    Selengkapnya <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
                                </a>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl">
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2049&auto=format&fit=crop"
                                    alt="Pramuka"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                                    Pramuka / Hizbul Wathan
                                </h3>
                            </div>
                            <div className="p-6">
                                <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                                    Membangun kemandirian, kedisiplinan, dan jiwa kepemimpinan melalui kegiatan kepanduan.
                                </p>
                                <a href="#" className="inline-flex items-center text-sm font-bold text-brand-purple hover:text-brand-green">
                                    Selengkapnya <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
                                </a>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl">
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
                                    alt="Hadroh & Nasyid"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                                    Hadroh & Nasyid
                                </h3>
                            </div>
                            <div className="p-6">
                                <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                                    Mengekspresikan kecintaan kepada Nabi melalui seni musik Islami dan sholawat.
                                </p>
                                <a href="#" className="inline-flex items-center text-sm font-bold text-brand-purple hover:text-brand-green">
                                    Selengkapnya <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
                                </a>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl">
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
                                    alt="Sains Club"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                                    Sains & Eksperimen
                                </h3>
                            </div>
                            <div className="p-6">
                                <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                                    Mengeksplorasi keajaiban ciptaan Allah melalui percobaan sains sederhana dan menyenangkan.
                                </p>
                                <a href="#" className="inline-flex items-center text-sm font-bold text-brand-purple hover:text-brand-green">
                                    Selengkapnya <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
                                </a>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl">
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1529390003361-507a23f3e2e6?q=80&w=2070&auto=format&fit=crop"
                                    alt="English Club"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                                    English Club
                                </h3>
                            </div>
                            <div className="p-6">
                                <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                                    Melatih kepercayaan diri berbicara bahasa Inggris melalui permainan dan storytelling.
                                </p>
                                <a href="#" className="inline-flex items-center text-sm font-bold text-brand-purple hover:text-brand-green">
                                    Selengkapnya <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sports Section */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-brand-green">
                                Olahraga & Kesehatan
                            </span>
                            <h2 className="mb-6 text-3xl font-bold text-brand-purple md:text-4xl">
                                Mens Sana in Corpore Sano
                            </h2>
                            <p className="mb-6 text-lg text-gray-600">
                                "Akal yang sehat terdapat dalam badan yang sehat." Kami memfasilitasi berbagai kegiatan olahraga untuk menjaga kebugaran santri, dengan tetap memperhatikan adab dan batasan syariat.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined mt-1 text-brand-green">check_circle</span>
                                    <div>
                                        <h4 className="font-bold text-brand-purple">Futsal & Sepak Bola</h4>
                                        <p className="text-sm text-gray-600">Melatih kerjasama tim dan ketangkasan (Khusus Putra).</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined mt-1 text-brand-green">check_circle</span>
                                    <div>
                                        <h4 className="font-bold text-brand-purple">Memanah (Archery)</h4>
                                        <p className="text-sm text-gray-600">Olahraga sunnah yang melatih fokus dan konsentrasi.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined mt-1 text-brand-green">check_circle</span>
                                    <div>
                                        <h4 className="font-bold text-brand-purple">Renang</h4>
                                        <p className="text-sm text-gray-600">Jadwal terpisah untuk putra dan putri dengan pelatih profesional.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined mt-1 text-brand-green">check_circle</span>
                                    <div>
                                        <h4 className="font-bold text-brand-purple">Bela Diri (Pencak Silat)</h4>
                                        <p className="text-sm text-gray-600">Membangun kepercayaan diri dan kemampuan membela diri.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="overflow-hidden rounded-2xl shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop"
                                    alt="Kegiatan Olahraga"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-white p-6 shadow-lg md:block">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                                        <span className="material-symbols-outlined">trophy</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-500">Prestasi Terbaru</p>
                                        <p className="text-lg font-bold text-brand-purple">Juara 1 Futsal SD se-Kota</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership & Social Section */}
            <section className="bg-brand-purple py-16 text-white md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold md:text-4xl">Kepemimpinan & Sosial</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-gray-200">
                            Melatih jiwa kepemimpinan dan kepedulian sosial sejak dini.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="rounded-xl bg-white/10 p-8 backdrop-blur-sm transition-colors hover:bg-white/20">
                            <span className="material-symbols-outlined mb-4 text-4xl text-brand-green">
                                diversity_3
                            </span>
                            <h3 className="mb-3 text-xl font-bold">Dewan Santri</h3>
                            <p className="text-sm leading-relaxed text-gray-200">
                                Organisasi santri yang belajar berorganisasi, menyusun program, dan memimpin rekan-rekannya dalam kegiatan sekolah.
                            </p>
                        </div>
                        <div className="rounded-xl bg-white/10 p-8 backdrop-blur-sm transition-colors hover:bg-white/20">
                            <span className="material-symbols-outlined mb-4 text-4xl text-brand-green">
                                mosque
                            </span>
                            <h3 className="mb-3 text-xl font-bold">Imam & Muadzin Cilik</h3>
                            <p className="text-sm leading-relaxed text-gray-200">
                                Melatih keberanian dan tanggung jawab untuk memimpin sholat berjamaah dan mengumandangkan adzan.
                            </p>
                        </div>
                        <div className="rounded-xl bg-white/10 p-8 backdrop-blur-sm transition-colors hover:bg-white/20">
                            <span className="material-symbols-outlined mb-4 text-4xl text-brand-green">
                                volunteer_activism
                            </span>
                            <h3 className="mb-3 text-xl font-bold">Bakti Sosial</h3>
                            <p className="text-sm leading-relaxed text-gray-200">
                                Kegiatan rutin berbagi kepada kaum dhuafa dan anak yatim untuk menumbuhkan rasa empati dan syukur.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Annual Events Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-brand-purple md:text-4xl">Agenda Tahunan</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                            Momen-momen istimewa yang dinanti seluruh warga sekolah.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                                <span className="material-symbols-outlined">star</span>
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-brand-purple">Pesantren Kilat</h3>
                            <p className="text-sm text-gray-600">Kegiatan intensif di bulan Ramadhan untuk memperdalam ilmu agama.</p>
                        </div>
                        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple">
                                <span className="material-symbols-outlined">school</span>
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-brand-purple">Wisuda Tahfizh</h3>
                            <p className="text-sm text-gray-600">Perayaan kelulusan hafalan Al-Qur'an sebagai apresiasi perjuangan santri.</p>
                        </div>
                        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                                <span className="material-symbols-outlined">storefront</span>
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-brand-purple">Market Day</h3>
                            <p className="text-sm text-gray-600">Belajar berwirausaha secara Islami dengan menjual karya sendiri.</p>
                        </div>
                        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple">
                                <span className="material-symbols-outlined">forest</span>
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-brand-purple">Mukhayam (Camping)</h3>
                            <p className="text-sm text-gray-600">Tadabbur alam dan melatih kemandirian di alam terbuka.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Student Voices Section */}
            <section className="bg-light-gray-1 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-brand-purple md:text-4xl">Suara Santri</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                            Apa kata mereka tentang bersekolah di SD Khoiru Ummah?
                        </p>
                    </div>

                    {/* Mobile Carousel */}
                    <div className="block w-full md:hidden">
                        <TestimonialCarousel testimonials={studentVoices.map(voice => ({
                            id: voice.id,
                            name: voice.name,
                            role: voice.role,
                            avatar: voice.avatar,
                            description: voice.quote
                        }))} />
                    </div>

                    {/* Desktop Grid */}
                    <div className="hidden grid-cols-1 gap-8 md:grid lg:grid-cols-3">
                        {studentVoices.map((voice) => (
                            <div key={voice.id} className="flex flex-col rounded-xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                                <div className="mb-6">
                                    <span className="material-symbols-outlined text-4xl text-brand-green/40">format_quote</span>
                                </div>
                                <p className="mb-6 flex-grow text-lg italic leading-relaxed text-gray-600">
                                    "{voice.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={voice.avatar}
                                        alt={voice.name}
                                        className="h-12 w-12 rounded-full bg-gray-200 object-cover"
                                    />
                                    <div>
                                        <h4 className="font-bold text-brand-purple">{voice.name}</h4>
                                        <p className="text-sm text-gray-500">{voice.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative overflow-hidden bg-brand-purple py-16 text-white md:py-24">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
                <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="mb-6 text-3xl font-bold md:text-4xl">Bergabunglah dengan Keluarga Besar Kami</h2>
                    <p className="mb-8 text-lg text-gray-200">
                        Berikan pendidikan terbaik yang menyeimbangkan ilmu dunia dan akhirat untuk buah hati Anda.
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Link to="/pendaftaran" className="inline-flex items-center justify-center rounded-full bg-brand-green px-8 py-3 text-base font-bold text-white transition-transform hover:scale-105 hover:bg-opacity-90">
                            Daftar Sekarang
                        </Link>
                        <Link to="/kontak" className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3 text-base font-bold text-white transition-colors hover:bg-white hover:text-brand-purple">
                            Hubungi Kami
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
