import { notFound } from "next/navigation";
import { CategoryPage } from "@/components/category-page";
import { serviceCategories, getCategoryBySlug } from "@/lib/service-categories";

export function generateStaticParams() {
  return serviceCategories
    .filter((c) => !c.href)
    .map((c) => ({ category: c.slug }));
}

export default async function Page({ params }) {
  const { category } = await params;
  if (!getCategoryBySlug(category)) notFound();
  return <CategoryPage slug={category} />;
}
