import axios from "axios";
import { API_URL } from "../../../Config/API_URL";

const API = axios.create({ baseURL: API_URL });

export default class StacksManager {
  static async getAllStacks() {
    const config = {
      headers: {
        Accept:'application/json'
    }};

    const response = await API.get(
      `/stacks`,
      config
    );
    return response;
  };
}
