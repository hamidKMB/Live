import React from "react";

//UPPY
import Uppy from '@uppy/core'
import Tus from '@uppy/tus'
import { DragDrop } from '@uppy/react'

//React-Router-Dom
import {Link, Redirect, useRouteMatch} from "react-router-dom"

//STYLES & Logo
import {ReactComponent as DragAndDrop} from "./drag-drop.svg"
import "./DND.styles.scss"


const uppy = new Uppy({
  restrictions: { maxNumberOfFiles: 1 , allowedFileTypes: ['.png']},
  autoProceed: true
})

uppy.use(Tus, { endpoint: 'https://storage.livenegah.com/tus/zz?token=9721' })

uppy.on('complete', (result) => {
  const url = result.successful[0].uploadURL
  console.log(url);
})

uppy.on('error', (error) => {
  console.log(error)
})



const Dnd = () => {
    const {url, path} = useRouteMatch()
    return (
        <div className="file-upload">
            <DragDrop uppy={uppy} className="select-file">
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
            </DragDrop>
        </div>
    )
}

export default Dnd