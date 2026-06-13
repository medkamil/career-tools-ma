"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Briefcase, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "عن المنصة" },
  { href: "/cv-generator", label: "السيرة الذاتية" },
  { href: "/salary-calculator", label: "حاسبة الراتب" },
  { href: "/cheque-printer", label: "طباعة الشيك" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-emerald-600" />
          <span className="text-lg font-bold text-gray-900">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/cv-generator"
            className="hidden h-10 items-center justify-center rounded-lg bg-emerald-600 px-4 text-sm font-medium text-white transition-colors hover:bg-emerald-700 md:inline-flex"
          >
            ابدأ الآن
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 md:hidden"
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div
            className={cn(
              "fixed right-0 top-16 z-50 flex h-[calc(100dvh-4rem)] w-72 flex-col border-l border-gray-200 bg-white shadow-lg md:hidden",
            )}
          >
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto border-t border-gray-200 p-4">
              <Link
                href="/cv-generator"
                onClick={() => setIsOpen(false)}
                className="flex h-12 w-full items-center justify-center rounded-lg bg-emerald-600 text-base font-medium text-white transition-colors hover:bg-emerald-700"
              >
                ابدأ الآن
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
