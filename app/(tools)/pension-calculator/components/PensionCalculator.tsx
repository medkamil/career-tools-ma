"use client";

import { useState } from "react";
import { Calculator, Info } from "lucide-react";

interface PensionInput {
  avgSalary: number;
  yearsService: number;
  retirementAge: number;
  birthDate: string;
}

interface PensionResult {
  monthlyPension: number;
  annualPension: number;
  contributionRate: number;
  pensionRate: number;
  eligible: boolean;
  message: string;
}

const defaultInput: PensionInput = {
  avgSalary: 8000,
  yearsService: 20,
  retirementAge: 63,
  birthDate: "",
};

function calculateCNSS(input: PensionInput): PensionResult {
  const { avgSalary, yearsService, retirementAge } = input;

  // CNSS rules (simplified):
  // - Legal retirement age: 63 (can defer to 65)
  // - Minimum contribution years: 3240 days (~9 years) for pension
  // - Pension rate: 50% for 3240 days + 0.5% per additional 216 days (6 quarters)
  // - Max pension rate: 100% (but effectively capped)
  // - Contribution base: max 6000 MAD/month for CNSS
  
  const cappedSalary = Math.min(avgSalary, 6000);
  const yearsInDays = yearsService * 360;
  
  const eligible = yearsInDays >= 3240;
  
  let baseRate = 0;
  if (eligible) {
    baseRate = 50; // 50% for 3240 days
    const extraDays = Math.max(0, yearsInDays - 3240);
    const extraQuarters = Math.floor(extraDays / 54); // 54 days per quarter
    baseRate += extraQuarters * 0.5;
    baseRate = Math.min(baseRate, 100);
  }

  const monthlyPension = eligible ? (cappedSalary * baseRate / 100) : 0;
  const annualPension = monthlyPension * 12;

  let message = "";
  if (!eligible) {
    const remainingDays = 3240 - yearsInDays;
    const remainingYears = Math.ceil(remainingDays / 360);
    message = `لا تستوفي الشروط بعد. تحتاج ${remainingDays} يوم إضافية (حوالي ${remainingYears} سنوات) للوصول للحد الأدنى.`;
  } else if (retirementAge < 63) {
    message = "يمكنك التقاعد ابتداءً من سن 63. إذا تقاعدت قبل 63، قد تنخفض نسبة المعاش.";
  } else {
    message = "أنت تستوفي شروط التقاعد. يمكنك التقدم بطلب المعاش التقاعدي.";
  }

  return {
    monthlyPension,
    annualPension,
    contributionRate: 6.74,
    pensionRate: baseRate,
    eligible,
    message,
  };
}

export function PensionCalculator() {
  const [input, setInput] = useState<PensionInput>(defaultInput);
  const [result, setResult] = useState<PensionResult | null>(null);

  const update = <K extends keyof PensionInput>(key: K, value: PensionInput[K]) => {
    const newInput = { ...input, [key]: value };
    setInput(newInput);
  };

  const handleCalculate = () => {
    setResult(calculateCNSS(input));
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">معلومات التقاعد</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">متوسط الراتب الشهري (درهم)</label>
            <input type="number" value={input.avgSalary || ""} onChange={(e) => update("avgSalary", parseFloat(e.target.value) || 0)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="8000" />
            <p className="mt-1 text-xs text-gray-400">CNSS تحتسب على أساس 6,000 درهم كحد أقصى</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">مدة الخدمة (سنوات)</label>
            <input type="number" value={input.yearsService || ""} onChange={(e) => update("yearsService", parseInt(e.target.value) || 0)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="20" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">سن التقاعد</label>
            <select value={input.retirementAge} onChange={(e) => update("retirementAge", parseInt(e.target.value))} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500">
              {[60, 61, 62, 63, 64, 65].map((age) => <option key={age} value={age}>{age} سنة</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">تاريخ الميلاد</label>
            <input type="date" value={input.birthDate} onChange={(e) => update("birthDate", e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" />
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button onClick={handleCalculate} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-3 text-base font-medium text-white shadow-lg shadow-emerald-200/50 transition-all hover:-translate-y-0.5 hover:shadow-xl">
          <Calculator className="h-5 w-5" />
          احسب المعاش التقاعدي
        </button>
      </div>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">نتيجة الحساب</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-emerald-50 p-4 text-center">
                <p className="text-sm text-gray-500">المعاش الشهري</p>
                <p className="text-2xl font-bold text-emerald-600">{result.monthlyPension.toFixed(2)}</p>
                <p className="text-xs text-gray-400">درهم</p>
              </div>
              <div className="rounded-xl bg-emerald-50 p-4 text-center">
                <p className="text-sm text-gray-500">المعاش السنوي</p>
                <p className="text-2xl font-bold text-emerald-600">{result.annualPension.toFixed(2)}</p>
                <p className="text-xs text-gray-400">درهم في السنة</p>
              </div>
              <div className="rounded-xl bg-blue-50 p-4 text-center">
                <p className="text-sm text-gray-500">نسبة المعاش</p>
                <p className="text-xl font-bold text-blue-600">{result.pensionRate.toFixed(1)}%</p>
                <p className="text-xs text-gray-400">من الراتب المرجعي</p>
              </div>
              <div className="rounded-xl bg-gray-50 p-4 text-center">
                <p className="text-sm text-gray-500">نسبة المساهمة</p>
                <p className="text-xl font-bold text-gray-600">{result.contributionRate}%</p>
                <p className="text-xs text-gray-400">CNSS</p>
              </div>
            </div>
          </div>

          <div className={`rounded-2xl border p-6 shadow-sm ${result.eligible ? "border-emerald-100 bg-emerald-50/50" : "border-amber-100 bg-amber-50/50"}`}>
            <div className="flex items-start gap-3">
              <Info className={`h-5 w-5 mt-0.5 ${result.eligible ? "text-emerald-600" : "text-amber-600"}`} />
              <div>
                <h3 className={`text-sm font-semibold ${result.eligible ? "text-emerald-900" : "text-amber-900"}`}>
                  {result.eligible ? "أنت مؤهل للتقاعد" : "لا تستوفي الشروط بعد"}
                </h3>
                <p className={`mt-1 text-sm ${result.eligible ? "text-emerald-700" : "text-amber-700"}`}>{result.message}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-900">معلومات إضافية</h3>
            <div className="mt-2 space-y-1 text-xs text-gray-500">
              <p>• الحد الأدنى لسن التقاعد في CNSS: 63 سنة (للرجال والنساء)</p>
              <p>• الحد الأدنى لمدة المساهمة: 3,240 يوم (حوالي 9 سنوات)</p>
              <p>• النسبة الأساسية: 50% عن أول 3,240 يوم + 0.5% عن كل 54 يوم إضافية</p>
              <p>• الحد الأقصى للمعاش: 100% من الراتب المرجعي</p>
              <p>• الراتب المرجعي: متوسط آخر 8 سنوات (محصور في 6,000 درهم)</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
