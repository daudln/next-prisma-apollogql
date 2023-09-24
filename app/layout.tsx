import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shirika la Posta Tanzania, Posta",
  description:
    "Mtoa huduma za Posta bunifu na uhakika zinazoendana na vionjo vya wateja katika Uchumi wa Kidijitali. Twenzetu Kidigitali, Haijawahi Tokea",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
