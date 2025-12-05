import { AccordionItem } from '../components/ui/Accordion';

export default function AboutUs() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-xl bg-gray-800 p-6 md:p-12 min-h-[300px] flex flex-col justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBMuRsBaYKf5N4vvpQE7BhFUiuDjWBxXbnobykhYifp4DqhwfcKnzWHLTFhxPcrT0B0K9xa59RXLYBdbeFqksbw21REDAuop43YyqfFCdgo8Tbpk-AY9JCsEm8Du3jzagXM3DExqyXPGDOWhHERq8PYqalYWpzafMXLoLEw7sveLWiAqZKcnILmfQl6je18hteTJW8uSubjKmOuU2y9hma_07-ih2nxmcIgvMH6OYMbcftrtZuHaTagOSttZg2TPFcLyspK4AjadElj')",
                    }}
                />
                <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                        <a className="font-medium leading-normal text-gray-300 hover:text-brand-purple" href="/">
                            Beranda
                        </a>
                        <span className="font-medium leading-normal text-brand-green">/</span>
                        <span className="font-medium leading-normal text-brand-purple">Tentang Kami</span>
                    </div>
                    <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-brand-purple md:text-4xl lg:text-5xl">
                        Tentang SD Khoiru Ummah
                    </h1>
                    <p className="mt-2 text-base font-normal leading-normal text-gray-200 md:text-lg lg:text-xl">
                        Lebih dari 15 tahun melahirkan generasi Hafizh Al-Qur'an berkarakter pemimpin masa depan
                    </p>
                </div>
            </section>

            {/* Introduction Section (Who We Are) */}
            <section className="relative z-20 -mt-10 rounded-xl bg-white py-12 shadow-lg lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-5 lg:gap-12">
                        <div className="lg:col-span-3">
                            <h2 className="text-2xl font-bold text-brand-purple md:text-3xl">Profil Sekolah</h2>
                            <p className="mt-4 text-base leading-relaxed text-gray-700">
                                Sekolah Dasar Tahfizh Plus Khoiru Ummah merupakan institusi pendidikan Islam yang bercita-cita melahirkan kembali generasi terbaik umat, generasi Hafizh Al-Qur'an berkarakter pemimpin yang tercermin dalam kecerdasan berpikirnya, kefaqihannya dalam agama, keberaniannya menyuarakan kebenaran Islam, dan memberi pengaruh baik di keluarganya, komunitas, dan masyarakat.
                            </p>
                            <p className="mt-4 text-base leading-relaxed text-gray-700">
                                Berdiri sejak tahun 2009, SD Khoiru Ummah telah meluluskan lebih dari 500 santri yang khatam hafalan Al-Qur'an 30 juz. Kami memadukan program tahfizh intensif dengan kurikulum nasional yang diperkaya dengan pembelajaran berbasis akidah Islam, menciptakan keseimbangan antara hafalan Al-Qur'an, pemahaman agama yang mendalam, dan prestasi akademik yang unggul.
                            </p>
                            <p className="mt-4 text-base leading-relaxed text-gray-700">
                                Setiap tingkat pendidikan di SD Khoiru Ummah memiliki fokus perhatian yang berbeda sesuai dengan tingkat umur, perkembangan akal dan naluri santri. Dipadu dengan metode 'Talqiyan Fikriyan' (membangun kemampuan santri berpikir solutif secara Islami dan mandiri), diharapkan akan muncul generasi-generasi Islam yang siap menjadi pemimpin di masa depan.
                            </p>
                        </div>
                        <div className="lg:col-span-2">
                            <div
                                className="h-64 w-full rounded-lg border-l-4 border-brand-green bg-cover bg-center md:h-80"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBShDdYQQOyDLqentl65TJzXrEuWBakrGH7I2ELri9YGh6EvttNcwclJ1QrRcarHhtZ5ptFjMwCbCPLQ-y0bVXOYVp7j3-PBFmZMTmjNijFiVDaBjtnIsEsq7ag1UCW_KVyxHjmZFssE3k01HyFeJjM3lbnDGOpG_jhSbA0d33a858_ErvW3FbBIsqWRz6fu6Z6_-CVPmLGJvqqiRE9C8zgi_h9TR0JNR27wnsLjbAIwMwvhz7p-IvfLywO9JiQboIt8mLUCVLPLhFs')",
                                }}
                            >
                                <div className="flex h-full w-full items-end justify-start p-4">
                                    <span className="rounded bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-sm">
                                        Gedung Utama SD Khoiru Ummah
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="bg-light-gray-1 py-12 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <h2 className="mb-10 text-center text-2xl font-bold text-brand-purple md:text-3xl">Visi & Misi</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="rounded-xl border-t-4 border-brand-green bg-white p-6 shadow-md md:p-8">
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-4xl text-brand-green">visibility</span>
                                <h3 className="text-xl font-bold text-brand-purple md:text-2xl">Visi Kami</h3>
                            </div>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                Menjadi lembaga pendidikan Islam terdepan yang melahirkan generasi Khoiru Ummah (generasi terbaik umat) yang Hafizh Al-Qur'an, beriman kuat, berilmu luas, berakhlak mulia, dan siap memimpin peradaban Islam.
                            </p>
                        </div>
                        <div className="rounded-xl border-t-4 border-brand-green bg-white p-6 shadow-md md:p-8">
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-4xl text-brand-green">
                                    assistant_navigation
                                </span>
                                <h3 className="text-xl font-bold text-brand-purple md:text-2xl">Misi Kami</h3>
                            </div>
                            <ul className="mt-4 space-y-2 text-gray-700">
                                {[
                                    "Menyelenggarakan program tahfizh Al-Qur'an 30 juz dengan metode yang terbukti efektif",
                                    "Menanamkan aqidah Islam yang shahih berdasarkan Al-Qur'an dan As-Sunnah",
                                    "Membentuk akhlaq mulia sesuai tuntunan Rasulullah ﷺ",
                                    "Mengembangkan potensi akademik santri secara optimal",
                                    "Membangun karakter kepemimpinan yang kuat dan bertanggung jawab",
                                    "Menjalin sinergi yang erat dengan orang tua dalam pendidikan anak"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-green" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="bg-white py-12 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <h2 className="text-center text-2xl font-bold text-brand-purple md:text-3xl">
                        Pilar Pendidikan Khoiru Ummah
                    </h2>
                    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 md:gap-8 lg:grid-cols-4">
                        {[
                            {
                                icon: 'menu_book',
                                title: 'Akidah Islam',
                                description: 'Pendidikan berbasis Akidah Islam yang menjadikan Al-Qur\'an dan As-Sunnah sebagai sumber utama ilmu bagi para santri. Setiap materi pembelajaran diarahkan untuk menguatkan keimanan dan ketaqwaan kepada Allah SWT.',
                            },
                            {
                                icon: 'school',
                                title: 'Generasi Terbaik',
                                description: 'Melahirkan kembali Khoiru Ummah, generasi pemimpin yang Hafizh Al-Qur\'an, yang akan membangun peradaban mulia. Target kami adalah membentuk santri yang tidak hanya hafal Al-Qur\'an, tetapi juga menjadi teladan di masyarakat.',
                            },
                            {
                                icon: 'person',
                                title: 'Guru Teladan',
                                description: 'Para Ustadz dan Ustadzah bukan hanya menyampaikan pelajaran, akan tetapi juga menjadi teladan dan pendidik terbaik bagi para santri. Mereka adalah murobbi yang membimbing dengan kasih sayang dan keteladanan.',
                            },
                            {
                                icon: 'diversity_3',
                                title: 'Sinergi Orang Tua',
                                description: 'Bekerja sama dengan orang tua murid dalam mendidik anak-anaknya serta mensinergikannya dengan peran sekolah. Pendidikan adalah tanggung jawab bersama antara sekolah dan keluarga.',
                            },
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="group rounded-xl border border-transparent p-6 text-center transition-all duration-300 hover:border-brand-green hover:shadow-xl"
                            >
                                <div className="mb-4 inline-flex size-16 items-center justify-center rounded-full bg-brand-green/10">
                                    <span className="material-symbols-outlined text-3xl text-brand-purple">
                                        {value.icon}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-brand-purple">{value.title}</h3>
                                <p className="mt-2 text-sm text-medium-gray leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline/History Section */}
            <section className="bg-light-gray-1 py-12 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <h2 className="mb-8 text-center text-2xl font-bold text-brand-purple md:mb-12 md:text-3xl">
                        Perjalanan Kami
                    </h2>
                    <div className="relative mx-auto max-w-2xl">
                        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200" />
                        {[
                            {
                                year: '2009',
                                title: 'Berdirinya SD Khoiru Ummah',
                                description: 'Berawal dari tekad untuk melahirkan generasi Hafizh Al-Qur\'an, SD Khoiru Ummah didirikan dengan 35 santri angkatan pertama.',
                                align: 'right',
                            },
                            {
                                year: '2012',
                                title: 'Wisuda Tahfizh Pertama',
                                description: 'Alhamdulillah, 28 santri angkatan pertama berhasil khatam hafalan 30 juz Al-Qur\'an dengan tartil dan lancar.',
                                align: 'left',
                            },
                            {
                                year: '2015',
                                title: 'Akreditasi A dari BAN-S/M',
                                description: 'Pencapaian standar mutu pendidikan nasional dengan predikat Akreditasi A, membuktikan kualitas pendidikan yang unggul.',
                                align: 'right',
                            },
                            {
                                year: '2018',
                                title: 'Perluasan Fasilitas',
                                description: 'Pembangunan gedung baru untuk menampung lebih banyak santri dengan fasilitas yang lebih lengkap dan nyaman.',
                                align: 'left',
                            },
                            {
                                year: '2020',
                                title: 'Program Pembelajaran Digital',
                                description: 'Adaptasi teknologi pendidikan dengan tetap menjaga esensi pembelajaran tahfizh dan nilai-nilai Islam.',
                                align: 'right',
                            },
                            {
                                year: '2024',
                                title: 'Lebih dari 500 Lulusan Hafizh',
                                description: 'Milestone penting: 500+ alumni yang khatam hafalan 30 juz dan tersebar di berbagai pesantren dan sekolah lanjutan terbaik.',
                                align: 'left',
                            },
                        ].map((milestone, index) => (
                            <div key={index} className="relative mb-8 flex w-full items-center">
                                {milestone.align === 'right' ? (
                                    <>
                                        <div className="w-1/2 pr-4 text-right md:pr-8">
                                            <div className="rounded-lg bg-white p-4 shadow-md md:p-6 transition-transform hover:-translate-y-1 duration-300">
                                                <p className="text-xl font-bold text-brand-green md:text-2xl">
                                                    {milestone.year}
                                                </p>
                                                <h3 className="mt-1 font-bold text-brand-purple">{milestone.title}</h3>
                                                <p className="mt-2 text-sm text-medium-gray">{milestone.description}</p>
                                            </div>
                                        </div>
                                        <div className="absolute left-1/2 size-4 -translate-x-1/2 rounded-full border-2 border-white bg-brand-purple z-10" />
                                        <div className="w-1/2" />
                                    </>
                                ) : (
                                    <>
                                        <div className="w-1/2" />
                                        <div className="absolute left-1/2 size-4 -translate-x-1/2 rounded-full border-2 border-white bg-brand-purple z-10" />
                                        <div className="w-1/2 pl-4 md:pl-8">
                                            <div className="rounded-lg bg-white p-4 shadow-md md:p-6 transition-transform hover:-translate-y-1 duration-300">
                                                <p className="text-xl font-bold text-brand-green md:text-2xl">
                                                    {milestone.year}
                                                </p>
                                                <h3 className="mt-1 font-bold text-brand-purple">{milestone.title}</h3>
                                                <p className="mt-2 text-sm text-medium-gray">{milestone.description}</p>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="bg-white py-12 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <h2 className="text-center text-2xl font-bold text-brand-purple md:text-3xl">
                        Tim Kepemimpinan Kami
                    </h2>
                    <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-10 lg:grid-cols-3">
                        {[
                            {
                                name: 'Ustadz Dr. H. Muhammad Yusuf, M.Pd.I',
                                position: 'Kepala Sekolah',
                                description: 'Hafizh 30 juz dengan pengalaman 20 tahun di bidang pendidikan Islam. Alumni Universitas Al-Azhar Cairo dan pembina tahfizh bersertifikat internasional.',
                                image: 'https://ui-avatars.com/api/?name=Muhammad+Yusuf&background=random',
                            },
                            {
                                name: 'Ustadzah Hj. Fatimah Az-Zahra, S.Pd.I',
                                position: 'Wakil Kepala Sekolah',
                                description: 'Hafizhah dengan spesialisasi metode pembelajaran tahfizh untuk anak usia SD. Pengalaman 15 tahun dalam pendidikan tahfizh.',
                                image: 'https://ui-avatars.com/api/?name=Fatimah+Az-Zahra&background=random',
                            },
                            {
                                name: 'Ustadz Ahmad Dahlan, S.Pd',
                                position: 'Koordinator Program Tahfizh',
                                description: 'Hafizh 30 juz dan juara MTQ Nasional. Mengembangkan metode tahfizh yang efektif dan menyenangkan untuk santri SD.',
                                image: 'https://ui-avatars.com/api/?name=Ahmad+Dahlan&background=random',
                            },
                            {
                                name: 'Ustadzah Khadijah binti Said, S.Pd',
                                position: 'Koordinator Kurikulum',
                                description: 'Berpengalaman dalam pengembangan kurikulum terpadu antara tahfizh dan akademik. Alumni UIN Jakarta dengan predikat cumlaude.',
                                image: 'https://ui-avatars.com/api/?name=Khadijah+Said&background=random',
                            },
                            {
                                name: 'Ustadz Umar Al-Faruq, S.Pd.I',
                                position: 'Koordinator Pembinaan Akhlak',
                                description: 'Fokus pada pembentukan karakter Islami dan kepemimpinan santri. Aktif dalam pembinaan akhlak berbasis sirah nabawiyah.',
                                image: 'https://ui-avatars.com/api/?name=Umar+Al-Faruq&background=random',
                            },
                            {
                                name: 'Ustadzah Aisyah Rahmawati, S.Psi',
                                position: 'Konselor Sekolah',
                                description: 'Psikolog anak dengan pemahaman Islam yang mendalam. Membimbing perkembangan psikologis dan spiritual santri.',
                                image: 'https://ui-avatars.com/api/?name=Aisyah+Rahmawati&background=random',
                            },
                        ].map((leader, index) => (
                            <div key={index} className="group text-center">
                                <div className="relative inline-block">
                                    <div
                                        className="mx-auto size-40 rounded-full border-4 border-brand-green/50 bg-cover bg-center bg-no-repeat transition-colors group-hover:border-brand-green"
                                        style={{ backgroundImage: `url("${leader.image}")` }}
                                    />
                                </div>
                                <h4 className="mt-4 text-lg font-bold text-brand-purple">{leader.name}</h4>
                                <p className="text-sm font-medium text-brand-green">{leader.position}</p>
                                <p className="mt-2 px-4 text-sm text-gray-500">{leader.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Metode Pembelajaran Section (NEW) */}
            <section className="bg-light-gray-1 py-12 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-brand-purple md:text-3xl">Metode Pembelajaran Kami</h2>
                        <p className="mt-2 text-lg text-brand-green font-medium">Talqiyan Fikriyan - Membangun Kemampuan Berpikir Islami</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column: Metode Tahfizh */}
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <h3 className="text-xl font-bold text-brand-purple mb-4 border-b pb-2 border-gray-100">Metode Tahfizh</h3>
                            <p className="text-gray-700 mb-4">
                                Kami menggunakan metode talqiyan (one-on-one) antara santri dan ustadz/ustadzah untuk memastikan kualitas hafalan yang sempurna. Setiap santri mendapat bimbingan personal sesuai dengan kemampuan dan kecepatannya masing-masing.
                            </p>

                            <AccordionItem title="Tahapan Tahfizh" className="border-t border-gray-100">
                                <ul className="space-y-2 mt-2">
                                    <li className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-brand-green text-sm">check_circle</span>
                                        <span className="font-medium">Talaqqi</span>: Menyetorkan hafalan baru
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-brand-green text-sm">check_circle</span>
                                        <span className="font-medium">Takrir</span>: Mengulang hafalan lama
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-brand-green text-sm">check_circle</span>
                                        <span className="font-medium">Tasmi'</span>: Simak hafalan menyeluruh
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-brand-green text-sm">check_circle</span>
                                        <span className="font-medium">Tahsin</span>: Perbaikan bacaan
                                    </li>
                                </ul>
                                <p className="mt-4 text-sm text-gray-600 italic">
                                    Setiap santri wajib menyelesaikan target hafalan sesuai dengan tingkat kelasnya, dengan tetap memperhatikan kualitas makharijul huruf dan tajwid.
                                </p>
                            </AccordionItem>
                        </div>

                        {/* Right Column: Talqiyan Fikriyan */}
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <h3 className="text-xl font-bold text-brand-purple mb-4 border-b pb-2 border-gray-100">Talqiyan Fikriyan</h3>
                            <p className="text-gray-700 mb-4">
                                Metode khas Khoiru Ummah yang membangun kemampuan santri berpikir solutif secara Islami dan mandiri. Santri tidak hanya diajarkan "apa" yang harus dipelajari, tetapi juga "bagaimana" berpikir dengan benar berdasarkan Al-Qur'an dan As-Sunnah.
                            </p>

                            <AccordionItem title="Prinsip Talqiyan Fikriyan" className="border-t border-gray-100">
                                <ul className="space-y-2 mt-2">
                                    {[
                                        "Membangun pondasi aqidah yang kuat",
                                        "Melatih berpikir kritis dan analitis",
                                        "Mengajarkan problem solving berbasis Islam",
                                        "Membentuk karakter kepemimpinan",
                                        "Mendorong kemandirian dalam belajar"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-green" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-4 text-sm text-gray-600 italic">
                                    Dengan metode ini, santri tidak hanya hafal Al-Qur'an tetapi juga memahami dan mampu menerapkannya dalam kehidupan nyata.
                                </p>
                            </AccordionItem>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accreditation */}
            <section className="bg-white py-12 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <h2 className="text-center text-xl font-bold text-brand-purple md:text-2xl">
                        Akreditasi & Pengakuan
                    </h2>
                    <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-5">
                        {[
                            { text: 'Akreditasi A', subtext: 'Badan Akreditasi Nasional' },
                            { text: 'Terdaftar Kemenag', subtext: 'Kementerian Agama RI' },
                            { text: 'Terakreditasi', subtext: 'Kemendikbudristek' },
                            { text: 'Terdaftar', subtext: 'Dinas Pendidikan Provinsi' },
                            { text: 'Anggota Aktif', subtext: 'Jaringan Sekolah Islam Terpadu' },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="flex h-16 w-32 items-center justify-center rounded bg-gray-100 transition-all duration-300 group-hover:bg-brand-green/10">
                                    <span className="text-xs font-bold text-gray-400 group-hover:text-brand-green">Logo {index + 1}</span>
                                </div>
                                <p className="mt-3 text-sm font-bold text-brand-purple">{item.text}</p>
                                <p className="text-xs text-medium-gray">{item.subtext}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics (By The Numbers) */}
            <section className="w-full bg-brand-purple">
                <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 lg:py-20">
                    <h2 className="mb-10 text-center text-2xl font-bold text-white md:text-3xl">Pencapaian Kami</h2>
                    <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4 lg:gap-12">
                        {[
                            { number: '15+', label: 'TAHUN BERPENGALAMAN' },
                            { number: '500+', label: 'LULUSAN HAFIZH' },
                            { number: '30 Juz', label: 'TARGET HAFALAN' },
                            { number: '98%', label: 'TINGKAT KELULUSAN' },
                            { number: '35+', label: 'TENAGA PENDIDIK' },
                            { number: '12:1', label: 'RASIO SANTRI:USTADZ' },
                            { number: '20+', label: 'PRESTASI LOMBA' },
                            { number: '100%', label: 'KEPUASAN WALI SANTRI' },
                        ].map((stat, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <span className="text-4xl font-bold text-brand-green lg:text-5xl">{stat.number}</span>
                                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-white md:text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facilities Highlights */}
            <section className="bg-light-gray-1 py-12 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <h2 className="mb-10 text-center text-2xl font-bold text-brand-purple md:text-3xl">
                        Fasilitas Pendukung
                    </h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { icon: 'menu_book', title: 'Ruang Tahfizh Nyaman', desc: '10 ruang tahfizh ber-AC dengan kapasitas 1:10 untuk bimbingan optimal' },
                            { icon: 'mosque', title: 'Masjid Sekolah', desc: 'Masjid luas untuk shalat berjamaah dan kajian keislaman' },
                            { icon: 'school', title: 'Kelas Modern', desc: '18 ruang kelas dengan fasilitas multimedia dan AC' },
                            { icon: 'local_library', title: 'Perpustakaan Islami', desc: 'Koleksi 5000+ buku Islam, ensiklopedia, dan buku pelajaran' },
                        ].map((facility, index) => (
                            <div
                                key={index}
                                className="group overflow-hidden rounded-xl border-b-4 border-brand-green bg-white shadow-md transition-all hover:shadow-xl"
                            >
                                <div className="flex h-40 items-center justify-center bg-gray-200 transition-colors group-hover:bg-brand-purple/5">
                                    <span className="material-symbols-outlined text-6xl text-brand-green">
                                        {facility.icon}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-center text-lg font-bold text-brand-purple">{facility.title}</h3>
                                    <p className="mt-2 text-center text-sm text-gray-600">{facility.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-white py-12 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <h2 className="text-center text-2xl font-bold text-brand-purple md:text-3xl">
                        Testimoni Wali Santri & Alumni
                    </h2>
                    <div className="mt-8 grid grid-cols-1 gap-8 md:mt-10 lg:grid-cols-3">
                        {[
                            {
                                quote: 'Alhamdulillah, anak saya tidak hanya hafal Al-Qur\'an 30 juz di usia 12 tahun, tetapi juga berprestasi di bidang akademik. Akhlaknya sangat baik, mandiri, dan bertanggung jawab. SD Khoiru Ummah benar-benar mewujudkan generasi Qur\'ani yang kami impikan.',
                                name: 'Ibu Siti Aisyah',
                                role: 'Wali Santri Angkatan 2023',
                                image: 'https://ui-avatars.com/api/?name=Siti+Aisyah&background=random',
                            },
                            {
                                quote: 'Sejak masuk SD Khoiru Ummah, anak saya semakin cinta dengan Al-Qur\'an. Setiap hari ia semangat untuk muroja\'ah dan setoran hafalan. Guru-gurunya sangat sabar dan profesional dalam membimbing. Biaya pendidikan juga sangat terjangkau untuk kualitas sebagus ini.',
                                name: 'Bapak Ahmad Dahlan',
                                role: 'Wali Santri Kelas 4',
                                image: 'https://ui-avatars.com/api/?name=Ahmad+Dahlan&background=random',
                            },
                            {
                                quote: 'Saya alumni SD Khoiru Ummah angkatan 2020. Alhamdulillah hafalan saya tetap terjaga hingga sekarang di SMP. Ilmu dan akhlak yang diajarkan di SD Khoiru Ummah menjadi bekal yang sangat berharga dalam kehidupan saya.',
                                name: 'Muhammad Fahmi Al-Hakim',
                                role: 'Alumni 2020 - Santri SMP Tahfizh',
                                image: 'https://ui-avatars.com/api/?name=Muhammad+Fahmi&background=random',
                            },
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="relative rounded-xl border-l-4 border-brand-green bg-light-gray-1 p-6 shadow-sm transition-shadow hover:shadow-md"
                            >
                                <span className="material-symbols-outlined absolute right-4 top-4 text-5xl text-brand-green/20">
                                    format_quote
                                </span>
                                <p className="italic text-gray-700 leading-relaxed mb-6">"{testimonial.quote}"</p>
                                <div className="flex items-center mt-auto">
                                    <div
                                        className="size-12 rounded-full bg-cover bg-center bg-no-repeat"
                                        style={{ backgroundImage: `url("${testimonial.image}")` }}
                                    />
                                    <div className="ml-4">
                                        <p className="font-bold text-brand-purple">{testimonial.name}</p>
                                        <p className="text-xs font-medium text-brand-green">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 lg:py-20 bg-light-gray-1">
                <div className="container mx-auto px-4 text-center md:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-brand-purple md:text-3xl">
                        Bergabunglah dengan Keluarga Besar SD Khoiru Ummah
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-medium-gray text-lg">
                        Mari bersama kami wujudkan generasi Hafizh Al-Qur'an yang berakhlak mulia, cerdas, dan siap memimpin masa depan.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <button className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-brand-purple px-6 text-base font-bold leading-normal tracking-wide text-white transition-colors hover:bg-brand-green hover:text-white shadow-lg">
                            <span className="truncate">Jadwalkan Kunjungan Sekolah</span>
                        </button>
                        <button className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 border-brand-green bg-transparent px-6 text-brand-purple font-bold transition-colors hover:bg-brand-green hover:text-white">
                            <span className="truncate">Download Profil Sekolah (PDF)</span>
                        </button>
                    </div>
                    <div className="mt-8 text-sm text-gray-500">
                        <p>Butuh informasi lebih lanjut?</p>
                        <p className="font-medium">Hubungi kami: (021) 1234-5678 | WA: 0812-3456-7890</p>
                    </div>
                </div>
            </section>
        </>
    );
}
