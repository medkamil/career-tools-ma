import Link from "next/link";
import { Briefcase, Globe, Code, UserRound, Users } from "lucide-react";
import { siteConfig } from "@/config/site";

const footerColumns = [
  {
    title: "عن المنصة",
    links: [
      { href: "/about", label: "من نحن" },
      { href: "/contact", label: "اتصل بنا" },
      { href: "/terms-of-service", label: "شروط الاستخدام" },
      { href: "/privacy-policy", label: "سياسة الخصوصية" },
    ],
  },
  {
    title: "الأقسام",
    links: [
      { href: "/emplois", label: "التوظيف" },
      { href: "/formations", label: "التكوين" },
      { href: "/projets", label: "المشاريع" },
      { href: "/salary-calculator", label: "الأدوات" },
    ],
  },
  {
    title: "الأدوات",
    links: [
      { href: "/cv-generator", label: "مولد السيرة الذاتية" },
      { href: "/salary-calculator", label: "حاسبة الراتب" },
      { href: "/compensation-calculator", label: "حاسبة التعويضات" },
      { href: "/devis-generator", label: "عرض السعر (Devis)" },
      { href: "/facture-generator", label: "الفاتورة (Facture)" },
      { href: "/pension-calculator", label: "المعاش التقاعدي" },
      { href: "/cheque-printer", label: "طباعة الشيك" },
    ],
  },
  {
    title: "تواصل معنا",
    links: [
      { href: `mailto:${siteConfig.contactEmail}`, label: "البريد الإلكتروني" },
      { href: "/contact", label: "أرسل رسالة" },
    ],
  },
];

const socialLinks = [
  { href: siteConfig.links.twitter, icon: Globe, label: "تويتر" },
  { href: siteConfig.links.github, icon: Code, label: "جيت هاب" },
  { href: siteConfig.links.linkedin, icon: UserRound, label: "لينكد إن" },
  { href: siteConfig.links.facebook, icon: Users, label: "فيسبوك" },
].filter((s) => s.href);

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {column.title}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors hover:text-emerald-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-sm">
                <Briefcase className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-bold text-gray-900 tracking-tight">
                {siteConfig.name}
              </span>
            </Link>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-emerald-100 hover:text-emerald-600"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
