import axios from "axios";
import { API_URL } from "../../../Config/API_URL";
import Cookies from "js-cookie";

const API = axios.create({ baseURL: API_URL });

export default class SavedSearchesManager {
  static async getSavedSearchesOfCurrentUser() {
    const authorized_config = {
      headers: {
        Accept:'application/json',
        Authorization: `Bearer ${Cookies.get("API_Authentication_token")}`,
    }};
    const response = await API.get(
      `/saved_searches`,
      authorized_config
    );
    return response;
  };

  static async saveSearch(stacks, staff_size, company_category, category_name) {
    const authorized_config = {
      headers: {
        Accept:'application/json',
        Authorization: `Bearer ${Cookies.get("API_Authentication_token")}`,
    }};
    
    let data = new FormData();
    data.append('staff_size', staff_size);
    data.append('company_category', company_category);
    data.append('category_name', category_name);
    data.append('stacks', stacks);
  
    const response = await API.post(
      `/saved_searches`,
      data,
      authorized_config
    );
    return response;
  };

  static async deleteSearch(savedSearchId) {
    const authorized_config = {
      headers: {
        Accept:'application/json',
        Authorization: `Bearer ${Cookies.get("API_Authentication_token")}`,
    }};

    const response = await API.delete(
      `/saved_searches/${savedSearchId}`,
      authorized_config
    );
    return response;
  };

}
