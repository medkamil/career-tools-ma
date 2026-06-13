import type { Metadata } from "next";
import Link from "next/link";
import { Lightbulb, Handshake, UserCheck, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "قسم المشاريع - أفكار مشاريع وبرامج دعم في المغرب | Tawdif Pro",
  description: "دليلك الكامل لريادة الأعمال في المغرب: أفكار مشاريع، برامج دعم (Forsa, INTELAKA)، والمقاول الذاتي.",
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
    <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">قسم المشاريع</h1>
        <p className="mt-3 text-lg text-gray-600">أفكار مشاريع، برامج دعم، وكل ما يخص ريادة الأعمال في المغرب</p>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-3">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <Card key={f.title}>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                  <Icon className="h-5 w-5 text-emerald-600" />
                </div>
                <CardTitle>{f.title}</CardTitle>
                <CardDescription>{f.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </section>

      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">أحدث المقالات</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => {
            const Wrapper = a.href ? ({ children }: { children: React.ReactNode }) => <Link href={a.href!}>{children}</Link> : ({ children }: { children: React.ReactNode }) => <>{children}</>;
            return (
              <Wrapper key={a.title}>
                <Card className="relative h-full transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{a.title}</CardTitle>
                      {a.href ? (
                        <Link href={a.href} className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 hover:bg-emerald-200">
                          اقرأ المقال
                        </Link>
                      ) : (
                        <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">قريباً</span>
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

      <section className="mt-12 text-center">
        <Link href="/salary-calculator" className="inline-flex h-12 items-center gap-2 rounded-lg bg-emerald-600 px-6 text-base font-medium text-white transition-colors hover:bg-emerald-700">
          احسب راتب مشروعك
          <ArrowLeft className="h-5 w-5" />
        </Link>
      </section>
    </div>
  );
}
