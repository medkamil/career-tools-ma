import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, ShieldCheck, AlertTriangle } from "lucide-react";
import { SalaryCalculator } from "./components/SalaryCalculator";

export const metadata: Metadata = {
  title: "حاسبة الراتب الصافي في المغرب 2026",
  description:
    "احسب صافي راتبك فالمغرب بسهولة. حاسبة مجانية دقيقة كتاخد بعين الاعتبار CNSS (6.74%)، AMO (2.26%)، والضريبة على الدخل IR. مطابقة لقانون الشغل المغربي 2026.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "كيف يتم حساب صافي الراتب في المغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "يتم حساب صافي الراتب بطرح CNSS (6.74% في حدود 6000 درهم)، AMO (2.26%)، المصاريف المهنية (20% في حدود 2500 درهم)، والضريبة على الدخل (IR) حسب الشرائح الضريبية من الراتب الخام.",
      },
    },
    {
      "@type": "Question",
      name: "ما هي نسبة CNSS في المغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نسبة CNSS هي 6.74% من الراتب الخام الشهري، بحد أقصى 6000 درهم شهرياً للمساهمة.",
      },
    },
    {
      "@type": "Question",
      name: "ما هي نسبة AMO في المغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نسبة AMO (التأمين الإجباري عن المرض) هي 2.26% من الراتب الخام الشهري، بدون سقف محدد.",
      },
    },
    {
      "@type": "Question",
      name: "كيف تحسب الضريبة على الدخل IR في المغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "تحسب الضريبة على الدخل حسب الشرائح: 0% لأقل من 3333 درهم، 10% من 3334 إلى 5000 درهم، 20% من 5001 إلى 6667 درهم، 30% من 6668 إلى 8333 درهم، 34% من 8334 إلى 15000 درهم، و38% لما فوق 15000 درهم شهرياً.",
      },
    },
    {
      "@type": "Question",
      name: "هل حاسبة الراتب دقيقة 100%؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "هذه الحاسبة تقريبية وتستخدم لأغراض إعلامية. قد تختلف الاقتطاعات الفعلية حسب وضعيتك المهنية (قطاع خاص، عام، مقاول ذاتي). يرجى استشارة خبير ضريبي للحصول على معلومات دقيقة.",
      },
    },
  ],
};

export default function SalaryCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/80 to-white pb-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-200/30 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-200/50">
              <Calculator className="h-8 w-8 text-white" />
            </div>
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              أداة مجانية
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                حاسبة الراتب الصافي
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              احسب صافي راتبك الشهري بعد خصم CNSS، AMO، والضريبة على الدخل (IR) وفقًا للقانون المغربي
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
        <SalaryCalculator />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">كيف يتم حساب الراتب في المغرب؟</h2>
            <div className="mt-3 space-y-2 text-sm leading-7 text-gray-600">
              <p><strong>1. اقتطاع CNSS:</strong> 6.74% من الراتب الخام في حدود 6,000 درهم.</p>
              <p><strong>2. اقتطاع AMO:</strong> 2.26% من الراتب الخام بدون سقف.</p>
              <p><strong>3. المصاريف المهنية:</strong> 20% من الراتب بعد الاقتطاعات في حدود 2,500 درهم.</p>
              <p><strong>4. الضريبة IR:</strong> تحسب حسب الشرائح الضريبية الشهرية.</p>
              <p><strong>5. صافي الراتب:</strong> الراتب الخام مطروحاً منه الاقتطاعات والضريبة.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-6 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
            </div>
            <h2 className="text-lg font-semibold text-amber-900">تنبيه</h2>
            <p className="mt-3 text-sm text-amber-700">
              هذه الحاسبة تقريبية لأغراض إعلامية. قد تختلف الاقتطاعات حسب وضعيتك المهنية. يرجى استشارة خبير ضريبي للحصول على معلومات دقيقة.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
