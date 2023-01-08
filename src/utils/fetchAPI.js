import axios from 'axios';
const API_KEY = '49fe15e72cb1827b9d3c3b6cc5e1d318';

export const fetchTrending = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSearch = async query => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDetails = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCast = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchReviews = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
