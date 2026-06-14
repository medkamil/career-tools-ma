import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "تعويض نهاية الخدمة (الطرد) في المغرب 2026: طريقة الحساب الكاملة",
  description: "دليل شامل لطريقة حساب تعويض نهاية الخدمة في المغرب. حالات الاستحقاق، الشروط القانونية، جدول التعويضات حسب الأقدمية.",
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
    { "@type": "ListItem", position: 3, name: "تعويض نهاية الخدمة (الطرد) في المغرب 2026", item: "https://tawdifpro.ma/emplois/guides/indemnite-licenciement-maroc" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هي حالات استحقاق تعويض نهاية الخدمة فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "تعويض نهاية الخدمة (indemnite de licenciement) كتحق ف حالة الطرد غير المبرر، الطرد الاقتصادي، وإنهاء العقد من طرف المشغل دون سبب مشروع. فالمغرب، القانون كينص على أن كل أجير عندو أقدمية عامين على الأقل ف نفس الشركة عندو الحق ف تعويض نهاية الخدمة ف حالة الطرد. الحالات لي ما كتستحقش التعويض هي: الاستقالة (demission)، الطرد لسبب تأديبي خطير (faute grave)، وإنتهاء العقد محدد المدة (CDD) بشكل طبيعي.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش كتحسب indemnite de licenciement فالمغرب 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "طريقة الحساب كاتعتمد على الأقدمية والراتب. القانون المغربي كينص على: 96 ساعة من الأجر عن كل سنة للأقدمية من 2 ل 5 سنين، 144 ساعة من الأجر عن كل سنة للأقدمية من 6 ل 10 سنين، 192 ساعة من الأجر عن كل سنة للأقدمية من 11 ل 15 سنة، 240 ساعة من الأجر عن كل سنة للأقدمية من 16 ل 20 سنة، 264 ساعة من الأجر عن كل سنة للأقدمية من 21 ل 25 سنة، و 276 ساعة من الأجر عن كل سنة للأقدمية فوق 25 سنة. مثال: أجير عندو 8 سنين فشركة وراتبو 5000 درهم فالشهر، كيسال 5000 x 12 / 2080 ساعة = 28.84 درهم فالساعة. إذن 8 سنين x 144 ساعة x 28.84 = 33,223 درهم.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هو الفرق بين indemnite de licenciement و indemnite de preavis؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "هادو جوج حوايج مختلفين. Indemnite de preavis (تعويض الإخطار) هي التعويض لي كاتخلصو ف حالة ما خدمتيش فترة الإخطار (فترة notification). فالمغرب، فترة الإخطار كاتكون 8 أيام إذا كان الأجر كل شهر، شهر واحد إذا كان الأجر كل شهر والأقدمية أقل من 5 سنين، شهرين إذا الأقدمية فوق 5 سنين. أما indemnite de licenciement فهي تعويض نهاية الخدمة لي كاتحسب على حساب الأقدمية والراتب.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي المدة القانونية للإخطار (preavis) فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "المدة القانونية للإخطار فالمغرب كاتعتمد على طريقة الأداء والأقدمية: بالنسبة للأجراء اللي كيتقاضاو الأجر كل شهر، الفترة هي شهر واحد إلا كانت الأقدمية أقل من 5 سنين، وشهرين إلا كانت الأقدمية فوق 5 سنين. بالنسبة للأجراء اللي كيتقاضاو الأجر كل أسبوع أو كل 15 يوم، الفترة هي 8 أيام.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نقدر نطالب بحقوقي ف حالة الطرد التعسفي؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ف حالة الطرد التعسفي (licenciement abusif)، عندك الحق ف تعويض إضافي. أول حاجة خاصك تجمع الوثائق: عقد العمل، آخر 12 شهر من شهادة الأجر (bulletins de paie)، إخطار الطرد، ومراسلات مع المشغل. بعدها، تقدّم بشكاية للمحكمة الاجتماعية (tribunal social) فمكان العمل. عندك 60 يوم من تاريخ الطرد باش تقدّم الشكاية. المحكمة كاتحدد التعويض على حساب: الأقدمية، الظروف ديال الطرد، والضرر لي لحق بيك.",
      },
    },
    {
      "@type": "Question",
      name: "واش التعويض كاين ف حالة الـ demission (الاستقالة)؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "لا، ف حالة الاستقالة (demission) ما كاينش تعويض نهاية الخدمة. القانون المغربي كايعتبرها قرار طوعي من الأجير، وبالتالي المشغل ماشي ملزم بدفع indemnite de licenciement. ولكن ف بعض الحالات، تقدر تتفاوض مع المشغل على تعويض ودي (indemnite de depart a l amiable) خصوصاً إلا كانت عندك أقدمية كبيرة.",
      },
    },
  ],
};

const schemas = [articleSchema, breadcrumbSchema, faqSchema];

export default function IndemniteLicenciementPage() {
  return (
    <ArticleLayout
      schemas={schemas}
      breadcrumbs={[
        { name: "قسم التوظيف", href: "/emplois" },
        { name: "تعويض نهاية الخدمة (الطرد) في المغرب 2026", href: "/emplois/guides/indemnite-licenciement-maroc" }
      ]}
      title="تعويض نهاية الخدمة (الطرد) في المغرب 2026: طريقة الحساب الكاملة"
      readingTime="10 دقائق قراءة"
    >
<p>أول حاجة خاصك تعرفها: التعويض ديال نهاية الخدمة (indemnite de licenciement) هو حق قانوني عند كل أجير مغربي. ولكن، بزاف ديال الناس ما كيعرفوش كيفاش كايحسبو ولا شنو هي الحالات لي كاتستحق. والنتيجة؟ بزاف ديال الأجراء كايخسرو حقوقهم بسباب المعلومات الناقصة.</p>
        <p>سعيد من الدار البيضاء، عندو 12 سنة فشركة ديال النسيج. ف2025، الشركة عطاتو الطرد بسباب إعادة هيكلة. سعيد ماكانش عارف شنو هي حقوقو. الله أعطاه صديق جاب ليه محامي، وقادرو يجيبو 85 ألف درهم تعويض. فهاد المقال، غادي نعرفوك بكل شي تحتاج تعرف على تعويض نهاية الخدمة فالمغرب 2026.</p>

        <hr />

        <h2>1. شنو هو تعويض نهاية الخدمة (Indemnite de Licenciement)؟</h2>
        <p>التعويض ديال نهاية الخدمة هو مبلغ مالي كايدفعو المشغل للأجير ف حالة إنهاء عقد الشغل. الهدف ديالو هو تعويض الأجير على الضرر لي سبق ليه بسبب فقدان الخدمة. هاد الحق كاين ف القانون المغربي ف الظهير الشريف رقم 1.03.194 (مدونة الشغل).</p>
        <p>ولكن، ما كل حالة فيها تعويض. فيه حالات كاتستحق وفيه حالات لا. المهم أنك تعرف الفرق باش ما تضيعش حقوقك.</p>

        <h2>2. شروط استحقاق التعويض</h2>
        <ul>
          <li><strong>الأقدمية:</strong> خاصك تكون عندك سنتين كاملين على الأقل ف نفس الشركة. إلا عندك أقل من سنتين، ما كاتستحقش التعويض.</li>
          <li><strong>نوع إنهاء العقد:</strong> التعويض كاتستحقو ف حالة الطرد (licenciement)، بحال الطرد الاقتصادي، الطرد لسبب تقني، وإنهاء العقد بسبب فسخ العلاقة من طرف المشغل. ما كاتستحقش ف حالة الاستقالة (demission) ولا الطرد لسبب تأديبي خطير (faute grave).</li>
        </ul>

        <h2>3. طريقة حساب التعويض بالتفصيل 2026</h2>
        <p>هنا غادي نعطيك الطريقة العملية باش تحسب التعويض ديالك. الحساب كايختالف على حسب الأقدمية والراتب.</p>

        <h3 className="text-xl font-bold text-gray-900">3.1. جدول الساعات حسب الأقدمية</h3>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-emerald-50">
                <th className="p-3 text-right font-semibold text-gray-900">فترة الأقدمية</th>
                <th className="p-3 text-right font-semibold text-gray-900">عدد الساعات عن كل سنة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="p-3">من 2 ل 5 سنين</td><td className="p-3 font-medium">96 ساعة</td></tr>
              <tr><td className="p-3">من 6 ل 10 سنين</td><td className="p-3 font-medium">144 ساعة</td></tr>
              <tr><td className="p-3">من 11 ل 15 سنة</td><td className="p-3 font-medium">192 ساعة</td></tr>
              <tr><td className="p-3">من 16 ل 20 سنة</td><td className="p-3 font-medium">240 ساعة</td></tr>
              <tr><td className="p-3">من 21 ل 25 سنة</td><td className="p-3 font-medium">264 ساعة</td></tr>
              <tr><td className="p-3">فوق 25 سنة</td><td className="p-3 font-medium">276 ساعة</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-gray-900">3.2. مثال تطبيقي على الحساب</h3>
        <p>فاطمة كاتشتغل فشركة ديال المحاسبة من 2017. راتبها الصافي (salaire net) هو 6,000 درهم فالشهر. الشرطة دفاتها ف 2026 بدون سبب مشروع.</p>
        <p><strong>النتيجة:</strong> 9 سنين x 144 ساعة x 34.61 = <strong>44,855 درهم</strong>.</p>

        <h2>4. الإجراءات القانونية للمطالبة بالحقوق</h2>
        <ol>
          <li><strong>جمع الوثائق:</strong> عقد العمل، آخر 12 شهر من bulletins de paie، إخطار الطرد، جميع المراسلات مع المشغل، وشواهد العمل.</li>
          <li><strong>التشاور مع المفتشية:</strong> قبل المحكمة، تقدر تمشي لـ Inspection du Travail (مفتشية الشغل) فالمدينة ديالك. المفتش كايقدر يتوسط بينك وبين المشغل.</li>
          <li><strong>الشكاية للمحكمة:</strong> إلا فشلت الوساطة، تقدّم بشكاية للمحكمة الاجتماعية (Tribunal Social). عندك 60 يوم من تاريخ الطرد باش تعمل هاد الشي.</li>
          <li><strong>محامي متخصص:</strong> نصيحة: لازمك محامي متخصص ف قانون الشغل. المحامي كايعرف كيفاش يكتب الشكاية وكيفاش يمثل أحسن.</li>
        </ol>

        <h2>5. الحالات لي ما كاتستحقش فيها التعويض</h2>
        <ul>
          <li><strong>الاستقالة (Demission):</strong> إلا مشيتي بنفسك، ما كاتستحقش التعويض.</li>
          <li><strong>الطرد لسبب تأديبي خطير (Faute Grave):</strong> بحال السرقة، العنف، الغش، وإفشاء الأسرار المهنية.</li>
          <li><strong>الاتفاق الودي (Depart a l amiable):</strong> ف هاد الحالة، كاين تفاوض على تعويض ودي (وهو غير ملزم قانونياً).</li>
          <li><strong>بلوغ سن التقاعد:</strong> فالمغرب، سن التقاعد هو 63 عام. إلا بلغتي هاد السن، ما كاتستحقش indemnite de licenciement.</li>
        </ul>

        <hr />

        <h2>خاتمة</h2>
        <p>تعويض نهاية الخدمة هو حق قانوني أساسي لأي أجير فالمغرب. المهم أنك تكون عارف شنو هي شروط الاستحقاق وكيفاش كايحسب التعويض. معلوماتك كايدوك على حقوقك.</p>
    </ArticleLayout>
  );
}
