import { Header } from "@/components/shared/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Pizza",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
    </main>
  );
}
