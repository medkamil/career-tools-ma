import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "تكوين السباكة والتدفئة في المغرب: المراكز، الأسعار، والمستقبل المهني",
  description: "دليل تكوين السباكة والتدفئة (Plomberie et Chauffage) في المغرب 2026: أفضل معاهد التكوين، أسعار الترصيم، شهادة OFPPT، ورواتب السباكين.",
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article",
  "headline": "تكوين السباكة والتدفئة في المغرب: المراكز، الأسعار، والمستقبل المهني",
  "description": "دليل تكوين السباكة والتدفئة في المغرب 2026.",
  "author": { "@type": "Person", "name": "Tawdif Pro" },
  "publisher": { "@type": "Organization", "name": "Tawdif Pro", "logo": { "@type": "ImageObject", "url": "https://tawdifpro.ma/logo.png" } },
  "datePublished": "2026-06-01", "dateModified": "2026-06-13",
};

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "شنو هي شروط ولوج تكوين السباكة والتدفئة فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "شروط الولوج: السن ما بين 16 و 35 سنة، المستوى الدراسي الثالثة إعدادي على الأقل ف OFPPT. مكاينش شرط البكالوريا. المراكز الخاصة كتقبل حتى بلا مستوى. المهم تكون عندك قدرة على العمل البدني والمهارات اليدوية. بعض المراكز كتطلب شهادة طبية ديال اللياقة البدنية." } },
  { "@type": "Question", name: "شحال من الوقت كيستغرق تكوين السباكة؟", acceptedAnswer: { "@type": "Answer", text: "OFPPT: تقني فالتدفئة والسباكة سنتين، تكوين تاهيلي 6 شهور. المراكز الخاصة: من 4 شهور لسنة. التكوين كيشمل جزء نظري (30%) وعملي (70%). ف OFPPT كاين تربص فشركات (Stage en Entreprise) فالآخر." } },
  { "@type": "Question", name: "شحال كيسال السباك فالمغرب 2026؟", acceptedAnswer: { "@type": "Answer", text: "الرواتب: سباك مبتدئ 3,000 - 5,000 DH، سباك محترف (خبرة سنتين) 5,500 - 8,000 DH، سباك متخصص (التدفئة المركزية) 7,000 - 12,000 DH، سباك حر (Freelance) 8,000 - 18,000+ DH. السباكين لي كيخدمو فالمشاريع الكبرى (BTP) كيقدرو يكسبو أحسن." } },
  { "@type": "Question", name: "أفضل مراكز تكوين السباكة فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "أفضل المراكز: OFPPT (فجميع المدن - مجاني)، معهد التكوين فالمهن (مختلف المدن)، مركز التكوين المهني فتقنيات البناء (الدار البيضاء)، مدرسة الصنعة التقليدية (فاس). المراكز الخاصة كتكون فجميع المدن الكبرى و الثمن 5,000 - 15,000 DH." } },
  { "@type": "Question", name: "شنو كاتقرا فتكوين السباكة والتدفئة؟", acceptedAnswer: { "@type": "Answer", text: "المواد: أساسيات السباكة (أنواع المواسير، القطع، التركيبات)، التركيبات الصحية (مراحيض، حنفيات، دش)، أنظمة التدفئة (مركزية، أرضية، مشعات)، قراءة المخططات (Plans de Plomberie)، السباكة الصناعية، صيانة أنظمة المياه، الطاقة الشمسية الحرارية (Chauffe-eau Solaire)، معايير السلامة." } },
  { "@type": "Question", name: "فرص الشغل فسباكة فالمغرب 2026؟", acceptedAnswer: { "@type": "Answer", text: "فرص الشغل بزاف: شركات البناء (BTP)، مكاتب الدراسات التقنية، صيانة المباني (الفنادق، المستشفيات)، شركات التدفئة والتكييف، العمل الحر (سباك حر)، شركات الطاقة الشمسية. المغرب كيبني بزاف د المشاريع الجديدة (المدن الجديدة، الطرق، الموانئ) كلها كتحتاج سباكين و متخصصين فالتدفئة." } },
  { "@type": "Question", name: "شنو هي الشهادات الدولية ف السباكة والتدفئة؟", acceptedAnswer: { "@type": "Answer", text: "الشهادات الدولية: شهادة التدفئة المركزية (Chauffage Central)، شهادة الطاقة المتجددة (Energies Renouvelables - Solaire Thermique)، شهادة معايير السلامة (Normes de Securite)، شهادة السباكة الصناعية. هاد الشهادات كتزيد فرص الشغل وكتخليك مطلوب أكثر فالمشاريع الكبرى." } },
]};

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://tawdifpro.ma" },
  { "@type": "ListItem", position: 2, name: "قسم التكوين", item: "https://tawdifpro.ma/formations" },
  { "@type": "ListItem", position: 3, name: "تكوين السباكة والتدفئة في المغرب", item: "https://tawdifpro.ma/formations/guides/formation-plomberie-chauffage-maroc" },
]};

const schemas = [articleSchema, faqSchema, breadcrumbSchema];


export default function FormationsGuidePage() {
  return (
  <ArticleLayout
      schemas={schemas}
      breadcrumbs={[
        { name: "الرئيسية", href: "/formations" },
        { name: "تكوين السباكة والتدفئة في المغرب", href: "/formations/guides/formation-plomberie-chauffage-maroc" }
      ]}
      title="تكوين السباكة والتدفئة في المغرب: المراكز، الأسعار، والمستقبل المهني"
      readingTime="10 دقائق قراءة"
    >
<p className="text-lg font-medium text-emerald-700">السباكة والتدفئة (Plomberie et Chauffage) من المهن الأساسية لي كتطلب فجميع مشاريع البناء. كل عمارة، كل فيلا، كل فندق كيحتاج سباك. وهاد الشي كيخلي هاد المهنة مضمونة ومطلوبة.</p>
        <p>فالمغرب، مع الطفرة العمرانية لي كتشهدها البلاد (المدن الجديدة، الطرق، الموانئ)، الطلب على السباكين والمتخصصين فالتدفئة راه كيزيد بزاف. فهاد المقال غنعطيكم كل المعلومات لي كتحتاجوها.</p>
        <hr />
        <h2>شنو هو تخصص السباكة والتدفئة؟</h2>
        <p>هاد التخصص كيركز على تركيب وصيانة أنظمة المياه (Adduction d Eau)، الصرف الصحي (Assainissement)، أنظمة التدفئة المركزية (Chauffage Central)، والتجهيزات الصحية (Appareils Sanitaires).</p>
        <p>السباكة العصرية ولات كتدخل فيها التكنولوجيا (Pompes a Chaleur, Plomberie Connectee). السباك لي كيتعلم التقنيات الحديثة غادي يكون مطلوب بزاف.</p>
        <h2>مراکز التكوين فالمغرب</h2>
        <p className="font-medium text-gray-900">OFPPT (مكتب التكوين المهني)</p>
        <p>OFPPT كيقدم تكوين السباكة والتدفئة فجميع الجهات. التخصص: تقني فالتجهيز والتدفئة (Technicien en Equipement et Chauffage). المدة: سنتين. مجاني.</p>
        <p className="font-medium text-gray-900">المراكز الخاصة</p>
        <ul>
          <li><strong>معهد البناء والتجهيز:</strong> الدار البيضاء. الثمن: 8,000 - 15,000 DH.</li>
          <li><strong>مركز التكوين المهني فتقنيات البناء:</strong> الرباط. الثمن: 6,000 - 12,000 DH.</li>
          <li><strong>مدرسة الصنعة التقليدية:</strong> فاس. الثمن: 5,000 - 10,000 DH.</li>
          <li><strong>أكاديمية التدفئة والتكييف:</strong> طنجة. الثمن: 10,000 - 18,000 DH.</li>
        </ul>
        <h2>المواد لي كتدرس فالتكوين</h2>
        <ul>
          <li><strong>السباكة العامة:</strong> أنواع المواسير (PVC, Cuivre, PER)، القطع، التركيبات.</li>
          <li><strong>التجهيزات الصحية:</strong> تركيب المراحيض، الحنفيات، الدش، المغاسل.</li>
          <li><strong>أنظمة التدفئة:</strong> التدفئة المركزية، التدفئة الأرضية، المشعات.</li>
          <li><strong>الطاقة الشمسية:</strong> السخانات الشمسية (Chauffe-eau Solaire).</li>
          <li><strong>المخططات:</strong> قراءة وتصميم مخططات السباكة.</li>
          <li><strong>السلامة:</strong> معايير السلامة المهنية.</li>
        </ul>
        <h2>الرواتب المتوقعة</h2>
        <ul>
          <li><strong>سباك مبتدئ:</strong> 3,000 - 5,000 DH</li>
          <li><strong>سباك محترف (2-3 سنين):</strong> 5,500 - 8,000 DH</li>
          <li><strong>متخصص فالتدفئة:</strong> 7,000 - 12,000 DH</li>
          <li><strong>سباك حر (Freelance):</strong> 8,000 - 18,000+ DH</li>
        </ul>
        <p>استعمل <Link href="/salary-calculator" className="font-medium text-emerald-600 underline hover:text-emerald-700">حاسبة الراتب</Link> باش تعرف صافي راتبك.</p>
        <hr />
        <h2>الخلاصة</h2>
        <p>تكوين السباكة والتدفئة واحد من أحسن التكوينات المهنية فالمغرب 2026. الطلب كبير، الرواتب جيدة، وممكن تخدم لحسابك الخاص. إذا كنت باغي تتعلم صنعة فيها مستقبل، السباكة خيار ممتاز.</p>
        <p className="text-emerald-700 font-medium">شارك هاد المقال مع صاحبك لي كيقلب على صنعة!</p>
    </ArticleLayout>
  );
}
