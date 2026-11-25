import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  Bike,
  CheckCircle2,
  ChefHat,
  Compass,
  Download,
  HeartHandshake,
  Sparkles,
  Utensils,
} from 'lucide-react';
import { AppMockupDisplay } from '../components/AppMockupDisplay';
import { DownloadCard } from '../components/DownloadCard';
import { DISCOVERY_SCREENS, ROLE_PERSPECTIVES } from '../data/sugaContent';
import { SUGA_APK_URL, SUGA_DOWNLOAD_BUTTON_LABEL } from '../utils/sugaLogic';

export function HomePage() {
  const [activeRoleId, setActiveRoleId] = useState<'lovers' | 'chefs' | 'riders'>('lovers');
  const activeRole =
    ROLE_PERSPECTIVES.find((role) => role.id === activeRoleId) ?? ROLE_PERSPECTIVES[0];

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-10 pb-16 sm:pt-14 sm:pb-24">
        {/* Layered SUGA brand color effects */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-[#FF5C1A]/12 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-32 -left-28 h-[360px] w-[360px] rounded-full bg-[#2563EB]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-1/3 bottom-0 h-[300px] w-[300px] rounded-full bg-[#7C3AED]/10 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Hero Copy */}
            <div className="lg:col-span-6">
              <p className="text-sm font-semibold tracking-wide text-[#FF5C1A]">
                Discover · Connect · Enjoy
              </p>
              <h1 className="font-display mt-3 text-4xl leading-[1.08] font-extrabold tracking-tight text-balance text-[#111318] sm:text-5xl lg:text-[3.5rem]">
                Great food, local kitchens, and smoother delivery in one place.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#555B68] sm:text-lg">
                SUGA Ecosystem is a social food discovery app and food delivery app that brings
                food lovers, local chefs, local food vendors, and delivery riders together in one
                connected mobile experience.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={SUGA_APK_URL}
                  download
                  className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-xl bg-[#FF5C1A] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#E0480B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                >
                  <Download className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>{SUGA_DOWNLOAD_BUTTON_LABEL}</span>
                </a>

                <Link
                  to="/download"
                  className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-[#E5E7EB] bg-white px-5 py-3.5 text-sm font-semibold text-[#111318] transition-colors hover:bg-[#F5F6F8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                >
                  <span>Scan QR or view install guide</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
              </div>

              <p className="mt-4 text-sm text-[#555B68]">
                SUGA is coming soon to Google Play and the Apple App Store.
              </p>

              {/* High-level community roles summary */}
              <div className="mt-8 grid grid-cols-1 gap-4 border-t border-[#E5E7EB] pt-6 sm:grid-cols-3">
                <div>
                  <p className="font-display text-base font-bold text-[#111318]">Food Lovers</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#555B68]">
                    Stories, cravings, and effortless food ordering
                  </p>
                </div>
                <div>
                  <p className="font-display text-base font-bold text-[#111318]">Chefs & Vendors</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#555B68]">
                    Share signature dishes and grow loyal diners
                  </p>
                </div>
                <div>
                  <p className="font-display text-base font-bold text-[#111318]">Delivery Riders</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#555B68]">
                    Clear routes, live pickups, and smooth drop-offs
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Visual Showcase: Consumer + App Mockups */}
            <div className="relative lg:col-span-6">
              <div className="relative mx-auto flex max-w-lg items-center justify-center">
                {/* Layered vibrant color ring behind mockups */}
                <div
                  aria-hidden="true"
                  className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-tr from-[#FF5C1A]/20 via-[#7C3AED]/15 to-[#2563EB]/20"
                />

                <div className="relative z-10 grid w-full grid-cols-12 items-end gap-4 pt-4">
                  <div className="col-span-7">
                    <AppMockupDisplay
                      src="/assets/aistudio/mockup-explore-suga-page_efbff946.png"
                      alt="SUGA mobile app Explore screen showing food categories and food stories"
                      accent="orange"
                      priority
                    />
                  </div>
                  <div className="col-span-5 pb-4">
                    <div className="overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white p-2 shadow-lg">
                      <img
                        src="/assets/aistudio/suga-consumer_0c80cd03.png"
                        alt="Smiling African food lover ordering a fresh meal on her smartphone"
                        referrerPolicy="no-referrer"
                        className="h-56 w-full rounded-2xl object-cover object-top sm:h-64"
                      />
                      <div className="px-2 pt-2.5 pb-1">
                        <p className="font-display text-xs font-bold text-[#111318]">
                          Made for real cravings
                        </p>
                        <p className="text-[11px] text-[#555B68]">
                          Fresh local kitchens near you
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ONE ECOSYSTEM, THREE EXPERIENCES (INTERACTIVE SWITCHER) */}
      <section className="border-y border-[#E5E7EB] bg-[#F5F6F8] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#2563EB]">How SUGA works</p>
              <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-balance text-[#111318] sm:text-4xl">
                One connected experience for everyone at the table
              </h2>
            </div>

            {/* Interactive Role Switcher */}
            <div
              role="tablist"
              aria-label="Choose an ecosystem perspective"
              className="inline-flex w-full flex-wrap gap-1.5 rounded-2xl border border-[#E5E7EB] bg-white p-1.5 sm:w-auto"
            >
              {ROLE_PERSPECTIVES.map((role) => {
                const isActive = role.id === activeRole.id;
                return (
                  <button
                    key={role.id}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => setActiveRoleId(role.id)}
                    className={`min-h-[42px] flex-1 shrink-0 cursor-pointer whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold transition-colors sm:flex-initial ${
                      isActive
                        ? 'bg-[#111318] text-white'
                        : 'text-[#555B68] hover:bg-[#F5F6F8] hover:text-[#111318]'
                    }`}
                  >
                    {role.label}
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-10 grid items-center gap-10 rounded-3xl border border-[#E5E7EB] bg-white p-6 sm:p-10 lg:grid-cols-12"
            >
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3.5">
                  <img
                    src={activeRole.avatarImage}
                    alt={activeRole.avatarAlt}
                    width={56}
                    height={56}
                    referrerPolicy="no-referrer"
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xs font-semibold text-[#FF5C1A]">SUGA Perspective</p>
                    <p className="font-display text-lg font-bold text-[#111318]">
                      {activeRole.label}
                    </p>
                  </div>
                </div>

                <h3 className="font-display mt-5 text-2xl leading-snug font-bold text-balance text-[#111318] sm:text-3xl">
                  {activeRole.headline}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#555B68]">
                  {activeRole.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {activeRole.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-[#111318]">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#FF5C1A]"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/download"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#FF5C1A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#E0480B]"
                  >
                    <span>Try SUGA on Android</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex min-h-[44px] items-center text-sm font-semibold text-[#2563EB] hover:underline"
                  >
                    Learn more about our ecosystem
                  </Link>
                </div>
              </div>

              {/* Paired Real App Screens */}
              <div className="grid grid-cols-2 items-center gap-4 sm:gap-6 lg:col-span-7">
                <AppMockupDisplay
                  src={activeRole.primaryScreen.image}
                  alt={activeRole.primaryScreen.alt}
                  caption={activeRole.primaryScreen.caption}
                  accent={activeRole.accentColor}
                />
                <AppMockupDisplay
                  src={activeRole.secondaryScreen.image}
                  alt={activeRole.secondaryScreen.alt}
                  caption={activeRole.secondaryScreen.caption}
                  accent={activeRole.accentColor}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 3. DISCOVER FOOD YOU WILL LOVE */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#FF5C1A]">Food discovery first</p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-balance text-[#111318] sm:text-4xl">
              Discover food you will love
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#555B68]">
              Food is social, vibrant, and deeply personal. SUGA pairs short visual food stories
              with straightforward menus so you can see what local kitchens are cooking today and
              order with confidence.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {DISCOVERY_SCREENS.map((screen, index) => {
              const accents: Array<'orange' | 'blue' | 'purple'> = [
                'orange',
                'blue',
                'purple',
                'orange',
              ];
              return (
                <div
                  key={screen.id}
                  className="flex flex-col rounded-3xl border border-[#E5E7EB] bg-[#F5F6F8]/60 p-5"
                >
                  <div className="flex flex-1 items-center justify-center py-2">
                    <AppMockupDisplay
                      src={screen.image}
                      alt={screen.alt}
                      accent={accents[index % accents.length]}
                    />
                  </div>
                  <div className="mt-4 border-t border-[#E5E7EB] pt-4">
                    <h3 className="font-display text-lg font-bold text-[#111318]">
                      {screen.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#555B68]">
                      {screen.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. GROW WITH SUGA */}
      <section className="relative overflow-hidden bg-[#111318] py-16 text-white sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/4 h-80 w-80 rounded-full bg-[#7C3AED]/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#FF5C1A]/20 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#FF5C1A]">For kitchens & riders</p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Grow with SUGA
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              Behind every memorable meal are passionate local chefs, dedicated food vendors, and
              dependable delivery riders. SUGA gives independent culinary talent and riders a space
              to shine and grow alongside their community.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Chefs & Vendors Card */}
            <article className="flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF5C1A]/20 text-[#FF5C1A]">
                    <ChefHat className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Local Chefs & Food Vendors
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                  Share your best plates through Food Stories, keep your daily dishes easy to
                  browse, and build lasting relationships with hungry customers nearby.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-12 items-end gap-4">
                <div className="col-span-6 overflow-hidden rounded-2xl border border-white/10 bg-[#1C1F26]">
                  <img
                    src="/assets/aistudio/suga-chef_0e5ee5da.png"
                    alt="African chef smiling while checking food orders on his mobile phone"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-56 w-full object-cover object-top sm:h-64"
                  />
                </div>
                <div className="col-span-6">
                  <AppMockupDisplay
                    src="/assets/aistudio/mockup-chefs-dishes-list_b30b45ce.png"
                    alt="SUGA app kitchen dishes screen showing Jollof Rice, Egusi Soup, and Pepper Soup"
                    accent="purple"
                  />
                </div>
              </div>
            </article>

            {/* Delivery Riders Card */}
            <article className="flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2563EB]/25 text-[#60A5FA]">
                    <Bike className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Delivery Riders
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                  Connect local kitchens with customers across the neighbourhood. Accept open jobs
                  when you are ready, follow clear delivery details, and review your trip earnings.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-12 items-end gap-4">
                <div className="col-span-6 overflow-hidden rounded-2xl border border-white/10 bg-[#1C1F26]">
                  <img
                    src="/assets/aistudio/suga-rider_c5e78c18.png"
                    alt="Smiling SUGA delivery rider on a motorcycle with a branded delivery box"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-56 w-full object-cover object-top sm:h-64"
                  />
                </div>
                <div className="col-span-6">
                  <AppMockupDisplay
                    src="/assets/aistudio/mockup-rider-dashboard_9d8f6bc9.png"
                    alt="SUGA app delivery rider view showing current order and trip progress"
                    accent="blue"
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 5. MADE FOR YOUR CITY */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-[#E5E7EB] bg-[#F5F6F8]">
                <img
                  src="/assets/aistudio/suga-banner_7291e907.png"
                  alt="SUGA Ecosystem banner uniting an African chef, food lover, smartphone app, delivery rider, and local dishes"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <p className="text-sm font-semibold text-[#7C3AED]">Built for local culture</p>
              <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-balance text-[#111318] sm:text-4xl">
                Made for your city
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#555B68]">
                African food culture is lively, expressive, and community-driven. SUGA is designed
                around the energy of young urban neighbourhoods—where discovering a hidden kitchen
                or sharing your favourite meal feels as natural as scrolling your social feed.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF5C1A]/10 text-[#FF5C1A]">
                    <Compass className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#111318]">Discover</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#555B68]">
                      Find everyday favourites and fresh specialties from kitchens around you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2563EB]/10 text-[#2563EB]">
                    <HeartHandshake className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#111318]">Connect</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#555B68]">
                      Bridge the gap between diners, local chefs, food vendors, and riders.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7C3AED]/10 text-[#7C3AED]">
                    <Utensils className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#111318]">Enjoy</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#555B68]">
                      Order with clarity and enjoy warm meals delivered right to your door.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#E5E7EB] bg-[#F5F6F8] px-5 py-2.5 text-sm font-semibold text-[#111318] transition-colors hover:bg-[#E5E7EB]/70"
                >
                  <Sparkles className="h-4 w-4 text-[#FF5C1A]" aria-hidden="true" />
                  <span>Read the SUGA story</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMING SOON TO YOUR APP STORE + QR & ANDROID DOWNLOAD */}
      <section className="bg-[#F5F6F8] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold text-[#FF5C1A]">Get started on Android</p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-balance text-[#111318] sm:text-4xl">
              Coming soon to your app store
            </h2>
          </div>

          <DownloadCard variant="dark" />
        </div>
      </section>
    </div>
  );
}
