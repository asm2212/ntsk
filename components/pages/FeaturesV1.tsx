"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FeaturesV1: React.FC = () => {
  return (
    <section className="bg-green-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/bg/bg-2.jpg"
            alt="Fresh Ugandan Produce"
            width={500}
            height={300}
            className="rounded-xl shadow"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 md:pl-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-lime-400 text-sm font-semibold mb-2">
            Premium Exports
          </h2>
          <h3 className="text-4xl font-bold mb-4">
            The Ultimate Fresh Produce Experience Across Borders
          </h3>
          <p className="mb-6">
            Enjoy the quality of Ugandan fresh produce. Export anytime, to
            anywhere around the world.
          </p>
          <ul className="mb-8">
            <li className="flex items-center mb-2">
              <span className="text-lime-400 mr-2">✓</span> Globally Accepted
              Standards
            </li>
            <li className="flex items-center mb-2">
              <span className="text-lime-400 mr-2">✓</span> Track Shipments in
              Real-time
            </li>
            <li className="flex items-center">
              <span className="text-lime-400 mr-2">✓</span> Flexible Export
              Volumes
            </li>
          </ul>
          <button className="bg-lime-400 text-green-900 px-6 py-2 rounded-full hover:bg-lime-500 transition duration-300">
            Learn more
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesV1;
