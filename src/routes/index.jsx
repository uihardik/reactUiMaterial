import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";

var indexRoutes = [
  { path: "/landing", name: "LandingPage", component: LandingPage },
  { path: "/profile", name: "ProfilePage", component: ProfilePage },
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/all", name: "all", component: Components },
  { path: "/", name: "Components", component: LandingPage }
];

export default indexRoutes;
