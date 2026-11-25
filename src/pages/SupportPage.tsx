import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronDown, Download, LifeBuoy, Mail, Send } from 'lucide-react';
import { SUPPORT_FAQS } from '../data/sugaContent';
import {
  SUGA_APK_URL,
  SUGA_DOWNLOAD_BUTTON_LABEL,
  SupportFormInput,
  validateSupportForm,
} from '../utils/sugaLogic';

const INITIAL_FORM: SupportFormInput = {
  name: '',
  email: '',
  topic: 'food-lover',
  message: '',
};

const TOPIC_LABELS: Record<string, string> = {
  'food-lover': 'Food Lover Support',
  'chef-vendor': 'Chef & Local Food Vendor Inquiry',
  'delivery-rider': 'Delivery Rider Support',
  'android-install': 'Android APK Installation Help',
  partnership: 'Business & Community Partnership',
};

export function SupportPage() {
  const [openFaqId, setOpenFaqId] = useState<string>(SUPPORT_FAQS[0].id);
  const [formState, setFormState] = useState<SupportFormInput>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof SupportFormInput, string>>>({});
  const [submittedRecord, setSubmittedRecord] = useState<SupportFormInput | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateSupportForm(formState);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    setSubmittedRecord({ ...formState });
    setFormState(INITIAL_FORM);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-white pt-12 pb-12 sm:pt-16 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#2563EB]">Help & Inquiries</p>
            <h1 className="font-display mt-2 text-4xl leading-[1.1] font-extrabold tracking-tight text-balance text-[#111318] sm:text-5xl">
              How can we help you today?
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#555B68] sm:text-lg">
              Whether you are ordering your next meal, cooking as a local chef or food vendor,
              delivering on the road, or exploring a partnership with SUGA Ecosystem, our team is
              ready to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: FAQ + Contact Form */}
      <section className="border-t border-[#E5E7EB] bg-[#F5F6F8] py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          {/* Left: FAQs */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2.5">
              <LifeBuoy className="h-5 w-5 text-[#FF5C1A]" aria-hidden="true" />
              <h2 className="font-display text-2xl font-bold text-[#111318]">
                Frequently asked questions
              </h2>
            </div>

            <div className="mt-6 space-y-3">
              {SUPPORT_FAQS.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-bold text-[#111318] transition-colors hover:bg-[#F5F6F8]/60"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#555B68] transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#FF5C1A]' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-[#E5E7EB] px-5 py-4 text-sm leading-relaxed text-[#555B68]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-3xl border border-[#E5E7EB] bg-white p-6">
              <h3 className="font-display text-lg font-bold text-[#111318]">
                Looking for the Android app?
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#555B68]">
                SUGA is coming soon to Google Play and the Apple App Store. You can install the
                official Android release directly right now.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={SUGA_APK_URL}
                  download
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#FF5C1A] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#E0480B]"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>{SUGA_DOWNLOAD_BUTTON_LABEL}</span>
                </a>
                <Link
                  to="/download"
                  className="text-sm font-semibold text-[#2563EB] hover:underline"
                >
                  View install guide
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Contact & Partnership Form */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6 sm:p-8">
              <div className="flex items-center gap-2.5">
                <Mail className="h-5 w-5 text-[#7C3AED]" aria-hidden="true" />
                <h2 className="font-display text-2xl font-bold text-[#111318]">
                  Send us a message
                </h2>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#555B68]">
                Have a question about food ordering, joining as a chef or vendor, riding with
                SUGA, or partnering with us? Fill out the form below.
              </p>

              {submittedRecord ? (
                <div
                  role="status"
                  className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-[#111318]"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-display text-lg font-bold">
                        Message received — thank you, {submittedRecord.name}!
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#555B68]">
                        We have recorded your inquiry under{' '}
                        <span className="font-semibold text-[#111318]">
                          {TOPIC_LABELS[submittedRecord.topic] ?? submittedRecord.topic}
                        </span>{' '}
                        and will follow up at{' '}
                        <span className="font-semibold text-[#111318]">
                          {submittedRecord.email}
                        </span>
                        .
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmittedRecord(null)}
                        className="mt-4 inline-flex min-h-[40px] cursor-pointer items-center rounded-xl border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#111318] transition-colors hover:bg-[#F5F6F8]"
                      >
                        Send another message
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                  <div>
                    <label
                      htmlFor="support-name"
                      className="block text-sm font-semibold text-[#111318]"
                    >
                      Full name
                    </label>
                    <input
                      id="support-name"
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={(e) => {
                        setFormState((prev) => ({ ...prev, name: e.target.value }));
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="e.g. Amaka Johnson"
                      aria-invalid={Boolean(errors.name)}
                      className="mt-1.5 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111318] placeholder:text-[#555B68]/60 focus:border-[#2563EB] focus:outline-none"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs font-medium text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="support-email"
                      className="block text-sm font-semibold text-[#111318]"
                    >
                      Email address
                    </label>
                    <input
                      id="support-email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => {
                        setFormState((prev) => ({ ...prev, email: e.target.value }));
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder="you@example.com"
                      aria-invalid={Boolean(errors.email)}
                      className="mt-1.5 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111318] placeholder:text-[#555B68]/60 focus:border-[#2563EB] focus:outline-none"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs font-medium text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="support-topic"
                      className="block text-sm font-semibold text-[#111318]"
                    >
                      I am reaching out about
                    </label>
                    <select
                      id="support-topic"
                      name="topic"
                      value={formState.topic}
                      onChange={(e) => {
                        setFormState((prev) => ({ ...prev, topic: e.target.value }));
                        if (errors.topic) setErrors((prev) => ({ ...prev, topic: undefined }));
                      }}
                      aria-invalid={Boolean(errors.topic)}
                      className="mt-1.5 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111318] focus:border-[#2563EB] focus:outline-none"
                    >
                      <option value="food-lover">Food Lover Support</option>
                      <option value="chef-vendor">Joining as a Chef or Food Vendor</option>
                      <option value="delivery-rider">Joining as a Delivery Rider</option>
                      <option value="android-install">Android App Installation Help</option>
                      <option value="partnership">Business & Community Partnerships</option>
                    </select>
                    {errors.topic && (
                      <p className="mt-1.5 text-xs font-medium text-red-600">{errors.topic}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="support-message"
                      className="block text-sm font-semibold text-[#111318]"
                    >
                      Message
                    </label>
                    <textarea
                      id="support-message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={(e) => {
                        setFormState((prev) => ({ ...prev, message: e.target.value }));
                        if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                      placeholder="Tell us how we can support you or your food business..."
                      aria-invalid={Boolean(errors.message)}
                      className="mt-1.5 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111318] placeholder:text-[#555B68]/60 focus:border-[#2563EB] focus:outline-none"
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs font-medium text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#111318] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1C1F26] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>Submit Support Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
