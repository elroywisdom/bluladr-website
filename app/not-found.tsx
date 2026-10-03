import { Button } from "@/shared/ui/button";

export default function NotFound() {
  return (
    <section className="section flex flex-col items-center justify-center text-center min-h-[70vh]">
      <div className="wrap max-w-xl">
        {/* Hand-drawn ladder illustration */}
        <svg
          viewBox="0 0 200 220"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="w-48 mx-auto mb-8"
        >
          <g stroke="var(--navy)" strokeWidth="5">
            <path d="M60 200 84 30" />
            <path d="M125 202 143 32" />
          </g>
          <g stroke="var(--aqua)" strokeWidth="6">
            <path d="M67 165c20 2 40 1 53 0" />
            <path d="M71 135c19 2.5 36 1.5 50 0" />
            <path d="M75 105c17 2 33 2 47 0" />
            <path d="M79 75c15 2 30 1.5 45 0.5" />
          </g>
          {/* Wobble question mark */}
          <g stroke="var(--sky)" strokeWidth="4">
            <path d="M156 59c-3-15 7-25 19-24 13 1 17 15 8 24-7 7-12 10-11 20" />
            <circle cx="171" cy="102" r="2" fill="var(--sky)" />
          </g>
        </svg>

        <p className="eyebrow">404</p>
        <h1 className="text-[var(--text-h1)] mb-4">
          Hmm. That rung is{" "}
          <em className="grad-text not-italic">missing.</em>
        </h1>
        <p className="text-[var(--text2)] text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist &mdash; but a few others do.
          Let&apos;s get you back on the ladder.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button href="/" variant="primary">Back to Home</Button>
          <Button href="/what-we-do" variant="secondary">What We Do</Button>
        </div>
      </div>
    </section>
  );
}
