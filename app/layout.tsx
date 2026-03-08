import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TwinBridge Travels | Expert Immigration Services",
  description:
    "TwinBridge Travels provides transparent, honest, and high-quality immigration services. We specialize in Canada Permanent Residency (PR), Visiting Visas, and turning your dreams into reality.",
  keywords: [
    "TwinBridge",
    "TwinBridge Travels",
    "Immigration",
    "Canada PR",
    "Permanent Residency",
    "Visiting Visa",
    "Travel Agency",
    "Immigration Consultant",
    "Visa Application",
  ],
  authors: [{ name: "TwinBridge Travels" }],
  openGraph: {
    type: "website",
    url: "https://www.twinbridgetravels.com/",
    title: "TwinBridge Travels | Expert Immigration Services",
    description:
      "Your trusted partner for transparent and high-quality immigration services. Distance should never be a barrier to opportunity.",
    siteName: "TwinBridge Travels",
    images: [
      {
        url: "https://www.twinbridgetravels.com/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "TwinBridge Travels logo - Expert Immigration Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TwinBridge Travels | Expert Immigration Services",
    description:
      "Your trusted partner for transparent and high-quality immigration services. Distance should never be a barrier to opportunity.",
    images: ["https://www.twinbridgetravels.com/images/logo.svg"],
  },
  icons: {
    icon: [{ url: "/images/logo.svg", sizes: "any", type: "image/svg+xml" }],
    shortcut: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" richColors visibleToasts={1} />
      </body>
    </html>
  );
}
