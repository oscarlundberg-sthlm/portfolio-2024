"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Container from "./Container";

function FallingBrick() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 1", "0.5 0"],
  });
  const spring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });
  const translate = useTransform(spring, (value) => `${value * (540 - 22)}px`);
  return (
    <Container>
      <div ref={ref} className="my-6 h-[540px] w-full relative">
        <motion.div
          className="flex justify-end w-full"
          style={{ y: translate }}
        >
          <div className="bg-[var(--modern-minimalism-white)] h-[22px] w-[50%]"></div>
        </motion.div>
      </div>
    </Container>
  );
}

export default FallingBrick;
