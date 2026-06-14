import type { Metadata } from "next";
import Link from "next/link";
import { Scale, ShieldCheck, AlertTriangle, ArrowLeft } from "lucide-react";
import { CompensationCalculator } from "./components/CompensationCalculator";

export const metadata: Metadata = {
  title: "حاسبة التعويضات في المغرب 2026: فصل، عطلة، إخطار",
  description: "احسب تعويضاتك القانونية فالمغرب: تعويض الفصل (licenciement)، تعويض العطلة السنوية، تعويض الإخطار (préavis)، وعلاوة CDD. أداة مجانية مطابقة لقانون الشغل المغربي.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "كيفاش كيتحسب تعويض الفصل فالمغرب؟",
      acceptedAnswer: { "@type": "Answer", text: "تعويض الفصل فالمغرب كيحسب على أساس 1.5 شهر عن كل سنة خدمة، بحد أقصى 36 شهر. مثلاً، إلا كنتي خدمت 5 سنوات براتب 8000 درهم، التعويض = 5 × 1.5 × 8000 = 60,000 درهم." },
    },
    {
      "@type": "Question",
      name: "شنو هو تعويض الإخطار (préavis)؟",
      acceptedAnswer: { "@type": "Answer", text: "مدة الإخطار كتختلف حسب الأقدمية: أقل من سنة = 8 أيام، من سنة لـ 5 سنين = شهر، من 5 لـ 10 سنين = شهرين، فوق 10 سنين = 3 أشهر. إلا ما خدمتيش هاد المدة، كتحصل على تعويض مساوي للراتب ديال هاد المدة." },
    },
    {
      "@type": "Question",
      name: "واش عندي الحق فتعويض العطلة إلا مشيت من الخدمة؟",
      acceptedAnswer: { "@type": "Answer", text: "إيوه، عندك الحق فتعويض ديال أيام العطلة لي مقضيتيهاش. كتحسب بـ (الراتب ÷ 26) × عدد الأيام المتبقية. مثلاً، 10 أيام عطلة براتب 8000 درهم = (8000 ÷ 26) × 10 = 3077 درهم." },
    },
    {
      "@type": "Question",
      name: "شنو الفرق بين الفصل الاقتصادي والفصل التأديبي؟",
      acceptedAnswer: { "@type": "Answer", text: "الفصل الاقتصادي كيعطيك الحق فالتعويض الكامل (1.5 شهر عن كل سنة). الفصل التأديبي كيعطيك تعويض مخفض. الفصل لخطأ جسيم كاين حتى تعويض. المغادرة الاتفاقية كتكون بنص التعويض." },
    },
    {
      "@type": "Question",
      name: "علاوة CDD شنو هي فالمغرب؟",
      acceptedAnswer: { "@type": "Answer", text: "العمال بعقود محددة المدة (CDD) عندهم الحق فـ 10% إضافية كتعويض عن نهاية العقد. كتحسب على مجموع الأجور المستلمة خلال مدة العقد." },
    },
  ],
};

export default function CompensationCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="relative overflow-hidden bg-gradient-to-b from-violet-50/80 to-white pb-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-200/30 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <nav className="mb-6 flex items-center justify-center gap-1.5 text-sm text-gray-500">
              <Link href="/" className="transition-colors hover:text-emerald-600">الرئيسية</Link>
              <span className="text-gray-300">/</span>
              <span className="font-medium text-gray-900">حاسبة التعويضات</span>
            </nav>
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 shadow-lg shadow-violet-200/50">
              <Scale className="h-8 w-8 text-white" />
            </div>
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700">
              أداة مجانية
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              <span className="bg-gradient-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent">
                حاسبة التعويضات
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">احسب تعويضات الفصل والإخطار والعطلة وفقاً لقانون الشغل المغربي</p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
        <CompensationCalculator />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100">
              <ShieldCheck className="h-5 w-5 text-violet-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">كيفاش كتحسب التعويضات في المغرب؟</h2>
            <div className="mt-3 space-y-2 text-sm leading-7 text-gray-600">
              <p><strong>1. تعويض الفصل:</strong> 1.5 شهر عن كل سنة خدمة (بحد أقصى 36 شهر).</p>
              <p><strong>2. تعويض الإخطار:</strong> 8 أيام (أقل من سنة)، شهر (1-5 سنين)، شهرين (5-10 سنين)، 3 أشهر (فوق 10 سنين).</p>
              <p><strong>3. تعويض العطلة:</strong> الراتب اليومي (الراتب ÷ 26) × عدد أيام العطلة المتبقية.</p>
              <p><strong>4. علاوة CDD:</strong> 10% من مجموع الأجور للمستخدمين بعقود محددة المدة.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-6 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
            </div>
            <h2 className="text-lg font-semibold text-amber-900">تنبيه</h2>
            <p className="mt-3 text-sm text-amber-700">هذه الحاسبة تقريبية وتستند إلى قانون الشغل المغربي. قد تختلف التعويضات حسب اتفاقيات الشغل الجماعية والظروف الخاصة. يرجى استشارة محامٍ متخصص.</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100/50 p-6 text-center shadow-sm">
          <p className="text-sm text-gray-600">
            اقرأ أيضاً:{" "}
            <Link href="/emplois/guides/indemnite-licenciement-maroc" className="font-medium text-emerald-600 underline underline-offset-2 hover:text-emerald-800">دليل تعويض نهاية الخدمة</Link>
            <span className="mx-1.5 text-gray-300">|</span>
            <Link href="/salary-calculator" className="font-medium text-emerald-600 underline underline-offset-2 hover:text-emerald-800">حاسبة الراتب الصافي</Link>
          </p>
        </div>
      </div>
    </>
  );
}
