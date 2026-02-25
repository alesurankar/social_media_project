import React from "react";
import Svg, { Path } from "react-native-svg";

type IconName = "bars_4" | "bars_arrow_down" | "bars_arrow_up";

type Props = {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
};

const ICON_PATHS: Record<IconName, string> = {
  bars_4: "M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5",
  bars_arrow_down:
    "M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25",
  bars_arrow_up:
    "M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12",
};

const Icon: React.FC<Props> = ({
  name,
  size = 24,
  color = "#000",
  strokeWidth = 1.5,
}) => {
  const d = ICON_PATHS[name];

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}>
      <Path d={d} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

export default Icon;
export type { IconName };