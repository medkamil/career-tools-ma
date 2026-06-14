import type { Metadata } from "next";
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
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900">حاسبة الراتب الصافي في المغرب</h1>
          <p className="mt-3 text-lg text-gray-600">
            احسب صافي راتبك الشهري بعد خصم CNSS، AMO، والضريبة على الدخل (IR) وفقًا للقانون المغربي
          </p>
        </div>
        <SalaryCalculator />
        <div className="mt-12 space-y-4 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">كيف يتم حساب الراتب في المغرب؟</h2>
          <div className="space-y-3 text-sm leading-7 text-gray-600">
            <p><strong>1. اقتطاع CNSS:</strong> 6.74% من الراتب الخام في حدود 6,000 درهم.</p>
            <p><strong>2. اقتطاع AMO:</strong> 2.26% من الراتب الخام بدون سقف.</p>
            <p><strong>3. المصاريف المهنية:</strong> 20% من الراتب بعد الاقتطاعات في حدود 2,500 درهم.</p>
            <p><strong>4. الضريبة IR:</strong> تحسب حسب الشرائح الضريبية الشهرية.</p>
            <p><strong>5. صافي الراتب:</strong> الراتب الخام مطروحاً منه الاقتطاعات والضريبة.</p>
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-sm font-semibold text-amber-800">تنبيه</p>
          <p className="mt-1 text-sm text-amber-700">
            هذه الحاسبة تقريبية لأغراض إعلامية. قد تختلف الاقتطاعات حسب وضعيتك المهنية.
          </p>
        </div>
      </div>
    </>
  );
}
