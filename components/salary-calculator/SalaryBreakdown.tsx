import { type SalaryBreakdown, formatMAD, formatPercent } from "@/lib/salary-calculator";
import { cn } from "@/lib/utils";

interface SalaryBreakdownProps {
  data: SalaryBreakdown;
}

interface BreakdownBarItem {
  label: string;
  value: number;
  color: string;
}

const breakdownBars: BreakdownBarItem[] = [
  { label: "الراتب الخام", value: 0, color: "bg-gray-400" },
  { label: "اقتطاع CNSS", value: 0, color: "bg-blue-500" },
  { label: "اقتطاع AMO", value: 0, color: "bg-amber-500" },
  { label: "الضريبة على الدخل (IR)", value: 0, color: "bg-red-500" },
  { label: "صافي الراتب", value: 0, color: "bg-emerald-500" },
];

function getBarItems(data: SalaryBreakdown): BreakdownBarItem[] {
  return [
    { label: "الراتب الخام", value: data.gross, color: "bg-gray-400" },
    { label: "اقتطاع CNSS", value: data.cnss, color: "bg-blue-500" },
    { label: "اقتطاع AMO", value: data.amo, color: "bg-amber-500" },
    { label: "الضريبة على الدخل (IR)", value: data.irMonthly, color: "bg-red-500" },
    { label: "صافي الراتب", value: data.netSalary, color: "bg-emerald-500" },
  ];
}

function BreakdownBar({ label, value, total, color }: BreakdownBarItem & { total: number }) {
  const percent = formatPercent(value, total);
  return (
    <div className="flex items-center gap-3">
      <div className={cn("h-3 w-3 flex-shrink-0 rounded-full", color)} />
      <div className="flex flex-1 items-center gap-2">
        <span className="min-w-[120px] text-sm text-gray-600">{label}</span>
        <div className="flex-1">
          <div className="h-2 overflow-hidden rounded-full bg-gray-100">
            <div
              className={cn("h-full rounded-full transition-all duration-500", color)}
              style={{ width: `${Math.min(percent, 100)}%` }}
            />
          </div>
        </div>
        <span className="min-w-[40px] text-right text-sm font-medium text-gray-900">
          {percent}%
        </span>
      </div>
    </div>
  );
}

export function SalaryBreakdownView({ data }: SalaryBreakdownProps) {
  const items = [
    { label: "الراتب الخام (Brut)", value: data.gross, highlight: false },
    { label: "اقتطاع CNSS (6.74%)", value: data.cnss, highlight: false },
    { label: "اقتطاع AMO (2.26%)", value: data.amo, highlight: false },
    { label: "مجموع الاقتطاعات", value: data.socialTotal, highlight: true },
    { label: "الراتب قبل الضريبة", value: data.netBeforeExpenses, highlight: false },
    { label: "مصاريف مهنية (20%)", value: data.professionalExpenses, highlight: false },
    { label: "الراتب الخاضع للضريبة", value: data.netTaxable, highlight: false },
    { label: "الضريبة على الدخل (IR)", value: data.irMonthly, highlight: true },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center">
        <p className="text-sm font-medium text-emerald-700">صافي الراتب الشهري</p>
        <p className="mt-1 text-3xl font-bold text-emerald-600" aria-live="polite">
          {formatMAD(data.netSalary)}
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-sm font-semibold text-gray-900">
          تفصيل الراتب
        </h3>
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.label}
              className={cn(
                "flex items-center justify-between border-b border-gray-100 pb-2 text-sm",
                item.highlight && "font-semibold text-gray-900",
              )}
            >
              <span className={item.highlight ? "text-gray-900" : "text-gray-600"}>
                {item.label}
              </span>
              <span className={item.highlight ? "text-gray-900" : "text-gray-700"}>
                {formatMAD(item.value)}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-sm font-semibold text-gray-900">
          التوزيع النسبي
        </h3>
        <div className="space-y-3">
          {getBarItems(data).map((bar) => (
            <BreakdownBar
              key={bar.label}
              label={bar.label}
              value={bar.value}
              total={data.gross}
              color={bar.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
