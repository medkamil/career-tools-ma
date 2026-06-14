import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "أفضل أسئلة وإجابات مقابلة العمل في المغرب 2026 | Tawdif Pro",
  description: "أهم أسئلة مقابلة العمل (Entretien Embauche) في المغرب 2026 مع الإجابات النموذجية. كيفية تحضير المقابلة، ونصائح النجاح.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "أفضل أسئلة وإجابات مقابلة العمل في المغرب 2026",
  description: "أهم أسئلة مقابلة العمل في المغرب مع الإجابات النموذجية. كيفية تحضير المقابلة، ونصائح النجاح.",
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
    { "@type": "ListItem", position: 3, name: "أسئلة وإجابات مقابلة العمل في المغرب", item: "https://tawdifpro.ma/emplois/guides/questions-entretien-embauche-reponses" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هي أكثر الأسئلة شيوعا فمقابلات العمل فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أكثر الأسئلة شيوعا: 1) حدثنا عن نفسك، 2) شنو هي نقاط قوتك وضعفك، 3) علاش بغيتي هاد الوظيفة، 4) فين كاتشوف راسك ف 5 سنين، 5) علاش خرجتي من الشركة السابقة، و 6) شنو كاتعرف على شركتنا.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نجاوب على سؤال حدثنا عن نفسك؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الإجابة الصحيحة هي: ابدأ بالحاضر (شنو كاتخدم دابا)، ثم الماضي (الخبرات السابقة)، ثم المستقبل (شنو بغيتي تحقق). مثال: دابا أنا خدام فشركة كمحلل مالي منذ عامين. قبل هاد، خدمت فشركة XYZ كمتدرب. عندي ماستر فالمالية.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي نقاط القوة والضعف لي خاصني نذكر؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نقاط القوة: اختار 3 نقاط مرتبطة بالوظيفة. مثلا: التحليل، التواصل، والعمل الجماعي. نقاط الضعف: اختار نقطة وحدة حقيقية ولكن كاتحسن منها. مثال: كنت ماعنديش تنظيم كبير فالحين، ولكن دابا كاتستعمل Trello و Notion.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نجاوب على سؤال علاش بغيتي هاد الوظيفة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الجواب المثالي كايجمع بين: 1) إعجابك بالشركة (سمعتها، قيمها، مشاريعها)، 2) تطابق المهارات ديالك مع متطلبات المنصب، 3) فرصة التطور المهني.",
      },
    },
    {
      "@type": "Question",
      name: "شنو اللباس المناسب للمقابلة فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "فالمغرب، اللباس الرسمي هو الأفضل. للرجال: بدلة رسمية (costume) أو قميص مع بنطلون رسمي وكرافة. للنساء: بدلة أو فستان رسمي محتشم، مع حذاء بكعب معقول.",
      },
    },
    {
      "@type": "Question",
      name: "شنو الأسئلة لي خاصني نسول أنا فالمقابلة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أسئلة ذكية كاتظهر اهتمامك: 1) شنو هي التحديات لي كتواجه الفريق دابا؟ 2) كيفاش كاتقاس النجاح فهاد المنصب؟ 3) شنو هي فرص التطور المهني؟ 4) شنو هي ثقافة الشركة؟",
      },
    },
  ],
};

export default function QuestionsEntretienPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">الرئيسية</Link>
        {" > "}
        <Link href="/emplois" className="hover:text-emerald-600">التوظيف</Link>
        {" > "}
        <span className="text-gray-900">أسئلة مقابلة العمل فالمغرب</span>
      </nav>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">أفضل أسئلة وإجابات مقابلة العمل في المغرب 2026</h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>.</span>
          <span>12 دقيقة قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">
        <p>المقابلة (Entretien) هي الفرصة الوحيدة باش تبيع نفسك للمشغل. ولكن، الضغط والتوتر كايخلو بزاف ديال المرشحين يخطؤوا فأسئلة بسيطة. التحضير الجيد هو السر.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">1. أسئلة عامة وإجاباتها</h2>
        <p>أسئلة مثل حدثنا عن نفسك، نقاط القوة والضعف، وعلاش هاد الوظيفة هي الأكثر شيوعا. تحضير إجابات واضحة ومختصرة لها كايزيد فرصك فالقبول.</p>

        <h2 className="text-2xl font-bold text-gray-900">2. أسئلة سلوكية (Situation comportementale)</h2>
        <p>هاد الأسئلة كاتختبر كيفاش كاتصرف ف مواقف حقيقية. أشهر طريقة للإجابة هي STAR: S (Situation) - T (Tache) - A (Action) - R (Resultat).</p>

        <h2 className="text-2xl font-bold text-gray-900">3. نصائح عامة للنجاح</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>البحث المسبق:</strong> اقرأ عن الشركة، منتجاتها، قيمها.</li>
          <li><strong>التدريب:</strong> تدرب على الإجابات قدام المراية.</li>
          <li><strong>اللغة:</strong> فالمغرب، المقابلات كاتكون بالعربية والفرنسية.</li>
          <li><strong>التوقيت:</strong> وصل قبل المقابلة ب 15 دقيقة.</li>
        </ul>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">خاتمة</h2>
        <p>المقابلة هي فرصة، مش اختبار. كلما تحضرتي أكثر، كلما كانت الفرصة أكبر. بالتوفيق.</p>
      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          {"اقرا أيضا: "}
          <Link href="/emplois/guides/cv-professionnel-maroc-2026" className="text-emerald-600 underline hover:text-emerald-800">CV professionnel Maroc 2026</Link>
          {" | "}
          <Link href="/emplois/guides/lettre-motivation-maroc-exemple" className="text-emerald-600 underline hover:text-emerald-800">نموذج رسالة الدافع</Link>
        </p>
      </div>
    </article>
  );
}
