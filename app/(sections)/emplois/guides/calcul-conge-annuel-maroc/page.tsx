import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "طريقة حساب الإجازة السنوية في قانون الشغل المغربي 2026 | Tawdif Pro",
  description: "طريقة حساب الإجازة السنوية حسب القانون المغربي 2026. عدد أيام الإجازة حسب الأقدمية، الحقوق القانونية، وكيفية حساب تعويض الإجازة عند المغادرة.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "طريقة حساب الإجازة السنوية في قانون الشغل المغربي 2026",
  description: "طريقة حساب الإجازة السنوية حسب القانون المغربي. عدد الأيام حسب الأقدمية، الحقوق القانونية، وكيفية حساب تعويض الإجازة عند المغادرة.",
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
    { "@type": "ListItem", position: 3, name: "حساب الإجازة السنوية في قانون الشغل المغربي", item: "https://tawdifpro.ma/emplois/guides/calcul-conge-annuel-maroc" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هو عدد أيام الإجازة السنوية القانونية فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "القانون المغربي كايعطي 1.5 يوم إجازة عن كل شهر خدمة (أي 18 يوم فالسنة). ولكن هاد الأيام كاتحسب على 6 أيام فالأسبوع، يعني 18 يوم عمل (ما كايتحسبش فيهوم عطلة نهاية الأسبوع). بالنسبة للشباب لي عندهم أقل من 18 عام، القانون كايعطيهم 2 يوم عن كل شهر (24 يوم فالسنة).",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش كاتحسب الإجازة السنوية فاش كاتخرج من الخدمة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "فاش كاتخرج من الخدمة (استقالة ولا طرد)، كايتحسب تعويض الإجازة السنوية (Indemnite de Conges Payes) على حساب الأيام لي ما خديتيهاش. طريقة الحساب: (عدد أيام الإجازة المتبقية x الأجر اليومي). الأجر اليومي كايتحسب بقسمة الأجر الشهري على 26. مثال: باقي ليك 10 أيام وراتبك 5,000 درهم. الأجر اليومي = 5,000 / 26 = 192.30. التعويض = 1,923 درهم.",
      },
    },
    {
      "@type": "Question",
      name: "واش كايتزاد أو كايتنقص الإجازة حسب الأقدمية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "فالمغرب، القانون كايعطي نفس عدد أيام الإجازة (1.5 يوم فالشهر) بغض النظر على الأقدمية. يعني، حتى إلا كنتي فهاد الشركة 20 سنة، عندك نفس الحقوق ديال الأجير الجديد. ولكن، بزاف ديال الشركات كايعطيو أيام إضافية (contractual leave) كا تحفيز للأجراء القدامى. هاد الأيام الإضافية كاتعتمد على سياسة الشركة الداخلية (convention collective).",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي الإجراءات القانونية لطلب الإجازة السنوية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الإجراءات كاتختالف من شركة لشركة. ولكن القانون كايتطلب: تقديم طلب كتابي قبل الإجازة بمدة معقولة (عادة 15 يوم)، موافقة المشغل، وتوقيع على وثيقة الإجازة. المشغل ما عندوش الحق يرفض الإجازة إلا ف حالات الضرورة القصوى (بحال فترة الذروة، ولا غياب أجير آخر).",
      },
    },
    {
      "@type": "Question",
      name: "شنو كايتصرف للإجازة السنوية لي ما تاخدتش العام الماضي؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الإجازة السنوية القانونية عندها صلاحية وتاريخ انتهاء. القانون المغربي كاينص أن الأجير خاصو يأخذ الإجازة ف السنة لي بعدها (يعني إجازة 2026 خاصها تاخد ف 2027). إلا ما اخدتهاش، كاتضيع. ولكن، فاش كاتاخرج من الخدمة، كايتحسبو جميع الأيام الباقية.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي أيام العطل الرسمية فالمغرب واش كاتحتسب من الإجازة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أيام العطل الرسمية (jours feries) فالمغرب ما كاتحتسبش من الإجازة السنوية. العطل الرسمية هي: 1 يناير، 11 يناير، 1 ماي، 30 يوليوز (عيد العرش)، 14 غشت، 20 غشت، 21 غشت، 6 نونبر، 18 نونبر، بالإضافة للعطل الدينية: عيد الفطر، عيد الأضحى، رأس السنة الهجرية، وعيد المولد النبوي.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش كاتحسب إجازة الأمومة (Conge Maternite) فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "إجازة الأمومة (Conge de Maternite) فالمغرب هي 14 أسبوع (98 يوم) مدفوعة الأجر. كاتقسم: 7 أسابيع قبل الوضع و 7 أسابيع بعد الوضع. CNSS كاتخلص 100% من الأجر خلال هاد الفترة (بحد أقصى 6,000 درهم فالشهر). الشركة كاتكمل الفرق إلا كان الأجر كتر. ما كاتحتسبش من الإجازة السنوية.",
      },
    },
  ],
};

export default function CalculCongeAnnuelPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">الرئيسية</Link>
        {" > "}
        <Link href="/emplois" className="hover:text-emerald-600">التوظيف</Link>
        {" > "}
        <span className="text-gray-900">حساب الإجازة السنوية فالمغرب</span>
      </nav>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">طريقة حساب الإجازة السنوية في قانون الشغل المغربي 2026</h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>.</span>
          <span>7 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">
        <p>الإجازة السنوية (Conges Payes) هي حق أساسي عند كل أجير فالمغرب. ولكن، بزاف ما كايعرفوش كم يوم عندهم الحق، وإلا كايتزادو مع الأقدمية. فهاد المقال، غادي نجاوبو على هاد الأسئلة بالدارجة.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">1. أساسيات الإجازة السنوية فقانون الشغل المغربي</h2>
        <p>القانون المغربي (مدونة الشغل الفصول من 231 ل 245) كايعطي كل أجير الحق ف إجازة سنوية مدفوعة الأجر. المدة القانونية هي 1.5 يوم عن كل شهر خدمة. على أساس 6 أيام فالأسبوع، و 18 يوم فالسنة.</p>

        <h2 className="text-2xl font-bold text-gray-900">2. جدول حساب الإجازة السنوية</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-emerald-50">
                <th className="p-3 text-right font-semibold">مدة الخدمة</th>
                <th className="p-3 text-right font-semibold">أيام الإجازة (6 أيام/أسبوع)</th>
                <th className="p-3 text-right font-semibold">أيام الإجازة (5 أيام/أسبوع)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="p-3">شهر واحد</td><td className="p-3">1.5 يوم</td><td className="p-3">1.8 يوم</td></tr>
              <tr><td className="p-3">6 أشهر</td><td className="p-3">9 أيام</td><td className="p-3">10.8 يوم</td></tr>
              <tr><td className="p-3">سنة كاملة</td><td className="p-3">18 يوم</td><td className="p-3">21.6 يوم</td></tr>
              <tr><td className="p-3">سنتين</td><td className="p-3">36 يوم</td><td className="p-3">43.2 يوم</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">3. كيفية حساب تعويض الإجازة (Indemnite de Conges Payes)</h2>
        <p>فاش كاتخرج من الخدمة، كايتحسب تعويض عن الأيام لي ما خديتيهاش. طريقة الحساب: الأجر اليومي = الأجر الشهري / 26. التعويض = الأجر اليومي x عدد أيام الإجازة المتبقية.</p>

        <h2 className="text-2xl font-bold text-gray-900">4. حقوق إضافية: العطل الرسمية والإجازات الخاصة</h2>
        <p>العطل الرسمية ما كاتحتسبش من الإجازة السنوية. المغرب عندو 13 عطلة رسمية فالسنة. بالإضافة، القانون كايعطي إجازات خاصة: إجازة الزواج (3 أيام)، إجازة الوفاة (3 أيام)، إجازة الأمومة (14 أسبوع)، وإجازة الحج (حتى 15 يوم).</p>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">خاتمة</h2>
        <p>الإجازة السنوية هي حق، مش منحة. خطط لإجازتك مسبقا، وتأكد أنك أخذت كل أيامك القانونية.</p>
      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          {"اقرا أيضا: "}
          <Link href="/emplois/guides/indemnite-licenciement-maroc" className="text-emerald-600 underline hover:text-emerald-800">تعويض نهاية الخدمة فالمغرب</Link>
          {" | "}
          <Link href="/emplois/guides/salaire-moyen-maroc-par-secteur" className="text-emerald-600 underline hover:text-emerald-800">متوسط الرواتب فالمغرب</Link>
        </p>
      </div>
    </article>
  );
}
