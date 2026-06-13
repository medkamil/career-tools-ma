import type { Metadata } from "next";
import { Printer } from "lucide-react";

export const metadata: Metadata = {
  title: "طباعة الشيك",
  description: "أداة لطباعة الشيكات البنكية بالمغرب بسهولة وبصيغة احترافية",
};

export default function ChequePrinterPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">
        <Printer className="h-8 w-8 text-emerald-600" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900">طباعة الشيك</h1>
      <p className="mt-4 text-lg text-gray-600">
        أداة لطباعة الشيكات البنكية المغربية بكل سهولة. أدخل المعلومات واحصل
        على شيك جاهز للطباعة.
      </p>

      <div className="mt-12 rounded-xl border-2 border-dashed border-gray-300 p-12">
        <p className="text-gray-500">
          الأداة قيد التطوير. ترقبوا الإطلاق قريبًا!
        </p>
      </div>
    </div>
  );
}
