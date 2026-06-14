import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "الدراسة السوقية للمشروع في المغرب 2026 (دليل كامل) | Tawdif Pro",
  description: "دليل كامل للدراسة السوقية (Étude de marché) للمشاريع في المغرب 2026. خطوات، أدوات، ونماذج عملية لدراسة جدوى مشروعك.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "الدراسة السوقية للمشروع في المغرب 2026 (دليل كامل)",
  description: "دليل شامل لإجراء الدراسة السوقية للمشاريع في المغرب.",
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
    { "@type": "ListItem", position: 2, name: "قسم المشاريع", item: "https://tawdifpro.ma/projets" },
    { "@type": "ListItem", position: 3, name: "الدراسة السوقية للمشروع في المغرب 2026", item: "https://tawdifpro.ma/projets/guides/etude-marche-projet" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هي الدراسة السوقية (Étude de marché)؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الدراسة السوقية هي عملية جمع وتحليل المعلومات عن السوق المستهدف. الهدف: فهم الزبناء، المنافسة، والظروف الاقتصادية. كاتساعد على اتخاذ القرارات الصحيحة قبل بداية المشروع. كاتشمل: تحليل الطلب، تحليل العرض، تحليل المنافسة، وتحليل البيئة الاقتصادية.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي أهمية الدراسة السوقية للمشروع فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الدراسة السوقية مهمة بزاف للمشروع فالمغرب. الأسباب: 1) تخفيض المخاطر (تأكد أن السوق كاين)، 2) فهم الزبناء (شنو باغيين؟)، 3) تحليل المنافسة (شنو كايقدم المنافسون؟)، 4) تحديد السعر المناسب (Pricing)، 5) جذب المستثمرين (Forsa, INTELAKA, البنوك كايتطلبو دراسة السوق)، 6) خطة عمل واضحة.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي مكونات الدراسة السوقية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الدراسة السوقية كاتتكون من 5 أقسام رئيسية: 1) تحليل السوق (المقدمة، تعريف السوق، حجم السوق)، 2) تحليل الطلب (الزبناء المستهدفين، احتياجاتهم، سلوكهم)، 3) تحليل العرض (المنافسين، منتجاتهم، أسعارهم)، 4) تحليل SWOT (القوة، الضعف، الفرص، التهديدات)، 5) الاستراتيجية المقترحة (السعر، التوزيع، الترويج).",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نحلل المنافسة فالمشروع؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "تحليل المنافسة كايدوي عبر: 1) حدد المنافسين المباشرين (نفس المنتج/الخدمة)، 2) حدد المنافسين غير المباشرين (منتجات بديلة)، 3) حلل نقاط قوتهم وضعفهم (جودة، سعر، خدمة)، 4) قارن أسعارهم وجودتهم، 5) استعمل أدوات مثل Google Trends, Facebook Insights, زيارات ميدانية. 6) اعرف حصتهم فالسوق (Market share).",
      },
    },
    {
      "@type": "Question",
      name: "شنو هو تحليل SWOT وكيفاش كايدوي؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SWOT (Strengths, Weaknesses, Opportunities, Threats) هو تحليل كايدوي عشان تعرف وضعية مشروعك. Strengths: نقاط قوتك (مهارات، موارد، موقع). Weaknesses: نقاط ضعفك (قلة الخبرة، ميزانية محدودة). Opportunities: الفرص (طلب متزايد، دعم حكومي). Threats: التهديدات (منافسة شديدة، تغير قانوني). فالمغرب، SWOT مهم للبرامج الحكومية (Forsa, INTELAKA).",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي الأدوات المجانية للدراسة السوقية فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أدوات مجانية: 1) Google Trends (مقارنة الطلب حسب المنطقة والوقت)، 2) HCP (High Commission for Plan - إحصائيات رسمية مغربية)، 3) Facebook Business Suite (تحليل الجمهور)، 4) SurveyMonkey (استبيانات مجانية)، 5) LinkedIn (تحليل الشركات المنافسة)، 6) Google Keyword Planner (كلمات مفتاحية)، 7) زيارات ميدانية وجمع بيانات من المحلات.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي الأخطاء الشائعة ف الدراسة السوقية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الأخطاء الشائعة: 1) عدم تحديد السوق بدقة (السوق واسع بزاف)، 2) تجاهل المنافسة (قول ما كاينش منافسة هو أكبر خطأ)، 3) التوقعات المتفائلة بزاف (مبالغة فالإيرادات)، 4) عدم دراسة سلوك الزبناء (شنو كايشريو وعلاش)، 5) إهمال الجانب القانوني (التراخيص، الضرائب)، 6) عدم تحديث الدراسة (السوق كايتغير دائماً).",
      },
    },
  ],
};

export default function EtudeMarcheProjetPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">الرئيسية</Link>
        {" > "}
        <Link href="/projets" className="hover:text-emerald-600">المشاريع</Link>
        {" > "}
        <span className="text-gray-900">الدراسة السوقية للمشروع في المغرب 2026</span>
      </nav>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">الدراسة السوقية للمشروع في المغرب 2026 (دليل كامل)</h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>.</span>
          <span>13 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">

        <p>الدراسة السوقية (Étude de marché) هي الأساس لأي مشروع ناجح. قبل ما تبدأ مشروعك، خاصك تعرف واش السوق كاين، شنو باغي الزبناء، شنو كايدير المنافسون. فالمغرب 2026، الدراسة السوقية هي شرط أساسي فجميع برامج الدعم (Forsa, INTELAKA) وحتى القروض البنكية.</p>

        <p>فهاد المقال، غادي نعرفوك على كيفية إعداد دراسة سوقية متكاملة لمشروعك فالمغرب 2026. خطوات عملية، أدوات مجانية، ونماذج جاهزة.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">شنو هي الدراسة السوقية؟</h2>
        <p>الدراسة السوقية هي عملية جمع وتحليل البيانات عن السوق المستهدف. كاتساعدك على:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li>فهم احتياجات الزبناء (Les besoins des clients).</li>
          <li>تحليل المنافسة (Analyse de la concurrence).</li>
          <li>تقدير حجم السوق (Taille du marché).</li>
          <li>تحديد السعر المناسب (Stratégie de prix).</li>
          <li>تخطيط استراتيجية التسويق (Stratégie marketing).</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">الخطوة 1: تحديد هدف الدراسة</h2>
        <p>قبل ما تبدا، اسال راسك: شنو الهدف من هاد الدراسة؟</p>
        <ul className="list-disc space-y-2 pr-6">
          <li>باش نعرف واش المشروع قابل للتطبيق (Faisabilité).</li>
          <li>باش نقدم على برنامج دعم (Forsa, INTELAKA).</li>
          <li>باش نطلب قرض من البنك.</li>
          <li>باش نجذب مستثمرين.</li>
        </ul>
        <p>الهدف كايحدد عمق الدراسة. للبرامج الحكومية، دراسة متوسطة كافية. للبنوك والمستثمرين، دراسة عميقة مطلوبة.</p>

        <h2 className="text-2xl font-bold text-gray-900">الخطوة 2: تحليل السوق (Analyse du Marché)</h2>
        <p>هاد القسم كايوصف السوق لي باغي دخل ليه. الأسئلة لي خاصك تجاوب:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>شنو هو السوق المستهدف؟</strong> هل هو السوق المغربي كامل؟ جهة معينة؟ مدينة؟ حي؟</li>
          <li><strong>حجم السوق (Taille du marché):</strong> كم من زبون محتمل؟ كم من معاملة فالسنة؟ استعمل إحصائيات HCP و Google Trends.</li>
          <li><strong>اتجاهات السوق (Tendances):</strong> السوق كايطلع ولا كايهبط؟ شنو هي الاتجاهات الجديدة؟</li>
          <li><strong>العوامل المؤثرة:</strong> الاقتصاد، التكنولوجيا، القوانين، الثقافة.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">الخطوة 3: تحليل الطلب (Analyse de la Demande)</h2>
        <p>هاد القسم كايوصف الزبناء ديالك (Les clients). الأسئلة:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>شنو هو الزبون المثالي (Client idéal)?</strong> السن، الجنس، الدخل، الموقع، الاهتمامات.</li>
          <li><strong>شنو هي احتياجات الزبون؟</strong> شنو المشكل لي كايحلو مشروعك؟</li>
          <li><strong>شنو هو سلوك الشراء؟</strong> فين كايشريو؟ كيفاش؟ علاش؟</li>
          <li><strong>كم هو الزبون مستعد يدفع؟</strong> تحسس السعر (Sensibilité au prix).</li>
        </ul>
        <p>الأداة: استعمل الاستبيانات (Questionnaires) وأسئلة مباشرة للزبناء المحتملين. تقدر تستعمل SurveyMonkey ولا Google Forms مجاناً.</p>

        <h2 className="text-2xl font-bold text-gray-900">الخطوة 4: تحليل العرض والمنافسة (Analyse de l&apos;Offre)</h2>
        <p>هاد القسم كايوصف المنافسين ديالك:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>المنافسون المباشرون:</strong> كايديرو نفس المنتج/الخدمة. حلل: أسماؤهم، مواقعهم، أسعارهم، جودتهم، خدمتهم.</li>
          <li><strong>المنافسون غير المباشرون:</strong> كايديرو منتجات بديلة.</li>
          <li><strong>حصتهم فالسوق (Market share):</strong> شنو هي حصة كل منافس؟</li>
          <li><strong>نقاط قوتهم وضعفهم:</strong> شنو كايديرو مزيان؟ شنو نقاط ضعفهم؟</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">الخطوة 5: تحليل SWOT</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b px-4 py-2 text-right font-medium" colSpan={2}>تحليل SWOT للمشروع</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b px-4 py-2 align-top"><strong>Strengths (القوة)</strong><br/>مهاراتك، مواردك، موقعك، شبكتك</td>
                <td className="border-b px-4 py-2 align-top"><strong>Weaknesses (الضعف)</strong><br/>قلة الخبرة، ميزانية محدودة، معرفة بالسوق</td>
              </tr>
              <tr>
                <td className="border-b px-4 py-2 align-top"><strong>Opportunities (الفرص)</strong><br/>طلب متزايد، دعم حكومي، شراكات</td>
                <td className="border-b px-4 py-2 align-top"><strong>Threats (التهديدات)</strong><br/>منافسة، تغير قانوني، أزمة اقتصادية</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">الخطوة 6: الاستراتيجية المقترحة</h2>
        <p>بناءً على التحليل السابق، اقترح استراتيجيتك:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>استراتيجية السعر (Pricing):</strong> كم غادي تحدد السعر؟ على أساس شنو؟</li>
          <li><strong>استراتيجية التوزيع (Distribution):</strong> فين غادي تبيع (متجر، أونلاين، جملة)؟</li>
          <li><strong>استراتيجية الترويج (Promotion):</strong> كيفاش غادي توصل للزبناء (فيسبوك، Google، لوحات إعلانية)؟</li>
          <li><strong>استراتيجية المنتج (Produit):</strong> شنو الميزة التنافسية ديالك؟</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">أدوات مجانية للدراسة السوقية فالمغرب</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>Google Trends:</strong> شوف الطلب على منتجك فالمغرب حسب المنطقة والوقت.</li>
          <li><strong>HCP.ma (المندوبية السامية للتخطيط):</strong> إحصائيات رسمية عن السكان، الاقتصاد، السكن.</li>
          <li><strong>Facebook Insights:</strong> تحليل الجمهور المستهدف.</li>
          <li><strong>Google Keyword Planner:</strong> اعرف شنو كايبحث عليه الزبناء فالمغرب.</li>
          <li><strong>LinkedIn:</strong> تحليل الشركات المنافسة.</li>
          <li><strong>الزيارات الميدانية:</strong> زور المحلات، الأسواق، والمناطق المستهدفة.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">نموذج مبسط لدراسة السوق (لبرامج الدعم)</h2>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm leading-7">
          <p><strong>مشروع: [اسم المشروع]</strong></p>
          <p><strong>1. وصف المشروع:</strong> [وصف مختصر]</p>
          <p><strong>2. السوق المستهدف:</strong> [الجهة، المدينة، الفئة العمرية]</p>
          <p><strong>3. حجم السوق:</strong> [عدد الزبناء المحتملين]</p>
          <p><strong>4. المنافسون:</strong> [أسماء المنافسين]</p>
          <p><strong>5. نقاط القوة:</strong> [الميزة التنافسية]</p>
          <p><strong>6. السعر:</strong> [السعر المقترح]</p>
          <p><strong>7. التوزيع:</strong> [مكان البيع]</p>
          <p><strong>8. الترويج:</strong> [طريقة الإعلان]</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">الأخطاء الشائعة ف الدراسة السوقية</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>السوق واسع بزاف:</strong> خصص. ما تقولش السوق هو كل المغاربة.</li>
          <li><strong>ما كاينش منافسة:</strong> كاين دائماً منافسة. حتى لو غير مباشرة.</li>
          <li><strong>توقعات متفائلة:</strong> كن واقعي ف التوقعات المالية.</li>
          <li><strong>إهمال الجانب القانوني:</strong> التراخيص والضرائب مهمة.</li>
          <li><strong>عدم تحديث الدراسة:</strong> السوق كايتغير. جدد دراستك كل 6 شهور.</li>
        </ul>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">ختاما</h2>
        <p>الدراسة السوقية هي خريطة الطريق ديال مشروعك. فالمغرب 2026، هي مفتاح النجاح وشرط أساسي للدعم والتمويل. استعمل الأدوات المجانية، كن دقيقاً فتحليلك، ولاتنساش أن السوق المغربي عندو خصوصياتو (الثقافة، الدين، العادات). دراسة سوقية جيدة = مشروع ناجح.</p>

      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          {"اقرا أيضا: "}
          <Link href="/projets/guides/auto-entrepreneur-maroc" className="text-emerald-600 underline hover:text-emerald-800">المقاول الذاتي</Link>
          {" | "}
          <Link href="/projets/guides/programme-forsa-2026" className="text-emerald-600 underline hover:text-emerald-800">برنامج Forsa</Link>
          {" | "}
          <Link href="/salary-calculator" className="text-emerald-600 underline hover:text-emerald-800">احسب راتبك الصافي</Link>
        </p>
      </div>
    </article>
  );
}
