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
  metadataBase: new URL("https://francenol-henna.vercel.app"),
  title: "Franceñol",
  description: "Apprends l'espagnol mexicain avec le soutien du français",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/apple-touch-icon.png",
  },
  openGraph: {
    title: "Franceñol",
    description: "Apprends l'espagnol mexicain avec le soutien du français",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Franceñol",
      },
    ],
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