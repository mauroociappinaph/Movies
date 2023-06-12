import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN = import.meta.env.VITE_APP_TOKEN;

const headers = {
  Authorization: `Bearer ${TOKEN}`,
}

export const getMovies = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params
    });

    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
