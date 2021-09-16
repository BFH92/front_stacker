import axios from "axios";
import { API_URL } from "../../../Config/API_URL";
import Cookies from "js-cookie";

const API = axios.create({ baseURL: API_URL });


export default class UserStackManager {
  static async addUserStack(stack_name) {
    const authorizedConfig = {
      headers: {
        Accept:'application/json',
        Authorization: `Bearer ${Cookies.get("API_Authentication_token")}`,
      },
    };
    let data = new FormData();
    data.append('stack', stack_name);
  
    const response = await API.post(
      `/users_stack/`,
      data,
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
    data.append('first_name', first_name);
    data.append('last_name', last_name);
    data.append('description', description);
    data.append('github_link', github_link);

    console.log(data)
    const response = await API.put(
        `/users/${id}`,
        data,
        authorizedConfig
    );
    return response;
  }

}