import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "AniZone | Everything Anime",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar/>
        <div className="mx-5 lg:mx-15">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
