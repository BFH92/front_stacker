import { API_URL } from "../../../../Config/API_URL";
import axios from "axios";
import { registerToken } from "../../../../Helpers/API_Helper/RegisterToken";
import Cookies from "js-cookie";

const API = axios.create({ baseURL: API_URL });

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export default class CompaniesAuthManager {
  static async sendPasswordInstructions(email) {
    const response = await API.post(
      "/company/forgotten_password",
      {
        "email":email,
      },
      config
    );
    return response
  }
  static async resetPassword(password,email,reset_token) {
    const response = await API.post(
      "/company/reset_password",
      {
        "email":email,
        "token":reset_token,
        "password":password,
      },
      config
    );
    return response
  }
  static async register(email, password) {
    const response = await API.post(
      "/companies",
      { company: { email, password } },
      config
    );
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
    const response = await API.delete("/companies/sign_out", authorizedConfig);
    Cookies.remove("API_Authentication_token");
    return response;
  }

  static async login(email, password) {
    const response = await API.post(
      "/companies/sign_in",
      { company: { email, password } },
      config
    );

    let token = await response.headers.authorization;
    token ? registerToken(token) : Cookies.get("API_Authentication_token");
    return response;
  }
}
