import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "أفضل نموذج CV المغرب 2026 مع أمثلة جاهزة للتحميل",
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
        <p>CV ولا السيرة الذاتية هو أول وثيقة كايقراها المشغل عنك. ف 2026، سوق الشغل فالمغرب ولا أكثر تنافسية من قبل. CV ضعيف ولا فيه أخطاء إملائية كايتحذف ف 10 ثواني فقط. فهاد المقال، غادي نعطيك نماذج جاهزة، نصائح عملية، وقوالب تقدر تحملها وتعدل عليها.</p>

        <p>قبل ما نبداو، حاجة مهمة: فالمغرب ماشي بحال أوربا. الشركات المغربية كاتفضل CV بالفرنسية ف 60% من الحالات. العربية كاتستعمل ف 30% (خصوصا فالقطاع العام والبنوك التقليدية). الإنجليزية كاتستعمل ف 10% (الشركات المتعددة الجنسيات). اختار اللغة على حسب المجال ديالك.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">1. نموذج CV بالفرنسية (الأكثر استخداما فالمغرب)</h2>
        <p>هاد النموذج كايناسب أغلب الوظائف فالمغرب. نظيف، بسيط، ومباشر:</p>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm leading-7">
          <p className="font-bold text-lg">[Nom Prénom]</p>
          <p className="text-gray-600">[Ville, Maroc] | [Téléphone] | [Email] | [LinkedIn]</p>
          <p className="mt-3 font-bold">Profil Professionnel</p>
          <p>Ingénieur en [Spécialité] avec [X] années d expérience dans le secteur [Secteur]. Passionné par [Domaine], je cherche à rejoindre une équipe dynamique pour [Objectif].</p>
          <p className="mt-3 font-bold">Expériences Professionnelles</p>
          <p><strong>[Poste]</strong> - [Société], [Ville] | [Date Début] - [Date Fin]</p>
          <p className="mr-4">• Réalisation [X] avec un impact de [Y]% sur le chiffre d affaires.</p>
          <p className="mr-4">• Management d une équipe de [Z] personnes.</p>
          <p className="mt-3 font-bold">Formation</p>
          <p><strong>[Diplôme]</strong> - [École/Université] | [Année]</p>
          <p className="mt-3 font-bold">Compétences</p>
          <p className="mr-4">• [Compétence 1] • [Compétence 2] • [Compétence 3] • [Compétence 4]</p>
          <p className="mt-3 font-bold">Langues</p>
          <p className="mr-4">Arabe (Langue maternelle) | Français (Courant) | Anglais (Intermédiaire)</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">2. نموذج CV بالعربية (للقطاع العام والوظائف الإدارية)</h2>
        <p>هاد النموذج كايناسب المباريات والمقابلات فالقطاع العمومي. الرسمية والوضوح هما الأساس:</p>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm leading-7">
          <p className="font-bold text-lg">[الاسم الكامل]</p>
          <p className="text-gray-600">[المدينة، المغرب] | [رقم الهاتف] | [البريد الإلكتروني]</p>
          <p className="mt-3 font-bold">الملخص المهني</p>
          <p>متخصص في [المجال] مع [X] سنوات من الخبرة. عملت مع [نوع المؤسسات]. أتطلع للمساهمة في [الهدف المهني].</p>
          <p className="mt-3 font-bold">الخبرات المهنية</p>
          <p><strong>[المسمى الوظيفي]</strong> - [الشركة/المؤسسة]، [المدينة] | [تاريخ البداية] - [تاريخ النهاية]</p>
          <p className="mr-4">• الإشراف على [المشروع/الفريق] وتنفيذ [المهمة].</p>
          <p className="mt-3 font-bold">المؤهلات العلمية</p>
          <p><strong>[الشهادة]</strong> - [الجامعة/المدرسة] | [السنة]</p>
          <p className="mt-3 font-bold">المهارات</p>
          <p className="mr-4">• [مهارة 1] • [مهارة 2] • [مهارة 3]</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">3. نموذج CV بالإنجليزية (للشركات المتعددة الجنسيات)</h2>
        <p>هاد النموذج كايناسب الشركات الدولية لي كاتطلب الإنجليزية كلغة خدمة:</p>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm leading-7">
          <p className="font-bold text-lg">[Full Name]</p>
          <p className="text-gray-600">[City, Morocco] | [Phone] | [Email] | [LinkedIn]</p>
          <p className="mt-3 font-bold">Professional Summary</p>
          <p>Results-driven [Job Title] with [X] years of experience in [Industry]. Proven track record in [Key Skill].</p>
          <p className="mt-3 font-bold">Work Experience</p>
          <p><strong>[Job Title]</strong> - [Company], [Location] | [Start] - [End]</p>
          <p className="mr-4">• Achieved [Result] by implementing [Strategy].</p>
          <p className="mt-3 font-bold">Education</p>
          <p><strong>[Degree]</strong> - [University] | [Year]</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">4. نصائح مهمة لـ CV ناجح</h2>

        <h3 className="text-xl font-bold text-gray-900">4.1. التخصيص (Personnalisation)</h3>
        <p>ما ترسلش نفس CV لجميع الشركات. كل شركة عندها احتياجات مختلفة. اقرا الإعلان مليح، شوف شنو كايتطلب، وعدل CV باش يظهر أنك الشخص المناسب. خصص حتى الملخص ديالك (Profil) على حسب الوظيفة.</p>

        <h3 className="text-xl font-bold text-gray-900">4.2. الكلمات المفتاحية و ATS</h3>
        <p>بزاف ديال الشركات الكبرى كاتستعمل Applicant Tracking System (ATS) باش تمسح وتصنف CV. هاد النظام كايقرى الكلمات المفتاحية. يعني، إلا كان الإعلان كايقول "Gestion de projet", "Budget", "Microsoft Excel". خاصك تضمن هاد الكلمات فـ CV ديالك. ما تحاولش تغش النظام بوضع كلمات فنية بزاف فالباك (هاد الشي كايتشاف كـ spam).</p>

        <h3 className="text-xl font-bold text-gray-900">4.3. الأرقام والنتائج</h3>
        <p>الأرقام كاتعطي مصداقية للـ CV. بدل ما تكتب "كنت مسؤول عن فريق"، اكتب "كنت أدير فريق من 12 شخصا وحققت زيادة 20% فالإنتاجية". الأرقام كاتخلي الـ Recruteur كايتوقف ويقرا بتركيز. أمثلة: زدت المبيعات، خفضت المصاريف، دبرت مشاريع بقيمة كذا.</p>

        <h3 className="text-xl font-bold text-gray-900">4.4. التصميم والشكل</h3>
        <p>فالمغرب، التصميم المعقد (ألوان بزاف، رسومات) ما كاينفعش. معظم الشركات كاتفضل CV نظيف بالأسود والأبيض أو بلون واحد (أزرق، أخضر داكن). استعمل Canva ولا قوالب Word باش دير تصميم احترافي. المهم: يكون قابلة للقراءة، بخط واضح، وهوامش منظمة.</p>

        <h2 className="text-2xl font-bold text-gray-900">5. قائمة المراجعة قبل إرسال CV</h2>
        <p>قبل ما ترسل CV، تأكد من هاد النقاط:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li>صحيح الإملاء والنحو؟ (استعمل خدمة مجانية بحال Scribens ولا BonPatron).</li>
          <li>صحيح التنسيق؟ (هوامش متساوية، خط واحد فكلشي، نفس الحجم).</li>
          <li>مخصص للوظيفة؟ (غير عام، كاين شي حاجة خاصة بهاد الشركة).</li>
          <li>PDF وليس Word؟ الـ PDF كايحافظ على التنسيق فجميع الأجهزة.</li>
          <li>اسم الملف: "CV_اسمك_المنصب.pdf" (ماشي "CV_final_2.pdf").</li>
          <li>البريد الإلكتروني: احترامي (firstname.lastname@gmail.com) ماشي cool_boy@xxx.</li>
          <li>LinkedIn مظبوط؟ الصورة، الملخص، الخبرات كلها محدثة.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">6. أخطاء قاتلة فـ CV</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>الكذب:</strong> أغلى غلط. الشركات الكبرى كاتتحقق من المعلومات (background check).</li>
          <li><strong>طول CV:</strong> أقل من 10 سنين خبرة = صفحة وحدة. أكثر = صفحتين. بزاف من الناس كايديرو 3 صفحات وهاد خطأ قاتل.</li>
          <li><strong>الصورة غير مهنية:</strong> صورة جواز السفر، صورة فالشاطئ، صورة مع الأصحاب. خاصك صورة مهنية (خلفية بيضاء، لباس رسمي).</li>
          <li><strong>معلومات شخصية:</strong> رقم CIN، الحالة العائلية (إلا ما طلباتش)، الطول والوزن. هاد معلومات شخصية ما كاتحتاجش فـ CV.</li>
          <li><strong>الروتين:</strong> "Je suis motivé, dynamique, ponctuel..." هاد الكلمات ما كاتعني والو. استبدلها بالنتائج والأرقام.</li>
        </ul>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">خاتمة</h2>
        <p>CV هو بوابتك للوظيفة لي كاتحلم بها. استثمر الوقت والجهد فكتابته. خصصه لكل وظيفة، راقب الأخطاء، واستعمل الأرقام والأمثلة الواقعية. ومانساش، سوق الشغل فالمغرب ف 2026 كايطلب CV احترافي باش يكون ليك فرصة. بالتوفيق فمسيرتك المهنية!</p>
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
