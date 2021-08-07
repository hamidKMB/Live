import React, {useState} from "react";

//UPPY
import Uppy from '@uppy/core'
import Tus from '@uppy/tus'
import ProgressBar from '@uppy/progress-bar'


import "./DND.styles.scss"
import * as tus from "tus-js-client";
import VideoInfo from "../../pages/videos/uploaded-videos/video-info/video-info.component";
import {ReactComponent as DragAndDrop} from "../../pages/videos/uploaded-videos/upload-video/drag-drop.svg";
import {Link} from "react-router-dom";


const uppy = new Uppy({
    restrictions: {maxNumberOfFiles: 1, allowedFileTypes: ['.png']},
    autoProceed: true
})

uppy.use(Tus, {endpoint: 'https://storage.livenegah.com:1443/tus/zz?token=9721'})


const progress = uppy.use(ProgressBar, {
    target: "body",
    fixed: false,
    hideAfterFinish: false,
})

uppy.on('complete', (result) => {
    const url = result.successful[0].uploadURL
    console.log(url);
})

uppy.on('error', (error) => {
    console.log(error)
})


const Dnd = (props) => {



    function uploadTus(my_file){

        setFile(my_file);

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
                console.log("Failed because: " + error)
            },
            onProgress: function (bytesUploaded, bytesTotal) {
                var percentage = (bytesUploaded / bytesTotal * 100).toFixed(2)
                console.log(bytesUploaded, bytesTotal, percentage + "%")

                setProgress(percentage)
            },
            onSuccess: function () {
                // console.log("Download %s from %s", upload.file.name, upload.url)
            }
        })

        // Check if there are any previous uploads to continue.
        upload.findPreviousUploads().then(function (previousUploads) {
            // Found previous uploads so we select the first one.
            if (previousUploads.length) {
                upload.resumeFromPreviousUpload(previousUploads[0])
            }

            // Start the upload
            upload.start()
        })

    }
    const onChangeHandler = (e) => {
        let my_file = e.target.files[0];
        uploadTus(my_file)
    }
    const dropHandler = (e) => {
        e.preventDefault();
        let my_file = e.dataTransfer.files[0];
         uploadTus(my_file)

    }


    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);

    return (
        <>

            {file == null ?


                <div style={{background:'red'}} draggable="true" onDragStart="drag(event)" onDrop={dropHandler}>

                    <div className="admin-pages-layout file-upload">

                        <DragAndDrop/>
                        <h5>بارگذاری ویدیو</h5>
                        <p>برای بارگذاری ویدیو یک فایل را بکشید و رها کنید<br/>و یا فایل را انتخاب کنید</p>
                        <div className="row">
                            <div className="col-12 center">
                                <div><input  type='file' onChange={onChangeHandler} className="button choose-video"/> انتخاب
                                    ویدیو
                                </div>
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


                        : <VideoInfo progress={progress}/>
                    </div>
                </div>
                : <VideoInfo progress={progress}/>

            }
        </>


    )
}

export default Dnd
