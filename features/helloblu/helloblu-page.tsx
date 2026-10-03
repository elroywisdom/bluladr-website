"use client";

import React, { useState } from "react";
import { Button } from "@/shared/ui/button";
import { Pill } from "@/shared/ui/pill";
import { Input } from "@/shared/ui/input";

const CATEGORIES = [
  "All",
  "Strategy",
  "Executive Presence",
  "Communications",
  "Creative Thinking",
  "Brand Stewardship",
  "Campaigns & Content",
];

const ARTICLES = [
  {
    slug: "creativity-is-a-skill",
    title: "Creativity is a skill: here's how to train it",
    category: "Creative Thinking",
    pillVariant: "blue" as const,
    readTime: "4 min read",
    excerpt:
      "Why creative problem-solving isn't an innate talent reserved for few, and how structured habits unlock high-level output.",
    date: "Sep 2026",
  },
  {
    slug: "five-minutes-before-media-interview",
    title: "What to do in the five minutes before a media interview",
    category: "Executive Presence",
    pillVariant: "purple" as const,
    readTime: "5 min read",
    excerpt:
      "The critical checklist for leaders stepping in front of cameras, microphones, or hostile interview panels.",
    date: "Sep 2026",
  },
  {
    slug: "how-to-brief-creative-agency",
    title: "How to brief a creative agency (and judge what comes back)",
    category: "Strategy",
    pillVariant: "azure" as const,
    readTime: "6 min read",
    excerpt:
      "A practical framework for brand stewards to define the problem clearly and hold creative partners to the highest standard.",
    date: "Aug 2026",
  },
  {
    slug: "internal-communication-is-brand-work",
    title: "Internal communication is brand work too",
    category: "Communications",
    pillVariant: "green" as const,
    readTime: "5 min read",
    excerpt:
      "If your team doesn't understand your story, your audience never will. How to align internal voices before launching external campaigns.",
    date: "Aug 2026",
  },
  {
    slug: "why-campaigns-fail-before-launch",
    title: "Why campaigns fail before they launch",
    category: "Campaigns & Content",
    pillVariant: "purple" as const,
    readTime: "7 min read",
    excerpt:
      "The silent killers of major marketing initiatives: murky objectives, disconnected channels, and unmeasured assumptions.",
    date: "Jul 2026",
  },
];

export function HelloBluPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const filteredArticles =
    selectedCategory === "All"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === selectedCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <div className="w-full bg-[var(--surface)] text-[var(--text)] transition-colors duration-200">
      {/* 1. Hero Section */}
      <section className="w-full pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-[var(--border)]">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--azure)] font-[var(--ui)] block mb-4">
              Insights &amp; Publications
            </span>
            <h1 className="font-[var(--disp)] text-[clamp(2.5rem,4.5vw+1rem,4.25rem)] leading-[1.08] tracking-[-0.025em] mb-6 text-[var(--text)]">
              HelloBlu
            </h1>
            <p className="font-[var(--body)] text-[var(--text2)] text-lg sm:text-xl leading-relaxed mb-4">
              Practical thinking on brand, communication, leadership and creativity, from the BluLadr team.
            </p>
            <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg leading-relaxed m-0">
              Short reads for teams who want to think clearly and work better. No jargon. Just ideas you can use.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Category Filter & Articles */}
      <section className="w-full py-16 sm:py-24">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-12 pb-6 border-b border-[var(--border)]">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold font-[var(--ui)] transition-all cursor-pointer border ${
                    isActive
                      ? "bg-[var(--navy)] text-white border-[var(--navy)] [html[data-theme='dark']_&]:bg-white [html[data-theme='dark']_&]:text-black"
                      : "bg-[var(--raised)] text-[var(--text2)] border-[var(--border)] hover:border-[var(--sky)]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="group flex flex-col justify-between p-8 rounded-2xl bg-[var(--raised)] border border-[var(--border)] shadow-[var(--sh1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--sh3)] hover:border-[var(--sky)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Pill variant={article.pillVariant}>{article.category}</Pill>
                    <span className="text-xs text-[var(--text2)] font-mono">{article.readTime}</span>
                  </div>

                  <h2 className="font-[var(--disp)] text-2xl font-normal text-[var(--text)] mb-3 group-hover:text-[var(--accent)] transition-colors leading-snug">
                    {article.title}
                  </h2>

                  <p className="font-[var(--body)] text-[var(--text2)] text-sm leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs font-[var(--ui)]">
                  <span className="text-[var(--text2)]">{article.date}</span>
                  <span className="font-bold text-[var(--accent)] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read article <span aria-hidden="true">→</span>
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Box */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[var(--alt)] border border-[var(--border)] text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--azure)] font-[var(--ui)] block mb-3">
              Newsletter
            </span>
            <h3 className="font-[var(--disp)] text-2xl sm:text-3xl font-normal text-[var(--text)] mb-3">
              Get HelloBlu in your inbox.
            </h3>
            <p className="font-[var(--body)] text-[var(--text2)] text-base mb-8">
              One useful idea at a time on brand strategy, communication, and team leadership.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-[var(--raised)] text-[var(--green)] font-bold text-sm">
                Thank you! You&rsquo;re on the list.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" variant="primary">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
