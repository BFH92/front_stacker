import { API_URL } from "../../../../Config/API_URL";
import axios from "axios";
import { registerToken } from "../../../../Helpers/API_Helper/RegisterToken";
import Cookies from "js-cookie";
import { useSnackbar } from 'notistack';

const API = axios.create({ baseURL: API_URL });

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export default class UsersAuthManager {
  
  static async sendPasswordInstructions(email) {
    const response = await API.post(
      "/user/forgotten_password",
      {
        "email":email,
      },
      config
    );
    return response
  }
  static async resetPassword(password,email,reset_token) {
    const response = await API.post(
      "/user/reset_password",
      {
        "email":email,
        "token":reset_token,
        "password":password,
      },
      config
    );
    let token = await response.headers.authorization;
    console.log(response);

    token ? registerToken(token) : Cookies.set("isLogged?", "false");
    return response;
  }
  static async register(email, password) {
    const response = await API.post(
      "/users",
      { user: { email, password } },
      config
    );
    if (response.status === 200) (this.login(email, password))
    return response;
  }
  static async logout() {
    const cookie = Cookies.get("API_Authentication_token")
    console.log(cookie);
    const authorizedConfig =  {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${cookie}`,
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
      token ? registerToken(token) : Cookies.get("API_Authentication_token");

    
    return response;
  }
}
