import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "دليل التدريب المهني والمرقمن في المغرب 2026: الشروط والحقوق",
  description: "دليل شامل حول التدريب المهني (Stage Conventionne) في المغرب. شروط الاستفادة، حقوق المتدرب، التعويضات، وفرص التدريب.",
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
    { "@type": "ListItem", position: 3, name: "دليل التدريب المهني والمرقمن في المغرب 2026", item: "https://tawdifpro.ma/emplois/guides/stage-conventionne-maroc-guide" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هو Stage Conventionne (التدريب المرقمن) فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stage Conventionne ولا التدريب المرقمن هو تدريب مهني كايتنظم بموجب اتفاقية (Convention de Stage) بين 3 أطراف: المؤسسة التعليمية، الشركة المضيفة، والمتدرب (stagiaire). هاد الاتفاقية كاتحدد المدة والأهداف والحقوق.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي حقوق المتدرب فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "المتدرب فالمغرب عندو حقوق محدودة مقارنة مع الأجير النظامي. ولكن القانون كاينص على: 1) تعويض شهري (Indemnite de Stage) - غير إلزامي ولكن متعارف عليه (1,000 ل 3,000 درهم حسب الشركة)، 2) تغطية صحية (CNSS - فاش كاتزيد المدة على 6 أشهر)، 3) شهادة التدريب عند النهاية، 4) بيئة عمل آمنة.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي مدة التدريب القانونية فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "فالمغرب، مدة التدريب كاتختالف حسب النوع: التدريب التطبيقي (Stage d Application): 1 ل 3 أشهر. تدريب التخرج (Stage de Fin d Etudes): 3 ل 6 أشهر. التدريب المدمج (Stage en Alternance): 6 ل 24 شهر. المدة القصوى عادة 6 أشهر.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نلقى Stage Conventionne فالمغرب ف 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الطرق الأكثر فعالية: 1) مكتب العلاقات مع الشركات فالمؤسسة التعليمية، 2) منصات التشغيل: Linkedin، Rekrute.ma، 3) التقديم المباشر على مواقع الشركات، 4) المعارض المهنية، 5) العلاقات الشخصية.",
      },
    },
    {
      "@type": "Question",
      name: "شنو الفرق بين Stage و Alternance فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stage هو تدريب مكثف فشركة لمدة محدودة (3 ل 6 أشهر). Alternance (التدريب بالتناوب) هو نظام كايجمع بين الدراسة النظرية فالمؤسسة التعليمية والتدريب العملي فشركة. ف Alternance، كاتقسم وقتك بين المدرسة والشركة.",
      },
    },
  ],
};

const schemas = [articleSchema, breadcrumbSchema, faqSchema];

export default function StageConventionnePage() {
  return (
    <ArticleLayout
      schemas={schemas}
      breadcrumbs={[
        { name: "قسم التوظيف", href: "/emplois" },
        { name: "دليل التدريب المهني والمرقمن في المغرب 2026", href: "/emplois/guides/stage-conventionne-maroc-guide" }
      ]}
      title="دليل التدريب المهني والمرقمن في المغرب 2026: الشروط والحقوق"
      readingTime="10 دقائق قراءة"
    >
<p>التدريب المهني (Stage Conventionné) هو أول خطوة فالحياة المهنية لمعظم الشباب المغربي. ولكن، بزاف ديال الطلاب والطالبات ما كايعرفوش شنو هي حقوقهم، شنو هو التعويض لي خاصهم، وكيفاش يلقاو فرصة تدريب فشركة محترمة. فهاد المقال، غادي نعطيك دليل كامل باش تستعد للتدريب المهني فالمغرب ف 2026.</p>

        <p>شنو هو Stage Conventionné؟ هو تدريب مهني كايتنظم بموجب اتفاقية (Convention de Stage) بين 3 أطراف: المؤسسة التعليمية (المدرسة ولا الجامعة)، الشركة المضيفة (l entreprise d accueil)، والمتدرب (le stagiaire). هاد الاتفاقية كاتحدد المدة، الأهداف، التعويض، والحقوق والواجبات ديال كل طرف. بلا هاد الاتفاقية، التدريب ما كايتعترفش بيه قانونيا.</p>

        <hr />

        <h2>1. أنواع التداريب فالمغرب</h2>
        <p>كل نوع ديال التدريب عندو هدف معين ومدة محددة:</p>
        <ul>
          <li><strong>Stage d Initiation (تدريب اكتشافي):</strong> هدفو التعرف على بيئة العمل بشكل عام. المدة: شهر واحد غالبا. كايكون فالسنة الأولى والثانية من التكوين (Bac+1, Bac+2). ما كايتوقعش منك تكون منتج بزاف، ولكن كاتعلم كيفاش كاتمشي الأمور فشركة.</li>
          <li><strong>Stage d Application (تدريب تطبيقي):</strong> كايطبق الطالب المعرفة النظرية لي قراها فالمدرسة على أرض الواقع. المدة: 1 ل 3 أشهر. كايكون فالسنة الثالثة (Bac+3, Licence).</li>
          <li><strong>Stage de Fin d Études (PFE - مشروع التخرج):</strong> هو أهم تدريب فالمسار الدراسي. المدة: 3 ل 6 أشهر. كايكون فالسنة الأخيرة (Master, Ingénieur, Bac+5). المشروع ديال التخرج هو لي كايدوزك للشهادة.</li>
          <li><strong>Stage en Alternance (التدريب بالتناوب):</strong> نظام كايجمع بين الدراسة النظرية فالمؤسسة التعليمية والتدريب العملي فشركة. المدة: 6 ل 24 شهر. كاتقسم وقتك بين المدرسة (30%) والشركة (70%).</li>
        </ul>

        <h2>2. التعويضات (Indemnités de Stage)</h2>
        <p>التعويض فالتدريب المهني فالمغرب غير إلزامي قانونيا (إلا فبعض الحالات). ولكن، العرف كايدفع الشركات تعويض رمزي باش تغطي مصاريف التنقل والغذاء. التعويض كايختالف على حسب نوع التدريب والشركة:</p>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-emerald-50">
                <th className="p-3 text-right font-semibold">نوع التدريب</th>
                <th className="p-3 text-right font-semibold">التعويض التقريبي (الشهر)</th>
                <th className="p-3 text-right font-semibold">الشركات الكبرى</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="p-3">Stage d Initiation</td><td className="p-3">500 - 1,000 درهم</td><td className="p-3">1,500 - 2,000 درهم</td></tr>
              <tr><td className="p-3">Stage d Application</td><td className="p-3">1,000 - 2,000 درهم</td><td className="p-3">2,500 - 3,500 درهم</td></tr>
              <tr><td className="p-3">PFE (تخرج)</td><td className="p-3">2,000 - 4,000 درهم</td><td className="p-3">5,000 - 7,000 درهم</td></tr>
              <tr><td className="p-3">Alternance</td><td className="p-3">2,500 - 5,000 درهم</td><td className="p-3">6,000 - 8,000 درهم</td></tr>
            </tbody>
          </table>
        </div>
        <p>الشركات الكبرى (بحال OCP, Attijariwafa Bank, Maroc Telecom, والشركات المتعددة الجنسيات) كاتعطي تعويضات أكبر بزاف من الشركات الصغيرة. بعض الشركات فـ IT كاتعطي حتى 8,000 درهم لتداريب PFE. المهم: التفاوض على التعويض واش ممكن؟ فالبزاف ديال الشركات، ايوه. خصوصا إلا كنتي تجيب مهارات نادرة.</p>

        <h2>3. حقوق المتدرب فالمغرب</h2>
        <p>المتدرب (stagiaire) ما عندوش نفس الحقوق ديال الأجير النظامي. ولكن، القانون المغربي كايضمن ليك هاد الحقوق:</p>
        <ul>
          <li><strong>Convention de Stage:</strong> الحق فاتفاقية مكتوبة تحدد الأهداف والمدة والتعويض. ما تبداش التدريب بلا اتفاقية.</li>
          <li><strong>التعويض (Indemnité):</strong> غير إلزامي قانونيا ولكنه متعارف عليه. الشركات الكبرى عندها سياسة تعويض واضحة.</li>
          <li><strong>التغطية الصحية (CNSS):</strong> فاش كاتزيد مدة التدريب على 6 أشهر، كايتأكد المتدرب فـ CNSS وتكون عندك تغطية صحية.</li>
          <li><strong>شهادة التدريب (Attestation de Stage):</strong> الحق فشهادة فاش كاتكمل التدريب. هاد الشهادة مهمة باش تزاد فـ CV ديالك.</li>
          <li><strong>بيئة عمل آمنة:</strong> الحق فبيئة عمل آمنة ومحترمة. ما يمكنش تكون أهداف التدريب غير واقعية ولا خطيرة.</li>
          <li><strong>إجازة:</strong> بعض الشركات كاتعطي يوم ولا يومين فالشهر كإجازة للمتدرب.</li>
        </ul>
        <p>معلومة مهمة: المتدرب ما كايتعتابرش أجير (salarié). يعني، القانون الشغل كاملا ما كاينطبقش عليه. ولكن، الشركة ملزمة بالاتفاقية لي وقعات عليها.</p>

        <h2>4. كيفاش تلقى Stage Conventionné فالمغرب ف 2026</h2>
        <p>لقاء التدريب المناسب كايحتاج جهد واستراتيجية. هاد هي الطرق الأكثر فعالية:</p>
        <ol>
          <li><strong>مكتب العلاقات مع الشركات (Bureau des Stages):</strong> المؤسسة التعليمية غالبا عندها شراكات مع شركات. هاد أول مكان تسقسى فيه.</li>
          <li><strong>منصات التشغيل:</strong> LinkedIn (الأهم)، Rekrute.ma، Anapec.ma، Hays.ma، و Tawdif Pro طبعا.</li>
          <li><strong>التقديم المباشر (Candidature Spontanée):</strong> حتى إلا ما كاينش إعلان تدريب، تقدر ترسل CV و Lettre de Motivation للشركات لي باغي.</li>
          <li><strong>المعارض المهنية (Career Fairs):</strong> بزاف ديال المدارس كاتنظم معارض مهنية كايجيو فيها ممثلين ديال الشركات. هاد فرصة ذهبية.</li>
          <li><strong>العلاقات الشخصية (Réseautage):</strong> فالمغرب، العلاقات كاتلعب دور كبير. سقسى الأهل، الأصحاب، والأساتذة. بزاف ديال التداريب كاتعطى عن طريق العلاقات.</li>
        </ol>

        <h2>5. نصائح للنجاح فالتدريب</h2>
        <p>التدريب هو فرصة باش تتعلم وتبني سمعتك المهنية. هاد النصائح غادي تساعدك:</p>
        <ul>
          <li><strong>كن استباقي (Proactif):</strong> ما تستناش حتى يديروك على الخدمة. عرض المساعدة، سقسى على المشاريع، ودي مبادرات.</li>
          <li><strong>تدرب على المهارات:</strong> استغل وقت الفراغ فالتدريب باش تتعلم أدوات جديدة. مثلا، إلا كنتي فالتسويق، تعلم Google Analytics. إلا كنتي فـ IT، تعلم Docker أو Cloud.</li>
          <li><strong>ابني العلاقات:</strong> التواصل مع الزملاء والمشرفين. هاد العلاقات ممكن تفيدك فالمستقبل. خذ الـ LinkedIn ديالهم وتواصل معاهم.</li>
          <li><strong>التزم بالمواعيد:</strong> وصل ف الوقت، التزم بالـ deadlines. هاد الشي كايخلّي المشرف كايديك فعين الاعتبار للتوظيف.</li>
          <li><strong>اطلب الـ Feedback:</strong> سقسى المشرف على شنو مزية وشنو خاصك تحسن. الـ Feedback المنتظم كايساعدك تتطور بسرعة.</li>
          <li><strong>وثق إنجازاتك:</strong> سجل جميع المشاريع والمهام لي ديرتيها. هادشي غادي يعاونك فكتابة CV و فالمقابلات الجاية.</li>
        </ul>

        <h2>6. من التدريب للتوظيف</h2>
        <p>بزاف ديال الشركات فالمغرب كاتوظف المتدربين لي تألقو فالتدريب. الإحصاءات كاتشير أن 30 ل 40% من المتدربين فـ PFE كايتوظفو ف نفس الشركة من بعد التدريب. باش تزيد فرصك فالتوظيف:</p>
        <ul>
          <li>أظهر حبك للتعلم والرغبة فالتطور.</li>
          <li>كن جزء من الفريق، ما تبقاشش ف "وضعية المتدرب".</li>
          <li>سقسى على إمكانية التوظيف فآخر التدريب.</li>
          <li>اطلب خطاب توصية (Lettre de Recommandation) من المشرف فاش كاتكمل.</li>
        </ul>

        <hr />

        <h2>خاتمة</h2>
        <p>التدريب المهني (Stage Conventionné) هو أول بوابة لعالم الشغل. حتى إلا كان التعويض صغير ولا ما كاينش، الخبرة، العلاقات، والمهارات لي كاتجيب معاه كاتساوي بزاف فالمدى البعيد. استعد، قدم فبزاف ديال الشركات، استعمل شبكة العلاقات ديالك، وكن مبادر خلال التدريب. الباب كايتفتح للي كايطرق.</p>
    </ArticleLayout>
  );
}
