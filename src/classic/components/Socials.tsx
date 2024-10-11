"use client";
import { Email, Github, LinkedIn } from "@/svg/socialIcons";
import { useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Container from "./Container";
import Circle from "./graphics/Circle";

function Socials() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <div className="overflow-x-hidden">
      <Container>
        <div className="relative flex justify-center">
          <div
            ref={ref}
            className="max-w-[720px] relative grid grid-cols-7 justify-center items-center gap-2 md:gap-6"
          >
            <div
              style={{
                transform: inView ? "none" : "translateX(-200px)",
                opacity: inView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
              }}
            >
              <div className="rounded-full bg-[var(--classic-white)] pt-[100%] w-full"></div>
            </div>
            <div
              style={{
                transform: inView ? "none" : "translateX(-200px)",
                opacity: inView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
              }}
            >
              <div className="rounded-full bg-[var(--classic-white)] pt-[100%] w-full"></div>
            </div>
            <Link
              href="mailto:oscarlundberg@hotmail.com"
              target="_blank"
              className="relative group"
              aria-label="Send w-full h-full"
            >
              <Circle className="w-full h-full" />
              <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                <Email
                  className="h-auto w-[45%] md:w-[30%] group-hover:scale-110 transition"
                  fill="currentColor"
                />
              </div>
            </Link>
            <Link
              href="https://github.com/oscarlundberg-sthlm"
              target="_blank"
              className="relative group shrink-0"
              aria-label="Visit w-full h-full"
            >
              <Circle className="w-full h-full" />
              <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                <Github
                  className="h-auto w-[45%] md:w-[30%] group-hover:scale-110 transition"
                  fill="currentColor"
                />
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/oscarlundberg-sthlm"
              target="_blank"
              className="relative group w-full h-full"
              aria-label="Visit my Linkedin page"
            >
              <Circle className="w-full h-full" />
              <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                <LinkedIn
                  className="h-auto w-[45%] md:w-[30%] group-hover:scale-110 transition"
                  fill="currentColor"
                />
              </div>
            </Link>
            <div
              style={{
                transform: inView ? "none" : "translateX(200px)",
                opacity: inView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
              }}
            >
              <div className="rounded-full bg-[var(--classic-white)] pt-[100%] w-full"></div>
            </div>
            <div
              style={{
                transform: inView ? "none" : "translateX(200px)",
                opacity: inView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
              }}
            >
              <div className="rounded-full bg-[var(--classic-white)] pt-[100%] w-full"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Socials;
