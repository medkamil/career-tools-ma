import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "برنامج INTELAKA (انطلاقة) - دليل كامل 2026",
  description: "دليل شامل لبرنامج INTELAKA (انطلاقة) لدعم المشاريع الصغرى في المغرب.",
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
    { "@type": "ListItem", position: 3, name: "برنامج INTELAKA 2026", item: "https://tawdifpro.ma/projets/guides/programme-intelaka" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هو برنامج INTELAKA (انطلاقة)؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "INTELAKA (انطلاقة) هو برنامج حكومي مغربي لدعم العمل المقاولاتي للشباب. أطلق ف 2020. الهدف هو تمويل ومواكبة الشباب باش ينشئو مشاريعهم الخاصة. البرنامج كايقدم تمويل من 10,000 ل 50,000 درهم بدون فايدة (قرض حسن)، بالإضافة للتكوين والمواكبة. كايدبر من طرف وزارة السياحة والصناعة التقليدية.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي شروط التسجيل ف INTELAKA 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "شروط INTELAKA 2026: 1) الجنسية المغربية، 2) السن من 18 ل 40 سنة، 3) إقامة فالمغرب، 4) مشروع صغير قابل للتطبيق، 5) ملف إداري كامل، 6) التسجيل ف منصة intelaka.ma، 7) حضور التكوين الأساسي (للأقل 20 ساعة). الأولوية للشباب العاطلين و المنحدرين من الوسط القروي.",
      },
    },
    {
      "@type": "Question",
      name: "شنو الفرق بين INTELAKA و Forsa؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الفرق الرئيسي: INTELAKA كايقدم قرض حسن (بدون فايدة) بقيمة 10,000 ل 50,000 درهم مع مواكبة أساسية. Forsa كايقدم منحة (Subvention) من 20,000 ل 100,000 درهم مع مواكبة متقدمة. INTELAKA أسهل فالتقديم وأسرع فالصرف. Forsa عندو انتقاء أكثر صرامة ومواكبة أقوى. INTELAKA للشباب من 18 ل 40 سنة، Forsa ل 18 ل 45 سنة.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نقدم على INTELAKA 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "خطوات التقديم: 1) دخل ل intelaka.ma، 2) أنشئ حساب، 3) اختر نوع المشروع (صناعي، تجاري، خدمي)، 4) املأ المعلومات الشخصية والمشروع، 5) حمل الوثائق (CV، دراسة السوق، البطاقة الوطنية)، 6) سجل فالتكوين الأساسي (20 ساعة)، 7) بعد التكوين، قدم الملف النهائي، 8) انتظر الدراسة والموافقة.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هو مبلغ التمويل ف INTELAKA؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "INTELAKA كايقدم قرض حسن (قرض بدون فايدة، Qard Hassan) بقيمة: 10,000 درهم للمشاريع الصغيرة جداً، 20,000 - 30,000 درهم للمشاريع الصغرى، 40,000 - 50,000 درهم للمشاريع المتوسطة. القرض كايسدد على مدة 5 سنين (60 شهر) مع فترة سماح 6 أشهر. القسط الشهري: من 200 ل 1,000 درهم حسب المبلغ.",
      },
    },
    {
      "@type": "Question",
      name: "القطاعات المدعومة فبرنامج INTELAKA شنو هي؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "INTELAKA كايدعم جميع القطاعات: 1) الخدمات (Services) - المطاعم، الحلاقة، التنظيف، 2) الصناعة التقليدية (Artisanat) - الحرف، الصناعة اليدوية، 3) التجارة (Commerce) - المحلات، الأسواق، 4) الفلاحة (Agriculture) - تربية المواشي، الزراعة، 5) النقل (Transport) - سيارات الأجرة، الدراجات النارية، 6) الرقمنة (Digital) - خدمات الإنترنت، التصوير.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي مدة معالجة ملف INTELAKA؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "المدة: من التقديم لصرف التمويل كايدوي 30 - 60 يوم. المراحل: 1) المراجعة الأولية: 7 أيام، 2) التكوين الأساسي: 20 ساعة (أسبوع)، 3) دراسة الملف: 15 يوم، 4) الموافقة: 7 أيام، 5) التوقيع والصرف: 10 أيام. إذا الملف كامل والمشروع قابل للتطبيق، الصرف كايكون سريع.",
      },
    },
  ],
};

const schemas = [articleSchema, breadcrumbSchema, faqSchema];

export default function ProgrammeIntelakaPage() {
  return (
    <ArticleLayout
      schemas={schemas}
      breadcrumbs={[
        { name: "قسم المشاريع", href: "/projets" },
        { name: "برنامج INTELAKA 2026", href: "/projets/guides/programme-intelaka" }
      ]}
      title="برنامج INTELAKA (انطلاقة) - دليل كامل 2026"
      readingTime="10 دقائق قراءة"
    >
<p>برنامج INTELAKA (انطلاقة) هو برنامج حكومي مغربي كايقدم تمويلاً سهلاً وسريعاً للشباب باش يبداو مشاريعهم. من 2020 ل 2026، البرنامج دعم أكثر من 100,000 شاب مغربي فجميع جهات المملكة.</p>

        <p>فهاد المقال، غادي نعرفوك على كل شي خاص ببرنامج INTELAKA 2026: الشروط، المبلغ، خطوات التسجيل، والنصائح باش تنجح.</p>

        <hr />

        <h2>شنو هو برنامج INTELAKA؟</h2>
        <p>INTELAKA (انطلاقة) هو برنامج KAFAA للتمويل. كايقدم قرض حسن (بدون فايدة) للمشاريع الصغرى. الفرق بينو وبين القروض البنكية التقليدية هو أنو بدون فايدة وبدون ضمانات معقدة.</p>

        <p>المميزات:</p>
        <ul>
          <li><strong>قرض حسن:</strong> بدون فايدة (ربا).</li>
          <li><strong>بدون ضمان:</strong> ما كايتطلبش ضمان عقاري ولا كفيل.</li>
          <li><strong>فترة سماح:</strong> 6 أشهر قبل بداية السداد.</li>
          <li><strong>مدة السداد:</strong> 5 سنين (60 شهر).</li>
          <li><strong>مواكبة:</strong> تكوين وإشراف مجاني.</li>
        </ul>

        <h2>شروط التسجيل ف INTELAKA 2026</h2>
        <ul>
          <li>الجنسية المغربية.</li>
          <li>السن: 18 - 40 سنة.</li>
          <li>الإقامة: فالمغرب.</li>
          <li>مشروع: صغير، قابل للتطبيق، في أي قطاع.</li>
          <li>الوضعية: عاطل أو موظف براتب ضعيف.</li>
          <li>الالتزام: حضور التكوين الأساسي (20 ساعة).</li>
          <li>غير مسجل ك مقاول (يمكن ل Auto-entrepreneur).</li>
        </ul>

        <h2>مبلغ التمويل وشروط السداد</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b px-4 py-2 text-right font-medium">نوع المشروع</th>
                <th className="border-b px-4 py-2 text-right font-medium">التمويل</th>
                <th className="border-b px-4 py-2 text-right font-medium">القسط الشهري</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border-b px-4 py-2">صغير جداً</td><td className="border-b px-4 py-2">10,000 MAD</td><td className="border-b px-4 py-2">~200 MAD</td></tr>
              <tr><td className="border-b px-4 py-2">صغير</td><td className="border-b px-4 py-2">20,000 - 30,000 MAD</td><td className="border-b px-4 py-2">~500 MAD</td></tr>
              <tr><td className="border-b px-4 py-2">متوسط</td><td className="border-b px-4 py-2">40,000 - 50,000 MAD</td><td className="border-b px-4 py-2">~1,000 MAD</td></tr>
            </tbody>
          </table>
        </div>

        <h2>خطوات التسجيل ف INTELAKA</h2>
        <ol>
          <li><strong>دخل ل intelaka.ma:</strong> وأنشئ حساب جديد.</li>
          <li><strong>اختر نوع المشروع:</strong> من القائمة: صناعي، تجاري، خدمي، فلاحي، حرفي.</li>
          <li><strong>املأ الاستمارة:</strong> معلومات شخصية + معلومات المشروع.</li>
          <li><strong>حمل الوثائق:</strong> CV + بطاقة وطنية + دراسة بسيطة للسوق.</li>
          <li><strong>سجل فالتكوين الأساسي:</strong> 20 ساعة (حضوري أو عن بعد).</li>
          <li><strong>قدم الملف النهائي:</strong> بعد التكوين.</li>
          <li><strong>الدراسة والموافقة:</strong> 30 يوم.</li>
          <li><strong>التوقيع والصرف:</strong> فحسابك البنكي.</li>
        </ol>

        <h2>الوثائق المطلوبة</h2>
        <ul>
          <li>نسخة من بطاقة التعريف الوطنية.</li>
          <li>السيرة الذاتية (CV).</li>
          <li>وصف المشروع (Fiche projet).</li>
          <li>دراسة بسيطة للسوق والمنافسة.</li>
          <li>تقدير التكاليف والإيرادات (Budget prévisionnel).</li>
          <li>وصل السكن (Justificatif de domicile).</li>
        </ul>

        <h2>التكوين الأساسي ف INTELAKA</h2>
        <p>التكوين الأساسي (20 ساعة) هو شرط ضروري للحصول على التمويل. كايغطي:</p>
        <ul>
          <li>ريادة الأعمال: شنو هي المقاولة؟</li>
          <li>إعداد دراسة السوق.</li>
          <li>إعداد خطة العمل (Business Plan).</li>
          <li>التسويق والمبيعات.</li>
          <li>الإدارة المالية.</li>
          <li>الجوانب القانونية والضريبية.</li>
        </ul>

        <h2>أفكار مشاريع مناسبة ل INTELAKA</h2>
        <ul>
          <li><strong>مطعم صغير (Snack):</strong> تكلفة 30,000 - 50,000 MAD.</li>
          <li><strong>محل حلاقة/كوافير:</strong> تكلفة 15,000 - 30,000 MAD.</li>
          <li><strong>خدمات التنظيف:</strong> تكلفة 10,000 - 20,000 MAD.</li>
          <li><strong>تربية الدواجن:</strong> تكلفة 20,000 - 40,000 MAD.</li>
          <li><strong>تصليح الهواتف:</strong> تكلفة 15,000 - 25,000 MAD.</li>
          <li><strong>سيارة أجرة صغيرة:</strong> تكلفة 40,000 - 50,000 MAD.</li>
          <li><strong>محل بقالة:</strong> تكلفة 20,000 - 40,000 MAD.</li>
        </ul>

        <h2>نصائح للنجاح ف INTELAKA</h2>
        <ul>
          <li><strong>كن جاداً:</strong> البرنامج كايستهدف الشباب الجاد. أظهر أنك عازم.</li>
          <li><strong>جهز دراسة السوق:</strong> حتى لو بسيطة. شنو المشكل؟ شنو الحل؟ من هم الزبناء؟</li>
          <li><strong>حضر خطة العمل:</strong> التكاليف، الإيرادات، الربحية. كن واقعياً.</li>
          <li><strong>التزم بالتكوين:</strong> الحضور المنتظم فالتكوين كايزيد فرصك.</li>
          <li><strong>اسأل:</strong> إذا عندك أي سؤال، اسأل فريق البرنامج. هم كايعاونوك.</li>
        </ul>

        <hr />

        <h2>ختاما</h2>
        <p>INTELAKA (انطلاقة) هو فرصة للشباب المغربي باش يبدا مشروعو بتمويل ميسر بدون فايدة. ف 2026، البرنامج متاح فجميع جهات المغرب. قدم على intelaka.ma، حضر ملفك، وابدأ مشوارك المقاولاتي. نجاحك فهاد البرنامج يمكن يكون بداية طريقك لريادة الأعمال.</p>
    </ArticleLayout>
  );
}
