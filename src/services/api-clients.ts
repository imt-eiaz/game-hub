import axios from "axios";

 export default axios.create({
    params : {
        baseURL : 'https://api.rawg.io/api',
        key : 'a8eb4728a6a4441eb3e8316d7a32f1fb'

    }
})