"use client";

import { useState, useCallback, useMemo } from "react";
import { Calculator, Printer, Share2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { calculateSalary, formatMAD, type SalaryBreakdown } from "@/lib/salary-calculator";
import { SalaryBreakdownView } from "@/components/salary-calculator/SalaryBreakdown";

const GROSS_MIN = 0;
const GROSS_MAX = 100000;
const GROSS_STEP = 500;

export function SalaryCalculator() {
  const [grossInput, setGrossInput] = useState("8000");
  const [hasInteracted, setHasInteracted] = useState(false);

  const gross = parseFloat(grossInput);

  const validationError = useMemo<string | null>(() => {
    if (grossInput === "") return null;
    if (isNaN(gross)) return "الرجاء إدخال رقم صحيح";
    if (gross < GROSS_MIN) return `الراتب يجب أن يكون أكبر من ${formatMAD(GROSS_MIN)}`;
    if (gross > GROSS_MAX) return `الراتب يجب أن يكون أقل من ${formatMAD(GROSS_MAX)}`;
    return null;
  }, [grossInput, gross]);

  const result = useMemo<SalaryBreakdown | null>(() => {
    if (validationError || isNaN(gross) || gross <= 0) return null;
    return calculateSalary(gross);
  }, [gross, validationError]);

  const handleInputChange = useCallback((value: string) => {
    setHasInteracted(true);
    setGrossInput(value);
  }, []);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const handleShare = useCallback(async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      alert("تم نسخ الرابط!");
    } catch {
      prompt("انسخ الرابط:", url);
    }
  }, []);

  const sliderValue = useMemo(() => {
    const val = parseFloat(grossInput);
    if (isNaN(val)) return 0;
    return Math.min(Math.max(val, 0), GROSS_MAX);
  }, [grossInput]);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
            <Calculator className="h-5 w-5 text-emerald-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              حاسبة الراتب الصافي
            </h2>
            <p className="text-sm text-gray-500">
              أدخل راتبك الخام الشهري لمعرفة الصافي بعد الخصومات
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="gross-salary"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              الراتب الخام الشهري (Brut)
            </label>
            <div className="relative">
              <input
                id="gross-salary"
                type="text"
                inputMode="numeric"
                value={grossInput}
                onChange={(e) => handleInputChange(e.target.value)}
                className={cn(
                  "h-12 w-full rounded-lg border px-4 text-lg font-semibold text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0",
                  validationError && hasInteracted
                    ? "border-red-300 focus:ring-red-400"
                    : "border-gray-300 focus:ring-emerald-500",
                )}
                aria-invalid={validationError !== null && hasInteracted}
                aria-describedby={validationError ? "salary-error" : undefined}
                placeholder="مثلاً: 8000"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-400">
                MAD
              </span>
            </div>
            {validationError && hasInteracted && (
              <p id="salary-error" className="mt-1 flex items-center gap-1 text-sm text-red-600" role="alert">
                <AlertCircle className="h-4 w-4" />
                {validationError}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="salary-slider" className="sr-only">
              تحريك قيمة الراتب
            </label>
            <input
              id="salary-slider"
              type="range"
              min={GROSS_MIN}
              max={GROSS_MAX}
              step={GROSS_STEP}
              value={sliderValue}
              onChange={(e) => handleInputChange(e.target.value)}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-emerald-600"
              aria-label="شريط تحريك الراتب الخام"
            />
            <div className="mt-1 flex justify-between text-xs text-gray-400">
              <span>{formatMAD(GROSS_MIN)}</span>
              <span>{formatMAD(GROSS_MAX)}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-2">
          <button
            onClick={handlePrint}
            className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="طباعة النتائج"
          >
            <Printer className="h-4 w-4" />
            طباعة
          </button>
          <button
            onClick={handleShare}
            className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="مشاركة الرابط"
          >
            <Share2 className="h-4 w-4" />
            مشاركة
          </button>
        </div>
      </div>

      {result && <div className="mt-6"><SalaryBreakdownView data={result} /></div>}

      {!result && hasInteracted && grossInput !== "" && !validationError && (
        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-500">
          يرجى إدخال قيمة صالحة للراتب الخام
        </div>
      )}
    </div>
  );
}


