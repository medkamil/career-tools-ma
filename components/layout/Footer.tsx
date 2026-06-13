import Link from "next/link";
import { Briefcase, Globe, Code, UserRound, Users } from "lucide-react";
import { siteConfig } from "@/config/site";

const footerColumns = [
  {
    title: "عن المنصة",
    links: [
      { href: "/about", label: "من نحن" },
      { href: "/about", label: "المهمة والرؤية" },
      { href: "/about", label: "شروط الاستخدام" },
      { href: "/about", label: "سياسة الخصوصية" },
    ],
  },
  {
    title: "الأدوات",
    links: [
      { href: "/cv-generator", label: "مولد السيرة الذاتية" },
      { href: "/salary-calculator", label: "حاسبة الراتب" },
      { href: "/cheque-printer", label: "طباعة الشيك" },
    ],
  },
  {
    title: "الموارد",
    links: [
      { href: "/about", label: "المدونة" },
      { href: "/about", label: "الأسئلة الشائعة" },
      { href: "/about", label: "دليل الاستخدام" },
    ],
  },
  {
    title: "تواصل معنا",
    links: [
      { href: `mailto:${siteConfig.contactEmail}`, label: "البريد الإلكتروني" },
      { href: siteConfig.links.twitter, label: "تويتر" },
      { href: siteConfig.links.linkedin, label: "لينكد إن" },
      { href: siteConfig.links.facebook, label: "فيسبوك" },
    ],
  },
];

const socialLinks = [
  { href: siteConfig.links.twitter, icon: Globe, label: "تويتر" },
  { href: siteConfig.links.github, icon: Code, label: "جيت هاب" },
  { href: siteConfig.links.linkedin, icon: UserRound, label: "لينكد إن" },
  { href: siteConfig.links.facebook, icon: Users, label: "فيسبوك" },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold text-gray-900">
                {column.title}
              </h3>
              <ul className="space-y-3">
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
            <Link href="/" className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-bold text-gray-900">
                {siteConfig.name}
              </span>
            </Link>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition-colors hover:text-emerald-600"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}. جميع الحقوق
            محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
