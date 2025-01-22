import PromoBanner from "@/components/frontend/PromoBanner";
import { SiteBanner } from "@/components/frontend/site-banner";
import Footer from "@/components/frontend/site-footer";
import SiteHeader from "@/components/frontend/site-header";
import NavbarV1 from "@/components/pages/NavbarV1";
// import { NavbarV1 } from "@/components/pages/NavbarV1";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";

export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg-white">
      {/* <PromoBanner /> */}
      <SiteHeader session={session} />
      {children}
      <Footer />
    </div>
  );
}
