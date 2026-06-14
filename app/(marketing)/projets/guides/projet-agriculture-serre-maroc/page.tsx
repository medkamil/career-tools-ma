import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "مشروع الزراعة في البيوت المغطاة (Serre) في المغرب 2026",
  description:
    "دليل كامل لمشروع الزراعة في البيوت المغطاة فالمغرب: أنواع البيوت البلاستيكية، التكاليف، المحاصيل الأكثر ربحاً، والأرباح المتوقعة. دراسة جدوى شاملة للمستثمرين.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "مشروع الزراعة في البيوت المغطاة (Serre) في المغرب 2026",
  description:
    "دليل كامل لمشروع الزراعة في البيوت المغطاة (agriculture sous serre) في المغرب: أنواع البيوت، التكاليف، المحاصيل الأكثر ربحاً، والأرباح المتوقعة.",
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
      name: "مشروع الزراعة في البيوت المغطاة فالمغرب",
      item: "https://tawdifpro.ma/projets/guides/projet-agriculture-serre-maroc",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هي تكلفة إنشاء بيوت مغطاة (Serre) فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التكلفة كتختلف حسب النوع والمساحة. Serre بلاستيكية (simple): 80 - 150 MAD للمتر المربع. Serre زجاجية (verre): 300 - 600 MAD للمتر المربع. لمساحة 1,000 متر مربع: 80,000 - 150,000 MAD للبلاستيكية، 300,000 - 600,000 MAD للزجاجية.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي أحسن المحاصيل للزراعة فـ Serre فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أحسن المحاصيل: الطماطم (Tomate) - الأكثر ربحاً، الخيار (Concombre)، الفلفل (Poivron)، الفراولة (Fraise)، البطيخ الأحمر (Pastèque) المبكر، الكوسة (Courgette)، والخضروات الورقية مثل الخس (Salade). المغرب كاين فيه طلب كبير على هاد المحاصيل طول السنة.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي الأرباح المتوقعة من Serre فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "للطماطم فـ Serre: الإنتاج كيوصل لـ 15 - 25 كيلو فالمتر المربع. فمساحة 1,000 متر مربع: 15 - 25 طن فالموسم. الثمن: 4 - 8 MAD للكيلو. الإيرادات: 60,000 - 200,000 MAD فالموسم. صافي الربح: 30% - 50% بعد المصاريف.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي التراخيص اللازمة للزراعة فـ Serre فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التراخيص: ملكية الأرض (Titre foncier أو contrat de location)، التسجيل فـ Registre de Commerce، Patente، وترخيص من وزارة الفلاحة (Direction Provinciale de l'Agriculture). إذا كاين système d'irrigation، كتحتاج aussi autorisation de pompage.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هو الدعم الحكومي لـ Serre فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الدعم الحكومي: برنامج Génération Green 2020-2030 كيدعم الفلاحين. ADEREE (Agence de Développement des Énergies Renouvelables) كتدعم systèmes d'irrigation économes. صندوق التنمية الفلاحية (FDA) كيقدم d'aide jusqu'à 60% من تكلفة التجهيزات. برنامج Green Morocco Plan.",
      },
    },
    {
      "@type": "Question",
      name: "واش كتحتاج الـ Serre لكمية كبيرة د المياه؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الـ Serre كتهلك مياه أقل من الزراعة التقليدية بفضل systèmes d'irrigation goutte-à-goutte. حتى 70% moins d'eau مقارنة بالزراعة التقليدية. الـ goutte-à-goutte كيوزع الماء بالضبط على الجذور، مما كيقلل الهدر.",
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
            مشروع الزراعة في البيوت المغطاة فالمغرب
          </span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900">
          مشروع الزراعة في البيوت المغطاة (Serre) في المغرب 2026
        </h1>

        <div className="mt-8 space-y-6 text-base leading-7 text-gray-700">
          <p className="text-lg font-medium text-emerald-700">
            الزراعة فـ البيوت المغطاة (agriculture sous serre) ولاّت من
            أحسن الاستثمارات الفلاحية فالمغرب. الطلب على الخضروات
            والفواكه خارج الموسم كايدوب، والـ Serre كتسمح ليك تنتج طول
            العام. فهاد الدليل، غادي نعطيك كلشي على مشروع Serre.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            شنو هي الزراعة فـ البيوت المغطاة (Serre)؟
          </h2>
          <p>
            La serre (البيت المغطى) هي هيكل كيكون مغطى بالبلاستيك
            الشفاف أو الزجاج، كيخلق مناخ محلي مناسب للنباتات. هاد
            التقنية كتسمح ب:
          </p>
          <ul className="list-disc space-y-2 pr-6">
            <li>التحكم فـ درجة الحرارة والرطوبة</li>
            <li>حماية النباتات من الرياح والبرد والأمطار الزائدة</li>
            <li>إنتاج محاصيل خارج الموسم (prix plus élevés)</li>
            <li>زيادة الإنتاجية حتى 3 أضعاف مقارنة بالزراعة التقليدية</li>
            <li>ترشيد استهلاك المياه</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            أنواع البيوت المغطاة
          </h2>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>السر البلاستيكي (Serre plastique):</strong> النوع
              الأكثر شيوعاً فالمغرب. رخيص (80 - 150 MAD/m²)، سهل
              التركيب، مناسب لمعظم المحاصيل.
            </li>
            <li>
              <strong>السر الزجاجي (Serre en verre):</strong> غالي
              (300 - 600 MAD/m²)، متين، كيعمر طويل. مناسب للمحاصيل
              عالية القيمة.
            </li>
            <li>
              <strong>السر الشبكي (Serre ombrière):</strong> كيحمي من
              الشمس الزائدة. مناسب للمناطق الحارة.
            </li>
            <li>
              <strong>السر متعدد الأقواس (Serre multichapelle):</strong>
              مساحات كبيرة، مناسب للمشاريع التجارية الكبيرة.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            أحسن المحاصيل للزراعة فـ Serre فالمغرب
          </h2>
          <p>المحاصيل الأكثر ربحية فـ Serre فالمغرب:</p>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>الطماطم (Tomate):</strong> الملك فـ Serre.
              إنتاج 15 - 25 كيلو/م². الطلب عالي طول العام.
            </li>
            <li>
              <strong>الخيار (Concombre):</strong> نمو سريع، إنتاج
              12 - 18 كيلو/م². الثمن 5 - 10 MAD/kg.
            </li>
            <li>
              <strong>الفلفل (Poivron):</strong> إنتاج 8 - 12
              كيلو/م². الثمن 8 - 15 MAD/kg حسب النوع.
            </li>
            <li>
              <strong>الفراولة (Fraise):</strong> مربحة بزاف. الزراعة
              فـ hors-sol. الثمن 30 - 60 MAD/kg.
            </li>
            <li>
              <strong>البطيخ الأحمر المبكر (Pastèque):</strong> خارج
              الموسم كيدوز بثمن عالي.
            </li>
            <li>
              <strong>الكوسة (Courgette):</strong> إنتاج 10 - 15
              كيلو/م². الثمن 4 - 8 MAD/kg.
            </li>
            <li>
              <strong>الخس والورقيات:</strong> دورة قصيرة (30 - 45
              يوم)، مزيانة للتنويع.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            تكاليف إنشاء Serre (دراسة جدوى)
          </h2>
          <p>دراسة جدوى لـ Serre بلاستيكية على مساحة 1,000 متر مربع:</p>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>هيكل السر وتغطيته:</strong> 80,000 - 120,000
              MAD
            </li>
            <li>
              <strong>Système d'irrigation (goutte-à-goutte):</strong>
              15,000 - 25,000 MAD
            </li>
            <li>
              <strong>تحضير الأرض:</strong> 10,000 - 20,000 MAD
            </li>
            <li>
              <strong>البذور والشتلات:</strong> 8,000 - 15,000 MAD
            </li>
            <li>
              <strong>الأسمدة (Fertilisants):</strong> 10,000 -
              20,000 MAD فالموسم
            </li>
            <li>
              <strong>نظام التدفئة (اختياري):</strong> 20,000 -
              50,000 MAD (إذا المنطقة باردة)
            </li>
            <li>
              <strong>العمالة:</strong> 15,000 - 25,000 MAD فالموسم
            </li>
            <li>
              <strong>المجموع التقريبي:</strong> 160,000 - 280,000
              MAD
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            الإيرادات والأرباح المتوقعة
          </h2>
          <p>مثال على الطماطم فـ Serre (1,000 متر مربع):</p>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>الإنتاج:</strong> 15 - 25 طن فالموسم
            </li>
            <li>
              <strong>الثمن:</strong> 4 - 8 MAD/kg (حسب الموسم
              والجودة)
            </li>
            <li>
              <strong>الإيرادات:</strong> 60,000 - 200,000 MAD
              فالموسم
            </li>
            <li>
              <strong>المصاريف:</strong> 40,000 - 80,000 MAD فالموسم
            </li>
            <li>
              <strong>صافي الربح:</strong> 30,000 - 120,000 MAD
              فالموسم (30% - 50%)
            </li>
            <li>
              <strong>عدد المواسم فالسنة:</strong> 2 مواسم (بعض
              المحاصيل 3)
            </li>
            <li>
              <strong>العائد على الاستثمار (ROI):</strong> 2 - 3
              سنوات
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            التراخيص والإجراءات
          </h2>
          <ol className="list-decimal space-y-2 pr-6">
            <li>
              <strong>ملكية الأرض:</strong> لازم عندك titre foncier
              أو عقد كراء (contrat de location) موثق.
            </li>
            <li>
              <strong>Registre de Commerce:</strong> سجل نشاطك فـ
              المحكمة.
            </li>
            <li>
              <strong>Patente:</strong> التسجيل فـ taxe
              professionnelle.
            </li>
            <li>
              <strong>Autorisation de pompage:</strong> إذا كتخدم
              بئر (puits)، لازم ترخيص.
            </li>
            <li>
              <strong>Direction Provinciale de l'Agriculture:</strong>{" "}
              تسجيل نشاطك الفلاحي.
            </li>
            <li>
              <strong>الاتحاد الفلاحي:</strong> الانخراط فـ
              coopérative agricole (اختياري ولكن مفيد).
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900">
            الدعم الحكومي المتاح
          </h2>
          <p>
            الدولة المغربية كتدعم الفلاحة بزاف، خصوصاً الزراعة فـ
            البيوت المغطاة:
          </p>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>Génération Green 2020-2030:</strong> برنامج
              حكومي كيدعم إقامة Serre جديدة. jusqu'à 50% من التكاليف.
            </li>
            <li>
              <strong>FDA (Fonds de Développement Agricole):</strong>
              كيقدم d'aide حتى 60% لـ systèmes d'irrigation
              الحديثة.
            </li>
            <li>
              <strong>ADEREE:</strong> دعم لأنظمة الري
              الاقتصادية والطاقة الشمسية.
            </li>
            <li>
              <strong>Conseil Agricole:</strong> مرافقة تقنية
              مجانية من المكتب الوطني للاستشارة الفلاحية.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            نصائح للنجاح فـ Serre
          </h2>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>اختيار الموقع:</strong> الأرض لازم تكون
              مسطحة، قريبة من مصدر الماء، وكتوصلها الشمس.
            </li>
            <li>
              <strong>التوجه نحو التصدير:</strong> المغرب كصدر
              الخضروات والفواكه لأوروبا. إذا حققتي معايير الجودة
              (GlobalGAP)، تقدر تبيع بثمن أعلى.
            </li>
            <li>
              <strong>التنويع:</strong> ما تزرعش محصول واحد فقط.
              تنوع باش تقلل المخاطر وتزيد الأرباح.
            </li>
            <li>
              <strong>الري بالتنقيط:</strong> goutte-à-goutte ضروري
              فـ Serre. كيوفر الماء وكتحسن الإنتاج.
            </li>
            <li>
              <strong>التكوين المستمر:</strong> تقنيات Serre
              كتتطور. شارك فـ formations فلاحية.
            </li>
            <li>
              <strong>التسويق:</strong> قبل ما تزرع، تأكد من السوق.
              شنو كتطلب السوق فمنطقتك؟
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            الأسئلة الشائعة (FAQ)
          </h2>

          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                تكلفة إنشاء Serre فالمغرب؟
              </h3>
              <p className="mt-1">
                Serre بلاستيكية: 80 - 150 MAD/m². زجاجية: 300 -
                600 MAD/m². لـ 1,000 متر مربع: 80,000 - 600,000
                MAD حسب النوع.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                أحسن المحاصيل فـ Serre؟
              </h3>
              <p className="mt-1">
                الطماطم، الخيار، الفلفل، الفراولة، البطيخ المبكر،
                الكوسة. الطماطم هي الأكثر ربحاً وطلباً.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                الأرباح المتوقعة؟
              </h3>
              <p className="mt-1">
                إيرادات 60,000 - 200,000 MAD فالموسم لـ 1,000
                متر مربع. صافي الربح 30% - 50%. ROI 2 - 3 سنوات.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                التراخيص اللازمة؟
              </h3>
              <p className="mt-1">
                Titre foncier، RC، Patente، autorisation de
                pompage، تسجيل فـ Direction de l'Agriculture.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                الدعم الحكومي لـ Serre؟
              </h3>
              <p className="mt-1">
                Génération Green (jusqu'à 50%)، FDA (60%)
                للري، ADEREE للطاقة والري. مرافقة تقنية مجانية.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                كمية المياه المطلوبة؟
              </h3>
              <p className="mt-1">
                الـ Serre كتهلك حتى 70% مياه أقل من الزراعة
                التقليدية بفضل goutte-à-goutte. فعالية كتوفر
                الماء والمال.
              </p>
            </div>
          </div>

          <p className="rounded-lg bg-emerald-50 p-4 text-emerald-800">
            <strong>نصيحة Tawdif Pro:</strong> ابدا بـ Serre
            بلاستيكية صغيرة (500 - 1,000 متر مربع)، اختر محصول عالي
            القيمة (الفراولة أو الطماطم)، واستفد من الدعم الحكومي
            المتاح. وما تنساش التسويق قبل الزراعة.
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
