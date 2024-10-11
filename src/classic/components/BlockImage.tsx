import { getImageFocusCSS } from "@/helpers/imageFocus";
import { Image as ImageType } from "@/types/image";
import classNames from "classnames";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  image: ImageType;
  position: "left" | "right";
  children?: ReactNode;
}

function BlockImage({ image, position, children }: Props) {
  return (
    <>
      <div
        className={classNames(
          "absolute inset-0 w-full h-full border-8 lg:border-[22px] border-[var(--classic-white)] overflow-hidden",
          {
            "rounded-tl-[108.5px] rounded-br-[108.5px]": position === "left",
            "rounded-tr-[108.5px] rounded-bl-[108.5px]": position === "right",
          }
        )}
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
      </div>
    </>
  );
}

export default BlockImage;
