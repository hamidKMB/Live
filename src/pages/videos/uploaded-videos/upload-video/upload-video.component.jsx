import React from "react";

//React-Router-Dom
import {Link} from "react-router-dom"

//STYLES & Logo
import {ReactComponent as DragAndDrop} from "./drag-drop.svg"

import Dnd from "../../../../components/Drag-and-Drop/DND.component";



const UploadVideo = (props) => {
    return(
            <Dnd>
                <DragAndDrop/>
                <h5>بارگذاری ویدیو</h5>
                <p>برای بارگذاری ویدیو یک فایل را بکشید و رها کنید<br/>و یا فایل را انتخاب کنید</p>
                <div className="row">
                    <div className="col-12 center">
                        <div className="button choose-video"> انتخاب ویدیو </div>
                    </div>
                    <div className="col-6">
                        <Link to="/videos/uploaded">
                            <div className="button-outline">بازگشت به سایت</div>
                        </Link>
                    </div>
                    <div className="col-6">
                        <Link to="/videos/video-info">
                            <div className="button-gray-fill">بعدا بارگذاری میکنم</div>
                        </Link>
                    </div>
                </div>
            </Dnd>
        
    )
}

export default UploadVideo;
