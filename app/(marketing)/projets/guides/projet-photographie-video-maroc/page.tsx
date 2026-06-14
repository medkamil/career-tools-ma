import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "مشروع التصوير الفوتوغرافي والفيديو في المغرب 2026",
  description:
    "دليل كامل لمشروع التصوير الفوتوغرافي والفيديو فالمغرب: التجهيزات، التكاليف، استراتيجية التسويق، التراخيص، والأرباح المتوقعة. كل ما تحتاج لبدء مشروع تصوير ناجح.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "مشروع التصوير الفوتوغرافي والفيديو في المغرب 2026",
  description:
    "دليل كامل لمشروع التصوير الفوتوغرافي والفيديو (photographie et vidéo) في المغرب: التجهيزات، التكاليف، stratégie marketing، التراخيص، والأرباح المتوقعة.",
  author: { "@type": "Person", name: "Tawdif Pro" },
  publisher: {
    "@type": "Organization",
    name: "Tawdif Pro",
    logo: {
      "@type": "ImageObject",
      url: "https://tawdifpro.ma/logo.png",
    },
  },
  datePublished: "2026-06-01",
  dateModified: "2026-06-14",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://tawdifpro.ma" },
    { "@type": "ListItem", position: 2, name: "قسم المشاريع", item: "https://tawdifpro.ma/projets" },
    {
      "@type": "ListItem",
      position: 3,
      name: "مشروع التصوير الفوتوغرافي والفيديو فالمغرب",
      item: "https://tawdifpro.ma/projets/guides/projet-photographie-video-maroc",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شنو هو رأس المال المطلوب لبدء مشروع التصوير فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "رأس المال كيبدا من 30,000 MAD لـ 150,000 MAD حسب التخصص. للبداية (كاميرا نصف احترافية + عدسة أساسية): 15,000 - 25,000 MAD. للمستوى الاحترافي (كاميرا Pro + 3 عدسات + إضاءة): 80,000 - 150,000 MAD. التصوير بالجوال (téléphone) للبداية: حتا 0 MAD إذا عندك جوال كيميرا حادة.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي التجهيزات الأساسية لمصور محترف فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التجهيزات الأساسية: كاميرا (Appareil photo) 8,000 - 30,000 MAD (Canon/Nikon/Sony)، عدسات (Objectifs): عدسة أساسية 35mm أو 50mm (2,000 - 5,000 MAD)، حامل ثلاثي (Trépied) 500 - 2,000 MAD، إضاءة (Flash studio) 2,000 - 10,000 MAD، حاسوب قوي للـ montage 10,000 - 20,000 MAD، وبرامج التحرير (Adobe Lightroom, Photoshop, Premiere Pro).",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي التراخيص اللازمة للتصوير الفوتوغرافي فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "التراخيص: Registre de Commerce (إذا كنت شركة أو auto-entrepreneur)، Patente، ICE. التصوير فـ الأماكن العامة (الطرق، الساحات) حر، ولكن التصوير فـ الأماكن الخاصة nécessite autorisation. إذا كتصور حفلات وتحتاج دخل، سجل نفسك كـ auto-entrepreneur.",
      },
    },
    {
      "@type": "Question",
      name: "شنو هي أسعار خدمات التصوير فالمغرب 2026؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أسعار الخدمات: تصوير حفلات الزفاف (mariage): 5,000 - 20,000 MAD لليوم كامل. جلسات تصوير شخصية (Portrait): 300 - 800 MAD للجلسة. تصوير المنتجات (Produit): 200 - 500 MAD للصورة. تصوير فيديوهات دعائية: 3,000 - 15,000 MAD لكل فيديو. تصوير عقاري: 500 - 2,000 MAD لكل عقار.",
      },
    },
    {
      "@type": "Question",
      name: "واش مشروع التصوير مربح فالمغرب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ايوه مربح. الإيرادات الشهرية: مصور مبتدئ: 5,000 - 10,000 MAD. مصور متوسط: 10,000 - 25,000 MAD. مصور محترف: 25,000 - 60,000 MAD. هامش الربح 50% - 70% (بعد المصاريف). العائد على الاستثمار فـ 6 - 18 شهر. التخصص فـ مجال معين كيزيد الأرباح.",
      },
    },
    {
      "@type": "Question",
      name: "كيفاش نوصل للزبناء فـ مجال التصوير؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "استراتيجيات فعالة: أنشئ portfolio قوي على Instagram (أهم منصة للتصوير)، تعاون مع مؤثرين وفنانات تجميل (maquilleuses)، استعمل Google My Business، انضم لمجموعات Facebook لي كتطلب مصورين، قدم عروض خاصة للزبناء الجدد (séance gratuite أو بثمن مخفض)، واطلب من الزبناء الراضيين شهادات وتقييمات.",
      },
    },
  ],
};

export default function ProjetsGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-emerald-600">الرئيسية</Link> › <Link href="/projets" className="hover:text-emerald-600">المشاريع</Link> › <span className="text-gray-900">مشروع التصوير الفوتوغرافي والفيديو فالمغرب</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900">مشروع التصوير الفوتوغرافي والفيديو في المغرب 2026</h1>
        <div className="mt-8 space-y-6 text-base leading-7 text-gray-700">
          <p className="text-lg font-medium text-emerald-700">مشروع التصوير الفوتوغرافي والفيديو (photographie et vidéo) من المشاريع لي كتعرف طلب كبير فالمغرب. الزواجات، الحفلات، المنتجات، العقارات، وحتى المحتوى الرقمي كيحتاج تصوير احترافي. فهاد الدليل، غادي نعطيك كلشي على هاد المجال المربح.</p>

          <h2 className="text-2xl font-bold text-gray-900">الوضع الحالي لسوق التصوير فالمغرب</h2>
          <p>السوق المغربي للتصوير كاين فيه طلب متزايد بفضل وسائل التواصل الاجتماعي. الناس والمؤسسات ولاو كيديرو قيمة للصورة الاحترافية. كلشي من الأعراس لـ الإعلانات لـ المحتوى الرقمي كيحتاج مصورين. المنافسة كاينة ولكن المصورين المتميزين عندهم طلب كبير. التصوير بالفيديو (vidéaste) ولا ضروري للشركات والأفراد.</p>

          <h2 className="text-2xl font-bold text-gray-900">التخصصات في مجال التصوير</h2>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>Photographie de mariage:</strong> تصوير الأعراس. الأكثر طلباً وأعلى أجر. nécessite خبرة وتجهيزات متطورة.</li>
            <li><strong>Portrait et séances personnelles:</strong> جلسات تصوير للأفراد والعائلات. مطلوبة فـ المدن الكبرى.</li>
            <li><strong>Photographie de produits:</strong> تصوير المنتجات للمحلات والعلامات التجارية. secteur كايدوب مع التجارة الإلكترونية.</li>
            <li><strong>Photographie immobilière:</strong> تصوير العقارات للبيع والكراء. ضروري فـ السوق العقاري.</li>
            <li><strong>Photographie culinaire:</strong> تصوير الأكل للمطاعم والمقاهي. مطلوب بزاف فـ مراكش والدار البيضاء.</li>
            <li><strong>Vidéo publicitaire:</strong> فيديوهات دعائية للشركات. vidéaste محترف كيطلب بزاف.</li>
            <li><strong>Vidéo d'événements:</strong> توثيق الحفلات، المؤتمرات، والمناسبات.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">التكاليف التقريبية للمشروع</h2>
          <p>حسب المستوى ديالك:</p>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>بداية صغيرة (Débutant):</strong> 15,000 - 30,000 MAD
              <ul className="mr-4 mt-1 list-circle space-y-1">
                <li>كاميرا مستعملة (Canon/Nikon/Sony): 5,000 - 10,000 MAD</li>
                <li>عدسة 50mm f/1.8: 1,500 - 3,000 MAD</li>
                <li>حامل ثلاثي: 500 - 1,000 MAD</li>
                <li>بطاقات ذاكرة + بطاريات: 1,000 - 2,000 MAD</li>
                <li>حاسوب + برامج: 5,000 - 10,000 MAD</li>
              </ul>
            </li>
            <li><strong>مستوى متوسط (Intermédiaire):</strong> 40,000 - 80,000 MAD
              <ul className="mr-4 mt-1 list-circle space-y-1">
                <li>كاميرا Pro (APS-C أو Full Frame): 12,000 - 20,000 MAD</li>
                <li>عدستين (Portrait + Grand angle): 10,000 - 20,000 MAD</li>
                <li>إضاءة studio: 5,000 - 10,000 MAD</li>
                <li>Drone (DJI Mini): 4,000 - 8,000 MAD</li>
                <li>حاسوب قوي: 10,000 - 15,000 MAD</li>
              </ul>
            </li>
            <li><strong>مستوى محترف (Professionnel):</strong> 80,000 - 200,000 MAD
              <ul className="mr-4 mt-1 list-circle space-y-1">
                <li>كاميرا Full Frame Pro: 20,000 - 30,000 MAD</li>
                <li>3 - 5 عدسات: 30,000 - 60,000 MAD</li>
                <li>إضاءة متطورة: 15,000 - 30,000 MAD</li>
                <li>Drone Pro: 10,000 - 20,000 MAD</li>
                <li>Stabilisateur (Gimbal): 3,000 - 8,000 MAD</li>
                <li>MacBook Pro + Logiciels: 20,000 - 30,000 MAD</li>
              </ul>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">التراخيص والإجراءات القانونية</h2>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>Auto-entrepreneur:</strong> أحسن شكل قانوني للمصورين المستقلين. التسجيل سهل فـ site auto-entrepreneur.ma.</li>
            <li><strong>Registre de Commerce:</strong> إذا كنت غادي تفتح studio أو عندك شركة.</li>
            <li><strong>Patente:</strong> taxe professionnelle.</li>
            <li><strong>CNSS:</strong> إذا عندك موظفين.</li>
            <li><strong>تصريح التصوير فـ الأماكن العامة:</strong> généralement pas nécessaire، ولكن إذا كتصور فـ أماكن حساسة، أحسن تطلب permission.</li>
            <li><strong>حقوق الصورة (Droit à l'image):</strong> nécessaire عندك autorisation écrit (model release) من الأشخاص لي كتصورهم إذا غادي تستعمل الصور تجارياً.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">الإيرادات والأرباح المتوقعة</h2>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>تصوير الأعراس (Mariage):</strong> 5,000 - 20,000 MAD لكل عرس. 8 - 20 عرس فالسنة.</li>
            <li><strong>جلسات شخصية (Portrait):</strong> 300 - 800 MAD للجلسة. 10 - 30 جلسة فالشهر.</li>
            <li><strong>تصوير منتجات:</strong> 200 - 500 MAD للصورة الوحدة. 50 - 200 صورة فالشهر للعملاء المنتظمين.</li>
            <li><strong>فيديوهات دعائية:</strong> 3,000 - 15,000 MAD لكل فيديو. 2 - 8 فيديوهات فالشهر.</li>
            <li><strong>تصوير عقاري:</strong> 500 - 2,000 MAD لكل عقار. 5 - 15 عقار فالشهر.</li>
            <li><strong>الإيرادات الشهرية:</strong> مبتدئ: 5,000 - 10,000 MAD. متوسط: 10,000 - 25,000 MAD. محترف: 25,000 - 60,000 MAD.</li>
            <li><strong>هامش الربح:</strong> 50% - 70% (المصاريف كتكون فـ المعدات فقط بشكل أساسي)</li>
            <li><strong>ROI:</strong> 6 - 18 شهر</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">استراتيجية التسويق</h2>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>Instagram هو المفتاح:</strong> فـ مجال التصوير، Instagram هو أهم منصة. انشر صورك، فيديوهاتك، ووراء الكاميرا (behind the scenes). استخدم hashtags مغربية: #مصور_المغرب #تصوير_الرباط #photographe_casablanca.</li>
            <li><strong>Portfolio قوي:</strong> موقع ويب بسيط يعرض أحسن أعمالك. الناس كيحتاجو يشوفو جودة شغلك قبل ما يتعاقدو.</li>
            <li><strong>Google My Business:</strong> "مصور فـ الدار البيضاء" كتكون بحث متكرر.</li>
            <li><strong>Partenariat:</strong> تعاون مع منظمي الأعراس (wedding planners)، فنانات التجميل (maquilleuses)، والمؤثرين.</li>
            <li><strong>شهادات الزبناء:</strong> الزبون الراضي كيجيب 5 زبناء جدد. اطلب témoignages.</li>
            <li><strong>العروض الخاصة:</strong> أول جلسة بثمن مخفض، أو خصم للزبناء الجدد.</li>
            <li><strong>TikTok et Reels:</strong> فيديوهات قصيرة لـ behind the scenes، نصائح التصوير، التحولات (transformation).</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">التحديات وكيفاش تتعامل معاها</h2>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>المنافسة:</strong> عدد المصورين كبير. تميز بتخصص معين (مثلاً: تصوير الأكل، العقارات) أو أسلوب خاص.</li>
            <li><strong>غلاء المعدات:</strong> ابدا بالمعدات الأساسية، استثمر الأرباح فـ معدات أحسن تدريجياً.</li>
            <li><strong>الزبون الصعب:</strong> اتفق على كلشي قبل الجلسة (السعر، المدة، عدد الصور). عقد كتابي ضروري.</li>
            <li><strong>تقلب الدخل:</strong> فـ الشهور اللي فيها طلب قليل (جانفي - فبراير)، خطط لتصوير شخصي أو منتجات.</li>
            <li><strong>سرقة الأعمال:</strong> ضع علامة مائية (watermark) على الصور لي كتنشرها على الإنترنت. سجل حقوقك فـ Maroc Copyright.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">نصائح للنجاح فـ التصوير</h2>
          <ul className="list-disc space-y-2 pr-6">
            <li><strong>التكوين المستمر:</strong> عالم التصوير كيتطور. تابع YouTube، دورات Udemy، وورشات محلية.</li>
            <li><strong>التخصص:</strong> أحسن تكون أحسن واحد فـ مجال معين من تكون عادي فـ 10 مجالات.</li>
            <li><strong>العلاقات:</strong> فـ المغرب، العلاقات (réseautage) هي المفتاح. احضر معارض، ورشات، ومناسبات.</li>
            <li><strong>الجودة فوق الكمية:</strong> أحسن 10 صور رائعة من 100 صورة متوسطة. الزبناء كيشريو الجودة.</li>
            <li><strong>التسليم فالوقت:</strong> الـ ponctualité فـ تسليم الصور مهمة جداً. ما تأخرش على الزبناء.</li>
            <li><strong>التصوير بالفيديو:</strong> الزواج بين photo et vidéo كيزيد فرص الربح. تعلم أساسيات المونتاج.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">الأسئلة الشائعة (FAQ)</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">رأس المال المطلوب للتصوير؟</h3>
              <p className="mt-1">30,000 - 150,000 MAD. البداية الصغيرة (كاميرا + عدسة): 15,000 - 25,000 MAD. التصوير بالجوال: 0 MAD.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">التجهيزات الأساسية؟</h3>
              <p className="mt-1">كاميرا (8,000 - 30,000 MAD)، عدسة أساسية، حامل ثلاثي، إضاءة، حاسوب قوي، برامج تحرير (Lightroom, Photoshop).</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">التراخيص اللازمة؟</h3>
              <p className="mt-1">Registre de Commerce أو Auto-entrepreneur، Patente، ICE. التصوير فـ الأماكن العامة مفتوح.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">أسعار خدمات التصوير فالمغرب؟</h3>
              <p className="mt-1">زواج: 5,000 - 20,000 MAD. جلسة شخصية: 300 - 800 MAD. تصوير منتجات: 200 - 500 MAD/صورة. فيديو دعائي: 3,000 - 15,000 MAD.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">واش المشروع مربح؟</h3>
              <p className="mt-1">ايوه. الإيرادات 5,000 - 60,000 MAD شهرياً. هامش الربح 50% - 70%. ROI فـ 6 - 18 شهر. التخصص كيزيد الأرباح.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900">كيفاش نوصل للزبناء؟</h3>
              <p className="mt-1">Instagram (الأهم)، Google My Business، التعاون مع wedding planners و maquilleuses، TikTok، portfolio قوي.</p>
            </div>
          </div>

          <p className="rounded-lg bg-emerald-50 p-4 text-emerald-800"><strong>نصيحة Tawdif Pro:</strong> ابدا بالتصوير بالجوال (هاتفك) إذا الميزانية محدودة. تدرب، ابن portfolio، وبعدها استثمر فـ كاميرا احترافية. التخصص فـ niche واحد (زي التصوير العقاري أو الأكل) كيجيب زبناء مخلصين وأرباح أحسن.</p>
        </div>
        <div className="mt-8 rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-600">
            📚 اقرأ أيضاً: <Link href="/projets/guides/idees-projets-petit-budget-maroc" className="text-emerald-600 underline hover:text-emerald-800">أفكار مشاريع صغيرة مربحة</Link>
            {" | "}<Link href="/salary-calculator" className="text-emerald-600 underline hover:text-emerald-800">احسب راتبك الصافي</Link>
          </p>
        </div>
      </div>
    </>
  );
}
