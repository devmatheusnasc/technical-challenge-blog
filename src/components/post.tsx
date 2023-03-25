import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Post({ ...props }) {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className="mt-12 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <div className="shadow-2xl h-72 rounded-lg p-4 cursor-pointer ">
        <h1 className="text-2xl font-bold mb-2 leading-tight tracking-tight">
          {props.title}
        </h1>
        <p className="text-1xl leading-tight text-slate-400">{props.body}</p>
      </div>
    </motion.div>
  );
}
