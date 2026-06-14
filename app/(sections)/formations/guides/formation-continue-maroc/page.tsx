import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "التدريب المستمر للعاملين في المغرب 2026 (دليل كامل)",
  description: "دليل شامل للتدريب والتكوين المستمر للموظفين في القطاعين العام والخاص في المغرب.",
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
    { "@type": "ListItem", position: 2, name: "قسم التكوين", item: "https://tawdifpro.ma/formations" },
    { "@type": "ListItem", position: 3, name: "التدريب المستمر للعاملين في المغرب 2026", item: "https://tawdifpro.ma/formations/guides/formation-continue-maroc" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هو التكوين المستمر (Formation continue) فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التكوين المستمر هو التدريب المهني لي كايتلقاه العامل بعد بداية مسيرته المهنية. الهدف هو تطوير المهارات، اكتساب معرفة جديدة، مواكبة التطورات التكنولوجية. فالمغرب، التكوين المستمر كايشمل: التدريب الداخلي (Interne)، التدريب الخارجي (Externe)، التكوين عن بعد، والتدريب فالميدان.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي حقوق العامل فالتكوين المستمر فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "القانون المغربي (مدونة الشغل) كايعطي الحق ف التكوين المستمر. كل شركة (أكثر من 10 مستخدمين) ملزمة بتخصيص 1.5% من كتلة الأجور للتكوين المستمر. العامل عندو الحق ف: 1) إجازة التكوين (Congé de formation) - 15 يوم فالسنة، 2) خطة التكوين السنوية، 3) المشاركة فاختيار التكوين المناسب.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي مؤسسات التكوين المستمر فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أهم مؤسسات التكوين المستمر فالمغرب: 1) OFPPT - عندو برامج للتكوين المستمر (Formation Continue)، 2) CFCIM (Chambre Française de Commerce et d&apos;Industrie du Maroc) - تكوينات مهنية معتمدة، 3) ISCAE, HEM, ESA - مدارس الإدارة والتجارة، 4) مراكز متخصصة: Microsoft Learning Center, Cisco Academy, 5) منصات أونلاين: LinkedIn Learning, Coursera, Edx.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي برامج التمويل للتكوين المستمر فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "برامج التمويل: 1) OFPPT - التكوين المستمر المجاني (حسب الميزانية)، 2) ANAPEC - تمويل التكوين لطالبي الشغل (Idmaj, Tawhidi)، 3) صندوق الحسن الثاني للتنمية - منح للتكوين، 4) FNE (Fonds National de l&apos;Emploi) - تمويل التكوين المرتبط بالتشغيل، 5) برامج القطاع الخاص - الشركات كاتموّل تكوين موظفيها.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي أفضل تكوينات مستمرة فالمغرب 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أفضل التكوينات المستمرة فالمغرب 2026: 1) التسويق الرقمي (Digital Marketing) - Google, Meta, HubSpot، 2) تحليل البيانات (Data Analysis) - Power BI, Tableau, Python، 3) إدارة المشاريع - PMP, Agile, Scrum، 4) اللغات - الإنجليزية، الفرنسية، الصينية، 5) البرمجة - Web, Mobile, AI, 6) المهارات القيادية (Leadership, Management).",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نطلب إجازة التكوين (Congé de formation) من المشغل؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "طلب إجازة التكوين فالمغرب: 1) قدم طلب مكتوب للمشغل 30 يوم قبل بداية التكوين، 2) ارفق: برنامج التكوين، المدة، التكلفة، اسم المؤسسة، 3) المشغل خاصو يرد ف 15 يوم، 4) يمكن للمشغل رفض الطلب إذا كان التكوين غير مرتبط بالوظيفة ولا إذا كانت مصلحة العمل تحتاجك. إذا رفض، اكتب الأسباب ف ورقة رسمية.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي شهادات التكوين المستمر المعترف بها فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الشهادات المعترف بها فالمغرب للتكوين المستمر: 1) شهادات OFPPT (Attestation de formation)، 2) شهادات من مؤسسات معتمدة (CFCIM, ISCAE)، 3) الشهادات الدولية (PMP, Google, Microsoft, CISCO, AWS) معترف بها من طرف الشركات المغربية الكبرى، 4) شهادات اللغات (TOEIC, DELF, IELTS). الشركات كاتعترف بالشهادات الصادرة من مؤسسات معتمدة من الدولة.",
      },
    },
  ],
};

const schemas = [articleSchema, breadcrumbSchema, faqSchema];

export default function FormationContinueMarocPage() {
  return (
    <ArticleLayout
      schemas={schemas}
      breadcrumbs={[
        { name: "قسم التكوين", href: "/formations" },
        { name: "التدريب المستمر للعاملين في المغرب 2026", href: "/formations/guides/formation-continue-maroc" }
      ]}
      title="التدريب المستمر للعاملين في المغرب 2026 (دليل كامل)"
      readingTime="10 دقائق قراءة"
    >
<p>العالم كايتغير بسرعة. المهارات لي كانت مطلوبة 2020، ولّا قديمة ف 2026. هادشي علاش التكوين المستمر (Formation continue) ولّا ضروري باش تبقى تنافسي فسوق الشغل.</p>

        <p>فهاد المقال، غادي نعرفوك على كل شي خاص بالتدريب المستمر للعاملين فالمغرب 2026: الحقوق، البرامج، التمويل، وأفضل المؤسسات.</p>

        <hr />

        <h2>شنو هو التكوين المستمر؟</h2>
        <p>التكوين المستمر هو عملية تعلم مستدامة كايديرها العامل بعد ما بدا الخدمة. الهدف:</p>
        <ul>
          <li>تطوير المهارات الحالية (Upgrading).</li>
          <li>اكتساب مهارات جديدة (Reskilling).</li>
          <li>مواكبة التطورات التكنولوجية.</li>
          <li>التأهيل للترقية المهنية.</li>
          <li>تحسين فرص الشغل والراتب.</li>
        </ul>

        <h2>حقوق العامل فالتكوين المستمر فالمغرب</h2>
        <p>القانون المغربي كايحمي حق العامل فالتكوين المستمر. النقاط الرئيسية:</p>
        <ul>
          <li><strong>المادة 543 من مدونة الشغل:</strong> كل مقاولة ملزمة بوضع برنامج سنوي للتكوين المستمر.</li>
          <li><strong>التمويل الإلزامي:</strong> 1.5% من كتلة الأجور السنوية خاصها تكون للتكوين المستمر.</li>
          <li><strong>إجازة التكوين:</strong> 15 يوم فالسنة للعامل باش يتابع تكوين.</li>
          <li><strong>عدم التمييز:</strong> كل العاملين عندهم نفس الحق فالتكوين بغض النظر عن السن، الجنس، ولا المنصب.</li>
        </ul>

        <h2>أنواع التكوين المستمر</h2>
        <ul>
          <li><strong>التكوين الداخلي (Formation interne):</strong> كايدوي داخل الشركة مع مدربين داخليين أو خارجيين.</li>
          <li><strong>التكوين الخارجي (Formation externe):</strong> فمراكز تدريب متخصصة.</li>
          <li><strong>التكوين عن بعد (E-learning):</strong> عبر منصات أونلاين.</li>
          <li><strong>التكوين بالمقاولة (Formation en entreprise):</strong> التدريب فمجال العمل (Learning by doing).</li>
          <li><strong>التدريب الفردي (Coaching/Mentoring):</strong> مع خبير فالمجال.</li>
        </ul>

        <h2>أفضل المؤسسات للتكوين المستمر فالمغرب</h2>

        <h3 className="text-xl font-bold text-gray-900">OFPPT - التكوين المستمر</h3>
        <p>OFPPT عندو قسم خاص بالتكوين المستمر (Service de Formation Continue). كايقدم تكوينات قصيرة فجميع المجالات بأسعار رمزية. التخصصات: الصناعة، البناء، التكنولوجيا، الخدمات.</p>

        <h3 className="text-xl font-bold text-gray-900">CFCIM (الغرفة الفرنسية للتجارة والصناعة)</h3>
        <p>CFCIM ف الدار البيضاء كاتقدم تكوينات مهنية معتمدة دولياً. التخصصات: الإدارة، المالية، الموارد البشرية، التسويق. الشهادات معترف بها من الدولة الفرنسية والمغربية.</p>

        <h3 className="text-xl font-bold text-gray-900">مدارس الإدارة (ISCAE, HEM, ESA)</h3>
        <p>هاد المدارس عندها برامج تكوين مستمر للأطر (Cadres). كايتوفر Executive MBA, Certificats spécialisés. المدة: 3 - 12 شهر. الأسعار: 30,000 - 100,000 MAD.</p>

        <h3 className="text-xl font-bold text-gray-900">Microsoft Learning Center / Cisco Academy</h3>
        <p>مراكز تدريب معتمدة من Microsoft و Cisco. كايتوفر تكوينات فالتكنولوجيا: Azure, Office 365, Networks, Security. بشهادات دولية.</p>

        <h2>كيفاش تموّل التكوين المستمر ديالك؟</h2>
        <ul>
          <li><strong>الشركة:</strong> الشركة ملزمة بتمويل التكوين المستمر من ميزانية 1.5%.</li>
          <li><strong>OFPPT:</strong> تكوينات مجانية أو برسم رمزي.</li>
          <li><strong>ANAPEC:</strong> دعم التكوين لطالبي الشغل.</li>
          <li><strong>برامج حكومية:</strong> صندوق الحسن الثاني، FNE.</li>
          <li><strong>تمويل ذاتي:</strong> استثمر فمستقبلك. التكوين هو أحسن استثمار.</li>
        </ul>

        <h2>أهم التكوينات المستمرة المطلوبة 2026</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b px-4 py-2 text-right font-medium">المجال</th>
                <th className="border-b px-4 py-2 text-right font-medium">التكوين</th>
                <th className="border-b px-4 py-2 text-right font-medium">المدة</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border-b px-4 py-2">التسويق الرقمي</td><td className="border-b px-4 py-2">Google Digital Garage</td><td className="border-b px-4 py-2">40 ساعة</td></tr>
              <tr><td className="border-b px-4 py-2">تحليل البيانات</td><td className="border-b px-4 py-2">Power BI / Tableau</td><td className="border-b px-4 py-2">60 ساعة</td></tr>
              <tr><td className="border-b px-4 py-2">إدارة المشاريع</td><td className="border-b px-4 py-2">PMP / Scrum</td><td className="border-b px-4 py-2">120 ساعة</td></tr>
              <tr><td className="border-b px-4 py-2">اللغات</td><td className="border-b px-4 py-2">TOEIC / DELF</td><td className="border-b px-4 py-2">80 ساعة</td></tr>
              <tr><td className="border-b px-4 py-2">البرمجة</td><td className="border-b px-4 py-2">Full Stack Web</td><td className="border-b px-4 py-2">200 ساعة</td></tr>
              <tr><td className="border-b px-4 py-2">القيادة</td><td className="border-b px-4 py-2">Leadership & Management</td><td className="border-b px-4 py-2">40 ساعة</td></tr>
            </tbody>
          </table>
        </div>

        <h2>نصائح للاستفادة القصوى من التكوين المستمر</h2>
        <ul>
          <li><strong>طابق مع أهدافك المهنية:</strong> اختار تكوين كايساعدك ف مسيرتك.</li>
          <li><strong>اطلب من المشغل:</strong> تقدر تطلب تكوين معين. الشركة كايكون عندها ميزانية.</li>
          <li><strong>استعمل التكوين عن بعد:</strong> مرن وأقل تكلفة.</li>
          <li><strong>طبق المعرفة:</strong> التكوين بلا تطبيق ما عندوش قيمة.</li>
          <li><strong>شارك زملاءك:</strong> التعلم الجماعي أنجع.</li>
        </ul>

        <h2>إجازة التكوين (Congé de Formation)</h2>
        <p>كل عامل عندو الحق ف 15 يوم فالسنة للتكوين. كيفاش كايدوي الإجراء:</p>
        <ul>
          <li>قدم طلب مكتوب 30 يوم قبل بداية التكوين.</li>
          <li>ارفق برنامج التكوين والمؤسسة.</li>
          <li>انتظر الرد ف 15 يوم.</li>
          <li>إذا رفض، اكتب الأسباب.</li>
        </ul>

        <hr />

        <h2>ختاما</h2>
        <p>التكوين المستمر هو المفتاح باش تبقى فالسوق وانت تطور. فالمغرب 2026، الفرص متاحة: تكوينات مجانية، تمويل حكومي، وبرامج معتمدة. ما تفوتش الفرصة. استثمر فمستقبلك المهني اليوم.</p>
    </ArticleLayout>
  );
}
