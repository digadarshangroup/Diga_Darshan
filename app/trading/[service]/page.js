import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { getCategoryBySlug, getSubcategory } from "@/lib/service-categories";

export function generateStaticParams() {
  const trading = getCategoryBySlug("trading");
  return (trading?.subcategories ?? [])
    .filter((s) => s.slug)
    .map((s) => ({ service: s.slug }));
}

export default async function Page({ params }) {
  const { service } = await params;
  if (!getSubcategory("trading", service)) notFound();
  return <ServiceDetailPage categorySlug="trading" serviceSlug={service} />;
}
