"use client";

import { Printer, Share2 } from "lucide-react";
import type { SalaryBreakdown } from "@/app/lib/salary-calculator";
import { formatMAD, percentOf } from "@/app/lib/salary-calculator";
import { cn } from "@/lib/utils";

interface Props {
  data: SalaryBreakdown;
}

const rows: { label: string; value: keyof SalaryBreakdown; highlight?: boolean }[] = [
  { label: "الراتب الخام (Brut)", value: "gross" },
  { label: "CNSS (6.74%)", value: "cnss" },
  { label: "AMO (2.26%)", value: "amo" },
  { label: "مجموع الاقتطاعات", value: "socialTotal", highlight: true },
  { label: "الراتب قبل المصاريف المهنية", value: "netBeforeExpenses" },
  { label: "المصاريف المهنية (20%)", value: "professionalExpenses" },
  { label: "الراتب الخاضع للضريبة", value: "netTaxable" },
  { label: "الضريبة على الدخل (IR)", value: "ir", highlight: true },
];

const bars: { label: string; color: string }[] = [
  { label: "CNSS", color: "bg-blue-500" },
  { label: "AMO", color: "bg-amber-500" },
  { label: "IR", color: "bg-red-500" },
  { label: "الصافي", color: "bg-emerald-500" },
];

export function SalaryBreakdownView({ data }: Props) {
  const handlePrint = () => window.print();
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("تم نسخ الرابط!");
    } catch {
      prompt("انسخ الرابط:", window.location.href);
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center">
        <p className="text-sm font-medium text-emerald-700">صافي الراتب الشهري</p>
        <p className="mt-1 text-3xl font-bold text-emerald-600" aria-live="polite">
          {formatMAD(data.netSalary)}
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6">
        <h3 className="mb-4 text-sm font-semibold text-gray-900">تفصيل الراتب</h3>
        <div className="space-y-3">
          {rows.map((r) => (
            <div
              key={r.value}
              className={cn("flex justify-between border-b border-gray-100 pb-2 text-sm", r.highlight && "font-semibold text-gray-900")}
            >
              <span className={r.highlight ? "text-gray-900" : "text-gray-600"}>{r.label}</span>
              <span>{formatMAD(data[r.value])}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6">
        <h3 className="mb-4 text-sm font-semibold text-gray-900">التوزيع النسبي</h3>
        <div className="space-y-3">
          {bars.map((b) => {
            const val = b.label === "CNSS" ? data.cnss : b.label === "AMO" ? data.amo : b.label === "IR" ? data.ir : data.netSalary;
            const pct = percentOf(val, data.gross);
            return (
              <div key={b.label} className="flex items-center gap-3">
                <div className={cn("h-3 w-3 flex-shrink-0 rounded-full", b.color)} />
                <span className="w-20 text-sm text-gray-600">{b.label}</span>
                <div className="flex-1">
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div className={cn("h-full rounded-full transition-all duration-500", b.color)} style={{ width: `${Math.min(pct, 100)}%` }} />
                  </div>
                </div>
                <span className="w-12 text-right text-sm font-medium text-gray-900">{pct}%</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex gap-2 print:hidden">
        <button onClick={handlePrint} className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
          <Printer className="h-4 w-4" /> طباعة
        </button>
        <button onClick={handleShare} className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
          <Share2 className="h-4 w-4" /> مشاركة
        </button>
      </div>
    </div>
  );
}
