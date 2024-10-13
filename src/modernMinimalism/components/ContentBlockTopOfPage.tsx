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
  preText?: ReactNode;
}

function ContentBlockTopOfPage({ image, heading, prose, preText }: Props) {
  return (
    <Container>
      <section className="relative mt-6 md:hidden">
        <div className="mb-14">
          {preText}
          <BlockHeading className="max-w-[320px]">{heading}</BlockHeading>
          <BlockProse>{prose}</BlockProse>
        </div>
        <div className="relative w-full pt-[140%]">
          <BlockImage image={image} position="right" />
        </div>
      </section>
      <section className="relative hidden md:block">
        <div className="h-[60vh]"></div>
        <div className="relative flex justify-end items-end">
          <div className="relative w-[calc(100%-320px-22px)] xl:w-[58.5%] pt-[66%] xl:pt-[50%]">
            <BlockImage image={image} position="right" />
          </div>
        </div>
        <div className="absolute inset-0 mt-5 mix-blend-difference">
          <div className="sticky top-6 mb-28">
            {preText}
            <BlockHeading className="max-w-[320px]">{heading}</BlockHeading>
            <BlockProse>{prose}</BlockProse>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default ContentBlockTopOfPage;
