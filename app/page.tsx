import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Briefcase, GraduationCap, Rocket, Wrench, FileText, Calculator, Printer, CheckCircle, Star, Shield, Receipt } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "منصة التوظيف والتكوين والمشاريع في المغرب",
  description:
    "منصة مغربية شاملة للتوظيف، التكوين المهني، المشاريع الصغيرة، والأدوات التفاعلية المجانية. كل ما تحتاجه في رحلتك المهنية.",
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
];

const stats = [
  { value: "50+", label: "مقال احترافي" },
  { value: "5", label: "أدوات تفاعلية" },
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

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <section className="relative flex w-full flex-col items-center overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white px-4 pb-20 pt-16 text-center sm:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-200/30 via-transparent to-transparent" />
        <div className="relative">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
            <Star className="h-3.5 w-3.5 fill-emerald-500 text-emerald-500" />
            منصة مغربية 100%
          </div>
          <h1 className="mx-auto max-w-4xl text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            منصة التوظيف والتكوين<br />
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">والمشاريع في المغرب</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 sm:text-xl">
            كل ما يحتاجه الأجير، الحرفي، وصاحب المشروع في مكان واحد — أدوات، مقالات، وإرشادات مهنية.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/emplois"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 text-base font-medium text-white shadow-md transition-all hover:from-emerald-700 hover:to-emerald-600 hover:shadow-lg"
            >
              تصفح الأقسام
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Link
              href="/salary-calculator"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 text-base font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md"
            >
              جرب الأدوات
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 border-y border-gray-100 py-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-emerald-600 sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl px-4 py-16 sm:py-20">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">أقسام المنصة</h2>
          <p className="mt-2 text-gray-600">اختر القسم المناسب لاحتياجاتك المهنية</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((s) => {
            const Icon = s.icon;
            return (
              <Link key={s.href} href={s.href} className="group">
                <Card className="h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader>
                    <div className={cn(
                      "mb-3 flex h-12 w-12 items-center justify-center rounded-xl shadow-sm transition-transform group-hover:scale-110",
                      sectionColors[s.title],
                    )}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>{s.title}</CardTitle>
                    <CardDescription>{s.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 transition-all group-hover:gap-2">
                      تصفح القسم
                      <ArrowLeft className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">أدواتنا المجانية</h2>
            <p className="mt-2 text-gray-600">أدوات تفاعلية مصممة خصيصاً للمستخدم المغربي</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link key={tool.href} href={tool.href} className="group">
                  <Card className="h-full text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <CardHeader>
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 shadow-sm transition-transform group-hover:scale-110 group-hover:bg-emerald-200">
                        <Icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <CardTitle className="text-base">{tool.title}</CardTitle>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl px-4 py-16 sm:py-20">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">لماذا تختار منصتنا؟</h2>
          <p className="mt-2 text-gray-600">نوفر لك كل ما تحتاج في رحلتك المهنية</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <Card key={v.title} className="text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-sm">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>{v.title}</CardTitle>
                  <CardDescription>{v.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">ابدأ رحلتك المهنية الآن</h2>
          <p className="mt-4 text-lg text-emerald-100">
            سواء كنت تبحث عن عمل، تريد تعلم حرفة جديدة، أو تخطط لمشروعك الخاص — نحن هنا لمساعدتك في كل خطوة.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/emplois"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-white px-6 text-base font-medium text-emerald-700 shadow-md transition-all hover:bg-emerald-50 hover:shadow-lg"
            >
              استكشف الأقسام
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-emerald-400 px-6 text-base font-medium text-white transition-all hover:bg-emerald-600"
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
