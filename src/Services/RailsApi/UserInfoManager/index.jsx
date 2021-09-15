import axios from "axios";
import { API_URL } from "../../../Config/API_URL";
import Cookies from "js-cookie";

const API = axios.create({ baseURL: API_URL });


export default class UserInfoManager {
  static async getDetails(id) {
    const authorizedConfig = {
      headers: {
        Accept:'application/json',
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };

    const response = await API.get(
      `/users/${id}`,
      authorizedConfig
    );
    return response;
  };
}