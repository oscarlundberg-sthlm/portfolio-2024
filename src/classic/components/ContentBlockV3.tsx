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

function ContentBlockV3({ image, heading, prose }: Props) {
  return (
    <Container>
      <section className="relative mt-6 md:hidden">
        <div className="relative w-full">
          <BlockImage image={image} position="right">
            <div className="absolute inset-0 w-full h-full opacity-90 bg-[var(--classic-black)]"></div>
          </BlockImage>

          <div className="mix-blend-difference mx-6 pt-32 pb-56">
            <BlockHeading className="max-w-[320px]">{heading}</BlockHeading>
            <BlockProse className="">{prose}</BlockProse>
          </div>
        </div>
      </section>
      <section className="relative mt-6 hidden md:block">
        <div className="relative flex justify-start">
          <div className="relative w-full pt-[80%] xl:pt-[56.56%]">
            <BlockImage image={image} position="right">
              <div className="absolute inset-0 w-full h-full opacity-30 bg-gradient-to-r from-[var(--classic-black)] via-[var(--classic-black)] to-black/0"></div>
            </BlockImage>
          </div>
        </div>
        <div className="absolute top-12 bottom-0 left-12 mix-blend-difference">
          <div className="sticky top-1/3 mb-32">
            <div className="">
              <BlockHeading className="max-w-[320px]">{heading}</BlockHeading>
              <BlockProse className="min-w-[320px]">{prose}</BlockProse>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default ContentBlockV3;
