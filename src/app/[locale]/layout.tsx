import "@/app/globals.css";
import "aos/dist/aos.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { cn } from "@/lib/utils";
import Footer from "@/components/Global/footer";
import Navbar from "@/components/Global/Navbar";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dufyz | Fullstack Developer",
  description: "Portfolio of an react fullstack developer",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={cn(
          "min-h-screen bg-background antialiased bg-gray-900",
          inter.className
        )}
      >
        <Analytics />
        <Toaster
          richColors
          position="top-center"
          closeButton
          visibleToasts={1}
          expand
        />
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
