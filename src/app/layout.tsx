"use client";

import "./ui/globals.css";
import "./ui/data-tables-css.css";
import "./ui/satoshi.css";

import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

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
