import { url } from "inspector";
import * as Icons from "../icons";

export const NAV_DATA = [
  {
    label: "SUPER ADMIN DASHBOARD",
    items: [
      {
        title: "Dashboard",
        url: "/home",
        icon: Icons.HomeIcon,
        items: [],
      },
      {
        title: "Video Management",
        url: "/home/company-management",
        icon: Icons.User,
        items: [],
      },
    ],
  },
];
