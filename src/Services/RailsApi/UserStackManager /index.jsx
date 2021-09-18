import axios from "axios";
import { API_URL } from "../../../Config/API_URL";
import Cookies from "js-cookie";

const API = axios.create({ baseURL: API_URL });


export default class UserStackManager {
  static async addUserStack(stack_name) {
    const authorizedConfig = {
      headers: {
        Authorization: `Bearer ${Cookies.get("API_Authentication_token")}`,
      },
    };
    let data = {}
    const response = await API.post(
      `/users_stack?stack=${stack_name}`,
      data,
      authorizedConfig
    );
    return response;
  };
  static async getStackId(stack_name) {
    const authorizedConfig = {
      headers: {
        Authorization: `Bearer ${Cookies.get("API_Authentication_token")}`,
      },
    };

    let data = {}
    const response = await API.get(
      `/specific_user_stack_id?stack=${stack_name}`,
      authorizedConfig
    );
    return response;
  };

  static async deleteUserStack(stack_name) {
    const authorizedConfig = {
      headers: {
        Authorization: `Bearer ${Cookies.get("API_Authentication_token")}`,
      },
    };

    const userStackInfo = await UserStackManager.getStackId(stack_name)
    const userStackId = userStackInfo.data.id
    console.log(userStackInfo)
    console.log(userStackId)
  
  

  
    let data = {}
    const response = await API.delete(
      `/users_stack/${userStackId}`,
      data,
      authorizedConfig
    );

    return response;
  };

}