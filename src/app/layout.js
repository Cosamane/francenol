import { Fredoka, Nunito_Sans } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fredoka",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "Franceñol — Apprendre l'espagnol simplement",
  description: "Aprende español paso a paso utilizando el francés como apoyo.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Franceñol",
  },
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#14b8a6",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${fredoka.variable} ${nunitoSans.variable} antialiased`}
        style={{ fontFamily: "var(--font-nunito), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}