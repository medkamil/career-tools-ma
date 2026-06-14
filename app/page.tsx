import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Briefcase, GraduationCap, Rocket, Wrench, FileText, Calculator, Printer, CheckCircle, Star, Shield, Receipt } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "منصة التوظيف والتكوين والمشاريع في المغرب",
  description:
    "منصة مغربية شاملة للتوظيف والتكوين المهني والمشاريع الصغيرة: حاسبة الراتب، مولد السيرة الذاتية، أدوات CNSS والمعاش التقاعدي، و 49+ دليل احترافي بالدارجة والفرنسية. كل ما تحتاجه في رحلتك المهنية فمكان واحد.",
};

const sections = [
  { title: "قسم التوظيف", description: "فرص عمل، نماذج CV، نصائح المقابلات، وحقوق الأجير", icon: Briefcase, href: "/emplois" },
  { title: "قسم التكوين", description: "تكوينات OFPPT، دورات مجانية، والمهن المطلوبة 2026", icon: GraduationCap, href: "/formations" },
  { title: "قسم المشاريع", description: "أفكار مشاريع، برامج Forsa و INTELAKA، المقاول الذاتي", icon: Rocket, href: "/projets" },
  { title: "الأدوات التفاعلية", description: "حاسبة الراتب، مولد CV، طباعة الشيكات، وعروض الأسعار", icon: Wrench, href: "/salary-calculator" },
];

const tools = [
  { title: "حاسبة الراتب", description: "احسب صافي راتبك بعد الخصومات والضرائب", icon: Calculator, href: "/salary-calculator" },
  { title: "حاسبة التعويضات", description: "احسب تعويض الفصل والعطلة والإخطار", icon: Calculator, href: "/compensation-calculator" },
  { title: "مولد السيرة الذاتية", description: "أنشئ سيرة ذاتية احترافية في دقائق", icon: FileText, href: "/cv-generator" },
  { title: "عرض السعر (Devis)", description: "أنشئ عرض سعر احترافي مع TVA وطباعة PDF", icon: Receipt, href: "/devis-generator" },
  { title: "طباعة الشيك", description: "اطبع شيكات بنكية احترافية بسهولة", icon: Printer, href: "/cheque-printer" },
  { title: "مولد الفاتورة", description: "أنشئ فاتورة احترافية مع TVA و ICE و RC", icon: Receipt, href: "/facture-generator" },
  { title: "حاسبة المعاش", description: "احسب معاشك من CNSS حسب القانون المغربي", icon: Calculator, href: "/pension-calculator" },
];

const stats = [
  { value: "49+", label: "دليل احترافي" },
  { value: "7", label: "أدوات تفاعلية" },
  { value: "100%", label: "مجاني" },
];

const values = [
  { title: "مجاني 100%", description: "كل الأدوات والمحتوى مجاني بالكامل بدون أي اشتراكات", icon: CheckCircle },
  { title: "مصمم للمغرب", description: "محتوى وأدوات مخصصة للسوق المغربي وفقاً للقوانين المحلية", icon: Star },
  { title: "أدوات احترافية", description: "حاسبات دقيقة ومولدات PDF مطابقة للمعايير القانونية", icon: Shield },
];

const sectionColors: Record<string, string> = {
  "قسم التوظيف": "bg-gradient-to-br from-emerald-500 to-emerald-600",
  "قسم التكوين": "bg-gradient-to-br from-blue-500 to-blue-600",
  "قسم المشاريع": "bg-gradient-to-br from-amber-500 to-amber-600",
  "الأدوات التفاعلية": "bg-gradient-to-br from-violet-500 to-violet-600",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Tawdif Pro",
  url: "https://tawdifpro.ma",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://tawdifpro.ma/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://tawdifpro.ma" },
  ],
};

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative flex w-full flex-col items-center overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white px-4 pb-20 pt-20 text-center sm:pt-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-200/30 via-transparent to-transparent" />
        <div className="relative max-w-5xl">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
            <Star className="h-4 w-4 fill-emerald-500 text-emerald-500" />
            منصة مغربية 100%
          </div>
          <h1 className="font-bold leading-tight tracking-tight text-slate-800 mx-auto max-w-4xl text-3xl sm:text-5xl lg:text-6xl">
            منصة التوظيف والتكوين<br />
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">والمشاريع في المغرب</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            كل ما يحتاجه الأجير، الحرفي، وصاحب المشروع في مكان واحد — أدوات، مقالات، وإرشادات مهنية.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/emplois"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:from-emerald-700 hover:to-emerald-600 hover:shadow-lg"
            >
              تصفح الأقسام
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Link
              href="/salary-calculator"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-3 text-base font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md"
            >
              جرب الأدوات
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-10 rounded-2xl border border-slate-100 bg-white/60 px-8 py-8 shadow-sm backdrop-blur-sm">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-emerald-600 sm:text-4xl">{stat.value}</p>
                <p className="mt-1.5 text-sm font-medium text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="w-full bg-slate-50/50 px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">أقسام المنصة</h2>
            <p className="mt-3 max-w-prose mx-auto text-lg leading-relaxed text-slate-600">اختر القسم المناسب لاحتياجاتك المهنية</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <Link key={s.href} href={s.href} className="group">
                  <Card className="h-full overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-emerald-200">
                    <CardHeader className="p-0">
                      <div className={cn(
                        "mb-4 flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md",
                        sectionColors[s.title],
                      )}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-800">{s.title}</CardTitle>
                      <CardDescription className="mt-1 text-base leading-relaxed text-slate-600">{s.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 pt-4">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-all duration-300 group-hover:gap-3">
                        تصفح القسم
                        <ArrowLeft className="h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="w-full px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">أدواتنا المجانية</h2>
            <p className="mt-3 max-w-prose mx-auto text-lg leading-relaxed text-slate-600">أدوات تفاعلية مصممة خصيصاً للمستخدم المغربي</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link key={tool.href} href={tool.href} className="group">
                  <Card className="h-full rounded-2xl bg-white border border-slate-100 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-emerald-200">
                    <CardHeader className="p-0">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-100 group-hover:shadow-md">
                        <Icon className="h-7 w-7 text-emerald-600" />
                      </div>
                      <CardTitle className="text-base font-bold text-slate-800">{tool.title}</CardTitle>
                      <CardDescription className="mt-1 text-sm leading-relaxed text-slate-600">{tool.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full bg-slate-50/50 px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">لماذا تختار منصتنا؟</h2>
            <p className="mt-3 max-w-prose mx-auto text-lg leading-relaxed text-slate-600">نوفر لك كل ما تحتاج في رحلتك المهنية</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <Card key={v.title} className="rounded-2xl bg-white border border-slate-100 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-emerald-200">
                  <CardHeader className="p-0">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-md">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800">{v.title}</CardTitle>
                    <CardDescription className="mt-2 text-base leading-relaxed text-slate-600">{v.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500 py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">ابدأ رحلتك المهنية الآن</h2>
          <p className="mt-4 text-lg leading-relaxed text-emerald-100">
            سواء كنت تبحث عن عمل، تريد تعلم حرفة جديدة، أو تخطط لمشروعك الخاص — نحن هنا لمساعدتك في كل خطوة.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/emplois"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-8 py-3 text-base font-semibold text-emerald-700 shadow-md transition-all duration-300 hover:bg-emerald-50 hover:shadow-lg"
            >
              استكشف الأقسام
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-emerald-400 px-8 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-emerald-600"
            >
              اتصل بنا
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
