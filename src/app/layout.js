import { Patrick_Hand as PatrickHand } from "next/font/google";

import "./globals.css";
import { cn } from "./utils";

const patrickHand = PatrickHand({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Builder App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("overflow-hidden", patrickHand.className)}>
        {children}
      </body>
    </html>
  );
}
