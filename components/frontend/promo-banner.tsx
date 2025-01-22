"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-[#0070f3] text-white px-4 py-3 text-center text-sm font-medium">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-1.5">
        <span>✨</span>
        <span>Get a</span>
        <a
          target="_blank"
          href="https://coding-school-typescript.vercel.app/give-away"
          className="underline hover:opacity-90"
        >
          Free Next.js Starter Kit
        </a>
        <span>and 50% Discount</span>

        <a
          target="_blank"
          href="https://coding-school-typescript.vercel.app/give-away"
          className="font-semibold underline hover:opacity-90"
        >
          Next.js Fullstack Course
        </a>

        <span>!</span>
        <span>🚀</span>
        <a
          target="_blank"
          href="https://wa.me/message/5USU26346OWRF1"
          className="ml-1 inline-flex items-center underline hover:opacity-90"
        >
          talk to Me →
        </a>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 rounded-lg p-1 hover:bg-blue-600"
          aria-label="Dismiss banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
