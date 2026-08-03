import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/animations.css"
import Script from "next/script";
import styles from "./page.module.css";

import Header from "@/components/Header/header"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Festiny | Rejoindre un serveur de roleplay unique",
  description: "Festiny est le meilleur endroit pour faire du roleplay de qualité.",
  keywords: [
    "festiny",
    "serveur roleplay",
    "roleplay unique",
    "jeu FiveM",
    "communauté FiveM",
  ],
  alternates: {
    canonical: "https://festiny.netlify.app",
  },
  openGraph: {
    title: "Festiny | Rejoindre un serveur de roleplay unique",
    description: "Festiny est le meilleur endroit pour faire du roleplay de qualité.",
    siteName: "Festiny",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />
        {children}

        <p className={styles.footerCopy}>
          © 2026 Festiny RP — Created by So. All rights reserved.  
          Festiny is a fictional project and is not affiliated with Rockstar Games, Take‑Two Interactive, or any real‑world brands.
        </p>
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Festiny",
              url: "https://festiny.netlify.app",
              logo: "https://festiny.netlify.app/logo.png",
              description: "Envie de rejoindre un serveur unique ? Festiny est le meilleur endroit pour faire du roleplay de qualité.",
              sameAs: [
                "https://twitter.com/",
                "https://instagram.com/",
                "https://discord.gg/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
