import type { Metadata } from "next";
import Link from "next/link";
import { FileText, MessageCircle, ShieldCheck, ArrowLeft, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "قسم التوظيف - نصائح مهنية وحقوق الأجير في المغرب",
  description: "دليلك الكامل للتوظيف في المغرب: نماذج CV بالعربية والفرنسية جاهزة للتحميل، نصائح اجتياز مقابلات العمل، حقوق الأجير في قانون الشغل، SMIG، CDD و CDI، و 18 دليل احترافي مجاني.",
};

const features = [
  { title: "نماذج CV", description: "قوالب سيرة ذاتية احترافية بالعربية والفرنسية", icon: FileText, color: "emerald" },
  { title: "نصائح المقابلة", description: "أهم النصائح والإرشادات لاجتياز مقابلات العمل", icon: MessageCircle, color: "emerald" },
  { title: "حقوق الأجير", description: "دليل حقوق والتزامنات الأجير في القانون المغربي", icon: ShieldCheck, color: "emerald" },
];

const articles = [
  { title: "أفضل 10 مواقع للبحث عن عمل في المغرب 2026 (مجانية وحديثة)", desc: "مواقع مجانية وحديثة للباحثين عن فرص شغل", href: "/emplois/guides/meilleurs-sites-emploi-maroc" },
  { title: "كيفاش تكتب CV احترافي في المغرب 2026 (نماذج + نصائح ذهبية)", desc: "نصائح ذهبية ونماذج CV بالعربية والفرنسية", href: "/emplois/guides/cv-professionnel-maroc-2026" },
  { title: "أفضل نموذج CV المغرب 2026 مع أمثلة جاهزة للتحميل", desc: "نماذج CV جاهزة للتعديل والتحميل", href: "/emplois/guides/exemple-cv-maroc-telecharger" },
  { title: "نموذج رسالة الدافع (Lettre de Motivation) في المغرب 2026", desc: "أمثلة ونماذج رسالة تحفيز احترافية", href: "/emplois/guides/lettre-motivation-maroc-exemple" },
  { title: "نصائح اجتياز مقابلة العمل في المغرب 2026 (دليلك الكامل)", desc: "أهم النصائح لاجتياز مقابلات العمل", href: "/emplois/guides/conseils-entretien-embauche" },
  { title: "أفضل أسئلة وإجابات مقابلة العمل في المغرب 2026", desc: "الأسئلة المتوقعة وكيفية الاستعداد", href: "/emplois/guides/questions-entretien-embauche-reponses" },
  { title: "حقوق الأجير في القانون المغربي 2026 (دليل شامل)", desc: "كل ما يهمك معرفته عن قانون الشغل", href: "/emplois/guides/droits-salarie-maroc" },
  { title: "تعويض نهاية الخدمة (الطرد) في المغرب 2026: طريقة الحساب الكاملة", desc: "كيف تحسب تعويض نهاية الخدمة", href: "/emplois/guides/indemnite-licenciement-maroc" },
  { title: "طريقة حساب الإجازة السنوية في قانون الشغل المغربي 2026", desc: "كيفية حساب أيام العطلة السنوية", href: "/emplois/guides/calcul-conge-annuel-maroc" },
  { title: "المغادرة الطوعية Depart Volontaire في المغرب 2026", desc: "حقوقك وتعويضاتك في المغادرة الطوعية", href: "/emplois/guides/depart-volontaire-maroc-indemnite" },
  { title: "الفرق بين CDD و CDI في المغرب 2026 (دليل شامل)", desc: "شرح مفصل لأنواع العقود وشروطها", href: "/emplois/guides/cdd-cdi-maroc" },
  { title: "أنواع عقود العمل في المغرب: CDD و CDI والفرق بينهم بالتفصيل", desc: "أنواع عقود الشغل في القانون المغربي", href: "/emplois/guides/types-contrats-travail-maroc" },
  { title: "الحد الأدنى للأجور SMIG في المغرب 2026 (دليل كامل)", desc: "آخر التحديثات بخصوص الأجر القانوني", href: "/emplois/guides/smig-salaire-minimum-maroc" },
  { title: "متوسط الرواتب في المغرب حسب القطاع والمهنة 2026", desc: "إحصائيات الرواتب في مختلف القطاعات", href: "/emplois/guides/salaire-moyen-maroc-par-secteur" },
  { title: "التأمين على البطالة في المغرب 2026", desc: "الشروط وكيفية الاستفادة من التأمين", href: "/emplois/guides/assurance-chomage-maroc" },
  { title: "دليل الحصول على وظيفة في القطاع العام بالمغرب 2026", desc: "خطوات التوظيف في الوظيفة العمومية", href: "/emplois/guides/recrutement-fonction-publique-maroc-2026" },
  { title: "دليل التدريب المهني والمرقمن في المغرب 2026", desc: "الشروط والحقوق في التدريب المهني", href: "/emplois/guides/stage-conventionne-maroc-guide" },
  { title: "دليل العمل عن بعد في المغرب 2026", desc: "العقود والحقوق والنصائح للشغل عن بعد", href: "/emplois/guides/travail-distance-maroc" },
];

const sectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "قسم التوظيف - فرص عمل ونصائح مهنية في المغرب",
  description: "دليلك الكامل للتوظيف في المغرب: نماذج CV بالعربية والفرنسية، نصائح المقابلات، حقوق الأجير في قانون الشغل، وأحدث فرص العمل.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://tawdifpro.ma" },
      { "@type": "ListItem", position: 2, name: "قسم التوظيف", item: "https://tawdifpro.ma/emplois" },
    ],
  },
};

export default function EmploisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sectionSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/80 to-white pb-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-200/30 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-100/20 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700 shadow-sm">
              <Briefcase className="h-4 w-4" />
              التوظيف والمهنة
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-800 sm:text-5xl">
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                قسم التوظيف
              </span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              فرص عمل، نصائح مهنية، وكل ما يخص التوظيف في المغرب
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Features */}
        <section>
          <h2 className="mb-2 text-center text-2xl font-bold text-slate-800 sm:text-3xl">مميزات القسم</h2>
          <p className="mb-10 text-center text-base leading-relaxed text-slate-600 max-w-prose mx-auto">كل ما تحتاج لمسيرتك المهنية فمكان واحد</p>
          <div className="grid gap-8 sm:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <Card key={f.title} className="rounded-2xl bg-white border border-slate-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-emerald-200">
                  <CardHeader className="p-0">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-md">
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
          <h2 className="mb-2 text-2xl font-bold text-slate-800 sm:text-3xl">جميع المقالات (18)</h2>
          <p className="mb-10 text-base leading-relaxed text-slate-600">دروس ومقالات حصرية حول التوظيف في المغرب</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <Link key={a.href} href={a.href} className="group">
                <Card className="relative h-full rounded-2xl bg-white border border-slate-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-emerald-200">
                  <CardHeader className="p-0">
                    <div className="flex items-start justify-between gap-3">
                      <CardTitle className="text-base font-bold text-slate-800 group-hover:text-emerald-700 transition-colors duration-300">{a.title}</CardTitle>
                      <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm">
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
        <section className="mt-20 rounded-2xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500 px-8 py-16 text-center shadow-lg">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">احسب راتبك الصافي الآن</h2>
          <p className="mt-3 max-w-prose mx-auto text-base leading-relaxed text-emerald-100">أداة مجانية لحساب الراتب الصافي من القيمة الإجمالية حسب قانون الشغل المغربي</p>
          <Link
            href="/salary-calculator"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-white px-8 py-3 text-base font-semibold text-emerald-700 shadow-md transition-all duration-300 hover:bg-emerald-50 hover:shadow-lg"
          >
            احسب راتبك الآن
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </section>
      </div>
    </>
  );
}
