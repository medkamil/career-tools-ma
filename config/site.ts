export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  keywords: string[];
  links: {
    twitter: string;
    github: string;
    linkedin: string;
    facebook: string;
  };
  contactEmail: string;
}

export const siteConfig: SiteConfig = {
  name: "منصة الأدوات المهنية الشاملة",
  description:
    "منصة مغربية للتوظيف، التكوين، المشاريع، وأدوات تفاعلية - Tawdif Pro",
  url: "https://tawdifpro.ma",
  ogImage: "https://tawdifpro.ma/og.png",
  keywords: [
    "توظيف المغرب",
    "فرص عمل المغرب",
    "التوظيف في المغرب",
    "formation maroc",
    "تكوين مهني المغرب",
    "حاسبة الراتب",
    "حاسبة الأجور",
    "net salary calculator",
    "صافي الراتب",
    "الضريبة على الدخل",
    "IR maroc",
    "CNSS",
    "طباعة شيك",
    "cheque printer",
    "طباعة شيك بنكي",
    "السيرة الذاتية",
    "CV professionnel",
    "مولد السيرة الذاتية",
    "CV en ligne",
    "نماذج السيرة الذاتية",
    "projet rentable",
    "أفكار مشاريع",
    "مشاريع صغيرة",
    "auto-entrepreneur",
    "المقاول الذاتي",
    "Forsa",
    "فرصة",
    "INTELAKA",
    "انطلاقة",
    "تمويل المشاريع",
    "منح التكوين",
    "التوظيف الإلكتروني",
    "البحث عن عمل",
    "وظائف المغرب",
    "site emploi maroc",
    "منصة توظيف",
    "مكتب التوظيف",
    "التدريب المهني",
    "التدريب المستمر",
    "اختيار المهنة",
    "اختبارات مهنية",
    "أدوات مهنية",
    "خدمات مهنية",
    "تطوير الذات",
    "المسار المهني",
    "التوجيه المهني",
    "rabat emploi",
    "casablanca jobs",
    "وظائف الرباط",
    "وظائف الدار البيضاء",
    "وظائف عن بعد",
  ],
  links: {
    twitter: "",
    github: "",
    linkedin: "",
    facebook: "",
  },
  contactEmail: "contact@tawdifpro.ma",
};
