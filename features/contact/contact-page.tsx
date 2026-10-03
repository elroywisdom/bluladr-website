"use client";

import React, { useState } from "react";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { Select } from "@/shared/ui/select";
import { Alert } from "@/shared/ui/alert";
import { submitProposal } from "./actions/send-proposal";

const ACADEMY_COURSES = [
  "Brand Strategy",
  "Strategic Communications",
  "Creative Thinking",
  "Brand Stewardship",
  "Creative Project Management",
  "Campaign & Content Development",
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    organisation: "",
    email: "",
    phone: "",
    service: "BluStrategy",
    selectedCourses: [] as string[],
    teamSize: "1–10",
    location: "Abuja",
    format: "In-person",
    message: "",
    honeypot: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const toggleCourse = (course: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedCourses: prev.selectedCourses.includes(course)
        ? prev.selectedCourses.filter((c) => c !== course)
        : [...prev.selectedCourses, course],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const detailedMessage = [
      formData.message,
      formData.jobTitle ? `Role: ${formData.jobTitle}` : "",
      formData.selectedCourses.length > 0
        ? `Courses of interest: ${formData.selectedCourses.join(", ")}`
        : "",
      `Team Size: ${formData.teamSize} | Location: ${formData.location} | Format: ${formData.format}`,
    ]
      .filter(Boolean)
      .join("\n\n");

    const result = await submitProposal({
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      organization: formData.organisation,
      service: formData.service as "BluStrategy" | "BluExecutive" | "BluAcademy" | "General Inquiry",
      message: detailedMessage,
      honeypot: formData.honeypot,
    });

    setLoading(false);

    if (result.error) {
      setErrorMessage(result.error);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full bg-[var(--surface)] text-[var(--text)] transition-colors duration-200">
      {/* 1. Hero Section */}
      <section className="w-full pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-[var(--border)]">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--azure)] font-[var(--ui)] block mb-4">
              Get in Touch
            </span>
            <h1 className="font-[var(--disp)] text-[clamp(2.5rem,4.5vw+1rem,4.25rem)] leading-[1.08] tracking-[-0.025em] mb-6 text-[var(--text)]">
              Your team deserves to <span className="italic">grow.</span>
            </h1>
            <p className="font-[var(--body)] text-[var(--text2)] text-lg sm:text-xl leading-relaxed m-0">
              Tell us a little about your organisation. We&rsquo;ll book a discovery call and prepare your proposal. No pressure, just a good conversation.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Form & Contact Details */}
      <section className="w-full py-20 sm:py-28">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-16 items-start">
            {/* Form Column */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[var(--raised)] border border-[var(--border)] shadow-sm">
              {submitted ? (
                <div className="space-y-6 text-center py-12">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[var(--green)]/15 text-[var(--green)] flex items-center justify-center text-2xl font-bold">
                    ✓
                  </div>
                  <h2 className="font-[var(--disp)] text-3xl font-normal text-[var(--text)]">
                    Proposal Request Received
                  </h2>
                  <Alert variant="success" className="text-left">
                    Thank you. We&rsquo;ve received your request and will be in touch shortly to book your discovery call.
                  </Alert>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        jobTitle: "",
                        organisation: "",
                        email: "",
                        phone: "",
                        service: "BluStrategy",
                        selectedCourses: [],
                        teamSize: "1–10",
                        location: "Abuja",
                        format: "In-person",
                        message: "",
                        honeypot: "",
                      });
                    }}
                  >
                    Submit another request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Invisible Honeypot Anti-Spam Field */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website_url"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  {errorMessage && (
                    <Alert variant="error">
                      {errorMessage}
                    </Alert>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text2)] font-[var(--ui)] mb-2">
                        Full name *
                      </label>
                      <Input
                        required
                        placeholder="Innocent Agboma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text2)] font-[var(--ui)] mb-2">
                        Job title *
                      </label>
                      <Input
                        required
                        placeholder="Head of Brand / Communications"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text2)] font-[var(--ui)] mb-2">
                        Organisation *
                      </label>
                      <Input
                        required
                        placeholder="Company / Organisation name"
                        value={formData.organisation}
                        onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text2)] font-[var(--ui)] mb-2">
                        Work email *
                      </label>
                      <Input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text2)] font-[var(--ui)] mb-2">
                        Phone number
                      </label>
                      <Input
                        type="tel"
                        placeholder="0902 081 1734"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text2)] font-[var(--ui)] mb-2">
                        Service of interest *
                      </label>
                      <Select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        options={[
                          { value: "BluStrategy", label: "BluStrategy" },
                          { value: "BluExecutive", label: "BluExecutive" },
                          { value: "BluAcademy", label: "BluAcademy" },
                          { value: "Not sure yet", label: "Not sure yet" },
                        ]}
                      />
                    </div>
                  </div>

                  {/* If BluAcademy is selected, show courses */}
                  {(formData.service === "BluAcademy" || formData.service === "Not sure yet") && (
                    <div className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                      <span className="block text-xs font-bold uppercase tracking-wider text-[var(--text2)] font-[var(--ui)] mb-3">
                        BluAcademy courses of interest (tick all that apply):
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {ACADEMY_COURSES.map((course) => {
                          const isChecked = formData.selectedCourses.includes(course);
                          return (
                            <button
                              key={course}
                              type="button"
                              onClick={() => toggleCourse(course)}
                              className={`p-3 rounded-xl text-left text-xs font-[var(--ui)] font-bold transition-all border flex items-center gap-2 cursor-pointer ${
                                isChecked
                                  ? "bg-[var(--green)]/15 border-[var(--green)] text-[var(--text)]"
                                  : "bg-[var(--raised)] border-[var(--border)] text-[var(--text2)] hover:border-[var(--sky)]"
                              }`}
                            >
                              <span className="w-4 h-4 rounded border border-current flex items-center justify-center text-[10px]">
                                {isChecked ? "✓" : ""}
                              </span>
                              <span>{course}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text2)] font-[var(--ui)] mb-2">
                        Team size
                      </label>
                      <Select
                        value={formData.teamSize}
                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                        options={[
                          { value: "1–10", label: "1–10" },
                          { value: "11–25", label: "11–25" },
                          { value: "26–50", label: "26–50" },
                          { value: "50+", label: "50+" },
                        ]}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text2)] font-[var(--ui)] mb-2">
                        Location
                      </label>
                      <Select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        options={[
                          { value: "Abuja", label: "Abuja" },
                          { value: "Outside Abuja", label: "Outside Abuja" },
                        ]}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text2)] font-[var(--ui)] mb-2">
                        Preferred format
                      </label>
                      <Select
                        value={formData.format}
                        onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                        options={[
                          { value: "In-person", label: "In-person" },
                          { value: "Hybrid", label: "Hybrid" },
                          { value: "Fully Virtual", label: "Fully Virtual" },
                        ]}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text2)] font-[var(--ui)] mb-2">
                      Tell us where you are and where you&rsquo;d like to be.
                    </label>
                    <Textarea
                      rows={4}
                      placeholder="Share a little about your brand objectives, current challenges, or specific timelines..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full py-4 text-base font-bold tracking-wide shadow-md hover:shadow-xl text-center flex items-center justify-center gap-2 cursor-pointer mt-8"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white border-r-transparent animate-spin inline-block" />
                        <span>Sending proposal request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Proposal Request</span>
                        <span aria-hidden="true" className="text-lg leading-none">→</span>
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Sidebar Details */}
            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-[var(--alt)] border border-[var(--border)]">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--azure)] font-[var(--ui)] block mb-4">
                  Other ways to reach us
                </span>
                <ul className="space-y-4 list-none p-0 m-0">
                  <li>
                    <span className="text-xs text-[var(--text2)] block">Phone</span>
                    <a href="tel:+2349020811734" className="font-[var(--ui)] font-bold text-lg text-[var(--text)] hover:text-[var(--accent)] no-underline">
                      0902 081 1734
                    </a>
                  </li>
                  <li>
                    <span className="text-xs text-[var(--text2)] block">Email</span>
                    <a href="mailto:hello@bluladr.com" className="font-[var(--ui)] font-bold text-lg text-[var(--text)] hover:text-[var(--accent)] no-underline">
                      hello@bluladr.com
                    </a>
                  </li>
                  <li>
                    <span className="text-xs text-[var(--text2)] block">Headquarters</span>
                    <span className="font-[var(--ui)] font-bold text-base text-[var(--text)]">
                      Abuja, Nigeria (working across Africa)
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-[var(--raised)] border border-[var(--border)]">
                <h3 className="font-[var(--disp)] text-xl font-normal text-[var(--text)] mb-3">
                  What happens next?
                </h3>
                <ol className="space-y-3 font-[var(--body)] text-sm text-[var(--text2)] list-decimal pl-4 m-0 leading-relaxed">
                  <li>We review your request within 24 hours.</li>
                  <li>We schedule a 30-minute discovery call to align on goals.</li>
                  <li>We prepare a tailored scope and proposal.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
