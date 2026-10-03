import React from "react";

export function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-[var(--surface)] text-[var(--text)] transition-colors duration-200 py-20 sm:py-28">
      <div className="wrap max-w-3xl px-6 mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--azure)] font-[var(--ui)] block mb-4">
          Legal
        </span>
        <h1 className="font-[var(--disp)] text-4xl sm:text-5xl font-normal mb-6 text-[var(--text)]">
          Privacy Policy
        </h1>
        <p className="font-[var(--body)] text-xs font-mono text-[var(--text2)] mb-12">
          Effective Date: 30 September 2026 · BluLadr Ltd (RC 9486360)
        </p>

        <div className="space-y-8 font-[var(--body)] text-[var(--text2)] text-base sm:text-lg leading-relaxed">
          <section>
            <h2 className="font-[var(--disp)] text-2xl font-normal text-[var(--text)] mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you request a proposal or contact BluLadr, we collect information you provide directly to us, including your name, email address, phone number, organisation name, job title, and project details.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--disp)] text-2xl font-normal text-[var(--text)] mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              We use the collected information solely to communicate with you, evaluate your organisation&rsquo;s strategic requirements, book discovery calls, prepare tailored proposals, and deliver agreed consultancy services.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--disp)] text-2xl font-normal text-[var(--text)] mb-3">
              3. Data Protection &amp; Confidentiality
            </h2>
            <p>
              BluLadr respects your confidentiality. We do not sell, rent, or trade your personal or organisational information with third parties. All client discovery materials, brand assets, and proprietary documents are handled under strict confidentiality standards.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--disp)] text-2xl font-normal text-[var(--text)] mb-3">
              4. Contact Us
            </h2>
            <p>
              For any questions regarding this Privacy Policy or your data, please contact us at{" "}
              <a href="mailto:hello@bluladr.com" className="text-[var(--accent)] font-bold no-underline">
                hello@bluladr.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export function TermsOfUsePage() {
  return (
    <div className="w-full bg-[var(--surface)] text-[var(--text)] transition-colors duration-200 py-20 sm:py-28">
      <div className="wrap max-w-3xl px-6 mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--azure)] font-[var(--ui)] block mb-4">
          Legal
        </span>
        <h1 className="font-[var(--disp)] text-4xl sm:text-5xl font-normal mb-6 text-[var(--text)]">
          Terms of Use
        </h1>
        <p className="font-[var(--body)] text-xs font-mono text-[var(--text2)] mb-12">
          Effective Date: 30 September 2026 · BluLadr Ltd (RC 9486360)
        </p>

        <div className="space-y-8 font-[var(--body)] text-[var(--text2)] text-base sm:text-lg leading-relaxed">
          <section>
            <h2 className="font-[var(--disp)] text-2xl font-normal text-[var(--text)] mb-3">
              1. Engagement &amp; Proposals
            </h2>
            <p>
              All consultancy, training, and executive coaching engagements provided by BluLadr Ltd are subject to formal proposal sign-off and standard terms of 70% upon confirmation to secure dates and 30% upon completion.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--disp)] text-2xl font-normal text-[var(--text)] mb-3">
              2. Intellectual Property
            </h2>
            <p>
              All proprietary frameworks, course curriculum, training syllabi, and methodology developed by BluLadr Ltd remain the intellectual property of BluLadr Ltd. Deliverables tailored specifically for your organisation (such as your Brand Bible) become your property upon full payment.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--disp)] text-2xl font-normal text-[var(--text)] mb-3">
              3. Out-of-State Logistics
            </h2>
            <p>
              For engagements conducted outside Abuja, travel, lodging, and logistical expenses for our Principal and technical team are agreed upon and billed separately from the core engagement fee.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--disp)] text-2xl font-normal text-[var(--text)] mb-3">
              4. Governing Law
            </h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
