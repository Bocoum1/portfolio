import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amadou Bocoum | Data & AI Engineer",
  description:
    "Portfolio d'Amadou Bocoum : data engineering, produits IA, applications full-stack et Business Intelligence.",
  keywords: [
    "Amadou Bocoum",
    "Data Engineer",
    "AI Engineer",
    "ETL",
    "Data Warehouse",
    "RAG",
    "Business Intelligence",
    "Machine Learning",
  ],
  authors: [{ name: "Amadou Bocoum" }],
  openGraph: {
    title: "Amadou Bocoum | Data & AI Engineer",
    description:
      "Des sources aux produits : data engineering, IA locale, applications full-stack et analyse décisionnelle.",
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
