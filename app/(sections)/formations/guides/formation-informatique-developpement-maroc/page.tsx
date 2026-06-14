import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "تكوين البرمجة والمعلوميات في المغرب: المدارس، الأسعار، والمستقبل",
  description: "دليل تكوين البرمجة والمعلوميات (Informatique et Programmation) في المغرب 2026: أفضل مدارس البرمجة، معاهد التكوين، الأسعار، والرواتب.",
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article",
  "headline": "تكوين البرمجة والمعلوميات في المغرب: المدارس، الأسعار، والمستقبل",
  "description": "دليل تكوين البرمجة والمعلوميات في المغرب 2026.",
  "author": { "@type": "Person", "name": "Tawdif Pro" },
  "publisher": { "@type": "Organization", "name": "Tawdif Pro", "logo": { "@type": "ImageObject", "url": "https://tawdifpro.ma/logo.png" } },
  "datePublished": "2026-06-01", "dateModified": "2026-06-13",
};

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "شنو هي شروط ولوج تكوين البرمجة فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "شروط ولوج تكوين البرمجة فالمغرب: البكالوريا (أي شعبة) شرط أساسي للتخصصات التقنية العليا. بعض المعاهد كتقبل حتى باك+2. المهم هو المستوى فالبغلة (Maths) واللغة الإنجليزية. المعاهد الخاصة كتكون عندها اختبار قبول ف المنطق والتحليل. OFPPT كتطلب البكالوريا علمية لتخصص Informatique." } },
  { "@type": "Question", name: "شحال من الوقت كيستغرق تكوين البرمجة فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "مدة التكوين كتختلف: OFPPT (تقني متخصص فالمعلوميات) سنتين، المدارس العليا (ESI, ENSIAS) 3-5 سنين، معاهد خاصة (YouCode, 1337) 3-5 سنين، تكوين عبر الأنترنت من 3 شهور لسنة. التكوين المكثف فBootcamps كيكون من 3 ل 6 شهور." } },
  { "@type": "Question", name: "شحال كيسال المبرمج فالمغرب 2026؟", acceptedAnswer: { "@type": "Answer", text: "الرواتب فالمغرب: مطور مبتدئ (Junior) 5,000 - 8,000 DH، مطور (Senior 3-5 سنين) 10,000 - 18,000 DH، مطور متقدم (5-10 سنين) 20,000 - 35,000 DH، مهندس برمجيات 15,000 - 40,000 DH، Freelance مع شركات أجنبية 30,000 - 80,000 DH. هاد القطاع فيو أعلى الرواتب فالمغرب." } },
  { "@type": "Question", name: "أحسن معهد لتعلم البرمجة فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "أحسن المعاهد: YouCode (Safi, Youssoufia) - مجاني، 1337 (Khourigba, Ben Guerir) - مجاني (43 Campus France)، ENSIAS (الرباط) - العمومي، ESI (الدار البيضاء) - العمومي، OFPPT (Bac+2) - مجاني. المعاهد الخاصة: HEM، ISGA، EMSI - الثمن ما بين 20,000 و 50,000 DH سنويا." } },
  { "@type": "Question", name: "شنو أحسن لغة برمجة نتعلمها فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "أحسن لغات البرمجة لسوق الشغل المغربي: JavaScript/TypeScript (Web Development)، Python (Data Science, AI)، Java (Android, Enterprise)، PHP (WordPress, Sites Web)، Flutter/Dart (Mobile Apps). JavaScript و Python هما الأكثر طلبا فالمغرب. كاين حتى طلب كبير على React و Next.js فشركات التكنولوجيا." } },
  { "@type": "Question", name: "واش كاين تكوين مجاني ف البرمجة فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "إيوه، كاين بزاف ديال الخيارات المجانية: YouCode (مدرسة 1337 النموذج) - مجاني بالكامل، 1337 (42 Network) - مجاني (Khourigba, Ben Guerir)، OFPPT (تقني متخصص) - مجاني، GomyCode فمراكش (برامج مجانية). كاين حتى منصات عبر الإنترنت بحال FreeCodeCamp, OpenClassrooms, و Coursera لي كتقدم محتوى مجاني بزاف." } },
  { "@type": "Question", name: "شنو هي فرص الشغل فالمعلوميات فالمغرب 2026؟", acceptedAnswer: { "@type": "Answer", text: "فرص الشغل بزاف فالمغرب: شركات Offshoring (Capgemini, Sopra HR, CGI)، الشركات الناشئة (Startups)، البنوك (Attijariwafa, BCP)، الإدارات الحكومية (Digitalisation)، Freelance مع شركات أجنبية (Upwork, Fiverr). المغرب عندو حاجة ل 15,000 مبرمج إضافي كل عام. الطلب أكبر من العرض بزاف." } },
]};

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://tawdifpro.ma" },
  { "@type": "ListItem", position: 2, name: "قسم التكوين", item: "https://tawdifpro.ma/formations" },
  { "@type": "ListItem", position: 3, name: "تكوين البرمجة والمعلوميات في المغرب", item: "https://tawdifpro.ma/formations/guides/formation-informatique-developpement-maroc" },
]};

export default function FormationsGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">تكوين البرمجة والمعلوميات في المغرب 2026: المدارس، الأسعار، والمستقبل</h1>
        <p className="mt-3 text-lg text-gray-600">أحسن المعاهد + الرواتب + الخيارات المجانية</p>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>•</span><span>9 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">
        <p className="text-lg font-medium text-emerald-700">البرمجة والمعلوميات (Programmation et Informatique) راهي من أحسن المجالات لي تقدر تخدم فيها فالمغرب 2026. الرواتب عالية، الطلب كبير، ويمكنك تخدم من دارك.</p>
        <p>المغرب كيعرف تحول رقمي كبير (Digital Transformation). الشركات والمصانع والإدارات كلها كتدخل فالعالم الرقمي، وهاد الشي كيخلق حاجة ماسة للمبرمجين والمهندسين فالمعلوميات. فهاد المقال غنعطيكم كل المعلومات على تكوين البرمجة فالمغرب.</p>
        <hr className="border-gray-200" />
        <h2 className="text-2xl font-bold text-gray-900">أنواع التكوين فالمعلوميات</h2>
        <p>كاين عدة طرق باش تتعلم البرمجة فالمغرب: التكوين الجامعي (Facultes Sciences, ENSIAS, ESI)، التكوين المهني (OFPPP, YouCode, 1337)، المعاهد الخاصة (HEM, ISGA)، Bootcamps (GomyCode, Le Wagon)، و التكوين الذاتي عبر الإنترنت.</p>
        <p>كل طريقة عندها مزاياها وعيوبها. المهم هو تختار الطريقة لي تناسبك.</p>
        <h2 className="text-2xl font-bold text-gray-900">أفضل المعاهد والبرامج فالمغرب</h2>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>YouCode:</strong> فSafi و Youssoufia. برنامج 3 سنين. مجاني بالكامل. تعلم بالاعتماد على المشاريع.</li>
          <li><strong>1337 (42 Network):</strong> Khourigba, Ben Guerir. مجاني. طريقة تعلم جديدة (P2P). 3-5 سنين.</li>
          <li><strong>ENSIAS:</strong> الرباط. مدارس المهندسين. 3 سنين بعد Bac+2. عمومي.</li>
          <li><strong>ESI:</strong> الدار البيضاء. مهندس معلوميات. 3 سنين. عمومي.</li>
          <li><strong>OFPPT (Technicien Specialise en Developpement Informatique):</strong> سنتين. مجاني.</li>
          <li><strong>GomyCode:</strong> مراكش. Bootcamp 6 شهور. الثمن: 15,000 - 25,000 DH.</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900">الرواتب المتوقعة فالمعلوميات</h2>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>مطور ويب مبتدئ:</strong> 5,000 - 8,000 DH</li>
          <li><strong>مطور ف React/Next.js:</strong> 8,000 - 15,000 DH</li>
          <li><strong>مهندس برمجيات (3-5 سنين):</strong> 15,000 - 25,000 DH</li>
          <li><strong>Freelance مع شركات أجنبية:</strong> 2,000 - 8,000 USD شهريا</li>
        </ul>
        <p>باش تعرف الراتب الصافي ديالك، استعمل <Link href="/salary-calculator" className="font-medium text-emerald-600 underline hover:text-emerald-700">حاسبة الراتب</Link>.</p>
        <h2 className="text-2xl font-bold text-gray-900">المستقبل المهني</h2>
        <p>البرمجة والمعلوميات عندها مستقبل كبير فالمغرب. مع مبادرات الحكومة (Maroc Digital 2025-2030) وانتشار Offshoring والشركات الناشئة، الطلب على المبرمجين غادي يبقى مرتفع فالسنوات الجاية.</p>
        <p>إذا كنت باغي تتعلم حاجة فيها مستقبل، تعلم البرمجة. هاد القطاع غادي يزيد ولا أحسن.</p>
        <hr className="border-gray-200" />
        <h2 className="text-xl font-bold text-gray-900">الخلاصة</h2>
        <p>تكوين البرمجة والمعلوميات هو الاستثمار في مستقبلك. سواء اخترت المعاهد المجانية (YouCode, 1337, OFPPT) ولا الخاصة، الأهم هو الاستمرار فالتعلم والتطبيق العملي.</p>
        <p className="text-emerald-700 font-medium">شارك هاد المقال مع أصحابك لي كيبغيو يتعلمو البرمجة!</p>
      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          📚 اقرأ أيضاً:{" "}
          <Link href="/formations/guides/formation-comptabilite-gestion-maroc" className="text-emerald-600 underline hover:text-emerald-800">تكوين المحاسبة والتدبير</Link>
          {" | "}
          <Link href="/formations/guides/formation-langue-anglais-maroc" className="text-emerald-600 underline hover:text-emerald-800">تكوين اللغة الإنجليزية</Link>
        </p>
      </div>
    </article>
  );
}