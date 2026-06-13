import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Monitor, TrendingUp, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "قسم التكوين - دورات تكوينية وشهادات مهنية في المغرب | Tawdif Pro",
  description: "دليلك الكامل للتكوين المهني في المغرب: OFPPT، تكوين مجاني، والمهن المطلوبة في 2026.",
};

const features = [
  { title: "تكوينات OFPPT", description: "جميع تخصصات ومعاهد مكتب التكوين المهني", icon: GraduationCap },
  { title: "تكوينات مجانية", description: "دورات أونلاين مجانية بشهادات معتمدة", icon: Monitor },
  { title: "المهن المطلوبة 2026", description: "أحدث المهن والاختصاصات المطلوبة في سوق العمل", icon: TrendingUp },
];

const articles = [
  { title: "التسجيل في OFPPT 2026", desc: "خطوات ومواعيد وشروط التسجيل في التكوين المهني" },
  { title: "أفضل التخصصات المطلوبة", desc: "تخصصات المستقبل التي تطلبها سوق العمل المغربي" },
  { title: "تكوين مجاني عن بعد", desc: "منصات مغربية وعالمية تقدم تكويناً مجانياً بشهادات" },
  { title: "منح التكوين المهني", desc: "برامج المنح المتاحة للتكوين المهني في المغرب" },
  { title: "شهادات مهنية معتمدة", desc: "أهم الشهادات المهنية التي تزيد من فرصك في العمل" },
  { title: "التدريب المستمر", desc: "برامج التدريب المستمر للموظفين في القطاعين العام والخاص" },
];

export default function FormationsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">قسم التكوين</h1>
        <p className="mt-3 text-lg text-gray-600">دورات تكوينية، شهادات مهنية، وكل ما يخص التكوين في المغرب</p>
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
          {articles.map((a) => (
            <Card key={a.title} className="relative">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{a.title}</CardTitle>
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">قريباً</span>
                </div>
                <CardDescription>{a.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12 text-center">
        <Link href="/salary-calculator" className="inline-flex h-12 items-center gap-2 rounded-lg bg-emerald-600 px-6 text-base font-medium text-white transition-colors hover:bg-emerald-700">
          اكتشف أدواتنا المهنية
          <ArrowLeft className="h-5 w-5" />
        </Link>
      </section>
    </div>
  );
}
