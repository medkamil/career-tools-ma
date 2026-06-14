import type { Metadata } from "next";
import Link from "next/link";
import { Lightbulb, Handshake, UserCheck, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "قسم المشاريع - دعم وتمويل ريادة الأعمال في المغرب",
  description: "دليلك الكامل لريادة الأعمال في المغرب: أفكار مشاريع صغيرة مربحة بميزانية محدودة، برامج دعم Forsa و INTELAKA، التمويل البنكي، والمقاول الذاتي Auto-entrepreneur. ابدأ مشروعك الآن.",
};

const features = [
  { title: "أفكار بميزانية صغيرة", description: "أفكار مشاريع مربحة برأس مال محدود في المغرب", icon: Lightbulb },
  { title: "برامج الدعم", description: "كل برامج دعم المشاريع: Forsa، INTELAKA، وغيرها", icon: Handshake },
  { title: "المقاول الذاتي", description: "دليل المقاول الذاتي: التسجيل، التصريح، والضرائب", icon: UserCheck },
];

const articles = [
  { title: "برنامج Forsa 2026 (فرصة) - دليل كامل للتقديم والشروط", desc: "شروط وطريقة التسجيل في برنامج فرصة لدعم المقاولات", href: "/projets/guides/programme-forsa-2026" },
  { title: "برنامج INTELAKA (انطلاقة) - دليل كامل 2026", desc: "تفاصيل برنامج انطلاقة لدعم المشاريع الصغيرة", href: "/projets/guides/programme-intelaka" },
  { title: "كيف تصبح مقاولاً ذاتياً في المغرب 2026 (دليل كامل)", desc: "خطوات التسجيل في نظام المقاول الذاتي بالمغرب", href: "/projets/guides/auto-entrepreneur-maroc" },
  { title: "10 أفكار مشاريع صغيرة مربحة بميزانية أقل من 30,000 درهم", desc: "أفكار مشاريع صغيرة مربحة برأس مال محدود", href: "/projets/guides/idees-projets-petit-budget-maroc" },
  { title: "الدراسة السوقية للمشروع في المغرب 2026 (دليل كامل)", desc: "كيف تعد دراسة جدوى لمشروعك خطوة بخطوة", href: "/projets/guides/etude-marche-projet" },
  { title: "مشروع التجارة الإلكترونية (E-commerce) في المغرب 2026", desc: "دليل شامل لبدء متجر إلكتروني في المغرب", href: "/projets/guides/projet-ecommerce-maroc-guide" },
  { title: "مشروع مطعم أو كانطينة في المغرب: دراسة جدوى وتكاليف 2026", desc: "كل ما تحتاج لبدء مشروع مطعم ناجح", href: "/projets/guides/projet-restaurant-cantine-maroc" },
  { title: "التمويل البنكي للمشاريع في المغرب 2026 (دليل كامل)", desc: "شروط القروض والبنوك المغربية ونسبة القبول", href: "/projets/guides/financement-bancaire-projet" },
  { title: "مشروع شركة التنظيف في المغرب: خطوات وتكاليف 2026", desc: "التكاليف والتجهيزات والتراخيص والأرباح المتوقعة", href: "/projets/guides/projet-service-nettoyage-maroc" },
  { title: "مشروع نقل البضائع في المغرب: شروط وتراخيص 2026", desc: "أنواع المركبات وتكاليف التأسيس وأرباح النقل", href: "/projets/guides/projet-transport-marchandises-maroc" },
  { title: "مشروع الزراعة في البيوت المغطاة (Serre) في المغرب 2026", desc: "أنواع البيوت والتكاليف والمحاصيل الأكثر ربحاً", href: "/projets/guides/projet-agriculture-serre-maroc" },
  { title: "مشروع حضانة الأطفال (Crèche) في المغرب: دليل كامل 2026", desc: "الشروط القانونية والتراخيص والتجهيزات والتكاليف", href: "/projets/guides/projet-garderie-enfants-maroc" },
  { title: "مشروع قاعة الرياضة (Salle de Sport) في المغرب 2026", desc: "التكاليف والمعدات والتراخيص والأرباح المتوقعة", href: "/projets/guides/projet-salle-sport-fitness-maroc" },
  { title: "مشروع محل الملابس في المغرب: دليل شامل 2026", desc: "التكاليف واختيار الموقع وأنواع المحلات والأرباح", href: "/projets/guides/projet-boutique-vetements-maroc" },
  { title: "مشروع التصوير الفوتوغرافي والفيديو في المغرب 2026", desc: "التجهيزات والتكاليف والتراخيص والأرباح المتوقعة", href: "/projets/guides/projet-photographie-video-maroc" },
];

const sectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "قسم المشاريع - أفكار مشاريع وبرامج دعم في المغرب",
  description: "دليلك الكامل لريادة الأعمال في المغرب: أفكار مشاريع صغيرة مربحة، برامج دعم Forsa و INTELAKA، التمويل البنكي، والمقاول الذاتي.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://tawdifpro.ma" },
      { "@type": "ListItem", position: 2, name: "قسم المشاريع", item: "https://tawdifpro.ma/projets" },
    ],
  },
};

export default function ProjetsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sectionSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/80 to-white pb-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200/30 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-100/20 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-700 shadow-sm">
              <Lightbulb className="h-4 w-4" />
              ريادة الأعمال
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-800 sm:text-5xl">
              <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                قسم المشاريع
              </span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              أفكار مشاريع، برامج دعم، وكل ما يخص ريادة الأعمال في المغرب
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Features */}
        <section>
          <h2 className="mb-2 text-center text-2xl font-bold text-slate-800 sm:text-3xl">مميزات القسم</h2>
          <p className="mb-10 text-center text-base leading-relaxed text-slate-600 max-w-prose mx-auto">كل ما تحتاج لبدء مشروعك وتحقيق نجاحك</p>
          <div className="grid gap-8 sm:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <Card key={f.title} className="rounded-2xl bg-white border border-slate-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-amber-200">
                  <CardHeader className="p-0">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 shadow-md">
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
          <h2 className="mb-2 text-2xl font-bold text-slate-800 sm:text-3xl">جميع المقالات (15)</h2>
          <p className="mb-10 text-base leading-relaxed text-slate-600">دروس ومقالات حصرية حول ريادة الأعمال والمشاريع في المغرب</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <Link key={a.href} href={a.href} className="group">
                <Card className="relative h-full rounded-2xl bg-white border border-slate-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-amber-200">
                  <CardHeader className="p-0">
                    <div className="flex items-start justify-between gap-3">
                      <CardTitle className="text-base font-bold text-slate-800 group-hover:text-amber-700 transition-colors duration-300">{a.title}</CardTitle>
                      <span className="shrink-0 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 shadow-sm">
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
        <section className="mt-20 rounded-2xl bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500 px-8 py-16 text-center shadow-lg">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">احسب تكاليف مشروعك</h2>
          <p className="mt-3 max-w-prose mx-auto text-base leading-relaxed text-amber-100">أداة مجانية لحساب التعويضات والمستحقات المهنية</p>
          <Link
            href="/compensation-calculator"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-white px-8 py-3 text-base font-semibold text-amber-700 shadow-md transition-all duration-300 hover:bg-amber-50 hover:shadow-lg"
          >
            احسب الآن
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </section>
      </div>
    </>
  );
}
