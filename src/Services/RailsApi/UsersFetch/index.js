import { API_URL } from "../../../Config/API_URL";
import axios from "axios";
import { registerToken } from "../../../Helpers/API_Helper/RegisterToken";
import Cookies from "js-cookie";
const API = axios.create({ baseURL: API_URL });

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export default class UsersAPIManager {
  static async register(email, password) {
    const response = await API.post(
      "/users",
      { user: { email, password } },
      config
    );

    let token = await response.headers.authorization;
    console.log(response);

    token ? registerToken(token) : Cookies.set("isLogged?", "false");
    this.login(email, password);
    return response;
  }
  static async logout() {
    const authorizedConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("API_Authentication_token")}`,
      },
    };
    const response = await API.delete("/users/sign_out", authorizedConfig);
    console.log(response);
    Cookies.remove("API_Authentication_token");
    return response;
  }

  static async login(email, password) {
    const response = await API.post(
      "/users/sign_in",
      { user: { email, password } },
      config
    );

    let token = await response.headers.authorization;
    console.log(response);
    token ? registerToken(token) : Cookies.get("API_Authentication_token");
    return response;
  }
}
