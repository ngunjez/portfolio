import React, { ReactNode, useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children,}: HomeLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
