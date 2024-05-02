import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  useY?: boolean;
}

export const InViewReveal: React.FC<Props> = ({ children, useY = true }) => {
  const divRef = useRef(null);
  const isInView = useInView(divRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      animate={mainControls}
      initial="hidden"
      ref={divRef}
      variants={{
        hidden: { opacity: 0, y: useY ? 30 : 0 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      {children}
    </motion.div>
  );
};
