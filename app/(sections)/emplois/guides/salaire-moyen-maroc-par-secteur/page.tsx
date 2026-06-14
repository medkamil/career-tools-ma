import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "متوسط الرواتب في المغرب حسب القطاع والمهنة 2026 | Tawdif Pro",
  description: "متوسط الرواتب في المغرب 2026 حسب القطاع والمهنة. إحصائيات محدثة للأجور في الدار البيضاء، الرباط، وفاس.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "متوسط الرواتب في المغرب حسب القطاع والمهنة 2026",
  description: "متوسط الرواتب في المغرب حسب القطاع. إحصائيات محدثة للأجور في المغرب.",
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
    { "@type": "ListItem", position: 3, name: "متوسط الرواتب في المغرب حسب القطاع 2026", item: "https://tawdifpro.ma/emplois/guides/salaire-moyen-maroc-par-secteur" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هو متوسط الراتب فالمغرب ف 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "متوسط الراتب فالمغرب ف 2026 هو حوالي 4,500 ل 6,000 درهم فالشهر. ولكن هاد الرقم كايختالف بزاف على حسب القطاع، المدينة، ومستوى الخبرة. فالدار البيضاء، المتوسط كايكون أعلى (6,500 درهم)، أما فالمدن الصغيرة كايكون أقل (3,500 ل 4,500 درهم).",
      },
    },
    {
      "@type": "Question",
      name: "شنو هو SMIG (الحد الأدنى للأجور) فالمغرب ف 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SMIG (Salaire Minimum Interprofessionnel Garanti) فالمغرب ف 2026 كان 3,300 درهم فالشهر فالصناعة والتجارة (48 ساعة فالأسبوع). SMAG (Salaire Minimum Agricole Garanti) للفلاحة كان 2,800 درهم فالشهر. هاد الأرقام كايتزادو كل سنة بنسبة 5 ل 10%.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي أعلى القطاعات أجرا فالمغرب 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أعلى القطاعات أجرا فالمغرب: التكنولوجيا والمعلومات (IT): 10,000 ل 25,000 درهم، البنوك والتأمينات: 9,000 ل 20,000 درهم، الطاقة والمعادن: 8,000 ل 18,000 درهم، الصيدلة: 7,000 ل 15,000 درهم، الاستشارات: 7,000 ل 14,000 درهم.",
      },
    },
    {
      "@type": "Question",
      name: "واش الرواتب فالمغرب كاتختالف بين الرجال والنساء؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ايوه، الفرق فالأجور بين الرجال والنساء (gender pay gap) موجود فالمغرب. الإحصائيات كاتشير أن النساء كايخلصو حوالي 15 ل 25% أقل من الرجال ف نفس المنصب ونفس الخبرة.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هو الراتب الصافي مقابل الراتب الإجمالي فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الراتب الإجمالي (Salaire Brut) هو المبلغ لي كايتعاقد عليه. الراتب الصافي (Salaire Net) هو لي كايخلصك بعد الخصومات. الخصومات: CNSS (4.48% من الراتب الإجمالي)، CIMR (حتى 3%)، والضريبة على الدخل (IR) لي كاتحسب حسب الشريحة.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي أفضل المدن من حيث الرواتب فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الدار البيضاء كاتصدر القائمة بأعلى متوسط رواتب (6,500 درهم)، بعدها الرباط (6,000)، طنجة (5,500)، مراكش (5,000)، فاس (4,500)، وأكادير (4,300). الدار البيضاء كاتعطي فرص أكبر فالخدمات المالية والتكنولوجيا.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نقدر نتفاوض على الراتب فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التفاوض على الراتب فالمغرب هو فن. نصائح: ابحث عن متوسط الراتب فالقطاع ديالك قبل المقابلة، خلي عندك 3 أرقام: الراتب المثالي، الراتب المقبول، والحد الأدنى. قدم قيمة: شنو غادي تجيب للشركة؟",
      },
    },
  ],
};

export default function SalaireMoyenPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">الرئيسية</Link>
        {" > "}
        <Link href="/emplois" className="hover:text-emerald-600">التوظيف</Link>
        {" > "}
        <span className="text-gray-900">متوسط الرواتب فالمغرب 2026</span>
      </nav>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">متوسط الرواتب في المغرب حسب القطاع والمهنة 2026</h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>.</span>
          <span>10 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">
        <p>شنو هو الراتب لي خاصك تطلب فالمقابلة؟ ف 2026، الرواتب فالمغرب تغيرات بزاف. بعض القطاعات شهدات زيادة، وقطاعات أخرى بقات مستمرة.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">1. متوسط الرواتب حسب القطاع</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>التكنولوجيا (IT):</strong> 10,000 ل 25,000 درهم.</li>
          <li><strong>البنوك والتأمينات:</strong> 9,000 ل 20,000 درهم.</li>
          <li><strong>الصناعة والطاقة:</strong> 6,000 ل 18,000 درهم.</li>
          <li><strong>الصحة:</strong> 5,000 ل 15,000 درهم.</li>
          <li><strong>التجارة والخدمات:</strong> 3,500 ل 8,000 درهم.</li>
          <li><strong>التعليم:</strong> 4,000 ل 7,000 درهم.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">2. متوسط الرواتب حسب المدينة</h2>
        <p>الرواتب كاتختالف على حسب المدينة. الدار البيضاء، الرباط، وطنجة كايكون فيها الرواتب أعلى. مثلا، مهندس ف الدار البيضاء كايخلص 15,000 درهم. نفس المهندس ف فاس كايخلص 10,000 درهم.</p>

        <h2 className="text-2xl font-bold text-gray-900">3. الراتب الإجمالي مقابل الراتب الصافي</h2>
        <p>فاش كاتشوف إعلان شغل، كايتكتب الراتب الإجمالي (brut). مثال: 10,000 درهم brut. بعد الخصومات: CNSS: 448, IR: حوالي 1,000, CIMR: 200 ل 300. الراتب الصافي: 8,300 ل 8,500 درهم.</p>

        <h2 className="text-2xl font-bold text-gray-900">4. نصائح لزيادة الراتب</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>التدريب المستمر:</strong> شهادات مهنية جديدة كاتزيد فقيمتك.</li>
          <li><strong>التخصص:</strong> كلما كنت متخصص، كلما كان الراتب أعلى.</li>
          <li><strong>الانتقال للشركات الكبرى:</strong> الشركات المتعددة الجنسيات كاتعطي رواتب أعلى.</li>
        </ul>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">خاتمة</h2>
        <p>معرفة السوق هي مفتاح النجاح. ف 2026، فرص الشغل فالمغرب كاينين ولكن خاصك تكون عارف القيمة ديالك.</p>
      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          {"اقرا أيضا: "}
          <Link href="/salary-calculator" className="text-emerald-600 underline hover:text-emerald-800">احسب راتبك الصافي</Link>
          {" | "}
          <Link href="/emplois/guides/cv-professionnel-maroc-2026" className="text-emerald-600 underline hover:text-emerald-800">CV professionnel Maroc 2026</Link>
        </p>
      </div>
    </article>
  );
}
