import { ReactComponent as DashboardLogo } from "./Dashboard_Menu/1.dashboard.svg";
import { ReactComponent as UserLogo } from "./Dashboard_Menu/2.user.svg";
import { ReactComponent as LiveLogo } from "./Dashboard_Menu/3.live.svg";
import { ReactComponent as CameraLogo } from "./Dashboard_Menu/4.camera_video.svg";
import { ReactComponent as BarLogo } from "./Dashboard_Menu/5.bar_chart.svg";
import { ReactComponent as CoinLogo } from "./Dashboard_Menu/6.coin.svg";
import { ReactComponent as TicketLogo } from "./Dashboard_Menu/7.ticket.svg";
import { ReactComponent as DiscountLogo } from "./Dashboard_Menu/8.discount.svg";
import { ReactComponent as FollowersLogo } from "./Dashboard_Menu/9.followers.svg";
import { ReactComponent as SupportLogo } from "./Dashboard_Menu/10.support.svg";
import { ReactComponent as LogoutLogo } from "./Dashboard_Menu/11.logout.svg";


export const menuItemsData = [
  {
    title: "داشبورد",
    logo: <DashboardLogo className="dashboard-icon"/>,
    routeName: "/",
  },
  {
    title: "حساب کاربری",
    logo: <UserLogo className="dashboard-icon"/>,
    routeName: "/account",
  },
  {
    title: "رویدادها",
    logo: <LiveLogo className="dashboard-icon"/>,
    routeName: "/events",
  },
  {
    title: "ویدیوها",
    logo: <CameraLogo className="dashboard-icon"/>,
    routeName: "/videos",
  },
  {
    title: "آمار بازدید",
    logo: <BarLogo className="dashboard-icon"/>,
    routeName: "/views",
  },
  {
    title: "مالی",
    logo: <CoinLogo className="dashboard-icon"/>,
    routeName: "/finance",
  },
  {
    title: "بلیط ها",
    logo: <TicketLogo className="dashboard-icon"/>,
    routeName: "/tickets",
  },
  {
    title: "تخفیف ها",
    logo: <DiscountLogo className="dashboard-icon"/>,
    routeName: "/discounts",
  },
  {
    title: "دنبال کنندگان/دنبال شدگان",
    logo: <FollowersLogo className="dashboard-icon"/>,
    routeName: "/follow",
  },
  {
    title: "پشتیبانی",
    logo: <SupportLogo className="dashboard-icon"/>,
    routeName: "/backup",
  },
  {
    title: "خروج از حساب کاربری",
    logo: <LogoutLogo className="dashboard-icon"/>,
    routeName: "/",
  },
];