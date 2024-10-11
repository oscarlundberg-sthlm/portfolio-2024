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
}

function ContentBlockV2({ image, heading, prose }: Props) {
  return (
    <Container>
      <section className="relative mt-6 md:hidden">
        <div className="mb-24">
          <BlockHeading className="max-w-[320px]">{heading}</BlockHeading>
          <BlockProse>{prose}</BlockProse>
        </div>
        <div className="relative w-full pt-[140%]">
          <BlockImage image={image} position="right" />
        </div>
      </section>
      <section className="relative mt-6 hidden md:block">
        <div className="relative flex justify-start">
          <div className="relative w-[calc(100%-350px)] pt-[80%] xl:pt-[56.56%]">
            <BlockImage image={image} position="left" />
          </div>
        </div>
        <div className="absolute top-12 bottom-0 right-0 mix-blend-difference">
          <div className="sticky top-1/3 mb-28">
            <div className="flex">
              <BlockHeading className="max-w-[320px] text-right">
                {heading}
              </BlockHeading>
              <BlockProse className="min-w-[320px] ml-20">{prose}</BlockProse>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default ContentBlockV2;
