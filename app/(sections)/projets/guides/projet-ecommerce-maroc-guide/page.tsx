import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "مشروع التجارة الإلكترونية (E-commerce) في المغرب 2026",
  description: "دليل شامل لبدء مشروع التجارة الإلكترونية في المغرب 2026: منصات، تكاليف من 10,000 درهم، شحن، دفع، ضرائب، وأمثلة لمتاجر مغربية ناجحة.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "مشروع التجارة الإلكترونية (E-commerce) في المغرب 2026",
  "description": "دليل شامل لبدء مشروع التجارة الإلكترونية في المغرب 2026: منصات، تكاليف من 10,000 درهم، شحن، دفع، ضرائب، وأمثلة لمتاجر مغربية ناجحة.",
  "author": { "@type": "Person", "name": "Tawdif Pro" },
  "publisher": { "@type": "Organization", "name": "Tawdif Pro", "logo": { "@type": "ImageObject", "url": "https://tawdifpro.ma/logo.png" } },
  "datePublished": "2026-06-01",
  "dateModified": "2026-06-13",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://tawdifpro.ma" },
    { "@type": "ListItem", "position": 2, "name": "قسم المشاريع", "item": "https://tawdifpro.ma/projets" },
    { "@type": "ListItem", "position": 3, "name": "مشروع التجارة الإلكترونية (E-commerce) في المغرب 2026", "item": "https://tawdifpro.ma/projets/guides/projet-ecommerce-maroc-guide" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "شحال كتكون تكلفة بدء متجر إلكتروني فالمغرب 2026؟",
      "acceptedAnswer": { "@type": "Answer", "text": "تكلفة بدء متجر إلكتروني فالمغرب كتتفاوت حسب الخيارات. متجر بسيط على Shopify ولا WooCommerce: 2,000 - 5,000 درهم شهرياً (الاشتراك + الاستضافة + النطاق). التصميم والتطوير: 5,000 - 15,000 درهم. المخزون الأولي: 10,000 - 50,000 درهم حسب المنتوجات. التصوير والفيديوهات: 2,000 - 5,000 درهم. التسويق (Facebook Ads): 5,000 - 10,000 درهم شهرياً. المجموع التقريبي للبداية: 25,000 - 80,000 درهم. واخا، تقدر تبدا ب 10,000 درهم إذا بديتي ب Dropshipping." },
    },
    {
      "@type": "Question",
      "name": "شنو أفضل منصة للمتجر الإلكتروني فالمغرب؟",
      "acceptedAnswer": { "@type": "Answer", "text": "فالمغرب 2026، المنصات الأكثر استخداماً: Shopify (سهل، يدعم الدفع المغربي عبر CMI، الاشتراك 30-50 دولار شهرياً). WooCommerce (مجاني + استضافة 500-1,000 درهم سنوياً، مرن ولكن يحتاج تكوين). Selly (منصة مغربية، 300-500 درهم شهرياً، تدعم الدفع المحلي). PrestaShop (مجاني، قوي، ولكن يحتاج خبرة تقنية). اختيارك كيعتمد على ميزانيتك ومستواك التقني." },
    },
    {
      "@type": "Question",
      "name": "كيفاش كيخدم الدفع الإلكتروني فالمغرب للمتاجر؟",
      "acceptedAnswer": { "@type": "Answer", "text": "حلول الدفع الإلكتروني المتاحة فالمغرب: CMI (أكتر حل مستعمل، كيدعم البطاقات البنكية المغربية، رسوم 2-3% لكل عملية). Maroc Telecommerce (تابع للبنوك المغربية). PayPlus (حل مغربي حديث). PayPal (متاح ولكن مقتصر على الاستقبال فقط، ماكيش السحب للدرهم). Hightech Payment Services. للحصول على خدمة CMI، خاصك يكون عندك شركة (RC) وحساب بنكي مهني. رسوم التفعيل حوالي 3,000-5,000 درهم." },
    },
    {
      "@type": "Question",
      "name": "شنو أحسن شركات الشحن فالمغرب للتجارة الإلكترونية؟",
      "acceptedAnswer": { "@type": "Answer", "text": "خدمات الشحن فالمغرب تطورت بزاف. أفضل الخيارات: Amana (أكتر خدمة مستعملة، تغطية وطنية، كيدفعو الـCOD Cash On Delivery، الرسوم 15-30 درهم حسب الوزن). بريد المغرب (Colis Poste): رخيص (10-20 درهم)، ولكن مدة التوصيل أبطأ. DHL/FedEx: خاص للمنتوجات الغالية والسرعة. Chronopost: غالي ولكن موثوق. شركات النقل الخاصة (CTM، Supratours): خيار جيد للمدن الكبيرة." },
    },
    {
      "@type": "Question",
      "name": "شنو هي الضرائب على التجارة الإلكترونية فالمغرب؟",
      "acceptedAnswer": { "@type": "Answer", "text": "الضرائب كتطبق نفس القواعد ديال التجارة التقليدية. إذا كنت مسجل كمقاول ذاتي (Auto-entrepreneur): IR بنسبة 1-4% حسب النشاط، TVA 0%. إذا كنت شركة (SARL): الضريبة على الشركات (IS) 31% (17.5% للسنوات الثلاث الأولى)، TVA 20%. مهم: أي متجر إلكتروني كيبيع فالمغرب خاصو يكون مسجل قانونياً. التسجيل كمقاول ذاتي كافي للبداية." },
    },
    {
      "@type": "Question",
      "name": "واش التجارة الإلكترونية مربحة فالمغرب 2026؟",
      "acceptedAnswer": { "@type": "Answer", "text": "إيوه، التجارة الإلكترونية فالمغرب راه كتنمو بسرعة. السوق كبر بنسبة 35% ف 2025 و 2026. المغاربة كيشريو عبر الإنترنت أكثر من أي وقت مضى. الهدية (علب هدايا، عطور، ملابس) والإلكترونيات والأزياء هي الفئات الأكثر مبيعاً. هامش الربح كيكون بين 20% و 50%. التحدي الأكبر هو المنافسة (خصوصاً فـ Instagram) وتكاليف الإعلانات." },
    },
  ],
};

export default function ProjetsGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">مشروع التجارة الإلكترونية (E-commerce) في المغرب 2026</h1>
        <p className="mt-3 text-lg text-gray-600">(من الفكرة للمتجر - دليل كامل)</p>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>فريق Tawdif Pro</span>
          <span>•</span>
          <span>13 دقيقة قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">
        <p className="text-lg font-medium text-emerald-700">أنا بديت ب 12,000 درهم فقط - جبت بضاعة من درب عمر، صورتهم بتيليفوني، ونشرتهم فـ Instagram. فالشهر الأول دوزت 22,000 درهم. - هادا هو واقع التجارة الإلكترونية فالمغرب 2026.</p>
        <p>التجارة الإلكترونية فالمغرب راه كاتعيش ثورة حقيقية. الناس كتشري من الإنترنت أكثر من أي وقت مضى. السوق كبر، وفرص النجاح كبيرة.</p>
        <p>هاد المقال غيكون دليلك الشامل لبدء مشروع E-commerce فالمغرب: من اختيار المنتوج، لتصميم المتجر، لخدمات الدفع والشحن.</p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">1. ليش التجارة الإلكترونية فالمغرب 2026؟</h2>
        <p>المؤشرات راه كلها إيجابية. عدد المغاربة لي كيشريو عبر الإنترنت زاد بنسبة 40% فآخر سنتين.</p>
        <ul className="list-disc space-y-2 pr-6">
          <li>انتشار الهواتف الذكية (90%+ من المغاربة عندهم Smartphone).</li>
          <li>تطور حلول الدفع الإلكتروني (CMI، PayPlus، وغيرها).</li>
          <li>شبكة الشحن (Amana، بريد المغرب) ولات أكثر احترافية.</li>
          <li>المنافسة مازال فيها فرص، خصوصاً فالمجالات المتخصصة.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">2. اختيار المنتوج - المفتاح ديال النجاح</h2>
        <p>المشكل الأكبر ديال المتاجر الجديدة: كايبغيو يبيعو كلشي. ركز على واحد niche محدد.</p>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>الملابس العصرية:</strong> خصوصاً النسائية والأطفال. المصدر من تركيا، الصين، أو الجملة المحلي.</li>
          <li><strong>منتجات التجميل والعناية:</strong> زيت الأرگان، صابون طبيعي، كريمات العناية. هامش الربح 40-60%.</li>
          <li><strong>الإلكترونيات والإكسسوارات:</strong> سماعات، شواحن، كوفرات تلفون.</li>
          <li><strong>الهدايا والعلب الجاهزة (Coffrets cadeaux):</strong> المغاربة كيهادو بزاف فالمناسبات.</li>
          <li><strong>المنتجات الرياضية:</strong> ملابس رياضية، أدوات التمرين المنزلي.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">3. نماذج العمل - شنو الطريقة المناسبة ليك؟</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>Dropshipping:</strong> ما كاينش مخزون. المنتوج كيتشحن من المورّد للزبون. رأس مال صغير ولكن هامش ربح أقل.</li>
          <li><strong>المخزون الخاص:</strong> كتشري البضاعة وتخزنها. تحتاج رأس مال أكبر (10,000 درهم+).</li>
          <li><strong>Print on Demand:</strong> طباعة التصاميم على التيشيرتات والمگات. الربح: 50-100 درهم لكل قطعة.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">4. المنصات - فين تبني متجرك؟</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>Shopify:</strong> الأسهل والأكتر احترافية. كايدعم CMI للدفع المغربي. الاشتراك: 30-50 دولار شهرياً.</li>
          <li><strong>WooCommerce (WordPress):</strong> مجاني ولكن يحتاج استضافة (500-1,000 درهم سنوياً).</li>
          <li><strong>Selly.ma:</strong> منصة مغربية 100%. تدعم الدفع المحلي والتوصيل عبر Amana. الاشتراك: 300-500 درهم شهرياً.</li>
          <li><strong>Instagram + WhatsApp:</strong> مجاني. الأكثر انتشاراً فالمغرب.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">5. الدفع الإلكتروني والشحن</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>CMI (Monetique):</strong> رسوم 2-3% لكل عملية. كتحتاج شركة (RC) وحساب بنكي مهني.</li>
          <li><strong>COD (Cash On Delivery):</strong> الدفع عند التسليم عبر Amana أو بريد المغرب.</li>
          <li><strong>Amana:</strong> رسوم 15-30 درهم، تغطية وطنية، خدمة COD.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">6. التسويق والجوانب القانونية</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>Facebook & Instagram Ads:</strong> ميزانية البداية: 3,000 - 5,000 درهم شهرياً.</li>
          <li><strong>المقاول الذاتي (Auto-entrepreneur):</strong> أحسن خيار. IR 1-4%، إعفاء من TVA. التسجيل مجاني عبر service-public.ma.</li>
        </ul>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-bold text-gray-900">خاتمة</h2>
        <p>التجارة الإلكترونية فالمغرب مازال فيها فرص كبيرة. السر: اختار منتوج مطلوب، ركز على الجودة والخدمة، واستثمر فالتسويق.</p>
        <p>إذا بغيتي تحسب صافي الربح ديال متجرك، <Link href="/salary-calculator" className="font-medium text-emerald-600 underline hover:text-emerald-700">استعمل حاسبة الراتب</Link>.</p>
        <p>لبرامج الدعم، <Link href="/projets/guides/programme-intelaka" className="font-medium text-emerald-600 underline hover:text-emerald-700">برنامج INTELAKA</Link> كيعطيك قرض حتى 50,000 درهم بلا فائدة.</p>
        <p>الله يوفقك!</p>
      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">📚 اقرأ أيضاً: <Link href="/projets/guides/idees-projets-petit-budget-maroc" className="text-emerald-600 underline hover:text-emerald-800">أفكار مشاريع صغيرة مربحة</Link> | <Link href="/salary-calculator" className="text-emerald-600 underline hover:text-emerald-800">احسب راتبك الصافي</Link></p>
      </div>
    </article>
  );
}
