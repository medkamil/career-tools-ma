import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "متوسط الرواتب في المغرب حسب القطاع والمهنة 2026",
  description: "متوسط الرواتب في المغرب 2026 حسب القطاع والمهنة. إحصائيات محدثة للأجور فالدينار البيضاء والرباط وطنجة، أعلى وأقل القطاعات أجراً، ونصائح التفاوض على الراتب.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "متوسط الرواتب في المغرب حسب القطاع والمهنة 2026",
  description: "متوسط الرواتب في المغرب حسب القطاع. إحصائيات محدثة للأجور في المغرب.",
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
    { "@type": "ListItem", position: 3, name: "متوسط الرواتب في المغرب حسب القطاع 2026", item: "https://tawdifpro.ma/emplois/guides/salaire-moyen-maroc-par-secteur" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هو متوسط الراتب فالمغرب ف 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "متوسط الراتب فالمغرب ف 2026 هو حوالي 4,500 ل 6,000 درهم فالشهر. ولكن هاد الرقم كايختالف بزاف على حسب القطاع، المدينة، ومستوى الخبرة. فالدار البيضاء، المتوسط كايكون أعلى (6,500 درهم)، أما فالمدن الصغيرة كايكون أقل (3,500 ل 4,500 درهم).",
      },
    },
    {
      "@type": "Question",
      name: "شنو هو SMIG (الحد الأدنى للأجور) فالمغرب ف 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SMIG (Salaire Minimum Interprofessionnel Garanti) فالمغرب ف 2026 كان 3,300 درهم فالشهر فالصناعة والتجارة (48 ساعة فالأسبوع). SMAG (Salaire Minimum Agricole Garanti) للفلاحة كان 2,800 درهم فالشهر. هاد الأرقام كايتزادو كل سنة بنسبة 5 ل 10%.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي أعلى القطاعات أجرا فالمغرب 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أعلى القطاعات أجرا فالمغرب: التكنولوجيا والمعلومات (IT): 10,000 ل 25,000 درهم، البنوك والتأمينات: 9,000 ل 20,000 درهم، الطاقة والمعادن: 8,000 ل 18,000 درهم، الصيدلة: 7,000 ل 15,000 درهم، الاستشارات: 7,000 ل 14,000 درهم.",
      },
    },
    {
      "@type": "Question",
      name: "واش الرواتب فالمغرب كاتختالف بين الرجال والنساء؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ايوه، الفرق فالأجور بين الرجال والنساء (gender pay gap) موجود فالمغرب. الإحصائيات كاتشير أن النساء كايخلصو حوالي 15 ل 25% أقل من الرجال ف نفس المنصب ونفس الخبرة.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هو الراتب الصافي مقابل الراتب الإجمالي فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الراتب الإجمالي (Salaire Brut) هو المبلغ لي كايتعاقد عليه. الراتب الصافي (Salaire Net) هو لي كايخلصك بعد الخصومات. الخصومات: CNSS (4.48% من الراتب الإجمالي)، CIMR (حتى 3%)، والضريبة على الدخل (IR) لي كاتحسب حسب الشريحة.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي أفضل المدن من حيث الرواتب فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الدار البيضاء كاتصدر القائمة بأعلى متوسط رواتب (6,500 درهم)، بعدها الرباط (6,000)، طنجة (5,500)، مراكش (5,000)، فاس (4,500)، وأكادير (4,300). الدار البيضاء كاتعطي فرص أكبر فالخدمات المالية والتكنولوجيا.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نقدر نتفاوض على الراتب فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التفاوض على الراتب فالمغرب هو فن. نصائح: ابحث عن متوسط الراتب فالقطاع ديالك قبل المقابلة، خلي عندك 3 أرقام: الراتب المثالي، الراتب المقبول، والحد الأدنى. قدم قيمة: شنو غادي تجيب للشركة؟",
      },
    },
  ],
};

export default function SalaireMoyenPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">الرئيسية</Link>
        {" > "}
        <Link href="/emplois" className="hover:text-emerald-600">التوظيف</Link>
        {" > "}
        <span className="text-gray-900">متوسط الرواتب فالمغرب 2026</span>
      </nav>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">متوسط الرواتب في المغرب حسب القطاع والمهنة 2026</h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>.</span>
          <span>10 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">
        <p>شنو هو الراتب لي خاصك تطلب فالمقابلة الجاية؟ هاد السؤال كايقصف راس بزاف ديال الشباب فالمغرب. ف 2026، الرواتب فالمغرب تغيرات بزاف مقارنة بالسنوات اللي فاتت. بعض القطاعات شهدات زيادات كبيرة، وقطاعات أخرى بقات مستمرة ولا شهدات ركود. فهاد المقال، غادي نعطيك جميع المعلومات لي تحتاجها باش تعرف قيمة راتبك وسوق الشغل.</p>

        <p>قبل ما ندخلو فالأرقام، حاجة مهمة: الراتب فالمغرب كايختلف على حساب بزاف ديال العوامل: القطاع، المدينة، حجم الشركة، مستوى الخبرة، وحتى الجنس (للأسف). هاد الأرقام لي غادي نعطيو هي أرقام تقريبية مبنية على إحصائيات السوق ف 2026.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">1. متوسط الرواتب حسب القطاع ف 2026</h2>
        <p>كل قطاع عندو خصوصياتو فالأجور. هاد هو جدول يوضح المتوسطات الشهرية:</p>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-emerald-50">
                <th className="p-3 text-right font-semibold">القطاع</th>
                <th className="p-3 text-right font-semibold">مبتدئ</th>
                <th className="p-3 text-right font-semibold">متوسط الخبرة</th>
                <th className="p-3 text-right font-semibold">خبير (10+ سنين)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="p-3">التكنولوجيا (IT)</td><td className="p-3">6,000 - 8,000</td><td className="p-3">12,000 - 18,000</td><td className="p-3">20,000 - 30,000</td></tr>
              <tr><td className="p-3">البنوك والتأمينات</td><td className="p-3">7,000 - 9,000</td><td className="p-3">12,000 - 18,000</td><td className="p-3">20,000 - 30,000</td></tr>
              <tr><td className="p-3">الصناعة والطاقة</td><td className="p-3">5,000 - 7,000</td><td className="p-3">9,000 - 15,000</td><td className="p-3">16,000 - 25,000</td></tr>
              <tr><td className="p-3">الصحة (أطباء)</td><td className="p-3">8,000 - 12,000</td><td className="p-3">14,000 - 20,000</td><td className="p-3">22,000 - 35,000</td></tr>
              <tr><td className="p-3">التجارة والخدمات</td><td className="p-3">3,500 - 5,000</td><td className="p-3">6,000 - 9,000</td><td className="p-3">10,000 - 15,000</td></tr>
              <tr><td className="p-3">التعليم (قطاع خاص)</td><td className="p-3">4,000 - 5,000</td><td className="p-3">6,000 - 9,000</td><td className="p-3">10,000 - 14,000</td></tr>
              <tr><td className="p-3">الهندسة والمقاولات</td><td className="p-3">5,000 - 7,000</td><td className="p-3">9,000 - 14,000</td><td className="p-3">16,000 - 22,000</td></tr>
              <tr><td className="p-3">الصيدلة</td><td className="p-3">7,000 - 9,000</td><td className="p-3">11,000 - 16,000</td><td className="p-3">18,000 - 25,000</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">2. متوسط الرواتب حسب المدينة</h2>
        <p>الرواتب فالمغرب كاتختالف بزاف على حسب المدينة. علاش؟ لأن تكاليف العيش (coût de la vie) كاتختلف، وكاينة الشركات الكبرى كاتتركز فالمدن الكبيرة. مثلا، مهندس ف الدار البيضاء كايخلص 15,000 درهم فالشهر. نفس المهندس بنفس الخبرة ف فاس كايخلص 10,000 درهم. الفرق كبير حنى ف نفس الشركة أحيانا.</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>الدار البيضاء (Casablanca):</strong> 5,500 ل 25,000 درهم (أعلى متوسط وطني بسبب concentration ديال الشركات).</li>
          <li><strong>الرباط (Rabat):</strong> 5,000 ل 22,000 درهم (العاصمة فيها بزاف ديال الإدارات والوزارات).</li>
          <li><strong>طنجة (Tanger):</strong> 4,500 ل 18,000 درهم (قطاع السيارات والصناعة).</li>
          <li><strong>مراكش (Marrakech):</strong> 4,000 ل 15,000 درهم (السياحة والخدمات).</li>
          <li><strong>فاس (Fès):</strong> 3,500 ل 12,000 درهم.</li>
          <li><strong>أكادير (Agadir):</strong> 3,500 ل 13,000 درهم.</li>
          <li><strong>وجدة (Oujda):</strong> 3,000 ل 10,000 درهم.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">3. الراتب الإجمالي مقابل الراتب الصافي</h2>
        <p>هاد نقطة كايدوز عليها بزاف ديال الناس. فاش كاتشوف إعلان شغل، كايتكتب الراتب الإجمالي (Salaire Brut). ولكن شنو كايوصل ليديك هو الصافي (Salaire Net). الفرق هو الخصومات:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>CNSS (الصندوق الوطني للضمان الاجتماعي):</strong> 4.48% من الراتب الإجمالي (بحد أقصى 6,000 درهم يعني 268.8 درهم).</li>
          <li><strong>CIMR (التقاعد):</strong> حتى 3% من الراتب الإجمالي (حسب ما كاتعطي الشركة).</li>
          <li><strong>IR (الضريبة على الدخل - Impôt sur le Revenu):</strong> كاتحسب حسب الشريحة. من 0% (الأقل من 30,000 فالسنة) حتى 38% (أكثر من 180,000 فالسنة).</li>
          <li><strong>Mutuelle (التغطية الصحية):</strong> 1% ل 2% حسب الشركة.</li>
        </ul>
        <p>مثال تطبيقي: راتب 12,000 درهم Brut. CNSS: 268.8. CIMR: 360. Mutuelle: 120. IR: حوالي 1,200. الراتب الصافي: 12,000 - 1,948 = حوالي 10,052 درهم. يعني، الفرق بين الـ Brut والـ Net تقريبا 15 ل 20% حسب الراتب.</p>

        <h2 className="text-2xl font-bold text-gray-900">4. SMIG والحد الأدنى للأجور فالمغرب 2026</h2>
        <p>SMIG (Salaire Minimum Interprofessionnel Garanti) فالمغرب ف 2026 هو 3,300 درهم فالشهر فالصناعة والتجارة (48 ساعة فالأسبوع). SMAG (Salaire Minimum Agricole Garanti) للفلاحة هو 2,800 درهم فالشهر. هاد الأرقام كاتزاد كل سنة بنسبة 5 ل 10% حسب الظروف الاقتصادية. أي شركة كاتخلص أقل من SMIG كاتعرض نفسها للعقوبات القانونية.</p>

        <h2 className="text-2xl font-bold text-gray-900">5. نصائح لزيادة الراتب والمفاوضات</h2>
        <p>التفاوض على الراتب فالمغرب هو فن. خاصك تعرف شنو كاتسوى وتقدم حجج واقعية:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>البحث المسبق:</strong> قبل المقابلة، ابحث على متوسط الراتب فالقطاع ديالك. استعمل مواقع بحال Rekrute.com و Glassdoor و Tawdif Pro.</li>
          <li><strong>خلي عندك 3 أرقام:</strong> الراتب المثالي (لي باغيه)، الراتب المقبول (لي غادي تقبل بيه)، والحد الأدنى (تحت منو ما تجلسش).</li>
          <li><strong>قدم قيمة، مش حاجة:</strong> ما تقولش "بغيت راتب أكبر". قل "عندي خبرة X سنوات فهاد المجال، وكنت كادير مشاريع بقيمة Y. القيمة لي جايبة أتوقع راتب Z."</li>
          <li><strong>التدريب المستمر:</strong> شهادات مهنية جديدة كاتزيد فقيمتك فسوق الشغل. مثلا، شهادة PMP (إدارة المشاريع) كاتزيد الراتب ب 15 ل 25%.</li>
          <li><strong>التخصص:</strong> كلما كنت متخصص فمجال معين (AI، أمن سيبراني، تحليل البيانات)، كلما كان الراتب أعلى.</li>
          <li><strong>الانتقال للشركات الكبرى:</strong> الشركات المتعددة الجنسيات (OCP، Maroc Telecom، Attijariwafa Bank) كاتعطي رواتب أعلى من الشركات الصغيرة.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">6. الفرق بين الرجال والنساء فالأجور</h2>
        <p>واقع مر: الفرق فالأجور بين الرجال والنساء (Gender Pay Gap) موجود فالمغرب. الإحصائيات كاتشير أن النساء كايخلصو حوالي 15 ل 25% أقل من الرجال ف نفس المنصب ونفس الخبرة. هاد الفرق كايتصغر فالمدن الكبرى والشركات المتعددة الجنسيات لي عندها سياسات تنوع (Diversité et Inclusion). ولكن فالمدن الصغيرة والشركات العائلية، الفرق كايكون أكبر.</p>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">خاتمة</h2>
        <p>معرفة السوق هي مفتاح النجاح فالتفاوض على الراتب. ف 2026، فرص الشغل فالمغرب كاينين ولكن خاصك تكون عارف القيمة ديالك. استعد، ابحث، وكن واثق فاش كاتطلب. الراتب لي كايقبل بيه دابا كايحدد مسارك المهني ف السنوات الجاية. ما تكتاش بالأقل، عرف شنو كاتسوى.</p>
      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          {"اقرا أيضا: "}
          <Link href="/salary-calculator" className="text-emerald-600 underline hover:text-emerald-800">احسب راتبك الصافي</Link>
          {" | "}
          <Link href="/emplois/guides/cv-professionnel-maroc-2026" className="text-emerald-600 underline hover:text-emerald-800">CV professionnel Maroc 2026</Link>
        </p>
      </div>
    </article>
  );
}
