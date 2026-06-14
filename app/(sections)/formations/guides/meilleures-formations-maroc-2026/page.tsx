import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "أفضل 10 تكوينات مهنية مطلوبة في المغرب 2026 (OFPPT + تكوينات مجانية)",
  description: "دليل التكوين المهني في المغرب 2026. أفضل 10 تخصصات مطلوبة فسوق الشغل، شروط التسجيل في OFPPT، تكوينات مجانية بشهادات معتمدة، والرواتب المتوقعة لكل تخصص.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "أفضل 10 تكوينات مهنية مطلوبة في المغرب 2026 (OFPPT + تكوينات مجانية)",
  description: "دليل التكوين المهني في المغرب 2026. أفضل 10 تخصصات مطلوبة فسوق الشغل، شروط التسجيل في OFPPT، تكوينات مجانية بشهادات معتمدة، والرواتب المتوقعة لكل تخصص.",
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
    { "@type": "ListItem", position: 2, name: "قسم التكوين", item: "https://tawdifpro.ma/formations" },
    { "@type": "ListItem", position: 3, name: "أفضل 10 تكوينات مهنية مطلوبة في المغرب 2026", item: "https://tawdifpro.ma/formations/guides/meilleures-formations-maroc-2026" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هي أحسن التكوينات فالمغرب ل 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "من أحسن التكوينات المطلوبة فالمغرب 2026: تطوير الويب والموبايل، التسويق الرقمي، المحاسبة والتدبير، التمريض والرعاية الصحية، الكهرباء والطاقات المتجددة، السياحة والفندقة، والخدمات اللوجستية. هاد التخصصات كتقدم فرص شغل واعدة فالسوق المغربي.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نسجل ف OFPPT 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التسجيل ف OFPPT كيتم عبر الموقع الرسمي www.ofppt.ma فالصيف (يونيو-غشت). خاصك تختار التخصص، تدخل المعلومات الشخصية، وتقدم الشهادات المطلوبة. بعدها كتجيك نتائج الانتقاء، وإلا نجحتي كتسجل فالمعهد لي تم اختياره. لازمك شهادة البكالوريا لبعض التخصصات، والثالثة إعدادي لتخصصات أخرى.",
      },
    },
    {
      "@type": "Question",
      name: "واش كاين تكوينات مجانية فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "إيوه بزاف، تقدر تلقا تكوينات مجانية فمنصات بحال Coursera مع برنامج منحة «مهارات من Google»، و DigiSkills من الوكالة الوطنية للتنمية الرقمية. وكاينين حتى تكوينات مجانية فمراكز التكوين المهني العمومية. بعض المنصات كتوفر شهادات مجانية عند الإتمام.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هو التكوين الأكثر طلباً فسوق الشغل المغربي؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التكوين فمجال التكنولوجيا (Développement Web et Mobile) هو الأكثر طلباً فالمغرب 2026. بعده كيجي التسويق الرقمي والمحاسبة. الشركات فالمغرب كتقلب على التقنيين المتخصصين فالمجالات الرقمية، خصوصاً مع التحول الرقمي لي كتشهده البلاد.",
      },
    },
    {
      "@type": "Question",
      name: "واش شهادة OFPPT معترف بها فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "إيوه، شهادات OFPPT معترف بها رسمياً من الدولة المغربية. كتعتبر شهادات وطنية وتقدر تخدم بيهم فالقطاعين العام والخاص. بعض التخصصات كتعطيك حتى الإمكانية ديال متابعة الدراسات العليا. ولكن المهم هو السمعة والمستوى لي كتخرج بيه.",
      },
    },
  ],
};

export default function FormationsGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />

      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">
          أفضل 10 تكوينات مهنية مطلوبة في المغرب 2026
        </h1>
        <p className="mt-3 text-lg text-gray-600">(OFPPT + تكوينات مجانية)</p>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>•</span>
          <span>10 دقائق قراءة</span>
        </div>
      </header>

      <div className="space-y-6 text-base leading-8 text-gray-800">
        <p className="text-lg font-medium text-emerald-700">
          سوق الشغل فالمغرب 2026 فتحة تحول كبير. المهن التقليدية باقين، ولكن المهن الجديدة لي عندها علاقة بالتكنولوجيا والتسويق الرقمي ولا الخدمات الحقيقية راه ولات هي المسيطرة.
        </p>

        <p>
          صراحة، شحال من واحد كيخرج من المدرسة ولا الجامعة وما كيعرفش فين يوجه. هاد الشي طبيعي. ولكن، شنو الفرق بين لي كيلقى خدمة بسرعة ولي كيبقى عاطل؟ بكل بساطة، <strong>le choix de la formation</strong>.
        </p>

        <p>
          فهاد المقال، غنستعرض أفضل 10 تكوينات مهنية فالمغرب 2026، مع الرواتب التقريبية، وفرص الشغل، وكيفاش تقدر تسجل فيها عبر OFPPT أو بلا ما تخلص حتى درهم.
        </p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">1. Développement Web et Mobile</h2>
        <p>
          <strong>لماذا هو مطلوب؟</strong> التحول الرقمي فالمغرب ماشي ترف، ولى ضرورة. الشركات كلها باغية تكون عندها موقع، تطبيق، ولا présence numérique.
        </p>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>المؤسسات:</strong> OFPPT (تخصص Développement Digital), YouCode, 1337.</li>
          <li><strong>المدة:</strong> 1 إلى 2 سنين.</li>
          <li><strong>الراتب التقريبي:</strong> من 6,000 DH (مبتدئ) إلى 18,000+ DH (محترف).</li>
          <li><strong>نصيحة:</strong> قبل ما تبدأ، استعمل <Link href="/salary-calculator" className="font-medium text-emerald-600 underline hover:text-emerald-700">حاسبة الراتب</Link> باش تعرف صافي راتبك المتوقع بعد الضرائب فهاد المجال.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">2. Marketing Digital et Social Media</h2>
        <p>
          الشركات فالمغرب بدات تفهم أن publicité التقليدية ولات غالية وما كتعطيش النتائج. الحل؟ التسويق الرقمي. من Facebook Ads ل TikTok و SEO.
        </p>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>المؤسسات:</strong> OFPPT (Technicien en Marketing Digital), ISTA, تكوينات خاصة.</li>
          <li><strong>المدة:</strong> 6 شهور إلى سنتين.</li>
          <li><strong>الراتب التقريبي:</strong> من 4,000 DH إلى 15,000 DH.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">3. Génie Civil et BTP</h2>
        <p>
          قطاع البناء والتعمير فالمغرب راه باقي كينمو. المشاريع الكبرى (الموانئ، الطرق السيارة، الملاعب) كتطلب تقنيين فمجال الهندسة المدنية.
        </p>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>المؤسسات:</strong> OFPPT (Technicien Spécialisé en BTP), EST.</li>
          <li><strong>المدة:</strong> 2 سنين.</li>
          <li><strong>الراتب التقريبي:</strong> من 5,000 DH إلى 14,000 DH.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">4. Comptabilité et Gestion</h2>
        <p>
          المحاسبة هي لغة الأعمال. كل شركة، صغيرة ولا كبيرة، كتحتاج محاسب. المغرب مازال فيه طلب كبير على هاد التخصص.
        </p>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>المؤسسات:</strong> OFPPT (Technicien en Gestion), ISTA, ISCAE.</li>
          <li><strong>المدة:</strong> 2 سنين.</li>
          <li><strong>الراتب التقريبي:</strong> من 4,500 DH إلى 12,000 DH.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">5. Infirmier et Soins de Santé</h2>
        <p>
          قطاع الصحة فالمغرب كيعرف طلب كبير على الممرضين والتقنيين الصحيين. المستشفيات العمومية والخاصة كتقلب على الكفاءات.
        </p>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>المؤسسات:</strong> معاهد التكوين فparamédical, OFPPT.</li>
          <li><strong>المدة:</strong> 3 سنين.</li>
          <li><strong>الراتب التقريبي:</strong> من 5,000 DH إلى 10,000 DH.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">6. Électricité et Énergies Renouvelables</h2>
        <p>
          المغرب كيستثمر بزاف فالطاقة المتجددة (نور ورزازات، مزارع الرياح). هاد التخصص عندو مستقبل واعد.
        </p>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>المؤسسات:</strong> OFPPT (Technicien en Énergies Renouvelables), IRESEN.</li>
          <li><strong>المدة:</strong> 2 سنين.</li>
          <li><strong>الراتب التقريبي:</strong> من 5,000 DH إلى 13,000 DH.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">7. Hôtellerie et Tourisme</h2>
        <p>
          المغرب وجهة سياحية عالمية. الفنادق، المطاعم، والمنتجعات كتقلب باستمرار على تقنيين فمجال الفندقة.
        </p>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>المؤسسات:</strong> OFPPT (Technicien en Hôtellerie), ITHT.</li>
          <li><strong>المدة:</strong> 2 سنين.</li>
          <li><strong>الراتب التقريبي:</strong> من 3,500 DH + خدمة إلى 9,000 DH.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">8. Logistique et Transport</h2>
        <p>
          طنجة ميناء كبير، الدار البيضاء مركز اقتصادي. قطاع اللوجستيك والخدمات اللوجستية كيعرف طلب متزايد.
        </p>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>المؤسسات:</strong> OFPPT (Technicien en Logistique), ISTA.</li>
          <li><strong>المدة:</strong> 2 سنين.</li>
          <li><strong>الراتب التقريبي:</strong> من 5,000 DH إلى 12,000 DH.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">9. Cybersécurité</h2>
        <p>
          مع زيادة التهديدات الرقمية والأمن السيبراني ولا ضروري. المغرب بدا يستثمر بزاف فهاد المجال، خصوصاً فالمؤسسات المالية والإدارات العمومية.
        </p>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>المؤسسات:</strong> OFPPT (تخصص Sécurité Informatique), تكوينات متخصصة.</li>
          <li><strong>المدة:</strong> 2 سنين.</li>
          <li><strong>الراتب التقريبي:</strong> من 8,000 DH إلى 25,000 DH.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">10. Artisanat et Métiers Traditionnels</h2>
        <p>
          راه الصناعة التقليدية عندنا فالمغرب عندها قيمة كبيرة. الزليج، النقش على الخشب، الخياطة التقليدية. هاد المهن عندها سوق داخلي وحتى خارجي.
        </p>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>المؤسسات:</strong> معاهد الصناعة التقليدية، OFPPT, التعاونيات.</li>
          <li><strong>المدة:</strong> 1 إلى 3 سنين.</li>
          <li><strong>الدخل التقريبي:</strong> متفاوت حسب المنتوج والطلب.</li>
        </ul>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">كيفاش تسجل ف OFPPT 2026؟</h2>
        <p>
          التسجيل ف OFPPT عملية سهلة ولكن خاصك تجهز الوثائق:
        </p>
        <ol className="list-decimal space-y-2 pr-6">
          <li>دوز للموقع الرسمي <span className="text-sm text-gray-500">www.ofppt.ma</span> فشهر يونيو.</li>
          <li>اختر التخصص المناسب حسب مستواك (باك, 3 إعدادي, وغيرها).</li>
          <li>قدم الوثائق: الشهادات، بطاقة التعريف، وصور فوتوغرافية.</li>
          <li>استنى نتائج الانتقاء (عادة فشهر شتنبر).</li>
          <li>إلا نجحتي، بدات التكوين! مدة التكوين 1-2 سنين.</li>
        </ol>
        <p>
          <strong>نصيحة:</strong> فبعض المدن كاين اكتظاظ على بعض التخصصات. دير التسجيل فباكور باش تزيد حظوظك.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">تكوينات مجانية بشهادات معتمدة</h2>
        <p>
          إذا كانت ميزانيتك محدودة، راه كاين بزاف ديال التكوينات المجانية. أهمها:
        </p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>مهارات من Google:</strong> برنامج مجاني فالتسويق الرقمي وتحليل البيانات. شهادة معتمدة.</li>
          <li><strong>DigiSkills:</strong> من الوكالة الوطنية للتنمية الرقمية. تكوين فالمهارات الرقمية الأساسية.</li>
          <li><strong>Coursera:</strong> دورات مجانية فجميع المجالات. بعضها كيعطي شهادة مجانية.</li>
          <li><strong>LinkedIn Learning:</strong> فترة تجريبية مجانية 30 يوم، دورات مهنية بشهادة.</li>
          <li><strong>YouTube + مواقع متخصصة:</strong> هاد المصادر مافيهم حتى ريال. يمكنك التعلم بديك.</li>
        </ul>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">خاتمة</h2>
        <p>
          راه مستقبلك المهني كاين فإيديك. التكوين المناسب هو المفتاح. المغرب 2026 بلد فيه فرص، ولكن خاص تكون مجهز. اختر التخصص لي كتحبو ولي عندو طلب فالسوق.
        </p>
        <p>
          وإذا بغيتي تعرف شنو غادي يكون راتبك بعد التكوين، جرب <Link href="/salary-calculator" className="font-medium text-emerald-600 underline hover:text-emerald-700">حاسبة الراتب</Link> باش تحسب صافي راتبك.
        </p>
        <p>
          بالتوفيق إن شاء الله! الله يوفقك فمشوارك المهني.
        </p>
        <p className="text-emerald-700 font-medium">شارك هاد المقال مع واحد صاحبك كيقلب على تكوين! 🌟</p>
      </div>
    </article>
  );
}
