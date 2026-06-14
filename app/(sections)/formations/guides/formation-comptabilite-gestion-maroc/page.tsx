import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "تكوين المحاسبة والتدبير في المغرب: المدارس، الشهادات، والرواتب",
  description: "دليل تكوين المحاسبة والتدبير (Comptabilite et Gestion) في المغرب 2026: أفضل المعاهد، شهادة التقني المحاسب، أسعار التكوين، وفرص العمل.",
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article",
  "headline": "تكوين المحاسبة والتدبير في المغرب: المدارس، الشهادات، والرواتب",
  "description": "دليل تكوين المحاسبة والتدبير في المغرب 2026.",
  "author": { "@type": "Person", "name": "Tawdif Pro" },
  "publisher": { "@type": "Organization", "name": "Tawdif Pro", "logo": { "@type": "ImageObject", "url": "https://tawdifpro.ma/logo.png" } },
  "datePublished": "2026-06-01", "dateModified": "2026-06-13",
};

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "شنو هي شروط ولوج تكوين المحاسبة فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "شروط ولوج تكوين المحاسبة فالمغرب: البكالوريا (شعبة العلوم الاقتصادية والإدارة مفضلة). OFPPT كتطلب Bac للتقني المتخصص فالاختصاص المحاسب. المدارس العليا (ISCAE, ENCG) كتطلب Bac+2 ولا مباراة ولوج. بعض المعاهد الخاصة كتقبل حتى Bac بدون شرط شعبة محددة." } },
  { "@type": "Question", name: "شحال مدة تكوين المحاسبة فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "OFPPT (تقني متخصص فالمحاسبة) سنتين، ENCG (تخصص محاسبة ومالية) 3 سنين، ISCAE (Expertise Comptable) 5 سنين، معاهد خاصة سنتين Bac+2، مدارس المهندسين فالتدبير 5 سنين. تكوين قصير عبر الإنترنت من 3 شهور لسنة." } },
  { "@type": "Question", name: "شحال كيسال المحاسب فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "الرواتب: محاسب مبتدئ 4,000 - 6,000 DH، محاسب مالي 7,000 - 10,000 DH، محاسب عام 10,000 - 15,000 DH، مدير مالي 20,000 - 40,000 DH، خبير محاسب (Expert Comptable) 25,000 - 60,000 DH. القطاع كايدوزي (KPMG, Deloitte, EY) كيعطي أحسن الرواتب." } },
  { "@type": "Question", name: "أحسن المعاهد لتعلم المحاسبة فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "أحسن المعاهد: ISCAE (الدار البيضاء، الرباط) - أشهر معهد للمحاسبة فالمغرب، ENCG (فعدة مدن)، OFPPT (تقني محاسبة - مجاني)، ISIAM (أكادير)، FEG (Faculte d Economie et de Gestion). المعاهد الخاصة: ISGA, HEM, EMSEC - الثمن 25,000 - 50,000 DH سنويا." } },
  { "@type": "Question", name: "شنو هي الشهادات المحاسبية المعترف بها فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "أهم الشهادات فالمغرب: شهادة التقني المتخصص فالمحاسبة (OFPPT)، الإجازة فالتدبير والمحاسبة (Facultes)، شهادة ISCAE (Expertise Comptable)، الشهادات الدولية: CMA (Certified Management Accountant)، ACCA (Association of Chartered Certified Accountants)، CIMA (Chartered Institute of Management Accountants). الشهادات الدولية كتزيد فرص الشغل فالمغرب والخليج." } },
  { "@type": "Question", name: "فين كيقدرو يخدمو المحاسبين فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "فرص الشغل بزاف: مكاتب المحاسبة (Cabinets de Comptabilite)، شركات التدقيق (Audit - KPMG, Deloitte, PwC, EY)، البنوك (Attijariwafa, BCP, BMCE)، شركات التأمين، الإدارات الحكومية، مكاتب الخبرة المحاسبية. القطاع البنكي والمكاتب الكبرى كيقدمو أحسن التعويضات." } },
  { "@type": "Question", name: "واش كاين طلب على المحاسبين فالمغرب 2026؟", acceptedAnswer: { "@type": "Answer", text: "إيوه، الطلب مستقر وكبير. كل شركة، كل مقاولة، كل جمعية كتحتاج محاسب. التطور فالمجال المحاسبي (تطبيق المعايير الدولية IFRS، الرقمنة) كيخلق حاجة للمحاسبين المتمرسين. المغرب عندو حاجة لآلاف المحاسبين كل عام. ولكن المنافسة كبيرة فالمدن الكبرى." } },
]};

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://tawdifpro.ma" },
  { "@type": "ListItem", position: 2, name: "قسم التكوين", item: "https://tawdifpro.ma/formations" },
  { "@type": "ListItem", position: 3, name: "تكوين المحاسبة والتدبير في المغرب", item: "https://tawdifpro.ma/formations/guides/formation-comptabilite-gestion-maroc" },
]};

const schemas = [articleSchema, faqSchema, breadcrumbSchema];


export default function FormationsGuidePage() {
  return (
  <ArticleLayout
      schemas={schemas}
      breadcrumbs={[
        { name: "الرئيسية", href: "/formations" },
        { name: "تكوين المحاسبة والتدبير في المغرب", href: "/formations/guides/formation-comptabilite-gestion-maroc" }
      ]}
      title="تكوين المحاسبة والتدبير في المغرب: المدارس، الشهادات، والرواتب"
      readingTime="10 دقائق قراءة"
    >
<p className="text-lg font-medium text-emerald-700">المحاسبة والتدبير (Comptabilite et Gestion) راهو المجال لي كيدير العمود الفقري لأي مؤسسة. كل شركة، كل مقاولة، كل جمعية كتحتاج محاسب. هاد المجال معروف بالاستقرار والطلب المستمر.</p>
        <p>سوق الشغل المغربي كيطلب بزاف ديال المحاسبين والمتدبرين، خصوصا مع التطورات التنظيمية (CNSS, Impots) والتوجه نحو المعايير الدولية. فهاد المقال غنوضح ليكم كل حاجة على تكوين المحاسبة فالمغرب.</p>
        <hr />
        <h2>أنواع التكوين المحاسبي فالمغرب</h2>
        <p>كاين مستويات مختلفة: تكوين تقني (Technicien Specialise en Comptabilite) من OFPPP، إجازة مهنية فالمحاسبة من الكليات، ISCAE (Expertise Comptable)، ENCG (Gestion Financiere).</p>
        <h2>أفضل المعاهد لتعلم المحاسبة</h2>
        <ul>
          <li><strong>ISCAE:</strong> الدار البيضاء والرباط. أشهر معهد للمحاسبة. التكوين 5 سنين. عمومي (تقريبا 15,000 DH سنويا).</li>
          <li><strong>ENCG:</strong> فعدة مدن (الدار البيضاء، فاس، أكادير، طنجة...). 3 سنين. عمومي (تقريبا 10,000 - 15,000 DH).</li>
          <li><strong>OFPPT:</strong> جميع المدن. تقني متخصص فالمحاسبة. سنتين. مجاني.</li>
          <li><strong>FEG (Facultes d Economie):</strong> جميع الجامعات. الإجازة 3 سنين. مجاني.</li>
        </ul>
        <h2>الرواتب المتوقعة فالمحاسبة</h2>
        <ul>
          <li><strong>محاسب مبتدئ:</strong> 4,000 - 6,000 DH</li>
          <li><strong>محاسب مالي:</strong> 7,000 - 10,000 DH</li>
          <li><strong>محاسب عام (Senior):</strong> 10,000 - 15,000 DH</li>
          <li><strong>مدير مالي:</strong> 20,000 - 40,000 DH</li>
          <li><strong>خبير محاسب:</strong> 25,000 - 60,000 DH</li>
        </ul>
        <p>استعمل <Link href="/salary-calculator" className="font-medium text-emerald-600 underline hover:text-emerald-700">حاسبة الراتب</Link> باش تعرف صافي راتبك.</p>
        <h2>الشهادات الدولية فالمحاسبة</h2>
        <p>هاد الشهادات كتزيد من فرصك فسوق الشغل وتقدر تزيد فالقيمة ديالك:</p>
        <ul>
          <li><strong>ACCA (Association of Chartered Certified Accountants):</strong> شهادة بريطانية معترف بها عالميا.</li>
          <li><strong>CMA (Certified Management Accountant):</strong> شهادة أمريكية فالمحاسبة الإدارية.</li>
          <li><strong>CIMA (Chartered Institute of Management Accountants):</strong> شهادة دولية فالمحاسبة الإدارية.</li>
          <li><strong>Expertise Comptable (ISCAE):</strong> الشهادة العليا فالمحاسبة فالمغرب.</li>
        </ul>
        <hr />
        <h2>الخلاصة</h2>
        <p>تكوين المحاسبة والتدبير من الخيارات الممتازة للشباب المغربي. طلب مستقر، رواتب جيدة، وتطور مهني واضح. اختر المسار لي يناسبك (OFPPT للسرعة، ISCAE للعمق، ENCG للتوازن) وابدأ فالتعلم.</p>
        <p className="text-emerald-700 font-medium">شارك هاد المقال مع صاحبك لي كيبغي يخدم فالمحاسبة!</p>
    </ArticleLayout>
  );
}
