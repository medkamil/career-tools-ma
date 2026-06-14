import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "تكوين ميكانيك السيارات في المغرب: المراكز، الأسعار، والشهادة",
  description: "دليل تكوين ميكانيك السيارات (Mecanique Automobile) في المغرب 2026: أفضل مراكز التكوين، أسعار التسجيل، شهادة OFPPT، ورواتب الميكانيكيين.",
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article",
  "headline": "تكوين ميكانيك السيارات في المغرب: المراكز، الأسعار، والشهادة",
  "description": "دليل تكوين ميكانيك السيارات في المغرب 2026.",
  "author": { "@type": "Person", "name": "Tawdif Pro" },
  "publisher": { "@type": "Organization", "name": "Tawdif Pro", "logo": { "@type": "ImageObject", "url": "https://tawdifpro.ma/logo.png" } },
  "datePublished": "2026-06-01", "dateModified": "2026-06-13",
};

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "شنو هي شروط ولوج تكوين ميكانيك السيارات فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "شروط الوج: السن ما بين 16 و 30 سنة. المستوى الدراسي الثالثة إعدادي (OFPPT - تقني) أو البكالوريا علمية (OFPPT - تقني متخصص). المراكز الخاصة كتقبل بلا شرط البكالوريا. المهم أن تكون عندك قدرة على العمل البدني والفهم التقني وحل المشكلات." } },
  { "@type": "Question", name: "شحال من الوقت كيستغرق تكوين ميكانيك السيارات؟", acceptedAnswer: { "@type": "Answer", text: "OFPPT: تقني فميكانيك السيارات سنتين، تقني متخصص سنتين. المراكز الخاصة: 6 شهور لسنة (دورات مكثفة). تربص فمراكز الصيانة كاين فالبرنامج. التكوين كيشمل جزء نظري (30%) وعملي بنسبة 70%." } },
  { "@type": "Question", name: "شحال كيسال الميكانيكي فالمغرب 2026؟", acceptedAnswer: { "@type": "Answer", text: "الرواتب: ميكانيكي مبتدئ 3,000 - 5,000 DH، ميكانيكي محترف (2-3 سنين) 5,000 - 8,000 DH، متخصص فالميكانيك الإلكترونية 7,000 - 12,000 DH، ميكانيكي فوكالات السيارات (Renault, Toyota) 6,000 - 10,000 DH، ميكانيكي حر (Freelance) 8,000 - 20,000+ DH." } },
  { "@type": "Question", name: "أفضل مراكز تكوين الميكانيك فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "أفضل المراكز: OFPPT - Institut Specialise de Technologie Appliquee (فجميع المدن)، معهد تكوين مهن السيارات (الدار البيضاء، طنجة)، أكاديمية رونو للتكوين (Renault Academy - طنجة)، Stellantis Academy (الدار البيضاء). المراكز الخاصة: مدرسة الميكانيك المتقدم (الدار البيضاء)، مركز التكوين المهني فالميكانيك (فاس)." } },
  { "@type": "Question", name: "شنو كاتقرا فتكوين ميكانيك السيارات؟", acceptedAnswer: { "@type": "Answer", text: "المواد: أساسيات المحرك (Moteur a Essence/Diesel)، أنظمة حقن الوقود (Injection Electronique)، أنظمة الفرملة (Freinage ABS)، أنظمة التوجيه والتعليق (Direction et Suspension)، أنظمة التبريد والتشحيم، الكهرباء والإلكترونية فأنظمة السيارات، التشخيص (Diagnostic Automobile)، صيانة المحركات الحديثة." } },
  { "@type": "Question", name: "فرص الشغل فميكانيك السيارات فالمغرب 2026؟", acceptedAnswer: { "@type": "Answer", text: "فرص الشغل بزاف: وكالات السيارات (Renault, Toyota, Dacia, Peugeot, Hyundai)، ورشات الصيانة الخاصة، مراكز الصيانة المعتمدة (Feu Vert, Norauto, Speedy)، شركات النقل، إدارة أسطول السيارات، مصانع تجميع السيارات (Renault Tanger, Stellantis)، العمل الحر. المغرب ولى بلد صناعي فالسيارات والطلب كبير." } },
  { "@type": "Question", name: "واش كاين شهادات دولية فميكانيك السيارات؟", acceptedAnswer: { "@type": "Answer", text: "الشهادات الدولية: شهادةASE (Automotive Service Excellence) - الشهادة الأمريكية، شهادة تشخيص الأعطال (Diagnostic), شهادة السيارات الهجينة والكهربائية (VE/HEV)، شهادة أنظمة حقن الوقود (Bosch). المغرب كاينة فيه سيارات كهربائية بزاف وهاد الشهادات كتزيد فالطلب عليك." } },
]};

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://tawdifpro.ma" },
  { "@type": "ListItem", position: 2, name: "قسم التكوين", item: "https://tawdifpro.ma/formations" },
  { "@type": "ListItem", position: 3, name: "تكوين ميكانيك السيارات في المغرب", item: "https://tawdifpro.ma/formations/guides/formation-mecanique-auto-maroc" },
]};

const schemas = [articleSchema, faqSchema, breadcrumbSchema];


export default function FormationsGuidePage() {
  return (
  <ArticleLayout
      schemas={schemas}
      breadcrumbs={[
        { name: "الرئيسية", href: "/formations" },
        { name: "تكوين ميكانيك السيارات في المغرب", href: "/formations/guides/formation-mecanique-auto-maroc" }
      ]}
      title="تكوين ميكانيك السيارات في المغرب: المراكز، الأسعار، والشهادة"
      readingTime="10 دقائق قراءة"
    >
<p className="text-lg font-medium text-emerald-700">ميكانيك السيارات (Mecanique Automobile) راه من المهن لي كتزدهر فالمغرب بفضل صناعة السيارات لي ولات من أكبر القطاعات الصناعية فالبلاد. رونو طنجة، ستيلانتيس، ودوزيم ديال المصانع كيخلقو حاجة كبيرة للميكانيكيين المحترفين.</p>
        <p>المغرب اليوم ولات عندو صناعة سيارات قوية. غير فطنجة، مصنع رينو كينتج أكتر من 400,000 سيارة فالعام. هاد الصناعة كتخلق آلاف ديال فرص الشغل للميكانيكيين والتقنيين. فهاد المقال غنوضحو ليكم كل المعلومات.</p>
        <hr />
        <h2>أنواع تكوين ميكانيك السيارات</h2>
        <p>كاين تخصصات مختلفة: ميكانيك المحركات (Moteurs)، ميكانيك الشاصي (Chassis)، الكهرباء والإلكترونيك فالمحركات، تشخيص الأعطال (Diagnostic)، ميكانيك السيارات الهجينة والكهربائية.</p>
        <h2>أفضل المراكز فالمغرب</h2>
        <ul>
          <li><strong>OFPPT - ISTA:</strong> جميع المدن. تقني متخصص فميكانيك السيارات. سنتين. مجاني.</li>
          <li><strong>Renault Academy:</strong> طنجة. تكوين متخصص فسيارات رونو.</li>
          <li><strong>Stellantis Academy:</strong> الدار البيضاء. تكوين فسيارات Stellantis.</li>
          <li><strong>معهد تكوين مهن السيارات:</strong> الدار البيضاء، طنجة. الثمن: 8,000 - 15,000 DH.</li>
          <li><strong>مراكز خاصة:</strong> الثمن ما بين 6,000 و 18,000 DH حسب التخصص والمدة.</li>
        </ul>
        <h2>المواد لي كتدرس</h2>
        <ul>
          <li><strong>المحركات:</strong> محركات البنزين والديزل، مبدأ العمل، الصيانة.</li>
          <li><strong>أنظمة الوقود:</strong> Injection Electronique, Common Rail, Pompe.</li>
          <li><strong>أنظمة الفرملة:</strong> ABS, ESP, Freins a Disque.</li>
          <li><strong>التشخيص:</strong> استعمال أجهزة التشخيص (Valise de Diagnostic).</li>
          <li><strong>الكهرباء:</strong> أنظمة الإضاءة، الشحن، البطاريات.</li>
          <li><strong>السيارات الكهربائية:</strong> المحركات الكهربائية، البطاريات، الشاحن.</li>
        </ul>
        <h2>الرواتب المتوقعة</h2>
        <ul>
          <li><strong>ميكانيكي مبتدئ:</strong> 3,000 - 5,000 DH</li>
          <li><strong>ميكانيكي محترف:</strong> 5,000 - 8,000 DH</li>
          <li><strong>متخصص فالإلكترونيك:</strong> 7,000 - 12,000 DH</li>
          <li><strong>وكالات (Renault, Toyota):</strong> 6,000 - 10,000 DH</li>
          <li><strong>حر (Freelance):</strong> 8,000 - 20,000+ DH</li>
        </ul>
        <p>استعمل <Link href="/salary-calculator" className="font-medium text-emerald-600 underline hover:text-emerald-700">حاسبة الراتب</Link> باش تعرف صافي راتبك.</p>
        <hr />
        <h2>الخلاصة</h2>
        <p>تكوين ميكانيك السيارات خيار ممتاز فالمغرب 2026. مع صناعة السيارات لي كتزدهر، الطلب على الميكانيكيين التقنيين غادي يبقى مرتفع. إذا كنت باغي تتعلم صنعة فيها مستقبل وعندك حب للسيارات، هاد التكوين مزيان بزاف.</p>
        <p className="text-emerald-700 font-medium">شارك هاد المقال مع صاحبك لي كيقلب على صنعة محترمة!</p>
    </ArticleLayout>
  );
}
