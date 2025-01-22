"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Leaf, Globe, Award } from "lucide-react";
import Link from "next/link";

const backgroundImages = [
  "/bg/bg-1.jpg",
  "/bg/bg-2.jpg",
  "/bg/bg-3.jpg",
  "/bg/bg-4.jpg",
  "/bg/bg-5.jpg",
  "/bg/bg-6.jpg",
  "/bg/bg-7.jpg",
  "/bg/bg-8.jpg",
];

export default function HeroV1() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-green-900 to-green-700 text-white overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={backgroundImages[currentImageIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={backgroundImages[currentImageIndex]}
            alt="Ugandan farm landscape"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-20"
          />
        </motion.div>
      </AnimatePresence>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            From Uganda's Finest Farms
            <br />
            <span className="text-green-300">To the World's Tables</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            Agrikkom connects global markets with premium Ugandan produce,
            ensuring freshness, quality, and sustainability in every export.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <Link
            href="/products"
            className="bg-lime-500 hover:bg-lime-400 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition duration-300"
          >
            Explore Our Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <a
            href="/contact"
            className="bg-transparent border-2 border-green-300 text-green-300 hover:bg-green-300 hover:text-green-900 font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6">
            <Leaf className="w-12 h-12 text-green-300 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">100+ Varieties</h3>
            <p className="text-green-100">
              Diverse range of fresh fruits and vegetables
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6">
            <Globe className="w-12 h-12 text-green-300 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
            <p className="text-green-100">
              Exporting to 30+ countries worldwide
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6">
            <Award className="w-12 h-12 text-green-300 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Certified Quality</h3>
            <p className="text-green-100">
              Meeting international standards for excellence
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
