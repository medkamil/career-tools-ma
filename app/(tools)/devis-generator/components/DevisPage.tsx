"use client";

import { useState } from "react";
import { FileText } from "lucide-react";
import { DevisForm, defaultDevisData, type DevisData } from "./DevisForm";
import { DevisPreview } from "./DevisPreview";

export function DevisPage() {
  const [data, setData] = useState<DevisData>(defaultDevisData);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">
          <FileText className="h-8 w-8 text-emerald-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">مولد عرض السعر (Devis)</h1>
        <p className="mt-4 text-lg text-gray-600">
          أداة مجانية لإنشاء عروض الأسعار المهنية في المغرب. املأ المعلومات واحصل على عرض سعر جاهز للطباعة بصيغة PDF.
        </p>
      </div>

      <div className="mt-10">
        <DevisForm data={data} onChange={setData} onGenerate={() => setShowPreview(true)} />
      </div>

      {showPreview && (
        <DevisPreview data={data} onClose={() => setShowPreview(false)} />
      )}
    </div>
  );
}
