import React from "react";
import Link from "next/link";
import { Pill } from "@/shared/ui/pill";

const POSTS = [
  {
    category: "Creative Thinking",
    pillVariant: "blue" as const,
    color: "#049DD9",
    title: "Creativity is a skill: here’s how to train it",
    excerpt: "Why creative problem-solving isn't an innate talent reserved for the few, and how structured habits unlock high-level output across teams.",
    readTime: "4 min read",
    href: "/helloblu",
  },
  {
    category: "Brand Strategy",
    pillVariant: "purple" as const,
    color: "#8B5CF6",
    title: "How to brief a creative agency (and judge what comes back)",
    excerpt: "A practical framework for brand stewards to define the problem clearly, protect budget, and hold creative partners to the highest standard.",
    readTime: "6 min read",
    href: "/helloblu",
  },
  {
    category: "Strategic Communications",
    pillVariant: "green" as const,
    color: "#10B981",
    title: "Internal communication is brand work too",
    excerpt: "If your own team doesn't understand your story, your audience never will. How to align internal voices before launching external campaigns.",
    readTime: "5 min read",
    href: "/helloblu",
  },
] as const;

export function HelloBluTeaser() {
  return (
    <section className="w-full bg-[var(--surface)] text-[var(--text)] py-20 sm:py-28 md:py-36 border-t border-[var(--border)] transition-colors duration-200">
      <div className="wrap max-w-[1200px] px-6 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--alt)] border border-[var(--border)] text-xs font-bold font-[var(--ui)] uppercase tracking-wider text-[var(--accent)] mb-4">
              <span>Publication &amp; Insights</span>
            </div>
            <h2 className="font-[var(--disp)] text-[clamp(2.25rem,3.5vw+1rem,3.75rem)] leading-[1.08] tracking-[-0.025em] text-[var(--text)] m-0">
              Fresh thinking from <span className="italic underline decoration-[var(--azure)] decoration-2">HelloBlu.</span>
            </h2>
            <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg mt-3 leading-relaxed">
              Short, high-leverage reads on brand strategy, executive presence, and modern communications.
            </p>
          </div>
          <Link
            href="/helloblu"
            className="inline-flex items-center gap-2 font-[var(--ui)] text-sm font-bold text-[var(--accent)] hover:text-[var(--azure)] hover:translate-x-1 transition-all no-underline"
          >
            <span>View all articles</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((post, i) => (
            <article
              key={post.title}
              className="reveal group flex flex-col justify-between p-8 sm:p-9 rounded-3xl bg-[var(--raised)] border border-[var(--border)] shadow-[var(--sh1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--sh3)] hover:border-[var(--sky)]"
              style={{ "--i": i } as React.CSSProperties}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <Pill variant={post.pillVariant}>
                    {post.category}
                  </Pill>
                  <span className="text-xs font-medium font-[var(--ui)] text-[var(--text2)]">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-[var(--disp)] text-xl sm:text-2xl font-normal text-[var(--text)] mb-4 leading-snug group-hover:text-[var(--azure)] transition-colors">
                  <Link href={post.href} className="no-underline text-inherit hover:underline">
                    {post.title}
                  </Link>
                </h3>

                <p className="font-[var(--body)] text-[var(--text2)] text-sm sm:text-base leading-relaxed m-0">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--border)] flex items-center justify-between">
                <Link
                  href={post.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider font-[var(--ui)] text-[var(--accent)] group-hover:text-[var(--azure)] group-hover:translate-x-1 transition-all no-underline"
                >
                  <span>Read Article</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
