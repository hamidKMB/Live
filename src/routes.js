 
 //PAGES
import Sign from "./pages/sign-in-up/sign-page.component";
import Dashboard from "./pages/dashboard/dashboard.component";
import Account from "./pages/account/account.component";
import Videos from "./pages/videos/videos.component";
import Events from "./pages/events/events.component";
import ChartPage from "./pages/charts/chart-page.component";
import Finance from "./pages/finance/finance.component";
import Tickets from "./pages/tickets/tickets.component";
import Discounts from "./pages/discounts/discounts.component";
import Followers from "./pages/followers/followers.component";
import VideoInfo from "./pages/videos/uploaded-videos/video-info/video-info.component";
import BackUp from "./pages/back-up/back-up.component";
import UploadVideo from "./pages/videos/uploaded-videos/upload-video/upload-video.component";
import NotFound from "./pages/sign-in-up/not-found.component";
import UploadLive from "./pages/events/Upload-Live/Upload-Live.component";
import ChatPage from "./pages/chat-page/chat-page.component";
import UploadCourse from "./pages/videos/courses/upload-course/upload-course.component";
import CourseSections from "./pages/videos/courses/course-sections/course-sections.component";
import CreateNewTicket from "./pages/tickets/create-new-ticket.component";
import CreateNewDiscount from "./pages/discounts/create-new-discount";

const routes = [
  {
    exact: true,
    private: false,
    path: "/login",
    component: Sign,
  },
  {
    exact: true,
    private: true,
    path: "/",
    component: Dashboard,
  },
  {
    exact: true,
    private: true,
    path: "/account/:tab",
    component: Account,
  },
  {
    exact: false,
    private: true,
    path: "/videos/video-info",
    component: VideoInfo,
  },
  {
    private: true,
    exact: true,
    path: "/videos/upload-video",
    component: UploadVideo,
  },
  {
    private: true,
    exact: true,
    path: "/videos/courses/upload-course",
    component: UploadCourse,
  },
  {
    private: true,
    exact: true,
    path: "/videos/courses/:tab",
    component: CourseSections,
  },
  {
    private: true,
    exact: true,
    path: "/videos/:tab",
    component: Videos,
  },
  {
    private: true,
    exact: true,
    path: "/events",
    component: Events,
  },
  {
    private: true,
    exact: true,
    path: "/events/upload-live",
    component: UploadLive,
  },
  {
    private: true,
    exact: true,
    path: "/events/chat/:tab",
    component: ChatPage,
  },
  {
    private: true,
    exact: true,
    path: "/charts",
    component: ChartPage,
  },
  {
    private: true,
    exact: true,
    path: "/finance/:tab",
    component: Finance,
  },
  {
    private: true,
    exact: true,
    path: "/tickets/create-new-ticket",
    component: CreateNewTicket,
  },
  {
    private: true,
    exact: true,
    path: "/tickets",
    component: Tickets,
  },
  {
    private: true,
    exact: true,
    path: "/discounts/create-new-discount",
    component: CreateNewDiscount,
  },
  {
    private: true,
    exact: true,
    path: "/discounts",
    component: Discounts,
  },
  {
    private: true,
    exact: true,
    path: "/follow/:tab",
    component: Followers,
  },
  {
    private: true,
    exact: true,
    path: "/backup",
    component: BackUp,
  },
  {
    private: false,
    exact: false,
    component: NotFound,
  },
];


export default routes;
