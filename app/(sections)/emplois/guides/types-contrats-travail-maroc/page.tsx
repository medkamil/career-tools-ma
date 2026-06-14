import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "أنواع عقود العمل في المغرب: CDD و CDI والفرق بينهم بالتفصيل | Tawdif Pro",
  description: "دليل شامل لأنواع عقود العمل في المغرب 2026. الفرق بين CDD و CDI، عقد العمل المؤقت والموسمي، شروط التجديد، الحقوق والواجبات، ونماذج العقود.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "أنواع عقود العمل في المغرب: CDD و CDI والفرق بينهم بالتفصيل",
  description: "دليل شامل لأنواع عقود العمل في المغرب. الفرق بين CDD و CDI، عقد العمل المؤقت والموسمي، شروط التجديد، الحقوق والواجبات.",
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
    { "@type": "ListItem", position: 3, name: "أنواع عقود العمل في المغرب: CDD و CDI", item: "https://tawdifpro.ma/emplois/guides/types-contrats-travail-maroc" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هو الفرق بين CDD و CDI فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CDD (Contrat a Duree Determinee) هو عقد محدد المدة، كايخلص ف تاريخ معين ولا فاش كاتكمل خدمة معينة. CDI (Contrat a Duree Indeterminee) هو عقد غير محدد المدة، كايبقى ساري حتى يقرر أحد الطرفين إنهاء العلاقة. الفرق الرئيسي: CDD عندو مدة قصوى قانونية وكتجدد لعدد محدد، أما CDI فما عندوش مدة محددة. فالمغرب، المدة القصوى لـ CDD هي سنة واحدة قابلة للتجديد مرتين (أي 3 سنين كحد أقصى).",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي مدة CDD القصوى فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "المدة القصوى لعقد CDD فالمغرب هي سنة واحدة. كايتجدد مرتين على الأكثر، يعني المدة الإجمالية ما تتعداش 3 سنين. ولكن فيه استثناءات: بالنسبة للأجانب والعقود المرتبطة بمشاريع محددة، تقدر تكون المدة أكبر. فاش كاتخلص مدة CDD (3 سنين)، إلا بغا المشغل يستمر معاك، خاصو يحول العقد لـ CDI ولا يجدد بعقد جديد.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي الحقوق ديالي ف حالة CDD؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "فاش كاتخدم بـ CDD، عندك نفس الحقوق ديال الأجير فـ CDI فاللي كايتعلق بالأجر والحماية الاجتماعية. ولكن فيه بعض الفروق: ما كاتستحقش تعويض نهاية الخدمة إلا ف حالة الطرد غير المبرر. عندك الحق ف indemnite de precarite وهيا تعويض نهاية العقد (كايتسنا 6% من مجموع الأجر إلا كان العقد طولو شهر ولا كتر). عندك الحق فالإجازات السنوية، CNSS، والتغطية الصحية.",
      },
    },
    {
      "@type": "Question",
      name: "واش يقدر المشغل يجدد CDD بلا حدود؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "لا، القانون المغربي كايمنع التجديد بلا حدود. CDD كايتجدد مرتين فقط، والمدة الإجمالية ما تتعداش 3 سنين. إلا جددو المشغل كتر من هاد المدة، العقد كايولي CDI بحكم القانون. يعني، إلا بقيتي ف نفس الشركة كتر من 3 سنين بـ CDD، عندك الحق تطالب بتحويل العقد لـ CDI.",
      },
    },
    {
      "@type": "Question",
      name: "شنو الفرق بين العقد الموسمي والعقد المؤقت؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "العقد الموسمي (Contrat Saisonnier) كايتعلق بأنشطة كاتكرر كل موسم، بحال الفلاحة، السياحة، والحرف الموسمية. مدة هاد العقد كاتكون محدودة بالموسم. العقد المؤقت (Contrat Temporaire ou Interim) كايتعلق بتبديل أجير غائب (بحال إجازة الأمومة) ولا لزيادة مؤقتة فالنشاط. الفرق الأساسي: العقد الموسمي كايتعلق بنشاط موسمي متكرر، أما العقد المؤقت فكاتكون لسبب معين ومؤقت.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي الشروط القانونية لكتابة عقد الشغل فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أي عقد شغل فالمغرب خاصو يتضمن: هوية الطرفين (الاسم الكامل والعنوان)، نوع العقد (CDD ولا CDI)، تاريخ البدء، المدة (لـ CDD)، الأجر ونوعو، مدة العمل الأسبوعية، مكان الخدمة، فترة الإخطار (preavis)، وطبيعة المهام. العقد كايتكتب باللغة العربية ولا الفرنسية. ف حالة التنازع، الجهة لي كاتعاني من الترجمة كاتستفيد. المستحسن أن العقد يكون مكتوب بجوج اللغات.",
      },
    },
    {
      "@type": "Question",
      name: "شنو اللي كايتصرف للعقد إلا تحول من CDD لـ CDI؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "فاش كايتحول العقد من CDD لـ CDI، الأقدمية (anciennete) كاتحسب من أول يوم ف CDD. يعني، إلا خدمت 3 سنين بـ CDD وتحول العقد لـ CDI، الأقدمية ديالك كاتبدا من اليوم لي بديت فيه الـ CDD. هاد الشي مهم باش تحسب التعويضات و indamnites ديال نهاية الخدمة فالمستقبل.",
      },
    },
  ],
};

export default function TypesContratsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">الرئيسية</Link>
        {" > "}
        <Link href="/emplois" className="hover:text-emerald-600">التوظيف</Link>
        {" > "}
        <span className="text-gray-900">أنواع عقود العمل فالمغرب</span>
      </nav>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">أنواع عقود العمل في المغرب: CDD و CDI والفرق بينهم بالتفصيل</h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>.</span>
          <span>8 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">
        <p>فاش كاتقلب على خدمة فالمغرب، واحد من أول الأسئلة: شنو نوع العقد لي غادي توقع؟ CDD ولا CDI؟ ولا عقد موسمي؟ الفرق بين هاد العقود كايدوز عليه بزاف ديال الناس، والنتيجة كاتكون اختيارات غير مناسبة للحالة الشخصية.</p>
        <p>مريم من مراكش، عندها 5 سنين فمجال السياحة. هادي 3 سنين كاتخدم بـ CDD ففندق. المشغل كايجدد العقد كل سنة. مريم ما كانتش عارفة أن عندها الحق تطالب بـ CDI من بعد 3 سنين. فهاد المقال، غادي نشرحو ليك جميع أنواع عقود العمل فالمغرب بالدارجة باش تفهم وين عندك وشنو حقوقك.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">1. CDI (عقد غير محدد المدة)</h2>
        <p>CDI ولا Contrat a Duree Indeterminee هو النوع الأكثر استقرارا فسوق الشغل فالمغرب. هاد العقد ما عندوش تاريخ نهاية. كايبقى ساري حتى يقرر المشغل ولا الأجير إنهاء العلاقة لأسباب قانونية. المشكل أن بزاف ديال الشركات فالمغرب كاتفضل CDD على CDI باش تتفادى المسؤوليات القانونية.</p>

        <h2 className="text-2xl font-bold text-gray-900">2. CDD (عقد محدد المدة)</h2>
        <p>CDD ولا Contrat a Duree Determinee هو عقد عندو مدة محددة. كايخلص فتاريخ معين ولا فاش كاتكمل خدمة محددة. فالمغرب، المدة القصوى لـ CDD هي سنة واحدة. كايتجدد مرتين على الأكثر، والمدة الإجمالية ما تتعداش 3 سنين. هاد النوع كايتستعمل بزاف فمجال السياحة، الفلاحة، والبناء.</p>

        <h2 className="text-2xl font-bold text-gray-900">3. عقد العمل الموسمي (Contrat Saisonnier)</h2>
        <p>هاد النوع كايختص بالأنشطة لي كاتكرر كل موسم: الفلاحة (جني الزيتون، جني الفواكه)، السياحة (موسم الصيف)، والحرف التقليدية. المدة كاتكون محدودة بالموسم، والعقد كايتجدد كل موسم. ولكن، إلا كنتي كاتخدم ف نفس الشركة كل موسم لعدة سنين، تقدر تطالب بـ CDI.</p>

        <h2 className="text-2xl font-bold text-gray-900">4. عقد العمل المؤقت (Contrat de Travail Temporaire)</h2>
        <p>هاد النوع كايخدم فاش كايتطلب تعويض أجير غائب (إجازة الأمومة، المرض) ولا لزيادة مؤقتة فالنشاط. المدة كاتكون محدودة بسبب الحاجة. فالمغرب، كاينين شركات متخصصة فالتشغيل المؤقت (شركات Interim). الأجير المؤقت كايوقع العقد مع الشركة ديال Interim، والمشغل كايستأجر الخدمة.</p>

        <h2 className="text-2xl font-bold text-gray-900">5. عقد التدريب (Convention de Stage)</h2>
        <p>Convention de Stage ما هياش عقد شغل بالمعنى القانوني. هيا اتفاقية بين الأجير والشركة والمؤسسة التعليمية. الطالب كاتدوز فترة تدريب فشركة باش يكتسب الخبرة. هاد الفترة ما كاتحسبش ف CNSS ولا فالأقدمية. ولكن، إلا المشغل قدر يثبت أن الطالب كايخدم نفس الخدمة مع باقي الأجراء، كايتعامل معاه كأجير قانوني.</p>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">خاتمة</h2>
        <p>اختيار نوع العقد كايتوقف على طبيعة الخدمة، المدة المطلوبة، واحتياجات الطرفين. ولكن، المهم أنك تكون عارف حقوقك فكل نوع. ما توقعش على عق أعمى.</p>
      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          {"اقرا أيضا: "}
          <Link href="/emplois/guides/indemnite-licenciement-maroc" className="text-emerald-600 underline hover:text-emerald-800">تعويض نهاية الخدمة فالمغرب</Link>
          {" | "}
          <Link href="/emplois/guides/cv-professionnel-maroc-2026" className="text-emerald-600 underline hover:text-emerald-800">CV professionnel Maroc 2026</Link>
        </p>
      </div>
    </article>
  );
}
