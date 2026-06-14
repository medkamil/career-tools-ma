import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "نصائح اجتياز مقابلة العمل في المغرب 2026 (دليلك الكامل)",
  description: "دليلك الكامل للاستعداد لمقابلة العمل في المغرب.",
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
    { "@type": "ListItem", position: 2, name: "قسم التوظيف", item: "https://tawdifpro.ma/emplois" },
    { "@type": "ListItem", position: 3, name: "نصائح اجتياز مقابلة العمل في المغرب 2026", item: "https://tawdifpro.ma/emplois/guides/conseils-entretien-embauche" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هو اللباس المناسب لمقابلة العمل فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "اللباس الرسمي (Costume-Cravate للرجال، Costume-Tailleurs للنساء) هو الأفضل. فالمغرب، الشركات التقليدية كاتطلب اللباس الرسمي. الشركات الحديثة (Startups,Tech) كاتقبل Smart Casual. المهم أنك تلبس حاجة مريحة وتكون نظيف ومرتب. تفادى الألوان الصارخة والعطور القوية.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي الأسئلة الأكثر شيوعاً فمقابلات الشغل فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الأسئلة الأكثر شيوعاً: 1) قولي ليا على راسك (Parlez-moi de vous)، 2) شنو هي نقاط قوتك وضعفك، 3) علاش باغي هاد الخدمة، 4) فين كاتشوف راسك ف 5 سنين، 5) شنو هي آخر خبرة ديالك، 6) علاش خرجتي من الشركة السابقة، 7) شنو كتعرف على شركتنا، 8) واش عندك أسئلة.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نجيب على سؤال نقاط القوة والضعف؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نقاط القوة: اختار 3 مهارات مرتبطة بالوظيفة (مثلاً: تنظيم الوقت، العمل الجماعي، الإبداع). قدم مثال واقعي من تجربتك. نقاط الضعف: اختار نقطة وحدة، واشرح كيفاش كاتحاول تطورها. مثلاً: كنت عندي مشكل فالتحدث أمام الجمهور، ولكن سجلت فدورة تكوينية وتحسنت. المهم أنك تديها بإيجابية.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي لغة الجسد المناسبة فالمقابلة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "فالمغرب، لغة الجسد مهمة بزاف. حافظ على التواصل البصري (Eye contact) ولكن بلا ما تشد. اجلس مستقيم الظهر. حط اليدين فالحجر ولا على الطاولة. تفادى: العبث بالشعر، النقر بالأصابع، التململ، النظر فالتلفون. المصافحة تكون قوية ولكن معتدلة. ابتسم طبيعي.",
      },
    },
    {
      "@type": "Question",
      name: "شنو غادي يسألوني فالمقابلة بالفرنسية والعربية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "فالمغرب، المقابلات كاتكون غالباً بالفرنسية (80%)، العربية (15%)، والإنجليزية (5%). جهز نفسك باللغتين. إذا حسيتي بلي الفرنسية ديالك ضعيفة، تدرب عليها قبل. الأفضل أنك تجاوب بالفرنسية إذا كانت الوظيفة كاتطلبها، ولكن تقدر تخلط بالدارجة إذا حسيتي بالراحة.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نتابع بعد المقابلة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "المتابعة خطوة مهمة كايغفلها بزاف ديال المرشحين. بعد 24-48 ساعة من المقابلة، سيفط إيميل شكر (Email de remerciement). فالإيميل: شكرهم على الوقت، ذكر شغلة محددة ناقشتيها، وكرر اهتمامك بالوظيفة. إذا ما جاوبوش ف 7 أيام، تابع مرة أخرى. ما تكثرش عليهم: إيميلين كفاية.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي الأخطاء القاتلة فمقابلة العمل فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الأخطاء القاتلة: 1) التأخير (فالمغرب، التأخير كايدل على عدم الاحترام)، 2) الكذب فالسيرة الذاتية (كاتبان بزاف فالمقابلة)، 3) التحدث بسوء عن المشغل السابق، 4) عدم البحث عن الشركة قبل المقابلة، 5) الجواب ب &quot;ما عنديش&quot; على الأسئلة، 6) عدم طرح أسئلة فالنهاية.",
      },
    },
  ],
};

const schemas = [articleSchema, breadcrumbSchema, faqSchema];

export default function ConseilsEntretienEmbauchePage() {
  return (
    <ArticleLayout
      schemas={schemas}
      breadcrumbs={[
        { name: "قسم التوظيف", href: "/emplois" },
        { name: "نصائح اجتياز مقابلة العمل في المغرب 2026", href: "/emplois/guides/conseils-entretien-embauche" }
      ]}
      title="نصائح اجتياز مقابلة العمل في المغرب 2026 (دليلك الكامل)"
      readingTime="10 دقائق قراءة"
    >
<p>مقابلة العمل (Entretien d&apos;embauche) هي الخطوة الأصعب فالبحث على الخدمة. حتى لو CV ديالك مزيان وتجربتك قوية، المقابلة هي لي غادي تحدد واش غادي تجيب الخدمة ولا لا. فالمغرب 2026، الشركات كاتعطي أهمية كبيرة للمقابلة الشخصية.</p>

        <p>فهاد المقال، غادي نعرفوك على كل شي خاص بالمقابلة: من التحضير، للباس، الأسئلة المتوقعة، لغة الجسد، وحتى المتابعة بعد المقابلة. دليل كامل باش تكون جاهز.</p>

        <hr />

        <h2>1. التحضير قبل المقابلة (La Préparation)</h2>
        <p>هاد الخطوة كاتحدد 70% من نجاحك. ما تفوتش عليها.</p>
        <ul>
          <li><strong>ابحث على الشركة:</strong> تاريخها، منتجاتها/خدماتها، قيمها، آخر الأخبار ديالها. موقعهم LinkedIn وموقعهم الرسمي. أكتر من 60% من المرشحين كايجيو وما عندهمش فكرة على الشركة.</li>
          <li><strong>اقرا الوصف الوظيفي مزيان:</strong> شنو كايطلبوا؟ شنو هي المهارات المطلوبة؟ جهز أمثلة من تجربتك كاتطابق.</li>
          <li><strong>جهز الأسئلة ديالك:</strong> على الأقل 3 أسئلة ذكية. مثلاً: شنو هي التحديات لي كاتواجه الفريق هاد العام؟ واش كاين برنامج تدريب للموظفين الجدد؟</li>
          <li><strong>تدرب على الإجابات:</strong> قدام المراية، ولا مع صديق. سجل راسك بالتلفون باش تشوف كيفاش كاتبان.</li>
          <li><strong>جهز الوثائق:</strong> CV (3 نسخ)، رسالة التوصية (Lettre de recommandation)، الشهادات، بطاقة التعريف. حطهم فملف مرتب.</li>
        </ul>

        <h2>2. اللباس والمظهر (La Tenue Vestimentaire)</h2>
        <p>فالمغرب، اللباس كايدل على الاحترام والجدية. القاعدة: ألبس أفضل من اللباس المطلوب بدرجة.</p>
        <ul>
          <li><strong>الرجال:</strong> Costume كحلي ولا رمادي + قميص أبيض + ربطة عنق (Cravate) مناسبة + أحذية رسمية (سودا).</li>
          <li><strong>النساء:</strong> Costume (جاكيت وبنطلون أو تنورة) + بلوزة محتشمة + أحذية بكعب متوسط (3-5 سم).</li>
          <li><strong>للشركات الحديثة (Startups):</strong> Smart Casual: بنطلون شينو + قميص + جاكيت خفيف. بدون ربطة عنق.</li>
          <li><strong>تفادى:</strong> الجينز الممزق، التيشيرتات المكتوب عليها، الكابات، النعال، العطور القوية، الماكياج الزايد.</li>
        </ul>

        <h2>3. أهم الأسئلة المتوقعة وكيف تجاوب عليها</h2>

        <h3 className="text-xl font-bold text-gray-900">3.1. &quot;قولي ليا على راسك&quot; (Parlez-moi de vous)</h3>
        <p>هاد السؤال أول سؤال فـ 80% من المقابلات. الجواب الخاص: 3 أقسام:</p>
        <ul>
          <li><strong>الحاضر (30 ثانية):</strong> من أنا مهنياً؟ (المنصب الحالي، الخبرة).</li>
          <li><strong>الماضي (60 ثانية):</strong> من أين جيت؟ (التكوين، الخبرات السابقة المهمة).</li>
          <li><strong>المستقبل (30 ثانية):</strong> فين باغي نمشي؟ (طموحي يتطابق مع هاد الوظيفة).</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900">3.2. &quot;شنو هي نقاط قوتك؟&quot; (Vos points forts)</h3>
        <p>اختار 3 نقاط قوة مرتبطة بالوظيفة. استعمل طريقة STAR:</p>
        <ul>
          <li><strong>S</strong> (Situation): الوضعية.</li>
          <li><strong>T</strong> (Task): المهمة.</li>
          <li><strong>A</strong> (Action): الإجراء لي درتي.</li>
          <li><strong>R</strong> (Result): النتيجة (بالأرقام).</li>
        </ul>
        <p>مثال: &quot;نقطة قوتي هي التنظيم. فشركتي السابقة، كنت مسؤول على مشروع بقيمة 500,000 MAD، ونظمت الفريق باش كملنا فالمدة المحددة تحت الميزانية ب 10%.&quot;</p>

        <h3 className="text-xl font-bold text-gray-900">3.3. &quot;شنو هي نقطة ضعفك؟&quot; (Vos points faibles)</h3>
        <p>اختار نقطة وحدة حقيقية ولكن غير قاتلة. واشرح كيفاش كاتحسن منها. مثلاً: &quot;كنت عندي مشكل فالتحدث أمام الجمهور. ف 2025 سجلت فدورة تكوينية ف Presentation Skills، والآن كايقدر يقدم presentations قدام 50 شخص.&quot;</p>

        <h3 className="text-xl font-bold text-gray-900">3.4. &quot;علاش باغي هاد الخدمة؟&quot; (Pourquoi voulez-vous ce poste)</h3>
        <p>الجواب: اربطه بـ: شغفك بالمجال، مهاراتك المناسبة، وقيم الشركة. ما تجاوبش &quot;حيت كاينة&quot; ولا &quot;حيت خاصني خدمة&quot;.</p>

        <h2>4. لغة الجسد (Langage Corporel)</h2>
        <ul>
          <li><strong>المصافحة:</strong> قوية وحازمة (2-3 ثواني)، مع الابتسامة والتواصل البصري.</li>
          <li><strong>الجلوس:</strong> استقامة الظهر، اليدين فالحجر ولا على الطاولة، الرجلين مرتاحين.</li>
          <li><strong>التواصل البصري:</strong> 60-70% من الوقت. لا تشد النظر (يبدو عدواني) ولا تتهرب (يبدو غير واثق).</li>
          <li><strong>الإيماءات:</strong> استعمل اليدين بشكل معتدل. تفادى الإيماءات العصبية.</li>
          <li><strong>الابتسامة:</strong> طبيعية. الابتسامة كاتعطي انطباع إيجابي.</li>
        </ul>

        <h2>5. الأسئعة لي خاصك تسأل فالنهاية</h2>
        <p>فالنهاية ديال المقابلة، المدير غادي يسقسي: &quot;واش عندك أسئلة؟&quot;. الجواب يكون إييييي دائماً. إليك 5 أسئلة ذكية:</p>
        <ul>
          <li>شنو هي التحديات لي كاتواجه الفريق حالياً؟</li>
          <li>واش كاين برنامج تدريب (Formation) للموظفين الجدد؟</li>
          <li>شنو هي معايير النجاح لهاد المنصب ف أول 6 شهور؟</li>
          <li>كيفاش كاتوصف ثقافة الشركة (Culture d&apos;entreprise)؟</li>
          <li>شنو هي الخطوات الجاية ف عملية التوظيف؟</li>
        </ul>

        <h2>6. المتابعة بعد المقابلة (Le Suivi)</h2>
        <p>هاد الخطوة كاتفرق بينك وبين المرشحين الآخرين.</p>
        <ul>
          <li><strong>بعد 24 ساعة:</strong> سيفط إيميل شكر (Email de remerciement). مختصر: شكر، ذكر نقطة من المقابلة، تأكيد الاهتمام.</li>
          <li><strong>بعد 7 أيام:</strong> إذا ما جاوبوش، تابع ب إيميل ولا مكالمة مهنية.</li>
          <li><strong>إذا قبلوك:</strong> رد بسرعة واطلب تفاصيل العرض (Offre).</li>
          <li><strong>إذا ما قبلوكش:</strong> اطلب Feedback واش علاش. هاد الشي غادي يفيدك فالمرات الجاية.</li>
        </ul>

        <h2>نموذج إيميل شكر بعد المقابلة</h2>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm leading-7">
          <p><strong>Subject:</strong> Remerciement - [Votre Nom] - [Poste]</p>
          <p>Bonjour Monsieur/Madame [Nom],</p>
          <p>Je tenais à vous remercier pour le temps que vous m&apos;avez accordé aujourd&apos;hui. J&apos;ai beaucoup apprécié notre échange, en particulier la discussion sur [sujet spécifique].</p>
          <p>Je suis très intéressé par ce poste et je suis convaincu que mes compétences en [compétence] correspondent à vos besoins.</p>
        </div>

        <hr />

        <h2>ختاما</h2>
        <p>مقابلة العمل هي فرصة باش تبيع مهاراتك. كلما تحضرت أكثر، كلما زادت فرص نجاحك. خذ الأمور بجدية، كن واثق من راسك، وتذكر: الشركة كاتحتاجك بنفس القدر لي كتحتاجها. بالتوفيق.</p>
    </ArticleLayout>
  );
}
