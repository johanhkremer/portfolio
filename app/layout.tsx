import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/client/navbar";
import Footer from "@/components/server/footer";
import { Toaster } from "@/components/ui/sonner";

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
          <header className="px-8">
            <Navbar />
          </header>
          <main className="flex-grow px-14">
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
