import Cookies from 'js-cookie'

export const registerToken = (token) => {
  token = token.replace(/Bearer /g, "");
  Cookies.set("API_Authentication_token", token);
};


