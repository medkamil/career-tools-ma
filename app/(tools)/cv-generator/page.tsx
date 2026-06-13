import type { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "مولد السيرة الذاتية",
  description:
    "أنشئ سيرة ذاتية احترافية باللغة العربية بخطوات بسيطة - مولد CV مجاني",
};

export default function CvGeneratorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">
        <FileText className="h-8 w-8 text-emerald-600" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900">مولد السيرة الذاتية</h1>
      <p className="mt-4 text-lg text-gray-600">
        أداة احترافية لإنشاء السيرة الذاتية (CV) باللغة العربية. قم بتعبئة
        معلوماتك واحصل على سيرة ذاتية جاهزة للطباعة.
      </p>

      <div className="mt-12 rounded-xl border-2 border-dashed border-gray-300 p-12">
        <p className="text-gray-500">
          واجهة إنشاء السيرة الذاتية قيد التطوير. ترقبوا الإطلاق قريبًا!
        </p>
      </div>
    </div>
  );
}
