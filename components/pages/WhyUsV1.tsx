"use client";
import React, { useEffect, useRef, useState } from "react";
import { FiZap, FiGlobe, FiTrendingUp, FiShield } from "react-icons/fi";
import { motion } from "framer-motion";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <motion.div
    className="flex flex-col items-start bg-white bg-opacity-80 p-6 shadow-lg rounded-xl"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <div className="bg-lime-400 rounded-full p-4 mb-4">{icon}</div>
    <h3 className="text-lg text-slate-800 font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </motion.div>
);

const WhyUsV1: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 px-4 overflow-hidden bg-gray-50 "
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg/bg-13.jpg')",
          filter: "brightness(0.96)",
        }}
      ></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-white"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.h2 className="text-sm font-semibold text-lime-600 mb-2">
          Why Agrikkom?
        </motion.h2>
        <motion.h1 className="text-4xl md:text-5xl font-bold text-green-900 py-6 mb-4 w-full lg:w-2/3 text-balance">
          We are the best agricultural export provider from Uganda
        </motion.h1>
        <motion.p className="text-xl mb-8 text-slate-600">
          Fast, reliable, and high-quality agricultural exports from Uganda to
          the world.
        </motion.p>

        <motion.button className="bg-lime-400 text-green-900 font-semibold py-3 px-6 rounded-full hover:bg-lime-500 transition duration-300">
          Contact Us
        </motion.button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 py-8">
          <Feature
            icon={<FiZap className="w-6 h-6 text-green-900" />}
            title="Fast, reliable exports"
            description="Get timely deliveries of fresh produce to international markets."
          />
          <Feature
            icon={<FiGlobe className="w-6 h-6 text-green-900" />}
            title="Global reach"
            description="We export to major markets worldwide, expanding your business globally."
          />
          <Feature
            icon={<FiTrendingUp className="w-6 h-6 text-green-900" />}
            title="Competitive pricing"
            description="Our efficient processes allow us to offer competitive prices."
          />
          <Feature
            icon={<FiShield className="w-6 h-6 text-green-900" />}
            title="Certified Quality"
            description="All our produce is certified by Ugandan regulatory bodies."
          />
        </div>
      </motion.div>
    </section>
  );
};

export default WhyUsV1;
