import { Image } from "@/types/image";

function numberToCSSValue(number?: number) {
  return number ? number + "%" : "center";
}

export function getImageFocusCSS(image: Image) {
  const x = numberToCSSValue(image?.focusX);
  const y = numberToCSSValue(image?.focusY);

  return `${x} ${y}`;
}
