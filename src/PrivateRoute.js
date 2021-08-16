import React from "react";
import {Redirect, Route} from "react-router-dom";
import Cookies from "js-cookie";


export default function PrivateRoute(props) {

    let token = Cookies.get('token') || false;

    return token && token !== "false" ? <Route  {...props} /> : <Redirect to='/login'/>;

}

