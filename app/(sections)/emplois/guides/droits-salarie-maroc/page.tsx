import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "حقوق الأجير في القانون المغربي 2026 (دليل شامل) | Tawdif Pro",
  description: "حقوق الأجير في القانون المغربي 2026: العطل المؤدى عنها، التعويضات، إنهاء العقد، وساعات العمل. دليل شامل لكل مستخدم.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "حقوق الأجير في القانون المغربي 2026 (دليل شامل)",
  description: "دليل شامل لحقوق الأجير في قانون الشغل المغربي.",
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
    { "@type": "ListItem", position: 3, name: "حقوق الأجير في القانون المغربي 2026", item: "https://tawdifpro.ma/emplois/guides/droits-salarie-maroc" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هي ساعات العمل القانونية فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "القانون المغربي (مدونة الشغل) كاتحدد ساعات العمل ف 44 ساعة فالأسبوع فجميع القطاعات باستثناء الفلاحة (48 ساعة). بعد هاد الساعات، كاتحتسب التعويضات الإضافية (Heures supplémentaires) بنسبة 25% زيادة للساعات النهارية و 50% ليلاً. الأحد هو يوم الراحة الأسبوعي القانوني.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هو الحق فالعطلة السنوية (Congé annuel) فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "كل أجير عندو الحق ف 18 يوم عمل (أي 3 أسابيع) من العطلة السنوية المؤدى عنها بعد 6 أشهر من الخدمة المستمرة. بالنسبة للعمال والموظفين أقل من 18 سنة، الحق هو 24 يوم. كايزيد يوم على كل 5 سنين من الأقدمية. العطلة كاتحسب على أساس 6 أيام فالأسبوع.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي حقوقي فاش كاينهي المشغل الخدمة معايا (Licenciement)؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "فاش كاينهي المشغل الخدمة، عندك الحق ف: 1) تعويض الفصل (Indemnité de licenciement) حسب سنوات الخدمة: 96 ساعة من الأجر للأقل من 5 سنين، 144 ساعة من 5 ل 10 سنين، 192 ساعة من 10 ل 15 سنة، 240 ساعة من 15 ل 20 سنة، 264 ساعة من 20 ل 25 سنة، 288 ساعة أكثر من 25 سنة. 2) تعويض العطلة غير المستعملة. 3) شهادة الخدمة (Certificat de travail).",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي العطل الرسمية المؤدى عنها فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "العطل الرسمية المؤدى عنها فالمغرب: 1 يناير (رأس السنة الميلادية)، 11 يناير (تقديم وثيقة الاستقلال)، 1 ماي (عيد الشغل)، 30 يوليوز (عيد العرش)، 14 غشت (وادي الذهب)، 20 غشت (ثورة الملك والشعب)، 21 غشت (عيد الشباب)، 6 نونبر (المسيرة الخضراء)، 18 نونبر (عيد الاستقلال)، بالإضافة للعطل الدينية: عيد الفطر (يومين)، عيد الأضحى (يومين)، فاتح محرم، عيد المولد النبوي.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هو الأجر الأدنى (SMIG) فالمغرب 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SMIG (Salaire Minimum Interprofessionnel Garanti) فالمغرب 2026 هو 16.52 درهم فالساعة للقطاعات الصناعية والتجارية والمهن الحرة. كايحتسب على أساس 44 ساعة فالأسبوع. يعني الأجر الشهري الأدنى هو 3,171.84 MAD. SMAG (Salaire Minimum Agricole) هو 15.82 درهم فالساعة للقطاع الفلاحي.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي Duration ديال فترة التجربة (Période d&apos;essai) فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "فترة التجربة فالقانون المغربي: للتأطير والأطر العليا: 3 أشهر قابلة للتجديد مرة وحدة (6 أشهر كحد أقصى). لغير المؤطرين: شهر ونصف. ف هاد الفترة، أي طرف يقدر ينهي العقد بلا تعويض. ولكن خاص الإخطار: 8 أيام للمستخدمين العاديين، 15 يوم للأطر.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي حقوق الأم العاملة فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الأم العاملة عندها الحق ف: 1) عطلة الأمومة (Congé de maternité): 14 أسبوع (98 يوم) مؤدى عنها بالكامل. 2) فترات رضاعة (Heures d&apos;allaitement): ساعة فاليوم لمدة 6 أشهر بعد العودة من العطلة. 3) منع الفصل: لا يمكن طرد المرأة الحامل ولا الأم فالعطلة. 4) عمل ليلي: ممنوع تشغيل النساء الحوامل والمرضعات فالعمل الليلي.",
      },
    },
  ],
};

export default function DroitsSalarieMarocPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">الرئيسية</Link>
        {" > "}
        <Link href="/emplois" className="hover:text-emerald-600">التوظيف</Link>
        {" > "}
        <span className="text-gray-900">حقوق الأجير في القانون المغربي 2026</span>
      </nav>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">حقوق الأجير في القانون المغربي 2026 (دليل شامل)</h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>.</span>
          <span>13 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">

        <p>مدونة الشغل المغربية (Code du Travail) هي القانون لي كايحمي حقوق الأجير والمشغل ف نفس الوقت. ف 2026، بزاف ديال المستخدمين ما كايعرفوش حقوقهم الكاملة. هادشي كايخلّيهم عرضة للاستغلال بدون ما يدريو.</p>

        <p>هاد المقال غادي يشرحلك حقوقك كأجير فالمغرب بالتفصيل. من العطل والتعويضات لساعات العمل وإنهاء العقد. دليل كامل باش تحمي راسك.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">1. ساعات العمل (Horaires de Travail)</h2>
        <p>القانون المغربي كايحدد ساعات العمل ف:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>القطاعات التجارية والصناعية والحرفية:</strong> 44 ساعة فالأسبوع (8.8 ساعة فاليوم).</li>
          <li><strong>القطاع الفلاحي:</strong> 48 ساعة فالأسبوع.</li>
          <li><strong>العمل الإضافي (Heures supplémentaires):</strong> الزيادة 25% ف النهار و 50% ف الليل (من 22:00 ل 6:00).</li>
          <li><strong>الراحة الأسبوعية:</strong> الأحد هو اليوم القانوني للراحة. أو يوم كامل بعد 6 أيام عمل.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">2. العطل السنوية (Congés Annuels)</h2>
        <p>كل أجير عندو الحق ف 18 يوم عمل من العطلة السنوية المؤدى عنها بعد 6 أشهر من الخدمة. هاد العطلة كاتزاد مع الأقدمية:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li>من 0 ل 5 سنين: 18 يوم (3 أسابيع).</li>
          <li>من 5 ل 10 سنين: 19 يوم.</li>
          <li>من 10 ل 15 سنة: 20 يوم.</li>
          <li>من 15 ل 20 سنة: 21 يوم.</li>
          <li>هاد الزيادة مستمرة: يوم كل 5 سنين.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">3. التعويضات (Indemnités)</h2>

        <h3 className="text-xl font-bold text-gray-900">3.1. تعويض الفصل (Indemnité de Licenciement)</h3>
        <p>إذا كان الفصل غير قانوني، أو حتى قانوني ولكن بسبب اقتصادي، عندك الحق فتعويض. كايحتسب على أساس:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li>أقل من 5 سنين: 96 ساعة من الأجر (12 يوم).</li>
          <li>5 ل 10 سنين: 144 ساعة (18 يوم).</li>
          <li>10 ل 15 سنة: 192 ساعة (24 يوم).</li>
          <li>15 ل 20 سنة: 240 ساعة (30 يوم).</li>
          <li>20 ل 25 سنة: 264 ساعة (33 يوم).</li>
          <li>أكثر من 25 سنة: 288 ساعة (36 يوم).</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900">3.2. تعويض العطلة غير المستعملة</h3>
        <p>فاش كاتخرج من الخدمة، المشغل خاصو يدفع ليك تعويض على العطل لي ما خديتيهاش. كايحتسب على أساس 1.5 يوم أجر لكل شهر من الخدمة فالسنة لي فاتت.</p>

        <h2 className="text-2xl font-bold text-gray-900">4. إنهاء العقد (Rupture du Contrat)</h2>

        <h3 className="text-xl font-bold text-gray-900">4.1. الاستقالة (Démission)</h3>
        <p>عندك الحق تستقيل ف أي وقت. ولكن خاصك تحترم مدة الإخطار (Préavis):</p>
        <ul className="list-disc space-y-2 pr-6">
          <li>الأجراء العاديون: 8 أيام.</li>
          <li>الأطر (Cadres): شهر واحد.</li>
          <li>المسيرون (Dirigeants): شهرين.</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900">4.2. الفصل (Licenciement)</h3>
        <p>المشغل ما يقدرش يفصلك غير فحالات محددة فالقانون: خطأ جسيم، أسباب اقتصادية، عدم الكفاءة. ف كل الحالات، خاص المشغل يتبع الإجراءات القانونية: استدعاء للاستماع، رسالة بالفصل، إشعار CNSS.</p>

        <h2 className="text-2xl font-bold text-gray-900">5. التغطية الصحية (CNSS)</h2>
        <p>CNSS هي الضمان الاجتماعي فالمغرب. المشغل خاصو يسجلك ف CNSS ف أول 30 يوم من الخدمة. التغطية كاتشمل:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>AMO (التأمين الإجباري عن المرض):</strong> كايغطي 70-90% من مصاريف العلاج.</li>
          <li><strong>التقاعد:</strong> معاش بعد 65 سنة (على الأقل 3240 يوم من التصريح).</li>
          <li><strong>تعويضات العائلات (Allocations Familiales):</strong> 250 درهم فالشهر لكل طفل (3 أطفال كحد أقصى).</li>
          <li><strong>تعويضات البطالة:</strong> إذا توفرت الشروط.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">6. العطل الرسمية المؤدى عنها</h2>
        <p>فالمغرب 2026، العطل الرسمية المؤدى عنها (Fêtes légales payées) هي:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li>1 يناير: رأس السنة الميلادية.</li>
          <li>11 يناير: تقديم وثيقة الاستقلال.</li>
          <li>1 ماي: عيد الشغل.</li>
          <li>30 يوليوز: عيد العرش.</li>
          <li>14 غشت: ذكرى وادي الذهب.</li>
          <li>20 غشت: ثورة الملك والشعب.</li>
          <li>21 غشت: عيد الشباب.</li>
          <li>6 نونبر: المسيرة الخضراء.</li>
          <li>18 نونبر: عيد الاستقلال.</li>
          <li>العطل الدينية (حسب التقويم الهجري): عيد الفطر (يومين)، عيد الأضحى (يومين)، فاتح محرم، المولد النبوي.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">7. حقوق المرأة العاملة</h2>
        <p>مدونة الشغل كاتعطي حقوق خاصة للمرأة:</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>عطلة الأمومة:</strong> 14 أسبوع (98 يوم) مؤدى عنها.</li>
          <li><strong>فترات الرضاعة:</strong> ساعة فاليوم مخصصة للرضاعة (مؤدى عنها) لمدة 6 أشهر.</li>
          <li><strong>منع التمييز:</strong> القانون كايمنع التمييز بين الرجل والمرأة فالأجر والتوظيف.</li>
          <li><strong>حماية من الفصل:</strong> ما يمكنش طرد المرأة بسبب الحمل ولا الأمومة.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">8. كيفاش تحمي حقوقك</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>الوثائق:</strong> احتفظ بنسخة من العقد، وثائق الأجر، وكل المراسلات.</li>
          <li><strong>CNSS:</strong> تأكد من تسجيلك ف CNSS (تقدر تتحقق من l inscriptions عبر الموقع dina.ma).</li>
          <li><strong>مفتشية الشغل (Inspection du Travail):</strong> إذا كان عندك مشكل، تقدر تقدم شكوى لمفتش الشغل الجهوي.</li>
          <li><strong>المحكمة:</strong> يمكنك اللجوء للمحكمة الاجتماعية (Tribunal Social) خلال 90 يوم من تاريخ النزاع.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">9. جدول تعويضات الفصل حسب سنوات الأقدمية</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b px-4 py-2 text-right font-medium">سنوات الخدمة</th>
                <th className="border-b px-4 py-2 text-right font-medium">عدد الساعات</th>
                <th className="border-b px-4 py-2 text-right font-medium">عدد الأيام (تقديري)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border-b px-4 py-2">أقل من 5 سنين</td><td className="border-b px-4 py-2">96 ساعة</td><td className="border-b px-4 py-2">12 يوم</td></tr>
              <tr><td className="border-b px-4 py-2">5 - 10 سنين</td><td className="border-b px-4 py-2">144 ساعة</td><td className="border-b px-4 py-2">18 يوم</td></tr>
              <tr><td className="border-b px-4 py-2">10 - 15 سنة</td><td className="border-b px-4 py-2">192 ساعة</td><td className="border-b px-4 py-2">24 يوم</td></tr>
              <tr><td className="border-b px-4 py-2">15 - 20 سنة</td><td className="border-b px-4 py-2">240 ساعة</td><td className="border-b px-4 py-2">30 يوم</td></tr>
              <tr><td className="border-b px-4 py-2">20 - 25 سنة</td><td className="border-b px-4 py-2">264 ساعة</td><td className="border-b px-4 py-2">33 يوم</td></tr>
              <tr><td className="border-b px-4 py-2">أكثر من 25 سنة</td><td className="border-b px-4 py-2">288 ساعة</td><td className="border-b px-4 py-2">36 يوم</td></tr>
            </tbody>
          </table>
        </div>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">ختاما</h2>
        <p>معرفة حقوقك كأجير فالمغرب هو أفضل حماية ليك. القانون كاين ولكن خاصك تعرف كيفاش تستعملو. ف 2026، سوق الشغل فالمغرب كايتطور، وحماية المستخدمين كاتزيد. كن واعي بحقوقك، واعرف وين تروح إذا حسيتي بلي تم انتهاكها.</p>

      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          {"اقرا أيضا: "}
          <Link href="/emplois/guides/cdd-cdi-maroc" className="text-emerald-600 underline hover:text-emerald-800">الفرق بين CDD و CDI</Link>
          {" | "}
          <Link href="/emplois/guides/indemnite-licenciement-maroc" className="text-emerald-600 underline hover:text-emerald-800">تعويضات الفصل</Link>
          {" | "}
          <Link href="/salary-calculator" className="text-emerald-600 underline hover:text-emerald-800">احسب راتبك الصافي</Link>
        </p>
      </div>
    </article>
  );
}
