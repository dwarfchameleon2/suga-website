import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Download,
  FileText,
  Home,
  Info,
  LifeBuoy,
  Menu,
  ShieldCheck,
  X,
} from 'lucide-react';
import { SUGA_APK_URL, SUGA_DOWNLOAD_BUTTON_LABEL } from '../utils/sugaLogic';

const PRIMARY_NAV_ITEMS = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/about', label: 'About SUGA', icon: Info },
  { to: '/download', label: 'Download', icon: Download },
  { to: '/support', label: 'Support', icon: LifeBuoy },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[#E5E7EB] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
          {/* Zone 1: Brand mark & wordmark */}
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]"
          >
            <img
              src="/assets/aistudio/suga-logo_b3c70f26.png"
              alt="SUGA Ecosystem logo"
              width={34}
              height={34}
              referrerPolicy="no-referrer"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="font-display text-lg font-bold tracking-tight text-[#111318]">
              SUGA Ecosystem
            </span>
          </Link>

          {/* Zone 2: Desktop primary navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-7 md:flex"
          >
            {PRIMARY_NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `shrink-0 whitespace-nowrap border-b-2 py-1 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB] ${
                    isActive
                      ? 'border-[#FF5C1A] text-[#111318]'
                      : 'border-transparent text-[#555B68] hover:border-[#E5E7EB] hover:text-[#111318]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Primary action & Mobile menu trigger */}
          <div className="flex shrink-0 items-center gap-3">
            <a
              href={SUGA_APK_URL}
              download
              className="hidden shrink-0 whitespace-nowrap rounded-xl bg-[#FF5C1A] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#E0480B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] md:inline-flex"
            >
              Get the App
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white text-[#111318] transition-colors hover:bg-[#F5F6F8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] md:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full mobile-friendly navigation menu with icons beside each item */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto bg-white px-4 py-6 md:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
            {PRIMARY_NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex min-h-[48px] items-center gap-3.5 rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-[#FF5C1A]/10 text-[#FF5C1A]'
                        : 'text-[#111318] hover:bg-[#F5F6F8]'
                    }`
                  }
                >
                  <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}

            <div className="my-4 border-t border-[#E5E7EB] pt-4">
              <p className="mb-2 px-4 text-xs font-semibold text-[#555B68]">
                Legal & Policies
              </p>
              <NavLink
                to="/privacy"
                className={({ isActive }) =>
                  `flex min-h-[48px] items-center gap-3.5 rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#2563EB]/10 text-[#2563EB]'
                      : 'text-[#555B68] hover:bg-[#F5F6F8] hover:text-[#111318]'
                  }`
                }
              >
                <ShieldCheck className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>Privacy Policy</span>
              </NavLink>
              <NavLink
                to="/terms"
                className={({ isActive }) =>
                  `flex min-h-[48px] items-center gap-3.5 rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#2563EB]/10 text-[#2563EB]'
                      : 'text-[#555B68] hover:bg-[#F5F6F8] hover:text-[#111318]'
                  }`
                }
              >
                <FileText className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>Terms and Conditions</span>
              </NavLink>
            </div>

            <div className="mt-2 rounded-2xl bg-[#111318] p-5 text-white">
              <p className="font-display text-lg font-bold">Discover. Connect. Enjoy.</p>
              <p className="mt-1 text-sm text-white/75">
                Get the official Android release directly on your device.
              </p>
              <a
                href={SUGA_APK_URL}
                download
                className="mt-4 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#FF5C1A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E0480B]"
              >
                <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{SUGA_DOWNLOAD_BUTTON_LABEL}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
