import type { IconName } from "./IconPaths";

export const navigationIcons: { name: IconName; route: string, reset?: boolean }[] = [
  { name: "bars_4", route: "/profile" },
  { name: "user_circle", route: "/profile" },
  { name: "bell", route: "/notifications" },
  { name: "globe", route: "/explore" },
  { name: "home", route: "/home" },
  { name: "arrow_right_end_rectangle", route: "/", reset: true },
];