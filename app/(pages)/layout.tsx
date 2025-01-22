import FloatingMenu from "@/components/pages/FloatingMenu";
import React, { ReactNode } from "react";

export default function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <FloatingMenu />
      {children}
    </div>
  );
}
