import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "التمويل البنكي للمشاريع في المغرب 2026 (دليل كامل)",
  description:
    "دليل شامل للتمويل البنكي للمشاريع في المغرب: شروط القروض، البنوك المغربية، taux d'intérêt، وثائق التقديم، ونسبة القبول. كل ما تحتاج لتمويل مشروعك.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "التمويل البنكي للمشاريع في المغرب 2026 (دليل كامل)",
  description:
    "دليل شامل للتمويل البنكي للمشاريع في المغرب: شروط القروض، البنوك المغربية، taux d'intérêt، وثائق التقديم، ونسبة القبول.",
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
      name: "التمويل البنكي للمشاريع في المغرب 2026",
      item: "https://tawdifpro.ma/projets/guides/financement-bancaire-projet",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هي شروط التمويل البنكي للمشاريع في المغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "البنوك فالمغرب كتطلب最少 3 شروط أساسية: plan d'affaires قوي، ضمانات (garanties) كافية، وسجل تجاري (Registre de Commerce). كاينين بنوك كتحتاج حتى pourcentage personnel من رأس المال (généralement 20% à 30%).",
      },
    },
    {
      "@type": "Question",
      name: "شنو هو taux d'intérêt (سعر الفائدة) على قروض المشاريع فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الفائدة على قروض المشاريع فالمغرب كتتفاوت بين 5% و 9% سنوياً، حسب نوع القرض والبنك والمدة. القروض الصغيرة (moins de 500,000 MAD) كتكون فيها الفائدة أعلى شويا من القروض الكبيرة. بنك المغرب كينظم هاد النسب.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي الوثائق المطلوبة لطلب تمويل بنكي فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الوثائق الأساسية: pièce d'identité (CNIE)، Registre de Commerce، plan d'affaires détaillé، جدول التوقعات المالية (prévisionnel financier)، وثائق الضمانات (garanties)، كشف الحسابات البنكي dernier 12 mois، و déclaration fiscale.",
      },
    },
    {
      "@type": "Question",
      name: "واش ممكن نحصل على تمويل بدون plan d'affaires؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "لا، مستحيل تقريباً. الـ plan d'affaires هو الوثيقة الأهم فطلب التمويل. البنك كيبغي يعرف وشنو هو مشروعك، السوق ديالو، التوقعات المالية، وكيفاش غادي تسدد القرض. بلا plan d'affaires قوي، فرص القبول ضعيفة جداً.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي أفضل البنوك لتمويل المشاريع الصغيرة فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أحسن البنوك حسب التجارب: Attijariwafa Bank عندها برنامج Moubadarat، BMCE (بنك أفريقيا) كتقدم Iliade، Banque Populaire عندها Crédits aux Professionnels، CIH Bank فتمويل المشاريع الصغيرة، وCFG Bank للـ auto-entrepreneurs. كل بنك عندو شروطو وحوافزو.",
      },
    },
    {
      "@type": "Question",
      name: "واش كيقدمو البنوك المغربية تمويل لـ auto-entrepreneur؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ايوه، بزاف د البنوك عندها عروض خاصة بالـ auto-entrepreneur. مثلاً: Attijari Moubadarat، CFG Bank، وBanque Populaire. لكن nécessaire أن تكون مسجل فـ Registre National de l'Auto-entrepreneur عندو最少 6 أشهر، وعندك chiffre d'affaires منتظم.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي مدة سداد قرض المشروع فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "المدة كتتفاوت حسب نوع المشروع والمبلغ. القروض الصغيرة (100,000 - 500,000 MAD) كتكون من 3 لـ 7 سنين. القروض المتوسطة (500,000 - 2,000,000 MAD) من 5 لـ 10 سنين. القروض الكبيرة (plus de 2,000,000 MAD) تقدر توصل لـ 15 سنة.",
      },
    },
    {
      "@type": "Question",
      name: "واش ممكن ناخد تمويل وأنا عندي تاريخ ائتماني سيء؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "صعيب ولكن ممكن. إذا كان عندك historique de crédit سيء (تسجيلات فـ Central des Risques)، البنك غادي يرفض الطلب فـ 90% د الحالات. الحل: تصحيح الوضع مع البنوك، أو البحث عن تمويل بديل (micro-crédit، برامج الدعم Forsa، INTELAKA).",
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
            التمويل البنكي للمشاريع في المغرب 2026
          </span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900">
          التمويل البنكي للمشاريع في المغرب 2026 (دليل كامل)
        </h1>

        <div className="mt-8 space-y-6 text-base leading-7 text-gray-700">
          <p className="text-lg font-medium text-emerald-700">
            بغيت تبدأ مشروع ولكن عندك مشكل فالتمويل؟ فهاد الدليل غادي نشرحو
            بالتفصيل كلشي متعلق بالتمويل البنكي للمشاريع فالمغرب: الشروط، les
            taux d'intérêt، les garanties، و كيفاش تجهز dossier قوي باش يقبلو
            طلبك.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            شنو هو التمويل البنكي للمشاريع؟
          </h2>
          <p>
            Le financement bancaire pour projet هو قرض كيعطيه البنك للأشخاص
            الذاتيين أو الشركات باش يديرو مشروع معين. هاد القرض كيكون عادة
            بمبلغ محدد، وفائدة محددة، ومدة زمنية محددة. فالمغرب، غالبية
            المشاريع الصغيرة والمتوسطة (PME) كتمول عن طريق البنوك، ولكن نسبة
            كبيرة منهم كتواجه صعوبات فالحصول على التمويل بسبب نقص الوثائق أو
            الضمانات.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            أنواع التمويل البنكي المتاحة فالمغرب
          </h2>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>Crédit d'investissement:</strong> هاد القرض مخصص لشراء
              المعدات، الآلات، العقارات، أو أي استثمار طويل المدى. المدة ديالو
              كتكون من 3 لـ 10 سنين.
            </li>
            <li>
              <strong>Crédit d'exploitation:</strong> قرض قصير المدى (من 1 لـ 3
              سنين) باش تموّن المخزون، تسدد الموردين، أو تغطي المصاريف
              اليومية.
            </li>
            <li>
              <strong>Crédit-bail (Leasing):</strong> البنك كيشري المعدات أو
              الآلة وكتكريها ليك مع إمكانية الشراء فالأخير. هاد الحل مزيان
              للمعدات الغالية.
            </li>
            <li>
              <strong>Moubadarat وبرامج الدعم:</strong> بزاف د البنوك عندها
              برامج خاصة بالمقاولين الصغار، مثل Attijari Moubadarat و BMCE
              Iliade.
            </li>
            <li>
              <strong>Micro-crédit:</strong> قروض صغيرة (من 10,000 لـ 150,000
              MAD) للمشاريع الصغيرة جداً، من مؤسسات مثل Jaida و Al Amana.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            شروط الحصول على التمويل البنكي
          </h2>
          <p>
            باش يقبل البنك طلبك، كاين شروط أساسية لازم تتوفر فيك. هاد الشروط
            كتختلف شويا من بنك لآخر، ولكن فالمجموع كتتقارب:
          </p>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>Plan d'affaires قوي:</strong> وثيقة مفصلة كتوضح فكرة
              المشروع، السوق، المنافسين، التوقعات المالية، وخطة التسويق. هاد
              الوثيقة هي المفتاح لقبول طلبك.
            </li>
            <li>
              <strong>Garanties (ضمانات):</strong> البنك كيطلب ضمانات باش يضمن
              حقوقو فحالة ما قدرتيش تسدد. الضمانات كتكون إما عقارية (رهن
              عقار)، مالية (كفالة بنكية)، أو شخصية (ضمان شخصي).
            </li>
            <li>
              <strong>Apport personnel:</strong> أغلب البنوك كتطلب منك تشارك
              بـ 20% لـ 30% من رأس مال المشروع. مثلاً، إذا كان المشروع كلفتو
              500,000 MAD، لازم تكون عندك 100,000 لـ 150,000 MAD من جيبك.
            </li>
            <li>
              <strong>سجل تجاري (RC):</strong> لازم تكون مسجل فـ Registre de
              Commerce، وعندك Patente (taxe professionnelle).
            </li>
            <li>
              <strong>حساب بنكي:</strong> لازم عندك compte bancaire professionnel
              فـ نفس البنك لي كاتطلب منو التمويل، وماقلتش 6 أشهر د النشاط.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            الوثائق المطلوبة لطلب التمويل
          </h2>
          <p>
            التقديم للتمويل البنكي كيطلب مجموعة د الوثائق. أحسن تحضرهم كاملين
            قبل ما تمشي للبنك:
          </p>
          <ul className="list-disc space-y-2 pr-6">
            <li>نسخة من CNIE (بطاقة التعريف الوطنية)</li>
            <li>Registre de Commerce (السجل التجاري)</li>
            <li>Patente (taxe professionnelle)</li>
            <li>Plan d'affaires complet (étude de marché + prévisionnel financier)</li>
            <li>Déclaration fiscale (آخر تصريح ضريبي)</li>
            <li>Relevés bancaires (آخر 12 شهر)</li>
            <li>Factures pro forma (إذا كان المشروع كيطلب معدات محددة)</li>
            <li>عقد الكراء (si le projet nécessite un local)</li>
            <li>Garanties (عقد الرهن، كفالة، إلخ)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            les taux d'intérêt فالمغرب 2026
          </h2>
          <p>
            سعر الفائدة (taux d'intérêt) هو النسبة لي كتحدد قداه غادي تدفع
            زيادة على المبلغ المسلف. فالمغرب، الفائدة كتختلف حسب:
          </p>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>نوع القرض:</strong> قروض الاستثمار كتكون بين 5.5% و 7.5%،
              وقروض الاستغلال بين 6% و 8.5%
            </li>
            <li>
              <strong>مدة القرض:</strong> كلما طالت المدة، كلما زاد taux
              d'intérêt
            </li>
            <li>
              <strong>حجم المشروع:</strong> المشاريع الصغيرة كتكون الفائدة فيها
              أعلى (7% - 9%) من المشاريع الكبيرة (5% - 6.5%)
            </li>
            <li>
              <strong>الضمانات:</strong> كلما كانت الضمانات أقوى، كلما قل taux
              d'intérêt
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            أحسن البنوك لتمويل المشاريع فالمغرب
          </h2>
          <p>
            كل بنك عندو برامجو وشروطو. هاد مقارنة سريعة بين أشهر البنوك:
          </p>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>Attijariwafa Bank:</strong> برنامج Moubadarat للمشاريع
              الصغيرة، jusqu'à 500,000 MAD بدون ضمانات عقارية. الفائدة من 6%.
            </li>
            <li>
              <strong>Banque Populaire:</strong> Crédit aux Professionnels،
              باغي تمول حتى 2,000,000 MAD. كيطلب apport de 20%.
            </li>
            <li>
              <strong>BMCE (بنك أفريقيا):</strong> برنامج Iliade للشباب
              المقاول، مع مرافقة وتكوين.
            </li>
            <li>
              <strong>CIH Bank:</strong> عندهم عروض تنافسية فتمويل المشاريع
              الصغيرة، خاص ليهم دراسة جدوى قوية.
            </li>
            <li>
              <strong>CFG Bank:</strong> مناسبة لـ auto-entrepreneur والشركات
              الناشئة. كيقدمو قروض بلا ضمانات عقارية حتى 200,000 MAD.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            نصائح باش يقبل طلب التمويل ديالك
          </h2>
          <p>
            نسبة القبول فطلبات التمويل البنكي فالمغرب كتوصل تقريباً 30% فقط.
            باش تزيد فرصك، اتبع هاد النصائح:
          </p>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>جهز plan d'affaires احترافي:</strong> أفضل استثمار
              للوقت ديالك. إذا محتاج، استعين بـ expert-comptable.
            </li>
            <li>
              <strong>حافظ على historique bancaire نظيف:</strong> تجنب الشيكات
              بدون رصيد والتسجيلات فـ Central des Risques.
            </li>
            <li>
              <strong>ابدا بصحاب صغار:</strong> ما تطلبش مبلغ كبير فالباك.
              ابدا بـ 100,000 - 200,000 MAD وزد بعد ما تثبت نفسك.
            </li>
            <li>
              <strong>قدم ضمانات قوية:</strong> إذا عندك عقار، قدمه كضمان. هاد
              الشي كيزيد فرص القبول بزاف.
            </li>
            <li>
              <strong>قارن بين البنوك:</strong> ما تمشيش للبنك الأول. قارن
              العروض، الفوائد، والشروط.
            </li>
            <li>
              <strong>استفد من برامج الدعم:</strong> قبل ما تمشي للبنك، شوف
              برامج الدعم مثل Forsa و INTELAKA. هاد البرامج كتعطيك تكوين
              ودعم مالي وحتى مرافقة.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            البدائل للتمويل البنكي فالمغرب
          </h2>
          <p>
            إذا ما قدرتيش تجيب تمويل بنكي، كاين حلول أخرى:
          </p>
          <ul className="list-disc space-y-2 pr-6">
            <li>
              <strong>برنامج Forsa:</strong> دعم حكومي jusqu'à 100,000 MAD
              بدون فائدة، مع تكوين ومرافقة.
            </li>
            <li>
              <strong>INTELAKA (انطلاقة):</strong> برنامج تمويل المشاريع
              الصغيرة، كيغطي حتى 100% من التمويل فبعض الحالات.
            </li>
            <li>
              <strong>Micro-crédit:</strong> مؤسسات مثل Jaida و Al Amana
              كيقدمو قروض صغيرة بـ فائدة معقولة.
            </li>
            <li>
              <strong>Business Angels:</strong> مستثمرين خصوصيين كيديرو
              تمويل فمقابل حصة فالشركة.
            </li>
            <li>
              <strong>Crowdfunding:</strong> التمويل الجماعي عبر منصات مثل
              Fundme و WiMove.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            الأسئلة الشائعة (FAQ)
          </h2>

          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                شنو هي شروط التمويل البنكي للمشاريع في المغرب؟
              </h3>
              <p className="mt-1">
                الشروط الأساسية: plan d'affaires قوي، ضمانات كافية، apport
                personnel (20% - 30%)، سجل تجاري، وحساب بنكي نشط. البنوك
                كتطلب aussi دراسة جدوى واضحة تبين قدرتك على التسديد.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                شنو هو taux d'intérêt فقروض المشاريع فالمغرب؟
              </h3>
              <p className="mt-1">
                الفائدة كتتفاوت بين 5% و 9% سنوياً. القروض الصغيرة (moins de
                500,000 MAD) كتكون الفائدة 7% - 9%. القروض الكبيرة (plus de
                2,000,000 MAD) 5% - 6.5%.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                شنو هي الوثائق المطلوبة؟
              </h3>
              <p className="mt-1">
                CNIE، Registre de Commerce، Patente، Plan d'affaires،
                déclaration fiscale، relevés bancaires (12 mois)، garanties.
                إذا المشروع كيطلب معدات، حتى factures pro forma.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                واش ممكن نحصل على تمويل بلا plan d'affaires؟
              </h3>
              <p className="mt-1">
                لا، مستحيل تقريباً. الـ plan d'affaires هو المفتاح. إذا ما
                عندكش الخبرة، استعين بـ expert-comptable أو مركز المقاولات
                الصغرى (CRI).
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                شنو هي أفضل البنوك لتمويل المشاريع؟
              </h3>
              <p className="mt-1">
                Attijariwafa Bank (Moubadarat)، Banque Populaire (Crédit aux
                Professionnels)، BMCE (Iliade)، CIH Bank، CFG Bank. كل بنك
                عندو برامجو وشروطو.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                واش كيقدمو تمويل لـ auto-entrepreneur؟
              </h3>
              <p className="mt-1">
                ايوه. Attijari، CFG Bank، و Banque Populaire عندهم عروض
                خاصة. ولكن nécessite أن تكون مسجل عند最少 6 أشهر وعندك CA
                منتظم.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                شنو هي مدة السداد؟
              </h3>
              <p className="mt-1">
                القروض الصغيرة (100,000 - 500,000 MAD) من 3 لـ 7 سنين.
                المتوسطة (500,000 - 2,000,000 MAD) من 5 لـ 10 سنين.
                الكبيرة (plus de 2,000,000 MAD) حتى 15 سنة.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">
                واش ممكن ناخد تمويل وعندي تاريخ ائتماني سيء؟
              </h3>
              <p className="mt-1">
                صعيب. إذا كنت مسجل فـ Central des Risques، فرص القبول ضعيفة.
                الحل: صالح وضعك مع البنوك، أو توجه لبرامج الدعم (Forsa,
                INTELAKA) أو micro-crédit.
              </p>
            </div>
          </div>

          <p className="rounded-lg bg-emerald-50 p-4 text-emerald-800">
            <strong>نصيحة Tawdif Pro:</strong> قبل ما تمشي للبنك، جهز dossier
            كامل ومتكامل. الاستثمار فـ expert-comptable باش يعاونك فـ plan
            d'affaires غادي يزيد فرصك بزاف. وما تنساش تستفسر على برامج الدعم
            الحكومي لي ما كتطلبش فائدة.
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
