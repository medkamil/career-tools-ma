import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Briefcase, GraduationCap, Rocket, Wrench, FileText, Calculator, Printer } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "منصة الأدوات المهنية الشاملة - توظيف، تكوين، مشاريع، وأدوات تفاعلية | Tawdif Pro",
  description:
    "منصة مغربية متكاملة للتوظيف والتكوين المهني والمشاريع والأدوات التفاعلية. مولد السيرة الذاتية، حاسبة الراتب، طباعة الشيكات.",
};

const sections = [
  { title: "قسم التوظيف", description: "فرص عمل، نماذج CV، ونصائح مهنية", icon: Briefcase, href: "/emplois" },
  { title: "قسم التكوين", description: "دورات تكوينية وشهادات مهنية معتمدة", icon: GraduationCap, href: "/formations" },
  { title: "قسم المشاريع", description: "أفكار مشاريع وبرامج دعم المقاولات", icon: Rocket, href: "/projets" },
  { title: "الأدوات التفاعلية", description: "حاسبة الراتب، مولد الـ CV، وطباعة الشيك", icon: Wrench, href: "/salary-calculator" },
];

const tools = [
  { title: "مولد السيرة الذاتية", description: "أنشئ سيرة ذاتية احترافية في دقائق", icon: FileText, href: "/cv-generator" },
  { title: "حاسبة الراتب", description: "احسب صافي راتبك بعد الخصومات والضرائب", icon: Calculator, href: "/salary-calculator" },
  { title: "طباعة الشيك", description: "اطبع شيكات بنكية احترافية بسهولة", icon: Printer, href: "/cheque-printer" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <section className="flex w-full flex-col items-center px-4 py-16 text-center sm:py-24">
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          منصة التوظيف والتكوين المهني والأدوات التفاعلية في المغرب
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-600">
          {siteConfig.description}
        </p>
        <Link
          href="/emplois"
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-emerald-600 px-6 text-base font-medium text-white transition-colors hover:bg-emerald-700"
        >
          تصفح الأقسام
          <ArrowLeft className="h-5 w-5" />
        </Link>
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

      <section className="w-full max-w-7xl px-4 pb-20">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">أدواتنا المهنية</h2>
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
      </section>
    </div>
  );
}
