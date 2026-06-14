import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "أفضل نموذج CV المغرب 2026 مع أمثلة جاهزة للتحميل | Tawdif Pro",
  description: "أفضل نموذج CV المغرب 2026. أمثلة جاهزة بالعربية والفرنسية، نصائح لكتابة السيرة الذاتية للمغرب، قوالب للقطاعين العام والخاص.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "أفضل نموذج CV المغرب 2026 مع أمثلة جاهزة للتحميل",
  description: "أفضل نموذج CV المغرب 2026. أمثلة جاهزة بالعربية والفرنسية، نصائح لكتابة السيرة الذاتية للمغرب.",
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
    { "@type": "ListItem", position: 3, name: "أفضل نموذج CV المغرب 2026", item: "https://tawdifpro.ma/emplois/guides/exemple-cv-maroc-telecharger" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هو أفضل تنسيق لـ CV فالمغرب 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "فالمغرب 2026، أفضل تنسيق هو التنسيق الحديث (Modern CV). كايتكون من: صورة مهنية، ملخص، الخبرات المهنية، التكوين، المهارات، واللغات. التنسيق كايكون فصفحة وحدة (1 page) لذوي الخبرة أقل من 10 سنين، وصفحتين للخبرة الأكبر.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هو أهم عنصر ف CV للمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أهم عنصر هو الخبرات المهنية (Experiences Professionnelles). الشركات فالمغرب كاتعطي أهمية كبيرة للخبرة العملية. فاش كاتكتب الخبرة، استعمل الأفعال القوية واستعمل الأرقام.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي الأقسام لي خاصني نحطها ف CV؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الأقسام الأساسية: 1) المعلومات الشخصية، 2) الملخص، 3) الخبرات المهنية من الأحدث للأقدم، 4) التكوين: الشهادات والمدارس، 5) المهارات، 6) اللغات.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي الأخطاء لي خاصني نتجنبها ف CV؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الأخطاء القاتلة: 1) الأخطاء الإملائية، 2) الكذب، 3) طول الـ CV، 4) التصميم الزائد، 5) عدم التخصيص، 6) الإيميل غير المهني.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي أفضل مواقع تحميل قوالب CV فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أفضل المواقع: 1) Canva.com (قوالب مجانية واحترافية)، 2) Rekrute.com (عندهم قالب خاص بالمغرب)، 3) Europass (قوالب رسمية)، 4) Google Docs (قوالب بسيطة).",
      },
    },
    {
      "@type": "Question",
      name: "شنو اللغات لي خاصني نكتب بيهوم CV فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "فالمغرب، اللغة الأكثر استخداما ف الـ CV هي الفرنسية (60%). العربية (30%). الإنجليزية (10%). الشركات المغربية الكبيرة كاتطلب CV بالفرنسية. الشركات المتعددة الجنسيات كاتطلب الانجليزية.",
      },
    },
  ],
};

export default function ExempleCVPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">الرئيسية</Link>
        {" > "}
        <Link href="/emplois" className="hover:text-emerald-600">التوظيف</Link>
        {" > "}
        <span className="text-gray-900">نموذج CV المغرب 2026</span>
      </nav>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">أفضل نموذج CV المغرب 2026 مع أمثلة جاهزة للتحميل</h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>.</span>
          <span>9 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">
        <p>CV ولا السيرة الذاتية هو أول وثيقة كايقراها المشغل عنك. ف 2026، سوق الشغل فالمغرب ولا أكثر تنافسية. CV بدون تصميم ولا الأخطاء الإملائية كايتحذف ف 10 ثواني.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">1. نموذج CV بالفرنسية (الأكثر استخداما فالمغرب)</h2>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm leading-7">
          <p><strong>[Nom Prenom]</strong></p>
          <p>[Adresse] | [Telephone] | [Email] | [LinkedIn]</p>
          <p><strong>Profil</strong></p>
          <p>Ingenieur en [specialite] avec [X] annees d experience.</p>
          <p><strong>Experiences Professionnelles</strong></p>
          <p>[Poste] - [Societe] - [Date]</p>
          <p><strong>Formation</strong></p>
          <p>[Diplome] - [Ecole] - [Annee]</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">2. نموذج CV بالعربية (للقطاع العام)</h2>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm leading-7">
          <p><strong>[الاسم الكامل]</strong></p>
          <p>[العنوان] | [الهاتف] | [البريد الإلكتروني]</p>
          <p><strong>الملخص المهني</strong></p>
          <p>متخصص في [المجال] مع [X] سنوات من الخبرة.</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">3. نصائح مهمة لـ CV ناجح</h2>
        <h3 className="text-xl font-bold text-gray-900">3.1. التخصيص</h3>
        <p>ما ترسلش نفس CV لجميع الشركات. خصص CV لكل وظيفة.</p>

        <h3 className="text-xl font-bold text-gray-900">3.2. الكلمات المفتاحية (ATS)</h3>
        <p>بزاف ديال الشركات الكبرى كاتستعمل Applicant Tracking System (ATS) باش تمسح CV. اقرأ الإعلان باش تعرف الكلمات المهمة، وضمنها ف CV ديالك.</p>

        <h3 className="text-xl font-bold text-gray-900">3.3. الأرقام والنتائج</h3>
        <p>الأرقام كاتعطي مصداقية. بدل ما تكتب كنت مسؤول عن فريق، اكتب كنت أدير فريق من 12 شخصا.</p>

        <h2 className="text-2xl font-bold text-gray-900">4. قائمة المراجعة قبل إرسال CV</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li>صحيح الإملاء والنحو؟</li>
          <li>صحيح التنسيق؟ (هوامش، خط واحد، مسافات متساوية).</li>
          <li>مخصص للوظيفة؟ (غير عام).</li>
          <li>PDF وليس Word؟</li>
        </ul>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">خاتمة</h2>
        <p>CV هو بوابتك للوظيفة. استثمر الوقت والجهد فكتابته. بالتوفيق.</p>
      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          {"اقرا أيضا: "}
          <Link href="/emplois/guides/lettre-motivation-maroc-exemple" className="text-emerald-600 underline hover:text-emerald-800">نموذج Lettre de Motivation</Link>
          {" | "}
          <Link href="/emplois/guides/questions-entretien-embauche-reponses" className="text-emerald-600 underline hover:text-emerald-800">أسئلة مقابلة العمل</Link>
        </p>
      </div>
    </article>
  );
}
