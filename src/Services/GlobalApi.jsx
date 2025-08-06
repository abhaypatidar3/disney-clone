

// const url = 'https://api.themoviedb.org/3/';

// const api_key = '8d49a5c008f5f972ec4e7699118bf814'
// const getTrendingVideos = axios.get(this.url + "")

// fetch(url, getTrendingVideos)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));



// import axios from 'axios';
import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=8d49a5c008f5f972ec4e7699118bf814';
const api_key = '8d49a5c008f5f972ec4e7699118bf814';

const getTrendingVideos = () => {
  return axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
};
const getMovieByGenreId = (id) => {
  return axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);
};

export default {
  getTrendingVideos,
  getMovieByGenreId
};
