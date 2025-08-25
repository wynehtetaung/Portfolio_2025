import LOGO from "../icons/Pofomin....svg";
import DashboardIcon from "../icons/dashboard.svg";
import HomeIcon from "../icons/Home.svg";
import MyWorkIcon from "../icons/Display.svg";
import AboutIcon from "../icons/User Tag.svg";
import ContactIcon from "../icons/Call.svg";
import DashboardActiveIcon from "../icons/dashboard_active.svg";
import HomeActiveIcon from "../icons/home_active.svg";
import MyWorkActiveIcon from "../icons/myWork_active.svg";
import AboutActiveIcon from "../icons/about_active.svg";
import ContactActiveIcon from "../icons/contact_active.svg";

export const navData = {
  LOGO: LOGO,
  menu: [
    {
      id: 1,
      icon: DashboardIcon,
      activeIcon: DashboardActiveIcon,
      title: "Dashboard",
      route: `/${import.meta.env.VITE_KEY}/dashboard`,
    },
    {
      id: 2,
      icon: HomeIcon,
      activeIcon: HomeActiveIcon,
      title: "Home",
      route: `/${import.meta.env.VITE_KEY}/dashboard/home`,
    },
    {
      id: 3,
      icon: MyWorkIcon,
      activeIcon: MyWorkActiveIcon,
      title: "My works",
      route: `/${import.meta.env.VITE_KEY}/dashboard/my-works`,
    },
    {
      id: 4,
      icon: AboutIcon,
      activeIcon: AboutActiveIcon,
      title: "About",
      route: `/${import.meta.env.VITE_KEY}/dashboard/about`,
    },
    {
      id: 5,
      icon: ContactIcon,
      activeIcon: ContactActiveIcon,
      title: "Contact",
      route: `/${import.meta.env.VITE_KEY}/dashboard/contact`,
    },
  ],
  version: "Version 1.0",
  date: "1.3.2025",
};
