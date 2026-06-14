import type { ReactNode } from "react";
import Link from "next/link";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface ArticleLayoutProps {
  schemas: Record<string, unknown>[];
  breadcrumbs: BreadcrumbItem[];
  title: string;
  children: ReactNode;
  readingTime?: string;
  author?: string;
}

export function ArticleLayout({
  schemas,
  breadcrumbs,
  title,
  children,
  readingTime = "10 دقائق قراءة",
  author = "فريق Tawdif Pro",
}: ArticleLayoutProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
        {breadcrumbs.map((b, i) => (
          <span key={b.href} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-gray-300">/</span>}
            {i < breadcrumbs.length - 1 ? (
              <Link href={b.href} className="transition-colors hover:text-emerald-600">
                {b.name}
              </Link>
            ) : (
              <span className="font-medium text-gray-900">{b.name}</span>
            )}
          </span>
        ))}
      </nav>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-tight">
          {title}
        </h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف {author}</span>
          <span className="text-gray-300">·</span>
          <span>{readingTime}</span>
        </div>
      </header>
      <div className="prose-headings:scroll-mt-20 space-y-6 text-base leading-8 text-gray-800 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_p:last-child]:mb-0 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pr-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pr-6 [&_li]:leading-7 [&_li>strong]:text-gray-900 [&_hr]:border-gray-200 [&_hr]:my-8 [&_blockquote]:border-r-4 [&_blockquote]:border-emerald-500 [&_blockquote]:bg-emerald-50/50 [&_blockquote]:pr-4 [&_blockquote]:py-3 [&_blockquote]:text-gray-700 [&_blockquote]:italic [&_blockquote]:rounded-l-lg">
        {children}
      </div>
      <footer className="mt-12 border-t border-gray-100 pt-8">
        <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100/50 p-6">
          <p className="text-sm text-gray-600 flex items-center gap-2">
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">اقرا أيضا</span>
            {renderRelatedLinks(breadcrumbs)}
          </p>
        </div>
      </footer>
    </article>
  );
}

function renderRelatedLinks(breadcrumbs: BreadcrumbItem[]) {
  const sectionHref = breadcrumbs.length >= 2 ? breadcrumbs[breadcrumbs.length - 2]?.href : "";
  const sectionName = breadcrumbs.length >= 2 ? breadcrumbs[breadcrumbs.length - 2]?.name : "";

  if (!sectionHref) return null;

  const related = sectionHref === "/emplois"
    ? [
        { href: "/emplois/guides/indemnite-licenciement-maroc", label: "تعويض نهاية الخدمة فالمغرب" },
        { href: "/emplois/guides/calcul-conge-annuel-maroc", label: "حساب الإجازة السنوية" },
      ]
    : sectionHref === "/formations"
    ? [
        { href: "/formations/guides/inscription-ofppt-2026", label: "التسجيل في OFPPT 2026" },
        { href: "/formations/guides/formation-gratuite-en-ligne", label: "تكوين مجاني عن بعد" },
      ]
    : sectionHref === "/projets"
    ? [
        { href: "/projets/guides/auto-entrepreneur-maroc", label: "المقاول الذاتي بالمغرب" },
        { href: "/projets/guides/programme-forsa-2026", label: "برنامج Forsa 2026" },
      ]
    : [];

  return (
    <>
      {related.map((r, i) => (
        <span key={r.href}>
          {i > 0 && <span className="mx-1.5 text-gray-300">|</span>}
          <Link href={r.href} className="text-emerald-600 underline underline-offset-2 transition-colors hover:text-emerald-800">
            {r.label}
          </Link>
        </span>
      ))}
    </>
  );
}
