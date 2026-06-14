import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "تكوين كهرباء البناء في المغرب: المراكز، الأسعار، وشروط الولوج",
  description: "دليل تكوين كهرباء البناء (Electricite de Batiment) في المغرب 2026: أحسن مراكز التكوين، ثمن التسجيل، شهادة التقني، والراتب المتوقع.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "تكوين كهرباء البناء في المغرب: المراكز، الأسعار، وشروط الولوج",
  "description": "دليل تكوين كهرباء البناء في المغرب 2026. أحسن المراكز، الأسعار، وشروط الولوج.",
  "author": { "@type": "Person", "name": "Tawdif Pro" },
  "publisher": { "@type": "Organization", "name": "Tawdif Pro", "logo": { "@type": "ImageObject", "url": "https://tawdifpro.ma/logo.png" } },
  "datePublished": "2026-06-01",
  "dateModified": "2026-06-13",
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "شنو هي شروط ولوج تكوين كهرباء البناء فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "شروط الولوج: السن ما بين 16 و 30 سنة، المستوى الدراسي الثالثة إعدادي على الأقل بالنسبة OFPPT، والبكالوريا علمية ولا تقنية لتخصص التقني المتخصص. بعض المراكز الخاصة كتقبل حتى بليسانس (Bac). ضروري تكون عندك قدرة على القراءة وفهم المخططات الكهربائية." } },
    { "@type": "Question", name: "شحال من الوقت كيستغرق تكوين كهرباء البناء؟", acceptedAnswer: { "@type": "Answer", text: "ف OFPPT: تكوين تقني (Technicien en Electricite de Batiment) سنتين، تقني متخصص سنتين، وتكوين تاهيلي 6 شهور. فالمراكز الخاصة: دورات من 4 شهور لسنة ونصف. بعض المعاهد كتقدم تكوين مكثف ف 6 شهور مع تربص فشركات." } },
    { "@type": "Question", name: "شحال كيسال كهربائي البناء فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "الراتب ديال كهربائي البناء فالمغرب: مبتدئ من 3,000 DH ل 5,000 DH، بعد سنتين 5,500 DH ل 7,500 DH، كهربائي محترف (5 سنين+) من 8,000 DH ل 12,000 DH. الكهربائيين لي عندهم شهادات دولية ولا كيخدمو فالمشاريع الكبرى كيوصلو ل 15,000 DH." } },
    { "@type": "Question", name: "فين أحسن المراكز لتكوين كهرباء البناء فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "أحسن المراكز: OFPPT (فجميع المدن) - مجاني ومعترف بيه، معهد التكوين فالمهن الكهربائية (الدار البيضاء)، المدرسة الوطنية للكهرباء والميكانيك (ENEM), ومؤسسات خاصة بحال (IGD, CFP, IGA) فجميع المدن الكبرى. الثمن فالمراكز الخاصة كيتراوح بين 6,000 و 20,000 DH." } },
    { "@type": "Question", name: "شنو هي المواد لي كتدرس ف تكوين كهرباء البناء؟", acceptedAnswer: { "@type": "Answer", text: "المواد الرئيسية: أساسيات الكهرباء (Courant Continu/Alternatif)، المخططات الكهربائية، التمديدات الكهربائية (Canalisations)، أنظمة الحماية (Disjoncteurs, Fusibles)، الطاقة الشمسية (Panneaux Solaires)، المحركات الكهربائية، الأتمتة الصناعية (Automates). كاين حتى مواد عملية بنسبة 70% من التكوين." } },
    { "@type": "Question", name: "واش كاين طلب على كهربائيي البناء فالمغرب 2026؟", acceptedAnswer: { "@type": "Answer", text: "إيوه، الطلب كبير بزاف. المغرب كيبني بزاف د المشاريع (المدن الجديدة، الطرق السيارة، الموانئ، المطارات). كاين تقريبا 2.5 مليون وحدة سكنية كيتم بناؤها فالسنوات الجاية. الكهربائيين مطلوبين حتى فشركات الطاقة الشمسية، والصيانة الصناعية." } },
    { "@type": "Question", name: "شنو هي الشهادات الدولية لي تقدر تجيبها فالكهرباء؟", acceptedAnswer: { "@type": "Answer", text: "أهم الشهادات الدولية: شهادة الكهربائي المعتمد (Certification Electrique) من CNSEL، شهادة Habilitation Electrique (B1-B2-BR) - ضرورية باش تخدم فالمشاريع الكبيرة، شهادة الطاقة الشمسية (PV Installer)، وشهادة ISO 50001 فإدارة الطاقة. هاد الشهادات كتزيد فالقيمة ديالك وكتخليك مطلوب أكثر فالسوق." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://tawdifpro.ma" },
    { "@type": "ListItem", "position": 2, "name": "قسم التكوين", "item": "https://tawdifpro.ma/formations" },
    { "@type": "ListItem", "position": 3, "name": "تكوين كهرباء البناء في المغرب: المراكز، الأسعار، وشروط الولوج", "item": "https://tawdifpro.ma/formations/guides/formation-electricite-batiment-maroc" },
  ],
};

export default function FormationsGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">تكوين كهرباء البناء فالمغرب 2026: المراكز، الأسعار، وشروط الولوج</h1>
        <p className="mt-3 text-lg text-gray-600">OFPPT + مراكز خاصة + شهادات + راتب</p>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>•</span>
          <span>7 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">
        <p className="text-lg font-medium text-emerald-700">كهرباء البناء (Electricite de Batiment) واحد من أكثر التخصصات طلبا فالمغرب. كل عمارة، كل فيلا، كل مصنع كيحتاج كهربائي. مع النمو العمراني لي كيشهدو المغرب، الطلب على هاد المهنة راه كيزيد عام بعد عام.</p>
        <p>فهاد المقال غنعطيكم كل المعلومات لي كتحتاجوها باش تبداو تكوين فكهرباء البناء: شنو هي المراكز، شحال الثمن، شحال المدة، وشنو هي فرص الشغل.</p>
        <hr className="border-gray-200" />
        <h2 className="text-2xl font-bold text-gray-900">شنو هو تخصص كهرباء البناء؟</h2>
        <p>كهرباء البناء هو تخصص كيركز على التركيبات الكهربائية فالمباني السكنية والتجارية والصناعية. كايتعلم المتدرب كيفاش يصمم ويركب ويصون الشبكات الكهربائية، ويقرا المخططات، ويختار المعدات المناسبة.</p>
        <p>التخصص مقسم لعدة مستويات: تقني (Technicien) و تقني متخصص (Technicien Specialise). الفرق بيناتهم فعمق المعرفة وقدرة التدخل فالمشاريع الكبرى.</p>
        <h2 className="text-2xl font-bold text-gray-900">أفضل مراكز تكوين كهرباء البناء فالمغرب</h2>
        <p className="font-medium text-gray-900">OFPPT - Office de la Formation Professionnelle</p>
        <p>OFPPT كيبقى أحسن خيار للتكوين المهني فالمغرب. كاين فجميع المدن، التكوين مجاني، والشهادة معترف بها. أقوى المراكز: الدار البيضاء، الرباط، طنجة، فاس، مراكش.</p>
        <p className="font-medium text-gray-900">المراكز الخاصة</p>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>IGD (Institut de Gestion et de Developpement):</strong> فجميع المدن الكبرى. الثمن: 8,000 - 12,000 DH.</li>
          <li><strong>CFP (Centre de Formation Professionnelle):</strong> فاس، الدار البيضاء. الثمن: 6,000 - 10,000 DH.</li>
          <li><strong>IGA (Institut Superieur de Gestion et d Administration):</strong> الرباط، الدار البيضاء. الثمن: 10,000 - 15,000 DH.</li>
          <li><strong>معهد الطاقة الشمسية (ISES):</strong> مراكش. الثمن: 12,000 - 18,000 DH.</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900">المواد لي كتدرس فالتكوين</h2>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>الكهرباء العامة:</strong> التيار المستمر والتيار المتردد، قانون أوم، القدرة الكهربائية.</li>
          <li><strong>المخططات الكهربائية:</strong> قراءة وتصميم Schémas Electriques.</li>
          <li><strong>التمديدات الكهربائية:</strong> تركيب القنوات، الأسلاك، اللوحات الكهربائية.</li>
          <li><strong>أنظمة الحماية:</strong> مأخذ الأرض (Mise a la Terre)، القواطع التفاضلية، الوقاية من الصواعق.</li>
          <li><strong>الطاقة الشمسية:</strong> تصميم وتركيب الألواح الشمسية، الربط بالشبكة.</li>
          <li><strong>الأتمتة:</strong> المبررات المنطقية، التحكم الآلي (Gestion Technique du Batiment).</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900">الرواتب المتوقعة</h2>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>كهربائي مبتدئ:</strong> 3,000 - 5,000 DH صافية.</li>
          <li><strong>تقني كهرباء (خبرة 2-3 سنين):</strong> 5,500 - 8,000 DH.</li>
          <li><strong>تقني متخصص (خبرة 5 سنين+):</strong> 9,000 - 14,000 DH.</li>
          <li><strong>مهندس كهرباء:</strong> 12,000 - 20,000 DH.</li>
          <li><strong>كهربائي حر (Freelance):</strong> الدخل كيختلف ولكن كيقدرو يكسبو 8,000 - 18,000 DH حسب المشاريع.</li>
        </ul>
        <p>باش تعرف بالضبط شحال يبقى ليك صافي من الراتب، استعمل <Link href="/salary-calculator" className="font-medium text-emerald-600 underline hover:text-emerald-700">حاسبة الراتب</Link> ديالنا.</p>
        <h2 className="text-2xl font-bold text-gray-900">فرص الشغل</h2>
        <ul className="list-disc space-y-1 pr-6">
          <li>شركات البناء والأشغال العمومية (BTP).</li>
          <li>شركات الطاقة (ONEE, Energie Electrique).</li>
          <li>مكاتب الدراسات التقنية (Bureaux d Etudes).</li>
          <li>مقاولات الكهرباء والصيانة.</li>
          <li>شركات الطاقة الشمسية والطاقات المتجددة.</li>
          <li>المصانع (الصيانة الكهربائية).</li>
        </ul>
        <hr className="border-gray-200" />
        <h2 className="text-xl font-bold text-gray-900">الخلاصة</h2>
        <p>تكوين كهرباء البناء من أحسن التكوينات المهنية فالمغرب 2026. الطلب كبير، الرواتب جيدة، وفرص التطور المهني موجودة. إذا كنت باغي تتعلم صنعة فيها مستقبل، كهرباء البناء خيار ممتاز.</p>
        <p className="text-emerald-700 font-medium">شارك هاد المقال واعاون صاحبك يعرف أكثر على هاد التكوين!</p>
      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          📚 اقرأ أيضاً:{" "}
          <Link href="/formations/guides/formation-plomberie-chauffage-maroc" className="text-emerald-600 underline hover:text-emerald-800">تكوين السباكة والتدفئة فالمغرب</Link>
          {" | "}
          <Link href="/formations/guides/formation-soudure-maroc" className="text-emerald-600 underline hover:text-emerald-800">تكوين الحام فالمغرب</Link>
          {" | "}
          <Link href="/salary-calculator" className="text-emerald-600 underline hover:text-emerald-800">حاسبة الراتب</Link>
        </p>
      </div>
    </article>
  );
}