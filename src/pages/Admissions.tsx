import {
    Calendar,
    Users,
    MailCheck,
    CheckCircle,
    ArrowRight,
    Baby,
    School,
    GraduationCap,
    Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Admissions() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section
                className="relative flex min-h-[380px] flex-col justify-end bg-cover bg-center rounded-2xl overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC7lUfoe7-kGVXqMDpRfvguebiL_nQS5vd0zNnyuSyGjTMyqu3qmJxTDmG0e4IqW2GZU_IAYIBFxVLFLFQ2LrH8BJVDXIwBxCf9qWVbKrZCnkAPbplL79bOQ7kWWZBkeZLP0tUqVs94dwKssdYaJP1hhSL7L98tqc385uI6gx7mLA-ieE4YIiK2oSYsr2LOGlLBdzPJRG_9MhOop5VpPX8MlaY4cIW3fn_3nXCaEKqgbtMpccBRIBhRJ8gNvgj6jjQ1VOhvMbQs0JHM")`
                }}
            >
                <div className="w-full px-4 pb-12 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center gap-2">
                        <Link to="/" className="text-gray-300 hover:text-white text-base font-medium">Beranda</Link>
                        <span className="text-brand-green text-base font-medium">/</span>
                        <span className="text-brand-green text-base font-medium">Penerimaan</span>
                    </div>
                    <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Bergabunglah dengan Komunitas Kami</h1>
                    <p className="mt-2 text-lg text-gray-200 sm:text-xl">Mulai perjalanan Anda menuju keunggulan akademik dan pertumbuhan pribadi.</p>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="relative z-20 w-full -mt-10 px-4 sm:px-6 lg:px-8">
                <div className="rounded-xl bg-white p-8 shadow-lg md:p-12 lg:py-20">
                    <h2 className="text-center text-3xl font-bold text-brand-purple">Selamat Datang di Schola</h2>
                    <div className="mx-auto mt-6 max-w-3xl space-y-4 text-center text-base leading-relaxed text-gray-700">
                        <p>Selamat datang di Sekolah Internasional Schola. Kami menyambut keluarga prospektif untuk menemukan komunitas kami yang dinamis. Kami berkomitmen untuk menyediakan pendidikan holistik yang membina keingintahuan intelektual, kreativitas, dan kecintaan belajar seumur hidup.</p>
                        <p>Di Schola, kami percaya pada pengembangan setiap siswa secara utuh. Lingkungan kami yang beragam dan mendukung memberdayakan siswa untuk mencapai potensi penuh mereka, baik secara akademis maupun pribadi. Tim kami siap memandu Anda melalui proses penerimaan dan menunjukkan bagaimana Schola dapat menjadi tempat yang tepat untuk perjalanan pendidikan anak Anda.</p>
                    </div>
                </div>
            </section>

            {/* Key Dates Section */}
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-3xl font-bold text-brand-purple">Tanggal Penting</h2>
                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* Date 1 */}
                        <div className="transform rounded-xl border-t-4 border-brand-green bg-white p-6 shadow-md transition hover:-translate-y-1">
                            <div className="flex size-12 items-center justify-center rounded-full bg-brand-green text-white">
                                <Calendar className="h-6 w-6" />
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-brand-purple">1 September</h3>
                            <p className="mt-1 text-lg font-bold text-dark-gray">Pembukaan Periode Pendaftaran</p>
                            <p className="mt-2 text-sm text-medium-gray">Mulai aplikasi Anda untuk tahun ajaran yang akan datang.</p>
                        </div>
                        {/* Date 2 */}
                        <div className="transform rounded-xl border-t-4 border-brand-green bg-white p-6 shadow-md transition hover:-translate-y-1">
                            <div className="flex size-12 items-center justify-center rounded-full bg-brand-green text-white">
                                <Users className="h-6 w-6" />
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-brand-purple">Oktober - Januari</h3>
                            <p className="mt-1 text-lg font-bold text-dark-gray">Tur Kampus & Penilaian</p>
                            <p className="mt-2 text-sm text-medium-gray">Jadwalkan kunjungan keluarga dan penilaian siswa Anda.</p>
                        </div>
                        {/* Date 3 */}
                        <div className="transform rounded-xl border-t-4 border-brand-green bg-white p-6 shadow-md transition hover:-translate-y-1">
                            <div className="flex size-12 items-center justify-center rounded-full bg-brand-green text-white">
                                <MailCheck className="h-6 w-6" />
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-brand-purple">15 Februari</h3>
                            <p className="mt-1 text-lg font-bold text-dark-gray">Keputusan Penerimaan Diumumkan</p>
                            <p className="mt-2 text-sm text-medium-gray">Surat keputusan penerimaan dikirimkan kepada keluarga.</p>
                        </div>
                        {/* Date 4 */}
                        <div className="transform rounded-xl border-t-4 border-brand-green bg-white p-6 shadow-md transition hover:-translate-y-1">
                            <div className="flex size-12 items-center justify-center rounded-full bg-brand-green text-white">
                                <CheckCircle className="h-6 w-6" />
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-brand-purple">15 Maret</h3>
                            <p className="mt-1 text-lg font-bold text-dark-gray">Konfirmasi Pendaftaran</p>
                            <p className="mt-2 text-sm text-medium-gray">Batas waktu untuk menerima penawaran dan mengamankan tempat Anda.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Process Section */}
            <section className="bg-white py-16 lg:py-20 rounded-xl shadow-sm">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-brand-purple">Proses Pendaftaran</h2>
                        <p className="mx-auto mt-2 max-w-2xl text-medium-gray">Ikuti langkah-langkah sederhana ini untuk mendaftar.</p>
                    </div>
                    <div className="relative mt-12">
                        <div aria-hidden="true" className="absolute left-6 top-6 bottom-6 w-0.5 bg-light-gray-2"></div>
                        <div className="space-y-12">
                            {/* Step 1 */}
                            <div className="relative flex items-start gap-6">
                                <div className="z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-purple text-white font-bold">1</div>
                                <div className="pt-1.5">
                                    <h3 className="text-xl font-bold text-brand-purple">Kirim Aplikasi Online</h3>
                                    <p className="mt-1 text-medium-gray">Lengkapi dan kirim formulir online kami dengan informasi keluarga Anda.</p>
                                    <a href="#" className="mt-3 inline-flex items-center font-semibold text-brand-green hover:text-green-700">
                                        Mulai Aplikasi <ArrowRight className="ml-1 h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                            {/* Step 2 */}
                            <div className="relative flex items-start gap-6">
                                <div className="z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-purple text-white font-bold">2</div>
                                <div className="pt-1.5">
                                    <h3 className="text-xl font-bold text-brand-purple">Unggah Dokumen yang Diperlukan</h3>
                                    <p className="mt-1 text-medium-gray">Unggah semua dokumen yang diperlukan dengan aman melalui portal penerimaan kami.</p>
                                    <a href="#" className="mt-3 inline-flex items-center font-semibold text-brand-green hover:text-green-700">
                                        Daftar Dokumen <ArrowRight className="ml-1 h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                            {/* Step 3 */}
                            <div className="relative flex items-start gap-6">
                                <div className="z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-purple text-white font-bold">3</div>
                                <div className="pt-1.5">
                                    <h3 className="text-xl font-bold text-brand-purple">Bayar Biaya Pendaftaran</h3>
                                    <p className="mt-1 text-medium-gray">Kirimkan biaya pendaftaran yang tidak dapat dikembalikan untuk melanjutkan aplikasi Anda.</p>
                                </div>
                            </div>
                            {/* Step 4 */}
                            <div className="relative flex items-start gap-6">
                                <div className="z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-purple text-white font-bold">4</div>
                                <div className="pt-1.5">
                                    <h3 className="text-xl font-bold text-brand-purple">Jadwalkan Kunjungan Kampus</h3>
                                    <p className="mt-1 text-medium-gray">Kami mendorong semua keluarga untuk mengunjungi kampus kami untuk tur pribadi.</p>
                                    <a href="#" className="mt-3 inline-flex items-center font-semibold text-brand-green hover:text-green-700">
                                        Pesan Tur <ArrowRight className="ml-1 h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                            {/* Step 5 */}
                            <div className="relative flex items-start gap-6">
                                <div className="z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-purple text-white font-bold">5</div>
                                <div className="pt-1.5">
                                    <h3 className="text-xl font-bold text-brand-purple">Penilaian Masuk</h3>
                                    <p className="mt-1 text-medium-gray">Siswa akan berpartisipasi dalam penilaian yang sesuai dengan usia mereka dengan fakultas kami.</p>
                                </div>
                            </div>
                            {/* Step 6 */}
                            <div className="relative flex items-start gap-6">
                                <div className="z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-purple text-white font-bold">6</div>
                                <div className="pt-1.5">
                                    <h3 className="text-xl font-bold text-brand-purple">Keputusan Penerimaan</h3>
                                    <p className="mt-1 text-medium-gray">Komite penerimaan akan meninjau aplikasi lengkap dan Anda akan diberitahu tentang keputusannya.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tuition & Fees Section */}
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-brand-purple">Uang Sekolah & Biaya</h2>
                        <p className="mx-auto mt-2 max-w-2xl text-medium-gray">Investasi dalam masa depan anak Anda.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Card 1 */}
                        <div className="flex transform flex-col rounded-xl border-t-4 border-brand-green bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                            <div className="flex-grow">
                                <Baby className="h-12 w-12 text-brand-green" />
                                <h3 className="mt-4 text-xl font-bold text-brand-purple">Tahun Dasar</h3>
                                <p className="text-sm font-semibold text-brand-green">Kelas 1-5</p>
                                <p className="mt-4 text-4xl font-bold text-brand-purple">Rp 250 Jt</p>
                                <p className="text-sm text-medium-gray">per tahun</p>
                                <ul className="mt-6 space-y-2 text-dark-gray">
                                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-brand-green" /> Materi akademik inti</li>
                                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-brand-green" /> Biaya teknologi</li>
                                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-brand-green" /> Kegiatan ko-kurikuler</li>
                                </ul>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="flex transform flex-col rounded-xl border-t-4 border-brand-green bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                            <div className="flex-grow">
                                <School className="h-12 w-12 text-brand-green" />
                                <h3 className="mt-4 text-xl font-bold text-brand-purple">Tahun Menengah</h3>
                                <p className="text-sm font-semibold text-brand-green">Kelas 6-10</p>
                                <p className="mt-4 text-4xl font-bold text-brand-purple">Rp 300 Jt</p>
                                <p className="text-sm text-medium-gray">per tahun</p>
                                <ul className="mt-6 space-y-2 text-dark-gray">
                                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-brand-green" /> Semua fasilitas Tahun Dasar</li>
                                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-brand-green" /> Biaya laboratorium lanjutan</li>
                                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-brand-green" /> Program laptop</li>
                                </ul>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="flex transform flex-col rounded-xl border-t-4 border-brand-green bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                            <div className="flex-grow">
                                <GraduationCap className="h-12 w-12 text-brand-green" />
                                <h3 className="mt-4 text-xl font-bold text-brand-purple">Program Diploma</h3>
                                <p className="text-sm font-semibold text-brand-green">Kelas 11-12</p>
                                <p className="mt-4 text-4xl font-bold text-brand-purple">Rp 350 Jt</p>
                                <p className="text-sm text-medium-gray">per tahun</p>
                                <ul className="mt-6 space-y-2 text-dark-gray">
                                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-brand-green" /> Semua fasilitas Tahun Menengah</li>
                                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-brand-green" /> Biaya ujian IB</li>
                                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-brand-green" /> Konseling universitas</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <h4 className="text-lg font-bold text-brand-purple">Biaya Tambahan</h4>
                        <p className="mt-2 text-sm text-medium-gray">Seragam, transportasi, dan perjalanan internasional tidak termasuk. Rencana pembayaran tersedia.</p>
                        <a href="#" className="mt-4 inline-block font-bold text-brand-green hover:text-green-700">Unduh Jadwal Biaya Lengkap (PDF)</a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-white py-16 lg:py-20 rounded-xl shadow-sm mb-8">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-brand-purple">Siap Mendaftar?</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-medium-gray">Bergabunglah dengan komunitas pembelajar kami yang beragam. Mulai aplikasi Anda hari ini.</p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a href="#" className="w-full rounded-md bg-brand-purple px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-green sm:w-auto">Mulai Aplikasi</a>
                        <a href="#" className="w-full rounded-md border-2 border-brand-green bg-transparent px-8 py-3 text-base font-semibold text-brand-green shadow-sm transition hover:bg-brand-green hover:text-white sm:w-auto">Jadwalkan Kunjungan</a>
                        <a href="#" className="text-medium-gray hover:text-brand-purple">Hubungi Penerimaan</a>
                    </div>
                    <div className="mt-8 text-sm text-medium-gray">
                        <p>penerimaan@schola.ac.id | +62 21 555 1234 | Jam Kantor: 08:00 - 16:00 WIB</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
