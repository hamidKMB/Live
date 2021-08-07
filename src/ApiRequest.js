

import axios from "axios";

let base_url = 'https://api.ideamooz.com/api/v1';

const ApiRequest = async (url, method, data = {}) => {
    try {
        return await axios.request({
            url: base_url+url,
            method: method,
            data: data,
            headers: {
                Authorization: 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuaWRlYW1vb3ouY29tXC9hcGlcL3YxXC9hdXRoXC9sb2dpbl93aXRoX3Bhc3N3b3JkIiwiaWF0IjoxNjI3OTY3NTI4LCJleHAiOjM3NzAyMDQxNTQ4LCJuYmYiOjE2Mjc5Njc1MjgsImp0aSI6IlJYNE5NcDlVd0JhTDNDbE4iLCJzdWIiOjMsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.8duvosGvkL_9ucX5zEGqGUxcwFg-5cru4pTW-RGMO4o'
            }
        })
            .then(res => res.data);

    } catch (error) {
        console.error(error);
    }
}

export default ApiRequest;
