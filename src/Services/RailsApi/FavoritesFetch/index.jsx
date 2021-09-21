import axios from "axios";
import { API_URL } from "../../../Config/API_URL";
import Cookies from "js-cookie";

const API = axios.create({ baseURL: API_URL });


export default class FavoritesManager {
  static async createFavorite(id) {
    const authorizedConfig = {
      headers: {
        Authorization: `Bearer ${Cookies.get("API_Authentication_token")}`,
      },
    };
    let data = {}
    const response = await API.post(
      `/favorites_companies?company_id=${id}`,
      data,
      authorizedConfig
    );
    console.log(response)
    return response;
  };

  static async getId(company_id) {
    const authorizedConfig = {
      headers: {
        Authorization: `Bearer ${Cookies.get("API_Authentication_token")}`,
      },
    };
    console.log(authorizedConfig)

    const response = await API.get(
      `/favorite_id?company_id=${company_id}`,
      authorizedConfig
    );
    console.log(response)
    console.log("==")
    return response;
  };

  static async deleteFavorite(company_id) {
    const authorizedConfig = {
      headers: {
        Authorization: `Bearer ${Cookies.get("API_Authentication_token")}`,
      },
    };

    const FavoritesInfo = await FavoritesManager.getId(company_id)
    console.log(FavoritesInfo)
    const FavoriteId = FavoritesInfo.data.id


    const response = await API.delete(
      `/favorites_companies/${FavoriteId}`,
      authorizedConfig
    );
    return response;
  };
}