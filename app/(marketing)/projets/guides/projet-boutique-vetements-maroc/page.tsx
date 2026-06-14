import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "مشروع محل الملابس في المغرب: دليل شامل 2026",
  description:
    "دليل متكامل لمشروع محل الملابس فالمغرب: التكاليف من 50,000 درهم، اختيار الموقع، أنواع المحلات، استراتيجية التسويق، والأرباح المتوقعة. خطوة بخطوة لنجاح مشروعك.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "مشروع محل الملابس في المغرب: دليل شامل 2026",
  description:
    "دليل متكامل لمشروع محل الملابس (boutique de vêtements) في المغرب: التكاليف، اختيار الموقع، أنواع المحلات، stratégie marketing، والأرباح المتوقعة.",
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
      name: "مشروع محل الملابس فالمغرب",
      item: "https://tawdifpro.ma/projets/guides/projet-boutique-vetements-maroc",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هو رأس المال المطلوب لفتح محل ملابس فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "رأس المال كيبدا من 80,000 MAD لـ 300,000 MAD حسب حجم المحل والموقع. محل صغير فـ سوق شعبي: 80,000 - 120,000 MAD. محل متوسط فـ مركز تجاري: 150,000 - 250,000 MAD. محل راقي فـ مول (centre commercial): 300,000 - 600,000 MAD.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي التراخيص اللازمة لفتح محل ملابس فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التراخيص: Registre de Commerce، Patente، ICE، CNSS (إذا عندك موظفين)، شهادة المطابقة من الجماعة (commune)، و Règlement intérieur للمحل. إذا كتبع مواد غذائية مع الملابس، كتحتاج تراخيص إضافية.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي أفضل مواقع محل الملابس فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أفضل المواقع: المراكز التجارية (Malls) مثل Morocco Mall، Carré d'Or، Marjane - أعلى إقبال ولكن كراء غالي. الأسواق الشعبية (Marchés) - أقل في الكراء ولكن منافسة كبيرة. الشوارع الرئيسية فالأحياء الراقية - توازن بين الكراء والإقبال. الأحياء الجامعية - للعلامات الاقتصادية.",
      },
    },
    {
      "@type": "Question",
      name: "واش محل الملابس مربح فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ايوه مربح. هامش الربح فـ الملابس كيوصل لـ 50% - 200% (حسب النوع والعلامة). الإيرادات الشهرية لمحل متوسط 30,000 - 100,000 MAD. صافي الربح 15% - 30% من الإيرادات. العائد على الاستثمار فـ 1 - 3 سنوات حسب الموقع والتسيير.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي الأنواع الأكثر طلباً فـ الملابس فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الأنواع الأكثر طلباً: الملابس التقليدية (Jellaba, Gandoura, Caftan) - طلب دائم، ملابس الرجال (Costumes, Chemises) - هامش ربح عالي، ملابس النساء - الأكثر تنوعاً وطلبا، ملابس الأطفال - مطلوبة بزاف، الملابس الرياضية (Sportswear) - نمو كبير.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نختار الموديلات والموردين؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نصائح: سافر للصين أو تركيا لاستيراد البضاعة مباشرة (أرخص 30% - 50%)، تعاقد مع مصنعين محليين (Derb Ghalef، الرباط) للملابس التقليدية، ابدأ بكميات صغيرة (échantillons) قبل الطلبية الكبيرة، تابع موضة كل موسم (Ramadan, Été, Hiver)، واستعمل Instagram لاستطلاع أذواق الزبناء.",
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
          <Link href="/" className="hover:text-emerald-600">الرئيسية</Link> › <Link href="/projets" className="hover:text-emerald-600">المشاريع</Link> › <span className="text-gray-900">مشروع محل الملابس فالمغرب</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900">مشروع محل الملابس في المغرب: دليل شامل 2026</h1>
        <div className="mt-8 space-y-6 text-base leading-7 text-gray-700">
          <p className="text-lg font-medium text-emerald-700">مشروع محل الملابس (boutique de vêtements) هو من المشاريع التجارية الكلاسيكية لي كتعطي أرباح مضمونة إذا تم التسيير مزيان. المغاربة كيشريو الملابس باستمرار، والطلب موسمي ودائم. فهاد الدليل، غادي نعطيك كلشي من الألف للياء.</p>

          <h2 className="text-2xl font-bold text-gray-900">لماذا محل الملابس فالمغرب؟</h2>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>طلب دائم:</strong> الملابس من الحاجيات الأساسية، المغاربة كيشريو فـ كل المواسم.</li>
            <li><strong>هامش ربح عالي:</strong> يصل لـ 200% فبعض الأنواع (الملابس التقليدية، الأكسسوارات).</li>
            <li><strong>مواسم قوية:</strong> رمضان، العيد، الدخول المدرسي، الصيف - كلها مواسم كتزيد المبيعات.</li>
            <li><strong>Secteur متنوع:</strong> تقدر تتخصص فـ نوع معين (تقليدي، رياضي، أطفال) أو تكون généraliste.</li>
            <li><strong>إمكانية التوسع:</strong> من محل واحد لـ chaîne de boutiques أو بيع على الإنترنت.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">أنواع محلات الملابس فالمغرب</h2>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>Boutique de vêtements traditionnels:</strong> Jellaba، Gandoura، Caftan، بلغة. طلب كبير فـ المناسبات والأعياد.</li>
            <li><strong>Boutique de prêt-à-porter:</strong> ملابس عصرية (chemises، pantalons، robes). مستوردة من تركيا، الصين، أو أوروبا.</li>
            <li><strong>Boutique de sportswear:</strong> ملابس رياضية وأحذية. secteur كايدوب بزاف.</li>
            <li><strong>Boutique pour enfants:</strong> ملابس أطفال ورضع. الآباء كيشريو بلا حساب على ولادهم.</li>
            <li><strong>Boutique en ligne (E-commerce):</strong> عبر Instagram أو موقع خاص. moins de frais généraux.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">التكاليف التقريبية للمشروع</h2>
          <p>محل متوسط فمدينة كبرى (40 - 60 متر مربع):</p>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>كراء المحل:</strong> 5,000 - 20,000 MAD شهرياً + caution (3 - 6 أشهر): 15,000 - 120,000 MAD</li>
            <li><strong>تهيئة المحل:</strong> 30,000 - 80,000 MAD
              <ul className="mr-4 mt-1 list-circle space-y-1">
                <li>الرفوف والتعليقات (Racks + étagères): 10,000 - 25,000 MAD</li>
                <li>إضاءة (Éclairage): 5,000 - 15,000 MAD</li>
                <li>Vitrine + واجهة المحل: 8,000 - 20,000 MAD</li>
                <li>دهان وديكور: 5,000 - 15,000 MAD</li>
              </ul>
            </li>
            <li><strong>المخزون (Stock initial):</strong> 50,000 - 150,000 MAD
              <ul className="mr-4 mt-1 list-circle space-y-1">
                <li>500 - 1000 قطعة حسب النوع والمورد</li>
                <li>متوسط ثمن القطعة: 50 - 200 MAD (شراء)</li>
              </ul>
            </li>
            <li><strong>التراخيص:</strong> 5,000 - 15,000 MAD</li>
            <li><strong>التسويق (افتتاح):</strong> 5,000 - 15,000 MAD</li>
            <li><strong>رأس مال عامل:</strong> 20,000 - 40,000 MAD</li>
            <li><strong>المجموع التقريبي:</strong> 80,000 - 300,000 MAD</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">اختيار الموقع المناسب</h2>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>المراكز التجارية (Malls):</strong> Morocco Mall، Carré d'Or، Marjane. كراء غالي (10,000 - 50,000 MAD/شهر) لكن إقبال عالي.</li>
            <li><strong>الشوارع الرئيسية:</strong> شارع محمد الخامس، شارع الحسن الثاني فكل مدينة. توازن بين الكراء والإقبال.</li>
            <li><strong>الأسواق الشعبية:</strong> أقل كراء، منافسة كبيرة، زبناء يبحثون على الثمن الرخيص.</li>
            <li><strong>الأحياء الراقية:</strong> زبناء عندهم قدرة شرائية عالية. مناسب للملابس الفخمة.</li>
            <li><strong>القرب من المدارس والجامعات:</strong> مناسب للملابس العصرية والرياضية بأسعار معقولة.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">اختيار الموردين وجودة البضاعة</h2>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>المستوردون من الصين:</strong> أسعار رخيصة (30 - 80 MAD للقطعة)، جودة متوسطة. مناسب للبداية.</li>
            <li><strong>المستوردون من تركيا:</strong> جودة عالية، تصميمات عصرية (80 - 200 MAD للقطعة). مناسب للملابس العصرية.</li>
            <li><strong>المصنعون المحليون:</strong> جودة ممتازة للملابس التقليدية، أسعار تنافسية. Derb Ghalef فـ الدار البيضاء هو المركز.</li>
            <li><strong>العلامات الأوروبية:</strong> أسعار غالية ولكن هامش ربح أقل. مناسب للبوتيكات الراقية.</li>
            <li><strong>نصيحة:</strong> ابدا بـ 3 - 4 موردين، قارن الجودة والسعر، وابن علاقة طويلة المدى مع أحسن واحد.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">الإيرادات والأرباح المتوقعة</h2>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>معدل دوران المخزون:</strong> 3 - 4 مرات فالسنة (كل 3 - 4 أشهر كتجدد المخزون)</li>
            <li><strong>هامش الربح:</strong> 50% - 150% (بيع الضعف أو الثلاثة أضعاف ثمن الشراء)</li>
            <li><strong>الإيرادات الشهرية:</strong> محل صغير: 20,000 - 40,000 MAD. محل متوسط: 40,000 - 80,000 MAD. محل كبير: 80,000 - 200,000 MAD</li>
            <li><strong>الإيرادات فـ المواسم (رمضان، العيد):</strong> 2 - 3 أضعاف الإيرادات العادية</li>
            <li><strong>صافي الربح الشهري:</strong> 20% - 30% من الإيرادات = 6,000 - 60,000 MAD</li>
            <li><strong>العائد على الاستثمار:</strong> 1 - 3 سنوات</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">التراخيص والإجراءات القانونية</h2>
          <ol className="list-decimal space-y-2 pr-6">
            <li><strong>Registre de Commerce:</strong> فـ المحكمة التجارية. nécessaire déterminer la forme juridique (SARL، Auto-entrepreneur، Entreprise individuelle).</li>
            <li><strong>Patente:</strong> التسجيل فـ taxe professionnelle فـ commune ديال المحل.</li>
            <li><strong>ICE:</strong> Identifiant Commun d'Entreprise.</li>
            <li><strong>CNSS:</strong> إذا عندك موظفين (vendeurs، caissiers).</li>
            <li><strong>شهادة المطابقة:</strong> من الوقاية المدنية (Protection Civile) للمحل.</li>
            <li><strong>Règlement intérieur:</strong> ضروري للمحل (les horaires، les conditions de vente، retours).</li>
            <li><strong>Comptable:</strong> عين expert-comptable باش يدير comptabilité والتصريحات الضريبية.</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900">استراتيجية التسويق</h2>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>Instagram et Facebook:</strong> المحل ديال الملابس بلا Instagram كاينو ما كاينش. صور احترافية، فيديوهات، عروض.</li>
            <li><strong>Google My Business:</strong> باش يلقاوك الناس فـ Google Maps.</li>
            <li><strong>المظهر الخارجي:</strong> Vitrine جذابة. الناس كتشري بعينيها فالملابس.</li>
            <li><strong>العروض الموسمية:</strong> Soldes رمضان، العيد، الدخول المدرسي، الصيف.</li>
            <li><strong>بطاقة الولاء (Carte de fidélité):</strong> بعد 10 مشتريات، هدية أو خصم.</li>
            <li><strong>Parrainage:</strong> زبون كيجيب زبون = خصم 10%.</li>
            <li><strong>Influenceurs:</strong> تعاون مع مؤثرين محليين باش يصورو اللباس ديالك.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">إدارة المخزون</h2>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>تنويع المقاسات:</strong> S, M, L, XL. المغاربة كيحتاجو مقاسات كبيرة (XL, XXL) بزاف.</li>
            <li><strong>تتبع المبيعات:</strong> شنو كيتصبن؟ شنو ما كيتصبنش؟ استعمل système de gestion de stock.</li>
            <li><strong>التصفية (Soldes):</strong> كل 3 أشهر، صفي البضاعة لي مابقاتش. أحسن تبيع بثمن التكلفة من تبقى عندك فالمخزن.</li>
            <li><strong>تجنب التكرار:</strong> ما تجيبش نفس الموديل بكميات كبيرة. تنوع فـ التصاميم.</li>
            <li><strong>موسمية:</strong> راهن على الملابس الشتوية فـ أكتوبر - نوفمبر، والصيفية فـ أبريل - ماي.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">نصائح للنجاح</h2>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>اعرف زبونك:</strong> المرأة المغربية كتحب الجودة والسعر المناسب. الرجل كيركز على الماركة.</li>
            <li><strong>التجربة فـ المحل:</strong> خلي الزبون يجرب اللباس. مرايا كافية ومكان واسع.</li>
            <li><strong>خدمة الزبناء:</strong> البائع المبتسم والمحترم كيزيد المبيعات. درب الموظفين على service client.</li>
            <li><strong>التواجد على الإنترنت:</strong> حتى لو عندك محل، لازم تكون فـ Instagram. بيع على الإنترنت كيزيد الإيرادات.</li>
            <li><strong>التميز:</strong> ما تكونش نسخة من المحل لي جنبك. طور علامتك الخاصة (marque propre) أو اختر تخصص.</li>
            <li><strong>التفاوض مع الموردين:</strong> كلما زادت الكمية، كلما قل الثمن. تفاوض على délais de paiement.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">الأسئلة الشائعة (FAQ)</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">رأس المال المطلوب لفتح محل ملابس؟</h3>
              <p className="mt-1">80,000 - 300,000 MAD حسب الحجم والموقع. المحل فـ مول كيطلب 300,000+ MAD، المحل الشعبي 80,000 - 120,000 MAD.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">التراخيص اللازمة؟</h3>
              <p className="mt-1">Registre de Commerce، Patente، ICE، CNSS (للموظفين)، شهادة المطابقة من الجماعة.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">أفضل المواقع لمحل ملابس؟</h3>
              <p className="mt-1">المراكز التجارية (Malls)، الشوارع الرئيسية، الأسواق الشعبية، الأحياء الراقية. حسب النوع والميزانية.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">واش محل الملابس مربح؟</h3>
              <p className="mt-1">هامش الربح 50% - 200%. الإيرادات 30,000 - 100,000 MAD شهرياً. صافي الربح 20% - 30%. ROI فـ 1 - 3 سنوات.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">الأنواع الأكثر طلباً فالمغرب؟</h3>
              <p className="mt-1">الملابس التقليدية (Jellaba، Caftan)، ملابس الرجال، ملابس النساء، ملابس الأطفال، الملابس الرياضية.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">كيفاش نختار الموديلات والموردين؟</h3>
              <p className="mt-1">استورد من الصين (رخيص)، تركيا (عصري)، أو مصنعين محليين (تقليدي). ابدا بكميات صغيرة، قارن الجودة.</p>
            </div>
          </div>

          <p className="rounded-lg bg-emerald-50 p-4 text-emerald-800"><strong>نصيحة Tawdif Pro:</strong> ابدا بـ boutique en ligne على Instagram (moins de frais)، جمع زبناء وسمعة، وبعدها افتح محل فعلي. ولا تنسى أن الملابس التقليدية المغربية (Jellaba، Caftan) فيها هامش ربح كبير وطلب دائم.</p>
        </div>
        <div className="mt-8 rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-600">
            📚 اقرأ أيضاً: <Link href="/projets/guides/idees-projets-petit-budget-maroc" className="text-emerald-600 underline hover:text-emerald-800">أفكار مشاريع صغيرة مربحة</Link>
            {" | "}<Link href="/salary-calculator" className="text-emerald-600 underline hover:text-emerald-800">احسب راتبك الصافي</Link>
          </p>
        </div>
      </div>
    </>
  );
}
