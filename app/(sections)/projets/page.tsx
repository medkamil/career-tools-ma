import type { Metadata } from "next";
import Link from "next/link";
import { Lightbulb, Handshake, UserCheck, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "قسم المشاريع - أفكار مشاريع وبرامج دعم في المغرب",
  description: "دليلك الكامل لريادة الأعمال في المغرب: أفكار مشاريع صغيرة مربحة، برامج دعم Forsa و INTELAKA، التمويل البنكي، والمقاول الذاتي. ابدأ مشروعك الآن.",
};

const features = [
  { title: "أفكار بميزانية صغيرة", description: "أفكار مشاريع مربحة برأس مال محدود في المغرب", icon: Lightbulb },
  { title: "برامج الدعم", description: "كل برامج دعم المشاريع: Forsa، INTELAKA، وغيرها", icon: Handshake },
  { title: "المقاول الذاتي", description: "دليل المقاول الذاتي: التسجيل، التصريح، والضرائب", icon: UserCheck },
];

const articles = [
  { title: "برنامج Forsa 2026", desc: "شروط وطريقة التسجيل في برنامج فرصة لدعم المقاولات" },
  { title: "برنامج INTELAKA", desc: "تفاصيل برنامج انطلاقة لدعم المشاريع الصغيرة" },
  { title: "كيف تصبح مقاولاً ذاتياً", desc: "خطوات التسجيل في نظام المقاول الذاتي بالمغرب" },
  { title: "10 أفكار مشاريع صغيرة مربحة في المغرب", desc: "بميزانية أقل من 30,000 درهم مع برامج الدعم", href: "/projets/guides/idees-projets-petit-budget-maroc" },
  { title: "التمويل البنكي للمشاريع", desc: "كيف تحصل على تمويل لمشروعك من البنوك المغربية" },
  { title: "الدراسة السوقية للمشروع", desc: "كيف تعد دراسة جدوى لمشروعك خطوة بخطوة" },
];

export default function ProjetsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/80 to-white pb-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200/30 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-100/20 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
              <Lightbulb className="h-3.5 w-3.5" />
              ريادة الأعمال
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                قسم المشاريع
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              أفكار مشاريع، برامج دعم، وكل ما يخص ريادة الأعمال في المغرب
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section>
          <h2 className="mb-2 text-center text-2xl font-bold text-gray-900">مميزات القسم</h2>
          <p className="mb-8 text-center text-gray-500">كل ما تحتاج لبدء مشروعك وتحقيق نجاحك</p>
          <div className="grid gap-6 sm:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <Card key={f.title} className="border-0 bg-gradient-to-b from-white to-amber-50/30 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 shadow-sm">
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
          <p className="mb-8 text-gray-500">دروس ومقالات حصرية حول ريادة الأعمال والمشاريع في المغرب</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => {
              const Wrapper = a.href ? ({ children }: { children: React.ReactNode }) => <Link href={a.href!}>{children}</Link> : ({ children }: { children: React.ReactNode }) => <>{children}</>;
              return (
                <Wrapper key={a.title}>
                  <Card className="relative h-full border border-gray-100 shadow-sm transition-all hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-md">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{a.title}</CardTitle>
                        {a.href ? (
                          <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                            اقرأ المقال
                          </span>
                        ) : (
                          <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500">قريباً</span>
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

        <section className="mt-16 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-500 px-8 py-12 text-center shadow-lg">
          <h2 className="text-2xl font-bold text-white">احسب تكاليف مشروعك</h2>
          <p className="mt-2 text-amber-100">أداة مجانية لحساب التعويضات والمستحقات المهنية</p>
          <Link
            href="/compensation-calculator"
            className="mt-6 inline-flex h-12 items-center gap-2 rounded-xl bg-white px-8 text-base font-medium text-amber-700 shadow-sm transition-all hover:bg-amber-50"
          >
            احسب الآن
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </section>
      </div>
    </>
  );
}
