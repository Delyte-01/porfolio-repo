import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScroll from "@/components/lenis-smooth-scroll";
import { Toaster } from "@/components/ui/sonner";
import BackToTop from "@/components/back-to-top";



export const metadata: Metadata = {
  title: "Delyte Portfolio",
  description:
    "Explore the portfolio of a passionate frontend developer crafting sleek, responsive, and scalable web experiences. From modern landing pages to interactive user interfaces, this showcase blends design and code to bring ideas to life with React, Next.js, and cutting-edge tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <SmoothScroll>
            {children}
            <BackToTop />
            <Toaster richColors />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
