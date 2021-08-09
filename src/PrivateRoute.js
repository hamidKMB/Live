import React from "react";
import {Redirect, Route} from "react-router-dom";




export default function PrivateRoute(props) {


let token = localStorage.getItem('token') || false;

    return token ?  <Route  {...props} /> :<Redirect to='/login' />  ;

}

