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
        <div className="mb-14">
          <BlockHeading className="max-w-[320px]">{heading}</BlockHeading>
          <BlockProse>{prose}</BlockProse>
        </div>
        <div className="relative w-full pt-[140%]">
          <BlockImage image={image} position="right" />
        </div>
      </section>
      <section className="relative mt-6 hidden md:block">
        <div className="relative flex justify-start">
          <div className="relative w-[58.5%] pt-[70%] xl:pt-[50%]">
            <BlockImage image={image} position="left" />
          </div>
        </div>
        <div className="absolute top-12 bottom-0 left-[calc(58.5%-320px-50px)] mix-blend-difference">
          <div className="sticky top-1/3 mb-28">
            <div className="flex">
              <BlockHeading className="min-w-[320px] max-w-[320px] text-right">
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
