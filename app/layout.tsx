import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollHashSync from "@/components/ScrollHashSync";

export const metadata: Metadata = {
  metadataBase: new URL("https://liuetha.github.io"),
  title: {
    default: "Ethan Liu | Mechanical Engineering",
    template: "%s | Ethan Liu",
  },
  description:
    "Ethan Liu is a mechanical engineering student at the University of Toronto working on Computational Fluid Dynamics (CFD) research, aerodynamics, and mechanical design.",
  openGraph: {
    title: "Ethan Liu | Mechanical Engineering",
    description:
      "Computational Fluid Dynamics (CFD) research, solar car aerodynamics, aircraft stability, and rocket hardware by Ethan Liu.",
    type: "website",
    url: "https://liuetha.github.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        <ScrollHashSync />
        {children}
        <Footer />
      </body>
    </html>
  );
}
