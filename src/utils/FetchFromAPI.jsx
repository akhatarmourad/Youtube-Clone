import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    console.log(import.meta.env.VITE_REACT_APP_RAPID_API_KEY);

    try {
        const response = await axios.get(`${BASE_URL}/${url}`, options);
        return response.data;
    }
    catch(error) {
        console.log(error);
        return error.message;
    }
}

