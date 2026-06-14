import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "المغادرة الطوعية Depart Volontaire في المغرب 2026: حقوقك وتعويضاتك | Tawdif Pro",
  description: "دليل المغادرة الطوعية (Depart Volontaire) في المغرب 2026. شروط الاستفادة، طريقة حساب التعويض، الفرق عن الطرد، والإجراءات القانونية.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "المغادرة الطوعية Depart Volontaire في المغرب 2026: حقوقك وتعويضاتك",
  description: "دليل المغادرة الطوعية (Depart Volontaire) في المغرب. شروط الاستفادة، طريقة حساب التعويض، والفرق عن الطرد.",
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
    { "@type": "ListItem", position: 3, name: "المغادرة الطوعية Depart Volontaire 2026", item: "https://tawdifpro.ma/emplois/guides/depart-volontaire-maroc-indemnite" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هو Depart Volontaire (المغادرة الطوعية) فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depart Volontaire ولا المغادرة الطوعية هي آلية قانونية كايعرض فيها المشغل على الأجير باش يخرج بشكل ودي (amiable) مقابل تعويض مالي. الفرق بين هاد الآلية والاستقالة: فالمغادرة الطوعية، العرض جاي من المشغل والتعويض كايكون أكبر بزاف.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هو الفرق بين Depart Volontaire و Licenciement (الطرد)؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الفرق الرئيسي: فالمغادرة الطوعية، الأجير كايدخل فاتفاق مع المشغل. الأجير كايوقع على تنازل (desistement) و كايوقف متابعة المشغل قانونيا. التعويض فالمغادرة الطوعية كايكون أكبر من تعويض الطرد.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش كايحسب تعويض Depart Volontaire فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التعويض فالمغادرة الطوعية ما عندوش قانون محدد. كايتم التفاوض بين الطرفين. ولكن، العادة: 1 ل 3 أشهر من الراتب عن كل سنة أقدمية. يعني، أجير عندو 10 سنين فشركة وراتبو 8,000 درهم، التعويض الطوعي كايكون بين 80,000 و 240,000 درهم.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي الشروط القانونية ل Depart Volontaire؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الشروط: 1) العرض كايجي من المشغل طواعية، 2) الأجير عندو الحق يقبل ولا يرفض، 3) التوقيع على اتفاق ودي (Convention de Depart Volontaire)، 4) التنازل عن جميع الحقوق القانونية (desistement)، 5) التسجيل فـ CNSS.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي مزايا وعيوب Depart Volontaire؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "المزايا: 1) تعويض كبير (قد يصل لـ 24 شهر من الراتب)، 2) الخروج بشكل محترم، 3) إمكانية البقاء فسوق الشغل. العيوب: 1) التنازل عن الحق فالمتابعة القانونية، 2) الضريبة على التعويض، 3) فقدان الوظيفة قد يكون مفاجئ.",
      },
    },
  ],
};

export default function DepartVolontairePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">الرئيسية</Link>
        {" > "}
        <Link href="/emplois" className="hover:text-emerald-600">التوظيف</Link>
        {" > "}
        <span className="text-gray-900">المغادرة الطوعية فالمغرب</span>
      </nav>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">المغادرة الطوعية Depart Volontaire في المغرب 2026: حقوقك وتعويضاتك</h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>.</span>
          <span>8 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">
        <p>المغادرة الطوعية (Depart Volontaire) هي آلية ما زالت جديدة نسبيا فالمغرب، ولكنها كاتنتشر بزاف ف الشركات الكبرى. منين كاتكون الشركة فإعادة هيكلة (restructuration) كاتعرض هاد الآلية على الأجراء.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">1. الفرق بين Depart Volontaire و Demission</h2>
        <p>Depart Volontaire هو اتفاق ودي بين المشغل والأجير. المشغل كايعرض على الأجير باش يخرج من الخدمة مقابل تعويض مالي. الأجير عندو الحق يقبل ولا يرفض. فاش كايقبل، كايوقع على اتفاقية كايتنازل فيها عن جميع حقوقه القانونية.</p>

        <h2 className="text-2xl font-bold text-gray-900">2. كيفية حساب تعويض Depart Volontaire</h2>
        <p>ما كاينش قانون كايحدد التعويض. كايتم التفاوض. ولكن العرف فالشركات المغربية: 1 ل 3 أشهر من الراتب عن كل سنة أقدمية. مثال: أجير عندو 15 سنة وراتبو 10,000 درهم. التعويض: 15 x 2 شهر x 10,000 = 300,000 درهم.</p>

        <h2 className="text-2xl font-bold text-gray-900">3. خطوات المغادرة الطوعية</h2>
        <ol className="list-decimal space-y-2 pr-6">
          <li>الإعلان عن المخطط من طرف الشركة.</li>
          <li>التقديم الطوعي من الأجير للاستفادة.</li>
          <li>الدراسة والموافقة من مدير الموارد البشرية.</li>
          <li>التفاوض على التعويض بين الأجير والمشغل.</li>
          <li>التوقيع على Convention de Depart Volontaire.</li>
        </ol>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">خاتمة</h2>
        <p>Depart Volontaire يمكن يكون فرصة ذهبية باش تبدا مشروع جديد. ولكن، خاصك تكون حذر فالتفاوض وتفهم جميع الشروط. استشر محامي قبل التوقيع.</p>
      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          {"اقرا أيضا: "}
          <Link href="/emplois/guides/indemnite-licenciement-maroc" className="text-emerald-600 underline hover:text-emerald-800">تعويض نهاية الخدمة فالمغرب</Link>
          {" | "}
          <Link href="/emplois/guides/assurance-chomage-maroc" className="text-emerald-600 underline hover:text-emerald-800">التأمين على البطالة</Link>
        </p>
      </div>
    </article>
  );
}
