import "@/styles/globals.css";
import "@/styles/lines.css";
import "@/styles/ham.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import {
  Inter,
  Road_Rage,
  Luckiest_Guy,
  Playfair_Display,
  Poppins,
} from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Cafe",
  description: "Cafe",
  icons: [{ rel: "icon", url: "/images/home/hero/logo.png", sizes: "11x11" }],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400"],
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair_display",
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

const luckiest_guy = Luckiest_Guy({
  subsets: ["latin"],
  variable: "--font-luckiest_guy",
  weight: ["400"],
});

const road_rage = Road_Rage({
  subsets: ["latin"],
  variable: "--font-road_rage",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom flex min-h-screen font-inter antialiased",
          inter.variable,
          road_rage.variable,
          luckiest_guy.variable,
          playfair_display.variable,
          poppins.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
