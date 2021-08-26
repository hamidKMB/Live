import React from "react";
import Video from "../../../components/video/video.component";
import "./uploaded-videos.styles.scss";
import ApiRequest from "../../../ApiRequest";
import { useHistory } from "react-router-dom";
const UploadedVideos = () => {
    const history = useHistory()
    const [uploadedVideos, setUploadedVideos] = React.useState([]);
    console.log(uploadedVideos);
    React.useEffect (() => {
        
        ApiRequest("/vod/list", "GET")
          .then((res) =>
            res.status === "SUCCESS"
              ? setUploadedVideos(res.data.data)
              : res.status === "LIMIT_DEVICE" &&
                history.push("/limit_device_list")
          )
          .catch((err) => console.log(err));
    },[history, setUploadedVideos])
    
    return (
        <div className="row">
            <Video 
                image="./WhatsApp Image 2021-06-22 at 13.15.45.jpeg"
                time="22:30"
                title="لورم ایپسوم"
                cost="4500 تومان"
                dateCreated="1394/05/21"
                views="340k"
                likes="700"
                comments="20"
                bought="7"
            />
            {
                uploadedVideos.map(
                    (item) => (
                        <Video 
                            key = {item.id}
                            image= {item.image_path}
                            time = {item.duration}
                            title = {item.title}
                            dateCreated = {item.created_at}
                        />
                    )
                )
            }
        </div>
    )
}

export default UploadedVideos