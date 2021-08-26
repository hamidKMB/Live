

import axios from "axios";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";

let base_url = 'https://api.ideamooz.com/api/v1';

const ApiRequest = async (url, method, data = {}) => {
    try {
        console.log(Cookies.get('token'))
        return await axios.request({
            url: base_url+url,
            method: method,
            data: data,
            headers: {
                Authorization: Cookies.get('token')
            }
        })
        .then((res) =>res.data)
                // {
                // if (res.data.status === "SUCCESS") {
                //     return res.data.data
                // } else if (res.data.status === "FAILED") {
                //     if (res.data.message === "token_invalid" ||
                //             res.data.message === "token_absent" ||
                //             res.data.message === "token_blacklist" ||
                //             res.data.message === "user_not_found") {
                //                 <Redirect to="/login"/>
                //             }
                //         }
                //     }
    } catch (error) {
        console.error(error);
        console.log(error);
    }
}

export default ApiRequest;
