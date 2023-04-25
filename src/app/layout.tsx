import "./global.css";

export const metadata = {
  title: "Sycode",

  description: "The future of technology"
};

import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin-ext"],
  display: "swap"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="scroll-smooth">
      <head></head>
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
