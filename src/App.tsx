import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { SeoHead } from './components/SeoHead';
import { AboutPage } from './pages/AboutPage';
import { DownloadPage } from './pages/DownloadPage';
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { SupportPage } from './pages/SupportPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  return (
    <BrowserRouter>
      <SeoHead />
      <div className="flex min-h-screen flex-col bg-white text-[#111318]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
