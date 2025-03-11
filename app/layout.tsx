import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "@/components/server/navbar";
import Footer from "@/components/server/footer";

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
        <Theme>
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
        </Theme>
      </body>
    </html>
  );
}
