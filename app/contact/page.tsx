import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "اتصل بنا",
  description: "تواصل مع فريق Tawdif Pro. عندك سؤال على حاسبة الراتب ولا التكوين المهني؟ ولا باغي شراكة ولا إعلان؟ نحن هنا باش نعاونوك فظرف 24-48 ساعة.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">اتصل بنا</h1>
        <p className="mt-3 text-lg text-gray-600">
          عندك سؤال؟ اقتراح؟ ولا باغي تتعاون معانا؟ تواصل معانا
        </p>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">معلومات الاتصال</h2>
          <div className="mt-4 space-y-4 text-sm text-gray-600">
            <div>
              <p className="font-medium text-gray-900">البريد الإلكتروني</p>
              <a href="mailto:contact@tawdifpro.ma" className="text-emerald-600 underline hover:text-emerald-700">
                contact@tawdifpro.ma
              </a>
            </div>
            <div>
              <p className="font-medium text-gray-900">الرد</p>
              <p>نحاول نرد عليك فظرف 24-48 ساعة</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">تابعنا</h2>
          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>تابعنا على الشبكات الاجتماعية باش توصل لآخر المقالات والأدوات</p>
            <div className="flex gap-3">
              <span className="rounded-lg bg-gray-100 px-3 py-2 text-gray-500">قريباً على LinkedIn</span>
              <span className="rounded-lg bg-gray-100 px-3 py-2 text-gray-500">قريباً على Facebook</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-6">
        <p className="text-sm font-semibold text-amber-800">للاستفسارات المهنية</p>
        <p className="mt-1 text-sm text-amber-700">
          إذا كنت ممثل شركة وتبغي شراكة أو إعلان، تواصل معانا على البريد الإلكتروني مع عنوان "شراكة" فـ Subject.
        </p>
      </div>
    </div>
  );
}
