import Axios, * as others from 'axios';

export default others.create({
    baseURL: 'http://localhost:3001/api/',
    headers: {
        "Content-Type":"application/x-www-form-urlencoded",
    }
});