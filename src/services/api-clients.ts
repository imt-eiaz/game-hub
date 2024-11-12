import axios from "axios";

 export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {        
        key : 'a8eb4728a6a4441eb3e8316d7a32f1fb'
    }
})