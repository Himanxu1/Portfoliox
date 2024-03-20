import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ajay Mandal",
  description: "My Portfolio Website",
  icons:{
    icon:[
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-light.png",
        href: "/logo-light.png"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.png",
        href: "/logo-dark.png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
          <div className="h-full w-full dark:bg-gray-900 bg-slate-100  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-gray-900 bg-slate-100 [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        </body>
    </html>
  );
}
