import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { serviceCategories, getSubcategory } from "@/lib/service-categories";

export function generateStaticParams() {
  return serviceCategories
    .filter((c) => !c.href)
    .flatMap((c) =>
      c.subcategories
        .filter((s) => s.slug)
        .map((s) => ({ category: c.slug, service: s.slug }))
    );
}

export default async function Page({ params }) {
  const { category, service } = await params;
  if (!getSubcategory(category, service)) notFound();
  return <ServiceDetailPage categorySlug={category} serviceSlug={service} />;
}
