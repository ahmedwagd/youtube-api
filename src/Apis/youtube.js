import axios from 'axios';

const KEY = 'AIzaSyBnd0QxUbwNKS7x2HWqkq7wEwvCysqcuKA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 4,
    key: KEY
  }
});