"use client";

import "./ui/globals.css";
import "./ui/data-tables-css.css";
import "./ui/satoshi.css";

import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#ffc400"
        }
      }}>
      <html lang="en">
        <body suppressHydrationWarning={true}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
