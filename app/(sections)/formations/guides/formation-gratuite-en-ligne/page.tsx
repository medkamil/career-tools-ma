import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "أفضل منصات التكوين المجاني عن بعد في المغرب 2026",
  description: "دليل شامل لأفضل منصات التعليم والتكوين المجاني عن بعد في المغرب والعالم.",
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
    { "@type": "ListItem", position: 3, name: "أفضل منصات التكوين المجاني عن بعد في المغرب 2026", item: "https://tawdifpro.ma/formations/guides/formation-gratuite-en-ligne" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هي أفضل منصة تكوين مجاني عن بعد فالمغرب 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أفضل منصة مجانية فالمغرب هي منصة التكوين عن بعد (mtae.ma) من وزارة التربية الوطنية. كاتقدم تكوينات فجميع المجالات بشهادات مجانية. عالمياً، Coursera كاتقدم أكتر من 2000 دورة مجانية مع Audits. Edx كاتقدم أكتر من 3000 دورة من جامعات عالمية (MIT, Harvard, Berkeley).",
      },
    },
    {
      "@type": "Question",
      name: "واش كاين تكوين مجاني بشهادة فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "إي كاين. منصة التكوين عن بعد (mtae.ma) كاتقدم تكوينات مجانية بشهادات معتمدة من وزارة التربية الوطنية. Coursera و Edx كايتوفرا Audit مجاني (بدون شهادة) أو Financial Aid للشهادة. LinkedIn Learning عندو شهر مجاني. Google Digital Garage كاتقدم شهادات مجانية (Google Analytics, Digital Marketing).",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي أفضل دورات IT المجانية فالمغرب 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أفضل دورات IT المجانية: 1) CS50 (Harvard) على Edx - دورة علوم الكمبيوتر الأفضل فالعالم، 2) Google IT Support على Coursera، 3) FreeCodeCamp (Full Stack Web Development)، 4) Codecademy (HTML, CSS, JavaScript, Python)، 5) Microsoft Learn (Azure, AI, Power Platform)، 6) Cisco Networking Academy (Réseaux).",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نتحصل على شهادة مجانية من Coursera؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "باش تتحصل على شهادة مجانية من Coursera: 1) سجل فالدورة، 2) اختر &quot;Audit&quot; (مجاني) باش تتابع المحتوى بدون شهادة، 3) قدم طلب Financial Aid (مساعد مالية) - كورسيرا كاتوفر مساعدات للطلاب من الدول النامية بما فيها المغرب. التقديم كايتطلب: أسباب، ميزانية، وتأثير الدورة على حياتك المهنية. نسبة القبول 70%.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي منصات التكوين المغربية المجانية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أهم المنصات المغربية: 1) منصة التكوين عن بعد (mtae.ma) - وزارة التربية، 2) منصة OFPPT للتكوين عن بعد - ofppt.ma، 3) منصة ANAPEC للتكوين - taae.ma، 4) منصة المواهب - almawhiba.ma، 5) منصة التكوين المستمر من وزارة الشغل. هاد المنصات كاتقدم تكوينات بالعربية والفرنسية.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي أفضل دورات تعلم اللغة الإنجليزية المجانية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أفضل المواقع لتعلم الإنجليزية مجاناً: 1) Duolingo (تطبيق سهل وممتع)، 2) BBC Learning English (دورات مجانية بالفيديو)، 3) British Council - Learn English (تمارين ومقاطع)، 4) Open English (فيه جزء مجاني)، 5) YouTube: قنوات مثل English with Lucy, Arnel, English Addict. فالمغرب، للمراكز الثقافية (Centre Culturel Américain, British Council) عندهم دورات مجانية.",
      },
    },
    {
      "@type": "Question",
      name: "واش التكوين عن بعد كايتعترف به فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم، التكوين عن بعد كايتعترف به فالمغرب بشكل متزايد. الشهادات من المنصات الحكومية (mtae.ma, ofppt.ma) كايتعترف بهم رسمياً. الشهادات العالمية (Coursera, Edx, Google, Microsoft) عندها قيمة كبيرة عند الشركات المغربية الحديثة. ف 2026، 70% من الشركات المغربية كاتقبل الشهادات الرقمية.",
      },
    },
  ],
};

const schemas = [articleSchema, breadcrumbSchema, faqSchema];

export default function FormationGratuiteEnLignePage() {
  return (
    <ArticleLayout
      schemas={schemas}
      breadcrumbs={[
        { name: "قسم التكوين", href: "/formations" },
        { name: "أفضل منصات التكوين المجاني عن بعد في المغرب 2026", href: "/formations/guides/formation-gratuite-en-ligne" }
      ]}
      title="أفضل منصات التكوين المجاني عن بعد في المغرب 2026"
      readingTime="10 دقائق قراءة"
    >
<p>العالم ولكّل رقمي. ف 2026، التكوين عن بعد (Formation à distance) ولّا ضروري باش تطور مهاراتك وتزيد فرصك فالشغل. والمزيان فيه أنو بزاف ديال المنصات كايتوفر تكوينات مجانية بالكامل.</p>

        <p>فهاد المقال، غادي نعرفوك على أفضل منصات التكوين المجاني عن بعد فالمغرب 2026: عالمية ومحلية. مع الشهادات لي كاتقدم والمجالات المتاحة.</p>

        <hr />

        <h2>1. Coursera.org — العملاق العالمي</h2>
        <p>Coursera هي أكبر منصة تعليم عن بعد فالعالم. فيها أكتر من 2000 دورة من أشهر الجامعات (Stanford, Yale, Michigan). فالمغرب، تقدر تصل للدورات مجاناً ب Audit و Financial Aid.</p>
        <ul>
          <li><strong>المجالات:</strong> IT, Business, Data Science, الصحة، اللغات.</li>
          <li><strong>الشهادة:</strong> بشهادة مدفوعة (تقدر تطلب Financial Aid).</li>
          <li><strong>اللغة:</strong> إنجليزية (مع ترجمة للعربية فبعض الدورات).</li>
        </ul>

        <h2>2. Edx.org — من جامعات Ivy League</h2>
        <p>Edx منصة تأسست من MIT و Harvard. فيها دورات عالية الجودة فجميع المجالات. CS50 من Harvard هي أشهر دورة برمجة فالعالم.</p>
        <ul>
          <li><strong>المجالات:</strong> علوم الكمبيوتر، الهندسة، الإدارة، اللغات.</li>
          <li><strong>الشهادة:</strong> Audit مجاني + شهادة مدفوعة.</li>
          <li><strong>الميزة:</strong> دورات من أفضل جامعات العالم.</li>
        </ul>

        <h2>3. منصة التكوين عن بعد (mtae.ma) — المغربية</h2>
        <p>منصة حكومية مغربية من وزارة التربية الوطنية. كاتقدم تكوينات مجانية بالكامل بشهادات معتمدة. الأنسب للمغاربة حيت المحتوى بالعربية والفرنسية.</p>
        <ul>
          <li><strong>المجالات:</strong> التربية، تكنولوجيا التعليم، اللغات، المهارات الحياتية.</li>
          <li><strong>الشهادة:</strong> مجانية ومعتمدة من الوزارة.</li>
          <li><strong>اللغة:</strong> العربية والفرنسية.</li>
        </ul>

        <h2>4. FreeCodeCamp.org — البرمجة مجاناً</h2>
        <p>FreeCodeCamp منصة مجانية 100% لتعلم البرمجة. كاتقدم 8 شهادات فالتطوير: Responsive Web Design, JavaScript Algorithms, Front-end Libraries, Data Visualization, Back-end APIs, Quality Assurance, Scientific Computing, Data Analysis.</p>
        <ul>
          <li><strong>المدة:</strong> 300 ساعة لكل شهادة.</li>
          <li><strong>الشهادة:</strong> مجانية.</li>
          <li><strong>اللغة:</strong> إنجليزية (العربية متوفرة فبعض الدروس).</li>
        </ul>

        <h2>5. Google Digital Garage — التسويق الرقمي</h2>
        <p>منصة Google الرسمية للتدريب على التسويق الرقمي. فيها 26 وحدة من Fundamentals of Digital Marketing. الشهادة معترف بها عالمياً.</p>
        <ul>
          <li><strong>الشهادة:</strong> مجانية من Google.</li>
          <li><strong>اللغة:</strong> العربية والإنجليزية والفرنسية.</li>
        </ul>

        <h2>6. LinkedIn Learning — المهارات المهنية</h2>
        <p>LinkedIn Learning عندو شهر مجاني (Free Trial). فيه آلاف الدورات فجميع المهارات المهنية. بعد ما كاتكمل الدورة، تلقى badge ف بروفايل LinkedIn ديالك.</p>

        <h2>7. منصة OFPPT للتكوين عن بعد</h2>
        <p>OFPPT عندو منصة خاصة للتكوين عن بعد. كاتقدم تكوينات إضافية للمسجلين ف OFPPT. بعض التكوينات مفتوحة للجميع. مجانية بالكامل.</p>

        <h2>8. Khan Academy — من التعليم الأساسي للجامعي</h2>
        <p>Khan Academy منصة مجانية 100%. كاتغطي مواد من الابتدائي للجامعي. فالمغرب، كثير من الطلاب كايستعملوها للتقوية فالرياضيات والعلوم.</p>

        <h2>9. Microsoft Learn — تكنولوجيا مايكروسوفت</h2>
        <p>Microsoft Learn كاتقدم تكوينات مجانية فجميع منتجات Microsoft: Azure, Office 365, Dynamics 365, Power Platform, AI. كاتوفر شارات (Badges) وشهادات معترف بها.</p>

        <h2>10. YouTube — تعلم أي حاجة مجاناً</h2>
        <p>YouTube هو أكبر مكتبة فيديوهات تعليمية فالعالم. فالمغرب، كاين قنوات مغربية متخصصة فالتعليم والتكوين. مثلاً: قنوات فالمحاسبة، البرمجة، التسويق، الطبخ، الصيانة.</p>

        <h2>كيفاش تختار المنصة المناسبة؟</h2>
        <ul>
          <li><strong>للبرمجة والتكنولوجيا:</strong> FreeCodeCamp, Coursera، CS50.</li>
          <li><strong>للإدارة والأعمال:</strong> Coursera, LinkedIn Learning, Edx.</li>
          <li><strong>للشهادات الحكومية فالمغرب:</strong> mtae.ma, OFPPT.</li>
          <li><strong>للمهارات اللغوية:</strong> Duolingo, BBC Learning English.</li>
          <li><strong>للتسويق الرقمي:</strong> Google Digital Garage, HubSpot Academy.</li>
        </ul>

        <h2>نصائح للاستفادة القصوى من التكوين المجاني</h2>
        <ul>
          <li><strong>حدد هدفك:</strong> شنو باغي تتعلم وعلاش؟</li>
          <li><strong>خصّص وقت:</strong> ساعة فاليوم على الأقل.</li>
          <li><strong>طبق ما تعلمتي:</strong> التطبيق هو المفتاح. سو مشروع صغير.</li>
          <li><strong>شارك فالمجتمعات:</strong> انضم لـ LinkedIn/Facebook groups.</li>
          <li><strong>احصل على الشهادة:</strong> حتى لو مجانية. الشهادة كاتزيد ف CV.</li>
        </ul>

        <hr />

        <h2>ختاما</h2>
        <p>العالم الرقمي كايوفرو ليك تكوينات بملايين الدولارات مجاناً. المهارات لي كاتحتاجها باش تبدل حياتك المهنية ف 2026 كاينة f منصة وحدة من هاد المنصات. المبادرة منك. ابدأ اليوم.</p>
    </ArticleLayout>
  );
}
