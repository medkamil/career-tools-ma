import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "مشروع قاعة الرياضة (Salle de Sport) في المغرب: أرباح وتكاليف 2026",
  description:
    "دليل كامل لمشروع قاعة الرياضة فالمغرب: التكاليف، المعدات، التراخيص، استراتيجية التسويق، والأرباح المتوقعة. كل ما تحتاج لفتح صالة رياضية ناجحة فالمغرب.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "مشروع قاعة الرياضة (Salle de Sport) في المغرب: أرباح وتكاليف 2026",
  description:
    "دليل كامل لمشروع قاعة الرياضة (salle de sport) في المغرب: التكاليف، المعدات، التراخيص، stratégie marketing، والأرباح المتوقعة.",
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
      name: "مشروع قاعة الرياضة فالمغرب",
      item: "https://tawdifpro.ma/projets/guides/projet-salle-sport-fitness-maroc",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هي تكلفة فتح قاعة رياضة (Salle de Sport) فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التكلفة كتختلف حسب الحجم. قاعة صغيرة (80 - 100 متر مربع): 150,000 - 300,000 MAD. قاعة متوسطة (150 - 250 متر مربع): 300,000 - 600,000 MAD. قاعة كبيرة (300+ متر): 600,000 - 1,500,000 MAD. المعدات كتأخذ 50% - 60% من الميزانية.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي التراخيص اللازمة لفتح قاعة رياضة فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التراخيص: Registre de Commerce، Patente، ترخيص من وزارة الرياضة (Direction de la Jeunesse et des Sports)، شهادة المطابقة من الجماعة (commune)، تأمين المسؤولية المدنية، CNSS للموظفين، و Règlement intérieur للقاعة.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي المعدات الأساسية لقاعة الرياضة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "المعدات الأساسية: آلات الكارديو (tapis roulant 15,000 - 40,000 MAD، vélo elliptique 10,000 - 30,000 MAD)، آلات المقاومة (machines de musculation 8,000 - 50,000 MAD)، الأوزان الحرة (haltères, barres 500 - 3,000 MAD)، مقاعد التدريب، مرايا، ونظام صوت.",
      },
    },
    {
      "@type": "Question",
      name: "واش قاعة الرياضة مربحة فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ايوه مربحة. الإيرادات الشهرية: قاعة صغيرة 20,000 - 40,000 MAD، متوسطة 40,000 - 80,000 MAD، كبيرة 80,000 - 150,000 MAD. الاشتراكات (abonnements) هي المصدر الأساسي. هامش الربح 25% - 40%. العائد على الاستثمار فـ 2 - 4 سنوات.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي أحسن المدن لفتح قاعة رياضة فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أحسن المدن: الدار البيضاء (أكبر سوق)، الرباط (عائد مرتفع)، مراكش (السياحة + السكان)، طنجة (نمو سكاني)، أكادير (السياحة). الأحياء الراقية والجامعات والأحياء السكنية الجديدة كتوفر فرص كبيرة.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي الخدمات الإضافية لي كتزيد الربح فالقاعة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الخدمات الإضافية: جلسات مع مدرب شخصي (coach sportif) 200 - 500 MAD للجلسة، بيع المكملات الغذائية والمشروبات، كريم الدفع (pay-per-use)، برامج التغذية، مساج رياضي، و تنظيم مسابقات وتحديات.",
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
          <Link href="/" className="hover:text-emerald-600">الرئيسية</Link> › <Link href="/projets" className="hover:text-emerald-600">المشاريع</Link> › <span className="text-gray-900">مشروع قاعة الرياضة فالمغرب</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900">مشروع قاعة الرياضة (Salle de Sport) في المغرب: أرباح وتكاليف 2026</h1>
        <div className="mt-8 space-y-6 text-base leading-7 text-gray-700">
          <p className="text-lg font-medium text-emerald-700">مشروع قاعة الرياضة (salle de sport/salle de fitness) من المشاريع لي كتعرف إقبال كبير فالمغرب. الشباب والبنات ولاو كيهتمو بـ sport بزاف. فهاد الدليل، غادي نعطيك كلشي على التكاليف، المعدات، التراخيص، والأرباح.</p>

          <h2 className="text-2xl font-bold text-gray-900">الوضع الحالي لسوق الرياضة فالمغرب</h2>
          <p>سوق salles de sport فالمغرب كاين فيه نمو كبير. الوعي بالصحة والرياضة زاد بزاف فـ السنوات الأخيرة. الناس المغاربة ولاو كيخرجو فلوس على صحتهم. العدد د salles de sport فالمدن الكبيرة كيزيد كل عام. المنافسة موجودة ولكن الطلب أكبر، خصوصاً إذا قدمتي خدمات متميزة.</p>

          <h2 className="text-2xl font-bold text-gray-900">أنواع قاعات الرياضة</h2>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>Salle de musculation traditionnelle:</strong> أجهزة مقاومة وأوزان حرة. الأكثر شيوعاً.</li>
            <li><strong>Salle de fitness mixte:</strong> كارديو + مقاومة + cours collectifs (yoga, zumba, pilates).</li>
            <li><strong>Salle de crossfit:</strong> متخصصة فـ entraînement fonctionnel عالي الكثافة.</li>
            <li><strong>Salle de sport féminine:</strong> مخصصة للنساء فقط. مطلوبة بزاف فالمغرب.</li>
            <li><strong>Salle de sport premium:</strong> خدمات فاخرة (spa, massage, coach personnel).</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">التكاليف التقريبية للمشروع</h2>
          <p>قاعة متوسطة 200 متر مربع فمدينة كبرى:</p>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>كراء المحل:</strong> 8,000 - 20,000 MAD شهرياً + caution (3 - 6 أشهر)</li>
            <li><strong>تهيئة المحل:</strong> 50,000 - 150,000 MAD
              <ul className="mr-4 mt-1 list-circle space-y-1">
                <li>الأرضية (sol spécial sport): 20,000 - 50,000 MAD</li>
                <li>المرايا: 10,000 - 25,000 MAD</li>
                <li>الدهان والإضاءة: 10,000 - 30,000 MAD</li>
                <li>غرف تغيير الملابس + دوش: 20,000 - 50,000 MAD</li>
              </ul>
            </li>
            <li><strong>المعدات الرياضية:</strong> 150,000 - 350,000 MAD
              <ul className="mr-4 mt-1 list-circle space-y-1">
                <li>3 - 5 tapis roulant: 45,000 - 150,000 MAD</li>
                <li>2 - 3 vélo elliptique: 20,000 - 60,000 MAD</li>
                <li>5 - 8 machines de musculation: 40,000 - 150,000 MAD</li>
                <li>أوزان حرة + haltères: 15,000 - 40,000 MAD</li>
              </ul>
            </li>
            <li><strong>نظام الصوت والتكييف:</strong> 20,000 - 50,000 MAD</li>
            <li><strong>التراخيص:</strong> 10,000 - 20,000 MAD</li>
            <li><strong>التسويق:</strong> 10,000 - 20,000 MAD فالشهر الأول</li>
            <li><strong>المجموع التقريبي:</strong> 300,000 - 650,000 MAD</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">التراخيص والإجراءات</h2>
          <ol className="list-decimal space-y-2 pr-6">
            <li><strong>Registre de Commerce:</strong> تسجيل النشاط فـ المحكمة التجارية.</li>
            <li><strong>Patente:</strong> taxe professionnelle.</li>
            <li><strong>وزارة الرياضة:</strong> ترخيص من Direction de la Jeunesse et des Sports فمدينتك.</li>
            <li><strong>شهادة المطابقة:</strong> من الجماعة (commune) للمحل.</li>
            <li><strong>Assurance:</strong> تأمين responsabilité civile ضروري للحوادث.</li>
            <li><strong>CNSS:</strong> للـ coaches والموظفين.</li>
            <li><strong>Règlement intérieur:</strong> ضروري للقاعة باش تنظم droits et obligations des membres.</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900">الإيرادات والأرباح المتوقعة</h2>
          <p>قاعة متوسطة (200 متر، 200 - 300 عضو):</p>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>الاشتراك الشهري:</strong> 200 - 500 MAD (حسب الموقع والخدمات)</li>
            <li><strong>عدد الأعضاء:</strong> 150 - 300 عضو نشط</li>
            <li><strong>الإيرادات من الاشتراكات:</strong> 30,000 - 150,000 MAD شهرياً</li>
            <li><strong>جلسات الـ coaching:</strong> 5,000 - 20,000 MAD شهرياً إضافية</li>
            <li><strong>المبيعات (مشروبات، مكملات):</strong> 5,000 - 15,000 MAD شهرياً</li>
            <li><strong>الإيرادات الشهرية الإجمالية:</strong> 40,000 - 185,000 MAD</li>
            <li><strong>المصاريف الشهرية:</strong> 20,000 - 60,000 MAD</li>
            <li><strong>صافي الربح الشهري:</strong> 15,000 - 100,000 MAD</li>
            <li><strong>هامش الربح:</strong> 25% - 40%</li>
            <li><strong>ROI:</strong> 2 - 4 سنوات</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">اختيار الموقع</h2>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>الرؤية:</strong> فـ شارع رئيسي أو زنقة معروفة.</li>
            <li><strong>المواقف:</strong> Parking متاح للزبناء.</li>
            <li><strong>الكثافة السكانية:</strong> حي سكني كثيف = زبناء محتملين.</li>
            <li><strong>الدخل المتوسط:</strong> حي راقي = قدرة على دفع اشتراكات أعلى.</li>
            <li><strong>القرب من الجامعات:</strong> الطلاب زبناء محتملين.</li>
            <li><strong>المنافسة:</strong> تجنب المناطق المشبعة بالـ salles.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">التوظيف والـ Coaches</h2>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>مدرب عام (Coach principal):</strong> 5,000 - 10,000 MAD شهرياً</li>
            <li><strong>مدربين (Coaches):</strong> 3,500 - 6,000 MAD شهرياً (2 - 4 مدربين)</li>
            <li><strong>استقبال (Réceptionniste):</strong> 3,000 - 4,500 MAD شهرياً</li>
            <li><strong>عاملة النظافة:</strong> 2,000 - 3,000 MAD شهرياً</li>
            <li><strong>شهادات مفيدة:</strong> BPJEPS، STAPS، شهادة فـ coaching sportif معترف بها.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">استراتيجية التسويق</h2>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>Google My Business:</strong> أول حاجة. "salle de sport près de moi" كتكون البحث الأول.</li>
            <li><strong>Instagram et TikTok:</strong> فيديوهات التمارين، التحولات (transformation)، coaches. المحتوى الرياضي كيدوز مزيان فـ social media.</li>
            <li><strong>عروض الافتتاح:</strong> أول شهر مجاني أو خصم 50% على الاشتراك السنوي.</li>
            <li><strong>Parrainage:</strong> عضو كيجيب عضو جديد = شهر مجاني.</li>
            <li><strong>Journée portes ouvertes:</strong> يوم مجاني للتجربة. الناس كيجربو قبل ما يشتركو.</li>
            <li><strong>Partenariat:</strong> تعاون مع écoles و entreprises باش تقدم عروض خاصة.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">نصائح للنجاح</h2>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>النظافة:</strong> فـ قاعة الرياضة، النظافة هي كلشي. تنظيف المعدات بعد كل استعمال.</li>
            <li><strong>أجواء القاعة:</strong> الموسيقى، الإضاءة، التكييف. الجو العام كيأثر على تجربة العضو.</li>
            <li><strong>تنوع البرامج:</strong> كورسات جماعية (yoga, zumba, HIIT) كتزيد جاذبية القاعة.</li>
            <li><strong>مواعيد مرنة:</strong> افتح من 6 صباحاً لـ 11 ليلاً. ناس كتحب الصباح وناس كتحب المساء.</li>
            <li><strong>علاقات مع الأعضاء:</strong> تعرف على الأعضاء بالاسم. العلاقة الشخصية كتخليهم يبقاو.</li>
            <li><strong>تحديث المعدات:</strong> المعدات الجديدة كتجذب الأعضاء. خطط لتجديد المعدات كل 3 - 4 سنوات.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">التحديات المحتملة</h2>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>المنافسة القوية:</strong> حل: تخصص (salle féminine، crossfit) أو خدمات متميزة.</li>
            <li><strong>ارتفاع الكراء:</strong> تفاوض على عقد طويل الأمد باش تثبت السعر.</li>
            <li><strong>تقلب عدد الأعضاء:</strong> فـ الصيف، العدد كينقص. خطط لعروض الصيف باش تحافظ على الأعضاء.</li>
            <li><strong>صيانة المعدات:</strong> المعدات كتتهدر. ميزانية صيانة شهرية ضرورية.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">الأسئلة الشائعة (FAQ)</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">شنو هي تكلفة فتح قاعة رياضة فالمغرب؟</h3>
              <p className="mt-1">قاعة صغيرة (80 - 100 متر): 150,000 - 300,000 MAD. قاعة متوسطة (150 - 250 متر): 300,000 - 600,000 MAD. قاعة كبيرة (300+ متر): 600,000 - 1,500,000 MAD.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">شنو هي التراخيص اللازمة؟</h3>
              <p className="mt-1">Registre de Commerce، Patente، ترخيص من وزارة الرياضة، شهادة المطابقة من الجماعة، تأمين المسؤولية المدنية، CNSS، و Règlement intérieur.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">شنو هي المعدات الأساسية؟</h3>
              <p className="mt-1">آلات كارديو (tapis roulant, vélo elliptique)، آلات مقاومة، أوزان حرة، مرايا، نظام صوت. الميزانية 150,000 - 350,000 MAD.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">واش القاعة مربحة؟</h3>
              <p className="mt-1">الإيرادات 40,000 - 185,000 MAD شهرياً. هامش الربح 25% - 40%. ROI فـ 2 - 4 سنوات. الاشتراكات هي المصدر الأساسي للدخل.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">أحسن المدن لفتح قاعة رياضة؟</h3>
              <p className="mt-1">الدار البيضاء، الرباط، مراكش، طنجة، أكادير. الأحياء الراقية والجامعية كتوفر فرص أفضل.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">الخدمات الإضافية لي كتزيد الربح؟</h3>
              <p className="mt-1">جلسات coaching شخصي 200 - 500 MAD للجلسة، بيع مكملات ومشروبات، pay-per-use، برامج تغذية، مساج رياضي، وتحديات رياضية.</p>
            </div>
          </div>

          <p className="rounded-lg bg-emerald-50 p-4 text-emerald-800"><strong>نصيحة Tawdif Pro:</strong> ابدا بـ salle de sport féminine أو متخصصة (crossfit). هاد القطاعات كتطلب بزاف فالمغرب والمنافسة فيها أقل. استثمر فـ Instagram و TikTok باش تبني مجتمع قبل ما تفتح. الجودة والنظافة هما المفتاح.</p>
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
