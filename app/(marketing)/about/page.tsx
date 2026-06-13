import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "عن المنصة",
  description: `تعرف على ${siteConfig.name} ومهمتنا في تسهيل الحياة المهنية`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900">عن المنصة</h1>
      <p className="mt-4 text-lg leading-8 text-gray-600">
        {siteConfig.name} هي منصة مغربية شاملة تهدف إلى توفير أدوات مهنية متكاملة
        تساعد الباحثين عن العمل، المهنيين، وأصحاب المشاريع في إدارة مسارهم
        المهني بكفاءة.
      </p>

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">رؤيتنا</h2>
          <p className="mt-2 text-gray-600 leading-7">
            نسعى لأن نكون المنصة الأولى في العالم العربي التي تجمع بين أدوات
            التوظيف، التكوين المهني، وإدارة المشاريع في مكان واحد.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">مهمتنا</h2>
          <p className="mt-2 text-gray-600 leading-7">
            توفير أدوات سهلة ومجانية تساعد المحترفين في المغرب والعالم العربي
            على تطوير مسارهم المهني.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">مميزاتنا</h2>
          <ul className="mt-2 list-inside list-disc space-y-2 text-gray-600">
            <li>أدوات مجانية بالكامل</li>
            <li>واجهة عربية سهلة الاستخدام</li>
            <li>متوافقة مع المعايير المهنية المغربية</li>
            <li>تحديثات مستمرة بناءً على احتياجات المستخدمين</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
