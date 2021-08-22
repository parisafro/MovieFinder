import axios from "axios";

export default axios.create({
    baseURL:"https://api.themoviedb.org/3/collection",
    params:{
        part:'collection',
        maxResults:6,
        key: '54f2f9c82b8572b36c1e37e23b18b561'
    }
    
});
