import type { IconName } from "./IconPaths";

export const navigationIcons: { 
  name: IconName; 
  route?: string, 
  actionType?: "dropdown" | "search" | "logout";
}[] = [
  { name: "bars_4", actionType: "dropdown" },
  { name: "magnifying_glass", actionType: "search" },
  { name: "user_circle", route: "/profile" },
  { name: "bell", route: "/notifications" },
  { name: "globe", route: "/explore" },
  { name: "home", route: "/home" },
  { name: "arrow_right_end_rectangle", route: "/", actionType: "logout" },
];