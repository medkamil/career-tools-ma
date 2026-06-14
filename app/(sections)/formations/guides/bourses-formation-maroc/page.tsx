import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "منح التكوين المهني في المغرب 2026 (دليل كامل) | Tawdif Pro",
  description: "دليل كامل لمنح التكوين المهني في المغرب 2026. منح OFPPT, منح وزارة التربية, منح الاتحاد الأوروبي, وكيفية التقديم.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "منح التكوين المهني في المغرب 2026 (دليل كامل)",
  description: "دليل شامل لمنح التكوين المهني المتاحة في المغرب لسنة 2026.",
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
    { "@type": "ListItem", position: 3, name: "منح التكوين المهني في المغرب 2026", item: "https://tawdifpro.ma/formations/guides/bourses-formation-maroc" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هي منح التكوين المهني فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "منح التكوين المهني هي مساعدات مالية (Bourses) كاتقدم للطلاب والمتدربين باش يغطيو تكاليف التكوين. فالمغرب، كاين عدة أنواع: منح حكومية (OFPPT, وزارة التربية)، منح من الاتحاد الأوروبي (Erasmus+, Creative Europe)، منح من مؤسسات خاصة (OCP Foundation, BMCE Foundation)، ومنح من الوكالة الوطنية لإنعاش التشغيل (ANAPEC).",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نقدم على منحة OFPPT 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "منحة OFPPT (Indemnité de stage) كاتصرف للمتدربين فبعض التخصصات. المبلغ: 300 - 800 درهم شهرياً. التقديم: يتم تلقائياً بعد التسجيل ف OFPPT. الشروط: الحضور المنتظم (أقل من 80% غياب)، النجاح فالامتحانات، وتوفر الميزانية. الصرف كايدوي عبر البنك (Attijariwafa, BCP, BMCE).",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي منحة Erasmus+ للمغاربة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Erasmus+ هو برنامج الاتحاد الأوروبي للتبادل الطلابي والتكوين. فالمغرب، الطلاب كايقضيو مدة (3-12 شهر) فجامعة أوروبية مع منحة شهرية (700 - 1,200 يورو). الشروط: مسجل ف جامعة مغربية، معدل جيد، مستوى لغة (TOEFL/IELTS/DELF). المنحة كاتغطي السفر، الإقامة، والتأمين الصحي.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي شروط منحة OCP Foundation؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OCP (Office Chérifien des Phosphates) Foundation عندها برامج منح متعددة. شروط عامة: الجنسية المغربية، التفوق الدراسي (معدل 14/20 فأكثر)، الحاجة المالية، التسجيل ف جامعة مغربية أو معهد مرموق. المبلغ: 30,000 - 80,000 درهم سنوياً حسب البرنامج. التخصصات المطلوبة: الهندسة، العلوم، التكنولوجيا، والفلاحة المستدامة.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي منحة ANAPEC للتكوين؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ANAPEC (وكالة التشغيل المغربية) كاتقدم منحة التكويم لطالبي الشغل. البرامج: Idmaj (الإدماج) - منحة للمقاولات لي كايشغلو الخريجين، Tawhidi (توحيدي) - التكوين فمقاولات صغرى. الشروط: مسجل ف ANAPEC، عمر أقل من 35 سنة. المبلغ: 1,500 - 2,000 درهم شهرياً خلال فترة التكوين.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي منحة BMCE Foundation للتفوق؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BMCE Bank Foundation (Fondation BMCE) عندها برنامج &quot;Talent Club&quot; ومنح للتفوق. كاتغطي رسوم التسجيل، الكتب، والسكن. التخصصات: الإدارة، المالية، الهندسة. الشروط: التفوق، القيادة، الأنشطة الجمعوية. التقديم عبر موقع BMCE Foundation.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش ألقى منح للتكوين المهني خارج المغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "منصات البحث على المنح العالمية: 1) Scholars4Dev.com (مجموعة من المنح)، 2) Opportunities.info (منح, تداريب, مسابقات)، 3) الموقع الرسمي للسفارات فالمغرب (السفارة الفرنسية، الأمريكية، الكندية)، 4) Campus France Maroc (منح فرنسا)، 5) EducationUSA Maroc (منح أمريكا). الأكثر طلباً: Eiffel Scholarship, Chevening (بريطانيا), Fulbright (أمريكا).",
      },
    },
  ],
};

export default function BoursesFormationMarocPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">الرئيسية</Link>
        {" > "}
        <Link href="/formations" className="hover:text-emerald-600">التكوين</Link>
        {" > "}
        <span className="text-gray-900">منح التكوين المهني في المغرب 2026</span>
      </nav>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">منح التكوين المهني في المغرب 2026 (دليل كامل)</h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>.</span>
          <span>12 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">

        <p>التكوين المهني فالمغرب 2026 كايتطور بسرعة. الحكومة والمؤسسات الخاصة والعالمية كايتوفر منح (Bourses) للمغاربة باش يطورو مهاراتهم. هاد المنح كاتغطي من المصاريف الدراسية للسكن والمعيشة.</p>

        <p>فهاد المقال، غادي نعرفوك على أفضل منح التكوين المهني فالمغرب 2026: شروطها، مبالغها، وكيفاش تقدم عليها.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">1. منحة OFPPT للمتدربين</h2>
        <p>OFPPT كاتصرف منحة شهرية (Indemnité de stage) للمتدربين. المبلغ: 300 - 800 درهم شهرياً. كاتصرف للمتدربين فالتخصصات التقنية والمهنية. الشروط: الحضور المنتظم والنتائج الجيدة.</p>

        <h2 className="text-2xl font-bold text-gray-900">2. منح وزارة التربية الوطنية والتكوين المهني</h2>
        <p>الوزارة عندها برامج منح للتكوين المهني. المبالغ: 500 - 1,500 درهم شهرياً. التخصصات المطلوبة: البناء، الصناعة، الفلاحة، السياحة. التقديم عبر الموقع الرسمي للوزارة.</p>

        <h2 className="text-2xl font-bold text-gray-900">3. منح ANAPEC (وكالة التشغيل)</h2>
        <p>ANAPEC كاتقدم منح للباحثين عن الشغل لي باغي يتدرب فشركة. البرامج: Idmaj (الإدماج)، Tawhidi (توحيدي). المبلغ: 1,500 - 2,000 درهم شهرياً خلال التكوين. المدة: 3 - 12 شهر.</p>

        <h2 className="text-2xl font-bold text-gray-900">4. منح OCP Foundation</h2>
        <p>مؤسسة OCP (المكتب الشريف للفوسفاط) عندها عدة برامج منح:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>منحة التميز:</strong> 30,000 - 80,000 درهم سنوياً للطلاب المتفوقين.</li>
          <li><strong>برنامج OCP School of Management:</strong> منح كاملة لدراسة الإدارة.</li>
          <li><strong>منح البحث العلمي:</strong> لطلاب الدكتوراه.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">5. منح Erasmus+ (الاتحاد الأوروبي)</h2>
        <p>Erasmus+ هو برنامج التبادل الطلابي الأكبر فالعالم. فالمغرب، الطلاب كايقضيو 3-12 شهر فجامعة أوروبية (فرنسا، إسبانيا، ألمانيا، إيطاليا). المنحة كاتغطي:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li>السفر (ذهاب وإياب): 800 - 1,500 يورو.</li>
          <li>الإقامة: 700 - 1,200 يورو شهرياً.</li>
          <li>التأمين الصحي.</li>
          <li>رسوم الجامعة (معفاة).</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">6. منح BMCE Foundation</h2>
        <p>مؤسسة BMCE كاتقدم منح للتفوق الدراسي. برنامج &quot;Talent Club&quot; كايغطي رسوم التسجيل والكتب. الهدف: دعم الشباب المتميز فالمجالات المالية والإدارية.</p>

        <h2 className="text-2xl font-bold text-gray-900">7. منح السفارات والمنظمات العالمية</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>Bourse Eiffel (فرنسا):</strong> منحة كاملة للدراسة فجامعات فرنسا. 1,500 يورو شهرياً.</li>
          <li><strong>Chevening (بريطانيا):</strong> منحة الحكومة البريطانية. كاتغطي كلشي: التكاليف، السفر، الإقامة.</li>
          <li><strong>Fulbright (أمريكا):</strong> منحة للدراسة ف أمريكا. كاتغطي 100%.</li>
          <li><strong>DAAD (ألمانيا):</strong> منح للدراسة ف ألمانيا. 850 - 1,200 يورو شهرياً.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">كيفاش تقدم على منحة بنجاح؟</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>اقرا الشروط مزيان:</strong> تأكد أنك كاتطابق كل الشروط.</li>
          <li><strong>جهز الوثائق:</strong> CV، رسالة تحفيز (Lettre de motivation)، الشهادات، خطابات التوصية (Lettres de recommandation).</li>
          <li><strong>ركز على الرسالة التحفيزية:</strong> هي أهم وثيقة. اشرح شنو باغي تحقق، شنو عندك من مهارات، وشنو غادي تضيف للمجال.</li>
          <li><strong>قدم باكر:</strong> ما تسكتش حتى آخر يوم. المنح كايتقبلو الطلبات بالترتيب.</li>
          <li><strong>اطلب Recommendations:</strong> من أساتذتك أو المشرفين ديالك.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">نموذج رسالة تحفيزية (Lettre de Motivation)</h2>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm leading-7">
          <p>Objet: Candidature à la bourse [Nom de la bourse]</p>
          <p>Madame, Monsieur,</p>
          <p>Actuellement titulaire d&apos;un diplôme en [domaine], je souhaite postuler à la bourse [Nom] afin de poursuivre ma formation en [spécialité]. Mon parcours académique et mon engagement associatif m&apos;ont permis de développer des compétences en [compétences].</p>
          <p>Cette bourse me permettrait de contribuer au développement de mon pays en [domaine].</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">مواعيد مهمة للمنح 2026</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b px-4 py-2 text-right font-medium">المنحة</th>
                <th className="border-b px-4 py-2 text-right font-medium">تاريخ التقديم</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border-b px-4 py-2">OFPPT</td><td className="border-b px-4 py-2">أبريل - ماي 2026</td></tr>
              <tr><td className="border-b px-4 py-2">ANAPEC</td><td className="border-b px-4 py-2">طوال السنة</td></tr>
              <tr><td className="border-b px-4 py-2">Erasmus+</td><td className="border-b px-4 py-2">أكتوبر 2025 - فبراير 2026</td></tr>
              <tr><td className="border-b px-4 py-2">Eiffel</td><td className="border-b px-4 py-2">شتنبر - يناير 2026</td></tr>
              <tr><td className="border-b px-4 py-2">Chevening</td><td className="border-b px-4 py-2">أغسطس - نونبر 2026</td></tr>
            </tbody>
          </table>
        </div>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">ختاما</h2>
        <p>المنح هي فرصة باش تطور مهاراتك وتغير حياتك من غير ما تدفع. ف 2026، بزاف ديال الفرص متاحة للمغاربة. المهم أنك تبحث، تجهز ملفك، وتقدم ف الوقت المناسب. المنحة ممكن تكون بوابتك لأحسن مستقبل.</p>

      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          {"اقرا أيضا: "}
          <Link href="/formations/guides/inscription-ofppt-2026" className="text-emerald-600 underline hover:text-emerald-800">التسجيل في OFPPT 2026</Link>
          {" | "}
          <Link href="/formations/guides/formation-continue-maroc" className="text-emerald-600 underline hover:text-emerald-800">التدريب المستمر</Link>
          {" | "}
          <Link href="/salary-calculator" className="text-emerald-600 underline hover:text-emerald-800">احسب راتبك الصافي</Link>
        </p>
      </div>
    </article>
  );
}
