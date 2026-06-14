import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "دليل الحصول على وظيفة في القطاع العام بالمغرب 2026 | Tawdif Pro",
  description: "كيفية الحصول على وظيفة في القطاع العام بالمغرب 2026. شروط الترشيح للمباريات، كيفية التسجيل، تحضير الاختبارات، والوظائف الحكومية المتاحة.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "دليل الحصول على وظيفة في القطاع العام بالمغرب 2026",
  description: "كيفية الحصول على وظيفة في القطاع العام بالمغرب. شروط الترشيح للمباريات، كيفية التسجيل، وتحضير الاختبارات.",
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
    { "@type": "ListItem", position: 3, name: "دليل الحصول على وظيفة في القطاع العام 2026", item: "https://tawdifpro.ma/emplois/guides/recrutement-fonction-publique-maroc-2026" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هي طرق التوظيف فالقطاع العام فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "القطاع العام فالمغرب كايتوظف ف الطرق التالية: المباريات (Concours): أكتر طريقة مستخدمة. كاتكون على شكل اختبار كتابي وشفوي. الانتقاء على أساس الملف (Examen de Dossier): بعض المناصب كاتطلب تقديم الملف وبس. التعيين المباشر: بعض المناصب العليا كاتعيين بشكل مباشر.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي شروط الترشيح لمباريات الوظيفة العمومية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الشروط الأساسية: الجنسية المغربية، السن القانوني (بين 18 و 45 عام حسب المباراة)، المستوى الدراسي المطلوب (باكالوريا، ليسانس، ماستر)، وعدم وجود أي سابقة عدلية. كل مباراة كايكون عندها شروط خاصة.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نقدر نتابع إعلانات المباريات فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "إعلانات المباريات كاتنشر ف: الجريدة الرسمية (Journal Officiel)، موقع الوظيفة العمومية (www.emploi-public.ma)، مواقع الوزارات المعنية، صفحات الفيسبوك المتخصصة، ومواقع التشغيل بحال Tawdif Pro.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي المراحل ديال مباراة التوظيف فالقطاع العام؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "المراحل: 1) تقديم الترشيح عبر الموقع الرسمي، 2) دراسة الملف، 3) الاختبار الكتابي (Ecrit)، 4) الإعلان عن النتائج، 5) الاختبار الشفوي (Oral)، 6) الإعلان النهائي، 7) الفحص الطبي، 8) التوقيع على قرار التعيين.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي أفضل المراجع لتحضير مباريات الوظيفة العمومية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أفضل المراجع: كتب تحضير المباريات الموجودة فالمكتبات، القنوات ديال اليوتيوب المغربية المتخصصة، والمجموعات ديال الواتساب والفيسبوك. التركيز على الثقافة العامة المغربية، المعلومات عن الوزارة المعنية، والقانون الإداري.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي مزايا الوظيفة العمومية فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "المزايا: 1) الاستقرار (صعوبة الطرد)، 2) التقاعد (معاش كافي)، 3) التغطية الصحية، 4) الترقية السنوية، 5) الإجازات المدفوعة، 6) السكن الوظيفي (فبعض الحالات)، 7) التكوين المستمر، 8) المهمات الرسمية فالداخل والخارج.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي عيوب الوظيفة العمومية فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "وأيضا كاينين عيوب: 1) الأجر محدود (خصوصا فبعض الإدارات)، 2) البيروقراطية، 3) صعوبة التطور المهني السريع، 4) الترقية كاتعتمد على الأقدمية أكثر من الكفاءة.",
      },
    },
  ],
};

export default function RecrutementFonctionPubliquePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">الرئيسية</Link>
        {" > "}
        <Link href="/emplois" className="hover:text-emerald-600">التوظيف</Link>
        {" > "}
        <span className="text-gray-900">الوظيفة العمومية فالمغرب</span>
      </nav>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">دليل الحصول على وظيفة في القطاع العام بالمغرب 2026</h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>.</span>
          <span>11 دقيقة قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">
        <p>الوظيفة العمومية فالمغرب كاتبقى الحلم ديال بزاف الأسر. الأجر المضمون، الاستقرار، والتقاعد. ولكن، الطريق ليها ما ساهلش. المباريات كايبقاو كل عام، ولكن التنافس شرس.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">1. أنواع المباريات فالقطاع العام</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>مباراة على أساس الشهادة:</strong> كاتطلب باك + 2، باك + 3، باك + 5.</li>
          <li><strong>مباراة على أساس الاختبار:</strong> كاتكون كتابي وشفوي.</li>
          <li><strong>مباراة ولوج مراكز التكوين:</strong> بحال المدرسة الوطنية للصناعة، المدرسة العليا للإدارة.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">2. كيفية تحضير الملف</h2>
        <p>الملف هو أول انطباع. الوثائق المطلوبة: طلب خطي، CIN، الشهادات الدراسية، شهادة العمل، السيرة الذاتية (CV)، صورتين فوتوغرافيتين، وظرفين مختومين.</p>

        <h2 className="text-2xl font-bold text-gray-900">3. نصائح للاختبار الكتابي</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li>الثقافة العامة المغربية: التاريخ والجغرافيا والاقتصاد.</li>
          <li>المعلومات عن الوزارة: اقرأ الموقع الرسمي. اعرف البرامج والمشاريع.</li>
          <li>التوقيت: الاختبار الكتابي عنده وقت محدد. تدرب على الأسئلة فظروف واقعية.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">4. نصائح للاختبار الشفوي</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>اللباس الرسمي:</strong> اللباس كايعطي إنطباع أولي.</li>
          <li><strong>لغة الجسد:</strong> اتكلم بوضوح، حافظ على التواصل البصري.</li>
        </ul>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">خاتمة</h2>
        <p>الوظيفة العمومية لسه هدف استراتيجي فالمغرب. المنافسة شرسة، ولكن مع التحضير الجيد، تقدر تحقق الحلم.</p>
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
