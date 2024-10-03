import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "./components/ui/fonts/font";
import MainHeader from "./components/main-header/main-header";
import MainFooter from "./components/main-footer/MainFooter";



export const metadata: Metadata = {
  title: "DeCook-3S BlockStop",
  description: "Get your cookies freshly made and deliveried on the daily leaving you wanting to come back for more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
