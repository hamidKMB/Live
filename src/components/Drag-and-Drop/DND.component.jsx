import React from "react";

//UPPY
import Uppy from '@uppy/core'
import Tus from '@uppy/tus'
import { DragDrop } from '@uppy/react'
import ProgressBar from '@uppy/progress-bar'


import "./DND.styles.scss"


const uppy = new Uppy({
  restrictions: { maxNumberOfFiles: 1 , allowedFileTypes: ['.png']},
  autoProceed: true
})

uppy.use(Tus, { endpoint: 'https://storage.livenegah.com:1443/tus/zz?token=9721' })



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

const dropHandler = (event) => {
    console.log("upload");
    
}

const Dnd = (props) => {
    var selectFile = document.querySelector(".select-file");
    console.log(selectFile);
    return (
        <DragDrop uppy={uppy} className="select-file" onDrop={dropHandler} progress= {progress}>
            {props.children}
        </DragDrop>
    )
}

export default Dnd