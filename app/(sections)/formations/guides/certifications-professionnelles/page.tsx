import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "أهم الشهادات المهنية المطلوبة في المغرب 2026 | Tawdif Pro",
  description: "أهم الشهادات المهنية المطلوبة في المغرب 2026: PMP, Google, Microsoft, CISCO, وغيرها. دليل كامل للشهادات المعتمدة.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "أهم الشهادات المهنية المطلوبة في المغرب 2026",
  description: "دليل شامل لأهم الشهادات المهنية المعتمدة في المغرب لسنة 2026.",
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
    { "@type": "ListItem", position: 3, name: "أهم الشهادات المهنية المطلوبة في المغرب 2026", item: "https://tawdifpro.ma/formations/guides/certifications-professionnelles" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هي الشهادات المهنية الأكثر طلباً فالمغرب 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أكثر الشهادات طلباً فالمغرب 2026: 1) PMP (Project Management Professional) - إدارة المشاريع، الأكثر طلباً فجميع القطاعات، 2) Google Certifications (Digital Marketing, IT Support, Data Analytics)، 3) Microsoft Certifications (Azure, Office 365, Power BI)، 4) CISCO Certifications (CCNA, CCNP) - الشبكات، 5) AWS Cloud Practitioner - الحوسبة السحابية.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي شهادة PMP وشنو قيمتها فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PMP (Project Management Professional) هي شهادة إدارة المشاريع من PMI (Project Management Institute). فالمغرب، PMP هي الشهادة الأكثر طلباً فجميع القطاعات. الراتب: 18,000 - 35,000 MAD شهرياً لحاملي الشهادة مقابل 12,000 - 18,000 بدونها. يمكن تحضيرها عبر مراكز تدريب فالمغرب (Casablanca, Rabat). التكلفة: 15,000 - 25,000 MAD.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي شهادات Google المجانية فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google كاتقدم شهادات مهنية عبر Coursera: 1) Google IT Support (مدة 6 شهور، 200 ساعة)، 2) Google Data Analytics، 3) Google Digital Marketing (26 وحدة، 40 ساعة - مجاني)، 4) Google UX Design، 5) Google Project Management. هذه الشهادات كاتزيد فرص الشغل ب 50-70%. يمكن الحصول عليها ب Financial Aid.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي شهادات Microsoft المطلوبة فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "شهادات Microsoft المطلوبة فالمغرب: 1) Microsoft Azure Fundamentals (AZ-900) - أساسيات السحابة، 2) Microsoft 365 Fundamentals (MS-900) - Office 365، 3) Power BI Data Analyst (PL-300) - تحليل البيانات، 4) Azure Administrator (AZ-104) - إدارة Azure، 5) Microsoft Security (SC-900) - الأمن السيبراني. الرواتب حاملي شهادات Microsoft: 15,000 - 30,000 MAD شهرياً.",
      },
    },
    {
      "@type": "Question",
      name: "شنو الفرق بين الشهادة الجامعية والشهادة المهنية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الشهادة الجامعية (Diplôme universitaire) هي طويلة المدى (3-5 سنين) وكاتغطي معرفة عامة. الشهادة المهنية (Certification professionnelle) هي قصيرة المدى (3-12 شهر) وكاتركز على مهارات محددة. فالمغرب 2026، الشهادات المهنية كاتزيد فرص الشغل بنسبة 40% حيت كاتدل على مهارات عملية جاهزة.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نتحضر لشهادة مهنية فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "خطوات التحضير: 1) اختر الشهادة المناسبة لمجال عملك، 2) ابحث عن مركز تدريب معتمد فالمغرب (casablanca, rabat, marrakech)، 3) سجل فالدورة التحضيرية (Presentielle ou en ligne)، 4) احصل على المواد (كتب، فيديوهات، اختبارات تجريبية)، 5) تدرب على الامتحان التجريبي (Practice test)، 6) سجل فالامتحان الرسمي.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي تكلفة الشهادات المهنية فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التكلفة كاتختلف حسب الشهادة: Google Certifications: 0 - 1,500 MAD (مع Financial Aid). PMP: 15,000 - 25,000 MAD. Microsoft Azure: 3,000 - 8,000 MAD. CISCO CCNA: 5,000 - 12,000 MAD. AWS Cloud: 4,000 - 10,000 MAD. بعض الشهادات كاتطلب تكاليف إضافية للامتحان (Voucher). مراكز التدريب فالمغرب كاتوفرو عروض وتخفيضات.",
      },
    },
  ],
};

export default function CertificationsProfessionnellesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">الرئيسية</Link>
        {" > "}
        <Link href="/formations" className="hover:text-emerald-600">التكوين</Link>
        {" > "}
        <span className="text-gray-900">أهم الشهادات المهنية المطلوبة في المغرب 2026</span>
      </nav>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">أهم الشهادات المهنية المطلوبة في المغرب 2026</h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>.</span>
          <span>11 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">

        <p>سوق الشغل فالمغرب 2026 ولا أكثر تنافسية. الشهادات المهنية (Certifications professionnelles) هي السلاح لي كايديك بعيد فهاد المنافسة. هاد الشهادات كاتدل على مهاراتك العملية وجاهزيتك للخدمة.</p>

        <p>فهاد المقال، غادي نعرفوك على أهم الشهادات المهنية فالمغرب 2026: المجالات، التكاليف، والرواتب المتوقعة.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">1. PMP — إدارة المشاريع</h2>
        <p>PMP (Project Management Professional) هي الشهادة الأكثر طلباً فالمغرب. كاتعترف بها جميع الشركات الكبرى (OCP, CIH, Attijariwafa, Lafarge, Maroc Telecom).</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>المجال:</strong> إدارة المشاريع (جميع القطاعات).</li>
          <li><strong>المدة:</strong> 3 - 6 شهور تحضير.</li>
          <li><strong>التكلفة:</strong> 15,000 - 25,000 MAD.</li>
          <li><strong>الراتب المتوسط:</strong> 22,000 - 35,000 MAD شهرياً.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">2. Google Certifications — الرقمية والشاملة</h2>
        <p>Google كاتقدم شهادات عملية بأسعار معقولة. الـ Google Digital Garage مجاني بالكامل. الـ Google IT Support, Data Analytics, UX Design متوفرة عبر Coursera.</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>Google IT Support:</strong> 6 شهور، راتب 10,000 - 18,000 MAD.</li>
          <li><strong>Google Data Analytics:</strong> 6 شهور، راتب 15,000 - 25,000 MAD.</li>
          <li><strong>Google Digital Marketing:</strong> مجاني، راتب 8,000 - 15,000 MAD.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">3. Microsoft Azure & 365 — السحابة والإنتاجية</h2>
        <p>Microsoft Azure هو ثاني أكبر مزود سحابي فالعالم. الشهادات ديالو مطلوبة بزاف فالمغرب حيت الشركات كاتنتقل للسحابة.</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>AZ-900 (Azure Fundamentals):</strong> الأساسيات. 3,000 MAD.</li>
          <li><strong>AZ-104 (Azure Administrator):</strong> إدارة Azure. 6,000 - 8,000 MAD.</li>
          <li><strong>PL-300 (Power BI):</strong> تحليل البيانات. 5,000 MAD.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">4. CISCO — الشبكات والاتصالات</h2>
        <p>CISCO هي المعيار الذهبي فالشبكات. CCNA (Cisco Certified Network Associate) هي شهادة أساسية لكل مهندس شبكات.</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>CCNA:</strong> شبكات. راتب 12,000 - 20,000 MAD.</li>
          <li><strong>CCNP:</strong> شبكات متقدمة. راتب 20,000 - 30,000 MAD.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">5. AWS — الحوسبة السحابية</h2>
        <p>AWS (Amazon Web Services) هو أكبر مزود سحابي فالعالم. الشهادات ديالو مطلوبة فالمغرب بشكل متزايد.</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>AWS Cloud Practitioner:</strong> أساسيات السحابة. 4,000 - 6,000 MAD.</li>
          <li><strong>AWS Solutions Architect:</strong> معماري السحابة. 8,000 - 12,000 MAD.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">6. شهادات الموارد البشرية (HR)</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>SHRM-CP:</strong> إدارة الموارد البشرية. 8,000 - 12,000 MAD.</li>
          <li><strong>HRCI (PHR):</strong> الموارد البشرية المهنية. 7,000 - 10,000 MAD.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">7. شهادات المالية والمحاسبة</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>CMA (Certified Management Accountant):</strong> محاسبة إدارية. 20,000 - 35,000 MAD شهرياً.</li>
          <li><strong>CFA (Chartered Financial Analyst):</strong> تحليل مالي. 25,000 - 45,000 MAD.</li>
          <li><strong>CPA (Certified Public Accountant):</strong> محاسبة معتمدة. 20,000 - 35,000 MAD.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">8. شهادات اللغات</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>TOEFL/IELTS:</strong> الإنجليزية. مهم للشركات متعددة الجنسيات.</li>
          <li><strong>DELF/DALF:</strong> الفرنسية. شهادة معترف بها دولياً.</li>
          <li><strong>TOEIC:</strong> الإنجليزية المهنية. مطلوب فبزاف ديال الشركات المغربية.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">جدول الرواتب حسب الشهادة المهنية 2026</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b px-4 py-2 text-right font-medium">الشهادة</th>
                <th className="border-b px-4 py-2 text-right font-medium">الراتب الأدنى</th>
                <th className="border-b px-4 py-2 text-right font-medium">الراتب الأقصى</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border-b px-4 py-2">PMP</td><td className="border-b px-4 py-2">22,000 MAD</td><td className="border-b px-4 py-2">35,000 MAD</td></tr>
              <tr><td className="border-b px-4 py-2">Google IT Support</td><td className="border-b px-4 py-2">10,000 MAD</td><td className="border-b px-4 py-2">18,000 MAD</td></tr>
              <tr><td className="border-b px-4 py-2">Microsoft Azure (AZ-104)</td><td className="border-b px-4 py-2">15,000 MAD</td><td className="border-b px-4 py-2">25,000 MAD</td></tr>
              <tr><td className="border-b px-4 py-2">CISCO CCNA</td><td className="border-b px-4 py-2">12,000 MAD</td><td className="border-b px-4 py-2">20,000 MAD</td></tr>
              <tr><td className="border-b px-4 py-2">AWS Solutions Architect</td><td className="border-b px-4 py-2">18,000 MAD</td><td className="border-b px-4 py-2">30,000 MAD</td></tr>
              <tr><td className="border-b px-4 py-2">CFA</td><td className="border-b px-4 py-2">25,000 MAD</td><td className="border-b px-4 py-2">45,000 MAD</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">كيفاش تختار الشهادة المناسبة؟</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>حدد مجال عملك:</strong> شنو المجال لي كاتشتغل فيه ولا باغي تشتغل؟</li>
          <li><strong>ابحث على المطلوب:</strong> شنو الشهادات لي كايطلبوها فالإعلانات الوظيفية؟</li>
          <li><strong>قارن التكلفة بالعائد:</strong> كم غادي تكلفك الشهادة؟ كم غادي تزيد ف راتبك؟</li>
          <li><strong>ابدأ بالأساسيات:</strong> ما تبداش بشهادة متقدمة. ابدا بالمبتدئ.</li>
          <li><strong>استثمر فالتكوين المستمر:</strong> مجال الشهادات كايتطور. جدد شهاداتك.</li>
        </ul>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">ختاما</h2>
        <p>الشهادات المهنية هي استثمار فمستقبلك. ف 2026، الشهادات الرقمية والتقنية هي الأكثر طلباً فالمغرب. اختار الشهادة المناسبة، استثمر وقتك وفلوسك، وحتما غادي تزيد فرصك فالشغل والراتب.</p>

      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          {"اقرا أيضا: "}
          <Link href="/formations/guides/formation-gratuite-en-ligne" className="text-emerald-600 underline hover:text-emerald-800">تكوين مجاني عن بعد</Link>
          {" | "}
          <Link href="/formations/guides/formation-continue-maroc" className="text-emerald-600 underline hover:text-emerald-800">التدريب المستمر</Link>
          {" | "}
          <Link href="/salary-calculator" className="text-emerald-600 underline hover:text-emerald-800">احسب راتبك الصافي</Link>
        </p>
      </div>
    </article>
  );
}
