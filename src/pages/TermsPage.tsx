import { Link } from 'react-router-dom';

export function TermsPage() {
  return (
    <article className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-[#7C3AED]">Legal · SUGA Ecosystem</p>
        <h1 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-[#111318] sm:text-5xl">
          Terms and Conditions
        </h1>
        <p className="mt-3 text-sm text-[#555B68]">Effective date: November 2026</p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-[#555B68]">
          <section>
            <h2 className="font-display text-xl font-bold text-[#111318]">
              1. Welcome to SUGA Ecosystem
            </h2>
            <p className="mt-3">
              By accessing this website, downloading the SUGA Android application, or participating
              in the SUGA Ecosystem as a food lover, local chef, food vendor, or delivery rider, you
              agree to follow these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[#111318]">
              2. How the ecosystem works
            </h2>
            <p className="mt-3">
              SUGA Ecosystem provides a mobile platform where independent local chefs and food
              vendors share dishes and food stories, food lovers discover and order meals, and
              independent delivery riders assist with transporting orders from kitchens to
              customers. Local kitchens remain responsible for food preparation, ingredients,
              hygiene, and menu accuracy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[#111318]">
              3. Android app download
            </h2>
            <p className="mt-3">
              While SUGA is coming soon to Google Play and the Apple App Store, we offer an
              official Android APK release through our Download page. You are responsible for
              downloading SUGA only from our official links and reviewing any device prompts when
              allowing installation from your browser or downloaded files.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[#111318]">
              4. Respectful community conduct
            </h2>
            <p className="mt-3">
              Everyone using SUGA agrees to treat food lovers, chefs, food vendors, and delivery
              riders with respect, provide accurate contact and delivery information, and avoid
              misusing food stories, reviews, or ordering features.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[#111318]">
              5. Brand and content ownership
            </h2>
            <p className="mt-3">
              The SUGA name, logo, visual design, and website content belong to SUGA Ecosystem.
              Chefs and creators keep ownership of the original food photos and stories they share
              while granting SUGA permission to display them within the app and promotional
              showcases.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[#111318]">
              6. Questions and updates
            </h2>
            <p className="mt-3">
              We may update these Terms and Conditions as SUGA grows. If you have questions about
              these terms, please contact us on the{' '}
              <Link to="/support" className="font-semibold text-[#2563EB] hover:underline">
                Support page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
