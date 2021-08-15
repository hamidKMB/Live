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
import CreateNewCourse from "../upload-video/create-new-course";

const VideoInfo = (props) => {
    const [uploadedVideo, setUploadedVideo] = React.useState(null)

    React.useEffect(() => {
        props.video && (props.progress === "100.00") && setUploadedVideo(props.video)
    },[props.video, props.progress])

    
    // screenshot
    let canvas, context, video;
    const metaData = (event) => {
    video = event.target;
    canvas = document.querySelector("canvas");
    // w = parseInt(event.target.attributes[5].nodeValue);
    // h = parseInt(event.target.attributes[6].nodeValue);
    }

    const snap = () => {    
        context = canvas.getContext("2d")
        context.drawImage(video, 0, 0, 300, 150)
    }

    const onClickSnapShot = () => {
        const url = canvas.toDataURL("image/png", 0.5);
        closeModal()
        setFile(url)
    }
    
	//swithc Parts
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
        setFile(URL.createObjectURL(e.target.files[0]));
    }


    const [isModalShow, setIsModalShow] = React.useState({
      editVideo: false ,
      createCourse: false ,
      createSeason: false
    });

    const openModal = (event) => {
      setIsModalShow({
        ...isModalShow,
        [event.target.attributes[1].nodeValue]: true,
      });
      
    };

    const closeModal = () => {
      Object.keys(isModalShow).forEach((key) => {
        setIsModalShow((isModalShow[key] = false));
      });
    };

    return (
      <div className="video-info admin-pages-layout">
        <div className="input">
          <TextInput label="عنوان ویدیو" input />
          <TextInput label="توضیحات ویدیو" textArea maxLength="500" />
          <TextInput
            label="دسته بندی"
            dropDown
            dropItems={[" ", "هنری", "آموزشی"]}
          />
          <div className="d-flex flex-row align-items-start">
            <TextInput label="دوره" dropDown dropItems={[" "]} />
            <div
              className="button me-1 mt-2 button-size"
              name="createCourse"
              onClick={openModal}
            >
              {" "}
              + دوره جدید
            </div>
            {isModalShow.createCourse && (
              <Modal
                isShow={isModalShow.createCourse}
                closeModal={() => setIsModalShow(false)}
              >
                <div className="create-new-course-style p-3">
                  <CreateNewCourse />
                </div>
              </Modal>
            )}
          </div>
          <div className="d-flex flex-row align-items-start">
            <TextInput label="فصل" dropDown dropItems={[" "]} />
            <div
              onClick={openModal}
              className="button me-1 mt-2 button-size"
              name="createSeason"
            >
              {" "}
              + فصل جدید
            </div>
            {isModalShow.createSeason && (
              <Modal
                isShow={isModalShow.createSeason}
                closeModal={() => setIsModalShow(false)}
                className="w-50"
              >
                <div className="new-season p-md-5 p-sm-3 p-0">
                  <div className="ss mx-auto d-flex flex-column justify-content-center">
                    <h5 className="fs-6 fw-bold mb-5">ایجاد فصل جدید</h5>
                    <TextInput label="عنوان فصل" input />
                    <TextInput label="عنوان دوره" dropDown dropItems={[" "]}/>
                    <div className="button mx-auto px-sm-5 px-2 rounded mt-3">ایجاد فصل</div>
                  </div>
                </div>
              </Modal>
            )}
          </div>
          <TextInput label="هزینه ویدیو" input />
          <TextInput label="انتخاب تخفیف" dropDown dropItems={[" "]} />
        </div>
        <div className="status-and-others d-flex flex-column justify-content-between mx-xl-auto me-lg-auto pe-2">
          <div className="top">
            <span className="status"> {props.stateOfUpload} </span>
            <div className="background-image-of-video">
              {props.video && (
                <video
                  preload="auto"
                  src={`${
                    props.progress === "100.00" &&
                    URL.createObjectURL(props.video)
                  }#t=1`}
                  poster={file && file}
                  type="video/mp4"
                />
              )}
              {(file || props.progress === "100.00") && (
                <BinLogo
                  className="bin-logo-upload"
                  onClick={file ? () => setFile(null) : null}
                />
              )}
              <span
                className="progress-bar"
                style={{ width: `${props.progress}%` }}
              />
            </div>
            <span className="mb-3"> status </span>
            <span>تصویری برای کاور ویدیو انتخاب کنید</span>
            <div className="row d-flex flex-column flex-lg-row mt-3 mb-3 me-1 ms-1 align-items-md-center">
              <div className="col-lg-6 col-md-6 col-sm-12 upload-status mb-lg-0 mb-2">
                <label htmlFor="choose-picture" className="button-outline font">
                  بارگذاری تصویر
                  <UploadLogo className="ms-1" />
                  <input
                    type="file"
                    id="choose-picture"
                    className="d-none"
                    onChange={onChangeHandler}
                  />
                </label>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 upload-status">
                <div
                  className="button-outline font"
                  name="editVideo"
                  onClick={
                    props.video
                      ? openModal
                      : () => alert("first upload a video")
                  }
                >
                  انتخاب تصویر از ویدیو
                  <PictureLogo className="ms-1" />
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
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
              <div className="part">
                <span>ارسال دیدگاه</span>
                <Switch
                  checked={state.checkedB}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
              <div className="part">
                <span>قابل دانلود</span>
                <Switch
                  checked={state.checkedC}
                  onChange={handleChange}
                  color="primary"
                  name="checkedC"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
            </div>
          </div>
          <div className="bottom d-flex d-flex flex-column mt-auto">
            <span className="mb-2">
              بعد از تایید ادمین ویدیو شما منتشر میشود
            </span>
            <div className="button publish-video mx-auto px-4">
              انتشار ویدیو
            </div>
          </div>
        </div>
        {isModalShow.editVideo && (
          <Modal
            isShow={isModalShow.editVideo}
            closeModal={() => setIsModalShow(false)}
          >
            <div className="item-holders position-relative d-flex justify-content-between align-items-center flex-row p-4">
              <Design1 className="position-absolute design-1" />
              <Design2 className="position-absolute design-2" />
              <div className="card d-flex flex-column justify-content-center align-items-center py-4 px-2 mx-auto card-video">
                <video
                  className="video-on-modal mb-3"
                  preload="auto"
                  src={`${URL.createObjectURL(props.video)}`}
                  type="video/mp4"
                  controls
                  disablePictureInPicture
                  disableRemotePlayback
                  onLoadedMetadata={metaData}
                />
                <span className="text-break text-center fw-light lh-lg mx-auto mb-3 mt-1">
                  برای انتخاب تصویر کاور میتوانید حین پخش ویدیو،تصویر
                  <br /> دلخواه خود را برش بزنید
                </span>
                <div className="button-outline font" onClick={snap}>
                  <CaptureVideo />
                  برش تصویر
                </div>
              </div>
              <div className="w-50 d-flex flex-column">
                <canvas className="border border-1 m-auto h-50 w-75 rounded" />
                <div className="button mt-2 mx-auto" onClick={onClickSnapShot}>
                  ثبت کاور تصویر
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    );
}

export default VideoInfo;
