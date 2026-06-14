import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "نموذج رسالة الدافع (Lettre de Motivation) في المغرب 2026 مع أمثلة | Tawdif Pro",
  description: "أفضل نماذج رسالة الدافع (Lettre de Motivation) في المغرب 2026. أمثلة جاهزة، نصائح الكتابة، والأخطاء الشائعة.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "نموذج رسالة الدافع (Lettre de Motivation) في المغرب 2026 مع أمثلة",
  description: "أفضل نماذج رسالة الدافع (Lettre de Motivation) في المغرب. أمثلة جاهزة، نصائح الكتابة، والأخطاء الشائعة.",
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
    { "@type": "ListItem", position: 3, name: "نموذج رسالة الدافع (Lettre de Motivation) 2026", item: "https://tawdifpro.ma/emplois/guides/lettre-motivation-maroc-exemple" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هي Lettre de Motivation وعلاش مهمة فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lettre de Motivation (رسالة الدافع) هي وثيقة كاتصحب CV فاش كاتقدم على خدمة. هدفها: شرح علاش أنت مناسب للوظيفة. فالمغرب، بزاف ديال الشركات كاتطلبها. الإحصائيات كاتشير أن 40% من المرشحين لي كايدوزو للشفوي عندهم Lettre de Motivation قوية.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي العناصر الأساسية ف Lettre de Motivation؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "العناصر: 1) المعلومات الشخصية (الاسم، العنوان، الهاتف، الإيميل)، 2) المعلومات ديال الشركة، 3) الموضوع (Objet: Candidature au poste de...)، 4) المقدمة، 5) فقرة عن مهاراتك، 6) فقرة عن علاش بغيتي هاد الشركة، 7) الخاتمة (طلب المقابلة)، 8) التوقيع.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي الأخطاء الشائعة ف كتابة Lettre de Motivation فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الأخطاء: 1) النسخ واللصق (قالب عام بدون تخصيص)، 2) الأخطاء اللغوية، 3) طولها بزاف (أكثر من صفحة)، 4) عدم ذكر اسم الشركة، 5) التكرار (نفس المعلومات ف CV)، 6) استعمال العبارات المكررة (Je suis motive, dynamique...).",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نكتب Lettre de Motivation للمغرب ف 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نصيحة 2026: الرسالة خاصها تكون مخصصة لكل شركة. اقرأ عن الشركة وذكر مشاريعها. استعمل الأرقام (مثلا: زدت المبيعات بنسبة 20%). اختصر: صفحة وحدة.",
      },
    },
    {
      "@type": "Question",
      name: "واش كاين فرق فالشكل بين Lettre de Motivation للقطاع العام والخاص؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ايوه، فرق. للقطاع العام: الشكل رسمي بزاف، كايتكتب بالعربية غالبا، والتركيز على الخدمة العمومية. للقطاع الخاص: الشكل أقل رسمية، كايتكتب بالفرنسية أو الإنجليزية، والتركيز على المهارات والإنجازات.",
      },
    },
  ],
};

export default function LettreMotivationPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">الرئيسية</Link>
        {" > "}
        <Link href="/emplois" className="hover:text-emerald-600">التوظيف</Link>
        {" > "}
        <span className="text-gray-900">رسالة الدافع (Lettre de Motivation)</span>
      </nav>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">نموذج رسالة الدافع (Lettre de Motivation) في المغرب 2026 مع أمثلة</h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>.</span>
          <span>8 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">
        <p>Lettre de Motivation هي وثيقة صغيرة ولكن تأثيرها كبير. فالمغرب، بزاف ديال الشركات كاتقرا الرسالة قبل CV. يعني، الرسالة هي الانطباع الأول.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">1. نموذج Lettre de Motivation بالعربية</h2>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm leading-7">
          <p>الموضوع: ترشيح لمنصب [اسم المنصب]</p>
          <p>السيد [اسم مسؤول التوظيف]،</p>
          <p>أنا [اسمك]، حاصل على [شهادتك]. أتقدم بترشيحي لمنصب [اسم المنصب]. أمتلك [X] سنوات من الخبرة في مجال [المجال].</p>
          <p>وتفضلوا بقبول فائق الاحترام،</p>
          <p>[اسمك] - [هاتفك] - [إيميلك]</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">2. نموذج Lettre de Motivation بالفرنسية</h2>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm leading-7">
          <p>Objet: Candidature au poste de [Titre du Poste]</p>
          <p>Madame, Monsieur,</p>
          <p>Actuellement [votre situation], je me permets de vous adresser ma candidature pour le poste de [Titre du Poste].</p>
          <p>Dans l attente de votre retour, veuillez agreer l expression de mes salutations distinguees.</p>
          <p>[Votre Nom]</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">3. نصائح عملية للكتابة</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>التخصيص:</strong> كل شركة عندها رسالة خاصة.</li>
          <li><strong>الأرقام:</strong> استعمل الأرقام (10% زيادة، 5 مشاريع).</li>
          <li><strong>اللغة:</strong> راقب اللغة. الأخطاء الإملائية كاتقتل فرصك.</li>
          <li><strong>الطول:</strong> صفحة وحدة. لا تزيد.</li>
        </ul>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">خاتمة</h2>
        <p>Lettre de Motivation هي مفتاحك للوظيفة. استثمر الوقت فكتابتها. بالتوفيق.</p>
      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          {"اقرا أيضا: "}
          <Link href="/emplois/guides/cv-professionnel-maroc-2026" className="text-emerald-600 underline hover:text-emerald-800">CV professionnel Maroc 2026</Link>
          {" | "}
          <Link href="/emplois/guides/questions-entretien-embauche-reponses" className="text-emerald-600 underline hover:text-emerald-800">أسئلة مقابلة العمل</Link>
        </p>
      </div>
    </article>
  );
}
