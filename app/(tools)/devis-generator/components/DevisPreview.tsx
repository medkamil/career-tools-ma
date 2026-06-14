"use client";

import { useRef } from "react";
import { Printer, X } from "lucide-react";
import type { DevisData } from "./DevisForm";

interface DevisPreviewProps {
  data: DevisData;
  onClose: () => void;
}

export function DevisPreview({ data, onClose }: DevisPreviewProps) {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const tvaRates = [...new Set(data.items.map((i) => i.tva))];
    const tvaDetails = tvaRates.map((rate) => {
      const items = data.items.filter((i) => i.tva === rate);
      const ht = items.reduce((s, i) => s + i.quantity * i.unitPrice, 0);
      return { rate, ht, tva: (ht * rate) / 100 };
    });

    const totalHT = tvaDetails.reduce((s, d) => s + d.ht, 0);
    const totalTVA = tvaDetails.reduce((s, d) => s + d.tva, 0);
    const totalTTC = totalHT + totalTVA;

    const expiryDate = new Date(data.devisDate);
    expiryDate.setDate(expiryDate.getDate() + data.validityDays);

    printWindow.document.write(`
      <!DOCTYPE html>
      <html dir="rtl" lang="ar">
      <head>
        <meta charset="utf-8" />
        <title>عرض السعر - ${data.devisNumber}</title>
        <style>
          @page { margin: 15mm; size: A4; }
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Arial', 'Tahoma', sans-serif;
            font-size: 12px;
            color: #1a1a1a;
            line-height: 1.6;
            padding: 20px;
          }
          .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #059669; }
          .header-left h1 { font-size: 22px; color: #059669; margin-bottom: 4px; }
          .header-left p { font-size: 11px; color: #666; }
          .header-right { text-align: left; direction: ltr; }
          .header-right h2 { font-size: 16px; color: #059669; margin-bottom: 4px; }
          .header-right p { font-size: 11px; color: #666; }
          .info-grid { display: flex; gap: 30px; margin-bottom: 25px; }
          .info-box { flex: 1; }
          .info-box h3 { font-size: 12px; color: #059669; margin-bottom: 6px; padding-bottom: 4px; border-bottom: 1px solid #d1d5db; }
          .info-box p { font-size: 11px; color: #374151; }
          .client-section { margin-bottom: 25px; }
          .client-section h3 { font-size: 12px; color: #059669; margin-bottom: 6px; padding-bottom: 4px; border-bottom: 1px solid #d1d5db; }
          .client-section p { font-size: 11px; color: #374151; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
          th { background: #059669; color: white; padding: 8px 10px; text-align: right; font-size: 11px; }
          td { padding: 7px 10px; border-bottom: 1px solid #e5e7eb; font-size: 11px; }
          td.amount { text-align: left; direction: ltr; }
          .totals { width: 300px; margin-right: auto; margin-bottom: 25px; }
          .totals td { border: none; padding: 4px 10px; font-size: 11px; }
          .totals .final td { font-weight: bold; font-size: 13px; color: #059669; border-top: 2px solid #059669; padding-top: 8px; }
          .notes { margin-top: 20px; padding: 12px; background: #f9fafb; border-radius: 6px; font-size: 11px; color: #4b5563; }
          .notes h3 { font-size: 12px; color: #059669; margin-bottom: 4px; }
          .footer { margin-top: 30px; padding-top: 15px; border-top: 1px solid #d1d5db; text-align: center; font-size: 10px; color: #9ca3af; }
          .stamp { margin-top: 20px; display: flex; justify-content: space-between; }
          .stamp div { text-align: center; }
          .stamp p { font-size: 11px; color: #374151; }
          @media print {
            body { padding: 0; }
            .no-print { display: none !important; }
          }
        </style>
      </head>
      <body>
        <div class="no-print" style="text-align:center;margin-bottom:15px;">
          <button onclick="window.print()" style="padding:8px 20px;background:#059669;color:white;border:none;border-radius:6px;cursor:pointer;font-size:13px;">🖨️ طباعة العرض</button>
          <button onclick="window.close()" style="padding:8px 20px;background:#6b7280;color:white;border:none;border-radius:6px;cursor:pointer;font-size:13px;margin-right:8px;">✕ إغلاق</button>
        </div>

        <div class="header">
          <div class="header-left">
            <h1>${data.companyName || "اسم الشركة"}</h1>
            <p>${data.companyAddress || ""}</p>
            <p>${data.companyPhone ? "هاتف: " + data.companyPhone : ""}${data.companyEmail ? " | بريد: " + data.companyEmail : ""}</p>
            <p>${data.companyICE ? "ICE: " + data.companyICE : ""}${data.companyRC ? " | RC: " + data.companyRC : ""}${data.companyIF ? " | IF: " + data.companyIF : ""}</p>
          </div>
          <div class="header-right">
            <h2>عرض السعر</h2>
            <p>رقم: ${data.devisNumber}</p>
            <p>التاريخ: ${data.devisDate}</p>
          </div>
        </div>

        <div class="client-section">
          <h3>العميل</h3>
          <p>${data.clientName || ""}</p>
          <p>${data.clientAddress || ""}</p>
        </div>

        <table>
          <thead>
            <tr>
              <th style="width:5%;text-align:center;">#</th>
              <th style="width:40%;">البيان</th>
              <th style="width:10%;text-align:center;">العدد</th>
              <th style="width:15%;text-align:left;">ثمن الوحدة</th>
              <th style="width:10%;text-align:center;">TVA %</th>
              <th style="width:15%;text-align:left;">المبلغ</th>
            </tr>
          </thead>
          <tbody>
            ${data.items
              .map(
                (item, i) => `
              <tr>
                <td style="text-align:center;">${i + 1}</td>
                <td>${item.description || "—"}</td>
                <td style="text-align:center;">${item.quantity}</td>
                <td class="amount">${item.unitPrice.toLocaleString()}</td>
                <td style="text-align:center;">${item.tva}%</td>
                <td class="amount">${(item.quantity * item.unitPrice).toLocaleString()}</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>

        <table class="totals">
          ${tvaDetails
            .map(
              (d) => `
            <tr>
              <td style="text-align:right;">المجموع جزاف TVA ${d.rate}%</td>
              <td class="amount">${d.ht.toLocaleString()} MAD</td>
            </tr>
            <tr>
              <td style="text-align:right;">TVA ${d.rate}%</td>
              <td class="amount">${d.tva.toLocaleString()} MAD</td>
            </tr>
          `
            )
            .join("")}
          <tr>
            <td style="text-align:right;">المجموع جزاف TVA</td>
            <td class="amount">${totalHT.toLocaleString()} MAD</td>
          </tr>
          <tr>
            <td style="text-align:right;">مجموع TVA</td>
            <td class="amount">${totalTVA.toLocaleString()} MAD</td>
          </tr>
          <tr class="final">
            <td style="text-align:right;">المجموع شامل الضريبة (TTC)</td>
            <td class="amount">${totalTTC.toLocaleString()} MAD</td>
          </tr>
        </table>

        <div class="stamp">
          <div>
            <p><strong>مدة الصلاحية:</strong></p>
            <p>${expiryDate.toLocaleDateString("ar-MA")}</p>
          </div>
          <div>
            <p><strong>التوقيع والختم:</strong></p>
            <p style="margin-top:25px;">....................................</p>
          </div>
        </div>

        ${data.notes ? `<div class="notes"><h3>ملاحظات وشروط</h3><p>${data.notes}</p></div>` : ""}

        <div class="footer">
          <p>عرض السعر هذا صالح لمدة ${data.validityDays} يوماً من تاريخه</p>
          <p>${data.companyName || "اسم الشركة"} - ${data.companyAddress || ""}</p>
        </div>

        <script>
          window.onload = function() { setTimeout(function() { window.print(); }, 500); };
        </script>
      </body>
      </html>
    `);
    printWindow.document.close();
  };

  const tvaRates = [...new Set(data.items.map((i) => i.tva))];
  const tvaDetails = tvaRates.map((rate) => {
    const items = data.items.filter((i) => i.tva === rate);
    const ht = items.reduce((s, i) => s + i.quantity * i.unitPrice, 0);
    return { rate, ht, tva: (ht * rate) / 100 };
  });
  const totalHT = tvaDetails.reduce((s, d) => s + d.ht, 0);
  const totalTVA = tvaDetails.reduce((s, d) => s + d.tva, 0);
  const totalTTC = totalHT + totalTVA;

  const expiryDate = new Date(data.devisDate);
  expiryDate.setDate(expiryDate.getDate() + data.validityDays);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="flex max-h-[95vh] w-full max-w-[900px] flex-col rounded-xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <h2 className="text-lg font-bold text-gray-900">معاينة عرض السعر</h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-emerald-600 px-4 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
            >
              <Printer className="h-4 w-4" />
              طباعة
            </button>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div ref={printRef} className="overflow-y-auto p-6" style={{ direction: "rtl" }}>
          <div className="mx-auto max-w-[210mm]" id="devis-print-area">
            <div className="flex items-start justify-between border-b-2 border-emerald-600 pb-5">
              <div>
                <h3 className="text-xl font-bold text-emerald-600">
                  {data.companyName || "اسم الشركة"}
                </h3>
                <p className="mt-1 text-xs text-gray-500">{data.companyAddress}</p>
                <p className="text-xs text-gray-500">
                  {data.companyPhone && `هاتف: ${data.companyPhone}`}
                  {data.companyEmail && ` | بريد: ${data.companyEmail}`}
                </p>
                <p className="text-xs text-gray-500">
                  {data.companyICE && `ICE: ${data.companyICE}`}
                  {data.companyRC && ` | RC: ${data.companyRC}`}
                  {data.companyIF && ` | IF: ${data.companyIF}`}
                </p>
              </div>
              <div className="text-left">
                <h4 className="text-base font-bold text-emerald-600">عرض السعر</h4>
                <p className="text-xs text-gray-500">رقم: {data.devisNumber}</p>
                <p className="text-xs text-gray-500">التاريخ: {data.devisDate}</p>
              </div>
            </div>

            <div className="mt-5">
              <h5 className="text-xs font-bold text-emerald-600">العميل</h5>
              <p className="text-sm text-gray-800">{data.clientName}</p>
              <p className="text-xs text-gray-500">{data.clientAddress}</p>
            </div>

            <table className="mt-5 w-full border-collapse text-sm">
              <thead>
                <tr className="bg-emerald-600 text-white">
                  <th className="p-2 text-center text-xs font-medium">#</th>
                  <th className="p-2 text-right text-xs font-medium">البيان</th>
                  <th className="p-2 text-center text-xs font-medium">العدد</th>
                  <th className="p-2 text-left text-xs font-medium">ثمن الوحدة</th>
                  <th className="p-2 text-center text-xs font-medium">TVA %</th>
                  <th className="p-2 text-left text-xs font-medium">المبلغ</th>
                </tr>
              </thead>
              <tbody>
                {data.items.map((item, i) => (
                  <tr key={item.id} className="border-b border-gray-200">
                    <td className="p-2 text-center text-xs">{i + 1}</td>
                    <td className="p-2 text-xs">{item.description || "—"}</td>
                    <td className="p-2 text-center text-xs">{item.quantity}</td>
                    <td className="p-2 text-left text-xs" style={{ direction: "ltr" }}>
                      {item.unitPrice.toLocaleString()}
                    </td>
                    <td className="p-2 text-center text-xs">{item.tva}%</td>
                    <td className="p-2 text-left text-xs font-medium" style={{ direction: "ltr" }}>
                      {(item.quantity * item.unitPrice).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mr-auto mt-4 w-72">
              <table className="w-full text-sm">
                <tbody>
                  {tvaDetails.map((d) => (
                    <>
                      <tr key={`ht-${d.rate}`}>
                        <td className="py-1 text-right text-xs">المجموع جزاف TVA {d.rate}%</td>
                        <td className="py-1 text-left text-xs" style={{ direction: "ltr" }}>
                          {d.ht.toLocaleString()} MAD
                        </td>
                      </tr>
                      <tr key={`tva-${d.rate}`}>
                        <td className="py-1 text-right text-xs">TVA {d.rate}%</td>
                        <td className="py-1 text-left text-xs" style={{ direction: "ltr" }}>
                          {d.tva.toLocaleString()} MAD
                        </td>
                      </tr>
                    </>
                  ))}
                  <tr>
                    <td className="py-1 text-right text-xs font-medium">المجموع جزاف TVA</td>
                    <td className="py-1 text-left text-xs font-medium" style={{ direction: "ltr" }}>
                      {totalHT.toLocaleString()} MAD
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1 text-right text-xs font-medium">مجموع TVA</td>
                    <td className="py-1 text-left text-xs font-medium" style={{ direction: "ltr" }}>
                      {totalTVA.toLocaleString()} MAD
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 text-right text-sm font-bold text-emerald-600">
                      المجموع شامل الضريبة (TTC)
                    </td>
                    <td
                      className="py-2 text-left text-sm font-bold text-emerald-600"
                      style={{ direction: "ltr" }}
                    >
                      {totalTTC.toLocaleString()} MAD
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-5 flex justify-between">
              <div className="text-center">
                <p className="text-xs font-medium text-gray-700">مدة الصلاحية:</p>
                <p className="text-xs text-gray-500">
                  {expiryDate.toLocaleDateString("ar-MA")}
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs font-medium text-gray-700">التوقيع والختم:</p>
                <p className="mt-6 text-xs text-gray-500">....................................</p>
              </div>
            </div>

            {data.notes && (
              <div className="mt-4 rounded-lg bg-gray-50 p-3">
                <h6 className="text-xs font-bold text-emerald-600">ملاحظات وشروط</h6>
                <p className="mt-1 text-xs text-gray-600">{data.notes}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
