"use client";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import posthog from "posthog-js";
import React from "react";
type AnnouncementProps = {
  title: string;
  href: string;
};
export default function Announcement({ title, href }: AnnouncementProps) {
  return (
    <Link
      href={href}
      className="relative rounded-full px-6 py-1.5 text-sm leading-6 text-blue-600 ring-1 ring-pink-900/10 hover:ring-pink-900/20 flex items-center font-semibold"
      onClick={() => posthog.capture("banner_cta_clicked")}
    >
      {title}
      <MoveRight className="w-4 h-4 ml-2" />
    </Link>
  );
}
