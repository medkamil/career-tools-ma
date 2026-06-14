import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "كيف تصبح مقاولاً ذاتياً في المغرب 2026 (دليل كامل)",
  description: "دليل المقاول الذاتي في المغرب 2026: شروط التسجيل فموقع المقاول الذاتي، الضرائب والإعفاءات، التصريح الشهري، والمزايا. خطوات عملية باش تولي Auto-entrepreneur.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "كيف تصبح مقاولاً ذاتياً في المغرب 2026 (دليل كامل)",
  description: "دليل شامل للتسجيل في نظام المقاول الذاتي (Auto-entrepreneur) في المغرب.",
  author: { "@type": "Person", name: "Tawdif Pro" },
  publisher: { "@type": "Organization", name: "Tawdif Pro", logo: { "@type": "ImageObject", url: "https://tawdifpro.ma/logo.png" } },
  datePublished: "2026-06-01",
  dateModified: "2026-06-14",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://tawdifpro.ma" },
    { "@type": "ListItem", position: 2, name: "قسم المشاريع", item: "https://tawdifpro.ma/projets" },
    { "@type": "ListItem", position: 3, name: "كيف تصبح مقاولاً ذاتياً في المغرب 2026", item: "https://tawdifpro.ma/projets/guides/auto-entrepreneur-maroc" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هو المقاول الذاتي (Auto-entrepreneur) فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "المقاول الذاتي (Auto-entrepreneur) هو نظام قانوني كايسمح للشخص الطبيعي بمزاولة نشاط اقتصادي لحسابه الخاص بمساطر إدارية مبسطة وجباية مخفضة. فالمغرب، النظام كايدبر من طرف CNSS و OMPIC. من 2016 ل 2026، أكثر من 500,000 شخص سجلوا فهاد النظام.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي شروط التسجيل فالمقاول الذاتي فالمغرب 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "شروط التسجيل: 1) الجنسية المغربية (يمكن للأجانب المقيمين)، 2) السن: 18 سنة فأكثر، 3) الإقامة فالمغرب، 4) مزاولة نشاط اقتصادي خارج إطار عقد الشغل، 5) المعاملات السنوية أقل من 500,000 درهم للخدمات و 2,000,000 درهم للتجارة والصناعة، 6) عدم الجمع مع صفة أجير (بعض الحالات مستثناة).",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي الضرائب لي كايخلص المقاول الذاتي فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الضرائب فالمقاول الذاتي مبسطة: 1) الضريبة المهنية (Taxe professionnelle): معفى منها ف أول 5 سنين، 2) الضريبة على الدخل (IR): 1% للخدمات، 2% للتجارة والصناعة، 0.5% للمهن الحرة. 3) CNSS: 5.7% من الدخل (الحد الأقصى). 4) AMO: 2% من الدخل. النظام الجبائي كايحتسب على أساس المعاملات المحققة (Chiffre d&apos;affaires) وليس الربح.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نسجل فالمقاول الذاتي أونلاين 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التسجيل أونلاين ف 3 خطوات: 1) دخل ل autoentrepreneur.ma و أنشئ حساب، 2) املأ الاستمارة الإلكترونية: معلومات شخصية، النشاط، عنوان المقر، 3) حمل الوثائق: البطاقة الوطنية، شهادة السكن، صورتين. بعد التسجيل، غادي تستقبل Attestation d&apos;immatriculation ف 48 ساعة. CNSS غادي توصلك بطاقة التسجيل ف 15 يوم.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي المهن المسموحة فالمقاول الذاتي؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "جميع المهن التجارية والخدمية والصناعية والحرفية مسموحة. ما كاينش ممنوع إلا: 1) المهن المنظمة (المحاماة، الطب، المحاسبة - لي كايتطلب انتماء لمنظمة مهنية)، 2) الأنشطة العقارية الكبيرة، 3) الأنشطة البنكية والتأمينية. الخدمات التقنية، التجارة الإلكترونية، الحرف، النقل، كلها مسموحة.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي مزايا المقاول الذاتي مقارنة بشركة (SARL)؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "مزايا المقاول الذاتي: 1) تسجيل سهل وسريع (48 ساعة مقابل 2-4 أسابيع ل SARL)، 2) تكاليف منخفضة (500 درهم مقابل 10,000-20,000 ل SARL)، 3) ضرائب مخفضة (1% مقابل 31% ل IR و 20% ل IS)، 4) محاسبة مبسطة (ما كايتطلبش محاسب معتمد)، 5) معفى من الضريبة المهنية أول 5 سنين. عيوب: المسؤولية غير محدودة، صعوبة فالحصول على القروض الكبيرة.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي CNSS للمقاول الذاتي فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CNSS للمقاول الذاتي كاتغطي: 1) التأمين الصحي (AMO) - نسبة 2% من الدخل، 2) التقاعد (Retraite) - 5.7% من الدخل، 3) التعويضات العائلية (Allocations familiales). التسجيل ف CNSS إجباري. المبلغ الشهري: الحد الأدنى 150 درهم، الحد الأقصى 500 درهم (حسب الدخل). التصريح كايدوي كل ثلاثة أشهر (Trimestriel).",
      },
    },
  ],
};

export default function AutoEntrepreneurMarocPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">الرئيسية</Link>
        {" > "}
        <Link href="/projets" className="hover:text-emerald-600">المشاريع</Link>
        {" > "}
        <span className="text-gray-900">كيف تصبح مقاولاً ذاتياً في المغرب 2026</span>
      </nav>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">كيف تصبح مقاولاً ذاتياً في المغرب 2026 (دليل كامل)</h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>.</span>
          <span>12 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">

        <p>المقاول الذاتي (Auto-entrepreneur) هو النظام المثالي باش تبدا مشروعك فالمغرب ببساطة وبدون تعقيدات. ف 2026، أكثر من نصف مليون مغربي مسجلين فهاد النظام، والعدد كايزيد كل عام.</p>

        <p>فهاد المقال، غادي نشرحوليك بالتفصيل كيفاش تسجل فالمقاول الذاتي فالمغرب 2026: الشروط، الخطوات، الضرائب، والمزايا.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">شنو هو المقاول الذاتي؟</h2>
        <p>المقاول الذاتي (Auto-entrepreneur) هو شخص طبيعي كايمارس نشاطاً اقتصادياً لحسابه الخاص. النظام كايتميز ب:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li>مساطر إدارية مبسطة (التسجيل أونلاين ف 48 ساعة).</li>
          <li>جباية مخفضة (1% للخدمات، 2% للتجارة).</li>
          <li>محاسبة مبسطة (التصريح كل 3 شهور).</li>
          <li>تغطية اجتماعية (AMO + CNSS).</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">شروط التسجيل فالمقاول الذاتي 2026</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>الجنسية:</strong> مغربية (يمكن للأجانب المقيمين ببطاقة إقامة).</li>
          <li><strong>السن:</strong> 18 سنة فأكثر (بدون حد أقصى).</li>
          <li><strong>الإقامة:</strong> فالمغرب.</li>
          <li><strong>النشاط:</strong> اقتصادي لحسابك الخاص.</li>
          <li><strong>المعاملات السنوية:</strong> أقل من 500,000 درهم (خدمات) / 2,000,000 درهم (تجارة وصناعة).</li>
          <li><strong>الجمع مع الشغل:</strong> يمكن الجمع مع وظيفة (بعض الحالات).</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">المهن المسموحة والممنوعة</h2>
        <p><strong>مسموحة:</strong> التجارة (جميع الأنواع)، الخدمات (IT, استشارات, تنظيف, توصيل), الصناعة (تحويلية, حرفية), النقل (سيارة أجرة, دراجة), المقاولات (بناء, صيانة).</p>
        <p><strong>ممنوعة:</strong> المهن المنظمة (محاماة, طب, محاسبة), الأنشطة البنكية والتأمينية.</p>

        <h2 className="text-2xl font-bold text-gray-900">خطوات التسجيل خطوة بخطوة</h2>
        <ol className="list-decimal space-y-2 pr-6">
          <li><strong>دخل ل autoentrepreneur.ma:</strong> المنصة الرسمية للتسجيل.</li>
          <li><strong>أنشئ حساب:</strong> بإيميل صحيح وكلمة سر.</li>
          <li><strong>اختر النشاط:</strong> من لائحة الأنشطة (APE code).</li>
          <li><strong>املأ المعلومات:</strong> الشخصية والمهنية والعنوان.</li>
          <li><strong>حمل الوثائق:</strong> البطاقة الوطنية، شهادة السكن، صور.</li>
          <li><strong>أكد التسجيل:</strong> عبر الإيميل.</li>
          <li><strong>استقبل Attestation:</strong> ف 24-48 ساعة.</li>
          <li><strong>سجل ف CNSS:</strong> تلقائياً بعد التسجيل.</li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900">الضرائب والاقتطاعات</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b px-4 py-2 text-right font-medium">النوع</th>
                <th className="border-b px-4 py-2 text-right font-medium">النسبة</th>
                <th className="border-b px-4 py-2 text-right font-medium">ملاحظات</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border-b px-4 py-2">الضريبة على الدخل (IR) - خدمات</td><td className="border-b px-4 py-2">1%</td><td className="border-b px-4 py-2">من المعاملات</td></tr>
              <tr><td className="border-b px-4 py-2">الضريبة على الدخل (IR) - تجارة</td><td className="border-b px-4 py-2">2%</td><td className="border-b px-4 py-2">من المعاملات</td></tr>
              <tr><td className="border-b px-4 py-2">الضريبة على الدخل (IR) - مهن حرة</td><td className="border-b px-4 py-2">0.5%</td><td className="border-b px-4 py-2">من المعاملات</td></tr>
              <tr><td className="border-b px-4 py-2">CNSS</td><td className="border-b px-4 py-2">5.7%</td><td className="border-b px-4 py-2">الحد الأقصى 500 MAD</td></tr>
              <tr><td className="border-b px-4 py-2">AMO</td><td className="border-b px-4 py-2">2%</td><td className="border-b px-4 py-2">تأمين صحي</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">مزايا المقاول الذاتي</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li>تسجيل سريع ومجاني تقريباً (500 درهم).</li>
          <li>ضرائب مخفضة مقارنة ب SARL.</li>
          <li>محاسبة مبسطة (تصريح كل 3 شهور).</li>
          <li>معفى من الضريبة المهنية أول 5 سنين.</li>
          <li>تغطية اجتماعية (AMO + Retraite).</li>
          <li>يمكن الجمع مع وظيفة.</li>
          <li>يمكن التوقف بسهولة.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">عيوب المقاول الذاتي</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li>المسؤولية غير محدودة (الديون على الذمة المالية الشخصية).</li>
          <li>الحد الأقصى للمعاملات (500,000 / 2,000,000 درهم).</li>
          <li>صعوبة فالحصول على قروض كبيرة.</li>
          <li>لا يمكن توظيف أجير (غير مسموح).</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">التصريح الشهري/الثلاثي</h2>
        <p>كمقاول ذاتي، خاصك تخلص الضرائب والاقتطاعات كل 3 شهور. الخطوات:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li>دخل ل autoentrepreneur.ma.</li>
          <li>دخل الدخل (Chiffre d&apos;affaires) ديال الثلاثة شهور.</li>
          <li>ادفع الضريبة أونلاين (بطاقة بنكية).</li>
          <li>احتفظ بوصل الدفع.</li>
        </ul>
        <p>إذا ما كانش دخل فالثلا شهور (صفر)، خاصك تقدم تصريح صفر (Déclaration zéro).</p>

        <h2 className="text-2xl font-bold text-gray-900">CNSS و AMO للمقاول الذاتي</h2>
        <p>بعد التسجيل فالمقاول الذاتي، كايتسجل ف CNSS تلقائياً. كاتصدر ليك بطاقة CNSS. التغطية كاتشمل:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>AMO:</strong> التأمين الصحي (يغطي 70-90% من المصاريف الطبية).</li>
          <li><strong>التقاعد:</strong> معاش بعد 65 سنة.</li>
          <li><strong>التعويضات العائلية:</strong> 250 درهم لكل طفل.</li>
        </ul>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">ختاما</h2>
        <p>المقاول الذاتي هو أحسن طريقة باش تبدا مشروعك فالمغرب بسرعة وبدون تعقيدات. ف 2026، النظام ولا أكثر تطوراً. سجل على autoentrepreneur.ma، ابدأ مشروعك، واستفد من المزايا الجبائية والاجتماعية. المستقبل فالمقاولاتية يبدأ ب Auto-entrepreneur.</p>

      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          {"اقرا أيضا: "}
          <Link href="/projets/guides/programme-forsa-2026" className="text-emerald-600 underline hover:text-emerald-800">برنامج Forsa (فرصة)</Link>
          {" | "}
          <Link href="/projets/guides/etude-marche-projet" className="text-emerald-600 underline hover:text-emerald-800">الدراسة السوقية للمشروع</Link>
          {" | "}
          <Link href="/salary-calculator" className="text-emerald-600 underline hover:text-emerald-800">احسب راتبك الصافي</Link>
        </p>
      </div>
    </article>
  );
}
