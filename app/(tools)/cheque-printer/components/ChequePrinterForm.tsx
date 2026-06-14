"use client";

import { useState } from "react";
import { Printer } from "lucide-react";

const banks = [
  "BMCE Bank",
  "Attijariwafa Bank",
  "Banque Populaire",
  "Société Générale Maroc",
  "CIH Bank",
  "Crédit Agricole Maroc",
  "CFG Bank",
  "BMCI",
  "Citibank Maroc",
  "Bank of Africa",
];

const cities = [
  "الدار البيضاء", "الرباط", "فاس", "مراكش", "أكادير", "طنجة",
  "مكناس", "وجدة", "القنيطرة", "تطوان", "صفرو", "الحسيمة",
];

function numberToWords(num: number): string {
  if (num === 0) return "صفر درهم";
  
  const ones = ["", "واحد", "اثنان", "ثلاثة", "أربعة", "خمسة", "ستة", "سبعة", "ثمانية", "تسعة",
    "عشرة", "أحد عشر", "اثنا عشر", "ثلاثة عشر", "أربعة عشر", "خمسة عشر", "ستة عشر", "سبعة عشر", "ثمانية عشر", "تسعة عشر"];
  const tens = ["", "", "عشرون", "ثلاثون", "أربعون", "خمسون", "ستون", "سبعون", "ثمانون", "تسعون"];
  const hundreds = ["", "مائة", "مائتان", "ثلاثمائة", "أربعمائة", "خمسمائة", "ستمائة", "سبعمائة", "ثمانمائة", "تسعمائة"];

  function convertTriplet(n: number): string {
    if (n === 0) return "";
    const h = Math.floor(n / 100);
    const t = n % 100;
    let result = "";
    if (h > 0) result += hundreds[h] + " ";
    if (t > 0) {
      if (t < 20) result += ones[t] + " ";
      else {
        const o = t % 10;
        const tIdx = Math.floor(t / 10);
        if (o > 0) result += ones[o] + " و ";
        result += tens[tIdx] + " ";
      }
    }
    return result;
  }

  const billions = Math.floor(num / 1000000000);
  const millions = Math.floor((num % 1000000000) / 1000000);
  const thousands = Math.floor((num % 1000000) / 1000);
  const remainder = num % 1000;

  let result = "";
  if (billions > 0) result += convertTriplet(billions) + "مليار ";
  if (millions > 0) result += convertTriplet(millions) + "مليون ";
  if (thousands > 0) result += convertTriplet(thousands) + "ألف ";
  if (remainder > 0) result += convertTriplet(remainder);

  return result.trim() + " درهم";
}

interface ChequeData {
  bankName: string;
  chequeNumber: string;
  amount: number;
  beneficiary: string;
  city: string;
  date: string;
  wording: string;
  accountName: string;
  accountNumber: string;
}

const defaultChequeData: ChequeData = {
  bankName: "",
  chequeNumber: "",
  amount: 0,
  beneficiary: "",
  city: "الدار البيضاء",
  date: new Date().toISOString().split("T")[0],
  wording: "وصلني هذا المبلغ",
  accountName: "",
  accountNumber: "",
};

export function ChequePrinterForm() {
  const [data, setData] = useState<ChequeData>(defaultChequeData);

  const update = <K extends keyof ChequeData>(key: K, value: ChequeData[K]) => setData({ ...data, [key]: value });

  const handlePrint = () => {
    const amountWords = numberToWords(Math.floor(data.amount));
    const centimes = Math.round((data.amount - Math.floor(data.amount)) * 100);
    const centimeStr = centimes > 0 ? ` و ${centimes} سنتيما` : "";

    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html dir="rtl" lang="ar">
      <head><meta charset="utf-8"><title>شيك بنكي</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Cairo', sans-serif; background: #f3f4f6; padding: 40px; direction: rtl; }
        .cheque { width: 180mm; height: 85mm; margin: 0 auto; background: white; padding: 15px 20px; position: relative; border: 2px solid #1f2937; border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .cheque-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #1f2937; padding-bottom: 8px; margin-bottom: 10px; }
        .cheque-header .bank-name { font-size: 16px; font-weight: 700; }
        .cheque-header .cheque-num { font-size: 12px; color: #4b5563; }
        .cheque-body { position: relative; }
        .row { display: flex; margin-bottom: 6px; align-items: center; }
        .label { font-size: 12px; font-weight: 600; color: #4b5563; width: 70px; }
        .value { font-size: 14px; border-bottom: 1px solid #9ca3af; flex: 1; min-height: 24px; padding: 0 4px; }
        .value.amount-words { font-size: 15px; font-weight: 600; min-height: 28px; }
        .value.amount-num { font-size: 18px; font-weight: 700; text-align: left; }
        .amount-box { border: 2px solid #1f2937; padding: 6px 10px; margin-top: 4px; border-radius: 2px; }
        .footer { position: absolute; bottom: 10px; left: 20px; right: 20px; display: flex; justify-content: space-between; font-size: 10px; color: #6b7280; border-top: 1px solid #d1d5db; padding-top: 6px; }
        .stamp { position: absolute; top: 40%; left: 40%; width: 80px; height: 80px; border: 3px solid #059669; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; color: #059669; transform: rotate(-15deg); opacity: 0.5; pointer-events: none; }
        .no-print { text-align: center; margin-bottom: 20px; }
        .no-print button { background: #059669; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 14px; cursor: pointer; font-family: 'Cairo', sans-serif; }
        @media print { body { padding: 0; background: white; } .no-print { display: none; } }
      </style>
      </head><body>
      <div class="no-print"><button onclick="window.print()">طباعة الشيك</button></div>
      <div class="cheque">
        <div class="stamp">مصادق عليه</div>
        <div class="cheque-header">
          <div class="bank-name">${data.bankName || "اسم البنك"}</div>
          <div class="cheque-num">شيك رقم: ${data.chequeNumber || "______"}</div>
        </div>
        <div class="cheque-body">
          <div class="row">
            <div class="label">المستفيد</div>
            <div class="value">${data.beneficiary || "____________________"}</div>
          </div>
          <div class="amount-box">
            <div class="row">
              <div class="label">المبلغ</div>
              <div class="value amount-words">${amountWords}${centimeStr}</div>
            </div>
            <div class="row" style="border-top: 1px dashed #9ca3af; padding-top: 4px;">
              <div class="label">بالأرقام</div>
              <div class="value amount-num">${data.amount > 0 ? data.amount.toFixed(2) + " درهم" : "____________"}</div>
            </div>
          </div>
          <div class="row" style="margin-top: 6px;">
            <div class="label">المكان</div>
            <div class="value">${data.city}</div>
          </div>
          <div class="row">
            <div class="label">التاريخ</div>
            <div class="value">${data.date || "______"}</div>
          </div>
          <div class="row">
            <div class="label">البيان</div>
            <div class="value">${data.wording}</div>
          </div>
        </div>
        <div class="footer">
          <span>صاحب الحساب: ${data.accountName || "______"}</span>
          <span>رقم الحساب: ${data.accountNumber || "______"}</span>
        </div>
      </div>
      </body></html>
    `);
    printWindow.document.close();
  };

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">معلومات الشيك</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">البنك</label>
              <select value={data.bankName} onChange={(e) => update("bankName", e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500">
                <option value="">-- اختر البنك --</option>
                {banks.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">رقم الشيك</label>
              <input type="text" value={data.chequeNumber} onChange={(e) => update("chequeNumber", e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="123456" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">المبلغ (درهم)</label>
              <input type="number" value={data.amount || ""} onChange={(e) => update("amount", parseFloat(e.target.value) || 0)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="10000" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">المستفيد</label>
              <input type="text" value={data.beneficiary} onChange={(e) => update("beneficiary", e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="اسم المستفيد" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">المدينة</label>
              <select value={data.city} onChange={(e) => update("city", e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500">
                {cities.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">التاريخ</label>
              <input type="date" value={data.date} onChange={(e) => update("date", e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">صاحب الحساب</label>
              <input type="text" value={data.accountName} onChange={(e) => update("accountName", e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="اسم صاحب الحساب" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">رقم الحساب</label>
              <input type="text" value={data.accountNumber} onChange={(e) => update("accountNumber", e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="XXX XXX XX" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">البيان</label>
            <input type="text" value={data.wording} onChange={(e) => update("wording", e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="وصلني هذا المبلغ..." />
          </div>
        </div>

        {data.amount > 0 && (
          <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4 shadow-sm">
            <p className="text-sm text-gray-600">
              <span className="font-medium text-gray-900">المبلغ كتابةً:</span> {numberToWords(Math.floor(data.amount))}
              {Math.round((data.amount - Math.floor(data.amount)) * 100) > 0 && ` و ${Math.round((data.amount - Math.floor(data.amount)) * 100)} سنتيما`}
            </p>
          </div>
        )}

        <div className="mt-6 text-center">
          <button onClick={handlePrint} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-3 text-base font-medium text-white shadow-lg shadow-emerald-200/50 transition-all hover:-translate-y-0.5 hover:shadow-xl">
            <Printer className="h-5 w-5" />
            معاينة وطباعة الشيك
          </button>
        </div>
      </div>
    </>
  );
}
