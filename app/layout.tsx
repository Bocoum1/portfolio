import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amadou Bocoum | Data Science, Statistiques & Machine Learning",
  description:
    "Étudiant en M2 Data Science et Modélisation Statistique : estimation, GLM, machine learning et deep learning. Stage à partir de janvier 2027.",
  keywords: [
    "Amadou Bocoum",
    "Data Science",
    "Deep Learning",
    "M2",
    "GLM",
    "Statistique",
    "Analyse statistique",
    "RAG",
    "Business Intelligence",
    "Machine Learning",
  ],
  authors: [{ name: "Amadou Bocoum" }],
  openGraph: {
    title: "Amadou Bocoum | Data Science, Statistiques & Machine Learning",
    description:
      "Comprendre les données, évaluer les modèles. Projets statistiques avec code, rapports et simulations reproductibles.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
