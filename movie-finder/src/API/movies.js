import axios from "axios";

export default axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        part:'collection',
        maxResults:6,
        key: 'b8fa8bd9c21aa828ca2d0be64e443e62'
    }
    
});
