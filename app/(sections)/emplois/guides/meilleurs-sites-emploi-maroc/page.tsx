import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "أفضل 10 مواقع للبحث عن عمل في المغرب 2026 (مجانية وحديثة) | Tawdif Pro",
  description: "أفضل مواقع البحث عن عمل في المغرب 2026: Rekrute, MarocAnnonces, LinkedIn, Tanmia.ma والمزيد. دليلك الكامل للعثور على وظيفة في المغرب.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "أفضل 10 مواقع للبحث عن عمل في المغرب 2026 (مجانية وحديثة)",
  description: "دليل شامل لأفضل منصات التوظيف في المغرب 2026 مع روابط مباشرة ونصائح للاستخدام.",
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
    { "@type": "ListItem", position: 3, name: "أفضل 10 مواقع للبحث عن عمل في المغرب 2026", item: "https://tawdifpro.ma/emplois/guides/meilleurs-sites-emploi-maroc" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هو أفضل موقع للبحث عن عمل فالمغرب 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rekrute.com هو أفضل موقع متخصص فالتوظيف فالمغرب. عندو قاعدة بيانات كبيرة دالشركات المغربية والأجنبية. كايتميز بواجهة سهلة، تنبيهات الوظائف، وإمكانية تحميل CV مباشرة. كايتابعوه أكثر من 500 شركة مغربية وعالمية. فالمقابل، MarocAnnonces كايتميز بالتنوع والكمية الكبيرة ديال الإعلانات اليومية.",
      },
    },
    {
      "@type": "Question",
      name: "شنو الفرق بين Rekrute و MarocAnnonces فالبحث على الوظائف؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rekrute موقع متخصص فالتوظيف فقط، كايقدم خدمات تصفية متقدمة (المجال، المدينة، المستوى)، وكاتكون فيه الفرص رسمية من شركات معروفة. MarocAnnonces موقع إعلانات عام، فيه الوظائف ولكن كاين خلط مع إعلانات أخرى. Rekrute أنسب للمهنيين والباحثين على وظائف نوعية، MarocAnnonces أنسب للبحث السريع والوظائف المتنوعة.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نستعمل LinkedIn باش نلقى خدمة فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LinkedIn هو شبكة مهنية عالمية ولكن عندو حضور قوي فالمغرب. باش تستفيد: 1) كمل البروفايل ديالك بالفرنسية والعربية، 2) ضبط إعدادات البحث على المغرب، 3) تابع الشركات المغربية الكبرى (OCP, CNSS, BMCE, إلخ)، 4) شارك فالمجموعات المهنية، 5) استعمل خاصية Easy Apply. أكثر من 60% من المسؤولين المغاربة كايستخدموا LinkedIn.",
      },
    },
    {
      "@type": "Question",
      name: "واش Tanmia.ma موقع حكومي ولا خاص؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tanmia.ma هو منصة حكومية مغربية (وكالة التشغيل ANAPEC) مجانية بالكامل. كايوفق بين الباحثين عن الشغل والمقاولات. الميزة فيه: 1) مجاني 100%، 2) فيه عروض من شركات رسمية، 3) كايدعم التوجيه المهني، 4) عندو برامج التكوين والتشغيل. العيب: عدد العروض قليل مقارنة ب Rekrute.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي النصائح باش نجح فالبحث على موقع توظيف فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أهم النصائح: 1) خصص CV ديالك لكل وظيفة (ما ترسلش نفس CV للجميع)، 2) استعمل الكلمات المفتاحية لي كاتطابق الوصف الوظيفي، 3) سجل فـ 3 مواقع على الأقل باش توسع الفرص، 4) جدد البروفايل كل شهر، 5) استعمل خاصية التنبيهات باش ما تفوتكش الفرص، 6) قدم على 10 على الأقل كل أسبوع.",
      },
    },
    {
      "@type": "Question",
      name: "واش كاين مواقع توظيف خاصة بالدار البيضاء ولا الرباط؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "إي كاين. معظم المواقع كاتسمح بالتصفية حسب المدينة. ف Rerute و MarocAnnonces تقدر تحدد الدار البيضاء، الرباط، مراكش، طنجة، فاس، إلخ. الدار البيضاء كاتمثل 40% من فرص العمل فالمغرب. كاينين مواقع متخصصة فالمجال الصناعي فطنجة والمحمدية.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي مواقع التوظيف المجانية فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "جميع المواقع لي ذكرناها فهاد المقال مجانية للباحثين عن العمل. Rekrute, MarocAnnonces, Tanmia.ma, LinkedIn, Emploi.ma, Job.ma,和专业 مواقع متخصصة. بعض المواقع كاتطلب الاشتراك باش تشوف تفاصيل الإعلان، ولكن الأغلبية مجانية. Tanmia.ma حكومي ومجاني 100%.",
      },
    },
  ],
};

export default function MeilleursSitesEmploiMarocPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">الرئيسية</Link>
        {" > "}
        <Link href="/emplois" className="hover:text-emerald-600">التوظيف</Link>
        {" > "}
        <span className="text-gray-900">أفضل 10 مواقع للبحث عن عمل في المغرب 2026</span>
      </nav>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">أفضل 10 مواقع للبحث عن عمل في المغرب 2026 (مجانية وحديثة)</h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>.</span>
          <span>12 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">

        <p>البحث على خدمة فالمغرب 2026 ولّا صعيب بزاف. المنافسة كبيرة، والشركات فالتطور. ولكن مع هاد المواقع، غادي تقدر تلقى أكبر عدد من الفرص فمكان واحد. سواء كنت خريج جديد، ولا موظف باغي تبدل الخدمة، ولا عاطل، هاد القائمة د sites دالبحث على l&apos;emploi فالمغرب غادي تفيدك.</p>

        <p>فهاد المقال غادي نعرفوك على أفضل 10 مواقع توظيف فالمغرب 2026. كل موقع عندو مميزاتو وعيوبو. المهم أنك تستعمل 3 على الأقل باش توسع فرصك.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">1. Rekrute.com — الموقع الأول للتوظيف فالمغرب</h2>
        <p>Rekrute هو أكبر موقع توظيف فالمغرب. تأسس ف 1999، وعندو قاعدة بيانات كبيرة ديال الشركات والباحثين. ف 2026, Rekrute باقي أقوى منصة مهنية فالمغرب.</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>عدد الزوار:</strong> أكتر من 1.5 مليون زائر كل شهر.</li>
          <li><strong>الشركات:</strong> أكتر من 500 شركة مغربية ودولية.</li>
          <li><strong>القطاعات:</strong> كل القطاعات: الهندسة، المالية، التجارة، التعليم، الصحة، IT.</li>
          <li><strong>المميزات:</strong> إعلانات محدثة يومياً، إمكانية تحميل CV، تنبيهات عبر الإيميل، مقالات ونصائح.</li>
          <li><strong>السعر:</strong> مجاني للباحثين عن العمل.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">2. MarocAnnonces.com — الأكثر تنوعاً</h2>
        <p>MarocAnnonces هو منصة إعلانات مبوبة مغربية. فيها قسم خاص بالوظائف (Emploi). كاتميز بالكمية الكبيرة ديال الإعلانات اليومية.</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>الميزة:</strong> التنوع والكمية.</li>
          <li><strong>العيب:</strong> بعض الإعلانات غير محدثة.</li>
          <li><strong>نصيحة:</strong> استعمل التصفية (Filtres) باش تلقى الوظائف الحديثة.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">3. LinkedIn.com — الشبكة المهنية العالمية</h2>
        <p>LinkedIn هو أكبر شبكة مهنية فالعالم. فالمغرب، عندو حضور قوي. الشركات الكبرى كاتنشر الإعلانات هنا أولاً. الفرق بين LinkedIn والمواقع التقليدية أنك تقدر تتواصل مباشرة مع المسؤولين والموظفين.</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>المستخدمين فالمغرب:</strong> أكتر من 3 ملايين مستخدم.</li>
          <li><strong>اللغة:</strong> الفرنسية والإنجليزية.</li>
          <li><strong>خاصية Easy Apply:</strong> تقدّم لوظيفة بنقرة وحدة.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">4. Tanmia.ma — المنصة الحكومية للتشغيل (ANAPEC)</h2>
        <p>Tanmia.ma هي منصة ANAPEC الرسمية. مجانية 100% وكاتربطك ببرامج التكوين والتشغيل الحكومية. كاتوفق بين المهارات ديالك واحتياجات الشركات. الأنسب للشباب والخريجين الجدد.</p>

        <h2 className="text-2xl font-bold text-gray-900">5. Emploi.ma — موقع متخصص</h2>
        <p>Emploi.ma هو موقع توظيف مغربي آخر. عندو واجهة بسيطة وسهلة. كايتميز بالوظائف فمجالات: التجارة، الإدارة، المالية، والهندسة.</p>

        <h2 className="text-2xl font-bold text-gray-900">6. Job.ma — البحث السريع</h2>
        <p>Job.ma هو منصة مغربية كاتجمع إعلانات الوظائف من عدة مصادر. ما عندوش واجهة معقدة. الأنسب للبحث السريع.</p>

        <h2 className="text-2xl font-bold text-gray-900">7. Groupe Rekrute Academy — التوظيف عبر التكوين</h2>
        <p>هاد المنصة كاتربط بين التكوين والتوظيف. كايديرو دورات تكوينية، وبعدها كايوفرو فرص عمل للمتدربين. أنسب للشباب لي باغي يكتسب مهارات جديدة قبل البحث على الخدمة.</p>

        <h2 className="text-2xl font-bold text-gray-900">8. Indeed.ma — العملاق العالمي</h2>
        <p>Indeed هو أكبر محرك بحث عن الوظائف فالعالم. النسخة المغربية (Indeed.ma) كاتجمع إعلانات من مواقع مغربية متعددة. قاعدة البيانات ديالو كبيرة بزاف. كايتميز بالتصفية المتقدمة (الراتب، التاريخ، الشركة).</p>

        <h2 className="text-2xl font-bold text-gray-900">9. JobIQR.ma — جديد ومبتكر</h2>
        <p>JobIQR منصة مغربية جديدة نسبياً. كاتميز بالذكاء الاصطناعي باش تطابق CV ديالك مع الوظائف المتاحة. عندها تطبيق للهاتف بواجهة عصرية.</p>

        <h2 className="text-2xl font-bold text-gray-900">10. Facebook Groups — الميتافيرس ديال التوظيف</h2>
        <p>بزاف ديال المجموعات ف Facebook كاتخصص للوظائف فالمغرب. مثلاً: &quot;Offres d&apos;emploi au Maroc&quot;، &quot;وظائف المغرب&quot;، &quot;Emploi Casablanca&quot;. بعض الشركات الصغيرة والمتوسطة كاتنشر الفرص هنا حيت رخيصة وسريعة.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">كيفاش تختار الموقع المناسب ليك؟</h2>
        <p>ما عندكش باش تسجل فجميع المواقع. اختار 3 على حسب:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>إذا كنت خريج جديد:</strong> Rekrute + Tanmia.ma + LinkedIn.</li>
          <li><strong>إذا كنت عندك خبرة:</strong> Rekrute + LinkedIn + Indeed.</li>
          <li><strong>إذا كنت باغي خدمة سريعة:</strong> MarocAnnonces + Job.ma + Facebook.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">نصائح ذهبية للنجاح فالبحث عبر الإنترنت</h2>
        <p>هاد النصائح غادي تزيد فرصك ب 70%:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>حدّث البروفايل:</strong> كل شهر، جدد المعلومات والخبرات.</li>
          <li><strong>استعمل الكلمات المفتاحية:</strong> قرا الإعلان مزيان وضمن نفس الكلمات ف CV.</li>
          <li><strong>خصص لكل وظيفة:</strong> ما ترسلش CV عام. عدل عليه حسب كل وظيفة.</li>
          <li><strong>قدم بانتظام:</strong> 5 على الأقل كل يوم.</li>
          <li><strong>تابع:</strong> بعد 7 أيام من التقديم، تابع ب إيميل أو LinkedIn.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">إحصائيات سوق الشغل فالمغرب 2026</h2>
        <p>حسب آخر الإحصائيات:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li>معدل البطالة فالمغرب 2026: 12.5%.</li>
          <li>البطالة فالشباب (15-24 سنة): 30%.</li>
          <li>الدار البيضاء كاتجمع 40% من فرص العمل.</li>
          <li>قطاع IT والتكنولوجيا كايطلب 80% زيادة مقارنة ب 2020.</li>
          <li>الراتب المتوسط للخريج الجديد: 5,000 - 8,000 MAD.</li>
        </ul>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">ختاما</h2>
        <p>هاد المواقع غادي تعطيك فرص كبيرة باش تلقى خدمة فالمغرب. المهم هو المثابرة والتخصيص. ما تيأسش. كل ما تقدم على وظائف كتر، كل ما زادت فرصك. الله يوفق.</p>

      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          {"اقرا أيضا: "}
          <Link href="/emplois/guides/cv-professionnel-maroc-2026" className="text-emerald-600 underline hover:text-emerald-800">كيف تكتب CV احترافي</Link>
          {" | "}
          <Link href="/emplois/guides/conseils-entretien-embauche" className="text-emerald-600 underline hover:text-emerald-800">نصائح مقابلة العمل</Link>
          {" | "}
          <Link href="/salary-calculator" className="text-emerald-600 underline hover:text-emerald-800">احسب راتبك الصافي</Link>
        </p>
      </div>
    </article>
  );
}
