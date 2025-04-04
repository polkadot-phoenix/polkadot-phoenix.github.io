import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PAF Ecosystem Survey",
  description: "Insights and analysis from the Polkadot Ambassador Fellowship ecosystem survey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow mb-72">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
