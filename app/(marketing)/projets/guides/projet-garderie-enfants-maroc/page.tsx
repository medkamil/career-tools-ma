import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "مشروع حضانة الأطفال (Crèche) في المغرب: دليل كامل 2026",
  description:
    "دليل شامل لمشروع حضانة الأطفال فالمغرب: الشروط القانونية، التراخيص، التجهيزات، التكاليف من 30,000 درهم، والأرباح المتوقعة. كل ما تحتاج لبدء مشروع حضانة ناجح.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "مشروع حضانة الأطفال (Crèche) في المغرب: دليل كامل 2026",
  description:
    "دليل شامل لمشروع حضانة الأطفال (crèche) في المغرب: الشروط القانونية، التراخيص، التجهيزات، التكاليف، والأرباح المتوقعة.",
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
      name: "مشروع حضانة الأطفال فالمغرب",
      item: "https://tawdifpro.ma/projets/guides/projet-garderie-enfants-maroc",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هي الشروط القانونية لفتح حضانة أطفال (Crèche) فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الشروط: الحصول على ترخيص من وزارة التنمية الاجتماعية (Direction de la Femme et de la Famille)، التسجيل فـ Registre de Commerce، Patente، CNSS، شهادة السكنى (habitation) مطابقة للمعايير، شهادة طبية للمربية، contrat de travail مع الموظفات. nécessaire aussi respecter les normes de sécurité.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هو رأس المال المطلوب لفتح حضانة فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "رأس المال كيبدا من 80,000 MAD لـ 200,000 MAD حسب حجم الحضانة. البداية الصغيرة فدار (crèche familiale) 80,000 - 120,000 MAD. الحضانة المتوسطة فمحل 150,000 - 250,000 MAD. الحضانة الكبيرة (2 - 3 أقسام) 300,000 MAD وأكثر.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي التجهيزات الأساسية للحضانة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التجهيزات: أسرة نوم (lits bébés) 500 - 1,500 MAD للقطعة، مقاعد أطفال (chaises hautes)، طاولات أنشطة، لعب تعليمية (jeux éducatifs)، كتب للأطفال، مطبخ صغير، أدوات النظافة والتغيير، système de sécurité (caméras, protections des prises).",
      },
    },
    {
      "@type": "Question",
      name: "واش مشروع الحضانة مربح فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ايوه مربح. ked rates: 800 - 2,000 MAD شهرياً لكل طفل. إذا عندك 15 طفل شهرياً = 12,000 - 30,000 MAD فالشهر. الحضانة المتوسطة (20 - 25 طفل) = 24,000 - 50,000 MAD شهرياً. هامش الربح 30% - 45%. العائد على الاستثمار فـ 1.5 - 3 سنوات.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي معايير الأمن والسلامة فالحضانة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "معايير السلامة: المخرج فـ حالة الطوارئ (sortie de secours)، طفاية حريق (extincteur)، حماية مقابس الكهرباء، عدم وجود زوايا حادة، ألعاب آمنة ومعقمة، système de vidéosurveillance، و présence d'un personnel qualifié (certificat de secourisme).",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي السنوات المقبولة فالحضانة فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الحضانة فالمغرب كتستقبل الأطفال من 3 أشهر لـ 4 سنوات. التقسيم: قسم الرضع (3 - 12 شهر)، قسم الأطفال الصغار (1 - 2 سنة)، قسم ما قبل التمدرس (2 - 4 سنوات). وزارة الأسرة كتنظم هاد التقسيم.",
      },
    },
    {
      "@type": "Question",
      name: "واش كتحتاج شهادة فـ تربية الأطفال باش تفتح حضانة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "شهادة معينة ما كتطلبش قانونياً، ولكن nécessaire أن تكون عندك خبرة مع الأطفال. بزاف من الولايات كيطلبوا attestation de formation فـ éducation préscolaire. الشهادات لي كتفيد: Diplôme d'éducatrice de jeunes enfants، formation فـ petite enfance، شهادات الإسعافات الأولية.",
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
            مشروع حضانة الأطفال فالمغرب
          </span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900">
          مشروع حضانة الأطفال (Crèche) في المغرب: دليل كامل 2026
        </h1>

        <div className="mt-8 space-y-6 text-base leading-7 text-gray-700">
          <p className="text-lg font-medium text-emerald-700">
            مشروع الحضانة (crèche أو garderie) من المشاريع الخدماتية
            المربحة فالمغرب، خصوصاً مع زيادة عدد الأمهات العاملات. فهاد
            الدليل، غادي نعرفك على الشروط، التراخيص، التكاليف، وكيفاش
            تدير حضانة ناجحة.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            لماذا مشروع الحضانة فالمغرب؟
          </h2>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>طلب متزايد:</strong> النساء المغربيات كيدخلو
              سوق الشغل بزاف. الحاجة لـ crèche كتزيد كل عام.
            </li>
            <li>
              <strong>دخل ثابت:</strong> الأشهرية (subscription)
              كتضمن دخل منتظم.
            </li>
            <li>
              <strong>هامش ربح جيد:</strong> المصاريف التشغيلية
              معقولة مقارنة بالمداخيل.
            </li>
            <li>
              <strong>استثمار ذو معنى:</strong> كتخدم فـ éducation
              des enfants وكتساعد العائلات.
            </li>
            <li>
              <strong>قابلية التوسع:</strong> من حضانة صغيرة لـ réseau
              de crèches.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            الأنواع المختلفة للحضانات فالمغرب
          </h2>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>Crèche familiale (حضانة عائلية):</strong> فدار
              كبيرة، 5 - 8 أطفال. nécessite ترخيص من السلطات
              المحلية.
            </li>
            <li>
              <strong>Crèche collective (حضانة جماعية):</strong> فمحل
              تجاري، 15 - 30 طفل. كتحتاج équipe pédagogique كاملة.
            </li>
            <li>
              <strong>Crèche d'entreprise:</strong> تابعة لشركة
              كبيرة لموظفاتها.
            </li>
            <li>
              <strong>Jardin d'enfants (روضة):</strong> لـ 2 - 4
              سنوات، فيها أنشطة تعليمية أكثر.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            الشروط القانونية والتراخيص
          </h2>
          <p>
            فتح حضانة فالمغرب كيطلب إجراءات قانونية محددة:
          </p>
          <ol className="list-decimal space-y-2 pr-6">
            <li>
              <strong>ترخيص من وزارة التنمية الاجتماعية:</strong>{" "}
              Direction de la Femme et de la Famille فمدينتك.
              nécessaire تقديم ملف كامل.
            </li>
            <li>
              <strong>Registre de Commerce:</strong> السجل التجاري
              للنشاط.
            </li>
            <li>
              <strong>Patente:</strong> taxe professionnelle.
            </li>
            <li>
              <strong>CNSS:</strong> تسجيل المربيات والموظفات.
            </li>
            <li>
              <strong>شهادة المطابقة:</strong> من الجماعة (commune)
              باش تتأكد أن المحل كيتوفر على شروط الأمن والسلامة.
            </li>
            <li>
              <strong>شهادة طبية:</strong> للمربية (صحة نفسية
              وجسدية).
            </li>
            <li>
              <strong>Assurance:</strong> تأمين المسؤولية المدنية
              ضروري.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900">
            متطلبات المحل والمساحة
          </h2>
          <p>
            وزارة الأسرة كتحدد شروط معينة فالمساحة والتجهيزات:
          </p>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>مساحة:</strong> 4 - 5 متر مربع لكل طفل.
            </li>
            <li>
              <strong>موقع:</strong> الدور الأرضي (rez-de-chaussée)
              أو طابق واحد مع مصعد.
            </li>
            <li>
              <strong>تهوية:</strong> nécessite fenêtres واسعة
              وتهوية طبيعية.
            </li>
            <li>
              <strong>نظافة:</strong> حمام مناسب للأطفال (تواليت
              صغير).
            </li>
            <li>
              <strong>مطبخ:</strong> لإعداد الوجبات.
            </li>
            <li>
              <strong>حديقة أو فناء:</strong> للعب الخارجي (اختياري
              لكن مفيد).
            </li>
            <li>
              <strong>مخرج طوارئ:</strong> sortie de secours ضروري.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            التكاليف التقريبية للمشروع
          </h2>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>كراء المحل:</strong> 3,000 - 10,000 MAD شهرياً
              (حسب المدينة والمساحة)
            </li>
            <li>
              <strong>تهيئة المحل:</strong> 30,000 - 80,000 MAD
              (دهان، أرضيات، حمامات)
            </li>
            <li>
              <strong>التجهيزات:</strong> 40,000 - 100,000 MAD
              <ul className="mr-4 mt-1 list-circle space-y-1">
                <li>أسرة نوم: 10,000 - 20,000 MAD</li>
                <li>ألعاب تعليمية: 10,000 - 25,000 MAD</li>
                <li>مطبخ + أدوات: 10,000 - 20,000 MAD</li>
                <li>أثاث (طاولات، كراسي): 10,000 - 25,000 MAD</li>
                <li>كاميرات مراقبة: 5,000 - 10,000 MAD</li>
              </ul>
            </li>
            <li>
              <strong>التراخيص والإجراءات:</strong> 5,000 - 15,000
              MAD
            </li>
            <li>
              <strong>التسويق:</strong> 5,000 - 10,000 MAD فالشهر
              الأول
            </li>
            <li>
              <strong>رأس المال العامل:</strong> 20,000 - 40,000
              MAD (لمدة 3 أشهر)
            </li>
            <li>
              <strong>المجموع التقريبي:</strong> 100,000 - 280,000
              MAD
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            الإيرادات والأرباح المتوقعة
          </h2>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>التسعيرة الشهرية لكل طفل:</strong> 800 - 2,000
              MAD (حسب الخدمات والمدينة)
            </li>
            <li>
              <strong>عدد الأطفال:</strong> 15 - 25 طفل
            </li>
            <li>
              <strong>الإيرادات الشهرية:</strong> 12,000 - 50,000
              MAD
            </li>
            <li>
              <strong>المصاريف الشهرية:</strong> 8,000 - 20,000 MAD
              (الكراء، الرواتب، الأكل، الكهرباء)
            </li>
            <li>
              <strong>صافي الربح الشهري:</strong> 5,000 - 30,000
              MAD
            </li>
            <li>
              <strong>الخدمات الإضافية:</strong> أنشطة extra (موسيقى،
              رياضة) 200 - 500 MAD إضافي لكل طفل
            </li>
            <li>
              <strong>العائد على الاستثمار:</strong> 1.5 - 3 سنوات
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            التوظيف والموارد البشرية
          </h2>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>المربية الرئيسية:</strong> 3,500 - 6,000 MAD
              شهرياً
            </li>
            <li>
              <strong>المربية المساعدة:</strong> 2,500 - 4,000 MAD
              شهرياً
            </li>
            <li>
              <strong>عاملة النظافة:</strong> 2,000 - 3,000 MAD
              شهرياً
            </li>
            <li>
              <strong>طباخة (اختياري):</strong> 2,500 - 4,000 MAD
              شهرياً
            </li>
            <li>
              <strong>النسبة القانونية:</strong> مربية وحدة لكل 5
              أطفال
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            استراتيجية التسويق
          </h2>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>Google My Business:</strong> أول حاجة. الأمهات
              كيدورو على "crèche près de moi" فـ Google.
            </li>
            <li>
              <strong>Facebook et Instagram:</strong> صور الأنشطة،
              شهادات الأمهات، عروض التسجيل.
            </li>
            <li>
              <strong>الموقع الجغرافي:</strong> حضانتك فـ حي سكني
              = زبناء قريبين. وزع flyers فـ الحي.
            </li>
            <li>
              <strong>Journées portes ouvertes:</strong> دع الأمهات
              يزورو الحضانة ويتعرفو على الخدمات.
            </li>
            <li>
              <strong>Parrainage:</strong> أمهات الراضيات كيجيبو
              أمهات أخريات. قدم خصم للـ parrainage.
            </li>
            <li>
              <strong>WhatsApp:</strong> مجموعة واتساب للأمهات
              باش تنشر الصور والمستجدات.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            نصائح للنجاح
          </h2>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>السلامة أولاً:</strong> استثمر فـ sécurité.
              الأمهات كيقلقو على ولادهم. كاميرات وتدابير سلامة ضرورية.
            </li>
            <li>
              <strong>النظافة:</strong> حضانة نظيفة = سمعة مزيانة.
              تنظيف يومي وتعقيم دوري.
            </li>
            <li>
              <strong>التواصل مع الأمهات:</strong> صور وفيديوهات
              يومية د الأطفال. تطبيقات تواصل مثل Kidizz كتساعد.
            </li>
            <li>
              <strong>برنامج تعليمي:</strong> ما تبقاش مجرد
              garderie. قدم أنشطة تعليمية (jeux éducatifs).
            </li>
            <li>
              <strong>التكوين المستمر:</strong> دورات فـ éducation
              préscolaire و first aid.
            </li>
            <li>
              <strong>التخصص:</strong> مثلاً، حضانة متخصصة فـ
              Montessori ou pédagogie active.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            الأسئلة الشائعة (FAQ)
          </h2>

          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                الشروط القانونية لفتح حضانة؟
              </h3>
              <p className="mt-1">
                ترخيص من وزارة التنمية الاجتماعية، RC، Patente،
                CNSS، شهادة مطابقة، تأمين مسؤولية مدنية.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                رأس المال المطلوب؟
              </h3>
              <p className="mt-1">
                80,000 - 200,000 MAD للبداية الصغيرة، 200,000 -
                300,000 MAD للحضانة المتوسطة.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                التجهيزات الأساسية؟
              </h3>
              <p className="mt-1">
                أسرة، مقاعد، ألعاب تعليمية، أدوات نظافة، كاميرات،
                مطبخ صغير. كلشي للأطفال.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                واش الحضانة مربحة؟
              </h3>
              <p className="mt-1">
                ايوه. 12,000 - 50,000 MAD شهرياً. هامش الربح 30% -
                45%. ROI فـ 1.5 - 3 سنوات.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                معايير الأمن والسلامة؟
              </h3>
              <p className="mt-1">
                مخرج طوارئ، طفاية حريق، حماية المقابس، كاميرات،
                ألعاب آمنة، موظفين مدربين على first aid.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                السنوات المقبولة فالحضانة؟
              </h3>
              <p className="mt-1">
                من 3 أشهر لـ 4 سنوات. مقسمة لقسم الرضع، قسم
                الصغار، قسم ما قبل التمدرس.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                واش كتحتاج شهادة معينة؟
              </h3>
              <p className="mt-1">
                شهادة ملزمة ما كتطلبش، ولكن خبرة مع الأطفال
                ضرورية. شهادات فـ éducation préscolaire كتفيد.
              </p>
            </div>
          </div>

          <p className="rounded-lg bg-emerald-50 p-4 text-emerald-800">
            <strong>نصيحة Tawdif Pro:</strong> ابدا صغير (crèche
            familiale) فدارك أو فمحل صغير، ركز على الجودة والسلامة،
            وابن سمعتك. الأمهات لي كيتعودو على خدمتك غادي يجيبو
            الأمهات الأخريات.
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
