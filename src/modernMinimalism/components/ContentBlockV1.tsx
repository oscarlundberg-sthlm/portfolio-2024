"use client";
import { AudioMetaDataUnPopulated } from "@/types/audioMetaData";
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
  return (
    <Container>
      <section className="relative mt-6 md:hidden">
        <div className="mb-14">
          <BlockHeading className="max-w-[320px]">{heading}</BlockHeading>
          <BlockProse>{prose}</BlockProse>
        </div>
        <div className="relative w-full pt-[140%]">
          <BlockImage image={image} position="right" />
        </div>
      </section>
      <section className="relative mt-6 hidden md:block">
        <div className="relative flex justify-end">
          <div className="relative w-[calc(100%-320px-22px)] xl:w-[58.5%] pt-[66%] xl:pt-[50%]">
            <BlockImage image={image} position="right" />
          </div>
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
