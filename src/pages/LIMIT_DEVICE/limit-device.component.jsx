import React from "react";
import ApiRequest from "../../ApiRequest";
import "./limit-device.styles.scss";
import { useHistory } from "react-router";

const LimitDevice = () => {
    const history = useHistory();
    const [deviceList , setDeviceList] = React.useState([])
    const [message, setMessage] = React.useState("")
    const [counter, setCounter] = React.useState(1)
    console.log(deviceList);
    console.log(counter);
    React.useEffect ( () => {
        ApiRequest("/user/limit_device_list", "GET")
            .then((res) => {
                setMessage(res.message)
                setDeviceList(res.data);
            })
            .catch((err) => console.log(err)) 
    }, [counter])

    const terminateToken = (id) => {
        const exactUrl = `/auth/terminate_token/${id}`
        ApiRequest(exactUrl, "post") 
            .then((res) => {
                if (deviceList.length <= 4) {
                    history.push("/")
                }
                setCounter(counter+1)
            })
            .catch((err) => console.log(err))
    }

    return(
        <div className="container my-5">
            <h1 className="text-primary mb-5">
                {message}
            </h1>
            {
                deviceList.map((item) =>  {
                    return (
                        <div key={item.id} id={item.id} className="d-flex flex-row justify-content-between p-2 my-3">
                            <span>مرورگر: <span className="fw-bold">{item.browser}</span></span>
                            <span>ایجاد شده در تاریخ : <span className="fw-bold">{item.created_at}</span></span>
                            <span>آدرس آی پی : <span className="fw-bold">{item.ip}</span></span>
                            <span className="btn btn-danger" onClick={() => terminateToken(item.id)}>
                                خروج
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LimitDevice