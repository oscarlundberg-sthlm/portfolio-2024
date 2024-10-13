"use client";
import tracks from "@/data/tracks.json";
import BallRoll from "@/modernMinimalism/components/BallRoll";
import Container from "@/modernMinimalism/components/Container";
import ContentBlockTopOfPage from "@/modernMinimalism/components/ContentBlockTopOfPage";
import ContentBlockV1 from "@/modernMinimalism/components/ContentBlockV1";
import ContentBlockV2 from "@/modernMinimalism/components/ContentBlockV2";
import ContentBlockV3 from "@/modernMinimalism/components/ContentBlockV3";
import LogoNarrow from "@/modernMinimalism/components/graphics/LogoNarrow";
import Socials from "@/modernMinimalism/components/Socials";
import { motion } from "framer-motion";
import React, { useEffect } from "react";

export default function ModernMinimalismPage() {
  useEffect(() => {
    // This is for removing any theme colors
    const bodyTag = document.querySelector("body");
    if (!bodyTag) return;

    let themeClassName;

    bodyTag.classList.forEach((className) => {
      if (className.startsWith("theme")) {
        themeClassName = className;
      }
    });

    if (!themeClassName) return;

    bodyTag.classList.remove(themeClassName);
  }, []);

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {tracks.map((track, index) => {
          if (index === 0) {
            return (
              <ContentBlockTopOfPage
                key={track.id}
                image={track.image}
                preText={
                  <header className="mb-[20vh]">
                    <LogoNarrow
                      size="mini"
                      className="w-full h-auto max-w-[130px] md:max-w-[140px]"
                    />
                  </header>
                }
                heading={<>Welcome!</>}
                prose={
                  <>
                    <p>
                      I'm a frontend developer graduate who got hired as a
                      software engineer straight out of&nbsp;school.
                    </p>
                  </>
                }
              />
            );
          }
          if (index === 1) {
            return (
              <React.Fragment key={track.id}>
                <BallRoll roller="ball" direction="right" />
                <ContentBlockV2
                  image={track.image}
                  heading={<>My web dev experience</>}
                  prose={
                    <>
                      <p>
                        I've worked with frameworks like Next.js (React,
                        TypeScript, JavaScript) and Laravel (PHP, Blade). CMSs'
                        like Sanity, Statamic and Wordpress. All kinds of
                        third-party&nbsp;integrations.
                      </p>
                      <p>
                        I've touched most parts of web development, from
                        databases & backend, CMS, frontend & design, to
                        deployment, DNS,&nbsp;etc...
                      </p>
                    </>
                  }
                />
              </React.Fragment>
            );
          }
          if (index === 2) {
            return (
              <React.Fragment key={track.id}>
                <BallRoll roller="circle" direction="left" />
                <ContentBlockV3
                  image={track.image}
                  heading={<>I've been in a bunch of bands</>}
                  prose={
                    <>
                      <p>
                        - and played behind singer-songwriters and&nbsp;artists.
                      </p>
                      <p>
                        Playing music with others comes with a lot of practise
                        in cooperation and doing your part, while collectively
                        working towards a common&nbsp;goal.
                      </p>
                    </>
                  }
                />
              </React.Fragment>
            );
          }
          if (index === 3) {
            return (
              <React.Fragment key={track.id}>
                <BallRoll direction="right" roller="ball" />
                <ContentBlockV2
                  image={track.image}
                  heading={
                    <>
                      Physical
                      <br />
                      well-being
                    </>
                  }
                  prose={
                    <>
                      <p>
                        I like going to the climbing gym in my spare time. I've
                        always been a fan of sports like climbing, skateboarding
                        and snowboarding - where you can get into a
                        flow&nbsp;state.
                      </p>
                      <p>To me, it's like&nbsp;meditation.</p>
                    </>
                  }
                />
              </React.Fragment>
            );
          }
          if (index === 4) {
            return (
              <React.Fragment key={track.id}>
                <BallRoll roller="circle" direction="left" />
                <ContentBlockV1
                  image={track.image}
                  heading={<>Everyday vibes are everything</>}
                  prose={
                    <>
                      <p>
                        Most days are spent at work. In fact, most of our life
                        is lived at work. That's why the everyday vibes matter
                        to&nbsp;me.
                      </p>
                      <p>
                        The "everyday vibes" are a lot to unpack in a little
                        text box, but in short, if your workplace has actual
                        sincere, warm laughter on the regular - that's a really
                        good sign to&nbsp;me.
                      </p>
                    </>
                  }
                />
              </React.Fragment>
            );
          }
          return <React.Fragment key={track.id}></React.Fragment>;
        })}
      </motion.main>
      <footer className=" pt-[40vh] pb-[30vh]">
        <Socials />
        <Container>
          <div className="mt-32 flex justify-center">
            <LogoNarrow className="w-[100px] h-auto" size="mini" />
          </div>
        </Container>
      </footer>
    </>
  );
}
