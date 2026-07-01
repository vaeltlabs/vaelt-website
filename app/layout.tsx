import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import LenisProvider from "./components/LenisProvider";
import CustomCursor from "./components/CustomCursor";
import ScrollRestoration from "./components/ScrollRestoration";
import BackToTop from "./components/BackToTop";

export const metadata: Metadata = {
  title: "VAELT",
  description: "Web and AI systems studio",
  icons: {
    icon: '/fav/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
        />
      </head>
      <body>
        <CustomCursor />
        <LenisProvider>
          <ScrollRestoration />
          <Nav />
          {children}
          <Footer />
          <BackToTop />
        </LenisProvider>
      </body>
    </html>
  );
}
