import React from "react";

import "./Upload-Live.styles.scss";
import TextInput from "../../../components/text-input/text-input.component";
import { Switch } from "@material-ui/core";
import { ReactComponent as UploadLogo } from "./upload-logo.svg";

import * as tus from "tus-js-client";
import Modal from "../../../components/modal/modal.component";
import NewDiscount from "./new-discount.component";
import NewTicket from "./new-ticket.component";

const UploadLive = () => {
    
    const [state, setState] = React.useState({ 
        //switches for enable/disable the Options
        publishLive: false ,
        publicChat: false ,
        comments: false ,
        privateChat: false ,
        saveLive: false ,
        timeMachine: false
    });

    const handleChange = (event) => { //handle the change in switches 
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

    const dropHandler = (e) => {
        e.preventDefault();
        // if (e.dataTransfer.files[0].type.includes("mp4" || "mp3" || "mkv") ){ // check the types
            let my_file = e.dataTransfer.files[0]
            uploadTus(my_file)
        // } else {
        //   alert("please Enter a file with .mp4 or .mp3 or .mkv type")
        // }
    }

    const onDragOverHandler = (e) => {
      e.preventDefault();
       e.dataTransfer.dropEffect = "move";
    }


    //Modal
    const [isModalShow, setIsModalShow] = React.useState({
        newTicket: false ,
        newDiscount: false
    });
    
    const openModal = (event) => {
        setIsModalShow({...isModalShow , [event.target.attributes[1].nodeValue]: true});
    };

    const closeModal = () => {
        Object.keys(isModalShow).forEach((key) => {
            setIsModalShow(isModalShow[key] = false)
        })
    };

    return (
      <div className="admin-pages-layout upload-live d-flex flex-column flex-md-row">
        <div className="input d-flex flex-column justify-content-center mx-auto">
          <TextInput label="عنوان پخش زنده" input />
          <TextInput
            label="دسته بندی"
            dropDown
            dropItems={[" ", "هنری", "آموزشی"]}
          />
          <div className="d-flex flex-row align-items-start">
            <TextInput label="بلیط پخش زنده" dropDown dropItems={[" "]} />
            <div
              className="button me-1 mt-2 button-size"
              onClick={openModal}
              name="newTicket"
            >
              {" "}
              + بلیط جدید
            </div>
          </div>
          {isModalShow.newTicket && (
            <Modal
              isShow={isModalShow.newTicket}
              closeModal={closeModal}
              name="newTicket"
            >
              <NewTicket closeModal={closeModal} />
            </Modal>
          )}
          <div className="d-flex flex-row align-items-start">
            <TextInput label="تخفیف" dropDown dropItems={[" "]} />
            <div
              className="button me-1 mt-2 button-size"
              onClick={openModal}
              name="newDiscount"
            >
              {" "}
              + تخفیف جدید
            </div>
          </div>
          {isModalShow.newDiscount && (
            <Modal
              isShow={isModalShow.newDiscount}
              closeModal={closeModal}
              name="newDiscount"
            >
              <NewDiscount closeModal={closeModal} />
            </Modal>
          )}
          <div className="d-flex flex-row justify-content-between dating">
            <TextInput label="زمان پخش زنده" dropDown dropItems={[" "]} />
            <TextInput label="تاریخ پخش زنده" datePicker />
          </div>
          
          <TextInput label="توضیحات ویدیو" textArea maxLength="400" />
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
            <div className="switch-parts w-100 px-1 ">
              <div className="d-flex justify-content-between align-items-center">
                <span>انتشار پخش زنده</span>
                <Switch
                  checked={state.publishLive}
                  onChange={handleChange}
                  color="primary"
                  name="publishLive"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>چت عمومی</span>
                <Switch
                  checked={state.publicChat}
                  onChange={handleChange}
                  color="primary"
                  name="publicChat"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>دیدگاه</span>
                <Switch
                  checked={state.comments}
                  onChange={handleChange}
                  color="primary"
                  name="comments"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>چت خصوصی</span>
                <Switch
                  checked={state.privateChat}
                  onChange={handleChange}
                  color="primary"
                  name="privateChat"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>ذخیره پخش زنده</span>
                <Switch
                  checked={state.saveLive}
                  onChange={handleChange}
                  color="primary"
                  name="saveLive"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>ماشین زمان</span>
                <Switch
                  checked={state.timeMachine}
                  onChange={handleChange}
                  color="primary"
                  name="timeMachine"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
            </div>
          </div>
          <div className="bottom d-flex d-flex flex-column">
            <div className="button publish-video mx-auto px-4">
              ایجاد پخش زنده
            </div>
          </div>
        </div>
      </div>
    );
}

export default UploadLive;