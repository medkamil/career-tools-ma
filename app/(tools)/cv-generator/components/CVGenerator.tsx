"use client";

import { useState } from "react";
import { Plus, Trash2, FileText } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
}

interface Skill {
  name: string;
}

export interface CVData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  summary: string;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  languages: string;
  photo: string;
}

const defaultCVData: CVData = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  summary: "",
  experiences: [{ company: "", role: "", startDate: "", endDate: "", description: "" }],
  education: [{ school: "", degree: "", startDate: "", endDate: "" }],
  skills: [{ name: "" }],
  languages: "",
  photo: "",
};

interface CVFormProps {
  data: CVData;
  onChange: (data: CVData) => void;
}

function CVForm({ data, onChange }: CVFormProps) {
  const update = <K extends keyof CVData>(key: K, value: CVData[K]) => onChange({ ...data, [key]: value });

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">المعلومات الشخصية</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">الاسم الكامل</label>
            <input type="text" value={data.fullName} onChange={(e) => update("fullName", e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="أحمد العلوي" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
            <input type="email" value={data.email} onChange={(e) => update("email", e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="ahmed@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">رقم الهاتف</label>
            <input type="tel" value={data.phone} onChange={(e) => update("phone", e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="06 12 34 56 78" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">العنوان</label>
            <input type="text" value={data.address} onChange={(e) => update("address", e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="الدار البيضاء، المغرب" />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">ملخص مهني</label>
          <textarea value={data.summary} onChange={(e) => update("summary", e.target.value)} rows={3} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="محترف في مجال... بخبرة تمتد لـ..." />
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">الخبرات المهنية</h2>
        {data.experiences.map((exp, i) => (
          <div key={i} className="mt-4 border-t border-gray-100 pt-4 first:border-0 first:pt-0">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">خبرة {i + 1}</span>
              {data.experiences.length > 1 && (
                <button onClick={() => update("experiences", data.experiences.filter((_, j) => j !== i))} className="text-red-500 hover:text-red-700">
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              <input type="text" value={exp.company} onChange={(e) => { const ex = [...data.experiences]; ex[i] = { ...ex[i], company: e.target.value }; update("experiences", ex); }} className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="اسم الشركة" />
              <input type="text" value={exp.role} onChange={(e) => { const ex = [...data.experiences]; ex[i] = { ...ex[i], role: e.target.value }; update("experiences", ex); }} className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="المسمى الوظيفي" />
              <input type="text" value={exp.startDate} onChange={(e) => { const ex = [...data.experiences]; ex[i] = { ...ex[i], startDate: e.target.value }; update("experiences", ex); }} className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="تاريخ البداية (2020)" />
              <input type="text" value={exp.endDate} onChange={(e) => { const ex = [...data.experiences]; ex[i] = { ...ex[i], endDate: e.target.value }; update("experiences", ex); }} className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="تاريخ النهاية (2024 أو 'حاضر')" />
              <textarea value={exp.description} onChange={(e) => { const ex = [...data.experiences]; ex[i] = { ...ex[i], description: e.target.value }; update("experiences", ex); }} rows={2} className="sm:col-span-2 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="وصف المهام والإنجازات..." />
            </div>
          </div>
        ))}
        <button onClick={() => update("experiences", [...data.experiences, { company: "", role: "", startDate: "", endDate: "", description: "" }])} className="mt-4 flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700">
          <Plus className="h-4 w-4" /> إضافة خبرة
        </button>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">التعليم والتكوين</h2>
        {data.education.map((edu, i) => (
          <div key={i} className="mt-4 border-t border-gray-100 pt-4 first:border-0 first:pt-0">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">تكوين {i + 1}</span>
              {data.education.length > 1 && (
                <button onClick={() => update("education", data.education.filter((_, j) => j !== i))} className="text-red-500 hover:text-red-700">
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              <input type="text" value={edu.school} onChange={(e) => { const ed = [...data.education]; ed[i] = { ...ed[i], school: e.target.value }; update("education", ed); }} className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="اسم المؤسسة" />
              <input type="text" value={edu.degree} onChange={(e) => { const ed = [...data.education]; ed[i] = { ...ed[i], degree: e.target.value }; update("education", ed); }} className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="الشهادة أو التخصص" />
              <input type="text" value={edu.startDate} onChange={(e) => { const ed = [...data.education]; ed[i] = { ...ed[i], startDate: e.target.value }; update("education", ed); }} className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="تاريخ البداية" />
              <input type="text" value={edu.endDate} onChange={(e) => { const ed = [...data.education]; ed[i] = { ...ed[i], endDate: e.target.value }; update("education", ed); }} className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="تاريخ النهاية" />
            </div>
          </div>
        ))}
        <button onClick={() => update("education", [...data.education, { school: "", degree: "", startDate: "", endDate: "" }])} className="mt-4 flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700">
          <Plus className="h-4 w-4" /> إضافة تكوين
        </button>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">المهارات واللغات</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">المهارات</label>
            <input type="text" value={data.skills.map((s) => s.name).join("، ")} onChange={(e) => update("skills", e.target.value.split("،").map((s) => ({ name: s.trim() })).filter((s) => s.name))} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="Excel، بايثون، التحدث أمام الجمهور" />
            <p className="mt-1 text-xs text-gray-400">افصل بين المهارات بفاصلة (،)</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">اللغات</label>
            <input type="text" value={data.languages} onChange={(e) => update("languages", e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="العربية (اللغة الأم)، الفرنسية (متقدم)" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CVPreview({ data }: { data: CVData }) {
  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html dir="rtl" lang="ar">
      <head><meta charset="utf-8"><title>${data.fullName || "السيرة الذاتية"}</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Cairo', sans-serif; background: #f3f4f6; padding: 20px; direction: rtl; }
        .cv-page { max-width: 210mm; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #059669, #10b981); color: white; padding: 32px 40px; }
        .header h1 { font-size: 28px; font-weight: 700; }
        .header .contact { margin-top: 8px; font-size: 14px; opacity: 0.9; }
        .content { padding: 32px 40px; }
        .section { margin-bottom: 24px; }
        .section h2 { font-size: 16px; font-weight: 700; color: #059669; border-bottom: 2px solid #059669; padding-bottom: 4px; margin-bottom: 12px; }
        .section p, .section li { font-size: 13px; line-height: 1.8; color: #374151; }
        .summary { margin-bottom: 24px; padding: 16px; background: #f0fdf4; border-radius: 8px; font-size: 13px; line-height: 1.8; color: #374151; }
        .exp-item, .edu-item { margin-bottom: 16px; }
        .exp-item h3, .edu-item h3 { font-size: 14px; font-weight: 600; color: #111827; }
        .exp-item .meta, .edu-item .meta { font-size: 12px; color: #6b7280; margin-bottom: 4px; }
        .exp-item p { font-size: 13px; line-height: 1.7; }
        .skills-list { display: flex; flex-wrap: wrap; gap: 8px; }
        .skills-list span { background: #f0fdf4; color: #059669; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; }
        .no-print { text-align: center; margin-bottom: 16px; }
        .no-print button { background: #059669; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 14px; cursor: pointer; font-family: 'Cairo', sans-serif; }
        @media print { body { padding: 0; background: white; } .no-print { display: none; } }
      </style>
      </head><body>
      <div class="no-print"><button onclick="window.print()">طباعة / حفظ PDF</button></div>
      <div class="cv-page">
        <div class="header">
          <h1>${data.fullName || "الاسم الكامل"}</h1>
          <div class="contact">${data.email ? `${data.email} | ` : ""}${data.phone || ""}${data.address ? ` | ${data.address}` : ""}</div>
        </div>
        <div class="content">
          ${data.summary ? `<div class="summary"><p>${data.summary}</p></div>` : ""}
          ${data.experiences.filter(e => e.company || e.role).length ? `<div class="section"><h2>الخبرات المهنية</h2>${data.experiences.filter(e => e.company || e.role).map(e => `
            <div class="exp-item">
              <h3>${e.role || "المسمى الوظيفي"} ${e.company ? `- ${e.company}` : ""}</h3>
              <div class="meta">${e.startDate || ""}${e.startDate && e.endDate ? " - " : ""}${e.endDate || ""}</div>
              ${e.description ? `<p>${e.description}</p>` : ""}
            </div>`).join("")}</div>` : ""}
          ${data.education.filter(e => e.school || e.degree).length ? `<div class="section"><h2>التعليم والتكوين</h2>${data.education.filter(e => e.school || e.degree).map(e => `
            <div class="edu-item">
              <h3>${e.degree || "الشهادة"} ${e.school ? `- ${e.school}` : ""}</h3>
              <div class="meta">${e.startDate || ""}${e.startDate && e.endDate ? " - " : ""}${e.endDate || ""}</div>
            </div>`).join("")}</div>` : ""}
          ${data.skills.filter(s => s.name).length ? `<div class="section"><h2>المهارات</h2><div class="skills-list">${data.skills.filter(s => s.name).map(s => `<span>${s.name}</span>`).join("")}</div></div>` : ""}
          ${data.languages ? `<div class="section"><h2>اللغات</h2><p>${data.languages}</p></div>` : ""}
        </div>
      </div>
      </body></html>
    `);
    printWindow.document.close();
  };

  return (
    <button onClick={handlePrint} className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-3 text-base font-medium text-white shadow-lg shadow-emerald-200/50 transition-all hover:-translate-y-0.5 hover:shadow-xl">
      <FileText className="h-5 w-5" />
      معاينة وطباعة السيرة الذاتية
    </button>
  );
}

export function CVGenerator() {
  const [data, setData] = useState<CVData>(defaultCVData);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
      <CVForm data={data} onChange={setData} />
      <div className="mt-8 text-center">
        <CVPreview data={data} />
      </div>
    </div>
  );
}
