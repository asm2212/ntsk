"use client";
import Lottie from "lottie-react";
import React from "react";
import LoaderAnimation from "../public/loader.json";
export default function SimpleFallback() {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-[200px] ">
          <Lottie animationData={LoaderAnimation} />
        </div>
        <div className="pt-4">
          <p className="text-muted-foreground text-sm">Loading...</p>
        </div>
      </div>
    </div>
  );
}
