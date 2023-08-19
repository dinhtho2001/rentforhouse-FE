import Cookies from "js-cookie";
const accessTokenKey = "user_access_token";
const objCookies = {
  expires: 30,
  domain: process.env.COOKIE_DOMAIN,
};
export const saveToken = (access_token) => {
  if (access_token) {
    Cookies.set(accessTokenKey, access_token, {
      ...objCookies,
    });
  } else {
    Cookies.remove(accessTokenKey, {
      ...objCookies,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
  }
};
export const getToken = () => {
  const access_token = Cookies.get(accessTokenKey);
  return access_token;
};
