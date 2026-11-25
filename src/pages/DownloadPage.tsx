import { Link } from 'react-router-dom';
import { CheckCircle2, FileDown, ShieldAlert, Smartphone } from 'lucide-react';
import { AppMockupDisplay } from '../components/AppMockupDisplay';
import { DownloadCard } from '../components/DownloadCard';

const INSTALL_STEPS = [
  {
    step: '01',
    title: 'Download the Android APK',
    detail:
      'Tap "Download SUGA for Android" above or scan the QR code with your Android phone camera to download suga.apk.',
    icon: FileDown,
  },
  {
    step: '02',
    title: 'Allow browser or file installation',
    detail:
      'Open the downloaded file. Your Android phone may ask you to allow installation from your browser or downloaded files.',
    icon: ShieldAlert,
  },
  {
    step: '03',
    title: 'Open SUGA and start exploring',
    detail:
      'Sign in as a food lover, local chef, food vendor, or delivery rider and experience the connected food ecosystem.',
    icon: Smartphone,
  },
];

export function DownloadPage() {
  return (
    <div>
      {/* Hero & Direct Download Card */}
      <section className="bg-white pt-12 pb-16 sm:pt-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#FF5C1A]">Get SUGA on your phone</p>
            <h1 className="font-display mt-2 text-4xl leading-[1.1] font-extrabold tracking-tight text-balance text-[#111318] sm:text-5xl">
              Download SUGA Ecosystem
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#555B68] sm:text-lg">
              Start discovering fresh meals, local chefs, and food vendors on Android right now.
            </p>
          </div>

          <div className="mt-10">
            <DownloadCard variant="dark" />
          </div>
        </div>
      </section>

      {/* Simple Installation Steps */}
      <section className="border-y border-[#E5E7EB] bg-[#F5F6F8] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#2563EB]">Quick Android guide</p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-[#111318] sm:text-4xl">
              How to install on Android in three simple steps
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {INSTALL_STEPS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="rounded-3xl border border-[#E5E7EB] bg-white p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-bold text-[#FF5C1A]">
                      {item.step}.
                    </span>
                    <Icon className="h-5 w-5 text-[#2563EB]" aria-hidden="true" />
                  </div>
                  <h3 className="font-display mt-4 text-xl font-bold text-[#111318]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#555B68]">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inside the App Preview */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#7C3AED]">Inside the app</p>
              <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-[#111318] sm:text-4xl">
                Built for fast discovery and clear food ordering
              </h2>
            </div>
            <Link
              to="/support"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:underline"
            >
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              <span>Need help installing? Visit Support</span>
            </Link>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AppMockupDisplay
              src="/assets/aistudio/mockup-explore-suga-page_efbff946.png"
              alt="SUGA app Explore view with food categories and Food Story feed"
              caption="Browse food categories & local kitchens"
              accent="orange"
            />
            <AppMockupDisplay
              src="/assets/aistudio/mockup-food-story_129f7d3c.png"
              alt="SUGA app Food Story vertical video view"
              caption="Watch fresh Food Stories from chefs"
              accent="purple"
            />
            <AppMockupDisplay
              src="/assets/aistudio/mockup-rider-dashboard_9d8f6bc9.png"
              alt="SUGA app delivery rider view with active delivery tracking"
              caption="Connected rider delivery experience"
              accent="blue"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
