import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amadou Bocoum | Data Science, Statistiques & Machine Learning",
  description:
    "Étudiant en M2 Data Science et Modélisation Statistique : statistiques, machine learning, deep learning et algorithmique. Code, protocoles et résultats. Stage à partir de janvier 2027.",
  keywords: [
    "Amadou Bocoum",
    "Data Science",
    "Deep Learning",
    "M2",
    "GLM",
    "Statistique",
    "Analyse statistique",
    "Algorithmique",
    "PyTorch",
    "Machine Learning",
  ],
  authors: [{ name: "Amadou Bocoum" }],
  openGraph: {
    title: "Amadou Bocoum | Data Science, Statistiques & Machine Learning",
    description:
      "Statistiques, ML, DL et algorithmique : comparer les méthodes, examiner les erreurs et documenter les limites. Code et résultats consultables.",
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
