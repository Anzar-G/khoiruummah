export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="w-full">
                <div
                    className="relative flex min-h-[480px] flex-col justify-end gap-8 rounded-xl bg-cover bg-center p-6 text-white md:p-10"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDf9UeH1B0ACNTadZQy_s1z_Pro720F6V-JCpChfpPtlQmA0s5XUK56SpIPD1Hur4RCxKG2LPvFcKEJT-t5WazlIkyXV6ix15ghUK4cN07iQmd8xKMlWbG3_nfPhZ5cJSSvz8iVErJ8kSMpxUD5P2qk73Iz_Oo2Qtsrxu-UAkkBgsa8ZIX-cnamNpHKrs3AhluGZP0CmMm0jGNj17kBWYHoTjiv_bd-JyBSo3rbrDa50Oo67TgTePLq-BSViy15eFU5k4G-A4nC1daH")',
                    }}
                >
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-black leading-tight tracking-tight md:text-5xl">
                            Memberdayakan Pikiran, Membentuk Masa Depan
                        </h1>
                        <p className="text-sm font-normal text-slate-200 md:text-base">
                            Temukan pendidikan kelas dunia yang menginspirasi siswa untuk mencapai potensi penuh
                            mereka.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button className="flex h-12 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-brand-purple px-5 text-base font-bold text-white shadow-lg transition-colors hover:bg-brand-green">
                            <span>Tanya Sekarang</span>
                        </button>
                        <button className="flex h-12 cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 border-brand-green bg-transparent px-5 text-base font-bold text-brand-green shadow-lg transition-colors hover:bg-brand-green hover:text-white">
                            <span>Jadwalkan Tur</span>
                        </button>
                    </div>
                </div>

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 px-2 py-4">
                    <span className="text-sm font-medium text-medium-gray">Beranda</span>
                    <span className="text-sm font-medium text-brand-green">/</span>
                    <span className="text-sm font-medium text-brand-purple">Akademik</span>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="my-10 w-full rounded-xl bg-light-gray-1 p-6 md:p-8">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
                    <div className="text-center">
                        <p className="text-4xl font-bold text-brand-green md:text-5xl">2.000+</p>
                        <p className="mt-1 text-sm text-dark-gray md:text-base">Siswa Terdaftar</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-bold text-brand-green md:text-5xl">50+</p>
                        <p className="mt-1 text-sm text-dark-gray md:text-base">Kebangsaan</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-bold text-brand-green md:text-5xl">25</p>
                        <p className="mt-1 text-sm text-dark-gray md:text-base">Tahun Keunggulan</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-bold text-brand-green md:text-5xl">98%</p>
                        <p className="mt-1 text-sm text-dark-gray md:text-base">Penempatan Universitas</p>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="my-10 w-full">
                <h2 className="mb-6 text-2xl font-bold text-brand-purple md:text-3xl">
                    Temukan Program Kami
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {[
                        {
                            icon: 'school',
                            title: 'Program Diploma IB',
                            description:
                                'Kurikulum yang ketat dan diakui secara internasional untuk siswa berusia 16-19 tahun.',
                        },
                        {
                            icon: 'science',
                            title: 'Keunggulan STEM',
                            description:
                                'Membina inovasi dalam sains, teknologi, teknik, dan matematika.',
                        },
                        {
                            icon: 'music_note',
                            title: 'Seni & Musik',
                            description:
                                'Memelihara kreativitas dan ekspresi melalui beragam disiplin artistik.',
                        },
                    ].map((program, index) => (
                        <div
                            key={index}
                            className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-brand-green hover:shadow-xl"
                        >
                            <div className="flex h-48 w-full items-center justify-center bg-slate-200 text-slate-500">
                                <span className="material-symbols-outlined text-5xl text-brand-green">
                                    {program.icon}
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 p-6">
                                <h3 className="text-xl font-bold text-brand-purple">{program.title}</h3>
                                <p className="text-base text-slate-700">{program.description}</p>
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

            {/* Campus Life Section */}
            <section className="my-10 w-full">
                <h2 className="mb-6 text-2xl font-bold text-brand-purple md:text-3xl">Kehidupan Kampus</h2>
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                    <div className="col-span-2 row-span-2 flex h-full min-h-[300px] items-center justify-center rounded-xl border-b-2 border-brand-green bg-slate-200 text-dark-gray md:col-span-1 md:min-h-[400px]">
                        Gambar Potret (4:3)
                    </div>
                    <div className="col-span-2 row-span-1 flex h-full min-h-[150px] items-center justify-center rounded-xl border-b-2 border-brand-green bg-slate-200 text-dark-gray md:col-span-1">
                        Gambar Lanskap (16:9)
                    </div>
                    <div className="col-span-2 row-span-1 flex h-full min-h-[150px] items-center justify-center rounded-xl border-b-2 border-brand-green bg-slate-200 text-dark-gray md:col-span-1">
                        Gambar Lanskap (16:9)
                    </div>
                </div>
            </section>

            {/* News & Events Section */}
            <section className="my-10 w-full">
                <h2 className="mb-6 text-2xl font-bold text-brand-purple md:text-3xl">
                    Berita & Acara Terbaru
                </h2>
                <div className="flex flex-col gap-6">
                    {[
                        {
                            date: '15 Okt 2023',
                            category: 'Akademik',
                            title: 'Pameran Sains Tahunan Menampilkan Inovasi Siswa',
                            description:
                                'Siswa kami mempresentasikan proyek-proyek luar biasa, menunjukkan kreativitas dan pemikiran kritis dalam berbagai bidang ilmiah...',
                        },
                        {
                            date: '12 Okt 2023',
                            category: 'Komunitas',
                            title: 'Perayaan Hari Internasional Meraih Sukses Besar',
                            description:
                                'Keluarga dan staf berkumpul untuk merayakan komunitas kami yang beragam dengan makanan, musik, dan pertunjukan budaya dari seluruh dunia...',
                        },
                    ].map((news, index) => (
                        <div key={index} className="flex flex-col gap-4 rounded-xl bg-white p-4 md:flex-row md:items-start md:gap-6">
                            <div className="flex h-32 w-full flex-shrink-0 items-center justify-center rounded-lg bg-slate-200 text-sm text-slate-500 md:w-48">
                                Gambar Mini
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="rounded-full bg-brand-green px-2 py-0.5 text-xs font-medium text-white">
                                        {news.date}
                                    </span>
                                    <span className="font-medium text-brand-purple">{news.category}</span>
                                </div>
                                <h3 className="text-lg font-bold text-dark-gray transition-colors hover:text-brand-purple">
                                    {news.title}
                                </h3>
                                <p className="text-base text-slate-700">{news.description}</p>
                                <a className="group mt-1 flex items-center gap-1 font-bold text-brand-green" href="#">
                                    <span>Baca Selengkapnya</span>
                                    <span className="transition-transform group-hover:translate-x-1">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="my-10 w-full">
                <h2 className="mb-6 text-2xl font-bold text-brand-purple md:text-3xl">
                    Apa Kata Komunitas Kami
                </h2>
                <div className="relative rounded-xl border-l-4 border-brand-green bg-white p-6 shadow-sm md:p-8">
                    <span className="absolute left-4 top-4 text-6xl font-black text-brand-green opacity-20">
                        "
                    </span>
                    <div className="flex flex-col gap-6 md:flex-row md:items-start">
                        <div className="h-16 w-16 flex-shrink-0 rounded-full bg-slate-200" />
                        <div className="flex flex-col">
                            <p className="text-base italic text-dark-gray md:text-lg">
                                "Schola Internationalis telah memberikan anak-anak kami lingkungan belajar yang tak
                                tertandingi. Para guru berdedikasi, dan kurikulum global telah mempersiapkan mereka
                                untuk masa depan yang cerah."
                            </p>
                            <p className="mt-4 font-bold text-brand-purple">Jane Doe</p>
                            <p className="text-sm text-medium-gray">Orang Tua, Kelas 5 & 8</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-10 w-full rounded-xl bg-brand-purple px-6 py-12 text-white md:px-8">
                <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 md:grid-cols-4">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-white">Tentang Schola</h4>
                        <p className="text-sm text-slate-200">
                            Schola Internationalis adalah institusi terkemuka yang berdedikasi untuk membina
                            keunggulan akademik dan pertumbuhan pribadi dalam komunitas yang beragam dan suportif.
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
                                    Penerimaan
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-brand-green" href="#">
                                    Akademik
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-brand-green" href="#">
                                    Portal Orang Tua
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-brand-green" href="#">
                                    Hubungi Kami
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-white">Hubungi Kami</h4>
                        <address className="flex flex-col gap-2 text-sm not-italic text-slate-200">
                            <p>123 Education Lane, Knowledge City, 12345</p>
                            <p>Telepon: (123) 456-7890</p>
                            <p>Email: admissions@schola.edu</p>
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
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.354.23-2.06.088.621 1.942 2.418 3.323 4.545 3.362-1.843 1.447-4.137 2.26-6.628 2.234-.43 0-.85-.02-1.27-.074 2.383 1.532 5.223 2.423 8.31 2.423 9.967 0 15.417-8.223 15.12-15.542.947-.684 1.772-1.53 2.423-2.502z" />
                                </svg>
                            </a>
                            <a className="text-white hover:text-brand-green" href="#">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
