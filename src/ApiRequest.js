

import axios from "axios";

let base_url = 'https://api.ideamooz.com/api/v1';

const ApiRequest = async (url, method, data = {}) => {
    try {
        console.log(localStorage.getItem("token"))
        return await axios.request({
            url: base_url+url,
            method: method,
            data: data,
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(res => res.data);

    } catch (error) {
        console.error(error);
    }
}

export default ApiRequest;
