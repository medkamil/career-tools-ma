import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Monitor, TrendingUp, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "قسم التكوين - دورات تكوينية وشهادات مهنية في المغرب",
  description: "دليلك الكامل للتكوين المهني في المغرب: التسجيل في OFPPT، تكوين مجاني عن بعد بشهادات معتمدة، منح التكوين، وأفضل المهن المطلوبة في 2026.",
};

const features = [
  { title: "تكوينات OFPPT", description: "جميع تخصصات ومعاهد مكتب التكوين المهني", icon: GraduationCap },
  { title: "تكوينات مجانية", description: "دورات أونلاين مجانية بشهادات معتمدة", icon: Monitor },
  { title: "المهن المطلوبة 2026", description: "أحدث المهن والاختصاصات المطلوبة في سوق العمل", icon: TrendingUp },
];

const articles = [
  { title: "التسجيل في OFPPT 2026", desc: "خطوات ومواعيد وشروط التسجيل في التكوين المهني" },
  { title: "أفضل 10 تكوينات مهنية مطلوبة في المغرب 2026", desc: "اختر التخصص المناسب مع الرواتب وفرص الشغل", href: "/formations/guides/meilleures-formations-maroc-2026" },
  { title: "تكوين مجاني عن بعد", desc: "منصات مغربية وعالمية تقدم تكويناً مجانياً بشهادات" },
  { title: "منح التكوين المهني", desc: "برامج المنح المتاحة للتكوين المهني في المغرب" },
  { title: "شهادات مهنية معتمدة", desc: "أهم الشهادات المهنية التي تزيد من فرصك في العمل" },
  { title: "التدريب المستمر", desc: "برامج التدريب المستمر للموظفين في القطاعين العام والخاص" },
];

export default function FormationsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 to-white pb-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-200/30 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              <GraduationCap className="h-3.5 w-3.5" />
              التكوين والتعليم
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                قسم التكوين
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              دورات تكوينية، شهادات مهنية، وكل ما يخص التكوين في المغرب
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section>
          <h2 className="mb-2 text-center text-2xl font-bold text-gray-900">مميزات القسم</h2>
          <p className="mb-8 text-center text-gray-500">كل ما تحتاج لتطوير مهاراتك ومسارك المهني</p>
          <div className="grid gap-6 sm:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <Card key={f.title} className="border-0 bg-gradient-to-b from-white to-blue-50/30 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm">
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
          <p className="mb-8 text-gray-500">دروس ومقالات حصرية حول التكوين المهني في المغرب</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => {
              const Wrapper = a.href ? ({ children }: { children: React.ReactNode }) => <Link href={a.href!}>{children}</Link> : ({ children }: { children: React.ReactNode }) => <>{children}</>;
              return (
                <Wrapper key={a.title}>
                  <Card className="relative h-full border border-gray-100 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{a.title}</CardTitle>
                        {a.href ? (
                          <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">
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

        <section className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-12 text-center shadow-lg">
          <h2 className="text-2xl font-bold text-white">اكتشف أدواتنا المهنية المجانية</h2>
          <p className="mt-2 text-blue-100">أدوات تفاعلية لمساعدتك في مسيرتك المهنية والتعليمية</p>
          <Link
            href="/salary-calculator"
            className="mt-6 inline-flex h-12 items-center gap-2 rounded-xl bg-white px-8 text-base font-medium text-blue-700 shadow-sm transition-all hover:bg-blue-50"
          >
            اكتشف الأدوات
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </section>
      </div>
    </>
  );
}
