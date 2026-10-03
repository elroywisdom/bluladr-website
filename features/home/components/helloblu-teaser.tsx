import React from "react";
import { Pill } from "@/shared/ui/pill";

const POSTS = [
  {
    category: "Creative Thinking",
    pillVariant: "blue" as const,
    title: "Creativity is a skill: here’s how to train it",
    excerpt: "Why creative problem-solving isn't an innate talent reserved for few, and how structured habits unlock high-level output.",
    readTime: "4 min read",
    href: "/helloblu",
  },
  {
    category: "Brand Strategy",
    pillVariant: "purple" as const,
    title: "How to brief a creative agency (and judge what comes back)",
    excerpt: "A practical framework for brand stewards to define the problem clearly and hold creative partners to the highest standard.",
    readTime: "6 min read",
    href: "/helloblu",
  },
  {
    category: "Strategic Communications",
    pillVariant: "green" as const,
    title: "Internal communication is brand work too",
    excerpt: "If your team doesn't understand your story, your audience never will. How to align internal voices before launching external campaigns.",
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
            <h2 className="font-[var(--disp)] text-[clamp(2rem,3vw+1rem,3.25rem)] leading-[1.12] tracking-[-0.02em] text-[var(--text)] m-0">
              Fresh thinking from HelloBlu.
            </h2>
            <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg mt-3 leading-relaxed">
              Short, useful reads on brand strategy, executive presence, and communications.
            </p>
          </div>
          <a
            href="/helloblu"
            className="inline-flex items-center gap-2 font-[var(--ui)] text-sm font-bold text-[var(--accent)] hover:translate-x-1 transition-transform no-underline"
          >
            <span>View all articles</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {POSTS.map((post, i) => (
            <article
              key={post.title}
              className="reveal group flex flex-col justify-between p-8 rounded-2xl bg-[var(--raised)] border border-[var(--border)] shadow-[var(--sh1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--sh3)] hover:border-[var(--sky)]"
              style={{ "--i": i } as React.CSSProperties}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Pill variant={post.pillVariant}>{post.category}</Pill>
                  <span className="text-xs text-[var(--text2)] font-mono">{post.readTime}</span>
                </div>

                <h3 className="font-[var(--disp)] text-xl sm:text-2xl font-normal text-[var(--text)] mb-3 group-hover:text-[var(--accent)] transition-colors leading-snug">
                  <a href={post.href} className="text-inherit no-underline">
                    {post.title}
                  </a>
                </h3>

                <p className="font-[var(--body)] text-[var(--text2)] text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border)] flex items-center gap-2 text-xs font-bold font-[var(--ui)] text-[var(--accent)] group-hover:translate-x-1 transition-transform">
                <span>Read article</span>
                <span aria-hidden="true">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
