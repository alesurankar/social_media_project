import Bars4 from "./bars_4";
import BarsArrowDown from "./bars_arrow_down";
import BarsArrowUp from "./bars_arrow_up";

type IconName = 
  | "bars_4" 
  | "bars_arrow_down"
  | "bars_arrow_up";

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
};

const icons = {
  bars_4: Bars4,
  bars_arrow_down: BarsArrowDown,
  bars_arrow_up: BarsArrowUp,
};

export default function Icon({ name, size, color }: IconProps) {
  const Component = icons[name];
  return <Component size={size} color={color} />;
}