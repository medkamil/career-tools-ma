import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "الفرق بين CDD و CDI في المغرب 2026 (دليل شامل)",
  description: "دليل شامل للفرق بين عقد CDD و CDI في المغرب 2026. المدة، المزايا، الإنهاء، والتعويضات. أيهما تختار؟ مقارنة كاملة مع أمثلة عملية ونماذج العقود.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "الفرق بين CDD و CDI في المغرب 2026 (دليل شامل)",
  description: "شرح مفصل للفرق بين عقد العمل المحدد المدة (CDD) وغير المحدد (CDI) في القانون المغربي.",
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
    { "@type": "ListItem", position: 3, name: "الفرق بين CDD و CDI في المغرب 2026", item: "https://tawdifpro.ma/emplois/guides/cdd-cdi-maroc" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هو الفرق الأساسي بين CDD و CDI فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الفرق الأساسي هو المدة. CDD (Contrat à Durée Déterminée) هو عقد محدد المدة، يعني عندو تاريخ بداية ونهاية محددين. CDI (Contrat à Durée Indéterminée) هو عقد غير محدد المدة، يعني مفتوح ومستمر. CDD كاينتهي فتاريخ معين، بينما CDI كايبقى ساري حتى يقرر أحد الطرفين إنهاؤه.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي مدة CDD فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "القانون المغربي كايسمح ب CDD فالمدة من شهر ل 12 شهر، قابل للتجديد مرة وحدة (أقصى مدة 24 شهر). بالنسبة لمهام محددة (Mission spécifique)، كايقدر يكون حتى 3 سنين. بعد 24 شهر ف CDD، المشغل ملزم بتحويل العقد ل CDI. بعض القطاعات (الفلاحة، البناء) عندها قوانين خاصة.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي الحالات لي كايسمح فيها القانون ب CDD؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "القانون المغربي كايسمح ب CDD فحالات محدودة: 1) تعويض أجير غائب (Remplaçant)، 2) زيادة مؤقتة فالنشاط (Surcroît d&apos;activité)، 3) مهمة موسمية (Tâche saisonnière)، 4) مشروع محدد المدة، 5) عقد التكوين والتشغيل (Contrat de formation-emploi). ما يمكنش استعمال CDD للخدمة الدائمة.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي حقوقي ف CDI مقارنة ب CDD؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ف CDI عندك حقوق أكبر: 1) تعويض الفصل (Indemnité de licenciement) كلما زادت الأقدمية، بينما ف CDD ما كاينش تعويض فاش كاينتهي العقد طبيعياً، 2) الاستقرار المهني والأمان، 3) تسهيل الحصول على القروض (Credit immobilier, Credit voiture)، 4) التطور المهني ف نفس الشركة. ف CDD، الأجر كايكون نفسو ولكن الأمان أقل.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هو التعويض فاش كاينتهي CDD قبل المدة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "إذا كان المشغل هو لي كاينهي CDD قبل المدة المتفق عليها (بلا سبب قانوني)، كايتعوض الأجير بالأجر كامل لي باقي من مدة العقد. إذا كان الأجير هو لي كايترك الخدمة قبل المدة، كايخسر التعويضات. الاستثناء: إذا كاين خطأ جسيم من الأجير (Faute grave)، يمكن الفصل بلا تعويض.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نتحول من CDD ل CDI فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التحويل من CDD ل CDI كايدوي بشكل تلقائي فحالتين: 1) إذا استمر الأجير ف الخدمة بعد 24 شهر من CDD، 2) إذا استمر الأجير ف الخدمة بعد 30 يوم من تاريخ انتهاء CDD والمشغل ما جددش العقد ولا أنهى الخدمة. فهاد الحالة، العقد كايتحول ل CDI قانونياً حتى من غير ما يتكتب.",
      },
    },
    {
      "@type": "Question",
      name: "شنو الأفضل للخريج الجديد: CDD ولا CDI؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "للخريج الجديد، CDD يمكن يكون أفضل فالحالات التالية: 1) إذا كانت فرصة نادرة فمجال معين، 2) إذا كان CDD فشركة كبيرة كاتوفر تكوين، 3) إذا كان العقد قصير (3-6 شهور) ويكتسب منو خبرة. ولكن فالأصل، CDI هو الأفضل للأمان والاستقرار. النصيحة: خذ CDD كبداية، ولكن استمر فالبحث على CDI.",
      },
    },
  ],
};

export default function CddCdiMarocPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">الرئيسية</Link>
        {" > "}
        <Link href="/emplois" className="hover:text-emerald-600">التوظيف</Link>
        {" > "}
        <span className="text-gray-900">الفرق بين CDD و CDI في المغرب 2026</span>
      </nav>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">الفرق بين CDD و CDI في المغرب 2026 (دليل شامل)</h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>.</span>
          <span>10 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">

        <p>فاش كاتلقى خدمة جديدة فالمغرب، أول حاجة غادي تواجهك هو نوع العقد. غالباً غادي يكون CDD ولا CDI. كل واحد عندو مزايا وعيوب، والمهم أنك تفهم الفرق باش تاخد القرار الصحيح.</p>

        <p>هاد المقال غادي يشرح بالتفصيل الفرق بين CDD و CDI فالمغرب 2026. غادي نعرفوك على المدة، الحقوق، التعويضات، وكيفاش تختار النوع المناسب ليك.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">شنو هو CDD؟ (Contrat à Durée Déterminée)</h2>
        <p>CDD هو عقد تحديد المدة. يعني كايكون فيه تاريخ بداية وتاريخ نهاية محددين. كايستخدم للمهام المؤقتة والموسمية. القانون المغربي كايسمح ب 3 أنواع من CDD:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>CDD قصير:</strong> شهر ل 6 شهور، غالباً للمهام الموسمية.</li>
          <li><strong>CDD طويل:</strong> 6 شهور ل 12 شهر، قابل للتجديد مرة وحدة.</li>
          <li><strong>CDD لمهمة محددة:</strong> حتى 3 سنين لمشاريع محددة.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">شنو هو CDI؟ (Contrat à Durée Indéterminée)</h2>
        <p>CDI هو عقد غير محدد المدة. كايبقى ساري حتى يقرر الأجير ولا المشغل إنهاؤه. هذا هو العقد الأكثر شيوعاً والأكثر أماناً. فالقانون المغربي، CDI هو القاعدة، CDD هو الاستثناء.</p>

        <h2 className="text-2xl font-bold text-gray-900">الفرق بين CDD و CDI فالمغرب 2026</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b px-4 py-2 text-right font-medium">المعيار</th>
                <th className="border-b px-4 py-2 text-right font-medium">CDD</th>
                <th className="border-b px-4 py-2 text-right font-medium">CDI</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border-b px-4 py-2">المدة</td><td className="border-b px-4 py-2">محددة من البداية</td><td className="border-b px-4 py-2">غير محددة</td></tr>
              <tr><td className="border-b px-4 py-2">الاستقرار</td><td className="border-b px-4 py-2">منخفض</td><td className="border-b px-4 py-2">عالي</td></tr>
              <tr><td className="border-b px-4 py-2">التجديد</td><td className="border-b px-4 py-2">مرة وحدة كحد أقصى</td><td className="border-b px-4 py-2">غير مطلوب</td></tr>
              <tr><td className="border-b px-4 py-2">تعويض الفصل</td><td className="border-b px-4 py-2">فقط إذا فصلك قبل المدة</td><td className="border-b px-4 py-2">نعم (حسب الأقدمية)</td></tr>
              <tr><td className="border-b px-4 py-2">القروض</td><td className="border-b px-4 py-2">صعب</td><td className="border-b px-4 py-2">سهل</td></tr>
              <tr><td className="border-b px-4 py-2">التطور المهني</td><td className="border-b px-4 py-2">محدود</td><td className="border-b px-4 py-2">مستمر</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">مزايا وعيوب كل عقد</h2>

        <h3 className="text-xl font-bold text-gray-900">مزايا CDD</h3>
        <ul className="list-disc space-y-2 pr-6">
          <li>دخول سريع لسوق الشغل.</li>
          <li>فرصة لاكتساب الخبرة.</li>
          <li>مرونة فالتجربة (تقدر تجرب الشركة والعكس).</li>
          <li>غالباً الأجر ف CDD كايكون مقارب ل CDI.</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900">عيوب CDD</h3>
        <ul className="list-disc space-y-2 pr-6">
          <li>عدم الاستقرار: كل ما كاينتهي العقد، خاصك تبحث على خدمة جديدة.</li>
          <li>صعوبة فالحصول على القروض البنكية.</li>
          <li>التطور الوظيفي محدود.</li>
          <li>التأمين على البطالة (CNSS) كايكون أقل.</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900">مزايا CDI</h3>
        <ul className="list-disc space-y-2 pr-6">
          <li>الأمان الوظيفي والاستقرار.</li>
          <li>تسهيل القروض (Credits immobiliers, crédits auto).</li>
          <li>التطور المهني المستمر ف نفس الشركة.</li>
          <li>تعويضات الفصل حسب الأقدمية.</li>
          <li>التأمين على البطالة (CNSS) منتظم.</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900">عيوب CDI</h3>
        <ul className="list-disc space-y-2 pr-6">
          <li>صعوبة فالتغيير: فاش كاتقيد بشركة، كايكون صعب تبدل.</li>
          <li>مدة الإخطار (Préavis) طويلة فاش باغي تستقيل.</li>
          <li>الالتزام الطويل المدى.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">كيفاش تحول CDD ل CDI؟</h2>
        <p>القانون المغربي كايعطيك الحق ف التحويل من CDD ل CDI فالحالات التالية:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li>بعد 24 شهر من CDD متجدد.</li>
          <li>إذا بقيتي ف الخدمة 30 يوم بعد انتهاء CDD والمشغل ما جددش العقد.</li>
          <li>إذا كان CDD باش تحل محل أجير غائب ورجع الأجير الأصلي، يمكن يتحول العقد ل CDI بعد 12 شهر.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">شنو كايقول القانون المغربي؟</h2>
        <p>مدونة الشغل المغربية (القانون 65-99) كاتنظم عقود العمل. أهم النقاط:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li>CDD أقصى مدة: 12 شهر قابل للتجديد مرة وحدة (24 شهر).</li>
          <li>CDI هو العقد الافتراضي: إذا ما كتبش نوع العقد، كايتعتبر CDI.</li>
          <li>CDD خاصو يكون مكتوب: إذا ما كانش مكتوب، كايتعتبر CDI.</li>
          <li>فترة التجربة: 3 شهور للأطر، 1.5 شهر لغير الأطر.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">أيهما تختار؟</h2>
        <p>الجواب كايعتمد على وضعيتك:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>إذا كنت خريج جديد:</strong> CDD يمكن يكون فرصة للبداية. ولكن استمر فالبحث على CDI.</li>
          <li><strong>إذا كنت عندك عائلة والتزامات:</strong> CDI هو الأفضل للاستقرار.</li>
          <li><strong>إذا كنت باغي تسافر ولا نكمل الدراسات:</strong> CDD يمكن يكون أكثر مرونة.</li>
          <li><strong>إذا كنت باغي تبدل الخدمة:</strong> CDI مع شركة جديدة هو الأفضل.</li>
        </ul>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">ختاما</h2>
        <p>فهم الفرق بين CDD و CDI هو أول خطوة باش تحمي حقوقك فسوق الشغل. كل عقد عندو وظيفتو. المهم أنك تكون واعي بالمزايا والعيوب باش تاخد القرار المناسب لوضعيتك. ف 2026، سوق الشغل فالمغرب كايولي أكثر مرونة، ولكن CDI باقي هو المعيار ديال الأمان.</p>

      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          {"اقرا أيضا: "}
          <Link href="/emplois/guides/droits-salarie-maroc" className="text-emerald-600 underline hover:text-emerald-800">حقوق الأجير في القانون المغربي</Link>
          {" | "}
          <Link href="/emplois/guides/types-contrats-travail-maroc" className="text-emerald-600 underline hover:text-emerald-800">أنواع عقود العمل</Link>
          {" | "}
          <Link href="/salary-calculator" className="text-emerald-600 underline hover:text-emerald-800">احسب راتبك الصافي</Link>
        </p>
      </div>
    </article>
  );
}
