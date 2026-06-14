import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "التسجيل في OFPPT 2026 (دليل كامل بالخطوات) | Tawdif Pro",
  description: "دليل كامل للتسجيل في OFPPT 2026: الشروط، المواعيد، التخصصات، والخطوات. كل ما تحتاج لمعرفته عن التسجيل في التكوين المهني.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "التسجيل في OFPPT 2026 (دليل كامل بالخطوات)",
  description: "دليل شامل للتسجيل في مكتب التكوين المهني وإنعاش الشغل (OFPPT) في المغرب لسنة 2026.",
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
    { "@type": "ListItem", position: 3, name: "التسجيل في OFPPT 2026", item: "https://tawdifpro.ma/formations/guides/inscription-ofppt-2026" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هي شروط التسجيل ف OFPPT 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "شروط التسجيل ف OFPPT: 1) السن: من 15 ل 25 سنة (يمكن استثناء لبعض التخصصات)، 2) المستوى الدراسي: حسب التخصص (السادس ابتدائي للتقني، الثالثة إعدادي للتقني المتخصص، البكالوريا للتقني المتخصص)، 3) الجنسية المغربية، 4) ملف طبي سليم، 5) اجتياز اختبار القبول والمقابلة.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي المواعيد المهمة للتسجيل ف OFPPT 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ف 2026، التسجيل ف OFPPT كايفتح ف شهر أبريل وماي. الاختيار والاختبارات ف يونيو ويوليوز. الإعلان على النتائج ف غشت. الدخول للمعاهد ف شتنبر. ولكن المهم أنك تتابع الموقع الرسمي ofppt.ma باش تعرف التواريخ بالضبط. كاينين فترات استثنائية للتسجيل ف بعض التخصصات ف يناير.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي التخصصات المطلوبة ف OFPPT 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أفضل التخصصات ف OFPPT 2026 من حيث الطلب: 1) التكنولوجيا الرقمية (Développement digital, Cybersécurité, Cloud Computing)، 2) الطاقة المتجددة (الطاقة الشمسية، الريحية)، 3) الصناعة 4.0 (الروبوتيك، الأتمتة)، 4) الصحة (المساعد الطبي، التمريض)، 5) السياحة والفندقة، 6) المحاسبة والإدارة، 7) اللوجستيك والنقل، 8) البناء والأشغال العمومية.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نسجل ف OFPPT أونلاين 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التسجيل كايدوي عبر منصة OFPPT الرسمية. الخطوات: 1) دخل لموقع ofppt.ma، 2) انقر على &quot;Inscription&quot;، 3) أنشئ حساب (Créer un compte) ب ايميل صحيح، 4) اختر التخصص والمعهد، 5) حمل الوثائق (الشهادات، الصورة، البطاقة الوطنية)، 6) ادفع رسوم التسجيل (إن وجدت)، 7) طبع وصل التسجيل، 8) انتظر لنتائج الاختيار.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي الشهادات لي كايقدمها OFPPT؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OFPPT كايقدم 4 مستويات من الشهادات: 1) التأهيل المهني (Certificat de Qualification Professionnelle) - مدة التكوين 6 شهور إلى سنة، 2) التقني (Technicien) - سنتين، 3) التقني المتخصص (Technicien Spécialisé) - سنتين، 4) التقني العالي (Technicien Supérieur - BTS) - سنتين. كل الشهادات كايتسلم من OFPPT وكايتعترف بهم من طرف الدولة.",
      },
    },
    {
      "@type": "Question",
      name: "واش OFPPT مجاني ولا خاصو الدفع؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التكوين ف OFPPT هو مجاني بالكامل. ما كاينش رسوم التسجيل للتكوين النهاري (Formation résidentielle). ولكن للتكوين بالتناوب (Alternance) والتمهين (Apprentissage)، بعض المعاهد كايتطلب رسوم إدارية رمزية. التكوين المستمر (Formation continue) عندو رسوم خاصة. ولكن الأغلبية الساحقة من التكوينات مجانية.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي الوثائق المطلوبة للتسجيل ف OFPPT؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الوثائق المطلوبة: 1) نسخة من الشهادة الدراسية (آخر شهادة محصل عليها)، 2) نسخة من بطاقة التعريف الوطنية مصادق عليها، 3) صورتين فوتوغرافيتين (4×3)، 4) شهادة طبية (Certificat médical) من طبيب معتمد، 5) النسخة الأصلية من شهادة الميلاد (Acte de naissance)، 6) إثبات العنوان (فاتورة الكهرباء أو الماء)، 7) وصل التسجيل الإلكتروني (بعد التسجيل أونلاين).",
      },
    },
  ],
};

export default function InscriptionOfpptPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">الرئيسية</Link>
        {" > "}
        <Link href="/formations" className="hover:text-emerald-600">التكوين</Link>
        {" > "}
        <span className="text-gray-900">التسجيل في OFPPT 2026</span>
      </nav>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">التسجيل في OFPPT 2026 (دليل كامل بالخطوات)</h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>.</span>
          <span>12 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">

        <p>مكتب التكوين المهني وإنعاش الشغل (OFPPT - Office de la Formation Professionnelle et de la Promotion du Travail) هو أكبر مؤسسة للتكوين المهني فالمغرب. كل سنة، أكتر من 500,000 مرشح كايقدموا على التسجيل ف OFPPT.</p>

        <p>فهاد المقال، غادي نعرفوك على كل شي خاص بالتسجيل ف OFPPT 2026: الشروط، المواعيد، التخصصات، وكيفاش تسجل خطوة بخطوة.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">شنو هو OFPPT؟</h2>
        <p>OFPPT تأسس ف 1974. عندو أكثر من 400 مؤسسة تكوينية فجميع جهات المغرب. كايقدم تكوينات فجميع المجالات: الصناعة، البناء، الخدمات، التكنولوجيا، الفلاحة، والصحة. الشهادات ديالو كايتعترف بهم وطنياً ودولياً.</p>

        <h2 className="text-2xl font-bold text-gray-900">شروط التسجيل ف OFPPT 2026</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>السن:</strong> 15 - 25 سنة. (يمكن استثناء للأشخاص فوق 25 سنة فالتكوين المستمر).</li>
          <li><strong>المستوى الدراسي:</strong> يختلف حسب التخصص: السادس ابتدائي, الثالثة إعدادي, الجذع المشترك, البكالوريا.</li>
          <li><strong>الجنسية:</strong> مغربية.</li>
          <li><strong>الصحة:</strong> شهادة طبية تثبت اللياقة.</li>
          <li><strong>الاختبار:</strong> اجتياز اختبار القبول والمقابلة.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">المواعيد المهمة ل 2026</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b px-4 py-2 text-right font-medium">المرحلة</th>
                <th className="border-b px-4 py-2 text-right font-medium">التاريخ 2026</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border-b px-4 py-2">فتح باب التسجيل</td><td className="border-b px-4 py-2">أبريل 2026</td></tr>
              <tr><td className="border-b px-4 py-2">آخر أجل للتسجيل</td><td className="border-b px-4 py-2">ماي 2026</td></tr>
              <tr><td className="border-b px-4 py-2">اختبارات القبول</td><td className="border-b px-4 py-2">يونيو - يوليوز 2026</td></tr>
              <tr><td className="border-b px-4 py-2">الإعلان على النتائج</td><td className="border-b px-4 py-2">غشت 2026</td></tr>
              <tr><td className="border-b px-4 py-2">بداية الدراسة</td><td className="border-b px-4 py-2">شتنبر 2026</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">أفضل التخصصات ف OFPPT 2026</h2>

        <h3 className="text-xl font-bold text-gray-900">1. التكنولوجيا الرقمية (Digital)</h3>
        <ul className="list-disc space-y-2 pr-6">
          <li>Développement Digital (Web et Mobile).</li>
          <li>Cybersécurité.</li>
          <li>Cloud Computing.</li>
          <li>Data Science.</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900">2. الطاقة المتجددة</h3>
        <ul className="list-disc space-y-2 pr-6">
          <li>الطاقة الشمسية (Panneaux Solaires).</li>
          <li>الطاقة الريحية (Éolienne).</li>
          <li>الكفاءة الطاقية.</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900">3. الصناعة 4.0</h3>
        <ul className="list-disc space-y-2 pr-6">
          <li>الروبوتيك (Robotique industrielle).</li>
          <li>الأتمتة (Automatisme).</li>
          <li>الميكاترونيك (Mécatronique).</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900">4. الصحة</h3>
        <ul className="list-disc space-y-2 pr-6">
          <li>المساعد الطبي (Aide-soignant).</li>
          <li>التمريض (Infirmier).</li>
          <li>تقنية المختبرات.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">خطوات التسجيل ف OFPPT 2026 أونلاين</h2>
        <ol className="list-decimal space-y-2 pr-6">
          <li><strong>دخل لموقع ofppt.ma:</strong> من أي متصفح (Chrome, Firefox).</li>
          <li><strong>انقر على &quot;Inscription en ligne&quot;:</strong> الرابط كايكون فالصفحة الرئيسية.</li>
          <li><strong>أنشئ حساب:</strong> بإيميل صحيح وكلمة سر قوية. تأكد من الإيميل حيت غادي تستقبل كل المراسلات.</li>
          <li><strong>اختر التخصص والمعهد:</strong> تقدر تختار 3 اختيارات (Vœux). رتبهم حسب الأفضلية.</li>
          <li><strong>حمل الوثائق:</strong> الشهادات، الصورة، البطاقة الوطنية (PDF أو JPG).</li>
          <li><strong>أكد التسجيل:</strong> استقبل رمز التأكيد فالإيميل وأدخلو.</li>
          <li><strong>اطبع وصل التسجيل:</strong> الأحتفظ بالنسخة.</li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900">الوثائق المطلوبة</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li>نسخة من الشهادة الدراسية (Relevé de notes + Attestation).</li>
          <li>نسخة من بطاقة التعريف الوطنية (CIN).</li>
          <li>صورتين فوتوغرافيتين (4×3 خلفية بيضاء).</li>
          <li>شهادة طبية (Certificat médical).</li>
          <li>شهادة الميلاد (Acte de naissance).</li>
          <li>إثبات العنوان (Justificatif de domicile).</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">اختبارات القبول (Concours)</h2>
        <p>اختبارات OFPPT كايكونو على مرحلتين:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>الاختبار الكتابي:</strong> أسئلة عامة + أسئلة في التخصص (رياضيات، لغة، منطق). المدة: ساعتين.</li>
          <li><strong>المقابلة الشفوية:</strong> أسئلة حول التحفيز، المعرفة بالتخصص، والمشروع المهني.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">نصائح للنجاح فالتسجيل</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>سجل باكر:</strong> من أول يوم لفتح التسجيل.</li>
          <li><strong>جهز الوثائق قبل:</strong> باش ما تعانيش من ضغط الوقت.</li>
          <li><strong>اختر تخصصات مطلوبة:</strong> باش تلقى الخدمة بسهولة بعد التخرج.</li>
          <li><strong>تدرب على الاختبار:</strong> حل نماذج سابقة (Annales).</li>
          <li><strong>ابدأ فكرة على المعهد:</strong> زور المعهد قبل التسجيل إذا تقدرو.</li>
        </ul>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">ختاما</h2>
        <p>OFPPT هو فرصة ذهبية للشباب المغربي. تكوين مجاني، شهادة معترف بها، وفرصة للشغل. ف 2026، التخصصات الرقمية والطاقة المتجددة هي الأكثر طلباً. سجل ف الوقت المناسب، جهز وثائقك، وتأكد من اختيار التخصص المناسب ليك.</p>

      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          {"اقرا أيضا: "}
          <Link href="/formations/guides/meilleures-formations-maroc-2026" className="text-emerald-600 underline hover:text-emerald-800">أفضل التكوينات المهنية 2026</Link>
          {" | "}
          <Link href="/formations/guides/formation-gratuite-en-ligne" className="text-emerald-600 underline hover:text-emerald-800">تكوين مجاني عن بعد</Link>
          {" | "}
          <Link href="/salary-calculator" className="text-emerald-600 underline hover:text-emerald-800">احسب راتبك الصافي</Link>
        </p>
      </div>
    </article>
  );
}
