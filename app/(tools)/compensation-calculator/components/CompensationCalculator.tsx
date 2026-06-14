"use client";

import { useState, useMemo } from "react";
import { calculateCompensation } from "@/app/lib/compensation-calculator";

export function CompensationCalculator() {
  const [salary, setSalary] = useState("8000");
  const [years, setYears] = useState("5");
  const [contract, setContract] = useState<"CDI" | "CDD">("CDI");
  const [leaveDays, setLeaveDays] = useState("10");
  const [dismissal, setDismissal] = useState<"economique" | "disciplinaire" | "faute" | "conventionnel">("economique");

  const numSalary = parseFloat(salary) || 0;
  const numYears = parseFloat(years) || 0;
  const numLeave = parseFloat(leaveDays) || 0;

  const result = useMemo(
    () => calculateCompensation({ monthlySalary: numSalary, yearsWorked: numYears, contractType: contract, leaveDaysRemaining: numLeave, noticeServed: false, dismissalType: dismissal }),
    [numSalary, numYears, contract, numLeave, dismissal],
  );

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">الراتب الشهري (درهم)</label>
            <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">عدد سنوات العمل</label>
            <input type="number" value={years} onChange={(e) => setYears(e.target.value)} min="0" max="50" className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">نوع العقد</label>
            <select value={contract} onChange={(e) => setContract(e.target.value as "CDI" | "CDD")} className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="CDI">CDI (عقد دائم)</option>
              <option value="CDD">CDD (عقد مؤقت)</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">نوع الفصل</label>
            <select value={dismissal} onChange={(e) => setDismissal(e.target.value as typeof dismissal)} className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="economique">فصل اقتصادي</option>
              <option value="disciplinaire">فصل تأديبي</option>
              <option value="faute">خطأ جسيم (بدون تعويض)</option>
              <option value="conventionnel">مغادرة اتفاقية</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">أيام العطلة المتبقية</label>
            <input type="number" value={leaveDays} onChange={(e) => setLeaveDays(e.target.value)} min="0" max="60" className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6">
          <h3 className="mb-4 text-lg font-bold text-gray-900">تفاصيل التعويضات</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
              <span className="text-sm text-gray-700">تعويض الفصل ({result.details.licenciementMonths.toFixed(1)} شهر)</span>
              <span className="font-bold text-gray-900">{result.licenciement.toFixed(2)} درهم</span>
            </div>
            {result.preavis > 0 && (
              <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                <span className="text-sm text-gray-700">تعويض الإخطار ({result.details.preavisDays} يوم)</span>
                <span className="font-bold text-gray-900">{result.preavis.toFixed(2)} درهم</span>
              </div>
            )}
            {result.conge > 0 && (
              <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                <span className="text-sm text-gray-700">تعويض العطلة ({numLeave} يوم)</span>
                <span className="font-bold text-gray-900">{result.conge.toFixed(2)} درهم</span>
              </div>
            )}
            {result.details.cddPremium > 0 && (
              <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                <span className="text-sm text-gray-700">علاوة CDD (10%)</span>
                <span className="font-bold text-gray-900">{result.details.cddPremium.toFixed(2)} درهم</span>
              </div>
            )}
          </div>
          <div className="mt-4 flex items-center justify-between rounded-lg bg-emerald-50 p-4">
            <span className="text-base font-bold text-gray-900">المجموع الكلي</span>
            <span className="text-xl font-bold text-emerald-700">{result.total.toFixed(2)} درهم</span>
          </div>
        </div>
      </div>
    </div>
  );
}
