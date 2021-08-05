import React from "react"

import TextInput from "../../../../components/text-input/text-input.component"

import {ReactComponent as BinLogo } from "./bin.svg";
import {ReactComponent as UploadLogo } from "./upload.svg";
import {ReactComponent as PictureLogo } from "./picture.svg";

import "./video-info.styles.scss";

const VideoInfo = () => {
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
                <span className="status"> status </span>
                <div className="background-image-of-video">
                    <img src="#" alt="ads"/>
                    <span className="progress-bar"/>
                </div>
                <span className="is-ready-to-upload"> status </span>
                <span>تصویری برای کاور ویدیو انتخاب کنید</span>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="button-outline font">
                            بارگذاری تصویر<UploadLogo/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
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