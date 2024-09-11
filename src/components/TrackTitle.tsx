import classNames from "classnames";

interface Props {
  title: string;
  artist: string;
  className?: string;
}

function TrackTitle({ title, artist, className }: Props) {
  return (
    <div
      className={classNames("text-left text-white leading-tight", className)}
    >
      <div className="font-bold text-lg">{title}</div>
      <div className="text-sm opacity-70">{artist}</div>
    </div>
  );
}

export default TrackTitle;
