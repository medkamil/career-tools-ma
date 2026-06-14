"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

export interface DevisLineItem {
  id: number;
  description: string;
  quantity: number;
  unitPrice: number;
  tva: number;
}

export interface DevisData {
  companyName: string;
  companyAddress: string;
  companyPhone: string;
  companyEmail: string;
  companyICE: string;
  companyRC: string;
  companyIF: string;
  clientName: string;
  clientAddress: string;
  devisNumber: string;
  devisDate: string;
  validityDays: number;
  notes: string;
  items: DevisLineItem[];
}

interface DevisFormProps {
  data: DevisData;
  onChange: (data: DevisData) => void;
  onGenerate: () => void;
}

const defaultItems: DevisLineItem[] = [
  { id: 1, description: "", quantity: 1, unitPrice: 0, tva: 20 },
];

export const defaultDevisData: DevisData = {
  companyName: "",
  companyAddress: "",
  companyPhone: "",
  companyEmail: "",
  companyICE: "",
  companyRC: "",
  companyIF: "",
  clientName: "",
  clientAddress: "",
  devisNumber: `D-${new Date().getFullYear()}-001`,
  devisDate: new Date().toISOString().split("T")[0],
  validityDays: 30,
  notes: "مدة صلاحية هذا العرض 30 يوماً من تاريخه. الدفع نقداً أو بتحويل بنكي.",
  items: defaultItems,
};

let nextId = 2;

export function DevisForm({ data, onChange, onGenerate }: DevisFormProps) {
  const update = (field: keyof DevisData, value: unknown) => {
    onChange({ ...data, [field]: value });
  };

  const updateItem = (id: number, field: keyof DevisLineItem, value: unknown) => {
    onChange({
      ...data,
      items: data.items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    });
  };

  const addItem = () => {
    onChange({
      ...data,
      items: [
        ...data.items,
        { id: nextId++, description: "", quantity: 1, unitPrice: 0, tva: 20 },
      ],
    });
  };

  const removeItem = (id: number) => {
    if (data.items.length <= 1) return;
    onChange({ ...data, items: data.items.filter((item) => item.id !== id) });
  };

  const inputClass =
    "h-10 w-full rounded-lg border border-gray-300 px-3 text-sm text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500";
  const labelClass = "mb-1 block text-xs font-medium text-gray-600";

  return (
    <div className="space-y-8">
      <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="mb-4 text-lg font-bold text-gray-900">معلومات الشركة/المزود</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={labelClass}>الاسم التجاري</label>
            <input
              className={inputClass}
              value={data.companyName}
              onChange={(e) => update("companyName", e.target.value)}
              placeholder="شركة الأمل للتجارة"
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>العنوان</label>
            <input
              className={inputClass}
              value={data.companyAddress}
              onChange={(e) => update("companyAddress", e.target.value)}
              placeholder="12 شارع محمد الخامس، الدار البيضاء"
            />
          </div>
          <div>
            <label className={labelClass}>الهاتف</label>
            <input
              className={inputClass}
              value={data.companyPhone}
              onChange={(e) => update("companyPhone", e.target.value)}
              placeholder="0522-123456"
            />
          </div>
          <div>
            <label className={labelClass}>البريد الإلكتروني</label>
            <input
              className={inputClass}
              value={data.companyEmail}
              onChange={(e) => update("companyEmail", e.target.value)}
              placeholder="contact@exemple.ma"
            />
          </div>
          <div>
            <label className={labelClass}>ICE</label>
            <input
              className={inputClass}
              value={data.companyICE}
              onChange={(e) => update("companyICE", e.target.value)}
              placeholder="123456789000012"
            />
          </div>
          <div>
            <label className={labelClass}>RC</label>
            <input
              className={inputClass}
              value={data.companyRC}
              onChange={(e) => update("companyRC", e.target.value)}
              placeholder="123456"
            />
          </div>
          <div>
            <label className={labelClass}>IF</label>
            <input
              className={inputClass}
              value={data.companyIF}
              onChange={(e) => update("companyIF", e.target.value)}
              placeholder="12345678"
            />
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="mb-4 text-lg font-bold text-gray-900">معلومات العميل</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={labelClass}>الاسم أو الشركة</label>
            <input
              className={inputClass}
              value={data.clientName}
              onChange={(e) => update("clientName", e.target.value)}
              placeholder="شركة السعادة / أحمد العلوي"
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>العنوان</label>
            <input
              className={inputClass}
              value={data.clientAddress}
              onChange={(e) => update("clientAddress", e.target.value)}
              placeholder="حي الرياض، الرباط"
            />
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="mb-4 text-lg font-bold text-gray-900">معلومات العرض</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className={labelClass}>رقم العرض</label>
            <input
              className={inputClass}
              value={data.devisNumber}
              onChange={(e) => update("devisNumber", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>التاريخ</label>
            <input
              type="date"
              className={inputClass}
              value={data.devisDate}
              onChange={(e) => update("devisDate", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>صلاحية (أيام)</label>
            <input
              type="number"
              className={inputClass}
              value={data.validityDays}
              onChange={(e) => update("validityDays", parseInt(e.target.value) || 30)}
            />
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">بنود العرض</h2>
          <button
            type="button"
            onClick={addItem}
            className="inline-flex h-9 items-center gap-1 rounded-lg bg-emerald-600 px-3 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
          >
            <Plus className="h-4 w-4" />
            إضافة بند
          </button>
        </div>
        <div className="space-y-3">
          {data.items.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-wrap items-end gap-2 rounded-lg border border-gray-200 p-3"
            >
              <div className="flex-1 min-w-[200px]">
                <label className={labelClass}>الوصف</label>
                <input
                  className={inputClass}
                  value={item.description}
                  onChange={(e) => updateItem(item.id, "description", e.target.value)}
                  placeholder={`البند ${index + 1}`}
                />
              </div>
              <div className="w-20">
                <label className={labelClass}>العدد</label>
                <input
                  type="number"
                  min={1}
                  className={inputClass}
                  value={item.quantity}
                  onChange={(e) =>
                    updateItem(item.id, "quantity", parseInt(e.target.value) || 1)
                  }
                />
              </div>
              <div className="w-28">
                <label className={labelClass}>الثمن الوحدة (MAD)</label>
                <input
                  type="number"
                  min={0}
                  className={inputClass}
                  value={item.unitPrice}
                  onChange={(e) =>
                    updateItem(item.id, "unitPrice", parseFloat(e.target.value) || 0)
                  }
                />
              </div>
              <div className="w-20">
                <label className={labelClass}>TVA (%)</label>
                <select
                  className={inputClass}
                  value={item.tva}
                  onChange={(e) => updateItem(item.id, "tva", parseInt(e.target.value) || 0)}
                >
                  <option value={0}>0%</option>
                  <option value={10}>10%</option>
                  <option value={20}>20%</option>
                </select>
              </div>
              <div className="w-28 pt-5 text-left text-sm font-semibold text-gray-900">
                {(item.quantity * item.unitPrice).toLocaleString()} MAD
              </div>
              {data.items.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="mb-0.5 flex h-10 w-10 items-center justify-center rounded-lg text-red-500 transition-colors hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="mb-4 text-lg font-bold text-gray-900">ملاحظات وشروط</h2>
        <textarea
          className="h-24 w-full rounded-lg border border-gray-300 p-3 text-sm text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
          value={data.notes}
          onChange={(e) => update("notes", e.target.value)}
          placeholder="شروط الدفع، مدة التسليم، ضمان..."
        />
      </section>

      <div className="text-center">
        <button
          type="button"
          onClick={onGenerate}
          className="inline-flex h-12 items-center gap-2 rounded-lg bg-emerald-600 px-8 text-base font-medium text-white transition-colors hover:bg-emerald-700"
        >
          معاينة وطباعة العرض
        </button>
      </div>
    </div>
  );
}
