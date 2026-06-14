import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "التأمين على البطالة في المغرب 2026: الشروط وكيفية الاستفادة",
  description: "دليل التأمين على البطالة فالمغرب 2026. شروط الاستفادة من indemnite de perte d emploi، كيفية التسجيل ف ANAPEC، مدة التعويض، والوثائق المطلوبة.",
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "التأمين على البطالة في المغرب 2026: الشروط وكيفية الاستفادة",
    description: "دليل التأمين على البطالة فالمغرب. شروط الاستفادة من indemnite de perte d emploi، كيفية التسجيل ف ANAPEC، ومدة التعويض.",
    author: { "@type": "Person", name: "Tawdif Pro" },
    publisher: { "@type": "Organization", name: "Tawdif Pro", logo: { "@type": "ImageObject", url: "https://tawdifpro.ma/logo.png" } },
    datePublished: "2026-06-01",
    dateModified: "2026-06-13",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://tawdifpro.ma" },
      { "@type": "ListItem", position: 2, name: "قسم التوظيف", item: "https://tawdifpro.ma/emplois" },
      { "@type": "ListItem", position: 3, name: "التأمين على البطالة في المغرب 2026", item: "https://tawdifpro.ma/emplois/guides/assurance-chomage-maroc" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "شنو هو التأمين على البطالة (Assurance Chomage) فالمغرب؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "التأمين على البطالة (Indemnite pour Perte d Emploi - IPE) هو نظام كاين ف CNSS كايعطي دعم مالي للأجراء لي خسرو الخدمة بغير إرادتهم. المشترك فالنظام كايخلص قيمة مالية كل شهر لمدة محدودة. النظام مدير من طرف CNSS و ANAPEC. المبلغ كايحسب على اساس الأجر لي كنت كاتخلص قبل الطرد.",
        },
      },
      {
        "@type": "Question",
        name: "شنو هي شروط الاستفادة من تعويض البطالة فالمغرب 2026؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "خاصك تكون مسجل ف CNSS وخدمتي لمدة 780 يوم على الأقل فآخر 3 سنين قبل الطرد. أيضا، خاصك تسجل مع ANAPEC ف 30 يوم لي جاو من بعد الطرد. ما تستحقش التعويض إلا ف حالة الطرد غير الطوعي. يعني الاستقالة والطرد لسبب تأديبي ما كايدخلوش.",
        },
      },
      {
        "@type": "Question",
        name: "شنو هي المدة ديال التعويض وشنو هو المبلغ؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "مدة التعويض كاتعتمد على مدة الخدمة: 780 ل 959 يوم خدمة = 6 أشهر تعويض، 960 ل 1139 يوم = 9 أشهر، 1140 ل 1319 يوم = 12 شهر، 1320 ل 1499 يوم = 15 شهر، و 1500 يوم فأكثر = 18 شهر. المبلغ هو 70% من متوسط أجرك الشهري فآخر 36 شهر لي قبل الطرد مع حد أقصى 2600 درهم فالشهر.",
        },
      },
      {
        "@type": "Question",
        name: "واش أستحق التعويض إلا مشيت ف demission (استقالة)؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "لا، ف حالة demission (الاستقالة) ما كاتستحقش التعويض. النظام كايغطي فقط الحالات لي فاتت فيها الخدمة بغير إرادة الأجير. يعني الطرد الاقتصادي، الطرد بسبب المرض (غير المهني)، وإنهاء العقد من غير سبب مشروع.",
        },
      },
      {
        "@type": "Question",
        name: "شنو هي الوثائق المطلوبة للتسجيل ف ANAPEC؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "الوثائق المطلوبة: نسخة من CIN (البطاقة الوطنية)، آخر 3 شهادات CNSS، شهادة العمل من المشغل (Certificat de Travail)، شهادة نهاية الخدمة، آخر bulletins de paie، نموذج تسجيل ANAPEC معبى.",
        },
      },
    ],
  },
];

export default function AssuranceChomagePage() {
  return (
    <ArticleLayout
      schemas={schemas}
      breadcrumbs={[
        { name: "الرئيسية", href: "/" },
        { name: "التوظيف", href: "/emplois" },
        { name: "التأمين على البطالة فالمغرب", href: "/emplois/guides/assurance-chomage-maroc" },
      ]}
      title="التأمين على البطالة في المغرب 2026: الشروط وكيفية الاستفادة"
      readingTime="9 دقائق قراءة"
    >
      <p>واحد من أكبر المشاكل لي كايواجهو الأجراء فالمغرب فاش كايتطردو: شنو العمل؟ التأمين على البطالة (Assurance Chomage) غادي يكون الحل. دابا، بزاف ديال الناس ما كايعرفوش هاد النظام كيفاش كايخدم.</p>
      <p>كمال من فاس، عندو 14 عاما فشركة ديال الصناعة. الشركة سدات وكلشي تسرح. كمال ماكانش عارف أنه عندو الحق ف indemnite de perte d emploi. واحد الصاحب نصحو يروح لـ ANAPEC. بعد 3 أسابيع، بدا كايخلص 2,600 درهم فالشهر لمدة 15 شهر.</p>

      <hr />

      <h2>1. شنو هو Indemnite pour Perte d Emploi (IPE)؟</h2>
      <p>Indemnite pour Perte d Emploi (IPE) هو نظام تعويض كايديره الصندوق الوطني للضمان الاجتماعي (CNSS). الهدف ديالو هو دعم الأجراء الذين فقدوا خدمتهم بغير إرادتهم. النظام كايدخل فإطار قانون مدونة الشغل المغربية (القانون رقم 65-99). الأجير كايخلص كل شهر مبلغ مادي حتى يلقى خدمة جديدة ولا تخلص المدة القانونية.</p>

      <h2>2. شروط الاستفادة بالتفصيل</h2>
      <ul>
        <li><strong>التسجيل ف CNSS:</strong> خاصك تكون مسجل فالصندوق الوطني للضمان الاجتماعي (CNSS).</li>
        <li><strong>مدة الخدمة:</strong> خاصك خدمتي 780 يوم على الأقل فآخر 3 سنين قبل الطرد.</li>
        <li><strong>سبب الطرد:</strong> الطرد كايكون غير طوعي. يعني: الطرد الاقتصادي، إعادة الهيكلة، إنهاء العقد من غير سبب.</li>
        <li><strong>التسجيل ف ANAPEC:</strong> خاصك تسجل مع الوكالة الوطنية لإنعاش التشغيل والكفاءات (ANAPEC) ف 30 يوم لي جاو من بعد تاريخ الطرد.</li>
      </ul>

      <h2>3. مدة التعويض والمبلغ</h2>
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-emerald-50">
              <th className="p-3 text-right font-semibold text-gray-900">مدة الخدمة (أيام)</th>
              <th className="p-3 text-right font-semibold text-gray-900">مدة التعويض</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr><td className="p-3">780 - 959 يوم</td><td className="p-3">6 أشهر</td></tr>
            <tr><td className="p-3">960 - 1139 يوم</td><td className="p-3">9 أشهر</td></tr>
            <tr><td className="p-3">1140 - 1319 يوم</td><td className="p-3">12 شهرا</td></tr>
            <tr><td className="p-3">1320 - 1499 يوم</td><td className="p-3">15 شهرا</td></tr>
            <tr><td className="p-3">1500 يوم فأكثر</td><td className="p-3">18 شهرا</td></tr>
          </tbody>
        </table>
      </div>

      <h2>4. كيفية التسجيل خطوة بخطوة</h2>
      <ol>
        <li>جمع الوثائق: CIN، شهادة العمل، آخر 3 bulletins de paie.</li>
        <li>زيارة ANAPEC فالمدينة ديالك.</li>
        <li>مقابلة مع مستشار كايسجلك فالنظام.</li>
        <li>التسجيل ف CNSS: ANAPEC كاتبعث الملف لـ CNSS (15 ل 30 يوم).</li>
      </ol>

      <hr />

      <h2>خاتمة</h2>
      <p>التأمين على البطالة فالمغرب هو شبكة أمان اجتماعي مهمة. ولكن، الشروط صارمة والمبلغ محدود. إذا طردتي، أول حاجة: سجل مع ANAPEC ف 30 يوم.</p>
    </ArticleLayout>
  );
}
