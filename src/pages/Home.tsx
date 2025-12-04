import { TestimonialCarousel } from '../components/TestimonialCarousel';
import TestimonialSlider from '../components/TestimonialSlider';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="w-full">
                <div
                    className="relative flex min-h-[480px] flex-col justify-end gap-8 rounded-xl bg-cover bg-center p-6 text-white md:p-10"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url("/header-homepages.jpg")',
                    }}
                >
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-black leading-tight tracking-tight md:text-5xl">
                            Melahirkan Generasi Penghafal Al-Qur'an dan Pemimpin Masa Depan
                        </h1>
                        <p className="text-sm font-normal text-slate-200 md:text-base">
                            Sekolah Dasar Islam Terpadu dengan Program Tahfizh Al-Qur'an 30 Juz
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button className="flex h-12 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-brand-purple px-5 text-base font-bold text-white shadow-lg transition-colors hover:bg-brand-green">
                            <span>Daftar Sekarang</span>
                        </button>
                        <button className="flex h-12 cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 border-brand-green bg-transparent px-5 text-base font-bold text-brand-green shadow-lg transition-colors hover:bg-brand-green hover:text-white">
                            <span>Jadwalkan Kunjungan</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="my-10 w-full rounded-xl bg-light-gray-1 p-6 md:p-8">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
                    <div className="text-center">
                        <p className="text-4xl font-bold text-brand-green md:text-5xl">15+</p>
                        <p className="mt-1 text-sm text-dark-gray md:text-base">Tahun Berpengalaman</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-bold text-brand-green md:text-5xl">500+</p>
                        <p className="mt-1 text-sm text-dark-gray md:text-base">Santri Aktif</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-bold text-brand-green md:text-5xl">30 Juz</p>
                        <p className="mt-1 text-sm text-dark-gray md:text-base">Target Hafalan</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-bold text-brand-green md:text-5xl">100%</p>
                        <p className="mt-1 text-sm text-dark-gray md:text-base">Lulusan Hafizh</p>
                    </div>
                </div>
            </section>

            {/* Introduction / Tentang Section */}
            <section className="my-10 w-full rounded-xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="mb-6 text-2xl font-bold text-brand-purple md:text-3xl">
                    Tentang SD Khoiru Ummah
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-slate-700">
                    <p>
                        Sekolah Dasar Tahfizh Plus Khoiru Ummah merupakan institusi pendidikan Islam yang bercita-cita melahirkan kembali generasi terbaik umat, generasi Hafizh Al-Qur'an berkarakter pemimpin yang tercermin dalam kecerdasan berpikirnya, kefaqihannya dalam agama, dan keberaniannya menyuarakan kebenaran Islam.
                    </p>
                    <p>
                        Kami memadukan program tahfizh Al-Qur'an 30 juz dengan kurikulum nasional yang diperkaya dengan pembelajaran berbasis akidah Islam. Setiap santri dibimbing untuk tidak hanya menghafal Al-Qur'an, tetapi juga memahami dan mengamalkannya dalam kehidupan sehari-hari.
                    </p>
                    <p>
                        Dengan metode 'Talqiyan Fikriyan' (membangun kemampuan siswa berpikir solutif secara Islami dan mandiri), kami membentuk generasi Islam yang siap menjadi pemimpin masa depan dengan fondasi iman dan ilmu yang kuat.
                    </p>
                </div>
            </section>

            {/* Pilar Utama Section */}
            <section className="my-10 w-full">
                <h2 className="mb-6 text-2xl font-bold text-brand-purple md:text-3xl">
                    Pilar Pendidikan Khoiru Ummah
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            icon: 'menu_book',
                            title: 'Akidah Islam',
                            description:
                                'Pendidikan berbasis Akidah Islam yang menjadikan Al-Qur\'an dan As-Sunnah sebagai sumber utama ilmu bagi para santri',
                        },
                        {
                            icon: 'school',
                            title: 'Generasi Terbaik',
                            description:
                                'Melahirkan kembali Khoiru Ummah, generasi pemimpin yang Hafizh Al-Qur\'an, yang akan membangun peradaban mulia',
                        },
                        {
                            icon: 'person',
                            title: 'Guru Teladan',
                            description:
                                'Para Ustadz dan Ustadzah bukan hanya menyampaikan pelajaran, tetapi juga menjadi teladan dan pendidik terbaik bagi santri',
                        },
                        {
                            icon: 'diversity_3',
                            title: 'Sinergi Orang Tua',
                            description:
                                'Bekerja sama dengan orang tua dalam mendidik anak-anaknya serta mensinergikannya dengan peran sekolah',
                        },
                    ].map((pilar, index) => (
                        <div
                            key={index}
                            className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-brand-green hover:shadow-xl"
                        >
                            <div className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-brand-purple/10 to-brand-green/10">
                                <span className="material-symbols-outlined text-6xl text-brand-green">
                                    {pilar.icon}
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 p-6">
                                <h3 className="text-xl font-bold text-brand-purple">{pilar.title}</h3>
                                <p className="text-base text-slate-700">{pilar.description}</p>
                                <a
                                    className="mt-2 font-medium text-slate-600 transition-colors hover:text-brand-purple"
                                    href="#"
                                >
                                    Pelajari Lebih Lanjut →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Program Tahfizh Section */}
            <section className="my-10 w-full rounded-xl bg-gradient-to-br from-brand-purple to-purple-700 p-6 text-white md:p-8">
                <h2 className="mb-2 text-center text-2xl font-bold md:text-3xl">
                    Program Tahfizh Al-Qur'an
                </h2>
                <p className="mb-8 text-center text-sm text-purple-100 md:text-base">
                    Target Hafalan Terstruktur dari Kelas 1 hingga Kelas 6
                </p>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        { kelas: 'Kelas 1', target: '3 Juz', focus: 'Juz 30, 29, 28' },
                        { kelas: 'Kelas 2', target: '6 Juz', focus: 'Juz 1, 2, 3 + Juz Amma' },
                        { kelas: 'Kelas 3', target: '10 Juz', focus: 'Juz 1-10' },
                        { kelas: 'Kelas 4', target: '15 Juz', focus: 'Juz 1-15' },
                        { kelas: 'Kelas 5', target: '25 Juz', focus: 'Juz 1-25' },
                        { kelas: 'Kelas 6', target: '30 Juz (Khatam)', focus: 'Lulus sebagai Hafizh Al-Qur\'an' },
                    ].map((level, index) => (
                        <div
                            key={index}
                            className="rounded-lg border-2 border-brand-green bg-white/10 p-4 backdrop-blur-sm transition-all hover:bg-white/20"
                        >
                            <h3 className="text-lg font-bold text-brand-green">{level.kelas}</h3>
                            <p className="mt-1 text-2xl font-black text-white">{level.target}</p>
                            <p className="mt-2 text-sm text-purple-100">{level.focus}</p>
                        </div>
                    ))}
                </div>
                <p className="mt-6 text-center text-xs italic text-purple-200 md:text-sm">
                    *Dengan metode tahfizh yang terbukti efektif dan bimbingan intensif dari ustadz/ustadzah berpengalaman
                </p>
            </section>

            {/* Kurikulum Terpadu Section */}
            <section className="my-10 w-full">
                <h2 className="mb-6 text-2xl font-bold text-brand-purple md:text-3xl">
                    Kurikulum Terpadu
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-xl border-2 border-brand-green bg-white p-6 shadow-sm">
                        <h3 className="mb-4 text-xl font-bold text-brand-purple">Kurikulum Diniyyah</h3>
                        <ul className="space-y-2 text-base text-slate-700">
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-brand-green">check_circle</span>
                                Al-Qur'an (Tahfizh & Tahsin)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-brand-green">check_circle</span>
                                Aqidah Islam
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-brand-green">check_circle</span>
                                Fiqih Ibadah
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-brand-green">check_circle</span>
                                Sirah Nabawiyah
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-brand-green">check_circle</span>
                                Bahasa Arab
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-brand-green">check_circle</span>
                                Adab & Akhlaq
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-xl border-2 border-brand-purple bg-white p-6 shadow-sm">
                        <h3 className="mb-4 text-xl font-bold text-brand-purple">Kurikulum Nasional</h3>
                        <ul className="space-y-2 text-base text-slate-700">
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-brand-green">check_circle</span>
                                Matematika
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-brand-green">check_circle</span>
                                IPA (Sains)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-brand-green">check_circle</span>
                                IPS (Sosial)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-brand-green">check_circle</span>
                                Bahasa Indonesia
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-brand-green">check_circle</span>
                                Bahasa Inggris
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-brand-green">check_circle</span>
                                Pendidikan Jasmani
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="mt-6 text-center text-base italic text-slate-600">
                    Perpaduan sempurna antara ilmu agama dan ilmu umum untuk membentuk generasi yang seimbang (tawazun)
                </p>
            </section>

            {/* Kehidupan Sekolah Section */}
            <section className="my-10 w-full">
                <h2 className="mb-6 text-2xl font-bold text-brand-purple md:text-3xl">Kehidupan Sekolah</h2>
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                    <div
                        className="col-span-2 row-span-2 h-full min-h-[300px] overflow-hidden rounded-xl border-b-2 border-brand-green bg-cover bg-center md:col-span-1 md:min-h-[400px]"
                        style={{ backgroundImage: 'url("/kegiatan-1.jpg")' }}
                    />
                    <div
                        className="col-span-2 row-span-1 h-full min-h-[145px] overflow-hidden rounded-xl border-b-2 border-brand-green bg-cover bg-center md:col-span-1"
                        style={{ backgroundImage: 'url("/kegiatan-2.jpg")', backgroundPosition: 'center 16%' }}
                    />
                    <div
                        className="col-span-2 row-span-1 h-full min-h-[150px] overflow-hidden rounded-xl border-b-2 border-brand-green bg-cover md:col-span-1"
                        style={{ backgroundImage: 'url("/kegiatan-3.jpg")', backgroundPosition: 'center 16%' }}
                    />
                </div>
            </section>

            {/* Fasilitas Section */}
            <section className="my-10 w-full">
                <h2 className="mb-6 text-2xl font-bold text-brand-purple md:text-3xl">Fasilitas Pendukung</h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {[
                        { icon: 'menu_book', title: 'Ruang Tahfizh Nyaman' },
                        { icon: 'mosque', title: 'Masjid Luas' },
                        { icon: 'school', title: 'Kelas Modern' },
                        { icon: 'local_library', title: 'Perpustakaan Islami' },
                    ].map((facility, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden rounded-xl border-b-4 border-brand-green bg-white shadow-md transition-all hover:shadow-xl"
                        >
                            <div className="flex h-32 items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                                <span className="material-symbols-outlined text-5xl text-brand-green">
                                    {facility.icon}
                                </span>
                            </div>
                            <div className="p-4">
                                <h3 className="text-center text-base font-bold text-brand-purple">{facility.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimoni Section */}
            <section className="my-10 w-full">
                <h2 className="mb-6 text-2xl font-bold text-brand-purple md:text-3xl">
                    Testimoni
                </h2>
                <div className="flex w-full items-center justify-center py-8">
                    {/* Mobile View: Stack Carousel */}
                    <div className="block w-full md:hidden">
                        <TestimonialCarousel
                            testimonials={[
                                {
                                    id: 1,
                                    name: 'Ibu Siti Aisyah',
                                    avatar: 'https://ui-avatars.com/api/?name=Siti+Aisyah&background=random',
                                    description:
                                        'Alhamdulillah anak saya tidak hanya hafal Al-Qur\'an 30 juz, tetapi juga berprestasi di bidang akademik. Guru-gurunya sangat perhatian dan sabar dalam membimbing.',
                                },
                                {
                                    id: 2,
                                    name: 'Bapak Ahmad Dahlan',
                                    avatar: 'https://ui-avatars.com/api/?name=Ahmad+Dahlan&background=random',
                                    description:
                                        'SD Khoiru Ummah mengajarkan anak saya untuk mandiri, disiplin, dan mencintai Al-Qur\'an. Akhlaknya juga semakin baik setelah bersekolah di sini.',
                                },
                                {
                                    id: 3,
                                    name: 'Ibu Fatimah',
                                    avatar: 'https://ui-avatars.com/api/?name=Fatimah&background=random',
                                    description:
                                        'Lingkungan sekolah yang sangat kondusif untuk menghafal Al-Qur\'an. Anak saya jadi lebih rajin beribadah dan sangat hormat kepada orang tua.',
                                },
                                {
                                    id: 4,
                                    name: 'Bapak Umar',
                                    avatar: 'https://ui-avatars.com/api/?name=Umar&background=random',
                                    description:
                                        'Metode pembelajarannya sangat unik dan efektif. Anak tidak merasa terbebani meski target hafalannya cukup tinggi. Sangat merekomendasikan sekolah ini.',
                                },
                            ]}
                        />
                    </div>

                    {/* Desktop View: Slider */}
                    <div className="hidden w-full md:block">
                        <TestimonialSlider
                            testimonials={[
                                {
                                    id: 1,
                                    quote: 'Alhamdulillah anak saya tidak hanya hafal Al-Qur\'an 30 juz, tetapi juga berprestasi di bidang akademik. Guru-gurunya sangat perhatian dan sabar dalam membimbing.',
                                    name: 'Ibu Siti Aisyah',
                                    username: 'Wali Santri Kelas 6',
                                    avatar: 'https://ui-avatars.com/api/?name=Siti+Aisyah&background=random',
                                },
                                {
                                    id: 2,
                                    quote: 'SD Khoiru Ummah mengajarkan anak saya untuk mandiri, disiplin, dan mencintai Al-Qur\'an. Akhlaknya juga semakin baik setelah bersekolah di sini.',
                                    name: 'Bapak Ahmad Dahlan',
                                    username: 'Wali Santri Kelas 4',
                                    avatar: 'https://ui-avatars.com/api/?name=Ahmad+Dahlan&background=random',
                                },
                                {
                                    id: 3,
                                    quote: 'Lingkungan sekolah yang sangat kondusif untuk menghafal Al-Qur\'an. Anak saya jadi lebih rajin beribadah dan sangat hormat kepada orang tua.',
                                    name: 'Ibu Fatimah',
                                    username: 'Wali Santri Kelas 2',
                                    avatar: 'https://ui-avatars.com/api/?name=Fatimah&background=random',
                                },
                                {
                                    id: 4,
                                    quote: 'Metode pembelajarannya sangat unik dan efektif. Anak tidak merasa terbebani meski target hafalannya cukup tinggi. Sangat merekomendasikan sekolah ini.',
                                    name: 'Bapak Umar',
                                    username: 'Wali Santri Kelas 5',
                                    avatar: 'https://ui-avatars.com/api/?name=Umar&background=random',
                                },
                                {
                                    id: 5,
                                    quote: 'Program tahfizhnya luar biasa. Anak saya sudah hafal 5 juz dalam waktu singkat. Terima kasih SD Khoiru Ummah.',
                                    name: 'Ibu Khadijah',
                                    username: 'Wali Santri Kelas 3',
                                    avatar: 'https://ui-avatars.com/api/?name=Khadijah&background=random',
                                },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Berita / Info Terkini Section */}
            <section className="my-10 w-full">
                <h2 className="mb-6 text-2xl font-bold text-brand-purple md:text-3xl">
                    Informasi Terkini
                </h2>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Main Featured Card */}
                    <div className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md lg:col-span-2">
                        <div className="h-64 w-full overflow-hidden bg-gray-200 md:h-80">
                            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-purple/30 to-brand-green/30 transition-transform duration-500 group-hover:scale-105">
                                <span className="material-symbols-outlined text-8xl text-brand-purple opacity-50">
                                    emoji_events
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col p-6">
                            <div className="mb-3 flex items-center gap-3">
                                <span className="rounded-full bg-brand-green px-3 py-1 text-xs font-bold text-white">
                                    Prestasi
                                </span>
                                <span className="text-sm text-slate-500">15 Nov 2024</span>
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-dark-gray transition-colors group-hover:text-brand-purple">
                                10 Santri SD Khoiru Ummah Raih Juara di Musabaqah Hifdzil Qur'an Tingkat Kota
                            </h3>
                            <p className="mb-4 text-base text-slate-600 line-clamp-3">
                                Alhamdulillah, 10 santri kami berhasil meraih juara di berbagai kategori dalam kompetisi MHQ tingkat kota yang diselenggarakan oleh Dinas Pendidikan. Prestasi ini menjadi bukti kesungguhan kami dalam mencetak generasi penghafal Al-Qur'an.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 font-bold text-brand-green hover:underline"
                            >
                                Baca Selengkapnya{' '}
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                    </div>

                    {/* Side List */}
                    <div className="flex flex-col gap-4">
                        {[
                            {
                                date: '10 Nov 2024',
                                category: 'Kegiatan',
                                title: 'Wisuda Tahfizh Angkatan ke-15: 45 Santri Khatam 30 Juz',
                                icon: 'celebration',
                            },
                            {
                                date: '05 Nov 2024',
                                category: 'Edukasi',
                                title: 'Kunjungan Edukatif ke Museum Sejarah Islam',
                                icon: 'museum',
                            },
                            {
                                date: '01 Nov 2024',
                                category: 'Pengumuman',
                                title: 'Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2025/2026',
                                icon: 'campaign',
                            },
                        ].map((news, index) => (
                            <div
                                key={index}
                                className="group flex cursor-pointer items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md"
                            >
                                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100 transition-colors group-hover:bg-brand-purple/10">
                                    <span className="material-symbols-outlined text-3xl text-brand-purple">
                                        {news.icon}
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <div className="mb-1 flex items-center gap-2 text-xs">
                                        <span className="font-bold text-brand-green">{news.category}</span>
                                        <span className="text-slate-400">•</span>
                                        <span className="text-slate-500">{news.date}</span>
                                    </div>
                                    <h4 className="text-sm font-bold text-dark-gray line-clamp-2 transition-colors group-hover:text-brand-purple">
                                        {news.title}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="my-10 w-full rounded-xl bg-gradient-to-r from-brand-purple to-purple-700 p-8 text-center text-white md:p-12">
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                    Bergabunglah dengan Keluarga Besar SD Khoiru Ummah
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-base text-purple-100 md:text-lg">
                    Daftarkan putra-putri Anda untuk menjadi bagian dari generasi Hafizh Al-Qur'an yang berakhlak mulia dan cerdas secara akademik.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button className="w-full rounded-lg bg-brand-green px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-green-600 sm:w-auto">
                        Daftar Santri Baru
                    </button>
                    <button className="w-full rounded-lg border-2 border-white bg-transparent px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-brand-purple sm:w-auto">
                        Jadwalkan Kunjungan
                    </button>
                </div>
                <a
                    href="#"
                    className="mt-6 inline-block text-sm font-medium text-purple-200 underline-offset-4 hover:text-white hover:underline"
                >
                    Download Brosur Pendaftaran
                </a>
            </section>

            {/* Footer */}
            <footer className="mt-10 w-full rounded-xl bg-brand-purple px-6 py-12 text-white md:px-8">
                <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 md:grid-cols-4">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-white">Tentang SD Khoiru Ummah</h4>
                        <p className="text-sm text-slate-200">
                            SD Tahfizh Plus Khoiru Ummah adalah institusi pendidikan Islam yang melahirkan generasi Hafizh Al-Qur'an berkarakter pemimpin masa depan.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-lg bg-slate-500 grayscale transition-all hover:grayscale-0" />
                            <div className="h-12 w-12 rounded-lg bg-slate-500 grayscale transition-all hover:grayscale-0" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-white">Tautan Cepat</h4>
                        <ul className="flex flex-col gap-2 text-sm text-slate-200">
                            <li>
                                <a className="hover:text-brand-green" href="#">
                                    Tentang Kami
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-brand-green" href="#">
                                    Program Tahfizh
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-brand-green" href="#">
                                    Pendaftaran
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-brand-green" href="#">
                                    Biaya Pendidikan
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-brand-green" href="#">
                                    Kontak
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-white">Hubungi Kami</h4>
                        <address className="flex flex-col gap-2 text-sm not-italic text-slate-200">
                            <p>Jl. Pendidikan Islam No. 123</p>
                            <p>Kota, Provinsi 12345</p>
                            <p>Telp: (021) 1234-5678</p>
                            <p>WA: 0812-3456-7890</p>
                            <p>Email: info@sdkhoiruummah.sch.id</p>
                        </address>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-white">Ikuti Kami</h4>
                        <div className="flex gap-4">
                            <a className="text-white hover:text-brand-green" href="#">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
                                </svg>
                            </a>
                            <a className="text-white hover:text-brand-green" href="#">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
                                </svg>
                            </a>
                            <a className="text-white hover:text-brand-green" href="#">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
