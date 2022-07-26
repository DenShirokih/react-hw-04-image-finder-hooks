import axios from "axios";

axios.defaults.baseURL= 'https://pixabay.com/api';
const KEY= '28837195-6bf6c0f30b4eff17382ce9160'
export const fetchImages = async (query, currentPage) => {
    const { data } = await axios.get(
      `/?q=${query}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    );
  
    return data;
  };
