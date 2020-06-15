import axios from "axios";

export default axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        part:'collection',
        maxResults:6,
        key: '[API KEY]'
    }
});
