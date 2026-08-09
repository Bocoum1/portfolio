import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amadou Bocoum | Data & AI Engineer",
  description:
    "Portfolio d'Amadou Bocoum : data engineering, analyse statistique, produits IA et applications full-stack.",
  keywords: [
    "Amadou Bocoum",
    "Data Engineer",
    "AI Engineer",
    "ETL",
    "Data Warehouse",
    "Statistique",
    "Analyse statistique",
    "RAG",
    "Business Intelligence",
    "Machine Learning",
  ],
  authors: [{ name: "Amadou Bocoum" }],
  openGraph: {
    title: "Amadou Bocoum | Data & AI Engineer",
    description:
      "Des sources aux produits : data engineering, statistique, IA locale et analyse décisionnelle.",
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
