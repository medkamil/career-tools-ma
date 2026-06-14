import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "مشروع شركة التنظيف في المغرب: خطوات وتكاليف 2026",
  description:
    "دليل شامل لمشروع شركة التنظيف فالمغرب: التكاليف، التجهيزات، التراخيص، استراتيجية التسويق، والأرباح المتوقعة. كل ما تحتاج لبدء مشروع خدمات التنظيف الخاص بك.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "مشروع شركة التنظيف في المغرب: خطوات وتكاليف 2026",
  description:
    "دليل شامل لمشروع شركة التنظيف في المغرب: التكاليف، التجهيزات، التراخيص، stratégie marketing، والأرباح المتوقعة.",
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
      name: "مشروع شركة التنظيف في المغرب",
      item: "https://tawdifpro.ma/projets/guides/projet-service-nettoyage-maroc",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هو رأس المال المطلوب لبدء مشروع شركة تنظيف فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "رأس المال المطلوب كيبدا من 50,000 MAD لـ 150,000 MAD حسب حجم المشروع. للبداية الصغيرة (nettoyage résidentiel) 50,000 MAD كافية. للشركة المتوسطة (nettoyage professionnel + bureaux) 100,000 - 150,000 MAD.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي التراخيص اللازمة لمشروع التنظيف فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التراخيص المطلوبة: Registre de Commerce (السجل التجاري)، Patente، inscription à la CNSS، التأمين (assurance responsabilité civile). إذا خدمتي مع شركات كبيرة، كيطلبوك حتى attestation de qualification.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي التجهيزات الأساسية لشركة التنظيف؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التجهيزات: آلة التنظيف بالبخار (nettoyeur vapeur) من 5,000 لـ 15,000 MAD، مكنسة صناعية (aspirateur industriel) 3,000 - 8,000 MAD، مواد التنظيف الاحترافية، سيارة صغيرة للنقل، ومعدات السلامة (gants, masques).",
      },
    },
    {
      "@type": "Question",
      name: "واش مشروع التنظيف مربح فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ايوه بزاف. هامش الربح كيوصل لـ 30% - 50%. الخدمات السكنية (maisons, appartements) كتجيب 300 - 800 MAD لكل تدخلة. الخدمات المهنية (bureaux, magasins) 1,500 - 5,000 MAD شهرياً لكل عميل. العائد على الاستثمار (ROI) فـ 6 - 12 شهر.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نجيب الزبناء لشركة التنظيف؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "استراتيجيات فعالة: الإعلان فـ Facebook و Instagram (استهدف المنطقة ديالك)، توزيع flyers فـ الأحياء الراقية، التعاقد مع agences immobilières (كيحتاجو تنظيف após chaque location)، العروض الترويجية للزبناء الجدد، و Google My Business.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي الخدمات لي كتقدمها شركة التنظيف؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الخدمات: nettoyage résidentiel (منازل، شقق)، nettoyage professionnel (مكاتب، محلات)، nettoyage après construction (تنظيف بعد البناء)، nettoyage des tapis et moquettes، تنظيف الواجهات الزجاجية، و خدمات التعقيم (désinfection).",
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
            مشروع شركة التنظيف في المغرب
          </span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900">
          مشروع شركة التنظيف في المغرب: خطوات وتكاليف 2026
        </h1>

        <div className="mt-8 space-y-6 text-base leading-7 text-gray-700">
          <p className="text-lg font-medium text-emerald-700">
            مشروع شركة التنظيف (société de nettoyage) من أحسن المشاريع
            الخدماتية فالمغرب فـ 2026. الطلب كبير، التكاليف معقولة، والأرباح
            مضمونة إذا عرفتي تديريها مزيان. فهاد الدليل، غادي نعطيك كلشي
            من التأسيس لـ stratégie marketing.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            الوصف العام للمشروع
          </h2>
          <p>
            مشروع شركة التنظيف هو entreprise de services كتقدم خدمات التنظيف
            والتعقيم للأفراد والشركات. هاد السوق فالمغرب كيعرف نمو كبير،
            خصوصاً بعد COVID-19 حيث الناس والشركات ولاو كيهتمو أكثر
            بالنظافة والتعقيم. الطلب كاين سواء فالمدن الكبيرة (الدار البيضاء،
            الرباط، مراكش، طنجة) أو حتى فالمدن الصغيرة.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            أنواع خدمات التنظيف
          </h2>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>Nettoyage résidentiel:</strong> تنظيف المنازل، الفيلات،
              والشقق. الخدمة كتكون إما بشكل منتظم (أسبوعي/شهري) أو عند
              الحاجة.
            </li>
            <li>
              <strong>Nettoyage de bureaux:</strong> الشركات والمكاتب
              كيحتاجو تنظيف يومي أو أسبوعي. هادا secteur مربح بزاف كيجيب
              d'hébergement régulier.
            </li>
            <li>
              <strong>Nettoyage après construction:</strong> بعد ما تكمّل
              البناء، كاين حاجة لـ nettoyage عميق. هاد الخدمة كتكون agréée
              ومربحة.
            </li>
            <li>
              <strong>Nettoyage des tapis et moquettes:</strong> خدمات
              متخصصة فـ nettoyage à vapeur.
            </li>
            <li>
              <strong>Désinfection:</strong> تعقيم المساحات (devenu très
              demandé).
            </li>
            <li>
              <strong>Nettoyage de vitres:</strong> تنظيف الواجهات
              الزجاجية للمباني والمحلات.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            التكاليف التقريبية للمشروع
          </h2>
          <p>التكاليف كتختلف حسب حجم المشروع. هاد جدول تقريبي:</p>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>التجهيزات (Équipements):</strong> 30,000 - 80,000 MAD
              <ul className="mr-4 mt-1 list-circle space-y-1">
                <li>آلة التنظيف بالبخار: 5,000 - 15,000 MAD</li>
                <li>مكنسة صناعية: 3,000 - 8,000 MAD</li>
                <li>معدات التنظيف اليدوية: 2,000 - 5,000 MAD</li>
                <li>منتجات التنظيف الاحترافية: 3,000 - 10,000 MAD</li>
              </ul>
            </li>
            <li>
              <strong>النقل:</strong> 50,000 - 100,000 MAD (سيارة مستعملة
              صغيرة)
            </li>
            <li>
              <strong>التراخيص والإجراءات:</strong> 5,000 - 10,000 MAD
            </li>
            <li>
              <strong>التأمين:</strong> 3,000 - 8,000 MAD سنوياً
            </li>
            <li>
              <strong>التسويق:</strong> 5,000 - 15,000 MAD فالشهر الأول
            </li>
            <li>
              <strong>المجموع التقريبي:</strong> 50,000 - 150,000 MAD
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            التراخيص والإجراءات القانونية
          </h2>
          <p>
            باش تكون شركتك قانونية، لازم تستوفي هاد الإجراءات:
          </p>
          <ol className="list-decimal space-y-2 pr-6">
            <li>
              <strong>Registre de Commerce:</strong> سجل شركتك فـ Registre
              de Commerce فالمحكمة التجارية ديال مدينتك.
            </li>
            <li>
              <strong>Patente:</strong> سجل فـ taxe professionnelle.
            </li>
            <li>
              <strong>CNSS:</strong> سجل الموظفين فـ الصندوق الوطني
              للضمان الاجتماعي.
            </li>
            <li>
              <strong>Assurance:</strong> تأمين المسؤولية المدنية
              (responsabilité civile) ضروري باش تحمي الشركة فحالة
              الضرر.
            </li>
            <li>
              <strong>ICE:</strong> الحصول على Identifiant Commun
              d'Entreprise.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900">
            استراتيجية التسويق (Marketing)
          </h2>
          <p>
            التسويق هو المفتاح باش تجيب الزبناء. هاد الاستراتيجيات
            جربانة وفعالة:
          </p>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>Google My Business:</strong> سجل شركتك فـ Google
              Maps. 80% د الناس كيدورو على خدمات التنظيف فـ Google.
            </li>
            <li>
              <strong>Facebook et Instagram:</strong> أنشئ صفحة، انشر
              صور قبل/بعد، اعرض عروضك. استهدف الناس فمدينتك.
            </li>
            <li>
              <strong>Agences immobilières:</strong> تعاقد مع وكالات
              العقار. كيحتاجو تنظيف بين كل كراء وكراء.
            </li>
            <li>
              <strong>Flyers:</strong> وزع flyers فـ الأحياء الراقية
              والمكاتب.
            </li>
            <li>
              <strong>Parrainage:</strong> قدم خصم للزبناء لي كيجيبو
              زبناء جدد.
            </li>
            <li>
              <strong>Site web:</strong> موقع بسيط مع portfolio ومعرض
              للخدمات.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            الأرباح المتوقعة
          </h2>
          <p>
            الأرباح كتختلف حسب حجم النشاط وعدد الزبناء:
          </p>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>الخدمات السكنية:</strong> 300 - 800 MAD لكل منزل.
              إذا خدمتي 4 منازل فالشهر = 1,200 - 3,200 MAD
            </li>
            <li>
              <strong>الخدمات المهنية:</strong> 1,500 - 5,000 MAD شهرياً
              لكل مكتب. إذا عندك 5 مكاتب = 7,500 - 25,000 MAD شهرياً
            </li>
            <li>
              <strong>Nettoyage après construction:</strong> 2,000 -
              10,000 MAD لكل مشروع
            </li>
            <li>
              <strong>المجموع الشهري التقريبي:</strong> 15,000 - 50,000
              MAD
            </li>
            <li>
              <strong>صافي الربح (بعد المصاريف):</strong> 40% - 50% من
              المداخيل
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            نصائح للنجاح
          </h2>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>الجودة فوق كلشي:</strong> زبون واحد راضي كيجيب 10
              زبناء جدد. استثمر فـ qualité de service.
            </li>
            <li>
              <strong>استخدم منتجات احترافية:</strong> المنتجات
              المنزلية ما كتكفيش. استثمر فـ produits professionnels.
            </li>
            <li>
              <strong>درب الموظفين:</strong> الموظف لي عندو تكوين كيخدم
              أحسن بزاف من لي ما عندوش.
            </li>
            <li>
              <strong>التزم بالمواعيد:</strong> الـ ponctualité مهمة
              جداً فهاد المجال.
            </li>
            <li>
              <strong>قدم ضمان:</strong> إذا الزبون ما رضيش، قدم خدمة
              مجانية تانية. هادا كيبني السمعة.
            </li>
            <li>
              <strong>تنوع فـ الخدمات:</strong> ما تبقاش مقتصر على
              التنظيف فقط. زيد désinfection، تنظيف السجاد، وغسيل
              النوافذ.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            الأسئلة الشائعة (FAQ)
          </h2>

          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                شنو هو رأس المال المطلوب؟
              </h3>
              <p className="mt-1">
                كيبدا من 50,000 MAD للبداية الصغيرة (nettoyage
                résidentiel) و 150,000 MAD للشركة المتوسطة (خدمات
                مهنية + سكنية).
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                شنو هي التراخيص اللازمة؟
              </h3>
              <p className="mt-1">
                Registre de Commerce، Patente، CNSS، تأمين
                responsabilité civile. للشركات الكبيرة، posible
                كيطلبوك attestation de qualification.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                التجهيزات الأساسية شنو هي؟
              </h3>
              <p className="mt-1">
                آلة بخار (5,000 - 15,000 MAD)، مكنسة صناعية (3,000 -
                8,000 MAD)، مواد تنظيف احترافية، سيارة، ومعدات
                السلامة.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                واش المشروع مربح؟
              </h3>
              <p className="mt-1">
                هامش الربح 30% - 50%. العائد على الاستثمار فـ 6 - 12
                شهر. المداخيل الشهرية 15,000 - 50,000 MAD حسب عدد
                الزبناء.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                كيفاش نجيب الزبناء؟
              </h3>
              <p className="mt-1">
                Google My Business، Facebook/Instagram، agences
                immobilières، flyers، parrainage. الجودة العالية هي
                أحسن إعلان.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                شنو الخدمات لي نقدمها؟
              </h3>
              <p className="mt-1">
                خدمات سكنية، مهنية، بعد البناء، تنظيف سجاد، تنظيف
                واجهات، تعقيم. التنوع كيزيد فرص الربح.
              </p>
            </div>
          </div>

          <p className="rounded-lg bg-emerald-50 p-4 text-emerald-800">
            <strong>نصيحة Tawdif Pro:</strong> ابدا صغير (nettoyage
            résidentiel)، جمع portfolio قوي، وبعدها توسع للخدمات المهنية.
            السمعة فهاد المجال هي كلشي.
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
