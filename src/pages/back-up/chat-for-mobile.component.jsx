import React from "react"
import {ReactComponent as Bad} from "../../components/backup-rows/reactions/bad.svg";
import { ReactComponent as Normal } from "../../components/backup-rows/reactions/normal.svg";
import {ReactComponent as Good} from "../../components/backup-rows/reactions/good-processClosed.svg";
import BackupChat from "./back-up-chat.component";

const BackupChatPhone = (props) => {
    return (
      <div>
        <div className="backup-header d-flex flex-row justify-content-between mb-3 align-items-center">
          <h5 className="mb-0 fs-6">{props.title}</h5>
          <div
            className="button-outline py-1 me-auto"
            onClick={props.closeChat}
          >
            بازگشت
          </div>
        </div>
        <div className="bg-white rounded-3 shadow-sm justify-content-between d-flex flex-row align-items-center mx-auto my-3 px-2 py-2 ">
          <span>واحد: {props.unit}</span>
          <span className="reactions">
            {props.reaction === "good" ? (
              <Good />
            ) : props.reaction === "normal" ? (
              <Normal />
            ) : (
              <Bad />
            )}
          </span>
          <span>{props.date}</span>
        </div>
        <div className="d-flex bg-white flex-column border border-2 chat pt-2">
          <BackupChat className="w-100 h-75" />
        </div>
      </div>
    );
}

export default BackupChatPhone;