import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner"
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Foro Hub",
  description: "Una plataforma para compartir y discutir temas de interés",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased overflow-x-hidden`}>
        <Providers>{children}</Providers>
        <Toaster/>
      </body>
    </html>
  );
}
