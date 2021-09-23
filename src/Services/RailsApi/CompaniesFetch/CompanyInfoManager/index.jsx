import axios from "axios";
import { API_URL } from "../../../../Config/API_URL";
import Cookies from "js-cookie";

const API = axios.create({ baseURL: API_URL });


export default class CompanyInfoManager {
  static async getAllCompanies(url, shorListIndex) {
    const response = await API.get(
      `${url}&short_list=${shorListIndex}`
    );
    return response;
  };
  static async getDetails(id) {
    const authorizedConfig = {
      headers: {
        Accept:'application/json',
        Authorization: `Bearer ${Cookies.get("API_Authentication_token")}`,
      },
    };

    const response = await API.get(
      `/companies/${id}`,
      authorizedConfig
    );
    return response;
  };

  static async updateDetails(
    id, 
    name, 
    description, 
    github_link, 
    staff_size, 
    is_it_recruiting,
    website_link
    //company_category_id, 
    //, stack
    ){
    const authorizedConfig = {
        headers: {
          Accept:'application/json',
          Authorization: `Bearer ${Cookies.get("API_Authentication_token")}`,
        },
    };
    let data = new FormData();
    data.append('name', name);
    data.append('description', description);
    data.append('github_link', github_link);
    data.append('staff_size', staff_size);
    data.append('is_it_recruiting', is_it_recruiting);
    data.append('website_link', website_link);
    //data.append('company_category_id', company_category_id);
    //data.append('stack', stack);

    
    const response = await API.put(
        `/companies/${id}`,
        data,
        authorizedConfig
    );
    return response;
  }

}