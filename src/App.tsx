import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import StudentLife from './pages/StudentLife';
import NewsEvents from './pages/NewsEvents';
import Contact from './pages/Contact';
import TuitionFees from './pages/TuitionFees';
import CampusVisit from './pages/CampusVisit';
import AdmissionsFAQ from './pages/AdmissionsFAQ';
import AdmissionsProcess from './pages/AdmissionsProcess';

import ScrollToTop from './components/ScrollToTop';

function App() {
    // Use /khoiruummah/ for GitHub Pages, / for localhost
    const basename = window.location.hostname.includes('github.io') ? '/khoiruummah' : '/';

    return (
        <BrowserRouter basename={basename}>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="tentang-kami" element={<AboutUs />} />
                    <Route path="akademik/*" element={<Academics />} />
                    <Route path="penerimaan" element={<Admissions />} />
                    <Route path="penerimaan/proses-pendaftaran" element={<AdmissionsProcess />} />
                    <Route path="penerimaan/biaya" element={<TuitionFees />} />
                    <Route path="penerimaan/kunjungan" element={<CampusVisit />} />
                    <Route path="penerimaan/faq" element={<AdmissionsFAQ />} />
                    <Route path="kehidupan-siswa" element={<StudentLife />} />
                    <Route path="berita-acara" element={<NewsEvents />} />
                    <Route path="kontak" element={<Contact />} />
                    {/* Placeholder routes for sidebar bottom links */}
                    <Route path="portal-orang-tua" element={<div className="p-8 text-center">Portal Orang Tua - Coming Soon</div>} />
                    <Route path="kalender" element={<div className="p-8 text-center">Kalender Sekolah - Coming Soon</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
