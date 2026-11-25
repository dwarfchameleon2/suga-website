import { Link } from 'react-router-dom';

export function PrivacyPage() {
  return (
    <article className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-[#2563EB]">Legal · SUGA Ecosystem</p>
        <h1 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-[#111318] sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-[#555B68]">Effective date: November 2026</p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-[#555B68]">
          <section>
            <h2 className="font-display text-xl font-bold text-[#111318]">
              1. Our commitment to your privacy
            </h2>
            <p className="mt-3">
              SUGA Ecosystem values your trust. This Privacy Policy explains what information we
              collect when you visit our website or use the SUGA mobile application, how we use it
              to connect food lovers, local chefs, food vendors, and delivery riders, and the
              choices you have.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[#111318]">
              2. Information you provide to us
            </h2>
            <p className="mt-3">
              When you create a SUGA account, place a food order, list dishes as a chef or food
              vendor, deliver orders as a rider, or contact our support team, you may share
              information such as your name, email address, phone number, delivery address, and
              profile details.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[#111318]">
              3. Location and device permissions
            </h2>
            <p className="mt-3">
              To help you discover nearby food kitchens and coordinate smooth pickups and
              deliveries, the SUGA mobile app may ask for permission to access your approximate or
              precise location. You can manage or revoke location permissions anytime in your
              device settings.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[#111318]">
              4. How we use and share information
            </h2>
            <p className="mt-3">
              We use your information strictly to operate the SUGA Ecosystem experience: showing
              relevant local dishes, processing food orders, sharing necessary pickup and drop-off
              details between the customer, kitchen, and assigned delivery rider, and responding to
              support requests. We do not sell your personal information to third-party data
              brokers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[#111318]">
              5. Data protection and your choices
            </h2>
            <p className="mt-3">
              We take reasonable technical and organisational precautions to protect your account and
              order details. You may update your profile details inside the app or reach out to our
              support team if you wish to ask about or request deletion of your personal data.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[#111318]">
              6. Contact us about privacy
            </h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy, please reach out through our{' '}
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
