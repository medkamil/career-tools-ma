"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, Menu, X, ChevronDown, Calculator, FileText, Printer, Receipt, HandCoins } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const mainLinks = [
  { href: "/emplois", label: "التوظيف" },
  { href: "/formations", label: "التكوين" },
  { href: "/projets", label: "المشاريع" },
];

const toolsLinks = [
  { href: "/salary-calculator", label: "حاسبة الراتب", icon: Calculator },
  { href: "/compensation-calculator", label: "حاسبة التعويضات", icon: Calculator },
  { href: "/cv-generator", label: "مولد السيرة الذاتية", icon: FileText },
  { href: "/devis-generator", label: "عرض السعر (Devis)", icon: Receipt },
  { href: "/facture-generator", label: "الفاتورة (Facture)", icon: Receipt },
  { href: "/pension-calculator", label: "المعاش التقاعدي", icon: HandCoins },
  { href: "/cheque-printer", label: "طباعة الشيك", icon: Printer },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setToolsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-sm">
            <Briefcase className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-gray-900 tracking-tight">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive(link.href)
                  ? "bg-emerald-50 text-emerald-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
              )}
            >
              {link.label}
            </Link>
          ))}

          <div className="relative" onMouseEnter={() => setToolsOpen(true)} onMouseLeave={() => setToolsOpen(false)}>
            <button
              className={cn(
                "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname.startsWith("/salary-calculator") || pathname.startsWith("/cv-generator") || pathname.startsWith("/cheque-printer") || pathname.startsWith("/compensation-calculator") || pathname.startsWith("/devis-generator")
                  ? "bg-emerald-50 text-emerald-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
              )}
              aria-haspopup="true"
              aria-expanded={toolsOpen}
            >
              الأدوات
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", toolsOpen && "rotate-180")} />
            </button>

            {toolsOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 w-56 origin-top-right rounded-xl border border-gray-100 bg-white p-1.5 shadow-lg ring-1 ring-black/5">
                {toolsLinks.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                        isActive(tool.href)
                          ? "bg-emerald-50 text-emerald-700"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                      )}
                    >
                      <Icon className="h-4 w-4 text-gray-400" />
                      {tool.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link
            href="/about"
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              isActive("/about")
                ? "bg-emerald-50 text-emerald-700"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
            )}
          >
            عن المنصة
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/emplois"
            className="hidden h-9 items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 px-4 text-sm font-medium text-white shadow-sm transition-all hover:from-emerald-700 hover:to-emerald-600 hover:shadow-md md:inline-flex"
          >
            تصفح الأقسام
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 md:hidden"
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden" onClick={() => setIsOpen(false)} />
          <div className={cn(
            "fixed right-0 top-16 z-50 flex h-[calc(100dvh-4rem)] w-72 flex-col border-l border-gray-100 bg-white shadow-xl md:hidden",
            "animate-in slide-in-from-right",
          )}>
            <nav className="flex-1 overflow-y-auto p-4">
              <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">الأقسام</p>
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-gray-700 hover:bg-gray-100",
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <p className="mb-2 mt-6 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">الأدوات</p>
              {toolsLinks.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive(tool.href)
                        ? "bg-emerald-50 text-emerald-700"
                        : "text-gray-700 hover:bg-gray-100",
                    )}
                  >
                    <Icon className="h-4 w-4 text-gray-400" />
                    {tool.label}
                  </Link>
                );
              })}

              <p className="mb-2 mt-6 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">عن المنصة</p>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive("/about") ? "bg-emerald-50 text-emerald-700" : "text-gray-700 hover:bg-gray-100",
                )}
              >
                عن المنصة
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
              >
                اتصل بنا
              </Link>
            </nav>

            <div className="border-t border-gray-100 p-4">
              <Link
                href="/emplois"
                onClick={() => setIsOpen(false)}
                className="flex h-11 w-full items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 text-sm font-medium text-white shadow-sm transition-all hover:from-emerald-700 hover:to-emerald-600"
              >
                تصفح الأقسام
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
