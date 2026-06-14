import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "برنامج Forsa 2026 (فرصة) - دليل كامل للتقديم والشروط | Tawdif Pro",
  description: "برنامج Forsa 2026 في المغرب: شروط التسجيل، التمويل، المبلغ، وكيفية التقديم. دليل كامل لبرنامج فرصة لدعم المقاولات.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "برنامج Forsa 2026 (فرصة) - دليل كامل للتقديم والشروط",
  description: "دليل شامل لبرنامج Forsa (فرصة) لدعم المشاريع في المغرب لسنة 2026.",
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
    { "@type": "ListItem", position: 3, name: "برنامج Forsa 2026", item: "https://tawdifpro.ma/projets/guides/programme-forsa-2026" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هو برنامج Forsa (فرصة) فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "برنامج Forsa (فرصة) هو برنامج حكومي مغربي لدعم المقاولات الصغيرة جداً والصغرى. الهدف هو تشجيع المقاولاتية وخلق فرص الشغل. البرنامج كايقدم دعم مالي من 20,000 ل 100,000 درهم لكل مشروع، بالإضافة للمواكبة والتكوين. ف 2026، البرنامج كايتوسع باش يشمل جميع جهات المغرب.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي شروط التسجيل فبرنامج Forsa 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "شروط Forsa 2026: 1) الجنسية المغربية، 2) السن من 18 ل 45 سنة، 3) إقامة فالمغرب، 4) مشروع مبتكر وقابل للتطبيق، 5) ملف إداري كامل (CV، دراسة السوق، خطة العمل، البطاقة الوطنية)، 6) التسجيل ف منصة Forsa.ma، 7) اجتياز المقابلة الانتقائية. الأولوية: الشباب، النساء، حاملي الشهادات.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هو مبلغ التمويل فبرنامج Forsa؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التمويل فبرنامج Forsa كايتراوح بين 20,000 و 100,000 درهم حسب المشروع. التمويل هو منحة (Subvention) غير قابلة للاسترداد، ما كاينش فايدة ولا ضمان. كايدفع على مرحلتين: 50% أولى بعد التوقيع على العقد، 50% ثانية بعد تحقيق الأهداف المتفق عليها. بعض المشاريع الاستراتيجية يمكن تحصل على تمويل أكبر.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نقدم على Forsa 2026 أونلاين؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "خطوات التقديم أونلاين: 1) دخل لموقع forsa.ma، 2) أنشئ حساب (Créer un compte) بإيميل صحيح، 3) املأ الاستمارة الإلكترونية: المعلومات الشخصية، فكرة المشروع، القطاع، المبلغ المطلوب، 4) حمل الوثائق المطلوبة (PDF)، 5) تأكد من الإيميل، 6) انتظر المراجعة الأولية. إذا قبلت ملفك، غادي يتم استدعاؤك للمقابلة.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي القطاعات المدعومة فبرنامج Forsa؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "برنامج Forsa كايدعم جميع القطاعات الاقتصادية. القطاعات ذات الأولوية: 1) التكنولوجيا والرقمنة (Tech, IT, E-commerce)، 2) الصناعة الغذائية والتحويلية، 3) الخدمات (Services)، 4) الحرف والصناعة التقليدية، 5) الفلاحة المستدامة، 6) السياحة والإقامة، 7) الطاقة المتجددة، 8) النقل واللوجستيك. الأولوية للمشاريع المبتكرة ولي كاتوفر فرص الشغل.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي المواكبة (Accompagnement) فبرنامج Forsa؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "برنامج Forsa كايتوفر مواكبة قبل وبعد الحصول على التمويل. المواكبة كاتشمل: 1) التكوين فريادة الأعمال (لأقل 40 ساعة)، 2) المساعدة فإعداد دراسة الجدوى، 3) الإشراف على المشروع (Mentoring)، 4) المساعدة فالتسجيل القانوني (Régime de l&apos;auto-entrepreneur, Création de société)، 5) الربط مع مستثمرين وشركاء، 6) متابعة بعد الإطلاق.",
      },
    },
    {
      "@type": "Question",
      name: "شنو الفرق بين Forsa و INTELAKA؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الفرق الرئيسي: Forsa كايستهدف المشاريع الصغيرة جداً والصغرى بتمويل من 20,000 ل 100,000 درهم (منحة بدون فايدة). INTELAKA (انطلاقة) كايستهدف الشباب الباحثين عن التمويل للمشاريع الصغرى بتمويل من 10,000 ل 50,000 درهم. Forsa عندو مواكبة أقوى وانتقاء أكثر صرامة. INTELAKA أسهل فالتقديم وأسرع فالصرف.",
      },
    },
  ],
};

export default function ProgrammeForsaPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">الرئيسية</Link>
        {" > "}
        <Link href="/projets" className="hover:text-emerald-600">المشاريع</Link>
        {" > "}
        <span className="text-gray-900">برنامج Forsa 2026</span>
      </nav>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">برنامج Forsa 2026 (فرصة) - دليل كامل للتقديم والشروط</h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>.</span>
          <span>12 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">

        <p>برنامج Forsa (فرصة) هو واحد من أهم البرامج الحكومية لدعم ريادة الأعمال فالمغرب. منذ إطلاقو ف 2024، دعم آلاف المشاريع الصغرى وخلق ألاف ديال فرص الشغل. ف 2026، البرنامج ولا أكثر تطوراً وانتشاراً.</p>

        <p>فهاد المقال، غادي نعرفوك على كل شي خاص ببرنامج Forsa 2026: الشروط، المبلغ، كيفاش تقدم، ونصائح للنجاح.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">شنو هو برنامج Forsa؟</h2>
        <p>Forsa (فرصة) هو برنامج حكومي مغربي لدعم المقاولات الصغيرة جداً والصغرى (TPE/PME). كايدبر من طرف وزارة السياحة والصناعة التقليدية والاقتصاد الاجتماعي والتضامني، بشراكة مع البنوك المغربية.</p>

        <p>البرنامج كايقدم:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>تمويل:</strong> من 20,000 ل 100,000 درهم منحة غير قابلة للاسترداد.</li>
          <li><strong>مواكبة:</strong> تكوين وإشراف على مدار 12 شهر.</li>
          <li><strong>ربط:</strong> مع مستثمرين وشركاء محتملين.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">شروط التسجيل فبرنامج Forsa 2026</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>الجنسية:</strong> مغربية.</li>
          <li><strong>السن:</strong> 18 - 45 سنة.</li>
          <li><strong>الإقامة:</strong> فالمغرب.</li>
          <li><strong>المشروع:</strong> مبتكر، قابل للتطبيق، وكاتوفر فرص شغل.</li>
          <li><strong>القطاع:</strong> جميع القطاعات (الأولوية للتكنولوجيا والصناعة).</li>
          <li><strong>الوضعية:</strong> غير مسجل ك مقاول ولا Auto-entrepreneur (يمكن قبول الحالات الخاصة).</li>
          <li><strong>الالتزام:</strong> حضور التكوين والمواكبة.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">مبلغ التمويل وكيفية الصرف</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b px-4 py-2 text-right font-medium">النوع</th>
                <th className="border-b px-4 py-2 text-right font-medium">المبلغ</th>
                <th className="border-b px-4 py-2 text-right font-medium">شروط الصرف</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border-b px-4 py-2">مشروع صغير جداً</td><td className="border-b px-4 py-2">20,000 - 50,000 MAD</td><td className="border-b px-4 py-2">50% + 50%</td></tr>
              <tr><td className="border-b px-4 py-2">مشروع صغير</td><td className="border-b px-4 py-2">50,000 - 100,000 MAD</td><td className="border-b px-4 py-2">50% + 50%</td></tr>
              <tr><td className="border-b px-4 py-2">مشروع استراتيجي</td><td className="border-b px-4 py-2">100,000 - 150,000 MAD</td><td className="border-b px-4 py-2">حسب الاتفاق</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">خطوات التسجيل فبرنامج Forsa 2026</h2>
        <ol className="list-decimal space-y-2 pr-6">
          <li><strong>التسجيل على المنصة:</strong> دخل ل forsa.ma وأنشئ حساب.</li>
          <li><strong>ملأ الاستمارة:</strong> المعلومات الشخصية، فكرة المشروع، القطاع، المبلغ.</li>
          <li><strong>حمل الوثائق:</strong> CV، دراسة السوق (Étude de marché)، خطة العمل (Business Plan)، البطاقة الوطنية، الشهادات.</li>
          <li><strong>المراجعة:</strong> فريق Forsa كايراجع ملفك. إذا كامل، كايتحدد موعد المقابلة.</li>
          <li><strong>المقابلة الانتقائية:</strong> قدام لجنة. مدة 15-20 دقيقة.</li>
          <li><strong>الإعلان على النتائج:</strong> ف 30 يوم بعد المقابلة.</li>
          <li><strong>التوقيع على العقد:</strong> وصرف 50% الأولى.</li>
          <li><strong>بداية المواكبة:</strong> التكوين والإشراف.</li>
          <li><strong>صرف 50% الثانية:</strong> بعد تحقيق الأهداف.</li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900">الوثائق المطلوبة</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li>نسخة من بطاقة التعريف الوطنية (CIN).</li>
          <li>السيرة الذاتية (CV).</li>
          <li>دراسة السوق للمشروع (Étude de marché).</li>
          <li>خطة العمل (Business Plan / Business Model Canvas).</li>
          <li>الشهادات الدراسية (Diplômes).</li>
          <li>وصل السكن (Justificatif de domicile).</li>
          <li>أي وثائق إضافية (شهادات خبرة، توصيات).</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">نصائح للنجاح فبرنامج Forsa</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>فكرة واضحة:</strong> كون عندك فكرة مشروع محددة وواضحة. ما تجيش ب فكرة عامة.</li>
          <li><strong>دراسة السوق:</strong> أعد دراسة السوق مزيان. شنو المشكل؟ شنو الحل؟ شنو المنافسة؟</li>
          <li><strong>Business Plan متماسك:</strong> خطة العمل مهمة بزاف. اشمل: التكاليف، الإيرادات المتوقعة، الربحية.</li>
          <li><strong>الابتكار:</strong> المشاريع المبتكرة عندها أولوية.</li>
          <li><strong>فرص الشغل:</strong> كلما كايدير مشروعك فرص شغل كتر، كلما زادت فرصك.</li>
          <li><strong>الثقة فالمقابلة:</strong> كن واثق من فكرتك. أظهر الحماس والجدية.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">أسئلة متوقعة فالمقابلة</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li>شنو هو مشروعك؟ شرح الفكرة فدقيقتين.</li>
          <li>شنو المشكل لي كايحلو مشروعك؟</li>
          <li>شنو هي المنافسة؟ واش كاينين مشاريع مشابهة؟</li>
          <li>شنو هي التكاليف الأولية للمشروع؟</li>
          <li>شنو هي الإيرادات المتوقعة ف أول سنة؟</li>
          <li>شنو هو عدد فرص الشغل لي غادي تخلق؟</li>
          <li>شنو يحتاج مشروعك باش ينجح؟</li>
        </ul>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">ختاما</h2>
        <p>برنامج Forsa هو فرصة ذهبية لكل مغربي عندو فكرة مشروع و محتاج الدعم. ف 2026، البرنامج ولا أكثر سهولة وانتشاراً. قدم على forsa.ma، جهز ملفك، وابدأ مشوارك المقاولاتي. الدعم كاين، كل ما تحتاجه هو الفكرة والعزيمة.</p>

      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          {"اقرا أيضا: "}
          <Link href="/projets/guides/programme-intelaka" className="text-emerald-600 underline hover:text-emerald-800">برنامج INTELAKA (انطلاقة)</Link>
          {" | "}
          <Link href="/projets/guides/auto-entrepreneur-maroc" className="text-emerald-600 underline hover:text-emerald-800">المقاول الذاتي</Link>
          {" | "}
          <Link href="/salary-calculator" className="text-emerald-600 underline hover:text-emerald-800">احسب راتبك الصافي</Link>
        </p>
      </div>
    </article>
  );
}
