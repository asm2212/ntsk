"use client";
import {
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchBarV1() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/search?query=${query}`);
    setQuery("");
  }
  return (
    <form className="" onSubmit={handleSearch}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-center"
      >
        <div className="relative max-w-xl w-full">
          <input
            type="text"
            placeholder="Search for doctors..."
            className="w-full px-6 py-4 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition duration-300">
            <Search className="w-6 h-6" />
          </button>
        </div>
      </motion.div>
    </form>
  );
}
