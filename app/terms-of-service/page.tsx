import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "شروط الاستخدام",
  description: "شروط استخدام منصة Tawdif Pro. باستخدامك للموقع كتوافق على هاد الشروط. الملكية الفكرية، حدود المسؤولية، الأدوات التفاعلية، والقانون المطبق هو القانون المغربي.",
};

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">شروط الاستخدام</h1>
      <p className="mt-2 text-sm text-gray-500">آخر تحديث: يونيو 2026</p>

      <div className="mt-8 space-y-6 text-base leading-8 text-gray-700">
        <p>
          باستخدامك لموقع <strong>Tawdif Pro</strong>، كتوافق على هاد الشروط. إذا ما كتشكلش موافق، لا تقدر تستعمل الموقع.
        </p>

        <h2 className="text-xl font-bold text-gray-900">1. قبول الشروط</h2>
        <p>
          باستعمالك للموقع، كتقر أنك قرايتی هاد الشروط وفهمتيها ووافقتي عليها. هاد الشروط يمكن تتغير فاي وقت،
          وكل تغيير غادي يكون فعال من لحظة النشر.
        </p>

        <h2 className="text-xl font-bold text-gray-900">2. الملكية الفكرية</h2>
        <p>
          كل المحتوى فهاد الموقع (نصوص، صور، أدوات، شيفرات) هو ملك لـ Tawdif Pro. ما يمكنكش نسخ ولا توزيع ولا
          إعادة نشر المحتوى بدون إذن خطي.
        </p>

        <h2 className="text-xl font-bold text-gray-900">3. الأدوات والحاسبات</h2>
        <p>
          الأدوات المتاحة فهاد الموقع، بما فيها <Link href="/salary-calculator" className="text-emerald-600 underline">حاسبة الراتب</Link>،
          مقدمة "كما هي" للأغراض المعلوماتية. النتائج تقريبية وما تعتبرش استشارة مالية ولا قانونية.
          نحن مش مسؤولين عن أي قرار تتخذو بناء على هاد الأدوات.
        </p>

        <h2 className="text-xl font-bold text-gray-900">4. السلوك المسموح به</h2>
        <ul className="list-disc space-y-1 pr-6">
          <li>ما تستعملش الموقع لأنشطة غير قانونية.</li>
          <li>ما تحاولش اختراق أمان الموقع ولا الخوادم ديالو.</li>
          <li>ما تنشرش محتوى مسيء ولا مضلل.</li>
          <li>ما تستعملش روبوتات ولا سكريبتات لجمع البيانات بدون إذن.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900">5. حدود المسؤولية</h2>
        <p>
          Tawdif Pro وشركاوها ما عندهمش مسؤولية على أي أضرار مباشرة ولا غير مباشرة ناتجة عن استخدام الموقع.
          المعلومات فهاد الموقع للأغراض التعليمية والإعلامية فقط.
        </p>

        <h2 className="text-xl font-bold text-gray-900">6. روابط خارجية</h2>
        <p>
          الموقع يمكن يحتوي على روابط لمواقع خارجية. نحن مش مسؤولين على محتوى ولا ممارسات هاد المواقع.
        </p>

        <h2 className="text-xl font-bold text-gray-900">7. القانون المطبق</h2>
        <p>
          هاد الشروط خاضعة للقانون المغربي. أي نزاع كيكون تحت اختصاص المحاكم المغربية.
        </p>

        <h2 className="text-xl font-bold text-gray-900">8. التواصل</h2>
        <p>
          لأي استفسار بخصوص هاد الشروط، تواصل معانا على: <strong className="text-gray-900">contact@tawdifpro.ma</strong>
        </p>
      </div>
    </div>
  );
}
