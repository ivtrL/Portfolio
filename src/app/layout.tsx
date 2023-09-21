import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ThemeProvider from "@/src/components/DarkMode/ThemeProvider";
import { ParticlesProvider } from "../components/Particles/ParticlesProvider";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={`${montserrat.variable} font-mont dark:bg-slate-950 bg-light w-full min-h-screen`}
        >
          <ParticlesProvider>
            <Navbar />
            {children}
            <Footer />
          </ParticlesProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
