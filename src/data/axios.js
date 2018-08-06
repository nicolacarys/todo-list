import axios from "axios";

export default axios.create({
    // update with your username 
    baseURL: "http://api.dev/api",

    // update with your key
    params: {"key": ""},

    headers: {"Accept": "application/json"},
});
