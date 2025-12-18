import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import StairTransition from "@/components/ui/StairsTransiton";
import PageTransition  from "@/components/ui/PageTransition";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Alzhimer Care",
  description: "Alzcare",
};

export const dynamic = 'force-static';

function Footer() {
  return (
    <div className="bg-black-100 text-cyan-50 text-center top-[100vh] static">
      <p>&copy; 2024 Alzcare</p>
    </div>
  );
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <StairTransition />
          <PageTransition>
          {children}
          </PageTransition>

          <div>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
