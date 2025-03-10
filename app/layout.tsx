import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "@/components/server/navbar";

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
          <div className="container px-20 mx-auto">
            <Navbar />
            {children}
          </div>
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  );
}
