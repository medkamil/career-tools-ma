import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "تكوين مساعد التمريض في المغرب: المراكز، الأسعار، وشروط الولوج | Tawdif Pro",
  description: "دليل تكوين مساعد التمريض (Auxiliaire de Vie) في المغرب 2026: أفضل معاهد التمريض، شهادة المساعد الطبي، الرواتب، وفرص العمل في المغرب.",
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article",
  "headline": "تكوين مساعد التمريض في المغرب: المراكز، الأسعار، وشروط الولوج",
  "description": "دليل تكوين مساعد التمريض في المغرب 2026.",
  "author": { "@type": "Person", "name": "Tawdif Pro" },
  "publisher": { "@type": "Organization", "name": "Tawdif Pro", "logo": { "@type": "ImageObject", "url": "https://tawdifpro.ma/logo.png" } },
  "datePublished": "2026-06-01", "dateModified": "2026-06-13",
};

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "شنو هي شروط ولوج تكوين مساعد التمريض فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "شروط الوج: السن ما بين 18 و 35 سنة (للمعاهد الصحية)، البكالوريا (شعبة علوم الحياة والأرض أو العلوم الفيزيائية مفضلة)، اجتياز مباراة الولوج (Concours) - اختبار كتابي + مقابلة شفوية. بعض المعاهد كتطلب ملف طبي يثبت الخلو من الأمراض المعدية. المعاهد الخاصة كتكون أقل صرامة فالانتقاء." } },
  { "@type": "Question", name: "شحال مدة تكوين مساعد التمريض فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "مدة التكوين: المعاهد الصحية (ISPITS) 3 سنين (بعد البكالوريا)، الشهادة هي Diplome d Etat d Infirmier (DEI). المعاهد الخاصة: 1 ل 2 سنين. دورات قصيرة (Auxiliaire de Vie): 6 شهور لسنة. التكوين كيشمل تربص فالمستشفيات (Stage Hospitalier)." } },
  { "@type": "Question", name: "شحال كيسال الممرض/مساعد التمريض فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "الرواتب: ممرض (ISPITS) 5,000 - 7,000 DH فالبادية، 7,000 - 10,000 DH فالمدن (القطاع العام)، الممرض فالقطاع الخاص 4,000 - 7,000 DH، مساعد تمريض (Auxiliaire de Vie) 3,500 - 5,500 DH، ممرض متخصص 8,000 - 14,000 DH. القدمية والتعويضات (Prime de Risque, Astreinte) كتزيد فالراتب." } },
  { "@type": "Question", name: "أشهر المعاهد لتعلم التمريض فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "أشهر المعاهد العمومية: ISPITS (Institut Superieur des Professions Infirmieres et Techniques de Sante) فجميع المدن - الثمن تقريبا 10,000 - 15,000 DH سنويا (عمومي). المعاهد الخاصة: المعهد العالي للعلوم الصحية (الدار البيضاء)، معهد سيبو (الرباط)، معهد الصحة (فاس). الثمن فالمعاهد الخاصة: 20,000 - 45,000 DH سنويا." } },
  { "@type": "Question", name: "شنو كاتقرا فتكوين التمريض؟", acceptedAnswer: { "@type": "Answer", text: "المواد الأساسية: التشريح البشري (Anatomie)، علم وظائف الأعضاء (Physiologie)، التمريض الأساسي (Soins Infirmiers de Base)، علم الأدوية (Pharmacologie)، الصحة العامة (Sante Publique)، علم النفس (Psychologie)، الإسعافات الأولية (Premiers Soins)، التغذية (Nutrition)، الأخلاقيات المهنية (Ethique Professionnelle)، التمريض فالعناية المركزة." } },
  { "@type": "Question", name: "فرص الشغل فالمجال الصحي فالمغرب 2026؟", acceptedAnswer: { "@type": "Answer", text: "فرص الشغل: المستشفيات العمومية (CHU, Hopitaux Regional)، المستوصفات (Centres de Sante)، القطاع الخاص (عيادات، مستشفيات خاصة)، دور المسنين (Maisons de Retraite)، التمريض المنزلي (Soins a Domicile)، الجمعيات الإنسانية، العمل فالبلديات (صحة المجتمع). وزارة الصحة كتفتح مباريات كل عام لتوظيف الممرضين." } },
  { "@type": "Question", name: "شنو هي التخصصات التمريضية المتاحة؟", acceptedAnswer: { "@type": "Answer", text: "التخصصات: تمريض عام (Infirmier Polyvalent)، تمريض الأطفال (Pediatrie)، تمريض الصحة النفسية (Psychiatrie)، تمريض العناية المركزة (Reanimation)، تمريض الطوارئ (Urgences)، تمريض الجراحة (Bloc Operatoire)، تمريض الأم والطفل (Maternite). التخصص كيكون بعد الحصول على الشهادة العامة." } },
]};

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://tawdifpro.ma" },
  { "@type": "ListItem", position: 2, name: "قسم التكوين", item: "https://tawdifpro.ma/formations" },
  { "@type": "ListItem", position: 3, name: "تكوين مساعد التمريض في المغرب", item: "https://tawdifpro.ma/formations/guides/formation-auxiliaire-vie-maroc" },
]};

export default function FormationsGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">تكوين مساعد التمريض في المغرب 2026: المراكز، الأسعار، وشروط الولوج</h1>
        <p className="mt-3 text-lg text-gray-600">ISPITS + معاهد خاصة + شهادة الدولة + راتب</p>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>•</span><span>8 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">
        <p className="text-lg font-medium text-emerald-700">التمريض والمجال الصحي (Professions Infirmieres et Sante) راهو من أحسن المجالات لي كتضمن ليك شغل مستقر فالمغرب. المستشفيات والعيادات والمراكز الصحية كلها كتحتاج ممرضين ومساعدي تمريض.</p>
        <p>هاد المجال كيعرف طلب كبير بزاف، خصوصا مع البرامج الحكومية (تغطية صحية شاملة، إصلاح القطاع الصحي). كل عام، وزارة الصحة كتفتح مباريات لتوظيف الآلاف ديال الممرضين. فهاد المقال غنوضح ليكم كل المعلومات على تكوين التمريض فالمغرب.</p>
        <hr className="border-gray-200" />
        <h2 className="text-2xl font-bold text-gray-900">الفرق بين الممرض ومساعد التمريض</h2>
        <p>فالمغرب، كاين فرق بين: الممرض (Infirmier - 3 سنين تكوين ف ISPITS ولا معهد خاص)، ومساعد التمريض (Auxiliaire de Vie - 6 شهور لسنة تكوين فمراكز متخصصة). الممرض عندو صلاحيات أكبر فالعناية الطبية، بينما مساعد التمريض كيساعد فالرعاية الأساسية.</p>
        <h2 className="text-2xl font-bold text-gray-900">أفضل المعاهد لتعلم التمريض فالمغرب</h2>
        <p className="font-medium text-gray-900">ISPITS (المعاهد العليا لمهن التمريض وتقنيات الصحة)</p>
        <p>هي المعاهد العمومية لي كتكون فجميع المدن. أحسنها: ISPITS الدار البيضاء، ISPITS الرباط، ISPITS فاس، ISPITS مراكش. الثمن: 10,000 - 15,000 DH سنويا (قطاع عمومي). مدة التكوين: 3 سنين.</p>
        <p className="font-medium text-gray-900">المعاهد الخاصة</p>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>المعهد العالي للعلوم الصحية:</strong> الدار البيضاء. الثمن: 25,000 - 45,000 DH سنويا.</li>
          <li><strong>معهد سيبو (SIBO):</strong> الرباط. الثمن: 20,000 - 35,000 DH سنويا.</li>
          <li><strong>معهد الصحة (Institut de Sante):</strong> فاس. الثمن: 18,000 - 30,000 DH سنويا.</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900">المواد لي كتدرس فالتكوين</h2>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>التشريح وعلم وظائف الأعضاء:</strong> دراسة جسم الإنسان.</li>
          <li><strong>التمريض الأساسي:</strong> قياس الضغط، الحقن، التضميد.</li>
          <li><strong>علم الأدوية:</strong> أنواع الأدوية وتأثيراتها.</li>
          <li><strong>الإسعافات الأولية:</strong> التدخل فالحالات الطارئة.</li>
          <li><strong>الصحة العامة:</strong> التوعية الصحية، الوقاية.</li>
          <li><strong>الأخلاقيات المهنية:</strong> حقوق المريض، السر المهني.</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900">الرواتب المتوقعة</h2>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>ممرض (قطاع عمومي):</strong> 5,000 - 10,000 DH</li>
          <li><strong>ممرض (قطاع خاص):</strong> 4,000 - 7,000 DH</li>
          <li><strong>مساعد تمريض:</strong> 3,500 - 5,500 DH</li>
          <li><strong>ممرض متخصص:</strong> 8,000 - 14,000 DH</li>
        </ul>
        <p>استعمل <Link href="/salary-calculator" className="font-medium text-emerald-600 underline hover:text-emerald-700">حاسبة الراتب</Link> باش تعرف صافي راتبك.</p>
        <hr className="border-gray-200" />
        <h2 className="text-xl font-bold text-gray-900">الخلاصة</h2>
        <p>تكوين التمريض والمجال الصحي خيار ممتاز للشباب المغربي. الطلب كبير، الشغل مضمون، والراتب جيد. المجال الصحي كيعرف نقص كبير فالمغرب، وهاد الشي كيخلق فرص بزاف للخريجين.</p>
        <p className="text-emerald-700 font-medium">شارك هاد المقال مع صاحبك لي باغي يخدم فالمجال الصحي!</p>
      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          📚 اقرأ أيضاً:{" "}
          <Link href="/formations/guides/formation-comptabilite-gestion-maroc" className="text-emerald-600 underline hover:text-emerald-800">تكوين المحاسبة والتدبير</Link>
          {" | "}
          <Link href="/formations/guides/formation-langue-anglais-maroc" className="text-emerald-600 underline hover:text-emerald-800">تكوين اللغة الإنجليزية</Link>
        </p>
      </div>
    </article>
  );
}