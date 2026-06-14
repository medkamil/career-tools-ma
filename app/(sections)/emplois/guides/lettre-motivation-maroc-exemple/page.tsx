import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

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

const schemas = [articleSchema, breadcrumbSchema, faqSchema];

export default function LettreMotivationPage() {
  return (
    <ArticleLayout
      schemas={schemas}
      breadcrumbs={[
        { name: "قسم التوظيف", href: "/emplois" },
        { name: "نموذج رسالة الدافع (Lettre de Motivation) 2026", href: "/emplois/guides/lettre-motivation-maroc-exemple" }
      ]}
      title="نموذج رسالة الدافع (Lettre de Motivation) في المغرب 2026 مع أمثلة"
      readingTime="10 دقائق قراءة"
    >
<p>Lettre de Motivation (رسالة الدافع) هي وثيقة صغيرة ولكن تأثيرها كبير فسوق الشغل المغربي. بزاف ديال الشركات فالمغرب كاتقرا الرسالة قبل CV. يعني، الرسالة هي الانطباع الأول وغالبا ما كاتحدد واش غادي يقراو CV ديالك ولا لا. فهاد المقال غادي نعطيك نماذج جاهزة ونصائح عملية باش تكتب رسالة كاتفتح ليك الأبواب.</p>

        <p>شنو هي بالضبط Lettre de Motivation؟ هي رسالة كاترفق مع CV فاش كاتقدم على وظيفة. الهدف ديالها: شرح علاش أنت الشخص المناسب للوظيفة، وعلاش بغيتي هاد الشركة بالذات. ما كاتعاودش المعلومات لي فـ CV، ولكن كاتعمق فسببين: قدراتك، ورغبتك فالانضمام لتلك الشركة.</p>

        <hr />

        <h2>1. نموذج Lettre de Motivation بالعربية (للقطاع العام والوظائف الإدارية)</h2>
        <p>هاد النموذج كايناسب المباريات والوظائف الحكومية والمؤسسات العمومية:</p>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm leading-7">
          <p><strong>الموضوع:</strong> ترشيح لمنصب [اسم المنصب]</p>
          <p className="mt-3">السيد [اسم مسؤول التوظيف]،</p>
          <p>أنا [الاسم الكامل]، حاصل على [الشهادة] من [المؤسسة]. أتقدم بترشيحي لمنصب [اسم المنصب] بعد اطلاعي على الإعلان المنشور على [المصدر]. أمتلك [X] سنوات من الخبرة ف مجال [المجال]، حيث عملت على [ذكر أهم الإنجازات]. إن خبرتي ف [المجال] وشغفي ب [الهدف] كايجعلاني مرشحا قويا لهذا المنصب.</p>
          <p>أتطلع لمناقشة مؤهلاتي معكم ف مقابلة شخصية.</p>
          <p>وتفضلوا بقبول فائق الاحترام،</p>
          <p>[الاسم الكامل] - [رقم الهاتف] - [البريد الإلكتروني]</p>
        </div>

        <h2>2. نموذج Lettre de Motivation بالفرنسية (للوظائف بالقطاع الخاص)</h2>
        <p>هاد النموذج هو الأكثر طلبا فالمغرب. كايناسب الشركات الخاصة والبنوك:</p>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm leading-7">
          <p className="font-bold">Objet: Candidature au poste de [Titre du Poste]</p>
          <p className="mt-3">Madame, Monsieur,</p>
          <p>Actuellement [votre situation professionnelle], je me permets de vous adresser ma candidature pour le poste de [Titre du Poste] au sein de [Nom de l entreprise]. Ayant eu l occasion de suivre les projets de votre entreprise, notamment [Projet spécifique], je suis convaincu que mon profil correspond à vos besoins.</p>
          <p>Fort de [X] années d expérience dans le domaine de [Domaine], j ai eu l opportunité de [Réalisation importante] chez [Ancienne entreprise]. Ma maîtrise de [Compétence clé] me permettra de contribuer efficacement à la réussite de votre équipe.</p>
          <p>Je me tiens à votre disposition pour un entretien afin de vous exposer plus en détail ma motivation.</p>
          <p>Dans l attente de votre retour, veuillez agréer l expression de mes salutations distinguées.</p>
          <p>[Votre Nom et Prénom]</p>
          <p>[Téléphone] | [Email]</p>
        </div>

        <h2>3. نموذج Lettre de Motivation بالإنجليزية (للمناصب الدولية)</h2>
        <p>هاد النموذج كايناسب الشركات المتعددة الجنسيات والمناصب لي كاتطلب الإنجليزية:</p>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm leading-7">
          <p className="font-bold">Subject: Application for [Job Title]</p>
          <p className="mt-3">Dear Hiring Manager,</p>
          <p>I am writing to express my strong interest in the [Job Title] position at [Company Name]. With [X] years of experience in [Industry], I have developed skills in [Key Skills] that align perfectly with the requirements of this role.</p>
          <p>At my current position with [Current Company], I successfully [Key Achievement]. I am excited about the opportunity to bring my expertise to [Company Name] and contribute to [Company Goal].</p>
          <p>I would welcome the opportunity to discuss my qualifications with you in an interview.</p>
          <p>Sincerely,</p>
          <p>[Full Name]</p>
        </div>

        <h2>4. نصائح عملية للكتابة</h2>

        <h3 className="text-xl font-bold text-gray-900">4.1. التخصيص هو المفتاح</h3>
        <p>ما ترسلش نفس الرسالة لجميع الشركات. اقرا عن الشركة قبل ما تكتب. شوف شنو كاتدير، شنو قيمها، شنو مشاريعها الحالية. وضمن هاد المعلومات ف الرسالة. مثلا: "أتابع مشاريعكم فمجال الطاقة المتجددة، وأعجبت بشكل خاص بمشروع Noor". هاد الشي كايوريهم أنك بغيتي هاد الشركة بالذات، مش أي شركة.</p>

        <h3 className="text-xl font-bold text-gray-900">4.2. الأرقام كاتعطي قيمة</h3>
        <p>بدل ما تقول "كنت خدام فالتسويق"، قل "ساهمت فزيادة المبيعات بنسبة 20% خلال 6 أشهر". الأرقام كاتخلي الرسالة كاتحكي وكاتعطي مصداقية. حاول دير رقم واحد على الأقل ف كل فقرة.</p>

        <h3 className="text-xl font-bold text-gray-900">4.3. الطول المثالي</h3>
        <p>صفحة وحدة، ولا تزيد. 3 ل 4 فقرات هو المثالي. مدير الموارد البشرية عندو وقت محدود. الرسالة الطويلة كاتمله وتخلية يحطها ف side. اختصر، كن مباشر، وركز على الأساسي.</p>

        <h3 className="text-xl font-bold text-gray-900">4.4. الأخطاء الإملائية</h3>
        <p>هاد أكبر عدو. خطأ إملائي واحد كايخلي الـ recruteur كايعتقد أنك ما عندكش اهتمام بالتفاصيل. استعمل أدوات مجانية باش تصلح الأخطاء: Scribens (للفرنسية)، BonPatron، و Grammarly (للإنجليزية). اقرا الرسالة بصوت عالي قبل ما ترسلها.</p>

        <h2>5. أخطاء شائعة ف Lettre de Motivation فالمغرب</h2>
        <ul>
          <li><strong>النسخ واللصق:</strong> قالب عام بدون تخصيص. هاد أكبر خطأ. الـ recruteur كايقرا بزاف ديال الرسائل ونفس القالب البارد كايبان من بعيد.</li>
          <li><strong>التكرار:</strong> نفس المعلومات لي فـ CV. الرسالة كاتكمل الـ CV، ما كاتعاودش.</li>
          <li><strong>العبارات المكررة:</strong> "Je suis motivé, dynamique, ponctuel, sérieux..." هاد الكلمات كاتعني والو. بدلها بأمثلة واقعية.</li>
          <li><strong>عدم ذكر اسم الشركة:</strong> "أتقدم لشركتكم المحترمة" بدون ذكر الاسم. الـ recruteur كايحس أن نفس الرسالة مشات ل 100 شركة.</li>
          <li><strong>طولها بزاف:</strong> أكثر من صفحة. المدير ما عندوش وقت يقرا رواية.</li>
          <li><strong>اللغة الغير مناسبة:</strong> مستوى اللغة الرسمية كايختلف حسب الشركة. شركة حديثة (startup) تقدر تستعمل لغة أقل رسمية. بنك تقليدي خاصك رسمي بزاف.</li>
        </ul>

        <h2>6. الفرق بين Lettre للقطاع العام والقطاع الخاص</h2>
        <p>الفرق واضح فالمغرب. فالقطاع العام (الوظيفة العمومية): الشكل رسمي بزاف، كايتكتب بالعربية غالبا، والتركيز على الخدمة العمومية والرغبة فخدمة الوطن. فالقطاع الخاص: الشكل أقل رسمية، كايتكتب بالفرنسية غالبا، والتركيز على المهارات والإنجازات والقيمة لي غادي تجيبها للشركة.</p>

        <hr />

        <h2>خاتمة</h2>
        <p>Lettre de Motivation هي مفتاحك للوظيفة لي كاتحلم بها. استثمر الوقت فكتابتها، خصصها لكل شركة، راقب الأخطاء الإملائية، واستعمل الأرقام والأمثلة الواقعية. تذكر: أول انطباع كايدوم. رسالة قوية كاتخلي الـ recruteur يقرا CV ديالك باهتمام. بالتوفيق!</p>
    </ArticleLayout>
  );
}
