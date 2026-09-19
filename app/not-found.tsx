import Link from "next/link";
import { ArrowLeft, Compass, MessageCircle } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { serviceCategories, getCategoryHref } from "@/lib/service-categories";
import { btn, btnSize, containerNarrow } from "@/lib/ui";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className={`${containerNarrow} flex-1 py-16 sm:py-24`}>
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 text-brand-800 ring-1 ring-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            <Compass className="w-3.5 h-3.5" />
            Error 404
          </span>

          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            We couldn&apos;t find that page
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            The page may have moved, or it&apos;s still being built. Try one of our service
            domains below, or head back to the homepage.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/" className={`${btn.primary} ${btnSize.lg}`}>
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
            <Link href="/contact" className={`${btn.secondary} ${btnSize.lg}`}>
              <MessageCircle className="w-4 h-4" />
              Contact us
            </Link>
          </div>
        </div>

        {/* Wayfinding — turn a dead end into a useful jumping-off point */}
        <div className="mt-14 pt-10 border-t border-slate-200">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-5">
            Browse our services
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {serviceCategories.map((category) => {
              const Icon = category.icon;
              return (
                <li key={category.slug}>
                  <Link
                    href={getCategoryHref(category)}
                    className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 transition-all duration-200 hover:border-slate-300 hover:shadow-sm"
                  >
                    <span className="grid place-items-center w-9 h-9 rounded-lg bg-slate-100 text-slate-600 flex-shrink-0 transition-colors group-hover:bg-brand-50 group-hover:text-brand-700">
                      <Icon className="w-4 h-4" strokeWidth={2} />
                    </span>
                    <span className="text-sm font-medium text-slate-900">
                      {category.shortTitle}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
