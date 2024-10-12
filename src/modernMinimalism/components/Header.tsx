"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "./Container";
import LogoNarrow from "./graphics/LogoNarrow";
import LogoWide from "./graphics/LogoWide";

function Header() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, (value) => {
    const breakpoint = 200;
    if (value > breakpoint) {
      return 0;
    }
    return 1 + (value * -1) / breakpoint;
  });
  return (
    <Container>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-5 mb-[22vh] md:mb-[30vh] 3xl:mb-[40vh]"
        style={{
          opacity: opacity,
        }}
      >
        <LogoNarrow className="w-full h-auto md:hidden" />
        <LogoWide className="w-full h-auto hidden md:block" />
      </motion.header>
    </Container>
  );
}

export default Header;
