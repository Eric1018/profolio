import { Geist, Geist_Mono, Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],weight:["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"],weight:["400"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Derrick Hsu's Personnal Website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        {/* 設定 viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white` }
      >
        {children}
      </body>
    </html>
  );
}
