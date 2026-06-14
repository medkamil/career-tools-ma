import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Monitor, TrendingUp, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "قسم التكوين المهني - OFPPT وشهادات في المغرب",
  description: "دليلك الكامل للتكوين المهني في المغرب: التسجيل في OFPPT 2026، تكوين مجاني عن بعد بشهادات معتمدة، منح التكوين، وأفضل المهن المطلوبة في سوق الشغل المغربي. 16 دليل شامل.",
};

const features = [
  { title: "تكوينات OFPPT", description: "جميع تخصصات ومعاهد مكتب التكوين المهني", icon: GraduationCap },
  { title: "تكوينات مجانية", description: "دورات أونلاين مجانية بشهادات معتمدة", icon: Monitor },
  { title: "المهن المطلوبة 2026", description: "أحدث المهن والاختصاصات المطلوبة في سوق العمل", icon: TrendingUp },
];

const articles = [
  { title: "التسجيل في OFPPT 2026 (دليل كامل بالخطوات)", desc: "خطوات ومواعيد وشروط التسجيل في التكوين المهني", href: "/formations/guides/inscription-ofppt-2026" },
  { title: "أفضل 10 تكوينات مهنية مطلوبة في المغرب 2026", desc: "اختر التخصص المناسب مع الرواتب وفرص الشغل", href: "/formations/guides/meilleures-formations-maroc-2026" },
  { title: "أفضل منصات التكوين المجاني عن بعد في المغرب 2026", desc: "منصات مغربية وعالمية تقدم تكويناً مجانياً بشهادات", href: "/formations/guides/formation-gratuite-en-ligne" },
  { title: "منح التكوين المهني في المغرب 2026 (دليل كامل)", desc: "برامج المنح المتاحة للتكوين المهني في المغرب", href: "/formations/guides/bourses-formation-maroc" },
  { title: "أهم الشهادات المهنية المطلوبة في المغرب 2026", desc: "أهم الشهادات المهنية التي تزيد من فرصك في العمل", href: "/formations/guides/certifications-professionnelles" },
  { title: "التدريب المستمر للعاملين في المغرب 2026 (دليل كامل)", desc: "برامج التدريب المستمر للموظفين في القطاعين العام والخاص", href: "/formations/guides/formation-continue-maroc" },
  { title: "تكوين البرمجة والمعلوميات في المغرب", desc: "المدارس، الأسعار، والمستقبل المهني", href: "/formations/guides/formation-informatique-developpement-maroc" },
  { title: "تكوين المحاسبة والتدبير في المغرب", desc: "المدارس، الشهادات، والرواتب", href: "/formations/guides/formation-comptabilite-gestion-maroc" },
  { title: "تكوين اللغة الإنجليزية في المغرب", desc: "المعاهد، الأسعار، وشهادات التوفل", href: "/formations/guides/formation-langue-anglais-maroc" },
  { title: "تكوين كهرباء البناء في المغرب", desc: "المراكز، الأسعار، وشروط الولوج", href: "/formations/guides/formation-electricite-batiment-maroc" },
  { title: "تكوين السباكة والتدفئة في المغرب", desc: "المراكز، الأسعار، والمستقبل المهني", href: "/formations/guides/formation-plomberie-chauffage-maroc" },
  { title: "تكوين ميكانيك السيارات في المغرب", desc: "المراكز، الأسعار، والشهادة", href: "/formations/guides/formation-mecanique-auto-maroc" },
  { title: "تكوين الحام (Soudure) في المغرب", desc: "المراكز والأسعار والشهادة", href: "/formations/guides/formation-soudure-maroc" },
  { title: "تكوين الطبخ والحلويات في المغرب", desc: "المراكز، الأسعار، وشهادات الشيف", href: "/formations/guides/formation-cuisine-patisserie-maroc" },
  { title: "تكوين الحلاقة والتجميل في المغرب", desc: "المراكز، الأسعار، وشهادة التجميل", href: "/formations/guides/formation-coiffure-esthetique-maroc" },
  { title: "تكوين مساعد التمريض في المغرب", desc: "المراكز، الأسعار، وشروط الولوج", href: "/formations/guides/formation-auxiliaire-vie-maroc" },
];

const sectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "قسم التكوين - دورات تكوينية وشهادات مهنية في المغرب",
  description: "دليلك الكامل للتكوين المهني في المغرب: التسجيل في OFPPT، تكوين مجاني عن بعد بشهادات معتمدة، منح التكوين، وأفضل المهن المطلوبة.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://tawdifpro.ma" },
      { "@type": "ListItem", position: 2, name: "قسم التكوين", item: "https://tawdifpro.ma/formations" },
    ],
  },
};

export default function FormationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sectionSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 to-white pb-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-200/30 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 shadow-sm">
              <GraduationCap className="h-4 w-4" />
              التكوين والتعليم
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-800 sm:text-5xl">
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                قسم التكوين
              </span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              دورات تكوينية، شهادات مهنية، وكل ما يخص التكوين في المغرب
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Features */}
        <section>
          <h2 className="mb-2 text-center text-2xl font-bold text-slate-800 sm:text-3xl">مميزات القسم</h2>
          <p className="mb-10 text-center text-base leading-relaxed text-slate-600 max-w-prose mx-auto">كل ما تحتاج لتطوير مهاراتك ومسارك المهني</p>
          <div className="grid gap-8 sm:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <Card key={f.title} className="rounded-2xl bg-white border border-slate-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200">
                  <CardHeader className="p-0">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-md">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800">{f.title}</CardTitle>
                    <CardDescription className="mt-1 text-base leading-relaxed text-slate-600">{f.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Articles */}
        <section className="mt-20">
          <h2 className="mb-2 text-2xl font-bold text-slate-800 sm:text-3xl">جميع المقالات (16)</h2>
          <p className="mb-10 text-base leading-relaxed text-slate-600">دروس ومقالات حصرية حول التكوين المهني في المغرب</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <Link key={a.href} href={a.href} className="group">
                <Card className="relative h-full rounded-2xl bg-white border border-slate-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200">
                  <CardHeader className="p-0">
                    <div className="flex items-start justify-between gap-3">
                      <CardTitle className="text-base font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">{a.title}</CardTitle>
                      <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm">
                        اقرأ المقال
                      </span>
                    </div>
                    <CardDescription className="mt-2 text-sm leading-relaxed text-slate-600">{a.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-8 py-16 text-center shadow-lg">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">اكتشف أدواتنا المهنية المجانية</h2>
          <p className="mt-3 max-w-prose mx-auto text-base leading-relaxed text-blue-100">أدوات تفاعلية لمساعدتك في مسيرتك المهنية والتعليمية</p>
          <Link
            href="/salary-calculator"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-white px-8 py-3 text-base font-semibold text-blue-700 shadow-md transition-all duration-300 hover:bg-blue-50 hover:shadow-lg"
          >
            اكتشف الأدوات
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </section>
      </div>
    </>
  );
}
