import Link from "next/link";
import React from "react";

const PromoBanner: React.FC = () => {
  return (
    <Link
      href="https://coding-school-typescript.vercel.app/give-away"
      target="_blank"
      className="bg-blue-600 text-white py-2 flex justify-center items-center sticky top-0 h-10 inset-0 z-[999] text-sm"
    >
      <div className="flex items-center space-x-2">
        <span className="text-yellow-400">✨</span>
        <p className=" font-semibold">
          Get a <span className="underline">Free Next.js Starter Kit</span> and
          enjoy
          <span className="text-yellow-400"> 50% Discount</span> on the Premium
          <span className="underline"> Next.js Fullstack Course</span>! 🚀
        </p>
        <span className="hidden lg:inline-block ml-2 text-white underline hover:text-yellow-400 transition duration-200">
          Learn More &rarr;
        </span>
      </div>
    </Link>
  );
};

export default PromoBanner;
