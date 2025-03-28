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
          <header className="px-4 sm:px-6 md-px-10 lg:px-24 xl:px-32">
            <Navbar />
          </header>
          <div className="hidden lg:block">
            <SocialSidebar />
          </div>
          <main
            className="flex-grow w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-40 [@media(min-width:1280px)]:px-40 [@media(min-width:1600px)]:px-96"
          >
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
        <Toaster />
        {/* <WindowSize /> */}
      </body>
    </html>
  );
}
