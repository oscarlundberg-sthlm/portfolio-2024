import classNames from "classnames";

interface Props {
  title: string;
  artist: string;
  className?: string;
  lineheight?: "tight";
}

function TrackTitle({ title, artist, className, lineheight }: Props) {
  return (
    <div className={classNames("text-left leading-tight", className)}>
      <div
        className={classNames("font-bold text-lg", {
          "leading-[1.5]": lineheight === "tight",
        })}
      >
        {title}
      </div>
      <div
        className={classNames("text-sm font-medium opacity-70", {
          "leading-[1.4]": lineheight === "tight",
        })}
      >
        {artist}
      </div>
    </div>
  );
}

export default TrackTitle;
