import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AB Talks — 60 days of building",
  description: "A public coding challenge for ambitious Indian students.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
