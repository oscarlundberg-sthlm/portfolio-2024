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
        <div className="mb-14 flex justify-end">
          <div>
            <BlockHeading className="max-w-[240px] md:max-w-[320px]">
              {heading}
            </BlockHeading>
            <BlockProse>{prose}</BlockProse>
          </div>
        </div>
        <div className="relative w-full pt-[140%]">
          <BlockImage image={image} position="left" />
        </div>
      </section>
      <section className="relative mt-6 hidden md:block">
        <div className="relative flex">
          <div className="relative w-[calc(100%-320px-22px)] xl:w-[58.5%] pt-[66%] xl:pt-[50%]">
            <BlockImage image={image} position="left" />
          </div>
        </div>
        <div className="absolute inset-0 mix-blend-difference">
          <div className="sticky top-1/3 mb-28">
            <div className="flex justify-end xl:mr-[calc(217px*2+22px-320px)]">
              <div>
                <BlockHeading className="max-w-[320px]">{heading}</BlockHeading>
                <BlockProse>{prose}</BlockProse>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default ContentBlockV2;
