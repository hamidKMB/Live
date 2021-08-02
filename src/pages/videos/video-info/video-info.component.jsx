import React from "react"

import { TextField } from "@material-ui/core"

import {ReactComponent as BinLogo } from "./bin.svg";
import {ReactComponent as UploadLogo } from "./upload.svg";
import {ReactComponent as PictureLogo } from "./picture.svg";

import "./video-info.styles.scss";

const VideoInfo = () => {
    return (
        <div className="video-info admin-pages-layout">
            <div className="input">
                <TextField
                id="outlined-basic"
                label="عنوان ویدیو"
                variant="outlined"
                className="text-field"
                />
                <TextField
                id="outlined-basic"
                label="توضیحات ویدیو"
                variant="outlined"
                className="text-field"
                />
                <TextField
                id="outlined-basic"
                label="دسته بندی"
                variant="outlined"
                className="text-field"
                />
                <TextField
                id="outlined-basic"
                label="دوره"
                variant="outlined"
                className="text-field"
                />
                <TextField
                id="outlined-basic"
                label="هزینه ویدیو"
                variant="outlined"
                className="text-field"
                />
                <TextField
                id="outlined-basic"
                label="انتخاب تخفیف"
                variant="outlined"
                className="text-field"
                />
            </div>
            <div className="status-and-others">
            <div className="top">
                <span className="status"> status </span>
                <div className="background-image-of-video">
                    <img src="#" alt=""/>
                </div>
                <span className="is-ready-to-upload"> status </span>
                <span>تصویری برای کاور ویدیو انتخاب کنید</span>
                <div className="row">
                    <div className="col-6">
                        <div className="button-outline font">
                            بارگذاری تصویر<UploadLogo/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="button-outline font">
                            انتخاب تصویر از ویدیو<PictureLogo/>
                        </div>
                    </div>
                </div>
                <div className="switch-parts">
                    <div className="part">
                        <span>ثبت نظر (پسندیدن/نپسندیدن)</span>
                        <span>Switch</span>
                    </div>
                    <div className="part">
                        <span>ارسال دیدگاه</span>
                        <span>Switch</span>
                    </div>
                    <div className="part">
                        <span>قابل دانلود</span>
                        <span>Switch</span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <span>بعد از تایید ادمین ویدیو شما منتشر میشود</span>
                <div className="button publish-video">
                    انتشار ویدیو
                </div>
            </div>
            </div>
        </div>
    )
}

export default VideoInfo;