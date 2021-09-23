import axios from "axios";
import { API_URL } from "../../../Config/API_URL";
import Cookies from "js-cookie";

const API = axios.create({ baseURL: API_URL });


export default class ViewerStackManager {
  static async addViewerStack(stack_name, viewer) {
    const authorizedConfig = {
      headers: {
        Authorization: `Bearer ${Cookies.get("API_Authentication_token")}`,
      },
    };
    let data = {}
    const response = await API.post(
      viewer === "company"?`/companies_stack?stack=${stack_name}`:`/users_stack?stack=${stack_name}`,
      data,
      authorizedConfig
    );
    return response;
  };
  static async getStackId(stack_name, viewer) {
    const authorizedConfig = {
      headers: {
        Authorization: `Bearer ${Cookies.get("API_Authentication_token")}`,
      },
    };

    const response = await API.get(
      viewer === "company"?`/specific_company_stack_id?stack=${stack_name}`:`/specific_user_stack_id?stack=${stack_name}`,
      authorizedConfig
    );
    return response;
  };

  static async deleteViewerStack(stack_name, viewer) {
    const authorizedConfig = {
      headers: {
        Authorization: `Bearer ${Cookies.get("API_Authentication_token")}`,
      },
    };

    const userStackInfo = await ViewerStackManager.getStackId(stack_name, viewer)
    const StackId = userStackInfo.data.id
    
    let data = {}
    const response = await API.delete(
      viewer === "company"?`/companies_stack/${StackId}`:`/users_stack/${StackId}`,
      data,
      authorizedConfig
    );

    return response;
  };

}