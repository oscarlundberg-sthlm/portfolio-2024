import { RefObject, useEffect, useState } from "react";

/**
 * @description dispatches a "clickoutside" event when clicked outside of the ref
 *
 * @returns clickedOutside - updated on every click outside
 */
export default function useClickOutside(ref: RefObject<HTMLElement>) {
  const [clickedOutside, setClickedOutside] = useState(0);
  // Handle the click outside logic
  useEffect(() => {
    function handleClickOutside(event: PointerEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        // Click happened outside the referenced element
        setClickedOutside(clickedOutside + 1);
      }
    }

    // Bind the event listener
    document.addEventListener("pointerdown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [ref, clickedOutside]);

  return clickedOutside;
}
