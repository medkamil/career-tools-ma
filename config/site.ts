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
  name: "Tawdif Pro",
  description: "منصة مغربية شاملة للتوظيف، التكوين المهني، المشاريع الصغيرة، والأدوات التفاعلية المجانية",
  url: "https://tawdifpro.ma",
  ogImage: "https://tawdifpro.ma/og.png",
  keywords: [
    "Tawdif Pro",
    "توظيف المغرب",
    "فرص عمل المغرب",
    "التوظيف في المغرب",
    "site emploi maroc",
    "منصة توظيف",
    "مكتب التوظيف",
    "البحث عن عمل",
    "وظائف المغرب",
    "وظائف الرباط",
    "وظائف الدار البيضاء",
    "وظائف عن بعد",
    "السيرة الذاتية",
    "CV professionnel",
    "مولد السيرة الذاتية",
    "نماذج السيرة الذاتية",
    "CV en ligne",
    "نصائح مقابلة العمل",
    "حقوق الأجير",
    "CDD CDI المغرب",
    "SMIG",
    "تكوين مهني المغرب",
    "formation maroc",
    "OFPPT",
    "التدريب المهني",
    "التدريب المستمر",
    "تكوين مجاني",
    "شهادات مهنية",
    "منح التكوين",
    "المهن المطلوبة 2026",
    "اختيار المهنة",
    "اختبارات مهنية",
    "التوجيه المهني",
    "أفكار مشاريع",
    "مشاريع صغيرة",
    "projet rentable",
    "Forsa",
    "فرصة",
    "INTELAKA",
    "انطلاقة",
    "auto-entrepreneur",
    "المقاول الذاتي",
    "تمويل المشاريع",
    "ريادة الأعمال المغرب",
    "دراسة جدوى",
    "حاسبة الراتب",
    "حاسبة الأجور",
    "net salary calculator",
    "صافي الراتب",
    "الضريبة على الدخل",
    "IR maroc",
    "CNSS",
    "AMO",
    "طباعة شيك",
    "cheque printer",
    "طباعة شيك بنكي",
    "أدوات مهنية",
    "خدمات مهنية",
    "تطوير الذات",
    "المسار المهني",
  ],
  links: {
    twitter: "",
    github: "",
    linkedin: "",
    facebook: "",
  },
  contactEmail: "contact@tawdifpro.ma",
};
