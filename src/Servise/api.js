import axios from "axios";

axios.defaults.baseURL= 'https://pixabay.com/api';
const KEY= '27667565-a646e643a96ce70c2a76f248c'
export const fetchImages = async (query, currentPage) => {
    const { data } = await axios.get(
      `/?q=${query}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    );
  
    return data;
  };
