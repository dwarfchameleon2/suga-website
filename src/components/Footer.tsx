import { Link } from 'react-router-dom';
import { SUGA_APK_URL, SUGA_DOWNLOAD_BUTTON_LABEL } from '../utils/sugaLogic';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E5E7EB] bg-[#111318] text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              to="/"
              className="inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF5C1A]"
            >
              <img
                src="/assets/aistudio/suga-logo_b3c70f26.png"
                alt="SUGA Ecosystem logo"
                width={44}
                height={44}
                referrerPolicy="no-referrer"
                className="h-11 w-11 rounded-full object-cover"
              />
              <span className="font-display text-xl font-bold tracking-tight text-white">
                SUGA Ecosystem
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
              A social food discovery and delivery ecosystem connecting food lovers, local chefs,
              local food vendors, and delivery riders in one vibrant experience.
            </p>
            <p className="mt-4 font-display text-sm font-semibold tracking-wide text-[#FF5C1A]">
              Discover. Connect. Enjoy.
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-display text-sm font-semibold text-white">Explore</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-white">
                  About SUGA
                </Link>
              </li>
              <li>
                <Link to="/download" className="transition-colors hover:text-white">
                  Download
                </Link>
              </li>
              <li>
                <Link to="/support" className="transition-colors hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="font-display text-sm font-semibold text-white">Get the App</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              SUGA is coming soon to Google Play and the Apple App Store. Android users can install
              directly today.
            </p>
            <a
              href={SUGA_APK_URL}
              download
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#FF5C1A] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#E0480B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {SUGA_DOWNLOAD_BUTTON_LABEL}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>© {year} SUGA Ecosystem. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-white">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
