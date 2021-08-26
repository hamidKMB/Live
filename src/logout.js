import ApiRequest from "./ApiRequest";
import Cookies from "js-cookie";

const logOut = () => {
  ApiRequest("/auth/logout", "post")
    .then(Cookies.remove("token"))
    .then(window.location.href = "/login")
    .catch((err) => alert(err));
};

export default logOut