"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] absolute"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.3, duration: 0.4, ease: "easeInOut" },
          }}
        >
          <Image
            src="/assets/photo.png"
            alt=""
            priority
            quality={100}
            fill
            className="object-contain"
          />
        </motion.div>
        <motion.svg
          className="w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="259"
            cy="259"
            r="256"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: "20",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
