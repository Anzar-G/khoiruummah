import { useState } from 'react';
import { Sidebar, SidebarBody, SidebarLink } from './ui/sidebar';
import {
    Home,
    Info,
    UserPlus,
    Users,
    Newspaper,
    Phone,
    GraduationCap,
    Lock,
    Calendar,
    ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

export default function AppSidebar({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const [isAkademikOpen, setIsAkademikOpen] = useState(false);
    const [isPenerimaanOpen, setIsPenerimaanOpen] = useState(false);

    const akademikLinks = [
        { label: 'Sekolah Dasar', href: '/akademik/sekolah-dasar' },
        { label: 'Sekolah Menengah', href: '/akademik/sekolah-menengah' },
        { label: 'Diploma IB', href: '/akademik/diploma-ib' },
    ];

    const penerimaanLinks = [
        { label: 'Ikhtisar', href: '/penerimaan' },
        { label: 'Proses Pendaftaran', href: '/penerimaan/proses-pendaftaran' },
        { label: 'Biaya & SPP', href: '/penerimaan/biaya' },
        { label: 'Kunjungan Kampus', href: '/penerimaan/kunjungan' },
        { label: 'FAQ', href: '/penerimaan/faq' },
    ];

    const links = [
        {
            label: "Beranda",
            href: "/",
            icon: <Home className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />,
        },
        {
            label: "Tentang Kami",
            href: "/tentang-kami",
            icon: <Info className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />,
        },
        {
            label: "Akademik",
            href: "#",
            icon: <GraduationCap className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />,
            subLinks: akademikLinks,
            isOpen: isAkademikOpen,
            setIsOpen: setIsAkademikOpen
        },
        {
            label: "Penerimaan",
            href: "#",
            icon: <UserPlus className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />,
            subLinks: penerimaanLinks,
            isOpen: isPenerimaanOpen,
            setIsOpen: setIsPenerimaanOpen
        },
        {
            label: "Kehidupan Siswa",
            href: "/kehidupan-siswa",
            icon: <Users className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />,
        },
        {
            label: "Berita & Acara",
            href: "/berita-acara",
            icon: <Newspaper className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />,
        },
        {
            label: "Kontak",
            href: "/kontak",
            icon: <Phone className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />,
        },
    ];

    return (
        <Sidebar open={open} setOpen={setOpen}>
            <div className="flex h-screen w-full flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 overflow-hidden">
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        <div className="flex flex-col gap-2 pb-4">
                            <div className="flex items-center gap-2 px-2">
                                <div className="h-7 w-7 flex-shrink-0 rounded-full bg-brand-purple" />
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="whitespace-pre text-sm font-bold text-neutral-700 dark:text-white"
                                >
                                    Schola
                                </motion.span>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => {
                                if (link.subLinks && link.setIsOpen) {
                                    return (
                                        <div key={idx} className="flex flex-col gap-2">
                                            <button
                                                onClick={() => link.setIsOpen && link.setIsOpen(!link.isOpen)}
                                                className={cn(
                                                    "flex items-center justify-start gap-2 group/sidebar py-2",
                                                    "text-neutral-700 dark:text-neutral-200"
                                                )}
                                            >
                                                {link.icon}
                                                <motion.span
                                                    animate={{
                                                        display: open ? "inline-block" : "none",
                                                        opacity: open ? 1 : 0,
                                                    }}
                                                    className="text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 flex-1 text-left"
                                                >
                                                    {link.label}
                                                </motion.span>
                                                <motion.div
                                                    animate={{
                                                        display: open ? "inline-block" : "none",
                                                        opacity: open ? 1 : 0,
                                                        rotate: link.isOpen ? 180 : 0
                                                    }}
                                                >
                                                    <ChevronDown className="h-4 w-4" />
                                                </motion.div>
                                            </button>

                                            <motion.div
                                                initial={false}
                                                animate={{
                                                    height: link.isOpen && open ? "auto" : 0,
                                                    opacity: link.isOpen && open ? 1 : 0
                                                }}
                                                className="overflow-hidden pl-8 flex flex-col gap-2"
                                            >
                                                {link.subLinks.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        to={item.href}
                                                        onClick={() => {
                                                            if (window.innerWidth < 768) {
                                                                setOpen(false);
                                                            }
                                                        }}
                                                        className="text-sm text-neutral-600 hover:text-brand-purple dark:text-neutral-400"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        </div>
                                    );
                                }
                                return <SidebarLink key={idx} link={link} />;
                            })}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <SidebarLink
                            link={{
                                label: "Portal Orang Tua",
                                href: "/portal-orang-tua",
                                icon: <Lock className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />,
                            }}
                        />
                        <SidebarLink
                            link={{
                                label: "Kalender Sekolah",
                                href: "/kalender",
                                icon: <Calendar className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />,
                            }}
                        />
                    </div>
                </SidebarBody>

                <main id="main-content" className="flex-1 overflow-y-auto p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
                    {children}
                </main>
            </div>
        </Sidebar>
    );
}
