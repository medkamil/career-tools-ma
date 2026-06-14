import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "تكوين الحام (Soudure) في المغرب: المراكز والأسعار والشهادة",
  description: "دليل تكوين الحام (Soudure) في المغرب 2026: أفضل مراكز التكوين، أسعار الترصيم، شهادة OFPPT، رواتب عمال اللحام، وشروط الولوج لمهنة الحام.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "تكوين الحام (Soudure) في المغرب: المراكز والأسعار والشهادة",
  "description": "دليل تكوين الحام في المغرب 2026. أفضل مراكز التكوين، أسعار الترصيم، وشهادة OFPPT.",
  "author": { "@type": "Person", "name": "Tawdif Pro" },
  "publisher": { "@type": "Organization", "name": "Tawdif Pro", "logo": { "@type": "ImageObject", "url": "https://tawdifpro.ma/logo.png" } },
  "datePublished": "2026-06-01",
  "dateModified": "2026-06-13",
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "شنو هي شروط ولوج تكوين الحام فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "شروط ولوج تكوين الحام فالمغرب: السن ما بين 16 و 35 سنة، المستوى الدراسي الثالثة إعدادي على الأقل، واجتياز اختبار الانتقاء. بالنسبة ل OFPPT كتطلب شهادة الثالثة إعدادي لبعض التخصصات، والبكالوريا لتخصصات التقني المتخصص. كاينين حتى مراكز خاصة كتقبل بلا شرط المستوى الدراسي." } },
    { "@type": "Question", name: "شحال من الوقت كيستغرق تكوين الحام ف OFPPT؟", acceptedAnswer: { "@type": "Answer", text: "مدة تكوين الحام ف OFPPT كتختلف حسب المستوى: تقني (Technicien) سنتين، تقني متخصص (Technicien Specialise) سنتين، والتكوين التاهيلي (Qualification) 6 شهور. فمراكز التكوين الخاصة كاينة دورات مكثفة من 3 شهور إلى سنة." } },
    { "@type": "Question", name: "شحال كيسال عامل الحام (Soudeur) فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "الراتب ديال عامل الحام فالمغرب كيتراوح بين 3,500 DH و 9,000 DH صافية فالشهر. فالمدن الكبيرة (الدار البيضاء، طنجة، الرباط) كيقدرو يتجاوزو 10,000 DH فبعض الشركات الكبرى. الحام فالبحر (Soudure sous-marine) كيوصل ل 15,000 DH ولا أكثر. الأقدمية والخبرة كتزيد الراتب بزاف." } },
    { "@type": "Question", name: "فين أقدر أتعلم الحام فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "أشهر المراكز فالمغرب: OFPPT (فجميع المدن)، معهد التكوين فالمهن الصناعية (Casablanca, Tanger)، مراكز التكوين المهني الخاصة فمدن (الدار البيضاء، مراكش، فاس). كاينين حتى مراكز متخصصة فالصباغة واللحام الصناعي. المراكز الخاصة كتكون فيه fees ما بين 5,000 و 15,000 DH على حسب المدة." } },
    { "@type": "Question", name: "واش شهادة الحام معترف بها فالمغرب وخارج المغرب؟", acceptedAnswer: { "@type": "Answer", text: "إيوه، شهادة الحام من OFPPT معترف بها رسميا فالمغرب وكاين حتى الاعتراف الدولي. كاين شهادات دولية بحال شهادة الحام حسب المعايير الأوروبية (EN 287-1) لي كتزيد فرص الشغل فالمغرب وحتى فالخارج (أوروبا، الخليج). بعض الشركات المغربية كتطلب هاد الشهادات الدولية فالمشاريع الكبرى." } },
    { "@type": "Question", name: "شنو هي أنواع الحام لي كيتعلمها المتدرب؟", acceptedAnswer: { "@type": "Answer", text: "فالتكوين كيتعلم المتدرب أنواع الحام الأساسية: الحام بالقوس الكهربائي (Soudure a l'arc)، الحام بالغاز (Soudure au gaz / Oxyacetylenique)، الحام في جو محمي (MIG/MAG)، الحام بالتيغ (TIG)، وقص المعادن بالبلازما. كاين تخصصات بحال الحام تحت الماء (Soudure sous-marine) و الحام فالبتروكيماويات." } },
    { "@type": "Question", name: "شنو هي فرص الشغل بعد تكوين الحام؟", acceptedAnswer: { "@type": "Answer", text: "فرص الشغل بزاف فالمغرب: شركات البناء والأشغال العمومية (BTP)، مصانع السيارات (Renault Tanger, Stellantis)، ورشات تصليح المعادن، شركات الأنابيب (الغاز والماء)، التبريد والتكييف، أحواض بناء السفن. الطلب كاين بزاف فطنجة والدار البيضاء على الحامين المهرة خصوصا فالقطاع الصناعي." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://tawdifpro.ma" },
    { "@type": "ListItem", "position": 2, "name": "قسم التكوين", "item": "https://tawdifpro.ma/formations" },
    { "@type": "ListItem", "position": 3, "name": "تكوين الحام (Soudure) في المغرب: المراكز والأسعار والشهادة", "item": "https://tawdifpro.ma/formations/guides/formation-soudure-maroc" },
  ],
};

const schemas = [articleSchema, faqSchema, breadcrumbSchema];


export default function FormationsGuidePage() {
  return (
  <ArticleLayout
      schemas={schemas}
      breadcrumbs={[
        { name: "????????", href: "/" },
        { name: "???????", href: "/formations" },
        { name: "تكوين الحام (Soudure) في المغرب: المراكز والأسعار والشهادة", href: "(sections)/formations/guides/formation-soudure-maroc" }
      ]}
      title="تكوين الحام (Soudure) في المغرب: المراكز والأسعار والشهادة"
      readingTime="10 دقائق قراءة"
    >
<p className="text-lg font-medium text-emerald-700">الحام (Soudure) راه من أقدم المهن وأكثرها طلبا فسوق الشغل المغربي. مصانع السيارات، شركات BTP، ورشات التبريد، وحتى أحواض بناء السفن كتقلب على soudeurs مهرة.</p>
        <p>بزاف ديال الناس كتعتقد أن الحام صنعة عادية. ولكن الحقيقة، الحام تطور وولا تكنولوجيا معقدة كتطلب تكوين متخصص وشهادات دولية. فهاد المقال، غنوضح ليكم كل حاجة على تكوين الحام فالمغرب.</p>
        <p>سواء كنت باغي تسجل ف OFPPT، ولا تبع واحد centre de formation prive، ولا حتى باغي تعرف شحال غادي يكون راتبك - هاد المقال غادي يفيدك.</p>
        <hr />
        <h2>شنو هو تخصص الحام الصناعي؟</h2>
        <p>الحام الصناعي (Soudure Industrielle) هو عملية ربط المعادن باستعمال الحرارة والضغط. فالمغرب، كاين تقريبا 5,000 شركة كتخدم فالقطاع المعدني، وهاد الشركات كلها كتحتاج soudeurs.</p>
        <p>الحام مقسم لعدة تخصصات: الحام بالقوس الكهربائي (Soudure a l'arc)، الحام بالتيغ (TIG) لي كيستخدم فالمعادن الرقيقة، الحام بالميغ/ماغ (MIG/MAG) لي كيستخدم فالمصانع الكبيرة، والحام بالغاز.</p>
        <h2>مراكز تكوين الحام فالمغرب</h2>
        <p className="font-medium text-gray-900">1. OFPPT (مكتب التكوين المهني)</p>
        <p>OFPPT كيقدم تكوين الحام فجميع جهات المغرب. أقوى المراكز كاينة ف: الدار البيضاء (معهد التكوين فالمهن الصناعية)، طنجة (مركز التكوين المهني طنجة)، فاس، مراكش، وأكادير.</p>
        <ul>
          <li><strong>الشهادة:</strong> تقني (Technicien) ولا تقني متخصص (Technicien Specialise).</li>
          <li><strong>المدة:</strong> سنتين للتخصصين، ولا 6 شهور للتكوين التاهيلي.</li>
          <li><strong>الثمن:</strong> مجاني. OFPPT كيكون gratuit للمغاربة.</li>
          <li><strong>التسجيل:</strong> فالصيف عبر site OFPPT. ضروري شهادة الثالثة إعدادي على الأقل.</li>
        </ul>
        <p className="mt-4 font-medium text-gray-900">2. مراكز التكوين الخاصة</p>
        <ul>
          <li><strong>الثمن:</strong> ما بين 5,000 DH و 18,000 DH على حسب المدة.</li>
          <li><strong>المدة:</strong> من 3 شهور لسنة.</li>
          <li><strong>المدن:</strong> مركز الحام المحترف (الدار البيضاء)، معهد صباغة ولحام (مراكش)، أكاديمية اللحام (طنجة).</li>
        </ul>
        <h2>الرواتب المتوقعة بعد التكوين</h2>
        <ul>
          <li><strong>حام مبتدئ:</strong> من 3,500 DH إلى 5,000 DH صافية.</li>
          <li><strong>حام خبرة سنتين:</strong> من 6,000 DH إلى 8,000 DH.</li>
          <li><strong>حام محترف (5 سنين+):</strong> من 9,000 DH إلى 14,000 DH.</li>
          <li><strong>حام فالمصانع الكبرى (Renault, Stellantis):</strong> من 7,000 DH إلى 12,000 DH + prime.</li>
          <li><strong>حام تحت الماء (Soudure sous-marine):</strong> من 12,000 DH إلى 20,000 DH.</li>
        </ul>
        <p>نصيحة: باش تعرف صافي راتبك من الحام بعد الضرائب والCNSS، استعمل <Link href="/salary-calculator" className="font-medium text-emerald-600 underline hover:text-emerald-700">حاسبة الراتب</Link> ديالنا.</p>
        <h2>الشهادات الدولية فالحام</h2>
        <ul>
          <li><strong>شهادة EN 287-1:</strong> المعيار الأوروبي للحام. مطلوبة فشركات السيارات والطيران.</li>
          <li><strong>شهادة ISO 9606:</strong> الشهادة الدولية للحام.</li>
          <li><strong>شهادة AWS (American Welding Society):</strong> معترف بها فالمغرب والخليج وأمريكا.</li>
          <li><strong>شهادة التكوين فTIG و MIG:</strong> من المعاهد المتخصصة.</li>
        </ul>
        <hr />
        <h2>الخلاصة</h2>
        <p>الحام (Soudure) مهنة راهي مطلوبة بزاف فالمغرب 2026. الطلب كاين، الرواتب جيدة، والتكوين ساهل ويمكن يكون مجاني. إذا كنتي باغي تتعلم صنعة بسرعة وتلقى خدمة، الحام اختيار ممتاز.</p>
        <p>المهم: اختر التخصص لي كتحبو (MIG/TIG/Arc)، سجل ف OFPPT ولا فمركز خاص، وابدأ فالتعلم. وبعد ما تخرج، تقدر تستعمل <Link href="/salary-calculator" className="font-medium text-emerald-600 underline hover:text-emerald-700">حاسبة الراتب</Link> باش تعرف صافي راتبك.</p>
        <p className="text-emerald-700 font-medium">شارك هاد المقال مع واحد صاحبك كيقلب على صنعة يخدم بها! 🔥</p>
    </ArticleLayout>
  );
}
