import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "../globals.css";
import SideNav from "@/pages/Dashboard/Shared/SideNav";
import { Button } from "@/components/ui/button";
import MobileNav from "@/pages/Dashboard/Shared/MobileNav";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Md Zihad | Javascript Developer",
  description: "Full Stack Javascript Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable}`}>
        <div className="grid min-h-screen w-full lg:grid-cols-[220px_1fr] xl:grid-cols-[280px_1fr] bg-primary">
          {/* side nav */}
          <SideNav />
          <div className="flex flex-col bg-primary">
            {/* mobile nav */}
            <MobileNav />

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
