import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "من نحن - Tawdif Pro",
  description: "منصة مغربية شاملة للتوظيف، التكوين المهني، المشاريع الصغيرة، والأدوات التفاعلية المجانية.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">من نحن</h1>

      <div className="mt-8 space-y-6 text-base leading-8 text-gray-700">
        <p className="text-lg font-medium text-emerald-700">
          {siteConfig.name} هي منصة مغربية 100%، الهدف ديالنا هو نعاونو الشباب المغربي فالتوظيف والتكوين وريادة الأعمال.
        </p>

        <h2 className="text-xl font-bold text-gray-900">الرؤية</h2>
        <p>
          نكونو أول منصة مغربية متكاملة كتجمع بين التوجيه المهني، التكوين، ريادة الأعمال، والأدوات التفاعلية فمكان واحد.
          منصتنا مصممة باش تلبي احتياجات كل المغاربة لي باغين يطورو مستقبلهم المهني.
        </p>

        <h2 className="text-xl font-bold text-gray-900">المهمة</h2>
        <p>
          نقدمو محتوى عالي الجودة بالدارجة والفرنسية والعربية، مع أدوات تفاعلية مجانية، باش نسهلو الوصول للمعلومات
          المهنية الموثوقة. كلشي فهاد المنصة مجاني ومصمم خصيصاً للسوق المغربي.
        </p>

        <h2 className="text-xl font-bold text-gray-900">القيم</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>المصداقية:</strong> المعلومات لي كتنشرو مدعومة بمصادر رسمية (وزارة الشغل، OFPPT، CNSS).</li>
          <li><strong>المجانية:</strong> كل الأدوات والمحتوى فهاد المنصة مجاني بالكامل.</li>
          <li><strong>الشمولية:</strong> كتغطيو جميع جوانب الحياة المهنية من توظيف وتكوين ومشاريع.</li>
          <li><strong>الخصوصية:</strong> المعلومات الشخصية ديالك آمنة وما كتنشرش.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900">شنو كتقدمو؟</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>قسم التوظيف:</strong> نصائح لكتابة CV، الاستعداد للمقابلات، حقوق الأجير، وآخر فرص العمل. <Link href="/emplois" className="text-emerald-600 underline hover:text-emerald-700">تصفح القسم</Link></li>
          <li><strong>قسم التكوين:</strong> أدلة التكوين المهني في OFPPT، التكوينات المجانية، والمهن المطلوبة. <Link href="/formations" className="text-emerald-600 underline hover:text-emerald-700">تصفح القسم</Link></li>
          <li><strong>قسم المشاريع:</strong> أفكار مشاريع، برامج الدعم (Forsa, INTELAKA)، والمقاول الذاتي. <Link href="/projets" className="text-emerald-600 underline hover:text-emerald-700">تصفح القسم</Link></li>
          <li><strong>الأدوات التفاعلية:</strong> حاسبة الراتب، مولد السيرة الذاتية، وطباعة الشيكات. <Link href="/salary-calculator" className="text-emerald-600 underline hover:text-emerald-700">اكتشف الأدوات</Link></li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900">لمن هاد المنصة؟</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li><strong>الباحثين عن عمل:</strong> لي باغين يعرفو كيفاش يديرو CV ويجتازو المقابلات.</li>
          <li><strong>الطلاب:</strong> لي باغين يختارو التكوين المناسب ويخططو للمستقبل.</li>
          <li><strong>أصحاب المشاريع:</strong> لي عندهم أفكار وبغاو الدعم والتمويل.</li>
          <li><strong>الموظفين:</strong> لي باغين يحسبو راتبهم الصافي ويفهمو حقوقهم.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900">تواصل معانا</h2>
        <p>
          كنهتم بملاحظاتك واقتراحاتك. إذا عندك أي سؤال أو باغي تشارك معانا تجربتك،
          <Link href="/contact" className="mr-1 font-medium text-emerald-600 underline hover:text-emerald-700">تواصل معانا</Link>.
        </p>
      </div>
    </div>
  );
}
