import React from "react"

import TextInput from "../../../../components/text-input/text-input.component"

import {ReactComponent as BinLogo } from "./bin.svg";
import {ReactComponent as UploadLogo } from "./upload.svg";
import {ReactComponent as PictureLogo } from "./picture.svg";
import {ReactComponent as Design1 } from "./design-modal1.svg";
import {ReactComponent as Design2 } from "./design-modal2.svg";
import {ReactComponent as CaptureVideo } from "./capture-video.svg";
import Switch from '@material-ui/core/Switch';
import "./video-info.styles.scss";
import * as tus from "tus-js-client";
import Modal from "../../../../components/modal/modal.component";

const VideoInfo = (props) => {
    const [uploadedVideo, setUploadedVideo] = React.useState(null)

    React.useEffect(() => {
        props.video && (props.progress === "100.00") && setUploadedVideo(props.video)
    },[props.video, props.progress])

    
    let w, h, ratio, canvas, context, video;

    const metaData = (event) => {
        video= event.target
        canvas= document.querySelector("canvas");
        ratio = parseInt(event.target.attributes[5].nodeValue) / parseInt(event.target.attributes[6].nodeValue);
        console.log(ratio);
        w = parseInt(event.target.attributes[5].nodeValue) - 100;
        console.log(w);
        h = parseInt(w / ratio, 10);
        console.log(h);
        canvas.width = w;
        console.log(canvas.width);
        canvas.height = h;		
        console.log(canvas.height);	
    }
    
    const snap = () => {    
        console.log(w, h);
        console.log(video);
        context = canvas.getContext("2d")
        context.fillRect(0, 0, w, h);
        context.drawImage(video, 0, 0, w, h);
    }
    
	
    const [state, setState] = React.useState({
        checkedA: false ,
        checkedB: false ,
        checkedC: false
    });

    const handleChange = (event) => {
     setState({ ...state, [event.target.name]: event.target.checked });
    };

    const [file, setFile] = React.useState(null);
    const uploadTus = (my_file) => {
        // Get the selected file from the input element
        // Create a new tus upload
        let upload = new tus.Upload(my_file, {
            endpoint: "https://storage.livenegah.com:1443/tus/xx?token=9721",
            retryDelays: [0, 3000, 5000, 10000, 20000],
            // metadata: {
            //     filename: file.name,
            //     filetype: file.type
            // },
            onError: function (error) {
                alert("upload Error" + error)
            },
            onProgress: function (bytesUploaded, bytesTotal) {
                var percentage = (bytesUploaded / bytesTotal * 100).toFixed(2)
                console.log(bytesUploaded, bytesTotal, percentage + "%")
            },
            onSuccess: function () {
                setFile(URL.createObjectURL(my_file))
            }
        })
        // Check if there are any previous uploads to continue.
        upload.findPreviousUploads().then(function (previousUploads) {
            // Found previous uploads so we select the first one.
            // if (previousUploads.length) {
            //     upload.resumeFromPreviousUpload(previousUploads[0])
            // }

            // Start the upload
            upload.start()
        })
    }


    //functions for Drag And Drop and Choose Picture 
    const onChangeHandler = (e) => {
        let my_file = e.target.files[0];
        uploadTus(my_file)
    }


    const [isModalShow, setIsModalShow] = React.useState(false);


    return (
        <div className="video-info admin-pages-layout">
            <div className="input">
                <TextInput label="عنوان ویدیو" input />
                <TextInput label="توضیحات ویدیو" textArea maxLength="500"/>
                <TextInput label="دسته بندی" dropDown dropItems={[' ', 'هنری', 'آموزشی']} />
                <TextInput label="دوره" dropDown dropItems={[' ']} />
                <TextInput label="هزینه ویدیو" input />
                <TextInput label="انتخاب تخفیف" dropDown dropItems={[' ']} />
            </div>
            <div className="status-and-others mx-xl-auto me-lg-auto pe-2">
            <div className="top">
                <span className="status"> {props.stateOfUpload} </span>
                <div 
                className="background-image-of-video" 
                >   
                    {
                        props.video&&
                        <video 
                        preload="auto" 
                        src={`${URL.createObjectURL(props.video)}`} 
                        poster={file && file} 
                        type="video/mp4"
                        />
                    }
                    {
                        (file || props.progress === "100.00") &&
                        <BinLogo 
                            className = "bin-logo-upload"
                            onClick={file ? () => setFile(null) : null}
                        />
                    }
                    <span className="progress-bar" style={{width:`${props.progress}%`}}/>
                </div>
                <span className="mb-3"> status </span>
                <span>تصویری برای کاور ویدیو انتخاب کنید</span>
                <div className="row d-flex flex-column flex-lg-row mt-3 mb-3 me-1 ms-1 align-items-md-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 upload-status mb-lg-0 mb-2">
                        <label htmlFor="choose-picture" className="button-outline font">
                            بارگذاری تصویر<UploadLogo className="ms-1"/>
                            <input type="file" id="choose-picture" className="d-none" onChange={onChangeHandler}/>
                        </label>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 upload-status">
                        <div className="button-outline font" onClick={() => setIsModalShow(true)}>
                            انتخاب تصویر از ویدیو<PictureLogo className="ms-1"/>
                        </div>
                    </div>
                </div>
                <div className="switch-parts w-100 px-1 ">
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
            <div className="bottom d-flex d-flex flex-column">
                <span className="mb-2">بعد از تایید ادمین ویدیو شما منتشر میشود</span>
                <div className="button publish-video mx-auto px-4">
                    انتشار ویدیو
                </div>
            </div>
            </div>
            {
                isModalShow &&
                <Modal 
                    isShow={isModalShow}
                    closeModal={() => setIsModalShow(false)}
                >
                    <div className="item-holders position-relative d-flex flex-row p-4">
                        <Design1 className="position-absolute"/>
                        <Design2 className="position-absolute"/>
                        <div className="card d-flex flex-column justify-content-center align-items-center p-4">
                            <video 
                                className="video-on-modal mb-3"
                                preload="auto" 
                                src={`${URL.createObjectURL(uploadedVideo)}`}
                                type="video/mp4"
                                controls
                                width="300.86px"
                                height="170.03px"
                                onLoadedMetadata={metaData}
                            />
                            <span className="text-break text-center fs-6 fw-light lh-lg mx-auto mb-3 mt-1">
                                برای انتخاب تصویر کاور میتوانید حین پخش ویدیو،تصویر<br/> دلخواه خود را برش بزنید 
                            </span>
                            <div className="button-outline font" onClick={snap}>
                                <CaptureVideo/>برش تصویر 
                            </div>
                        </div>
                        <canvas width="1" height="1" className="border border-5"></canvas>
                    </div>
                </Modal>
            }
        </div>
    )
}

export default VideoInfo;
