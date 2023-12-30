import { motion } from "framer-motion";
import React from "react";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      className="max-w-[1700px] mx-auto"
      //   initial={{ scaleY: 0 }}
      //   animate={{ scaleY: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
