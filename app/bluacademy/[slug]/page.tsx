import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COURSES } from "@/features/academy/courses-data";
import { CourseDetailView } from "@/features/academy/course-detail-view";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COURSES.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) return {};

  return {
    title: `${course.title} | BluAcademy | BluLadr`,
    description: course.overview,
    alternates: { canonical: `https://bluladr.com/bluacademy/${slug}` },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailView course={course} />;
}
