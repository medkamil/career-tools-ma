"use client";

import { useState } from "react";
import { FileText } from "lucide-react";
import { DevisForm, defaultDevisData, type DevisData } from "./DevisForm";
import { DevisPreview } from "./DevisPreview";

export function DevisPage() {
  const [data, setData] = useState<DevisData>(defaultDevisData);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/80 to-white pb-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-200/30 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-200/50">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
              أداة مجانية
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                مولد عرض السعر (Devis)
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              أداة مجانية لإنشاء عروض الأسعار المهنية في المغرب. املأ المعلومات واحصل على عرض سعر جاهز للطباعة بصيغة PDF.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
        <DevisForm data={data} onChange={setData} onGenerate={() => setShowPreview(true)} />
      </div>

      {showPreview && (
        <DevisPreview data={data} onClose={() => setShowPreview(false)} />
      )}
    </>
  );
}
