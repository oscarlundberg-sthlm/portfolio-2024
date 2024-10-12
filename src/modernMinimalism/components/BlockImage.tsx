"use client";
import { getImageFocusCSS } from "@/helpers/imageFocus";
import { Image as ImageType } from "@/types/image";
import classNames from "classnames";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ReactNode, useRef } from "react";

interface Props {
  image: ImageType;
  position: "left" | "right";
  children?: ReactNode;
}

function BlockImage({ image, position, children }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  function getOpacity(x: number) {
    const lowerStart = 0.3; // Opacity is 0 at and below this value
    const lowerFull = 0.5; // Opacity reaches 1 at this value
    const higherFull = 0.7; // Opacity stays 1 until this value
    const higherEnd = 0.95; // Opacity returns to 0 at this value

    // Below lowerStart, opacity is 0
    if (x <= lowerStart) {
      return 0;
    }

    // Between lowerStart and lowerFull, opacity rises from 0 to 1
    if (x <= lowerFull) {
      return (x - lowerStart) / (lowerFull - lowerStart);
    }

    // Between lowerFull and higherFull, opacity stays at 1
    if (x <= higherFull) {
      return 1;
    }

    // Between higherFull and higherEnd, opacity falls from 1 to 0
    if (x <= higherEnd) {
      return 1 - (x - higherFull) / (higherEnd - higherFull);
    }

    // Above higherEnd, opacity is 0
    return 0;
  }

  const opacity = useTransform(scrollYProgress, (value) => getOpacity(value));

  return (
    <>
      <motion.div
        ref={ref}
        className={classNames(
          "absolute inset-0 w-full h-full border-8 lg:border-[12px] xl:border-[22px] border-[var(--modern-minimalism-white)] overflow-hidden",
          {
            "rounded-tl-[108.5px] rounded-br-[108.5px]": position === "left",
            "rounded-tr-[108.5px] rounded-bl-[108.5px]": position === "right",
          }
        )}
        style={{
          opacity: opacity,
        }}
      >
        <Image
          className={classNames(
            "absolute inset-0 w-full h-full saturate-[0.3] object-cover"
          )}
          src={image.src}
          height={image.height}
          width={image.width}
          alt={image.alt}
          style={{
            objectPosition: getImageFocusCSS(image),
          }}
        />
        <div
          className="absolute inset-0 w-full h-full "
          style={{
            backgroundImage: 'url("/img/graphics/dot.png")',
            backgroundRepeat: "repeat",
            mixBlendMode: "screen",
          }}
        ></div>
        {children}
      </motion.div>
    </>
  );
}

export default BlockImage;
