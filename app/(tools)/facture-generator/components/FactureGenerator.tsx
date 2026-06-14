"use client";

import { useState } from "react";
import { Plus, Trash2, Eye } from "lucide-react";

interface LineItem {
  description: string;
  quantity: number;
  unitPrice: number;
  tvaRate: number;
}

interface FactureData {
  sellerName: string;
  sellerAddress: string;
  sellerICE: string;
  sellerRC: string;
  sellerPhone: string;
  clientName: string;
  clientAddress: string;
  clientICE: string;
  factureNumber: string;
  date: string;
  items: LineItem[];
  notes: string;
}

const tvaRates = [20, 14, 10, 7];

const defaultData: FactureData = {
  sellerName: "",
  sellerAddress: "",
  sellerICE: "",
  sellerRC: "",
  sellerPhone: "",
  clientName: "",
  clientAddress: "",
  clientICE: "",
  factureNumber: "FACT-" + Date.now().toString().slice(-6),
  date: new Date().toISOString().split("T")[0],
  items: [{ description: "", quantity: 1, unitPrice: 0, tvaRate: 20 }],
  notes: "",
};

export function FactureGenerator() {
  const [data, setData] = useState<FactureData>(defaultData);

  const update = <K extends keyof FactureData>(key: K, value: FactureData[K]) => setData({ ...data, [key]: value });

  const updateItem = (i: number, field: keyof LineItem, value: string | number) => {
    const items = [...data.items];
    items[i] = { ...items[i], [field]: value };
    update("items", items);
  };

  const subtotal = data.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const tvaByRate = tvaRates.map((rate) => ({
    rate,
    base: data.items.filter((i) => i.tvaRate === rate).reduce((sum, item) => sum + item.quantity * item.unitPrice, 0),
  }));
  const totalTva = tvaByRate.reduce((sum, t) => sum + t.base * t.rate / 100, 0);
  const total = subtotal + totalTva;

  const handlePreview = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const tvaRows = tvaByRate.filter((t) => t.base > 0);

    printWindow.document.write(`
      <!DOCTYPE html>
      <html dir="rtl" lang="ar">
      <head><meta charset="utf-8"><title>فاتورة: ${data.factureNumber}</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Cairo', sans-serif; background: #f3f4f6; padding: 20px; direction: rtl; }
        .page { max-width: 210mm; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #059669, #10b981); color: white; padding: 24px 32px; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { font-size: 24px; font-weight: 700; }
        .header .facture-num { font-size: 14px; opacity: 0.9; }
        .body { padding: 24px 32px; }
        .parties { display: flex; justify-content: space-between; margin-bottom: 24px; gap: 24px; }
        .parties .box { flex: 1; padding: 12px; background: #f9fafb; border-radius: 8px; }
        .parties .box h3 { font-size: 13px; font-weight: 700; color: #059669; margin-bottom: 6px; }
        .parties .box p { font-size: 12px; color: #374151; line-height: 1.6; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
        th { background: #f0fdf4; color: #111827; font-size: 12px; font-weight: 700; padding: 8px 10px; text-align: right; }
        td { font-size: 12px; padding: 8px 10px; border-bottom: 1px solid #e5e7eb; color: #374151; }
        .totals { margin-right: auto; width: 280px; }
        .totals .row { display: flex; justify-content: space-between; padding: 4px 0; font-size: 12px; color: #4b5563; }
        .totals .row.total { font-size: 16px; font-weight: 700; color: #059669; border-top: 2px solid #059669; padding-top: 8px; margin-top: 4px; }
        .notes { margin-top: 16px; padding: 12px; background: #f9fafb; border-radius: 8px; font-size: 12px; color: #6b7280; }
        .no-print { text-align: center; margin-bottom: 16px; }
        .no-print button { background: #059669; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 14px; cursor: pointer; font-family: 'Cairo', sans-serif; }
        @media print { body { padding: 0; background: white; } .no-print { display: none; } }
      </style>
      </head><body>
      <div class="no-print"><button onclick="window.print()">طباعة / حفظ PDF</button></div>
      <div class="page">
        <div class="header">
          <div>
            <h1>فاتورة</h1>
            <div class="facture-num">رقم: ${data.factureNumber} - ${data.date}</div>
          </div>
          ${data.sellerName ? `<div style="text-align:left;font-size:14px;font-weight:600;">${data.sellerName}</div>` : ""}
        </div>
        <div class="body">
          <div class="parties">
            <div class="box">
              <h3>البائع</h3>
              <p>${data.sellerName || "—"}<br/>${data.sellerAddress || ""}${data.sellerAddress ? "<br/>" : ""}${data.sellerICE ? `ICE: ${data.sellerICE}<br/>` : ""}${data.sellerRC ? `RC: ${data.sellerRC}<br/>` : ""}${data.sellerPhone ? `هاتف: ${data.sellerPhone}` : ""}</p>
            </div>
            <div class="box">
              <h3>الزبون</h3>
              <p>${data.clientName || "—"}<br/>${data.clientAddress || ""}${data.clientAddress ? "<br/>" : ""}${data.clientICE ? `ICE: ${data.clientICE}` : ""}</p>
            </div>
          </div>
          <table>
            <thead>
              <tr><th style="width:50%">البيان</th><th>الكمية</th><th>الثمن الوحدوي</th><th>TVΑ</th><th>المبلغ</th></tr>
            </thead>
            <tbody>
              ${data.items.filter(i => i.description).map(i => `
                <tr><td>${i.description}</td><td>${i.quantity}</td><td>${i.unitPrice.toFixed(2)}</td><td>${i.tvaRate}%</td><td>${(i.quantity * i.unitPrice).toFixed(2)}</td></tr>
              `).join("")}
            </tbody>
          </table>
          <div class="totals">
            <div class="row"><span>المجموع الجزئي</span><span>${subtotal.toFixed(2)} درهم</span></div>
            ${tvaRows.map(t => `<div class="row"><span> TVΑ ${t.rate}% (${t.base.toFixed(2)})</span><span>${(t.base * t.rate / 100).toFixed(2)} درهم</span></div>`).join("")}
            <div class="row total"><span>المجموع النهائي</span><span>${total.toFixed(2)} درهم</span></div>
          </div>
          ${data.notes ? `<div class="notes"><p>${data.notes}</p></div>` : ""}
        </div>
      </div>
      </body></html>
    `);
    printWindow.document.close();
  };

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
        <div className="space-y-8">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">معلومات البائع</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div><label className="block text-sm font-medium text-gray-700">الاسم التجاري</label><input type="text" value={data.sellerName} onChange={(e) => update("sellerName", e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="شركة..." /></div>
              <div><label className="block text-sm font-medium text-gray-700">الهاتف</label><input type="text" value={data.sellerPhone} onChange={(e) => update("sellerPhone", e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="05 XX XX XX XX" /></div>
              <div className="sm:col-span-2"><label className="block text-sm font-medium text-gray-700">العنوان</label><input type="text" value={data.sellerAddress} onChange={(e) => update("sellerAddress", e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="العنوان الكامل" /></div>
              <div><label className="block text-sm font-medium text-gray-700">ICE</label><input type="text" value={data.sellerICE} onChange={(e) => update("sellerICE", e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="ICE" /></div>
              <div><label className="block text-sm font-medium text-gray-700">RC</label><input type="text" value={data.sellerRC} onChange={(e) => update("sellerRC", e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="RC" /></div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">معلومات الزبون</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div><label className="block text-sm font-medium text-gray-700">الاسم / الشركة</label><input type="text" value={data.clientName} onChange={(e) => update("clientName", e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="اسم الزبون" /></div>
              <div><label className="block text-sm font-medium text-gray-700">ICE</label><input type="text" value={data.clientICE} onChange={(e) => update("clientICE", e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="ICE" /></div>
              <div className="sm:col-span-2"><label className="block text-sm font-medium text-gray-700">العنوان</label><input type="text" value={data.clientAddress} onChange={(e) => update("clientAddress", e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="عنوان الزبون" /></div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">المنتجات / الخدمات</h2>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>رقم الفاتورة: {data.factureNumber}</span>
                <span>التاريخ: {data.date}</span>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="hidden sm:grid sm:grid-cols-12 gap-2 text-xs font-medium text-gray-500 px-1">
                <div className="sm:col-span-4">البيان</div>
                <div className="sm:col-span-2">الكمية</div>
                <div className="sm:col-span-2">الثمن الوحدوي</div>
                <div className="sm:col-span-2">TVA %</div>
                <div className="sm:col-span-2">المجموع</div>
              </div>
              {data.items.map((item, i) => (
                <div key={i} className="grid grid-cols-2 sm:grid-cols-12 gap-2 items-center rounded-lg border border-gray-100 bg-gray-50/50 p-3">
                  <input type="text" value={item.description} onChange={(e) => updateItem(i, "description", e.target.value)} className="col-span-2 sm:col-span-4 rounded-lg border border-gray-300 px-2 py-1.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="المنتج أو الخدمة" />
                  <input type="number" value={item.quantity || ""} onChange={(e) => updateItem(i, "quantity", parseInt(e.target.value) || 0)} className="rounded-lg border border-gray-300 px-2 py-1.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="1" />
                  <input type="number" value={item.unitPrice || ""} onChange={(e) => updateItem(i, "unitPrice", parseFloat(e.target.value) || 0)} className="rounded-lg border border-gray-300 px-2 py-1.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="0.00" />
                  <select value={item.tvaRate} onChange={(e) => updateItem(i, "tvaRate", parseInt(e.target.value))} className="rounded-lg border border-gray-300 px-2 py-1.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500">
                    {tvaRates.map((r) => <option key={r} value={r}>{r}%</option>)}
                  </select>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{(item.quantity * item.unitPrice).toFixed(2)}</span>
                    {data.items.length > 1 && (
                      <button onClick={() => update("items", data.items.filter((_, j) => j !== i))} className="text-red-400 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <button onClick={() => update("items", [...data.items, { description: "", quantity: 1, unitPrice: 0, tvaRate: 20 }])} className="flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700">
                <Plus className="h-4 w-4" /> إضافة صنف
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">ملاحظات</h2>
            <textarea value={data.notes} onChange={(e) => update("notes", e.target.value)} rows={2} className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="شروط الدفع، ملاحظات إضافية..." />
          </div>

          <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-emerald-50/50 to-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="space-y-1 text-sm text-gray-600">
                <p>المجموع الجزئي: <span className="font-medium text-gray-900">{subtotal.toFixed(2)} درهم</span></p>
                <p>TVΑ: <span className="font-medium text-gray-900">{totalTva.toFixed(2)} درهم</span></p>
                <p className="text-base font-bold text-emerald-600">المجموع النهائي: {total.toFixed(2)} درهم</p>
              </div>
              <button onClick={handlePreview} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-3 text-base font-medium text-white shadow-lg shadow-emerald-200/50 transition-all hover:-translate-y-0.5 hover:shadow-xl">
                <Eye className="h-5 w-5" />
                معاينة وطباعة
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
