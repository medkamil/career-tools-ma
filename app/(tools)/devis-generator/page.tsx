import type { Metadata } from "next";
import { DevisPage } from "./components/DevisPage";

export const metadata: Metadata = {
  title: "مولد عرض السعر (Devis) في المغرب - أداة مجانية",
  description:
    "أنشئ عرض سعر احترافي (Devis) للمغرب مجاناً. أداة سهلة لتوليد عروض الأسعار مع TVA، طباعة PDF، ومطابقة للمعايير القانونية المغربية.",
};

export default function DevisGeneratorPage() {
  return <DevisPage />;
}
