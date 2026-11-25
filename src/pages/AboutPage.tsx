import { Link } from 'react-router-dom';
import { ArrowRight, Download, Heart, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { SUGA_APK_URL, SUGA_DOWNLOAD_BUTTON_LABEL } from '../utils/sugaLogic';

const VALUES = [
  {
    title: 'Community-First Food Culture',
    description:
      'Every meal has a story and a kitchen behind it. We celebrate local culinary creativity and bring neighbours closer to the food makers in their city.',
    icon: Users,
    color: 'text-[#FF5C1A] bg-[#FF5C1A]/10',
  },
  {
    title: 'Built for Everyday Simplicity',
    description:
      'From discovering a dish on Food Story to handing off an order at the doorstep, SUGA keeps every step clear, friendly, and mobile-first.',
    icon: Sparkles,
    color: 'text-[#2563EB] bg-[#2563EB]/10',
  },
  {
    title: 'Fair Visibility for Local Kitchens',
    description:
      'Independent chefs and local food vendors deserve tools that showcase their food beautifully without needing a massive marketing budget.',
    icon: Heart,
    color: 'text-[#7C3AED] bg-[#7C3AED]/10',
  },
  {
    title: 'Trust Across Every Delivery',
    description:
      'Clear order details and respectful coordination help food lovers, kitchens, and delivery riders count on one another.',
    icon: ShieldCheck,
    color: 'text-[#111318] bg-[#111318]/10',
  },
];

const ECOSYSTEM_MEMBERS = [
  {
    role: 'Food Lovers',
    avatar: '/assets/aistudio/suga-consumer-avatar_e0f76921.png',
    alt: 'SUGA food lover illustrated avatar',
    summary:
      'Explore freshly made dishes, discover hidden gems through Food Stories, and enjoy smooth food ordering whenever cravings strike.',
  },
  {
    role: 'Local Chefs & Food Vendors',
    avatar: '/assets/aistudio/suga-chef-avatar_a007ed05.png',
    alt: 'SUGA local chef illustrated avatar',
    summary:
      'Present your menu with pride, share behind-the-scenes cooking clips, and turn first-time tasters into loyal regulars.',
  },
  {
    role: 'Delivery Riders',
    avatar: '/assets/aistudio/suga-rider-avatar_d0f8e2c2.png',
    alt: 'SUGA delivery rider illustrated avatar',
    summary:
      'Stay flexible, pick up freshly packed meals with clear route details, and deliver warmth across your community.',
  },
];

export function AboutPage() {
  return (
    <div>
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-white pt-12 pb-16 sm:pt-16 sm:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#FF5C1A]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-[#7C3AED]/10 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-sm font-semibold text-[#FF5C1A]">About SUGA Ecosystem</p>
              <h1 className="font-display mt-3 text-4xl leading-[1.1] font-extrabold tracking-tight text-balance text-[#111318] sm:text-5xl">
                Reimagining how our cities discover and share great food.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-[#555B68] sm:text-lg">
                SUGA Ecosystem is a social food discovery app and food delivery app created for a
                young, energetic African market. We believe finding your next favourite meal should
                feel social, visual, and deeply connected to the people who cook it.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={SUGA_APK_URL}
                  download
                  className="inline-flex min-h-[48px] items-center gap-2.5 rounded-xl bg-[#FF5C1A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E0480B]"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>{SUGA_DOWNLOAD_BUTTON_LABEL}</span>
                </a>
                <Link
                  to="/support"
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-5 py-3 text-sm font-semibold text-[#111318] transition-colors hover:bg-[#F5F6F8]"
                >
                  <span>Partner with SUGA</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-[#E5E7EB] bg-[#F5F6F8] shadow-sm">
                <img
                  src="/assets/aistudio/suga-banner_7291e907.png"
                  alt="SUGA Ecosystem visual showing chef, customer, mobile app, delivery rider, and local meals"
                  referrerPolicy="no-referrer"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who SUGA Connects */}
      <section className="border-y border-[#E5E7EB] bg-[#F5F6F8] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#2563EB]">Our connected circle</p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-balance text-[#111318] sm:text-4xl">
              Discover. Connect. Enjoy.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#555B68]">
              Instead of treating food ordering as a cold transaction, SUGA brings the full local
              food story together around three essential communities.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {ECOSYSTEM_MEMBERS.map((member) => (
              <article
                key={member.role}
                className="flex flex-col rounded-3xl border border-[#E5E7EB] bg-white p-7"
              >
                <img
                  src={member.avatar}
                  alt={member.alt}
                  width={88}
                  height={88}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-22 w-22 rounded-full object-cover"
                />
                <h3 className="font-display mt-6 text-xl font-bold text-[#111318]">
                  {member.role}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#555B68] sm:text-base">
                  {member.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#7C3AED]">What guides us</p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-balance text-[#111318] sm:text-4xl">
              Built with warmth, energy, and respect for local craft
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="rounded-3xl border border-[#E5E7EB] bg-[#F5F6F8]/50 p-7"
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${val.color}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display mt-5 text-xl font-bold text-[#111318]">
                    {val.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#555B68] sm:text-base">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#111318] py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to explore SUGA Ecosystem?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
              Download SUGA for Android today or reach out to our team if you cook, deliver, or
              want to collaborate.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/download"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-[#FF5C1A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E0480B]"
            >
              <span>Go to Download</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/support"
              className="inline-flex min-h-[48px] items-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
