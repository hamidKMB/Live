

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
        .then((res) => (
            res.status === "FAILED" && 
                    (
                        res.message === "token_invalid" ||
                        res.message === "token_absent" ||
                        res.message === "token_blacklist" ||
                        res.message === "user_not_found"
                        ) && <Redirect to="/login"/>
                )
            );

    } catch (error) {
        console.error(error);
        console.log(error);
    }
}

export default ApiRequest;
