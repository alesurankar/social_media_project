import React from "react";
import Svg, { Path } from "react-native-svg";
import { ICON_PATHS, IconName } from "./IconPaths";

type Props = {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
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