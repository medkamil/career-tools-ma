import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "تكوين الحلاقة والتجميل في المغرب: المراكز، الأسعار، وشهادة التجميل",
  description: "دليل تكوين الحلاقة والتجميل (Coiffure et Esthetique) في المغرب 2026: أفضل مراكز التجميل، أسعار التكوين، شهادة OFPPT، وفرص العمل.",
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article",
  "headline": "تكوين الحلاقة والتجميل في المغرب: المراكز، الأسعار، وشهادة التجميل",
  "description": "دليل تكوين الحلاقة والتجميل في المغرب 2026.",
  "author": { "@type": "Person", "name": "Tawdif Pro" },
  "publisher": { "@type": "Organization", "name": "Tawdif Pro", "logo": { "@type": "ImageObject", "url": "https://tawdifpro.ma/logo.png" } },
  "datePublished": "2026-06-01", "dateModified": "2026-06-13",
};

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "شنو هي شروط ولوج تكوين الحلاقة والتجميل فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "شروط الوج: السن ما بين 16 و 30 سنة، المستوى الدراسي الثالثة إعدادي على الأقل (OFPPT)، شهادة البكالوريا تفضل (للتقني المتخصص). بعض المراكز الخاصة كتقبل بلا شرط المستوى. المهم: تكون عندك ذوق فني وحس إبداعي. كاين اختبار ولوج فبعض المعاهد." } },
  { "@type": "Question", name: "شحال من الوقت كيستغرق تكوين الحلاقة والتجميل؟", acceptedAnswer: { "@type": "Answer", text: "OFPPT: تقني فالحلاقة والتجميل سنتين، تقني متخصص سنتين. معاهد خاصة: تكوين أساسي 6 شهور لسنة، تكوين متخصص (ميك أب، عناية بالبشرة...) 3-6 شهور، دورات قصيرة مكثفة من شهر ل 3 شهور." } },
  { "@type": "Question", name: "شحال كيسال الحلاق/الكوافير فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "الرواتب: حلاق مبتدئ فصالون 2,500 - 4,000 DH + بقشيش، كوافير محترف 4,000 - 7,000 DH، متخصص فالتجميل (صالون راقي) 5,000 - 10,000 DH، مالك صالون (Freelance) 8,000 - 20,000+ DH حسب الزبناء. البقشيش (Tips) كيمثل 30-50% من الدخل فهاد المجال." } },
  { "@type": "Question", name: "أشهر مراكز تكوين الحلاقة والتجميل فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "أشهر المراكز: OFPPT (فجميع المدن - مجاني)، معهد الجمال الدولي (الدار البيضاء)، أكاديمية لوريال (الدار البيضاء)، مركز فن التجميل (مراكش)، معهد التجميل الحديث (الرباط). المراكز الخاصة: الثمن 8,000 - 25,000 DH حسب التخصص والمدة." } },
  { "@type": "Question", name: "شنو هي المواد لي كتدرس ف تكوين التجميل؟", acceptedAnswer: { "@type": "Answer", text: "المواد الأساسية: أساسيات الحلاقة والكوافير (Coupe, Coiffage)، التلوين (Coloration)، العناية بالبشرة (Soins du Visage)، الميك أب (Maquillage Professionnel)، العناية بالأظافر (Manucure/Pedicure)، العناية بالشعر (Traitements Capillaires)، إدارة صالون التجميل، النظافة والصحة (Hygiene et Salubrite)." } },
  { "@type": "Question", name: "فرص الشغل فالحلاقة والتجميل فالمغرب 2026؟", acceptedAnswer: { "@type": "Answer", text: "فرص الشغل بزاف: صالونات الحلاقة والتجميل (جميع المدن)، الفنادق (Spas, Centres de Bien Etre، خاصة فنادق 5 نجوم فمراكش وأكادير)، مراكز التجميل الكبرى، شركات مستحضرات التجميل (L'Oreal, Yves Rocher)، العمل لحسابك الخاص (Freelance)، التدريب فالمعاهد (للمحترفين ذوي الخبرة)." } },
  { "@type": "Question", name: "واش كاين طلب على متخصصي التجميل فالمغرب 2026؟", acceptedAnswer: { "@type": "Answer", text: "إيوه، الطلب كاين ومستقر بزاف. مع تطور الوعي بالجمال والعناية الشخصية، صالونات التجميل كتتزاد فجميع المدن. حتى الفئة الرجالية ولات كتهتم بالعناية (Barbiers, Skin Care). السياحة العلاجية (Medical Tourism, Bien Etre) كتزيد فالطلب على المتخصصين. المنافسة كبيرة ولكن الفرص موجودة." } },
]};

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://tawdifpro.ma" },
  { "@type": "ListItem", position: 2, name: "قسم التكوين", item: "https://tawdifpro.ma/formations" },
  { "@type": "ListItem", position: 3, name: "تكوين الحلاقة والتجميل في المغرب", item: "https://tawdifpro.ma/formations/guides/formation-coiffure-esthetique-maroc" },
]};

export default function FormationsGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">تكوين الحلاقة والتجميل في المغرب 2026: المراكز، الأسعار، وشهادة التجميل</h1>
        <p className="mt-3 text-lg text-gray-600">OFPPT + معاهد خاصة + شهادات + رواتب</p>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>•</span><span>7 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">
        <p className="text-lg font-medium text-emerald-700">الحلاقة والتجميل (Coiffure et Esthetique) راهو قطاع كيعرف نمو كبير فالمغرب. الناس ولات كتهتم بمظهرها أكثر من قبل، وصالونات التجميل كتتفتح فكل حي وكل مدينة.</p>
        <p>هاد المجال مزيج بين الفن والتقنية. ما كلشي لي كيعرف يحلق يقدر يكون محترف. التكوين المهني هو لي كيعطيك التقنيات الصحيحة والمعايير المهنية لي كتفرق بينك وبين أي حد.</p>
        <hr className="border-gray-200" />
        <h2 className="text-2xl font-bold text-gray-900">أنواع التكوين فالحلاقة والتجميل</h2>
        <p className="font-medium text-gray-900">التكوين الأساسي (Formation de Base)</p>
        <p>كيتعلم فيه المتدرب أساسيات الحلاقة (للرجال) والكوافير (للنساء)، العناية بالشعر، التقنيات الأساسية ديال القص والتسريح.</p>
        <p className="font-medium text-gray-900">التكوين المتخصص (Formation Specialisee)</p>
        <p>كايركز على مجال معين: الميك أب الاحترافي، العناية بالبشرة (Soins Esthetiques)، العناية بالأظافر (Nail Art)، أو التلوين المتقدم (Coloration).</p>
        <h2 className="text-2xl font-bold text-gray-900">أشهر المراكز فالمغرب</h2>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>OFPPT:</strong> جميع المدن. تخصص Coiffure et Esthetique. مجاني. سنتين.</li>
          <li><strong>معهد الجمال الدولي (Institut International de Beaute):</strong> الدار البيضاء. الثمن: 15,000 - 25,000 DH.</li>
          <li><strong>أكاديمية لوريال (L Oreal Academy):</strong> الدار البيضاء. تخصص فالتلوين والعناية بالشعر.</li>
          <li><strong>مركز فن التجميل:</strong> مراكش. الثمن: 8,000 - 18,000 DH.</li>
          <li><strong>معهد التجميل الحديث:</strong> الرباط. الثمن: 10,000 - 20,000 DH.</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900">المهارات المكتسبة فالتكوين</h2>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>القص والتسريح:</strong> تقنيات قص الشعر للرجال والنساء.</li>
          <li><strong>التلوين:</strong> خلط الألوان، تقنيات الصباغة، التلاشي (Balayage).</li>
          <li><strong>العناية بالبشرة:</strong> تنظيف، ترطيب، ماسكات، علاجات متخصصة.</li>
          <li><strong>الميك أب:</strong> مكياج النهار، السهرة، الزفاف، المكياج الاحترافي.</li>
          <li><strong>العناية بالأظافر:</strong> مانيكير، باديكير، جل، نيل أرت.</li>
          <li><strong>إدارة الصالون:</strong> استقبال الزبناء، إدارة المواعيد، المحاسبة البسيطة.</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900">الرواتب المتوقعة</h2>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>مبتدئ:</strong> 2,500 - 4,000 DH + بقشيش</li>
          <li><strong>محترف (2-3 سنين):</strong> 4,000 - 7,000 DH + بقشيش</li>
          <li><strong>متخصص فالتجميل:</strong> 5,000 - 10,000 DH</li>
          <li><strong>مالك صالون:</strong> 8,000 - 20,000+ DH</li>
        </ul>
        <p>استعمل <Link href="/salary-calculator" className="font-medium text-emerald-600 underline hover:text-emerald-700">حاسبة الراتب</Link> باش تعرف صافي راتبك.</p>
        <hr className="border-gray-200" />
        <h2 className="text-xl font-bold text-gray-900">الخلاصة</h2>
        <p>تكوين الحلاقة والتجميل خيار ممتاز للشباب لي عندهم ذوق فني وحب للابتكار. التكوين كاين مجاني (OFPPT) ومدفوع، وفرص الشغل موجودة فجميع المدن. هاد المجال كيعطيك إمكانية تشتغل فصالون، ولا تفتح مشروعك الخاص.</p>
        <p className="text-emerald-700 font-medium">شارك هاد المقال مع صاحبك لي كيبغي يتعلم الحلاقة والتجميل!</p>
      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          📚 اقرأ أيضاً:{" "}
          <Link href="/formations/guides/formation-cuisine-patisserie-maroc" className="text-emerald-600 underline hover:text-emerald-800">تكوين الطبخ والحلويات</Link>
          {" | "}
          <Link href="/formations/guides/formation-auxiliaire-vie-maroc" className="text-emerald-600 underline hover:text-emerald-800">تكوين مساعد التمريض</Link>
        </p>
      </div>
    </article>
  );
}