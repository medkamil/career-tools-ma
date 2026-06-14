import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "تكوين الطبخ والحلويات في المغرب: المراكز، الأسعار، وشهادات الشيف | Tawdif Pro",
  description: "دليل تكوين الطبخ والحلويات (Cuisine et Patisserie) في المغرب 2026: أفضل مدارس الطبخ، ثمن التكوين، شهادة الشيف، وفرص العمل.",
};

const articleSchema = {
  "@context": "https://schema.org", "@type": "Article",
  "headline": "تكوين الطبخ والحلويات في المغرب: المراكز، الأسعار، وشهادات الشيف",
  "description": "دليل تكوين الطبخ والحلويات في المغرب 2026. أفضل المدارس، الأسعار، وشهادات الشيف.",
  "author": { "@type": "Person", "name": "Tawdif Pro" },
  "publisher": { "@type": "Organization", "name": "Tawdif Pro", "logo": { "@type": "ImageObject", "url": "https://tawdifpro.ma/logo.png" } },
  "datePublished": "2026-06-01", "dateModified": "2026-06-13",
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "شنو هي شروط ولوج تكوين الطبخ والحلويات فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "شروط ولوج تكوين الطبخ فالمغرب: السن ما بين 16 و 30 سنة، المستوى الدراسي الثالثة إعدادي على الأقل للتقني، والبكالوريا للتقني المتخصص. بعض مدارس الطبخ الخاصة كتقبل حتى بلا مستوى محدد ولكن كتطلب اجتياز اختبار القبول. المهم تكون عندك شغف بالمطبخ والابتكار." } },
    { "@type": "Question", name: "شحال كاين المدارس ديال الطبخ فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "المغرب عندو تقريبا 50 مدرسة طبخ معترف بها. أشهرها: Institut Superieur des Metiers de la Patisserie (Casablanca)، Le Matre (الدار البيضاء)، Paul Bocuse (Lyon mais aussi des partenaires au Maroc)، OFPPT (برامج سياحة وفندقة)، ومدرسة الفنون الطبخية (مراكش). المدارس الخاصة كاينة فجميع المدن الكبرى." } },
    { "@type": "Question", name: "شحال كيسال الشيف فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "الراتب ديال الشيف فالمغرب: طباخ مبتدئ 3,000 - 5,000 DH، Commis de Cuisine 4,000 - 6,000 DH، Chef de Partie 6,000 - 10,000 DH، Sous Chef 10,000 - 15,000 DH، Chef Executif 15,000 - 30,000+ DH. الفنادق 5 نجوم (Four Seasons, Royal Mansour) كتعطي أحسن الرواتب. شهادة من مدرسة معروفة كتزيد فالقيمة." } },
    { "@type": "Question", name: "شنو هي المواد لي كتدرس فمدرسة الطبخ؟", acceptedAnswer: { "@type": "Answer", text: "المواد الأساسية: أساسيات الطبخ (Techniques de Base)، تحضير الأطباق المغربية والعالمية، الحلويات والمعجنات (Patisserie, Viennoiserie)، النظافة والسلامة الغذائية (HACCP)، فن التقديم، إدارة المطبخ، التغذية وحساب السعرات، واختيار المواد الأولية. التكوين العملي كيمثل 80% من البرنامج." } },
    { "@type": "Question", name: "فين تتوظف بعد تكوين الطبخ فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "فرص الشغل بزاف: الفنادق والمطاعم الفاخرة (الدار البيضاء، مراكش، طنجة)، الفنادق السياحية (أكادير، الصويرة)، شركات تقديم الطعام (Traiteurs/Catering)، شركات الطيران (Cuisine aerienne)، الفنادق المستشفياتية، وكيلاء السفر والبواخر السياحية. كاين حتى إمكانية تشغيل الذات (Freelance) ولا فتح مشروعك الخاص." } },
    { "@type": "Question", name: "شحال ثمن تكوين الطبخ فالمدارس الخاصة؟", acceptedAnswer: { "@type": "Answer", text: "أسعار التكوين فمدارس الطبخ الخاصة كتتفاوت بزاف: تكوين أساسي (3-6 شهور) 8,000 - 15,000 DH، تكوين متقدم (سنة) 15,000 - 30,000 DH، تكوين شامل (سنتين) 30,000 - 60,000 DH. أغلط المدارس ثمنها: Paul Bocuse affiliates 80,000 - 120,000 DH. بعض المدارس كتقبل التقسيط." } },
    { "@type": "Question", name: "واش كاين تكوين مجاني ف الطبخ فالمغرب؟", acceptedAnswer: { "@type": "Answer", text: "إيوه، OFPPT كيقدم تكوين فمجال السياحة والفندقة والطبخ مجانا. التخصصات: تقني فالمطبخ (Technicien en Cuisine)، تقني فالحلويات (Technicien en Patisserie)، تقني متخصص فالفندقة. التسجيل كاين فالصيف. كاين أيضا بعض الجمعيات والمبادرات لي كتقدم تكوين مجاني ف الطبخ للشباب فالمدن الصغيرة." } },
  ],
};

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://tawdifpro.ma" },
  { "@type": "ListItem", position: 2, name: "قسم التكوين", item: "https://tawdifpro.ma/formations" },
  { "@type": "ListItem", position: 3, name: "تكوين الطبخ والحلويات في المغرب", item: "https://tawdifpro.ma/formations/guides/formation-cuisine-patisserie-maroc" },
]};

export default function FormationsGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">تكوين الطبخ والحلويات في المغرب 2026: المراكز، الأسعار، وشهادات الشيف</h1>
        <p className="mt-3 text-lg text-gray-600">مدارس الطبخ + OFPPT + شهادات + رواتب</p>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>من طرف فريق Tawdif Pro</span>
          <span>•</span><span>8 دقائق قراءة</span>
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-gray-800">
        <p className="text-lg font-medium text-emerald-700">الطبخ (Cuisine) والحلويات (Patisserie) راهو من المجالات لي كتعرف رواج كبير فالمغرب. مع تطور السياحة والفنادق والمطاعم، الطلب على الشيفات المحترفين كيزيد عام بعد عام.</p>
        <p>هاد المجال مزيج بين الفن والعلم. ما كلشي لي كيطيب فدارو يقدر يكون شيف محترف. التكوين المهني هو لي كيعطي الأدوات والمعايير لي كتفرق بين طباخ عادي وشيف محترف.</p>
        <hr className="border-gray-200" />
        <h2 className="text-2xl font-bold text-gray-900">أنواع تكوين الطبخ فالمغرب</h2>
        <p className="font-medium text-gray-900">التكوين الأساسي (Formation de Base)</p>
        <p>كيتعلم المتدرب فيه أساسيات الطبخ: تقطيع الخضر، تحضير المرق، طرق الطهي (القلي، السلق، الشواء)، والنظافة الغذائية.</p>
        <p className="font-medium text-gray-900">التكوين المتخصص (Formation Specialisee)</p>
        <p>كايركز على مجال معين: المطبخ المغربي التقليدي، المطبخ العالمي، الحلويات العصرية، المخبوزات (Boulangerie)، أو الشوكولاتة.</p>
        <h2 className="text-2xl font-bold text-gray-900">أشهر مدارس الطبخ فالمغرب</h2>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>Institut Superieur des Metiers de la Patisserie:</strong> الدار البيضاء. تخصص فالحلويات فقط. الثمن: 25,000 - 40,000 DH.</li>
          <li><strong>Le Matre Culinary Academy:</strong> الدار البيضاء. تكوين شامل. الثمن: 15,000 - 30,000 DH.</li>
          <li><strong>مدرسة الفنون الطبخية مراكش:</strong> مراكش. الثمن: 12,000 - 25,000 DH.</li>
          <li><strong>OFPPT (تخصص فندقة ومطبخ):</strong> جميع المدن. مجاني.</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900">المواد لي كتدرس فمدرسة الطبخ</h2>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>تقنيات الطبخ (Techniques Culinaires):</strong> القطع، التحضير، طرق الطهي.</li>
          <li><strong>الحلويات (Patisserie):</strong> الكريما، العجائن، الشوكولاتة، التزيين.</li>
          <li><strong>النظافة (Hygiene Alimentaire):</strong> معايير HACCP، السلامة الغذائية.</li>
          <li><strong>التغذية:</strong> السعرات الحرارية، التوازن الغذائي.</li>
          <li><strong>إدارة المطبخ:</strong> التخطيط للقائمة، حساب التكاليف، إدارة المخزون.</li>
          <li><strong>فن التقديم (Presentation):</strong> ديكور الأطباق، التنسيق.</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900">الرواتب المتوقعة بعد التكوين</h2>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>طباخ مبتدئ:</strong> 3,000 - 5,000 DH</li>
          <li><strong>Chef de Partie:</strong> 6,000 - 10,000 DH</li>
          <li><strong>Sous Chef:</strong> 10,000 - 15,000 DH</li>
          <li><strong>Chef Executif:</strong> 15,000 - 30,000+ DH</li>
        </ul>
        <hr className="border-gray-200" />
        <h2 className="text-xl font-bold text-gray-900">الخلاصة</h2>
        <p>تكوين الطبخ والحلويات فالمغرب خيار ممتاز لعشاق المطبخ. مع القطاع السياحي المزدهر والفنادق لي كتتفتح، الطلب على الشيفات المحترفين غادي يبقى مرتفع. سواء اخترت OFPPT المجاني ولا مدرسة خاصة، المهم هو الشغف والالتزام.</p>
        <p className="text-emerald-700 font-medium">شارك المقال مع صاحبك لي كيبغي يولي شيف محترف!</p>
      </div>
      <div className="mt-8 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          📚 اقرأ أيضاً:{" "}
          <Link href="/formations/guides/formation-informatique-developpement-maroc" className="text-emerald-600 underline hover:text-emerald-800">تكوين البرمجة والمعلوميات</Link>
          {" | "}
          <Link href="/formations/guides/formation-langue-anglais-maroc" className="text-emerald-600 underline hover:text-emerald-800">تكوين اللغة الإنجليزية</Link>
        </p>
      </div>
    </article>
  );
}