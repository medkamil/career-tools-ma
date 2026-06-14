import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "دليل العمل عن بعد في المغرب 2026: العقود والحقوق والنصائح | Tawdif Pro",
  description: "دليل شامل للعمل عن بعد (Travail a Distance) في المغرب 2026. شروط العقد، الحقوق القانونية، كيفية إيجاد وظائف عن بعد، والإنتاجية.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "دليل العمل عن بعد في المغرب 2026: العقود والحقوق والنصائح",
  description: "دليل شامل للعمل عن بعد (Travail a Distance) في المغرب. شروط العقد، الحقوق القانونية، وإيجاد وظائف عن بعد.",
  author: { "@type": "Person", name: "Tawdif Pro" },
  publisher: { "@type": "Organization", name: "Tawdif Pro", logo: { "@type": "ImageObject", url: "https://tawdifpro.ma/logo.png" } },
  datePublished: "2026-06-01",
  dateModified: "2026-06-13",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://tawdifpro.ma" },
    { "@type": "ListItem", position: 2, name: "قسم التوظيف", item: "https://tawdifpro.ma/emplois" },
    { "@type": "ListItem", position: 3, name: "دليل العمل عن بعد في المغرب 2026", item: "https://tawdifpro.ma/emplois/guides/travail-distance-maroc" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هو الوضع القانوني للعمل عن بعد فالمغرب 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "العمل عن بعد (Travail a Distance) معترف به قانونيا فالمغرب من خلال تعديلات مدونة الشغل. القانون كايعترف بنوعين: travail a distance النظامي (فيه إطار قانوني كامل مع حقوق وواجبات)، و télétravail المؤقت. الأجير ف العمل عن بعد عندو نفس الحقوق ديال الأجير فالمكتب.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي الحقوق القانونية للأجير عن بعد فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الأجير عن بعد عندو نفس الحقوق ديال الأجير التقليدي: الأجر (ما يمكنش يكون أقل من SMIG)، التغطية الصحية (CNSS)، الإجازات السنوية، التعويض عن نهاية الخدمة، والحماية من الطرد التعسفي.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نلقى وظائف عن بعد فالمغرب ف 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "المنصات الأكثر فعالية: Rekrute.com (فلترة عن بعد)، Linkedin (تحديد Remote فالبحث)، Upwork و Fiverr (للخدمات الحرة). المجالات الأكثر طلبا: التكنولوجيا، التسويق الرقمي، خدمة الزبناء، والترجمة.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي التحديات ديال العمل عن بعد فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التحديات: 1) الاتصال بالانترنت (خصوصا فالمدن الصغيرة)، 2) العزلة الاجتماعية، 3) صعوبة الفصل بين الحياة الشخصية والمهنية، 4) بعض الشركات ما كاتزال عندها ثقة محدودة فالعمل عن بعد.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نزيد الإنتاجية فالعمل عن بعد؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نصائح عملية: 1) خصص مساحة مخصصة للخدمة فدارك، 2) حدد ساعات الخدمة والتزم بها، 3) استعمل أدوات إدارة الوقت بحال Pomodoro Technique، 4) تواصل يوميا مع الفريق عبر Slack أو Teams.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هو راتب العمل عن بعد مقارنة بالمكتب فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "فالمغرب، الرواتب فالعمل عن بعد كاتكون نفسها ولا أعلى قليلا من المكتب. بعض الشركات كاتعطي زيادة 10 ل 15% للأجراء عن بعد باش تعوض مصاريف التنقل والملبس.",
      },
    },
  ],
};

export default function TravailDistancePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">الرئيسية</Link>
        {" > "}
        <Link href="/emplois" className="hover:text-emerald-600">التوظيف</Link>
        {" > "}
        <span className="text-gray-900">العمل عن بعد فالمغرب</span>
      </nav>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">دليل العمل عن بعد في المغرب 2026: العقود والحقوق والنصائح</h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>.</span>
          <span>9 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">
        <p>من بعد جائحة كورونا، العمل عن بعد (Travail a Distance) فالمغرب تحول من رفاهية لضرورة. ولي كاينة دابا، بزاف ديال الشركات كاتعطيه كخيار دائم للموظفين.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">1. مزايا العمل عن بعد</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>توفير الوقت والفلوس:</strong> ما كاينش التنقل اليومي.</li>
          <li><strong>المرونة:</strong> تقدر تخدم فالساعات لي تناسبك.</li>
          <li><strong>التوازن:</strong> تقدر تجمع بين الخدمة والحياة العائلية.</li>
          <li><strong>فرص أوسع:</strong> تقدر تخدم مع شركات من جميع المدن.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">2. عيوب العمل عن بعد</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>العزلة:</strong> قلة التفاعل الاجتماعي مع الزملاء.</li>
          <li><strong>صعوبة الفصل:</strong> الخدمة كاتدخل على الحياة الشخصية.</li>
          <li><strong>الانترنت:</strong> فبعض المناطق، الانترنت ما زال غير مستقر.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">3. كيفية إيجاد وظيفة عن بعد</h2>
        <ol className="list-decimal space-y-2 pr-6">
          <li>المنصات المغربية: Rekrute.ma، Anapec.ma، Linkedin (Remote filter).</li>
          <li>المنصات العالمية: Upwork و Fiverr للخدمات الحرة.</li>
          <li>الشبكات الاجتماعية: Linkedin هو الأهم. نظم البروفيل ديالك.</li>
        </ol>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">خاتمة</h2>
        <p>العمل عن بعد فالمغرب ف 2026 هو واقع وليس خيار. إذا كنتي باغي تبقى تنافسي فسوق الشغل، خاصك تكون مرن ومستعد للخدمة عن بعد.</p>
      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          {"اقرا أيضا: "}
          <Link href="/emplois/guides/cv-professionnel-maroc-2026" className="text-emerald-600 underline hover:text-emerald-800">CV professionnel Maroc 2026</Link>
          {" | "}
          <Link href="/emplois/guides/salaire-moyen-maroc-par-secteur" className="text-emerald-600 underline hover:text-emerald-800">متوسط الرواتب فالمغرب</Link>
        </p>
      </div>
    </article>
  );
}
