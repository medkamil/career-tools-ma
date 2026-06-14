import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "دليل التدريب المهني والمرقمن في المغرب 2026: الشروط والحقوق | Tawdif Pro",
  description: "دليل شامل حول التدريب المهني (Stage Conventionne) في المغرب 2026. شروط الاستفادة، الحقوق القانونية للمتدرب، التعويضات، وكيفية إيجاد فرص التدريب.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "دليل التدريب المهني والمرقمن في المغرب 2026: الشروط والحقوق",
  description: "دليل شامل حول التدريب المهني (Stage Conventionne) في المغرب. شروط الاستفادة، حقوق المتدرب، التعويضات، وفرص التدريب.",
  author: { "@type": "Person", name: "Tawdif Pro" },
  publisher: { "@type": "Organization", name: "Tawdif Pro", logo: { "@type": "ImageObject", url: "https://tawdifpro.ma/logo.png" } },
  datePublished: "2026-06-01",
  dateModified: "2026-06-13",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://tawdifpro.ma" },
    { "@type": "ListItem", position: 2, name: "قسم التوظيف", item: "https://tawdifpro.ma/emplois" },
    { "@type": "ListItem", position: 3, name: "دليل التدريب المهني والمرقمن في المغرب 2026", item: "https://tawdifpro.ma/emplois/guides/stage-conventionne-maroc-guide" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هو Stage Conventionne (التدريب المرقمن) فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stage Conventionne ولا التدريب المرقمن هو تدريب مهني كايتنظم بموجب اتفاقية (Convention de Stage) بين 3 أطراف: المؤسسة التعليمية، الشركة المضيفة، والمتدرب (stagiaire). هاد الاتفاقية كاتحدد المدة والأهداف والحقوق.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي حقوق المتدرب فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "المتدرب فالمغرب عندو حقوق محدودة مقارنة مع الأجير النظامي. ولكن القانون كاينص على: 1) تعويض شهري (Indemnite de Stage) - غير إلزامي ولكن متعارف عليه (1,000 ل 3,000 درهم حسب الشركة)، 2) تغطية صحية (CNSS - فاش كاتزيد المدة على 6 أشهر)، 3) شهادة التدريب عند النهاية، 4) بيئة عمل آمنة.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي مدة التدريب القانونية فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "فالمغرب، مدة التدريب كاتختالف حسب النوع: التدريب التطبيقي (Stage d Application): 1 ل 3 أشهر. تدريب التخرج (Stage de Fin d Etudes): 3 ل 6 أشهر. التدريب المدمج (Stage en Alternance): 6 ل 24 شهر. المدة القصوى عادة 6 أشهر.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نلقى Stage Conventionne فالمغرب ف 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الطرق الأكثر فعالية: 1) مكتب العلاقات مع الشركات فالمؤسسة التعليمية، 2) منصات التشغيل: Linkedin، Rekrute.ma، 3) التقديم المباشر على مواقع الشركات، 4) المعارض المهنية، 5) العلاقات الشخصية.",
      },
    },
    {
      "@type": "Question",
      name: "شنو الفرق بين Stage و Alternance فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stage هو تدريب مكثف فشركة لمدة محدودة (3 ل 6 أشهر). Alternance (التدريب بالتناوب) هو نظام كايجمع بين الدراسة النظرية فالمؤسسة التعليمية والتدريب العملي فشركة. ف Alternance، كاتقسم وقتك بين المدرسة والشركة.",
      },
    },
  ],
};

export default function StageConventionnePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">الرئيسية</Link>
        {" > "}
        <Link href="/emplois" className="hover:text-emerald-600">التوظيف</Link>
        {" > "}
        <span className="text-gray-900">التدريب المهني فالمغرب</span>
      </nav>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">دليل التدريب المهني والمرقمن في المغرب 2026: الشروط والحقوق</h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>.</span>
          <span>10 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">
        <p>التدريب المهني (Stage Conventionne) هو أول خطوة فالحياة المهنية لمعظم الشباب المغربي. ولكن، بزاف ديال الطلاب ما كايعرفوش شنو هي حقوقهم، وشنو هو التعويض لي خاصهم.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">1. أنواع التداريب فالمغرب</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>Stage d Initiation:</strong> هدفو التعرف على بيئة العمل (1 شهر).</li>
          <li><strong>Stage d Application:</strong> كايطبق الطالب المعرفة النظرية (1 ل 3 أشهر).</li>
          <li><strong>Stage de Fin d Etudes (PFE):</strong> مشروع التخرج (3 ل 6 أشهر).</li>
          <li><strong>Stage en Alternance:</strong> التدريب بالتناوب مع الدراسة (6 ل 24 شهر).</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">2. التعويضات (Indemnites de Stage)</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-emerald-50">
                <th className="p-3 text-right font-semibold">نوع التدريب</th>
                <th className="p-3 text-right font-semibold">التعويض التقريبي</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="p-3">Stage d Initiation</td><td className="p-3">500 ل 1,000 درهم</td></tr>
              <tr><td className="p-3">Stage d Application</td><td className="p-3">1,000 ل 2,000 درهم</td></tr>
              <tr><td className="p-3">PFE (تخرج)</td><td className="p-3">2,000 ل 4,000 درهم</td></tr>
              <tr><td className="p-3">Alternance</td><td className="p-3">2,500 ل 5,000 درهم</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">3. نصائح للنجاح فالتدريب</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li>كن استباقي: ما تستناش حتى يديروك على الخدمة.</li>
          <li>تدرب على المهارات: استغل وقت الفراغ باش تتعلم أدوات جديدة.</li>
          <li>ابني العلاقات: التواصل مع الزملاء والمشرفين.</li>
        </ul>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">خاتمة</h2>
        <p>التدريب المهني هو فرصة ثمينة. حتى إلا كان التعويض صغير، الخبرة والعلاقات لي كاتجيب معاه كاتساوي بزاف.</p>
      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          {"اقرا أيضا: "}
          <Link href="/emplois/guides/cv-professionnel-maroc-2026" className="text-emerald-600 underline hover:text-emerald-800">CV professionnel Maroc 2026</Link>
          {" | "}
          <Link href="/emplois/guides/questions-entretien-embauche-reponses" className="text-emerald-600 underline hover:text-emerald-800">أسئلة مقابلة العمل</Link>
        </p>
      </div>
    </article>
  );
}
