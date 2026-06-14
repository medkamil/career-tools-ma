import type { Metadata } from "next";
import { Receipt } from "lucide-react";
import { FactureGenerator } from "./components/FactureGenerator";

export const metadata: Metadata = {
  title: "مولد الفاتورة (Facture) في المغرب - أداة مجانية",
  description: "أنشئ فاتورة احترافية (Facture) للمغرب مجاناً. أداة سهلة لتوليد الفواتير مع TVA، طباعة PDF، ومطابقة للمعايير القانونية المغربية (ICE, RC).",
};

export default function FactureGeneratorPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/80 to-white pb-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-200/30 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-200/50">
              <Receipt className="h-8 w-8 text-white" />
            </div>
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              أداة مجانية
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                مولد الفاتورة (Facture)
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              أنشئ فاتورة احترافية للمغرب مجاناً. أداة سهلة لتوليد الفواتير مع TVA، طباعة PDF، ومطابقة للمعايير القانونية المغربية.
            </p>
          </div>
        </div>
      </section>
      <FactureGenerator />
    </>
  );
}
