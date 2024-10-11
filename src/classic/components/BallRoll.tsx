"use client";
import classNames from "classnames";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Container from "./Container";
import Ball from "./graphics/Ball";
import Circle from "./graphics/Circle";
import Triangle from "./graphics/Triangle";

interface Props {
  direction: "left" | "right";
  roller: "ball" | "circle";
}

function BallRoll({ direction, roller }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 1", "0 0"],
  });
  const springX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });
  const translateX = useTransform(springX, (value) =>
    direction === "right" ? `${value * 100}%` : `${value * -100}%`
  );

  return (
    <Container>
      <div
        ref={ref}
        className={classNames("relative flex overflow-hidden my-[30vh]", {
          "flex-row-reverse": direction === "left",
        })}
      >
        <div
          className={classNames(
            "grow relative",
            direction === "right" ? "mr-6" : "ml-6"
          )}
        >
          <motion.div
            className={classNames(
              "flex",
              direction === "right" ? "justify-start" : "justify-end"
            )}
            style={{ x: translateX }}
          >
            {roller === "ball" ? (
              <Ball className="w-[80px] h-[80px] md:w-[140px] md:h-[140px] xl:w-[217px] xl:h-[217px]" />
            ) : (
              <Circle className="w-[80px] h-[80px] md:w-[140px] md:h-[140px] xl:w-[217px] xl:h-[217px]" />
            )}
          </motion.div>
        </div>
        <div className="invisible">
          {roller === "ball" ? (
            <Ball className="w-[80px] h-[80px] md:w-[140px] md:h-[140px] xl:w-[217px] xl:h-[217px]" />
          ) : (
            <Circle className="w-[80px] h-[80px] md:w-[140px] md:h-[140px] xl:w-[217px] xl:h-[217px]" />
          )}
        </div>
        {direction === "right" ? (
          <div>
            <Triangle className="w-[80px] h-[80px] md:w-[140px] md:h-[140px] xl:w-[217px] xl:h-[217px]" />
          </div>
        ) : (
          <div className="-rotate-90">
            <Triangle className="w-[80px] h-[80px] md:w-[140px] md:h-[140px] xl:w-[217px] xl:h-[217px]" />
          </div>
        )}
      </div>
    </Container>
  );
}

export default BallRoll;
