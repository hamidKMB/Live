import React from "react"

import * as tus from "tus-js-client";
import TextInput from "../../../../components/text-input/text-input.component";
import { Switch } from "@material-ui/core";
import "./upload-course.styles.scss";
import {ReactComponent as UploadLogo} from "../../../events/Upload-Live/upload-logo.svg";
const UploadCourse = () => {
  const [state, setState] = React.useState({
    //switches for enable/disable the Options
    likeDislike: false,
    sendComments: false,
    download: false,
  });

  const handleChange = (event) => {
    //handle the change in switches
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
        alert("upload Error" + error);
      },
      onProgress: function (bytesUploaded, bytesTotal) {
        var percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
        console.log(bytesUploaded, bytesTotal, percentage + "%");
      },
      onSuccess: function () {
        setFile(URL.createObjectURL(my_file));
      },
    });
    // Check if there are any previous uploads to continue.
    upload.findPreviousUploads().then(function (previousUploads) {
      // Found previous uploads so we select the first one.
      // if (previousUploads.length) {
      //     upload.resumeFromPreviousUpload(previousUploads[0])
      // }

      // Start the upload
      upload.start();
    });
  };

  //functions for Drag And Drop and Choose Picture
  const onChangeHandler = (e) => {
    let my_file = e.target.files[0];
    uploadTus(my_file);
  };

  const dropHandler = (e) => {
    e.preventDefault();
    // if (e.dataTransfer.files[0].type.includes("mp4" || "mp3" || "mkv") ){ // check the types
    let my_file = e.dataTransfer.files[0];
    uploadTus(my_file);
    // } else {
    //   alert("please Enter a file with .mp4 or .mp3 or .mkv type")
    // }
  };

  const onDragOverHandler = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  return (
    <div className="admin-pages-layout upload-course-layout">
      <div className="d-flex flex-column justify-content-center">
        <div className="input-and-upload-cover d-flex flex-md-row flex-column-reverse">
          <div className="input d-flex flex-column justify-content-center">
            <TextInput label="عنوان دوره" input />
            <TextInput label="دسته بندی" dropDown dropItems={[" "]} />
            <div className="d-flex flex-row align-items-start">
              <TextInput label="فصل بندی" dropDown dropItems={[" "]} />
              <div className="button me-1 mt-2 button-size" name="newTicket">
                +فصل جدید
              </div>
            </div>
            <TextInput label="هزینه دوره" input />
            <TextInput label="تخفیف" input />
            <TextInput label="تعداد قسمت ها" input />
          </div>
          <div className="status-and-others d-flex flex-column justify-content-between mx-xl-auto me-lg-auto me-md-1 pe-2">
            <div className="top d-flex flex-column justify-content-between align-items-start">
              <span>تصویری برای کاور پخش زنده انتخاب کنید</span>
              <div
                className="choose-cover-for-live my-4"
                style={file && { backgroundImage: `url(${file})` }}
                onClick={file ? () => setFile(null) : null}
              >
                {!file && (
                  <div
                    draggable
                    onDragOver={onDragOverHandler}
                    onDrop={dropHandler}
                    className="mt-4 h-75 my-auto d-flex flex-column justify-content-between align-items-center text-center"
                  >
                    <UploadLogo />
                    <span className="text-break w-75">
                      برای بارگذاری کاور پخش زنده یک تصویر را بکشید و رها کنید
                    </span>
                    <label className="choose-picture">
                      <input type="file" onChange={onChangeHandler} />
                      انتخاب تصویر
                    </label>
                  </div>
                )}
              </div>
              <div className="switch-parts w-100 px-5">
                <div className="d-flex justify-content-between align-items-center">
                  <span>انتشار پخش زنده</span>
                  <Switch
                    checked={state.likeDislike}
                    onChange={handleChange}
                    color="primary"
                    name="likeDislike"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span>چت عمومی</span>
                  <Switch
                    checked={state.sendComments}
                    onChange={handleChange}
                    color="primary"
                    name="sendComments"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span>قابل دانلود</span>
                  <Switch
                    checked={state.download}
                    onChange={handleChange}
                    color="primary"
                    name="download"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-area-row d-flex flex-column w-100">
          <TextInput label="خلاصه دوره" textArea maxLength="1000" />
          <TextInput label="خلاصه دوره" textArea rows="3" maxLength="1000" resize />
        </div>
      <div className="button me-auto px-4">ایجاد دوره</div>
      </div>
    </div>
  );
};

export default UploadCourse;