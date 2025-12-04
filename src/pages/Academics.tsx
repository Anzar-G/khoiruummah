import {
    BookOpen, Users, Globe, Microscope, Palette, Calculator, Languages,
    School, Search, Library, GraduationCap, CheckCircle, ArrowRight,
    Quote, Lightbulb, Laptop, Baby
} from 'lucide-react';

export default function Academics() {
    const curriculumPrograms = [
        {
            icon: Baby,
            title: 'Program Tahun Dasar',
            age: 'Usia 5-11',
            description: 'Menumbuhkan rasa ingin tahu dan kecintaan belajar melalui unit tematik berbasis inkuiri.',
            features: [
                'Pembelajaran transdisipliner',
                'Eksplorasi berbasis permainan',
                'Pengembangan keterampilan sosial'
            ]
        },
        {
            icon: Users,
            title: 'Program Tahun Menengah',
            age: 'Usia 11-16',
            description: 'Menghubungkan pembelajaran di kelas dengan dunia nyata, mendorong pemikiran kritis dan reflektif.',
            features: [
                'Proyek interdisipliner',
                'Pengembangan proyek pribadi',
                'Konteks global untuk belajar'
            ]
        },
        {
            icon: School,
            title: 'Program Diploma',
            age: 'Usia 16-19',
            description: 'Program pra-universitas yang ketat dan diakui secara internasional untuk siswa yang sangat termotivasi.',
            features: [
                'Pengetahuan mata pelajaran mendalam',
                'Teori Pengetahuan (TOK)',
                'Esai Tambahan & CAS'
            ]
        }
    ];

    const departments = [
        {
            icon: Microscope,
            name: 'Sains',
            description: 'Menjelajahi dunia alam melalui biologi, kimia, dan fisika.',
            subjects: '12 mata pelajaran'
        },
        {
            icon: BookOpen,
            name: 'Humaniora & Ilmu Sosial',
            description: 'Memahami masyarakat, budaya, dan sejarah dari seluruh dunia.',
            subjects: '10 mata pelajaran'
        },
        {
            icon: Calculator,
            name: 'Matematika',
            description: 'Mengembangkan penalaran logis dan keterampilan memecahkan masalah.',
            subjects: '8 mata pelajaran'
        },
        {
            icon: Palette,
            name: 'Seni & Desain',
            description: 'Memupuk kreativitas melalui seni visual, musik, dan drama.',
            subjects: '14 mata pelajaran'
        },
        {
            icon: Languages,
            name: 'Bahasa & Sastra',
            description: 'Membina komunikasi global dan pemahaman budaya.',
            subjects: '16 mata pelajaran'
        },
        {
            icon: Users,
            name: 'Pendidikan Jasmani & Kesehatan',
            description: 'Mempromosikan kesehatan fisik dan kesejahteraan seumur hidup.',
            subjects: '7 mata pelajaran'
        }
    ];

    const learningApproaches = [
        {
            icon: Search,
            title: 'Pembelajaran Berbasis Inkuiri',
            description: 'Kami mendorong siswa untuk bertanya dan mengeksplorasi topik yang memicu rasa ingin tahu mereka. Pendekatan ini menumbuhkan pemikiran kritis dan pemahaman konsep yang lebih dalam.'
        },
        {
            icon: Users,
            title: 'Proyek Kolaboratif',
            description: 'Kerja tim sangat penting. Siswa belajar berkomunikasi secara efektif, berbagi ide, dan bekerja sama untuk memecahkan masalah kompleks, mempersiapkan mereka untuk kesuksesan di masa depan.'
        },
        {
            icon: Laptop,
            title: 'Integrasi Teknologi',
            description: 'Kami memanfaatkan teknologi untuk meningkatkan pembelajaran, menyediakan siswa dengan alat dan sumber daya digital untuk berinovasi, meneliti, dan berkreasi di dunia yang terhubung.'
        },
        {
            icon: Globe,
            title: 'Perspektif Global',
            description: 'Kurikulum kami menggabungkan berbagai sudut pandang, mengajar siswa untuk menghargai budaya yang berbeda dan memahami peran mereka sebagai warga dunia.'
        }
    ];

    const supportServices = [
        {
            icon: Lightbulb,
            title: 'Layanan Konseling',
            description: 'Bimbingan pribadi dan akademik untuk semua siswa.'
        },
        {
            icon: Library,
            title: 'Sumber Daya Perpustakaan',
            description: 'Sumber daya yang luas untuk penelitian dan belajar.'
        },
        {
            icon: School,
            title: 'Dukungan Pembelajaran',
            description: 'Bantuan yang disesuaikan untuk kebutuhan belajar yang beragam.'
        },
        {
            icon: GraduationCap,
            title: 'Panduan Universitas',
            description: 'Membantu siswa dalam proses aplikasi universitas.'
        }
    ];

    const testimonials = [
        {
            quote: 'Program Diploma Khoiru Ummah menantang saya untuk berpikir kritis dan mempersiapkan saya dengan sangat baik untuk universitas. Para guru yang suportif adalah kunci kesuksesan saya.',
            name: 'Fatimah Zahra',
            class: 'Angkatan 2023',
            achievement: 'Penerima Beasiswa Prestasi'
        },
        {
            quote: 'Proyek kolaboratif dan fokus pada masalah dunia nyata dalam Program Tahun Menengah membuat belajar menjadi menarik dan relevan. Saya menemukan minat saya pada teknik di sini.',
            name: 'Ahmad Rizki',
            class: 'Kelas 10',
            achievement: 'Pemenang Olimpiade Sains'
        }
    ];

    return (
        <div className="w-full">
            {/* Hero Section - Matching HTML design */}
            <section
                className="relative -mx-6 mb-10 flex min-h-[350px] flex-col justify-end overflow-hidden rounded-xl bg-cover bg-center text-white lg:-mx-8"
                style={{
                    backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.1) 100%), url("https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070")'
                }}
            >
                <div className="z-10 p-8 md:p-12">
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                        <a href="/" className="text-gray-300 hover:text-white">Beranda</a>
                        <span className="text-brand-green">&gt;</span>
                        <span className="font-bold text-white">Akademik</span>
                    </div>
                    <h1 className="mt-4 text-4xl font-bold md:text-5xl">Keunggulan Akademik</h1>
                    <p className="mt-2 max-w-2xl text-lg text-gray-200 md:text-xl">
                        Kurikulum kelas dunia yang dirancang untuk menginspirasi pembelajar seumur hidup
                    </p>
                </div>
            </section>

            {/* Philosophy Section - Elevated card */}
            <section className="relative z-20 -mt-10 mb-16">
                <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg md:p-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-brand-purple">Filosofi Akademik Kami</h2>
                        <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-gray-700">
                            Di Khoiru Ummah, kami percaya pada pendekatan akademik holistik yang tidak hanya menumbuhkan
                            kecerdasan intelektual, tetapi juga kesejahteraan pribadi dan emosional. Kurikulum kami dibangun
                            di atas prinsip pembelajaran yang berpusat pada siswa, di mana rasa ingin tahu dipicu, pemikiran
                            kritis dikembangkan, dan semangat untuk penemuan seumur hidup dinyalakan.
                        </p>
                        <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-gray-700">
                            Kami mempertahankan standar akademik yang ketat sambil memastikan lingkungan yang mendukung yang
                            memungkinkan setiap siswa untuk berkembang. Melalui program yang seimbang dan menarik, kami
                            memberdayakan siswa untuk mengeksplorasi minat mereka, mengatasi tantangan, dan mencapai potensi
                            penuh mereka sebagai warga global yang percaya diri dan penuh kasih.
                        </p>
                    </div>
                </div>
            </section>

            {/* Curriculum Framework */}
            <section className="-mx-6 mb-16 bg-slate-50 px-6 py-16 lg:-mx-8 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-brand-purple">Kerangka Kurikulum Kami</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                            Jalur terstruktur membimbing siswa kami dari pembelajaran dasar hingga studi pra-universitas yang terspesialisasi.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {curriculumPrograms.map((program, index) => {
                            const Icon = program.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col rounded-xl border-t-4 border-brand-green bg-white p-8 shadow-md transition-all hover:border-brand-purple hover:shadow-xl"
                                >
                                    <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-brand-green/20 text-brand-purple">
                                        <Icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-purple">{program.title}</h3>
                                    <p className="mb-4 text-sm font-medium text-brand-green">{program.age}</p>
                                    <p className="mb-6 flex-grow text-slate-600">{program.description}</p>
                                    <ul className="mt-6 space-y-2 text-sm text-slate-700">
                                        {program.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-green" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href="#"
                                        className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-purple transition-colors hover:text-brand-green"
                                    >
                                        Pelajari Lebih Lanjut <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Academic Departments */}
            <section className="mb-16 bg-white py-16 lg:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-brand-purple">Departemen Akademik</h2>
                    </div>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {departments.map((dept, index) => {
                            const Icon = dept.icon;
                            return (
                                <div
                                    key={index}
                                    className="group transform rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                >
                                    <div className="h-40 rounded-t-lg bg-gradient-to-br from-slate-100 to-slate-200"></div>
                                    <div className="border-b-3 border-brand-green p-6">
                                        <div className="flex items-center gap-3">
                                            <Icon className="h-8 w-8 text-brand-green" />
                                            <h3 className="text-lg font-bold text-brand-purple">{dept.name}</h3>
                                        </div>
                                        <p className="mt-2 text-sm text-slate-600">
                                            {dept.description} ({dept.subjects})
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Learning Approaches */}
            <section className="-mx-6 mb-16 bg-slate-50 px-6 py-16 lg:-mx-8 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-brand-purple">Pendekatan Pembelajaran Kami</h2>
                    </div>
                    <div className="mt-12 space-y-16">
                        {learningApproaches.map((approach, index) => {
                            const Icon = approach.icon;
                            const isEven = index % 2 === 0;
                            return (
                                <div
                                    key={index}
                                    className={`grid items-center gap-8 md:grid-cols-2 md:gap-12`}
                                >
                                    <div className={isEven ? 'order-2 md:order-1' : ''}>
                                        <div className="flex items-center gap-4">
                                            <div className="flex size-12 items-center justify-center rounded-full bg-brand-green/20 text-brand-green">
                                                <Icon className="h-7 w-7" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-brand-purple">{approach.title}</h3>
                                        </div>
                                        <p className="mt-4 text-slate-600">{approach.description}</p>
                                    </div>
                                    <div className={`h-64 w-full rounded-lg border-4 border-brand-green bg-gradient-to-br from-slate-100 to-slate-200 ${isEven ? 'order-1 md:order-2' : ''}`}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Academic Support & Calendar */}
            <section className="mb-16 bg-white py-16 lg:py-20">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
                    <div>
                        <h3 className="text-2xl font-bold text-brand-purple">Dukungan Akademik</h3>
                        <div className="mt-6 space-y-4">
                            {supportServices.map((service, index) => {
                                const Icon = service.icon;
                                return (
                                    <div key={index} className="flex items-start gap-4">
                                        <Icon className="mt-1 h-6 w-6 text-brand-green" />
                                        <div>
                                            <h4 className="font-semibold text-slate-800">{service.title}</h4>
                                            <p className="text-sm text-slate-600">{service.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <a
                            href="#"
                            className="mt-6 inline-block font-semibold text-brand-purple hover:text-brand-green"
                        >
                            Jelajahi Semua Sumber Daya
                        </a>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-brand-purple">Sekilas Tahun Akademik</h3>
                        <div className="mt-6 space-y-4">
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center rounded-lg bg-brand-purple/10 px-4 py-2 text-center">
                                    <p className="text-sm font-bold text-brand-purple">OKT</p>
                                    <p className="text-xl font-bold text-brand-purple">28</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800">Konferensi Orang Tua-Guru</h4>
                                    <p className="text-sm text-slate-600">Kesempatan untuk membahas kemajuan siswa.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center rounded-lg bg-brand-purple/10 px-4 py-2 text-center">
                                    <p className="text-sm font-bold text-brand-purple">NOV</p>
                                    <p className="text-xl font-bold text-brand-purple">15</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800">Ujian Tengah Semester</h4>
                                    <p className="text-sm text-slate-600">Ujian Program Tahun Menengah dan Diploma dimulai.</p>
                                </div>
                            </div>
                        </div>
                        <a
                            href="#"
                            className="mt-6 inline-block font-semibold text-brand-purple hover:text-brand-green"
                        >
                            Unduh Kalender Lengkap (PDF)
                        </a>
                    </div>
                </div>
            </section>

            {/* University Placement Stats */}
            <section className="-mx-6 mb-16 bg-brand-purple px-6 py-16 lg:-mx-8 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-7xl text-center">
                    <h2 className="text-3xl font-bold text-white">Penempatan Universitas</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-gray-200">
                        Lulusan kami diterima di universitas-universitas terkemuka di seluruh dunia.
                    </p>
                    <div className="mt-12 grid grid-cols-2 gap-8 text-white md:grid-cols-4">
                        <div>
                            <p className="text-5xl font-bold text-brand-green">95%</p>
                            <p className="mt-2 text-sm uppercase tracking-wider text-gray-300">Tingkat Penerimaan</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold text-brand-green">Top 100</p>
                            <p className="mt-2 text-sm uppercase tracking-wider text-gray-300">Universitas Dunia</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold text-brand-green">20+</p>
                            <p className="mt-2 text-sm uppercase tracking-wider text-gray-300">Negara</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold text-brand-green">$3Jt+</p>
                            <p className="mt-2 text-sm uppercase tracking-wider text-gray-300">Dalam Beasiswa</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Student Testimonials */}
            <section className="-mx-6 mb-16 bg-slate-50 px-6 py-16 lg:-mx-8 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-brand-purple">Suara Siswa</h2>
                    </div>
                    <div className="mt-12 grid gap-8 md:grid-cols-2">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="rounded-lg border-l-4 border-brand-green bg-white p-8 shadow-md"
                            >
                                <Quote className="h-10 w-10 text-brand-green/20" />
                                <p className="mt-2 italic text-slate-600">"{testimonial.quote}"</p>
                                <div className="mt-4 flex items-center gap-3">
                                    <div className="h-12 w-12 rounded-full bg-slate-200"></div>
                                    <div>
                                        <p className="font-bold text-brand-purple">{testimonial.name}</p>
                                        <p className="text-sm text-brand-green">{testimonial.class}</p>
                                        <p className="text-xs text-gray-500">{testimonial.achievement}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="mb-16 bg-white py-16 text-center lg:py-20">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-3xl font-bold text-brand-purple">Rasakan Keunggulan Akademik</h2>
                    <p className="mt-4 text-slate-600">
                        Temukan perbedaan pendidikan di Khoiru Ummah. Jelajahi kampus kami, tinjau kurikulum kami secara detail,
                        atau lihat apa yang terjadi tahun ini.
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <button className="w-full rounded-lg bg-brand-purple px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-purple-700 sm:w-auto">
                            Jadwalkan Tur Kampus
                        </button>
                        <button className="w-full rounded-lg border-2 border-brand-green px-6 py-3 font-semibold text-brand-green transition-colors hover:bg-brand-green hover:text-white sm:w-auto">
                            Lihat Kalender Akademik
                        </button>
                    </div>
                    <a
                        href="#"
                        className="mt-6 inline-block font-medium text-slate-600 underline-offset-4 hover:text-brand-purple hover:underline"
                    >
                        Unduh Panduan Kurikulum
                    </a>
                </div>
            </section>
        </div>
    );
}
