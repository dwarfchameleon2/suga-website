import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Check, Copy, Download, Info, Smartphone } from 'lucide-react';
import {
  SUGA_APK_URL,
  SUGA_COMING_SOON_TEXT,
  SUGA_DOWNLOAD_BUTTON_LABEL,
  SUGA_INSTALL_NOTE,
} from '../utils/sugaLogic';

interface DownloadCardProps {
  variant?: 'dark' | 'light';
}

export function DownloadCard({ variant = 'dark' }: DownloadCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SUGA_APK_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const isDark = variant === 'dark';

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border p-6 sm:p-10 ${
        isDark
          ? 'border-white/15 bg-[#111318] text-white'
          : 'border-[#E5E7EB] bg-white text-[#111318]'
      }`}
    >
      {/* Layered brand color effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#FF5C1A]/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#7C3AED]/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/15 blur-3xl"
      />

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p
            className={`text-sm font-semibold ${
              isDark ? 'text-[#FF5C1A]' : 'text-[#FF5C1A]'
            }`}
          >
            Mobile App Access
          </p>
          <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-balance sm:text-4xl">
            {SUGA_COMING_SOON_TEXT}
          </h2>
          <p
            className={`mt-4 max-w-xl text-base leading-relaxed ${
              isDark ? 'text-white/80' : 'text-[#555B68]'
            }`}
          >
            Be among the first to explore dishes, follow local chefs and food vendors, and enjoy
            smooth food ordering on Android while our store releases finish rolling out.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={SUGA_APK_URL}
              download
              className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-[#FF5C1A] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#E0480B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Download className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>{SUGA_DOWNLOAD_BUTTON_LABEL}</span>
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border px-5 py-3.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${
                isDark
                  ? 'border-white/20 bg-white/10 text-white hover:bg-white/15'
                  : 'border-[#E5E7EB] bg-[#F5F6F8] text-[#111318] hover:bg-[#E5E7EB]/60'
              }`}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                  <span>Download link copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Copy APK link</span>
                </>
              )}
            </button>
          </div>

          <div
            className={`mt-6 flex items-start gap-3 rounded-2xl border p-4 text-sm ${
              isDark
                ? 'border-white/10 bg-white/5 text-white/80'
                : 'border-[#E5E7EB] bg-[#F5F6F8] text-[#555B68]'
            }`}
          >
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB]" aria-hidden="true" />
            <p className="leading-relaxed">{SUGA_INSTALL_NOTE}</p>
          </div>

          <div
            className={`mt-6 flex flex-wrap items-center gap-6 border-t pt-5 text-sm ${
              isDark ? 'border-white/10 text-white/75' : 'border-[#E5E7EB] text-[#555B68]'
            }`}
          >
            <div className="flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-[#FF5C1A]" aria-hidden="true" />
              <span>Google Play — Coming Soon</span>
            </div>
            <span aria-hidden="true">·</span>
            <div className="flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-[#7C3AED]" aria-hidden="true" />
              <span>Apple App Store — Coming Soon</span>
            </div>
          </div>
        </div>

        {/* Scannable QR Code Column */}
        <div className="flex flex-col items-center lg:col-span-5">
          <div className="rounded-3xl bg-white p-6 text-center text-[#111318] shadow-xl">
            <div className="inline-block rounded-2xl border border-[#E5E7EB] bg-white p-3">
              <QRCodeSVG
                value={SUGA_APK_URL}
                size={184}
                bgColor="#FFFFFF"
                fgColor="#111318"
                level="M"
                title="QR code to download SUGA for Android"
              />
            </div>
            <p className="font-display mt-4 text-base font-bold text-[#111318]">
              Scan to download on Android
            </p>
            <p className="mt-1 max-w-[220px] text-xs leading-relaxed text-[#555B68]">
              Point your phone camera at this code to open the direct SUGA Android APK download.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
