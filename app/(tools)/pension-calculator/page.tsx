import type { Metadata } from "next";
import { HandCoins } from "lucide-react";
import { PensionCalculator } from "./components/PensionCalculator";

export const metadata: Metadata = {
  title: "حاسبة المعاش التقاعدي CNSS في المغرب 2026",
  description: "احسب معاشك التقاعدي CNSS فالمغرب. حاسبة مجانية لتقدير المعاش الشهري والسنوي بناءً على الراتب ومدة الخدمة وسن التقاعد. مطابقة لنظام CNSS المغربي.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هي شروط التقاعد ف CNSS المغرب؟",
      acceptedAnswer: { "@type": "Answer", text: "شروط التقاعد ف CNSS: السن 63 سنة على الأقل، ومدة المساهمة 3240 يوم على الأقل (تقريبا 9 سنين). إلا وصلتي لسن 63 وعدد الأيام ناقص، يمكنك الاستمرار فالتسوية. نسبة المعاش هي 50% من الراتب المرجعي (آخر 8 سنين) + 0.5% عن كل 54 يوم إضافية." },
    },
    {
      "@type": "Question",
      name: "شحال كايتحسب المعاش التقاعدي فالمغرب؟",
      acceptedAnswer: { "@type": "Answer", text: "كايتحسب المعاش على أساس: الراتب المرجعي = متوسط آخر 8 سنوات (محصور فـ 6000 درهم). النسبة = 50% عن أول 3240 يوم + 0.5% عن كل 54 يوم إضافية. المعاش الشهري = الراتب المرجعي × النسبة. مثلا، 20 عام = 2400 يوم إضافي = 22.5% إضافية = 72.5% كاملة." },
    },
  ],
};

export default function PensionCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/80 to-white pb-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-200/30 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-200/50">
              <HandCoins className="h-8 w-8 text-white" />
            </div>
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              أداة مجانية
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                حاسبة المعاش التقاعدي CNSS
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              احسب معاشك التقاعدي CNSS فالمغرب بناءً على الراتب ومدة الخدمة وسن التقاعد
            </p>
          </div>
        </div>
      </section>
      <PensionCalculator />
    </>
  );
}
