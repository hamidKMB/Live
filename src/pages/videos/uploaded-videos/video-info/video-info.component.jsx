import React from "react"

import TextInput from "../../../../components/text-input/text-input.component"

import {ReactComponent as BinLogo } from "./bin.svg";
import {ReactComponent as UploadLogo } from "./upload.svg";
import {ReactComponent as PictureLogo } from "./picture.svg";
import Switch from '@material-ui/core/Switch';
import "./video-info.styles.scss";

const VideoInfo = (props) => {
    const [state, setState] = React.useState({
        checkedA: false ,
        checkedB: false ,
        checkedC: false
    });

    const handleChange = (event) => {
     setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div className="video-info admin-pages-layout">
            <div className="input">
                <TextInput
                label="عنوان ویدیو"
                />
                <TextInput
                label="توضیحات ویدیو"
                />
                <TextInput
                label="دسته بندی"
                />
                <TextInput
                label="دوره"
                />
                <TextInput
                label="هزینه ویدیو"
                />
                <TextInput
                label="انتخاب تخفیف"
                />
            </div>
            <div className="status-and-others">
            <div className="top">
                <span className="status"> {props.stateOfUpload} </span>
                <div className="background-image-of-video">
                    <BinLogo className = "bin-logo-upload"/>
                    <img src="#" alt="ads"/>
                    <span className="progress-bar" style={{width:`${props.progress}%`}}/>
                </div>
                <span className="mb-3"> status </span>
                <span>تصویری برای کاور ویدیو انتخاب کنید</span>
                <div className="row mb-3 mt-3">
                    <div className="col-lg-6 col-md-6 col-sm-12 upload-status">
                        <div className="button-outline font">
                            بارگذاری تصویر<UploadLogo/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 upload-status">
                        <div className="button-outline font">
                            انتخاب تصویر از ویدیو<PictureLogo/>
                        </div>
                    </div>
                </div>
                <div className="switch-parts">
                    <div className="part">
                        <span>ثبت نظر (پسندیدن/نپسندیدن)</span>
                        <Switch
                            checked={state.checkedA}
                            onChange={handleChange}
                            color="primary"
                            name="checkedA"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </div>
                    <div className="part">
                        <span>ارسال دیدگاه</span>
                        <Switch
                            checked={state.checkedB}
                            onChange={handleChange}
                            color="primary"
                            name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </div>
                    <div className="part">
                        <span>قابل دانلود</span>
                        <Switch
                            checked={state.checkedC}
                            onChange={handleChange}
                            color="primary"
                            name="checkedC"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </div>
                </div>
            </div>
            <div className="bottom">
                <span className="mb-2">بعد از تایید ادمین ویدیو شما منتشر میشود</span>
                <div className="button publish-video">
                    انتشار ویدیو
                </div>
            </div>
            </div>
        </div>
    )
}

export default VideoInfo;
