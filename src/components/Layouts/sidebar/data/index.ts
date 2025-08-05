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
        title: "Paid Playlsit Upload",
        url: "/home/paid-videos",
        icon: Icons.User,
        items: [],
      },
      {
        title: "Free Playlist Upload",
        url: "/home/free-videos",
        icon: Icons.User,
        items: [],
      },
    ],
  },
];
