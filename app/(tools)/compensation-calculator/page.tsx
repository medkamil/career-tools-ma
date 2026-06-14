import type { Metadata } from "next";
import Link from "next/link";
import { CompensationCalculator } from "./components/CompensationCalculator";

export const metadata: Metadata = {
  title: "حاسبة التعويضات في المغرب 2026: فصل، عطلة، إخطار | Tawdif Pro",
  description: "احسب تعويضاتك القانونية في المغرب: تعويض الفصل (licenciement)، تعويض العطلة السنوية، تعويض الإخطار (préavis)، وعلاوة CDD. أداة مجانية مبنية على قانون الشغل المغربي.",
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
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-emerald-600">الرئيسية</Link> › <span className="text-gray-900">حاسبة التعويضات</span>
        </nav>
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900">حاسبة التعويضات في المغرب</h1>
          <p className="mt-3 text-lg text-gray-600">احسب تعويضات الفصل والإخطار والعطلة وفقاً لقانون الشغل المغربي</p>
        </div>
        <CompensationCalculator />
        <div className="mt-8 space-y-4 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">كيفاش كتحسب التعويضات في المغرب؟</h2>
          <div className="space-y-3 text-sm leading-7 text-gray-600">
            <p><strong>1. تعويض الفصل:</strong> 1.5 شهر عن كل سنة خدمة (بحد أقصى 36 شهر). السنوات الناقصة كتحسب بالتناسب.</p>
            <p><strong>2. تعويض الإخطار:</strong> 8 أيام (أقل من سنة)، شهر (1-5 سنين)، شهرين (5-10 سنين)، 3 أشهر (فوق 10 سنين).</p>
            <p><strong>3. تعويض العطلة:</strong> الراتب اليومي (الراتب ÷ 26) × عدد أيام العطلة المتبقية.</p>
            <p><strong>4. علاوة CDD:</strong> 10% من مجموع الأجور للمستخدمين بعقود محددة المدة.</p>
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-sm text-amber-700">هذه الحاسبة تقريبية وتستند إلى قانون الشغل المغربي. قد تختلف التعويضات حسب اتفاقيات الشغل الجماعية والظروف الخاصة. يرجى استشارة محامٍ متخصص.</p>
        </div>
        <div className="mt-6 rounded-xl bg-gray-50 p-4 text-center">
          <p className="text-sm text-gray-600">
            📚 اقرأ أيضاً:{" "}
            <Link href="/emplois/guides/indemnite-licenciement-maroc" className="text-emerald-600 underline hover:text-emerald-800">دليل تعويض نهاية الخدمة</Link>
            {" | "}
            <Link href="/salary-calculator" className="text-emerald-600 underline hover:text-emerald-800">حاسبة الراتب الصافي</Link>
          </p>
        </div>
      </div>
    </>
  );
}
