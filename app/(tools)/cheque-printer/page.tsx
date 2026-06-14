import type { Metadata } from "next";
import { Printer } from "lucide-react";
import { ChequePrinterForm } from "./components/ChequePrinterForm";

export const metadata: Metadata = {
  title: "طباعة الشيك البنكي المغربي - أداة مجانية",
  description: "أداة مجانية لطباعة الشيكات البنكية المغربية بكل سهولة. أدخل معلومات الشيك واحصل عليه جاهزاً للطباعة بصيغة احترافية مطابقة للمعايير البنكية المغربية.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هي المعلومات المطلوبة لطباعة شيك بنكي في المغرب؟",
      acceptedAnswer: { "@type": "Answer", text: "بغيتي تطبع شيك بنكي، خاصك هاد المعلومات: إسم البنك، رقم الشيك، المبلغ بالأرقام والحروف، إسم المستفيد، التاريخ، ومكان الإصدار. هاد الأداة كاتساعدك فتحويل المبلغ للحروف العربية بكل دقة." },
    },
    {
      "@type": "Question",
      name: "شنو هي البنوك المغربية المتوفرة في الأداة؟",
      acceptedAnswer: { "@type": "Answer", text: "الأداة كاتوفر جميع البنوك المغربية: BMCE Bank، Attijariwafa Bank، Banque Populaire، Société Générale Maroc، CIH Bank، Crédit Agricole Maroc، CFG Bank، BMCI، Citibank Maroc، و Bank of Africa." },
    },
  ],
};

export default function ChequePrinterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 to-white pb-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-200/30 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-200/50">
              <Printer className="h-8 w-8 text-white" />
            </div>
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              أداة مجانية
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                طباعة الشيك البنكي
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              أداة مجانية لطباعة الشيكات البنكية المغربية بكل سهولة. أدخل معلومات الشيك واحصل عليه جاهزاً للطباعة بصيغة احترافية.
            </p>
          </div>
        </div>
      </section>
      <ChequePrinterForm />
    </>
  );
}
