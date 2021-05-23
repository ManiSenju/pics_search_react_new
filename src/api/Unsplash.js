import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com" ,
    headers:{
        Authorization: "Client-ID k49B0DEiQ8Gmqu-CdEqO5qgelE2z6qeXFyRkqLG6PbQ"
    }


});