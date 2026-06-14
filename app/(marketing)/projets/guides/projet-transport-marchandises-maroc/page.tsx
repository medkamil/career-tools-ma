import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "مشروع نقل البضائع في المغرب: شروط وتراخيص 2026",
  description:
    "دليل متكامل لمشروع نقل البضائع فالمغرب: شروط الحصول على التراخيص، أنواع المركبات، تكاليف التأسيس، وأرباح نقل البضائع. كل ما تحتاج لبدء مشروع النقل.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "مشروع نقل البضائع في المغرب: شروط وتراخيص 2026",
  description:
    "دليل متكامل لمشروع نقل البضائع في المغرب: شروط الحصول على التراخيص، أنواع المركبات، تكاليف التأسيس، وأرباح نقل البضائع.",
  author: { "@type": "Person", name: "Tawdif Pro" },
  publisher: {
    "@type": "Organization",
    name: "Tawdif Pro",
    logo: {
      "@type": "ImageObject",
      url: "https://tawdifpro.ma/logo.png",
    },
  },
  datePublished: "2026-06-01",
  dateModified: "2026-06-14",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://tawdifpro.ma" },
    { "@type": "ListItem", position: 2, name: "قسم المشاريع", item: "https://tawdifpro.ma/projets" },
    {
      "@type": "ListItem",
      position: 3,
      name: "مشروع نقل البضائع في المغرب",
      item: "https://tawdifpro.ma/projets/guides/projet-transport-marchandises-maroc",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هي شروط الحصول على ترخيص نقل البضائع فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الشروط: أن تكون مسجلاً فـ Registre de Commerce، الحصول على Patente، سجل فـ CNSS، الحصول على attestation de capacité professionnelle (شهادة الكفاءة المهنية)، وثائق المركبة (carte grise professionnelle)، والتأمين المهني (assurance transport).",
      },
    },
    {
      "@type": "Question",
      name: "شنو هو رأس المال المطلوب لمشروع نقل البضائع؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "رأس المال كيبدا من 150,000 MAD لسيارة صغيرة (Camionnette) و 500,000 MAD لشاحنة كبيرة (Camion poids lourd). للشركات المتوسطة مع 3 شاحنات، كتحتاج 1,000,000 - 2,000,000 MAD. التمويل البنكي متاح بشرط توفر 20-30% من رأس المال.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي المستندات المطلوبة لنقل البضائع؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "المستندات: Registre de Commerce، Patente، ICE، CNSS، attestation d'assurance، carte grise professionnelle، attestation de capacité professionnelle، وcontrats de transport مع الزبناء.",
      },
    },
    {
      "@type": "Question",
      name: "واش مشروع نقل البضائع مربح فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ايوه مربح. الإيرادات الشهرية لشاحنة صغيرة 15,000 - 30,000 MAD، للشاحنة الكبيرة 40,000 - 70,000 MAD. هامش الربح الصافي 25% - 40%. العائد على الاستثمار (ROI) فـ 2 - 4 سنوات حسب نوع المركبة والنشاط.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي أنواع تراخيص نقل البضائع فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التراخيص: Licence de transport national للداخلي، Licence de transport international للدولي (nécessite accord TIR)، Autorisation spéciale للمواد الخطرة (produits dangereux)، وAutorisation de transport frigorifique للمواد الغذائية (chaîne du froid).",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي أفضل المدن لبدء مشروع نقل البضائع فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أحسن المدن: الدار البيضاء (أكبر مركز اقتصادي)، طنجة (الميناء والمنطقة الحرة)، الدار البيضاء - الجديدة (الميناء)، مراكش (السياحة والتجارة)، وفاس - مكناس (المركز التجاري). المناطق الصناعية والمناطق الحرة كتكون فرص كبيرة.",
      },
    },
  ],
};

export default function ProjetsGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-emerald-600">
            الرئيسية
          </Link>{" "}
          ›{" "}
          <Link href="/projets" className="hover:text-emerald-600">
            المشاريع
          </Link>{" "}
          ›{" "}
          <span className="text-gray-900">
            مشروع نقل البضائع في المغرب
          </span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900">
          مشروع نقل البضائع في المغرب: شروط وتراخيص 2026
        </h1>

        <div className="mt-8 space-y-6 text-base leading-7 text-gray-700">
          <p className="text-lg font-medium text-emerald-700">
            مشروع نقل البضائع (transport de marchandises) من المشاريع
            الأساسية فالمغرب لي الطلب عليها كايدايم. التجارة الإلكترونية
            والتجارة التقليدية كتحتاج toujours لخدمات النقل. فهاد الدليل،
            غادي نعرفك على الشروط، التراخيص، التكاليف، والأرباح.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            لماذا مشروع نقل البضائع؟
          </h2>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>طلب دائم:</strong> التجارة ما كتوقفش، والنقل ضروري
              ديما
            </li>
            <li>
              <strong>تطور التجارة الإلكترونية:</strong> الناس كتشري
              على الإنترنت وكتحتاج التوصيل
            </li>
            <li>
              <strong>دخل منتظم:</strong> عقود طويلة المدى مع الشركات
            </li>
            <li>
              <strong>إمكانية التوسع:</strong> من شاحنة وحدة لـ flotte
              كاملة
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            أنواع نقل البضائع فالمغرب
          </h2>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>Transport national:</strong> داخل المغرب بين
              المدن. هو الأكثر طلباً.
            </li>
            <li>
              <strong>Transport international:</strong> بين المغرب
              وأوروبا (خاصة إسبانيا وفرنسا) أو إفريقيا
            </li>
            <li>
              <strong>Transport frigorifique:</strong> للمواد الغذائية
              لي كتحتاج التبريد
            </li>
            <li>
              <strong>Transport de produits dangereux:</strong> مواد
              خطرة (كيماويات، غاز)
            </li>
            <li>
              <strong>Transport urbain:</strong> التوصيل داخل المدينة
              (dernier kilomètre)
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            الشروط القانونية والتراخيص
          </h2>
          <p>
            باش تبدا مشروع نقل البضائع فالمغرب، لازم تستوفي هاد الشروط:
          </p>
          <ol className="list-decimal space-y-2 pr-6">
            <li>
              <strong>Registre de Commerce:</strong> سجل شركتك فـ
              المحكمة التجارية. nécessaire اختيار شكل قانوني (SARL،
              Auto-entrepreneur).
            </li>
            <li>
              <strong>Patente:</strong> التسجيل فـ taxe professionnelle
              حسب النشاط.
            </li>
            <li>
              <strong>ICE:</strong> Identifiant Commun d'Entreprise.
            </li>
            <li>
              <strong>CNSS:</strong> تسجيل الموظفين (السائقين، العمال).
            </li>
            <li>
              <strong>Attestation de capacité professionnelle:</strong>{" "}
              شهادة الكفاءة المهنية فـ transport de marchandises.
              كاتخرج من وزارة النقل بعد اجتياز امتحان.
            </li>
            <li>
              <strong>Carte grise professionnelle:</strong> بطاقة
              التسجيل المهنية للمركبة.
            </li>
            <li>
              <strong>Assurance transport:</strong> تأمين مهني خاص
              بنقل البضائع.
            </li>
            <li>
              <strong>Licence de transport:</strong> رخصة النقل (داخلية
              أو دولية حسب النشاط).
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900">
            أنواع المركبات والتكاليف
          </h2>
          <p>اختيار المركبة كيعتمد على نوع النشاط وحجم البضائع:</p>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>Camionnette (4x4/Utilitaire):</strong> سعة 1 -
              3.5 طن. الثمن: 150,000 - 350,000 MAD (مستعمل). مزيانة
              للتوصيل الحضري.
            </li>
            <li>
              <strong>Camion rigide (6x4):</strong> سعة 7 - 15 طن.
              الثمن: 350,000 - 700,000 MAD. للنقل بين المدن.
            </li>
            <li>
              <strong>Semi-remorque (Poids lourd):</strong> سعة 20 -
              25 طن. الثمن: 600,000 - 1,200,000 MAD. للنقل الدولي.
            </li>
            <li>
              <strong>Camion frigorifique:</strong> للتبريد.
              الثمن: 400,000 - 900,000 MAD.
            </li>
            <li>
              <strong>Trois-roues (Tricycle):</strong> 30,000 - 60,000
              MAD. مزيان للبداية فـ التوصيل الصغير.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            المصاريف التشغيلية الشهرية
          </h2>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>الوقود (Carburant):</strong> 8,000 - 25,000 MAD
              شهرياً حسب المسافة
            </li>
            <li>
              <strong>الصيانة:</strong> 2,000 - 8,000 MAD شهرياً
            </li>
            <li>
              <strong>التأمين:</strong> 1,000 - 3,000 MAD شهرياً
            </li>
            <li>
              <strong>أجرة السائق:</strong> 4,000 - 8,000 MAD شهرياً
              (إذا كنتي مشيتي بنفسك، هذا ربح إضافي)
            </li>
            <li>
              <strong>Péage (رسوم الطرق السيارة):</strong> 2,000 -
              6,000 MAD شهرياً
            </li>
            <li>
              <strong>Vignette + visite technique:</strong> 300 - 500
              MAD شهرياً (تقسيم سنوي)
            </li>
            <li>
              <strong>المجموع التقريبي:</strong> 18,000 - 50,000 MAD
              شهرياً
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            الإيرادات والأرباح المتوقعة
          </h2>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>Camionnette (transport urbain):</strong> 150 -
              300 MAD لكل توصيلة. 10 توصيلات فاليوم = 1,500 - 3,000
              MAD. شهرياً: 30,000 - 60,000 MAD
            </li>
            <li>
              <strong>Camion بين المدن:</strong> 3,000 - 8,000 MAD
              لكل رحلة. 5 - 8 رحلات فالشهر = 15,000 - 64,000 MAD
            </li>
            <li>
              <strong>Semi-remorque (international):</strong> 15,000
              - 30,000 MAD لكل رحلة (مثلاً الدار البيضاء - باريس)
            </li>
            <li>
              <strong>صافي الربح الشهري (بعد المصاريف):</strong> 15%
              - 30% من الإيرادات للشاحنات الكبيرة، 30% - 40% للشاحنات
              الصغيرة
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            كيفاش تجيب الزبناء والعقود؟
          </h2>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>التسجيل فـ منصات النقل:</strong> منصات مثل
              TruckMe و Contrat Transport كتربط بين أصحاب الشاحنات
              والزبناء.
            </li>
            <li>
              <strong>التعاقد مع الشركات:</strong> المصانع، المحلات
              الكبيرة، والمستوردين كيحتاجو خدمات نقل منتظمة.
            </li>
            <li>
              <strong>الأسواق (Marchés de gros):</strong> أسواق
              الجملة (الخضروات، الفواكه، السمك) كتحتاج نقل يومي.
            </li>
            <li>
              <strong>التجارة الإلكترونية:</strong> تعاقد مع مواقع
              البيع على الإنترنت (Jumia، Glovo، sites locaux).
            </li>
            <li>
              <strong>الوكالات:</strong> وكالات الشحن (Agences de
              transport) كتكون وسيطة بينك وبين الزبناء.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            نصائح مهمة للنجاح
          </h2>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>الصيانة الدورية:</strong> ما تنتظرش حتى تهدر
              الشاحنة. الصيانة الوقائية كتوفر فلوس بزاف.
            </li>
            <li>
              <strong>التأمين الكامل:</strong> فهاد المجال، الحوادث
              كتوقع. تأمين قوي ضروري.
            </li>
            <li>
              <strong>التنوع:</strong> ما تعتمدش على زبون واحد.
              تنوع فـ الزباين والعقود.
            </li>
            <li>
              <strong>الموثوقية:</strong> التزامك بالمواعيد هو رأس
              مالك الحقيقي. السمعة فهاد المجال مهمة جداً.
            </li>
            <li>
              <strong>تتبع الشاحنات (GPS):</strong> استثمر فـ système
              GPS باش تعرف وين الشاحنة فكل لحظة.
            </li>
            <li>
              <strong>المحاسبة:</strong> حافظ على comptabilité
              منظمة. ضرائب النقل كتكون معقدة شويا.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            التحديات المحتملة وكيفاش تتعامل معاها
          </h2>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>غلاء الوقود:</strong> فالمغرب، أسعار الوقود
              كتتغير باستمرار. حاول تتفاوض على عقود طويلة المدى مع
              الزبناء تشمل تعديل الأسعار.
            </li>
            <li>
              <strong>المنافسة:</strong> السوق فيه منافسة كبيرة. ما
              تنافسش على الثمن فقط، تنافس على الجودة والموثوقية.
            </li>
            <li>
              <strong>البيروقراطية:</strong> الإجراءات الإدارية كتكون
              طويلة. استعد بالصبر واجمع الوثائق من البداية.
            </li>
            <li>
              <strong>حالة الطرق:</strong> بعض المناطق فيها طرق وعرة.
              اختر الشاحنة المناسبة للمنطقة لي غادي تشتغل فيها.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            الأسئلة الشائعة (FAQ)
          </h2>

          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                شروط الحصول على ترخيص نقل البضائع؟
              </h3>
              <p className="mt-1">
                التسجيل فـ Registre de Commerce، Patente، CNSS،
                attestation de capacité professionnelle، carte grise
                professionnelle، التأمين، ورخصة النقل (Licence).
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                رأس المال المطلوب؟
              </h3>
              <p className="mt-1">
                من 150,000 MAD لسيارة صغيرة، 500,000 MAD لشاحنة
                كبيرة، 1,000,000 - 2,000,000 MAD للشركة بـ 3
                شاحنات.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                المستندات المطلوبة شنو هي؟
              </h3>
              <p className="mt-1">
                RC، Patente، ICE، CNSS، assurance، carte grise pro،
                attestation de capacité، عقود النقل.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                واش المشروع مربح؟
              </h3>
              <p className="mt-1">
                الإيرادات 15,000 - 70,000 MAD شهرياً حسب حجم
                الشاحنة. هامش الربح 25% - 40%. ROI فـ 2 - 4 سنين.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                أنواع تراخيص النقل؟
              </h3>
              <p className="mt-1">
                Licence nationale (داخلي)، Licence internationale
                (دولي)، Autorisation spéciale (مواد خطرة)،
                Autorisation frigorifique (تبريد).
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                أفضل المدن للنقل؟
              </h3>
              <p className="mt-1">
                الدار البيضاء، طنجة، الجديدة، مراكش، فاس - مكناس.
                المناطق الصناعية والمناطق الحرة.
              </p>
            </div>
          </div>

          <p className="rounded-lg bg-emerald-50 p-4 text-emerald-800">
            <strong>نصيحة Tawdif Pro:</strong> ابدا بـ Camionnette
            صغيرة (4x4) فمدينتك، تعاقد مع المحلات والتجار، وبعد ما
            تثبت نفسك، وسع لشاحنات أكبر. ولا تنسى التأمين كامل.
          </p>
        </div>

        <div className="mt-8 rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-600">
            📚 اقرأ أيضاً:{" "}
            <Link
              href="/projets/guides/idees-projets-petit-budget-maroc"
              className="text-emerald-600 underline hover:text-emerald-800"
            >
              أفكار مشاريع صغيرة مربحة
            </Link>
            {" | "}
            <Link
              href="/salary-calculator"
              className="text-emerald-600 underline hover:text-emerald-800"
            >
              احسب راتبك الصافي
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
