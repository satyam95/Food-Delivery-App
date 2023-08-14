import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zomato",
  description: "India’s largest Food Delivery, Dining and Restaurant Discovery Service. Better food for more people.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
