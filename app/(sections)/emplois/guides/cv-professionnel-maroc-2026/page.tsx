import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "كيفاش تكتب CV احترافي في المغرب 2026 (نماذج + نصائح ذهبية)",
  description: "دليل شامل لكتابة السيرة الذاتية في المغرب. نماذج CV بالعربية والفرنسية، نصائح من خبراء التوظيف، والأخطاء القاتلة اللي خاصك تتفادا.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "كيفاش تكتب CV احترافي في المغرب 2026 (نماذج + نصائح ذهبية)",
  description: "دليل شامل لكتابة السيرة الذاتية في المغرب. نماذج CV بالعربية والفرنسية، نصائح من خبراء التوظيف، والأخطاء القاتلة اللي خاصك تتفادا.",
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
    { "@type": "ListItem", position: 3, name: "كيفاش تكتب CV احترافي في المغرب 2026", item: "https://tawdifpro.ma/emplois/guides/cv-professionnel-maroc-2026" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هي أفضل صيغة ل CV فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الصيغة الأكثر قبولاً فالمغرب هي PDF. تجنب Word ولا صور لأن بعض برامج انتقاء السير الذاتية (ATS) كتقدر تقراه. سمي الملف بسميتك: Mohamed_El_Amrani_CV.pdf.",
      },
    },
    {
      "@type": "Question",
      name: "واش ضروري نحط photo فالسيرة الذاتية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "فالمغرب،大多数的 كníẓōm управления ké physique. Oula photo professionnelle ب background بيضاء ولا رمادية فاتحة. تجنب سيلفي فالشاطئ ولا فالكافيه. الاستثمار ف photo pro كيدير فرق كبير.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي الأخطاء القاتلة ف CV؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "من الأخطار القاتلة: الأخطاء الإملائية (خاصك دير مراجعة)، المعلومات غير الصحيحة (كاينين اللي كيكدبو فالتجربة)، CV طويل (مايفوتش 2 صفحات)، إضافة هوايات غير مفيدة، واستعمال إيميل غير محترف. واخا، تنسيق فوضوي كيخلي الـ recruteur مايقراش.",
      },
    },
    {
      "@type": "Question",
      name: "شنو كتحط فقسم compétences؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "قسم المهارات خاصو يكون متوازن بين compétences techniques (Excel, Photoshop, لغات البرمجة) و compétences comportementales (العمل فجماعة، التواصل، القيادة). استعمل الكلمات المفتاحية لي كتظهر فdescription ديال الوظيفة اللي باغي تتقدم ليها.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش ندير CV بالفرنسية والعربية ف نفس الوقت؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "فالمغرب، CV بالفرنسية هو الأكثر طلباً خصوصاً فالقطاع الخاص. ولكن تقدر دير نسخة بالعربية للشركات لي كتشتغل بالعربية. ما تخلطش بين اللغات ف CV واحد. أحسن حاجة دير نسختين منفصلتين، وحسب المجال ديالك.",
      },
    },
  ],
};

export default function CVGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />

      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">
          كيفاش تكتب CV احترافي في المغرب 2026
        </h1>
        <p className="mt-3 text-lg text-gray-600">(نماذج + نصائح ذهبية)</p>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>•</span>
          <span>8 دقائق قراءة</span>
        </div>
      </header>

      <div className="space-y-6 text-base leading-8 text-gray-800">
        <p className="text-lg font-medium text-emerald-700">
          بسم الله الرحمن الرحيم، والصلاة والسلام على أشرف المرسلين.
        </p>

        <p>
          صراحة، فالمغرب 2026، سوق الشغل ولا صعيب بزاف. المنافسة شديدة، والشركات باقين كيقلبو على أفضل الكفاءات. ولكن، عندك سؤال: واش الـ CV ديالك كيعكس القيمة ديالك الحقيقية؟ ولا كيكون سبب فرفضك قبل ما تشوفك الـ recruteur أصلاً؟
        </p>

        <p>
          من تجربتي مع بزاف ديال المرشحين، الـ CV هو بوابتك للفرصة. هو أول حاجة كيشوفها المسؤول على التوظيف قبل المقابلة. فهاد الدليل، غنعطيك كل النصائح الذهبية باش تبني سيرة ذاتية احترافية تفتح ليك الأبواب إن شاء الله.
        </p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">1. قبل ما تبدا… شنو هو الهدف ديال CV؟</h2>
        <p>
          الـ CV ماشي هو قصتك الشخصية كاملة. الـ CV هو document تسويقي. الهدف ديالو هو:<br />
          <strong>يقنع الـ recruteur يعيط ليك على المقابلة فظرف 30 ثانية.</strong>
        </p>
        <p>
          نعم، 30 ثانية فقط. الـ recruteurs كيشوفو مئات السير. لي ما يلفتتش الأنظار فهاد المدة، كيطير فالسلة. إذن، خاصك تكون مباشر، واضح، وتبرز القيمة ديالك من اللولة.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">2. المعلومات الشخصية — شنو تحط وشنو لا</h2>
        <p>
          فالمغرب، المعلومات الشخصية ف CV خاصها تكون مختصرة ولكن كاملة:
        </p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>الاسم الكامل:</strong> سميتك الشخصية والعائلية. مثال: "محمد العلمي" ولا "Mohamed El Amrani".</li>
          <li><strong>Email:</strong> إيميل محترف. لا تستعمل "cool_boy@..." ولا "zina_2005@...". المفضل: الاسم واللقب.</li>
          <li><strong>رقم الهاتف:</strong> مع مفتاح الدولة (0600-000000).</li>
          <li><strong>Ville:</strong> المدينة ديالك. إذا كنت كتقلب فشغل فمدينة أخرى، حط "Rabat (prêt à déménager)".</li>
          <li><strong>LinkedIn:</strong> فالمغرب، LinkedIn مهم بزاف. حط اللينك ديال الـ profil ديالك.</li>
        </ul>
        <p>
          <strong>ما تحطش:</strong> العمر (إلا إذا كان مطلوب)، الحالة العائلية، رقم CIN، الصورة (حسب المجال، ولكن فالمغرب大多数 كتحط). الوزن والطول (إلا إذا كانو مرتبطين بالوظيفة).
        </p>

        <h2 className="text-2xl font-bold text-gray-900">3. L'expérience professionnelle — كيفاش تعرضها</h2>
        <p>
          هاد القسم هو الأكثر أهمية. الشركات كتقلب على الخبرة الميدانية. ولكن، حتى إذا ما عندكش تجربة، تقدر تبرز الـ projets ولا التداريب:
        </p>
        <ul className="list-disc space-y-2 pr-6">
          <li>بدأ بآخر تجربة وارجع للوراء (ordre chronologique inverse).</li>
          <li>لكل تجربة، حط: اسم الشركة، المنصب، التاريخ (mois/année)، و3-5 نقاط كتصف فيها إنجازاتك.</li>
          <li>استعمل الأفعال العملية: "دير", "نفذ", "نسق", "طور", "حسّن".</li>
          <li>تكون مازال كتقرا؟ حط les stages ولا projets d'études. حتى الـ bénévolat كيدخل فهاد الباب.</li>
        </ul>
        <p>
          مثال واقعي: "يوسف من الدار البيضاء" كان كيدوز 3 شهور فشركة صغيرة فالتسويق. ف CV ديالو ما حطش "كنت كنساعد فالتسويق". حط: "ساهمت فزيادة المتابعين ديال الصفحة ب 40% ف3 شهور عبر إنشاء محتوى تفاعلي وتحليل الإحصائيات." شحال هاد العبارة قوية، واخا؟
        </p>

        <h2 className="text-2xl font-bold text-gray-900">4. Formation et Diplômes</h2>
        <p>
          فالمغرب، الشهادات مهمة. ولكن المهم كيفية عرضها:
        </p>
        <ul className="list-disc space-y-2 pr-6">
          <li>آخر شهادة جبتها أولاً.</li>
          <li>حط: اسم الشهادة، المؤسسة، المدينة، وسنة الحصول.</li>
          <li>إذا كانت الشهادة بالفرنسية، حطها بالفرنسية. إذا بالعربية، حطها بالعربية.</li>
          <li>المعدل العام حطه إلا كان فوق 14/20 ولا كان مطلوب.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">5. Compétences — المهارات التقنية والشخصية</h2>
        <p>
          هنا كتحط المهارات لي عندك. قسمها ل:
        </p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>Compétences Techniques (Hard Skills):</strong> Excel, Photoshop, WordPress, Canva, Python, المحاسبة، وغيرها.</li>
          <li><strong>Compétences Comportementales (Soft Skills):</strong> العمل فجماعة، التواصل، حل المشاكل، القيادة، التنظيم.</li>
        </ul>
        <p>
          نصيحة: استعمل الكلمات المفتاحية لي جاية فـ description ديال الوظيفة. إذا كانت الشركة كتقلب على "Esprit d'équipe" و"Autonomie"، حطهوم ف CV ديالك.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">6. Langues — اللغات</h2>
        <p>
          فالمغرب، هنا كاين التفاصيل الدقيقة. كاينين 3 لغات أساسية:
        </p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>العربية:</strong> لغة أم (Maternelle / Langue maternelle).</li>
          <li><strong>الفرنسية:</strong> مهمة بزاف فسوق الشغل المغربي. حدد المستوى: Courant, Intermédiaire, Débutant.</li>
          <li><strong>الإنجليزية:</strong> راه ولا شي ضروري ف2026. الشركات الكبيرة (Offshoring, Tech, Banques) كتطلبها بزاف.</li>
          <li><strong>الأمازيغية / الإسبانية / الألمانية:</strong> إضافات قوية كتميزك.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">7. Photo professionnelle — واش ضروري؟</h2>
        <p>
          فالمغرب،大多数 управления и préfèrent كتطمئن ké physique. ولكن خاصها تكون photo professionnelle. ماشي selfie فالكورنيش ولا فالكافيه. روح لـ photographe أو صورها فبيتك بخلفية بيضاء. الاستثمار فيها صغير ولكن الـ retour كبير.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">8. Les erreurs à éviter ف CV</h2>
        <p>
          من الأخطاء القاتلة لي كتشوفها بزاف:
        </p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>الأخطاء الإملائية واللغوية:</strong> أخطر حاجة. دير مراجعة قبل ما ترسل.</li>
          <li><strong>الكذب:</strong> كاينين اللي كيزيدو فالتجربة ولا فالشهادات. الشركات كتتحقق، وهاد الشي كيموت السمعة.</li>
          <li><strong>CV طويل:</strong> الصفحة الأولى هي اللي كتهتم. مايصحش الـ CV يزيد على صفحتين فالمغرب.</li>
          <li><strong>إضافة "Hobbies" غير مفيدة:</strong> "القراءة" و"السفر" و"الرياضة" — ما كتزيدش حاجة. حط الـ hobbies إلا كانت مرتبطة بالمهن.</li>
          <li><strong>استعمال إيميل غير محترف:</strong> "chicachico@..." خاصك "prenom.nom@...".</li>
          <li><strong>التنسيق الفوضوي:</strong> خطوط مختلفة، ألوان مزعجة. التصميم البسيط والنظيف هو الأفضل.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">9. نماذج CV جاهزة</h2>
        <p>
          هاد النماذج يمكنك استخدامها كأساس للـ CV ديالك. الأهم هو تخصيص المعلومات حسب مجالك.
        </p>
        <p>
          عندنا ف Tawdif Pro مثال على CV احترافي يمكن تستأنس بيه. وحتى إذا حبيتي تولدي CV كامل من الصفر، تقدر تستعمل أداة <Link href="/cv-generator" className="font-medium text-emerald-600 underline hover:text-emerald-700">مولد السيرة الذاتية</Link> اللي عندنا لي كيدير ليك CV فدقايق.
        </p>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm font-semibold text-gray-900">نموذج CV للمبتدئين في المغرب:</p>
          <ol className="mt-2 list-decimal space-y-1 pr-6 text-sm text-gray-700">
            <li>الاسم + المعلومة الشخصية + LinkedIn</li>
            <li>Résumé professionnel (جملة أو جملتين كتلخص فيك)</li>
            <li>Formation (الشهادة الأخيرة أولاً)</li>
            <li>Expérience professionnelle / Stages / Projets</li>
            <li>Compétences (تقنية وشخصية)</li>
            <li>Langues</li>
            <li>Centres d'intérêt (إلا كانو مرتبطين)</li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">10. كيفاش تحسن فرصك فالبحث على الخدمة؟</h2>
        <p>
          الـ CV هو البداية فقط. باش تزيد فرصك، استعمل كل الأدوات المتاحة. مثلاً، إذا كنت باغي تعرف صافي الراتب ديالك قبل ما تتفاوض مع الشركة، استعمل <Link href="/salary-calculator" className="font-medium text-emerald-600 underline hover:text-emerald-700">حاسبة الراتب</Link> باش تعرف شنو غادي يكون راتبك الصافي. هاد الحاجة كتعطيك قوة فالتفاوض.
        </p>
        <p>
          وغادي نزيدك شي نصيحة: فالمغرب، الشبكات الاجتماعية المهنية مهمة بزاف. كونسولي حسابك ف LinkedIn، تفاعل مع المنشورات، وشارك المحتوى لي كيبرز خبرتك. هاد الحاجة كتخلّي الـ recruteur يشوفك حتى قبل ما ترسل الـ CV.
        </p>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">خاتمة</h2>
        <p>
          فالنهاية، الـ CV هو بوابتك نحو الفرصة الجديدة. ما تستعجلش فكتابتو. كلما عطيتيه وقت وجهد، كلما زادت فرصك. صراحة، فالمغرب 2026، الفرق بين المرشحين كاين فالتفاصيل الصغيرة. التفاصيل ديال التنسيق، الكلمات المختارة، والعرض المهني.
        </p>
        <p>
          الله يوفقك فمشوارك المهني! وإذا حبيتي شي مساعدة إضافية، ما تترددش فزيارة باقي أقسام Tawdif Pro — عندنا كل ما تحتاج باش تبني مستقبلك المهني.
        </p>
        <p className="text-emerald-700 font-medium">شارك هاد المقال مع صاحبك اللي كيقلب على خدمة! 🙏</p>
      </div>
    </article>
  );
}
