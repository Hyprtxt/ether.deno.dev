import {
  deleteCookie,
  getCookies,
  setCookie,
} from "https://deno.land/std@0.93.0/http/cookie.ts";
import { COOKIE_DOMAIN } from "./config.ts";

const COOKIE_SETTINGS = {
  name: "token",
  httpOnly: false,
  secure: true,
  maxAge: 30 * 24 * 60 * 60,
  path: "/",
  domain: COOKIE_DOMAIN,
};

const getToken = (r: Request) => {
  const cookies = getCookies(r);
  let token = "";
  if (
    cookies[COOKIE_SETTINGS.name] !== undefined &&
    cookies[COOKIE_SETTINGS.name] !== ""
  ) {
    token = cookies[COOKIE_SETTINGS.name];
  }
  return token;
};

export { COOKIE_SETTINGS, deleteCookie, getCookies, setCookie, getToken };
