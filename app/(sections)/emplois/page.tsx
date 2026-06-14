import type { Metadata } from "next";
import Link from "next/link";
import { FileText, MessageCircle, ShieldCheck, ArrowLeft, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "قسم التوظيف - فرص عمل ونصائح مهنية في المغرب",
  description: "دليلك الكامل للتوظيف في المغرب: نماذج CV بالعربية والفرنسية، نصائح المقابلات، حقوق الأجير في قانون الشغل، وأحدث فرص العمل. كل ما تحتاج لمسيرتك المهنية فمكان واحد.",
};

const features = [
  { title: "نماذج CV", description: "قوالب سيرة ذاتية احترافية بالعربية والفرنسية", icon: FileText, color: "emerald" },
  { title: "نصائح المقابلة", description: "أهم النصائح والإرشادات لاجتياز مقابلات العمل", icon: MessageCircle, color: "emerald" },
  { title: "حقوق الأجير", description: "دليل حقوق والتزامات الأجير في القانون المغربي", icon: ShieldCheck, color: "emerald" },
];

const articles = [
  { title: "أفضل 10 مواقع للبحث عن عمل في المغرب", desc: "مواقع مجانية وحديثة للباحثين عن فرص شغل" },
  { title: "كيفاش تكتب CV احترافي في المغرب 2026", desc: "نصائح ذهبية ونماذج CV بالعربية والفرنسية", href: "/emplois/guides/cv-professionnel-maroc-2026" },
  { title: "نصائح اجتياز مقابلة العمل", desc: "أهم الأسئلة المتوقعة وكيفية الاستعداد" },
  { title: "حقوق الأجير في القانون المغربي", desc: "كل ما يهمك معرفته عن قانون الشغل" },
  { title: "الفرق بين CDD و CDI في المغرب", desc: "شرح مفصل لأنواع العقود وشروطها" },
  { title: "الحد الأدنى للأجور SMIG في المغرب", desc: "آخر التحديثات بخصوص الأجر القانوني" },
];

export default function EmploisPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/80 to-white pb-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-200/30 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-100/20 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              <Briefcase className="h-3.5 w-3.5" />
              التوظيف والمهنة
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                قسم التوظيف
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              فرص عمل، نصائح مهنية، وكل ما يخص التوظيف في المغرب
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section>
          <h2 className="mb-2 text-center text-2xl font-bold text-gray-900">مميزات القسم</h2>
          <p className="mb-8 text-center text-gray-500">كل ما تحتاج لمسيرتك المهنية فمكان واحد</p>
          <div className="grid gap-6 sm:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <Card key={f.title} className="border-0 bg-gradient-to-b from-white to-emerald-50/30 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-sm">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{f.title}</CardTitle>
                    <CardDescription className="text-sm">{f.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">أحدث المقالات</h2>
          <p className="mb-8 text-gray-500">دروس ومقالات حصرية حول التوظيف في المغرب</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => {
              const Wrapper = a.href ? ({ children }: { children: React.ReactNode }) => <Link href={a.href!}>{children}</Link> : ({ children }: { children: React.ReactNode }) => <>{children}</>;
              return (
                <Wrapper key={a.title}>
                  <Card className="relative h-full border border-gray-100 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{a.title}</CardTitle>
                        {a.href ? (
                          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                            اقرأ المقال
                          </span>
                        ) : (
                          <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">قريباً</span>
                        )}
                      </div>
                      <CardDescription>{a.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </Wrapper>
              );
            })}
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-12 text-center shadow-lg">
          <h2 className="text-2xl font-bold text-white">احسب راتبك الصافي الآن</h2>
          <p className="mt-2 text-emerald-100">أداة مجانية لحساب الراتب الصافي من القيمة الإجمالية حسب قانون الشغل المغربي</p>
          <Link
            href="/salary-calculator"
            className="mt-6 inline-flex h-12 items-center gap-2 rounded-xl bg-white px-8 text-base font-medium text-emerald-700 shadow-sm transition-all hover:bg-emerald-50"
          >
            احسب راتبك الآن
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </section>
      </div>
    </>
  );
}
