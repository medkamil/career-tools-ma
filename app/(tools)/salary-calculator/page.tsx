import type { Metadata } from "next";
import { Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "حاسبة الراتب",
  description:
    "احسب صافي راتبك الشهري بعد الخصومات - حاسبة الأجور والضرائب في المغرب",
};

export default function SalaryCalculatorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">
        <Calculator className="h-8 w-8 text-emerald-600" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900">حاسبة الراتب</h1>
      <p className="mt-4 text-lg text-gray-600">
        أداة لحساب صافي الراتب الشهري بعد خصم الضرائب والتأمينات الاجتماعية
        وفقًا للقانون المغربي.
      </p>

      <div className="mt-12 rounded-xl border-2 border-dashed border-gray-300 p-12">
        <p className="text-gray-500">
          الحاسبة قيد التطوير. ترقبوا الإطلاق قريبًا!
        </p>
      </div>
    </div>
  );
}
