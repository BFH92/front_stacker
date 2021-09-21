import axios from "axios";
import { API_URL } from "../../../../Config/API_URL";
import Cookies from "js-cookie";

const API = axios.create({ baseURL: API_URL });


export default class UserInfoManager {
  static async getDetails(id) {
    const authorizedConfig = {
      headers: {
        Accept:'application/json',
        Authorization: `Bearer ${Cookies.get("API_Authentication_token")}`,
      },
    };

    const response = await API.get(
      `/users/${id}`,
      authorizedConfig
    );
    return response;
  };

  static async updateDetails(id, first_name, last_name, description, github_link){
    const authorizedConfig = {
        headers: {
          Accept:'application/json',
          Authorization: `Bearer ${Cookies.get("API_Authentication_token")}`,
        },
    };
    let data = new FormData();
    first_name !== null ? data.append('first_name', first_name): data.append('first_name', "")
    last_name !== null ? data.append('last_name', last_name): data.append('first_name', "");
    description !== null ? data.append('description', description): data.append('first_name', "")
    github_link !== null ? data.append('github_link', github_link): data.append('first_name', "")

    console.log(data)
    const response = await API.put(
        `/users/${id}`,
        data,
        authorizedConfig
    );
    return response;
  }

}