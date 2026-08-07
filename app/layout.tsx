import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amadou Bocoum | Data & AI Engineer",
  description:
    "Portfolio d'Amadou Bocoum : produits data, intelligence artificielle locale et Business Intelligence.",
  keywords: [
    "Amadou Bocoum",
    "Data Engineer",
    "AI Engineer",
    "RAG",
    "Business Intelligence",
    "Machine Learning",
  ],
  authors: [{ name: "Amadou Bocoum" }],
  openGraph: {
    title: "Amadou Bocoum | Data & AI Engineer",
    description:
      "Des données aux produits : IA locale, applications full-stack et analyse décisionnelle.",
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
