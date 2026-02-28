import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Paypers - O seu papel tem valor",
    template: "%s | Paypers",
  },
  description:
    "Tecnologia e estrategia para transformar ativos judiciais em oportunidades.",
  openGraph: {
    title: "Paypers - O seu papel tem valor",
    description:
      "Tecnologia e estrategia para transformar ativos judiciais em oportunidades.",
    type: "website",
    images: ["/opengraph.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paypers - O seu papel tem valor",
    description:
      "Tecnologia e estrategia para transformar ativos judiciais em oportunidades.",
    images: ["/opengraph.jpg"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`dark ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
