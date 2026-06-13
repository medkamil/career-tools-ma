"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { calculateNetSalary, formatMAD } from "@/app/lib/salary-calculator";
import { SalaryBreakdownView } from "./SalaryBreakdown";

export function SalaryCalculator() {
  const [gross, setGross] = useState(8000);
  const [inputValue, setInputValue] = useState("8000");
  const [error, setError] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleChange = (value: string) => {
    setInputValue(value);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const parsed = parseFloat(value);
      if (isNaN(parsed) || parsed < 0) {
        setError("الرجاء إدخال راتب صحيح أكبر من 0");
        return;
      }
      if (parsed > 100000) {
        setError("الحد الأقصى للراتب هو 100,000 درهم");
        return;
      }
      setError(null);
      setGross(parsed);
    }, 300);
  };

  const result = useMemo(() => calculateNetSalary(gross), [gross]);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <label htmlFor="gross-input" className="mb-1.5 block text-sm font-medium text-gray-700">
          الراتب الخام الشهري (درهم)
        </label>
        <div className="relative">
          <input
            id="gross-input"
            type="text"
            inputMode="numeric"
            value={inputValue}
            onChange={(e) => handleChange(e.target.value)}
            className="h-12 w-full rounded-lg border border-gray-300 px-4 text-lg font-semibold text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-describedby={error ? "gross-error" : undefined}
            aria-invalid={!!error}
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">MAD</span>
        </div>
        {error && (
          <p id="gross-error" className="mt-1 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        <input
          type="range"
          min={0}
          max={100000}
          step={500}
          value={gross}
          onChange={(e) => { const v = e.target.value; setInputValue(v); setGross(parseFloat(v)); setError(null); }}
          className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-emerald-600"
          aria-label="شريط تحريك الراتب"
        />
        <div className="mt-1 flex justify-between text-xs text-gray-400">
          <span>0 MAD</span>
          <span>100,000 MAD</span>
        </div>
      </div>

      <div className="mt-6">
        <SalaryBreakdownView data={result} />
      </div>
    </div>
  );
}
