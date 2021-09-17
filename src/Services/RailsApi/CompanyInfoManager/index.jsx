import axios from "axios";
import { API_URL } from "../../../Config/API_URL";
import Cookies from "js-cookie";

const API = axios.create({ baseURL: API_URL });


export default class CompanyInfoManager {
  static async getDetails(id) {
    const authorizedConfig = {
      headers: {
        Accept:'application/json',
        Authorization: `Bearer ${Cookies.get("token")}`,
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
          Authorization: `Bearer ${Cookies.get("token")}`,
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

    console.log(data)
    const response = await API.put(
        `/companies/${id}`,
        data,
        authorizedConfig
    );
    return response;
  }

}