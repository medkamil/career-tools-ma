import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description: "سياسة الخصوصية لمنصة Tawdif Pro. نشرح كيفاش كنجمعو المعلومات الشخصية، كيفاش كنسخدمو الكوكيز و Google AdSense، وكيف نحمي بياناتك. تواصل معانا فحال عندك سؤال.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">سياسة الخصوصية</h1>
      <p className="mt-2 text-sm text-gray-500">آخر تحديث: يونيو 2026</p>

      <div className="mt-8 space-y-6 text-base leading-8 text-gray-700">
        <p>
          مرحبا بك في <strong>Tawdif Pro</strong>. نحن نلتزم بحماية خصوصيتك. هاد السياسة كتشرح كيفاش كنجمعو،
          نستعملو، ونحميو المعلومات الشخصية ديالك.
        </p>

        <h2 className="text-xl font-bold text-gray-900">1. المعلومات الي كنجمعوها</h2>
        <p>كنجمعو نوعين من المعلومات:</p>
        <ul className="list-disc space-y-1 pr-6">
          <li><strong>معلومات تقدمها لنا:</strong> الاسم والبريد الإلكتروني فحالة تواصلتي معانا عبر صفحة اتصل بنا.</li>
          <li><strong>معلومات آلية:</strong> عنوان IP، نوع المتصفح، الصفحات الزيارة، ومدة التصفح. هاد المعلومات كنجمعوها عبر Google Analytics.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900">2. كيفاش كنسخدمو بالمعلومات</h2>
        <ul className="list-disc space-y-1 pr-6">
          <li>تحسين تجربتك فالتصفح وتطوير المحتوى ديالنا.</li>
          <li>تحليل الإحصائيات باش نفهمو شنو كيعجب الزوار.</li>
          <li>التواصل معاك فحالة بعتيلنا رسالة.</li>
          <li>عرض إعلانات متوافقة مع اهتماماتك (AdSense).</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900">3. ملفات تعريف الارتباط (Cookies)</h2>
        <p>
          كنسخدمو الكوكيز باش نحسنو الخدمة. الكوكيز كتعاوننا نعرفو كيفاش الزوار كيستعملو الموقع. تقدر تتحكم فالكوكيز
          من إعدادات المتصفح ديالك.
        </p>

        <h2 className="text-xl font-bold text-gray-900">4. Google AdSense</h2>
        <p>
          كنسخدمو Google AdSense باش نعرضو الإعلانات. Google كيستعمل الكوكيز باش يعرض إعلانات مناسبة. يمكنك
          زيارة <a href="https://policies.google.com/technologies/ads" className="text-emerald-600 underline" target="_blank" rel="noopener">سياسة إعلانات Google</a> باش تعرف أكثر.
        </p>

        <h2 className="text-xl font-bold text-gray-900">5. حماية المعلومات</h2>
        <p>
          كتخذو إجراءات أمنية مناسبة باش نحميو معلوماتك من الوصول غير المصرح به. المعلومات الشخصية ديالك ما كتنباعش
          ولا كتشارك مع طرف ثالث إلا فالحالات القانونية.
        </p>

        <h2 className="text-xl font-bold text-gray-900">6. حقوقك</h2>
        <ul className="list-disc space-y-1 pr-6">
          <li>حق الوصول للمعلومات الشخصية ديالك.</li>
          <li>حق طلب تصحيح ولا حذف المعلومات.</li>
          <li>حق الاعتراض على معالجة البيانات.</li>
          <li>حق سحب الموافقة فاي وقت.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900">7. التواصل معانا</h2>
        <p>
          إذا كانت عندك أي أسئلة بخصوص هاد السياسة، تواصل معانا على: <strong className="text-gray-900">contact@tawdifpro.ma</strong>
        </p>
      </div>
    </div>
  );
}
