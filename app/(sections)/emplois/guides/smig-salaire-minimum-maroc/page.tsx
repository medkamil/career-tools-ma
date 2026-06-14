import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "الحد الأدنى للأجور SMIG في المغرب 2026 (دليل كامل)",
  description: "SMIG 2026 المغرب: الأجر الأدنى بالساعة والشهر، SMAG للفلاحة، القطاعات المعنية، الزيادات القانونية، وحساب الأجر الصافي. دليل كامل ومحدث.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "الحد الأدنى للأجور SMIG في المغرب 2026 (دليل كامل)",
  description: "دليل كامل حول SMIG و SMAG في المغرب 2026، الأجر الأدنى، الحسابات، والقطاعات.",
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
    { "@type": "ListItem", position: 2, name: "قسم التوظيف", item: "https://tawdifpro.ma/emplois" },
    { "@type": "ListItem", position: 3, name: "الحد الأدنى للأجور SMIG في المغرب 2026", item: "https://tawdifpro.ma/emplois/guides/smig-salaire-minimum-maroc" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هو SMIG فالمغرب 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SMIG (Salaire Minimum Interprofessionnel Garanti) هو الحد الأدنى القانوني للأجر فالمغرب. ف 2026، SMIG هو 16.52 درهم فالساعة للقطاعات الصناعية والتجارية والمهن الحرة. يعني الأجر الشهري الأدنى هو 3,171.84 MAD على أساس 44 ساعة فالأسبوع. SMIG كايتراجع كل سنة من قبل الحكومة والشركاء الاجتماعيين.",
      },
    },
    {
      "@type": "Question",
      name: "شنو الفرق بين SMIG و SMAG؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SMIG كايخص القطاعات الصناعية والتجارية والحرفية والمهن الحرة (الصناعة، التجارة، الخدمات). SMAG (Salaire Minimum Agricole Garanti) كايخص القطاع الفلاحي. ف 2026، SMAG هو 15.82 درهم فالساعة. SMAG أقل من SMIG حيت القطاع الفلاحي عندو خصوصيات موسمية وطبيعة عمل مختلفة.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هو الأجر الشهري SMIG فالمغرب 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SMIG الشهري فالمغرب 2026 كايحتسب على أساس 44 ساعة فالأسبوع. الحساب: 16.52 درهم × 44 ساعة × 4.33 أسبوع = حوالي 3,171.84 MAD فالشهر. ولكن هذا قبل الضرائب والاقتطاعات (CNSS, AMO). الصافي كايكون أقل. الأجر الصافي كايختلف حسب الوضعية العائلية (عدد الأولاد).",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي القطاعات لي كايتطبق عليها SMIG؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SMIG كايتطبق على: 1) القطاع الصناعي (جميع الصناعات التحويلية)، 2) القطاع التجاري (التجارة بالجملة والتقسيط)، 3) المهن الحرة (Les professions libérales)، 4) الخدمات (الفنادق، المطاعم، النقل، الاتصالات)، 5) الحرف (Les artisans). ما كايتطبقش على: الوظائف العمومية (القطاع العام عندو نظام خاص)، بعض المهن الحرة المستقلة.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش كايتحتسب SMIG واش كايشمل البونص ولا التعويضات؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SMIG هو الأجر الأساسي الأدنى. التعويضات (Primas, indemnités) كاتزاد فوق SMIG. يعني الأجر الإجمالي (Salaire brut) كايتكون من الأجر الأساسي + التعويضات. الأجر الأساسي ما يمكنش يكون أقل من SMIG. ولكن الأجر الإجمالي يمكن يكون أكبر. التعويضات لي كاتزاد: تعويض النقل، تعويض المأكل، تعويض الخبرة.",
      },
    },
    {
      "@type": "Question",
      name: "آخر زيادة ف SMIG فالمغرب كانت فاش؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "آخر زيادة ف SMIG كانت ف يناير 2025. SMIG زاد من 15.03 درهم فالساعة ل 16.52 درهم فالساعة (زيادة 10%). SMAG زاد من 14.38 درهم ل 15.82 درهم (زيادة 10%). هاد الزيادة جات بعد اتفاق بين الحكومة والاتحاد العام للشغالين بالمغرب (UGTM) والكنفدرالية الديمقراطية للشغل (CDT).",
      },
    },
    {
      "@type": "Question",
      name: "شنو لي كايحدث إذا المشغل كايصرف أقل من SMIG؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "إذا المشغل كايصرف أقل من SMIG، الأجير عندو الحق يقدم شكوى لمفتشية الشغل (Inspection du Travail). مفتش الشغل كايحقق ويمكن يعطي إنذار للمشغل. إذا ما تعدلش الوضع، يمكن للمحكمة الاجتماعية (Tribunal Social) تغريم المشغل (غرامة من 20,000 ل 50,000 درهم). الأجير يمكن يطلب الفرق فالأجر + تعويض.",
      },
    },
  ],
};

export default function SmigSalaireMinimumMarocPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">الرئيسية</Link>
        {" > "}
        <Link href="/emplois" className="hover:text-emerald-600">التوظيف</Link>
        {" > "}
        <span className="text-gray-900">الحد الأدنى للأجور SMIG في المغرب 2026</span>
      </nav>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">الحد الأدنى للأجور SMIG في المغرب 2026 (دليل كامل)</h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>.</span>
          <span>12 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">

        <p>SMIG (Salaire Minimum Interprofessionnel Garanti) هو الحد الأدنى للأجور فالمغرب. كايضمن لكل أجير أجر لا يقل عن مبلغ معين. ف 2026، SMIG ولا موضوع مهم بزاف فالنقاشات الاجتماعية والاقتصادية فالمغرب.</p>

        <p>فهاد المقال غادي نشرحو كل شي على SMIG فالمغرب 2026: القيمة الحالية، الفرق بين SMIG و SMAG، كيفية الحساب، والقطاعات المعنية. دليل كامل باش تفهم حقوقك.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">شنو هو SMIG؟</h2>
        <p>SMIG هو Salaire Minimum Interprofessionnel Garanti (الحد الأدنى القانوني للأجور بين المهن). كايحدد من قبل الحكومة بالتشاور مع النقابات (Syndicats) والاتحاد العام للمقاولات المغربية (CGEM). الهدف هو ضمان مستوى معيشة لائق للأجراء.</p>

        <p>فالمغرب، SMIG كايتطبق على:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>الصناعة:</strong> جميع القطاعات الصناعية (تحويلية، استخراجية، طاقية).</li>
          <li><strong>التجارة:</strong> جميع الأنشطة التجارية.</li>
          <li><strong>المهن الحرة:</strong> المحاماة، الطب، الهندسة، المحاسبة.</li>
          <li><strong>الحرف:</strong> الحرفيون والمهنيون.</li>
          <li><strong>الخدمات:</strong> الفنادق، المطاعم، النقل.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">SMIG 2026 فالمغرب: الأرقام الرسمية</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b px-4 py-2 text-right font-medium">المعيار</th>
                <th className="border-b px-4 py-2 text-right font-medium">SMIG (الصناعة والتجارة)</th>
                <th className="border-b px-4 py-2 text-right font-medium">SMAG (الفلاحة)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border-b px-4 py-2">الأجر بالساعة</td><td className="border-b px-4 py-2">16.52 درهم</td><td className="border-b px-4 py-2">15.82 درهم</td></tr>
              <tr><td className="border-b px-4 py-2">ساعات العمل الأسبوعية</td><td className="border-b px-4 py-2">44 ساعة</td><td className="border-b px-4 py-2">48 ساعة</td></tr>
              <tr><td className="border-b px-4 py-2">الأجر الشهري الأدنى</td><td className="border-b px-4 py-2">3,171.84 درهم</td><td className="border-b px-4 py-2">3,037.44 درهم</td></tr>
              <tr><td className="border-b px-4 py-2">تاريخ آخر زيادة</td><td className="border-b px-4 py-2">يناير 2025</td><td className="border-b px-4 py-2">يناير 2025</td></tr>
              <tr><td className="border-b px-4 py-2">نسبة الزيادة</td><td className="border-b px-4 py-2">10%</td><td className="border-b px-4 py-2">10%</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">الفرق بين SMIG و SMAG</h2>
        <p>SMAG (Salaire Minimum Agricole Garanti) هو الحد الأدنى للأجور فالقطاع الفلاحي. الفرق الرئيسي هو أن SMAG أقل من SMIG (15.82 مقابل 16.52 درهم فالساعة). السبب هو:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li>ساعات العمل ف الفلاحة 48 ساعة فالأسبوع (مقابل 44 ساعة فالصناعة).</li>
          <li>الطبيعة الموسمية للعمل الفلاحي.</li>
          <li>التكاليف الإضافية (السكن، المأكل) لي كايوفرها المشغل فبعض الحالات.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">كيفاش كايتحتسب SMIG الشهري؟</h2>
        <p>الحساب كايدوي على الشكل التالي:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>الأجر بالساعة:</strong> 16.52 درهم.</li>
          <li><strong>عدد ساعات العمل ف الأسبوع:</strong> 44 ساعة.</li>
          <li><strong>عدد الأسابيع ف الشهر:</strong> 4.33 (52 أسبوع ÷ 12 شهر).</li>
          <li><strong>الحساب:</strong> 16.52 × 44 × 4.33 = 3,171.84 درهم فالشهر (قبل الضرائب).</li>
        </ul>
        <p>الأجر الصافي (Net) كايكون حوالي 2,800 - 3,000 درهم بعد خصم CNSS (4.48%), AMO (2%), والتضامن (1%).</p>

        <h2 className="text-2xl font-bold text-gray-900">شنو كايشمل SMIG؟</h2>
        <p>SMIG هو الأجر الأساسي الأدنى. التعويضات التالية كاتزاد عليه:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>تعويض النقل (Indemnité de transport):</strong> 30 - 50 درهم فاليوم حسب القطاع.</li>
          <li><strong>تعويض المأكل (Indemnité de panier):</strong> 30 - 50 درهم فاليوم.</li>
          <li><strong>تعويض الخبرة (Prime d&apos;ancienneté):</strong> 5% من الأجر كل 3 سنين (حتى 20%).</li>
          <li><strong>تعويض المردودية (Prime de rendement):</strong> حسب أداء الموظف.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">تطور SMIG فالمغرب (2020 - 2026)</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b px-4 py-2 text-right font-medium">السنة</th>
                <th className="border-b px-4 py-2 text-right font-medium">SMIG بالساعة</th>
                <th className="border-b px-4 py-2 text-right font-medium">SMIG الشهري</th>
                <th className="border-b px-4 py-2 text-right font-medium">الزيادة</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border-b px-4 py-2">2020</td><td className="border-b px-4 py-2">13.67 درهم</td><td className="border-b px-4 py-2">2,624 درهم</td><td className="border-b px-4 py-2">-</td></tr>
              <tr><td className="border-b px-4 py-2">2022</td><td className="border-b px-4 py-2">14.23 درهم</td><td className="border-b px-4 py-2">2,731 درهم</td><td className="border-b px-4 py-2">4%</td></tr>
              <tr><td className="border-b px-4 py-2">2024</td><td className="border-b px-4 py-2">15.03 درهم</td><td className="border-b px-4 py-2">2,885 درهم</td><td className="border-b px-4 py-2">5.6%</td></tr>
              <tr><td className="border-b px-4 py-2">2025</td><td className="border-b px-4 py-2">16.52 درهم</td><td className="border-b px-4 py-2">3,171 درهم</td><td className="border-b px-4 py-2">10%</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">القطاعات المستثناة من SMIG</h2>
        <p>ما كايتطبقش SMIG على:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>الوظيفة العمومية:</strong> الموظفون عندهم نظام أجور خاص (Statut de la fonction publique).</li>
          <li><strong>المقاولون الذاتيون (Auto-entrepreneurs):</strong> حيت كايشتغلو لحسابهم.</li>
          <li><strong>العمال المنزليون:</strong> (Les travailleurs domestiques) حالياً خارج التغطية (ولكن قانون جديد ف الطريق).</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">كيفاش تحمي حقوقك إذا SMIG ما كايتطبقش؟</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>جمع الوثائق:</strong> عقد العمل، فواتير الأجر، ساعات العمل المسجلة.</li>
          <li><strong>مفتشية الشغل:</strong> قدم شكوى للمفتشية الجهوية للشغل (Inspection Régionale du Travail).</li>
          <li><strong>النقابة:</strong> اتصل بالنقابة ديال القطاع ديالك.</li>
          <li><strong>المحكمة:</strong> قدم شكوى للمحكمة الاجتماعية (Tribunal Social).</li>
        </ul>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">ختاما</h2>
        <p>SMIG هو حق أساسي لكل أجير فالمغرب. ف 2026، الأجر الأدنى هو 16.52 درهم فالساعة (3,171 MAD فالشهر). إذا المشغل كايصرف أقل من هاد المبلغ، عندك الحق فالشكوى. استعمل <Link href="/salary-calculator" className="text-emerald-600 underline">حاسبة الراتب</Link> باش تعرف الأجر الصافي ديالك.</p>

      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          {"اقرا أيضا: "}
          <Link href="/emplois/guides/droits-salarie-maroc" className="text-emerald-600 underline hover:text-emerald-800">حقوق الأجير</Link>
          {" | "}
          <Link href="/emplois/guides/salaire-moyen-maroc-par-secteur" className="text-emerald-600 underline hover:text-emerald-800">متوسط الرواتب حسب القطاع</Link>
          {" | "}
          <Link href="/salary-calculator" className="text-emerald-600 underline hover:text-emerald-800">احسب راتبك الصافي</Link>
        </p>
      </div>
    </article>
  );
}
