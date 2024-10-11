"use client";
import { AudioMetaDataUnPopulated } from "@/types/audioMetaData";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";
import BlockHeading from "./BlockHeading";
import BlockImage from "./BlockImage";
import BlockProse from "./BlockProse";
import Container from "./Container";

interface Props {
  image: AudioMetaDataUnPopulated["image"];
  heading: ReactNode;
  prose: ReactNode;
  index?: number;
}

function ContentBlockV1({ image, heading, prose, index }: Props) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, (value) => {
    if (index !== 0) return 1;
    const breakpoint = 50;
    const distance = 200;
    return (value - breakpoint) / distance;
  });
  return (
    <Container>
      <section className="relative mt-6 md:hidden">
        <div className="mb-24">
          <BlockHeading className="max-w-[320px]">{heading}</BlockHeading>
          <BlockProse>{prose}</BlockProse>
        </div>
        <motion.div
          className="relative w-full pt-[140%]"
          style={{ opacity: opacity }}
        >
          <BlockImage image={image} position="right" />
        </motion.div>
      </section>
      <section className="relative mt-6 hidden md:block">
        <div className="relative flex justify-end">
          <motion.div
            className="relative w-[calc(100%-320px-22px)] xl:w-[58.5%] pt-[80%] xl:pt-[56.56%]"
            style={{ opacity: opacity }}
          >
            <BlockImage image={image} position="right" />
          </motion.div>
        </div>
        <div className="absolute inset-0 mix-blend-difference">
          <div className="sticky top-1/3 mb-28">
            <BlockHeading className="max-w-[320px]">{heading}</BlockHeading>
            <BlockProse>{prose}</BlockProse>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default ContentBlockV1;
