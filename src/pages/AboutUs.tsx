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
                        Tentang Schola Internationalis
                    </h1>
                    <p className="mt-2 text-base font-normal leading-normal text-gray-200 md:text-lg lg:text-xl">
                        Temukan sejarah, nilai-nilai, dan orang-orang yang membuat komunitas kami luar biasa.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="relative z-20 -mt-10 rounded-xl bg-white py-12 shadow-lg lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-5 lg:gap-12">
                        <div className="lg:col-span-3">
                            <h2 className="text-2xl font-bold text-brand-purple md:text-3xl">Kisah Kami</h2>
                            <p className="mt-4 text-base leading-relaxed text-gray-700">
                                Didirikan di atas prinsip keunggulan, integritas, dan kewarganegaraan global, Schola
                                Internationalis telah menjadi mercusuar pembelajaran selama lebih dari dua dekade. Misi
                                kami adalah untuk membina generasi muda yang penuh rasa ingin tahu, berpengetahuan luas,
                                dan peduli, yang termotivasi untuk berhasil.
                            </p>
                            <p className="mt-4 text-base leading-relaxed text-gray-700">
                                Kami percaya pada pendekatan holistik terhadap pendidikan yang menyeimbangkan ketelitian
                                akademis dengan pertumbuhan pribadi. Filosofi kami berakar pada pengembangan lingkungan
                                yang suportif dan inklusif di mana setiap siswa diberdayakan untuk mengeksplorasi potensi
                                mereka dan menjadi pembelajar seumur hidup.
                            </p>
                        </div>
                        <div className="lg:col-span-2">
                            <div
                                className="h-64 w-full rounded-lg border-l-4 border-brand-green bg-cover bg-center md:h-80"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBShDdYQQOyDLqentl65TJzXrEuWBakrGH7I2ELri9YGh6EvttNcwclJ1QrRcarHhtZ5ptFjMwCbCPLQ-y0bVXOYVp7j3-PBFmZMTmjNijFiVDaBjtnIsEsq7ag1UCW_KVyxHjmZFssE3k01HyFeJjM3lbnDGOpG_jhSbA0d33a858_ErvW3FbBIsqWRz6fu6Z6_-CVPmLGJvqqiRE9C8zgi_h9TR0JNR27wnsLjbAIwMwvhz7p-IvfLywO9JiQboIt8mLUCVLPLhFs')",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="bg-light-gray-1 py-12 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="rounded-xl border-t-4 border-brand-green bg-white p-6 shadow-md md:p-8">
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-4xl text-brand-green">visibility</span>
                                <h3 className="text-xl font-bold text-brand-purple md:text-2xl">Visi Kami</h3>
                            </div>
                            <p className="mt-4 text-gray-700">
                                Menjadi pusat pendidikan terkemuka yang menginspirasi siswa untuk mencapai potensi penuh
                                mereka dan menjadi pemimpin yang berbelas kasih dalam masyarakat global.
                            </p>
                        </div>
                        <div className="rounded-xl border-t-4 border-brand-green bg-white p-6 shadow-md md:p-8">
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-4xl text-brand-green">
                                    assistant_navigation
                                </span>
                                <h3 className="text-xl font-bold text-brand-purple md:text-2xl">Misi Kami</h3>
                            </div>
                            <p className="mt-4 text-gray-700">
                                Menyediakan lingkungan belajar yang menantang dan mendukung yang mendorong pemikiran
                                kritis, kreativitas, dan komitmen untuk melayani.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-white py-12 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <h2 className="text-center text-2xl font-bold text-brand-purple md:text-3xl">
                        Nilai-Nilai Inti Kami
                    </h2>
                    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 md:gap-8 lg:grid-cols-4">
                        {[
                            {
                                icon: 'lightbulb',
                                title: 'Keunggulan',
                                description: 'Berusaha untuk standar tertinggi dalam semua yang kami lakukan.',
                            },
                            {
                                icon: 'diversity_3',
                                title: 'Komunitas',
                                description: 'Menumbuhkan rasa memiliki dan kolaborasi.',
                            },
                            {
                                icon: 'verified_user',
                                title: 'Integritas',
                                description: 'Menjunjung tinggi kejujuran dan prinsip moral yang kuat.',
                            },
                            {
                                icon: 'public',
                                title: 'Wawasan Global',
                                description: 'Mendorong rasa hormat terhadap keragaman dan dunia kita.',
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
                                <p className="mt-2 text-sm text-medium-gray">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="bg-light-gray-1 py-12 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <h2 className="mb-8 text-center text-2xl font-bold text-brand-purple md:mb-12 md:text-3xl">
                        Perjalanan Kami
                    </h2>
                    <div className="relative mx-auto max-w-2xl">
                        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200" />
                        {[
                            {
                                year: '2001',
                                title: 'Tahun Pendirian',
                                description: 'Schola Internationalis membuka pintunya dengan 50 siswa.',
                                align: 'right',
                            },
                            {
                                year: '2010',
                                title: 'Angkatan Lulusan Pertama',
                                description:
                                    'Merayakan angkatan perintis lulusan kami yang unggul dalam penempatan universitas.',
                                align: 'left',
                            },
                            {
                                year: '2015',
                                title: 'Perluasan Kampus',
                                description:
                                    'Membuka sayap Seni & Sains baru, yang menampilkan laboratorium canggih.',
                                align: 'right',
                            },
                            {
                                year: '2023',
                                title: 'Penghargaan Transformasi Digital',
                                description:
                                    'Diakui atas inovasi dalam mengintegrasikan teknologi ke dalam kurikulum.',
                                align: 'left',
                            },
                        ].map((milestone, index) => (
                            <div key={index} className="relative mb-8 flex w-full items-center">
                                {milestone.align === 'right' ? (
                                    <>
                                        <div className="w-1/2 pr-4 text-right md:pr-8">
                                            <div className="rounded-lg bg-white p-4 shadow-md md:p-6">
                                                <p className="text-xl font-bold text-brand-green md:text-2xl">
                                                    {milestone.year}
                                                </p>
                                                <h3 className="mt-1 font-bold text-brand-purple">{milestone.title}</h3>
                                                <p className="mt-2 text-sm text-medium-gray">{milestone.description}</p>
                                            </div>
                                        </div>
                                        <div className="absolute left-1/2 size-4 -translate-x-1/2 rounded-full border-2 border-white bg-brand-purple" />
                                        <div className="w-1/2" />
                                    </>
                                ) : (
                                    <>
                                        <div className="w-1/2" />
                                        <div className="absolute left-1/2 size-4 -translate-x-1/2 rounded-full border-2 border-white bg-brand-purple" />
                                        <div className="w-1/2 pl-4 md:pl-8">
                                            <div className="rounded-lg bg-white p-4 shadow-md md:p-6">
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
                        Temui Kepemimpinan Kami
                    </h2>
                    <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-10 lg:grid-cols-3">
                        {[
                            {
                                name: 'Dr. Evelyn Reed',
                                position: 'Kepala Sekolah',
                                description:
                                    'Dengan 25 tahun pengalaman di pendidikan internasional, Dr. Reed memimpin dengan semangat untuk keunggulan akademik.',
                                image:
                                    'https://lh3.googleusercontent.com/aida-public/AB6AXuCVdASljgxfuFITO-yhYBBqJf_GNogVG5VLA7M7jYb6Wu9OUHUrXeHq7Piu3Ris9IdFMXUuCQkO7xTJTqW9HHf2hSeTFN5mfLDDb3b3WHaPAO3NaN8GK8ArU5hDw0XLB8zmQPsnZtBj8EtlFKTcpai9GaVesHwr4Nv6a0wK9Q7IherWajqgR5UEs6w27POHWeT8pcHizlaMVotR3Ea_fq7cOSl2THwv_CGBgZb6d6Oz2sz_0DaaEh7FnoHWlSAfAKWneROjwcaUCLyY',
                            },
                            {
                                name: 'Bapak Samuel Chen',
                                position: 'Kepala Sekolah Menengah Atas',
                                description:
                                    'Bapak Chen menumbuhkan lingkungan inovasi dan penyelidikan yang dipimpin siswa di divisi sekolah atas.',
                                image:
                                    'https://lh3.googleusercontent.com/aida-public/AB6AXuBy4F4OTh9YeoAGzfc-G93p7rMYT3JZ3lMlZLYkDTWG3PKiwzmQrjLevwUkAm5Y3Uvt5UN9Xe2YoTuvZpMATR2lizosIsqCoKvlarNofp9vvVqctDxu3Fd0WIBb-NzIR_MFoo5Vz_uLXFz-XDrmekAI0JLbuozZXqYdCL7zU4cnBhS4-GnslEn7BhXEN1DxeUNM3AeICnw9fCKgmsI7ewaeHo5jt-bWnwEdDDgiWhjk4vP2aVQry_HwvMER6sI_OBREO-lLmgcPdbLE',
                            },
                            {
                                name: 'Ibu Aisha Khan',
                                position: 'Direktur Pendaftaran',
                                description:
                                    'Ibu Khan berdedikasi untuk menyambut keluarga baru dan membimbing mereka melalui proses pendaftaran.',
                                image:
                                    'https://lh3.googleusercontent.com/aida-public/AB6AXuDk57tvQPOdHfCPgIalHjQOUo2KR_PdoFKkGjq60Df6YGhiM51PaRxrcJByH1YWW2PG3VmLz_yb95ejcPyxNsYx25dM0PfUVnBP8Ay0FijK0qBO8DQ7YstwUoUXGwPVGxmqCX8HpoLJR4Rtm1VkpUk-WKlpifJLIpBWktsCVlsoPsLMgVTNeapUI0vYMCa4qvlfYBJB5Hh8TFPDQIuIs6ym6CvD95lCOu-grtUUtwNFX0Nwyp4llD3-XOUlU0UGaCe02L83wC8fRkag',
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

            {/* Accreditation */}
            <section className="bg-light-gray-1 py-12 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <h2 className="text-center text-xl font-bold text-brand-purple md:text-2xl">
                        Akreditasi & Pengakuan
                    </h2>
                    <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-5">
                        {[
                            'Dewan Sekolah Internasional',
                            'Global Baccalaureate',
                            'Badan Akreditasi Nasional',
                            'Org. Pendidikan Regional',
                            'Konferensi Sekolah Asia Timur',
                        ].map((accreditation, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <div className="flex h-16 w-32 items-center justify-center rounded bg-gray-200 transition-all duration-300 grayscale hover:grayscale-0">
                                    <span className="text-xs text-gray-500">Logo {index + 1}</span>
                                </div>
                                <p className="mt-2 text-sm text-medium-gray">{accreditation}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section className="w-full bg-brand-purple">
                <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 lg:py-20">
                    <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4 md:gap-8">
                        <div>
                            <span className="text-4xl font-bold text-brand-green lg:text-5xl">20+</span>
                            <p className="mt-2 text-sm uppercase tracking-wider text-white">Tahun Keunggulan</p>
                        </div>
                        <div>
                            <span className="text-4xl font-bold text-brand-green lg:text-5xl">45</span>
                            <p className="mt-2 text-sm uppercase tracking-wider text-white">Kewarganegaraan</p>
                        </div>
                        <div>
                            <span className="text-4xl font-bold text-brand-green lg:text-5xl">12:1</span>
                            <p className="mt-2 text-sm uppercase tracking-wider text-white">Rasio Siswa-Guru</p>
                        </div>
                        <div>
                            <span className="text-4xl font-bold text-brand-green lg:text-5xl">98%</span>
                            <p className="mt-2 text-sm uppercase tracking-wider text-white">Tingkat Kelulusan</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-light-gray-1 py-12 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <h2 className="text-center text-2xl font-bold text-brand-purple md:text-3xl">
                        Apa Kata Komunitas Kami
                    </h2>
                    <div className="mt-8 grid grid-cols-1 gap-8 md:mt-10 lg:grid-cols-2">
                        {[
                            {
                                quote:
                                    'Lingkungan yang mendukung di Schola telah membawa perubahan besar bagi anak-anak kami. Para guru sangat berdedikasi dan selalu memberikan yang terbaik.',
                                name: 'Keluarga Tanaka',
                                role: 'Orang Tua Siswa Kelas 5 & 8',
                                image:
                                    'https://lh3.googleusercontent.com/aida-public/AB6AXuDL5pFedZHz0TeJ-RiYf-m45dxTN3ValqyJNW0JEriyc8Okjk7OOc7ROcCFgSIYDLhHMLSLlFfl9JwRcqrzLHgC1GnBm0pFrSd1AEZR8FamhHsGY4M6XyAFC6AENrXVECOndyfLmb6ON1yb2_DdiDgk9MciQ6JoaKOu_8bHawFUa3sRtWycLZ3dMhyi0DoLey4Fu5gF4_6j6-BgHU_qzjqgWTNUmGvEoiRmj5h66tnFpwNzDgYJ2K48a4p8ukRRTFkmJ63CNWvnlhJN',
                            },
                            {
                                quote:
                                    'Saya tidak hanya tumbuh secara akademis tetapi juga sebagai pribadi. Schola mendorong saya untuk mengejar minat saya di bidang seni dan sains.',
                                name: 'Maria Garcia',
                                role: 'Alumni, Angkatan 2022',
                                image:
                                    'https://lh3.googleusercontent.com/aida-public/AB6AXuCOPgqYVJ1x3v_7Vjn04iuGOpigZQtKIThbEQl4PwyDxHQdZewkeosyrpGRAJHfee5diq5C2tdu2dvv96ilGygpjEI6HT0cSikNf9WuIck5OHJKG4XH4Fo_LZwtRxk3v_HVAv3vj28QmQfpeSMhx_nN-gk4W1rxiOXDheLmeG_hDj8HhsGRFbXD53503AZ9wMSo_aiZmEH6gLUmP2TN3QHLrOWhJeAZXJ10PUS3tzM1fgWes-_TIxtd9GNn73m9pVQh6pYoDeeraMuM',
                            },
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="relative rounded-xl border-l-4 border-brand-green bg-white p-6 shadow-md md:p-8"
                            >
                                <span className="material-symbols-outlined absolute right-4 top-4 text-5xl text-brand-green/20">
                                    format_quote
                                </span>
                                <p className="italic text-gray-700">{testimonial.quote}</p>
                                <div className="mt-6 flex items-center">
                                    <div
                                        className="size-12 rounded-full bg-cover bg-center bg-no-repeat"
                                        style={{ backgroundImage: `url("${testimonial.image}")` }}
                                    />
                                    <div className="ml-4">
                                        <p className="font-bold text-brand-purple">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 lg:py-20">
                <div className="container mx-auto px-4 text-center md:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-brand-purple md:text-3xl">
                        Bergabunglah dengan Komunitas Kami
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-medium-gray">
                        Rasakan perbedaan Schola secara langsung. Kami mengundang Anda untuk mempelajari lebih
                        lanjut tentang kampus dan komunitas kami yang dinamis.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <button className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-brand-purple px-6 text-base font-bold leading-normal tracking-wide text-white transition-colors hover:bg-brand-green hover:text-brand-purple">
                            <span className="truncate">Jadwalkan Kunjungan</span>
                        </button>
                        <button className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 border-brand-green bg-transparent px-6 text-brand-purple transition-colors hover:bg-brand-green hover:text-brand-purple">
                            <span className="truncate">Unduh Brosur</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
