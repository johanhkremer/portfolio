import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/client/navbar";
import Footer from "@/components/server/footer";
import { Toaster } from "@/components/ui/sonner";
import SocialSidebar from "@/components/client/social-sidebar";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Johans Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <header className="px-4 sm:px-6 md-px-10">
            <Navbar />
          </header>
          <div className="hidden md:block">
            <SocialSidebar />
          </div>
          <main className="flex-grow px-4 sm:px-6 md:px-14 xl:max-w-7xl xl:mx-auto">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
