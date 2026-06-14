import type { MetadataRoute } from "next";

const baseUrl = "https://tawdifpro.ma";

const emploisGuides = [
  "cv-professionnel-maroc-2026",
  "meilleurs-sites-emploi-maroc",
  "conseils-entretien-embauche",
  "droits-salarie-maroc",
  "cdd-cdi-maroc",
  "smig-salaire-minimum-maroc",
  "indemnite-licenciement-maroc",
  "types-contrats-travail-maroc",
  "calcul-conge-annuel-maroc",
  "travail-distance-maroc",
  "recrutement-fonction-publique-maroc-2026",
  "assurance-chomage-maroc",
  "exemple-cv-maroc-telecharger",
  "lettre-motivation-maroc-exemple",
  "questions-entretien-embauche-reponses",
  "salaire-moyen-maroc-par-secteur",
  "stage-conventionne-maroc-guide",
  "depart-volontaire-maroc-indemnite",
];

const formationsGuides = [
  "meilleures-formations-maroc-2026",
  "inscription-ofppt-2026",
  "formation-gratuite-en-ligne",
  "bourses-formation-maroc",
  "certifications-professionnelles",
  "formation-continue-maroc",
  "formation-soudure-maroc",
  "formation-electricite-batiment-maroc",
  "formation-cuisine-patisserie-maroc",
  "formation-informatique-developpement-maroc",
  "formation-comptabilite-gestion-maroc",
  "formation-langue-anglais-maroc",
  "formation-coiffure-esthetique-maroc",
  "formation-plomberie-chauffage-maroc",
  "formation-mecanique-auto-maroc",
  "formation-auxiliaire-vie-maroc",
];

const projetsGuides = [
  "idees-projets-petit-budget-maroc",
  "programme-forsa-2026",
  "programme-intelaka",
  "auto-entrepreneur-maroc",
  "financement-bancaire-projet",
  "etude-marche-projet",
  "projet-restaurant-cantine-maroc",
  "projet-ecommerce-maroc-guide",
  "projet-service-nettoyage-maroc",
  "projet-transport-marchandises-maroc",
  "projet-agriculture-serre-maroc",
  "projet-garderie-enfants-maroc",
  "projet-salle-sport-fitness-maroc",
  "projet-boutique-vetements-maroc",
  "projet-photographie-video-maroc",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/terms-of-service`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/cv-generator`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/salary-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/cheque-printer`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/compensation-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/devis-generator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];

  const sections: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/emplois`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/formations`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/projets`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];

  const articlePages: MetadataRoute.Sitemap = [
    ...emploisGuides.map((slug) => ({
      url: `${baseUrl}/emplois/guides/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...formationsGuides.map((slug) => ({
      url: `${baseUrl}/formations/guides/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...projetsGuides.map((slug) => ({
      url: `${baseUrl}/projets/guides/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [...staticPages, ...sections, ...articlePages];
}
