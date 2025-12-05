import { Link } from 'react-router-dom';

export default function NewsEvents() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section
                className="relative flex min-h-[400px] flex-col justify-end bg-cover bg-center p-8 text-white"
                style={{
                    backgroundImage:
                        'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.1) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCUVItFycre05007okGK5rZDMO9Txgohq9qQKrWJhHkHWAQB4Z9i42ot6AP5X-q3jVRanmF4yOWvt1EXUfo98LlprHZWvgJ6Mz4E7x4fuDJlF4_iUTo_yP2CThic5xq_dNlIow3K_eAq8BPhV28q5jytnavoPEUnQ5E8Lnyy73vh2pZYqaps1LFvrR1Tp6yuf6APFx0L3kTDzj_udmBXlQYNiYlfxJnvmpLNodn4hzVPPcBvLe2KuayEngNMIdEJ5FsCWBHV7-i7m0y")',
                }}
            >
                <div className="absolute left-0 top-0 w-full p-8">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Link className="hover:underline" to="/">
                            Beranda
                        </Link>
                        <span className="text-brand-green">/</span>
                        <span className="font-semibold text-white">Berita & Acara</span>
                    </div>
                </div>
                <div className="z-10 px-0 lg:px-8">
                    <h1 className="text-5xl font-bold">Berita & Acara</h1>
                    <p className="mt-2 text-xl text-gray-200">
                        Tetap terinformasi tentang kejadian terbaru di SD Khoiru Ummah
                    </p>
                </div>
            </section>

            {/* Sticky Filter Bar */}
            <div className="sticky top-0 z-30 bg-white shadow-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center space-x-2 py-4 overflow-x-auto">
                        <button className="rounded-full px-5 py-2 text-sm font-medium text-medium-gray transition-colors hover:bg-light-gray-2">
                            Semua
                        </button>
                        <button className="rounded-full bg-brand-purple px-5 py-2 text-sm font-medium text-white transition-colors">
                            Berita & Pengumuman
                        </button>
                        <button className="rounded-full px-5 py-2 text-sm font-medium text-medium-gray transition-colors hover:bg-light-gray-2">
                            Acara Mendatang
                        </button>
                        <button className="rounded-full px-5 py-2 text-sm font-medium text-medium-gray transition-colors hover:bg-light-gray-2">
                            Acara Terdahulu
                        </button>
                    </div>
                </div>
            </div>

            {/* News Grid */}
            <section className="bg-white py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-bold text-brand-purple">
                        Berita & Pengumuman Terbaru
                    </h2>
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {/* News Item 1 */}
                        <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    alt="Siswa merayakan kemenangan kejuaraan dalam kompetisi robotik"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm0hirVpsTpsaYpEyJ2PTe4znAHQp0eqxhiPxmdHa_R8ycinEV4wbvjIoesyI-sFpHPneoKZcglbsWTFVZIpyVL__e4rXyCVq0dicwWqqUGfxXvFQ1PEh7U4QuNdFV-_B2riM0Fb-qfhKKcpF6Xu4kwYnGADsk7t3OKbn-G3PrGNeaab2o3DHArKx0yYTWUMBusSi-w8DulXXmBZmBWSY-gLjHem6buZXcKLTwP4Uiu7ZOkxk_7-L1z0SOCIT-4UMSQijYNjibL0v6"
                                />
                                <span className="absolute left-3 top-3 rounded-full bg-brand-green/10 px-2 py-0.5 text-xs font-medium text-brand-green">
                                    Akademik
                                </span>
                            </div>
                            <div className="flex flex-grow flex-col p-6">
                                <p className="mb-3 text-sm text-medium-gray">26 Oktober 2023</p>
                                <h3 className="mb-3 flex-grow text-xl font-bold leading-snug text-brand-purple">
                                    Tim Robotik SD Khoiru Ummah Memenangkan Kejuaraan Nasional
                                </h3>
                                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-dark-gray">
                                    Tim robotik kami yang berbakat, 'Circuit Breakers,' membawa pulang piala juara pertama dari Kompetisi Robotik Nasional. Desain inovatif dan eksekusi sempurna mereka mengesankan para juri.
                                </p>
                                <div className="mt-auto border-t border-gray-200 pt-4">
                                    <p className="text-xs text-medium-gray">Oleh Jane Doe - 4 menit baca</p>
                                </div>
                            </div>
                        </div>

                        {/* News Item 2 */}
                        <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    alt="Fasilitas sekolah modern untuk mata pelajaran STEAM"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgVpfT0QrCN6Aw_OVFNgxD2YwET2pig6b1UehEQwDQfa1oI8Mbp500CtUXXtP5m5LymZHuxOcoxlAVWkbCY0VtyiAmRNtgP_sgDKBUX4H-96OEPySw9aRefL3s6jhHm-VCTQuGcvqT4gTAc2NtzhnKHdEF35VNVG4GNoHHIiNgV3ENLcnmDuhguZzoEN1mxrsSWEufAqihJ7qgN_QRAt92gwr_-iAZacDYGwaoS4-H4jZLU5nETDbXoBMz2apdKfpPpeuTinFkC5Vx"
                                />
                                <span className="absolute left-3 top-3 rounded-full bg-brand-purple/10 px-2 py-0.5 text-xs font-medium text-brand-purple">
                                    Pengumuman
                                </span>
                            </div>
                            <div className="flex flex-grow flex-col p-6">
                                <p className="mb-3 text-sm text-medium-gray">24 Oktober 2023</p>
                                <h3 className="mb-3 flex-grow text-xl font-bold leading-snug text-brand-purple">
                                    Upacara Peresmian Fasilitas STEAM Baru
                                </h3>
                                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-dark-gray">
                                    Bergabunglah dengan kami untuk peresmian fasilitas Sains, Teknologi, Teknik, Seni, dan Matematika (STEAM) kami yang canggih. Acara ini akan menampilkan upacara pemotongan pita dan tur berpemandu.
                                </p>
                                <div className="mt-auto border-t border-gray-200 pt-4">
                                    <p className="text-xs text-medium-gray">Oleh John Smith - 2 menit baca</p>
                                </div>
                            </div>
                        </div>

                        {/* News Item 3 */}
                        <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    alt="Kelompok siswa yang beragam merayakan hari internasional"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCoWHd3WxcdwWFA7vVRoGNgaEClUHtoFae45wwGHXdtAqrAVGYKOFCaEFBbHz5Ez1_XqVewmLZVvmDLBNlNB0GV44nQT0LfyQE6E6DeAzsrVpkRmuUPwhvyVtR0vuU7qsArUiLY0xZgGr1J1FNdCtaGs_jrYpBh-zAML7j73oTSgIjCatR5iAlJl2QgBJrA_-MIG0MsDNXTkovDvDFoCdlaOXrkDK1qxFYxFrcpY7tmq9YPH5QWdA3YR-RwKY7zn0EOP18luaBW6oc"
                                />
                                <span className="absolute left-3 top-3 rounded-full bg-brand-green/10 px-2 py-0.5 text-xs font-medium text-brand-green">
                                    Kehidupan Siswa
                                </span>
                            </div>
                            <div className="flex flex-grow flex-col p-6">
                                <p className="mb-3 text-sm text-medium-gray">22 Oktober 2023</p>
                                <h3 className="mb-3 flex-grow text-xl font-bold leading-snug text-brand-purple">
                                    Hari Internasional Tahunan: Perayaan Budaya
                                </h3>
                                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-dark-gray">
                                    Saksikan pertunjukan tradisi, makanan, dan penampilan yang semarak dari seluruh dunia, yang dipersembahkan oleh komunitas siswa kami yang beragam.
                                </p>
                                <div className="mt-auto border-t border-gray-200 pt-4">
                                    <p className="text-xs text-medium-gray">Oleh Komunikasi Sekolah - 5 menit baca</p>
                                </div>
                            </div>
                        </div>

                        {/* News Item 4 */}
                        <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    alt="Orkestra siswa tampil di atas panggung"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO7gUCWAey7Jyt8hUzvZBy9CdA5sUbzU_PnVbnQ8rTjk9bgyanVV0j9UkNztkFV-lqRDEtsSYGqfmDI5rlUyFAi3XTXQ5AZlv3xe3u8Iibgua5eJeSOHs6QGS2pbr3eNVY_FoXLHDRsp0oNZL5BX4ccK1YIdiMZKncF0O1UOGdu831a3y3mnhx-yNoTUDJCxPiP8TCCUIHZH4o3DStu4hBKzgP5X9jryBjJSLoEfnvvo7AW8Ine9Vn9p8j1iTnRKQ19cEvwr6D6EC-"
                                />
                                <span className="absolute left-3 top-3 rounded-full bg-brand-green/10 px-2 py-0.5 text-xs font-medium text-brand-green">
                                    Seni & Budaya
                                </span>
                            </div>
                            <div className="flex flex-grow flex-col p-6">
                                <p className="mb-3 text-sm text-medium-gray">18 Oktober 2023</p>
                                <h3 className="mb-3 flex-grow text-xl font-bold leading-snug text-brand-purple">
                                    Konser Musim Gugur Tahunan Sukses Besar
                                </h3>
                                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-dark-gray">
                                    Para musisi siswa kami memberikan penampilan yang memukau di Konser Musim Gugur tahunan. Malam itu menampilkan program yang beragam dari mahakarya klasik hingga aransemen kontemporer.
                                </p>
                                <div className="mt-auto border-t border-gray-200 pt-4">
                                    <p className="text-xs text-medium-gray">Oleh Emily White - 3 menit baca</p>
                                </div>
                            </div>
                        </div>

                        {/* News Item 5 */}
                        <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    alt="Siswa berpartisipasi dalam acara olahraga"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1ZZc1fJ4p51pcqiokvvHf_ZEcJ6heM7zXONZSROHVvEpWPUgeBVq1fm_o7aDNPqs-15OoBJGl9QWe-tJKHlpo4xlrpA5_3dQjtjKFG7IyELbsEefQ4zwiVrgamSwz-iLe4Ozj-ZUiaPmJxSMEsi7ExeKB09zJ56XfdtAl3SP8RCmGEw81UdVp_qPVJExnCGrm9vAGjHsBVKQtl71xisb-29CWICXs7dZpHkqElHddkfT3QIEIf6gE7572if_z29mnez-DvRLud6zu"
                                />
                                <span className="absolute left-3 top-3 rounded-full bg-brand-green/10 px-2 py-0.5 text-xs font-medium text-brand-green">
                                    Atletik
                                </span>
                            </div>
                            <div className="flex flex-grow flex-col p-6">
                                <p className="mb-3 text-sm text-medium-gray">15 Oktober 2023</p>
                                <h3 className="mb-3 flex-grow text-xl font-bold leading-snug text-brand-purple">
                                    Tim Sepak Bola Varsity Meraih Gelar Regional
                                </h3>
                                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-dark-gray">
                                    Tim sepak bola varsity kami meraih kejuaraan regional dalam pertandingan final yang mendebarkan hingga perpanjangan waktu. Kerja keras dan sportivitas tim ditampilkan sepenuhnya.
                                </p>
                                <div className="mt-auto border-t border-gray-200 pt-4">
                                    <p className="text-xs text-medium-gray">Oleh Mark Davis - 3 menit baca</p>
                                </div>
                            </div>
                        </div>

                        {/* News Item 6 */}
                        <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    alt="Siswa menjadi sukarelawan di komunitas lokal"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuATHB3IBiMhPAnWgprPNGCE1YNt5HzGIwWbSy2OJ3Aef706PONQb2rCkb1j85FiyFc-_7M34JF1E6p-AJB3tMNKzJx4v8f8y88FTJ3d0A5U-A7UnNZ7TsxvZIKU7U2-1vG3dJNJtLm9dA7enKX8yYALduAA_hyEQesn_u0gwsN9i3vs-XoO9e9LD5uMXn_DLncuzopgGq0zY269vHKhekUTI58WdbclxwWYVEEqMptttLmYF6HX8JYailKOtGG7pzQOiXjE6baCF4p8"
                                />
                                <span className="absolute left-3 top-3 rounded-full bg-brand-purple/10 px-2 py-0.5 text-xs font-medium text-brand-purple">
                                    Komunitas
                                </span>
                            </div>
                            <div className="flex flex-grow flex-col p-6">
                                <p className="mb-3 text-sm text-medium-gray">12 Oktober 2023</p>
                                <h3 className="mb-3 flex-grow text-xl font-bold leading-snug text-brand-purple">
                                    Siswa Memimpin Penggalangan Makanan Komunitas yang Sukses
                                </h3>
                                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-dark-gray">
                                    OSIS kami menyelenggarakan penggalangan makanan yang sangat sukses, mengumpulkan lebih dari 1.000 item makanan untuk bank makanan lokal.
                                </p>
                                <div className="mt-auto border-t border-gray-200 pt-4">
                                    <p className="text-xs text-medium-gray">Oleh OSIS - 2 menit baca</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="mt-16 flex justify-center">
                        <nav className="flex items-center space-x-2">
                            <button className="rounded-lg bg-brand-purple px-4 py-2 text-sm font-medium text-white">
                                1
                            </button>
                            <button className="rounded-lg px-4 py-2 text-sm font-medium text-medium-gray hover:bg-light-gray-2 hover:text-brand-purple">
                                2
                            </button>
                            <button className="rounded-lg px-4 py-2 text-sm font-medium text-medium-gray hover:bg-light-gray-2 hover:text-brand-purple">
                                3
                            </button>
                            <button className="rounded-lg px-4 py-2 text-sm font-medium text-medium-gray hover:bg-light-gray-2 hover:text-brand-purple">
                                Selanjutnya
                            </button>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="bg-light-gray-1 py-16 lg:py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-3xl font-bold text-brand-purple">Acara Mendatang</h2>
                    <p className="mt-2 text-center text-medium-gray">
                        Tandai kalender Anda untuk acara-acara menarik ini!
                    </p>
                    <div className="relative mt-16 space-y-12">
                        {/* Vertical Line */}
                        <div className="absolute left-0 top-4 h-full w-0.5 bg-gray-200 md:left-1/2 md:-translate-x-1/2"></div>

                        {/* Event 1 */}
                        <div className="relative pl-8 md:pl-0">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div className="flex justify-start md:justify-end md:text-right">
                                    <div className="inline-block w-28 rounded-lg bg-brand-purple p-4 text-center text-white shadow-sm">
                                        <span className="block text-sm font-semibold uppercase">NOV</span>
                                        <span className="block text-4xl font-bold leading-none">15</span>
                                        <span className="mt-1 block text-xs">2023</span>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <span className="absolute -left-1.5 top-5 h-3 w-3 rounded-full border-2 border-light-gray-1 bg-brand-green md:left-1/2 md:-translate-x-1/2"></span>
                                    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-brand-green">
                                            <span className="material-symbols-outlined">schedule</span>
                                            <span>09:00 - 11:00</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-brand-purple">
                                            Konferensi Orang Tua-Guru
                                        </h3>
                                        <div className="mb-3 mt-2 flex items-center gap-2 text-sm text-medium-gray">
                                            <span className="material-symbols-outlined">location_on</span>
                                            <span>Auditorium Utama Sekolah</span>
                                        </div>
                                        <p className="mb-4 text-sm text-dark-gray">
                                            Kesempatan untuk mendiskusikan kemajuan anak Anda dengan guru mereka. Silakan pesan slot Anda secara online.
                                        </p>
                                        <button className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-brand-purple transition-colors hover:bg-brand-purple/5">
                                            Tambahkan ke Kalender
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Event 2 */}
                        <div className="relative pl-8 md:pl-0">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div className="flex justify-start md:justify-end md:text-right">
                                    <div className="inline-block w-28 rounded-lg bg-brand-green p-4 text-center text-white shadow-sm">
                                        <span className="block text-sm font-semibold uppercase">DES</span>
                                        <span className="block text-4xl font-bold leading-none">05</span>
                                        <span className="mt-1 block text-xs">2023</span>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <span className="absolute -left-1.5 top-5 h-3 w-3 rounded-full border-2 border-light-gray-1 bg-brand-green md:left-1/2 md:-translate-x-1/2"></span>
                                    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-brand-green">
                                            <span className="material-symbols-outlined">schedule</span>
                                            <span>18:00 dan seterusnya</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-brand-purple">
                                            Gala Musim Dingin & Penggalangan Dana Tahunan
                                        </h3>
                                        <div className="mb-3 mt-2 flex items-center gap-2 text-sm text-medium-gray">
                                            <span className="material-symbols-outlined">location_on</span>
                                            <span>The Grand Ballroom</span>
                                        </div>
                                        <p className="mb-4 text-sm text-dark-gray">
                                            Malam ajaib penuh musik, makan malam, dan kebersamaan untuk mendukung dana pengembangan sekolah kita.
                                        </p>
                                        <button className="inline-flex items-center rounded-full bg-brand-purple px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-purple/90">
                                            RSVP Sekarang
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Event 3 */}
                        <div className="relative pl-8 md:pl-0">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div className="flex justify-start md:justify-end md:text-right">
                                    <div className="inline-block w-28 rounded-lg bg-brand-purple p-4 text-center text-white shadow-sm">
                                        <span className="block text-sm font-semibold uppercase">DES</span>
                                        <span className="block text-4xl font-bold leading-none">18</span>
                                        <span className="mt-1 block text-xs">2023</span>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <span className="absolute -left-1.5 top-5 h-3 w-3 rounded-full border-2 border-light-gray-1 bg-brand-green md:left-1/2 md:-translate-x-1/2"></span>
                                    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-brand-green">
                                            <span className="material-symbols-outlined">schedule</span>
                                            <span>14:00 - 16:00</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-brand-purple">
                                            Majelis Akhir Semester Sekolah
                                        </h3>
                                        <div className="mb-3 mt-2 flex items-center gap-2 text-sm text-medium-gray">
                                            <span className="material-symbols-outlined">location_on</span>
                                            <span>Aula Olahraga</span>
                                        </div>
                                        <p className="mb-4 text-sm text-dark-gray">
                                            Bergabunglah dengan kami saat kami merayakan prestasi siswa dari semester lalu dan menyambut liburan.
                                        </p>
                                        <button className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-brand-purple transition-colors hover:bg-brand-purple/5">
                                            Tambahkan ke Kalender
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calendar CTA */}
            <section className="bg-white py-16 lg:py-20">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-brand-purple">Jangan Lewatkan Acara Apapun</h2>
                    <p className="mt-2 text-medium-gray">
                        Berlangganan kalender kami dan tetap terbarui dengan semua kegiatan sekolah.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <button className="inline-flex items-center justify-center rounded-full bg-brand-purple px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-purple/90">
                            <span className="material-symbols-outlined mr-2">download</span>
                            Unduh Kalender (PDF)
                        </button>
                        <button className="inline-flex items-center justify-center rounded-full border border-gray-200 px-5 py-3 text-sm font-medium text-dark-gray transition-colors hover:bg-light-gray-2">
                            <span className="material-symbols-outlined mr-2 text-brand-green">
                                calendar_add_on
                            </span>
                            Tambahkan ke Google Kalender
                        </button>
                    </div>
                </div>
            </section>

            {/* Archive & Newsletter */}
            <section className="bg-light-gray-1 py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                        {/* Archive */}
                        <div>
                            <h3 className="text-2xl font-bold text-brand-purple">Arsip Berita</h3>
                            <p className="mt-2 text-medium-gray">
                                Jelajahi berita dan pengumuman terdahulu.
                            </p>
                            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <select className="rounded-lg border-gray-200 focus:border-brand-green focus:ring-brand-green">
                                    <option>Berdasarkan Tahun</option>
                                    <option>2023</option>
                                    <option>2022</option>
                                    <option>2021</option>
                                </select>
                                <select className="rounded-lg border-gray-200 focus:border-brand-green focus:ring-brand-green">
                                    <option>Berdasarkan Bulan</option>
                                    <option>Oktober</option>
                                    <option>September</option>
                                    <option>Agustus</option>
                                </select>
                            </div>
                            <a
                                className="mt-6 inline-flex items-center text-sm font-semibold text-brand-green hover:underline"
                                href="#"
                            >
                                Lihat Semua Arsip{' '}
                                <span className="material-symbols-outlined ml-1 text-base">
                                    arrow_forward
                                </span>
                            </a>
                        </div>

                        {/* Newsletter */}
                        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-brand-purple">
                                Berlangganan Buletin Kami
                            </h3>
                            <p className="mt-2 text-medium-gray">
                                Dapatkan berita dan pembaruan terbaru yang dikirim ke kotak masuk Anda.
                            </p>
                            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                                <input
                                    className="w-full rounded-full border-gray-200 bg-white px-4 py-2.5 text-sm focus:border-brand-green focus:ring-brand-green"
                                    placeholder="Masukkan alamat email Anda"
                                    type="email"
                                />
                                <button className="flex-shrink-0 rounded-full bg-brand-green px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-purple">
                                    Berlangganan
                                </button>
                            </div>
                            <p className="mt-3 text-xs text-medium-gray">
                                Kami menghargai privasi Anda. Berhenti berlangganan kapan saja.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
