import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Briefcase, GraduationCap, Rocket, Wrench, FileText, Calculator, Printer, CheckCircle, Star, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "منصة التوظيف والتكوين والمشاريع في المغرب | Tawdif Pro",
  description:
    "منصة مغربية شاملة للتوظيف، التكوين المهني، المشاريع الصغيرة، والأدوات التفاعلية المجانية. كل ما تحتاجه في رحلتك المهنية.",
};

const sections = [
  { title: "قسم التوظيف", description: "فرص عمل، نماذج CV، نصائح المقابلات، وحقوق الأجير", icon: Briefcase, href: "/emplois" },
  { title: "قسم التكوين", description: "تكوينات OFPPT، دورات مجانية، والمهن المطلوبة 2026", icon: GraduationCap, href: "/formations" },
  { title: "قسم المشاريع", description: "أفكار مشاريع، برامج Forsa و INTELAKA، المقاول الذاتي", icon: Rocket, href: "/projets" },
  { title: "الأدوات التفاعلية", description: "حاسبة الراتب، مولد CV، طباعة الشيكات", icon: Wrench, href: "/salary-calculator" },
];

const tools = [
  { title: "مولد السيرة الذاتية", description: "أنشئ سيرة ذاتية احترافية في دقائق", icon: FileText, href: "/cv-generator" },
  { title: "حاسبة الراتب", description: "احسب صافي راتبك بعد الخصومات والضرائب", icon: Calculator, href: "/salary-calculator" },
  { title: "طباعة الشيك", description: "اطبع شيكات بنكية احترافية بسهولة", icon: Printer, href: "/cheque-printer" },
  { title: "حاسبة التعويضات", description: "احسب تعويض الفصل والعطلة والإخطار", icon: Calculator, href: "/compensation-calculator" },
];

const values = [
  { title: "مجاني 100%", description: "كل الأدوات والمحتوى مجاني بالكامل", icon: CheckCircle },
  { title: "مصمم للمغرب", description: "محتوى مخصص للسوق المغربي والخليجي", icon: Star },
  { title: "أدوات احترافية", description: "حاسبات دقيقة ومولدات PDF احترافية", icon: Shield },
];

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <section className="flex w-full flex-col items-center px-4 py-16 text-center sm:py-24">
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          منصة التوظيف والتكوين والمشاريع في المغرب
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-600">
          كل ما يحتاجه الأجير، الحرفي، وصاحب المشروع في مكان واحد
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/emplois"
            className="inline-flex h-12 items-center gap-2 rounded-lg bg-emerald-600 px-6 text-base font-medium text-white transition-colors hover:bg-emerald-700"
          >
            تصفح فرص العمل
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <Link
            href="/salary-calculator"
            className="inline-flex h-12 items-center gap-2 rounded-lg border border-gray-300 px-6 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            اكتشف الأدوات
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="w-full max-w-7xl px-4 pb-16">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">أقسام المنصة</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((s) => {
            const Icon = s.icon;
            return (
              <Link key={s.href} href={s.href}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                      <Icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle>{s.title}</CardTitle>
                    <CardDescription>{s.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-sm font-medium text-emerald-600">تصفح القسم</span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="w-full bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">أدواتنا المجانية</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link key={tool.href} href={tool.href}>
                  <Card className="h-full transition-shadow hover:shadow-md">
                    <CardHeader>
                      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                        <Icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <CardTitle>{tool.title}</CardTitle>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-sm font-medium text-emerald-600">استخدم الأداة</span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl px-4 py-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">لماذا تختار منصتنا؟</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <Card key={v.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                    <Icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle>{v.title}</CardTitle>
                  <CardDescription>{v.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="w-full bg-emerald-700 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">ابدأ رحلتك المهنية</h2>
          <p className="mt-4 text-lg text-emerald-100">
            سواء كنت تبحث عن عمل، تريد تعلم حرفة جديدة، أو تخطط لمشروعك الخاص - نحن هنا لمساعدتك
          </p>
          <Link
            href="/emplois"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-white px-6 text-base font-medium text-emerald-700 transition-colors hover:bg-emerald-50"
          >
            استكشف الأقسام
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
