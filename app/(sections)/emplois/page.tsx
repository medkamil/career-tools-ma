import type { Metadata } from "next";
import Link from "next/link";
import { FileText, MessageCircle, ShieldCheck, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "قسم التوظيف - فرص عمل ونصائح مهنية في المغرب",
  description: "دليلك الكامل للتوظيف في المغرب: نماذج CV بالعربية والفرنسية، نصائح المقابلات، حقوق الأجير في قانون الشغل، وأحدث فرص العمل. كل ما تحتاج لمسيرتك المهنية فمكان واحد.",
};

const features = [
  { title: "نماذج CV", description: "قوالب سيرة ذاتية احترافية بالعربية والفرنسية", icon: FileText },
  { title: "نصائح المقابلة", description: "أهم النصائح والإرشادات لاجتياز مقابلات العمل", icon: MessageCircle },
  { title: "حقوق الأجير", description: "دليل حقوق والتزامات الأجير في القانون المغربي", icon: ShieldCheck },
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
    <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">قسم التوظيف</h1>
        <p className="mt-3 text-lg text-gray-600">فرص عمل، نصائح مهنية، وكل ما يخص التوظيف في المغرب</p>
      </section>

      <section>
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">مميزات القسم</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
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
        </div>
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
          احسب راتبك الآن
          <ArrowLeft className="h-5 w-5" />
        </Link>
      </section>
    </div>
  );
}
