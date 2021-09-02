import React from "react"
import UserMessage from "./messages/user-message.component"
import SupportTeamMessage from "./messages/support-team-message.component"
import {ReactComponent as CloseChatLogo} from "../../components/modal/crossMark.svg"
import {ReactComponent as AttachFileChatLogo} from "./attach-file-chat-logo.svg"
const BackupChat = (props) => {
    return(
        <>
            {
              window.innerWidth > 575 &&
                <div className="chat-header d-flex flex-row align-items-center border-bottom border-2  py-2 mx-2">
                    <h6 className="m-0">{props.title}</h6>
                    <CloseChatLogo className="me-auto" onClick={props.closeChat}/>
                </div>
            }
          <div className="chat-messages-holder d-flex flex-column py-4 px-3">
              <UserMessage messageText="akshdbakshdbasdbas ashdbasdbas akshdbakshdbasdbas akshdbakshdbasdbas"/>
              <SupportTeamMessage messageText="dbakshdbasdbas ashdbasdbas akshdbakshdbasdbas akshdbakshdbasdba" supporterName="علی"/>
              <UserMessage messageText="akshdbakshdbasdbas ashdbasdbas akshdbakshdbasdbas akshdbakshdbasdbas"/>
              <SupportTeamMessage messageText="dbakshdbasdbas ashdbasdbas akshdbakshdbasdbas akshdbakshdbasdba" supporterName="علی"/>
              <UserMessage messageText="akshdbakshdbasdbas ashdbasdbas akshdbakshdbasdbas akshdbakshdbasdbas"/>
              <SupportTeamMessage messageText="dbakshdbasdbas ashdbasdbas akshdbakshdbasdbas akshdbakshdbasdba" supporterName="علی"/>
              <UserMessage messageText="akshdbakshdbasdbas ashdbasdbas akshdbakshdbasdbas akshdbakshdbasdbas"/>
              <SupportTeamMessage messageText="dbakshdbasdbas ashdbasdbas akshdbakshdbasdbas akshdbakshdbasdba" supporterName="علی"/>
          </div>
          {
            props.situation === "بسته شده" 
            ?
            <div className="m-auto border border-2 border-warning text-warning closed-chat text-center rounded-3 py-2 px-4">
              درخواست پشتیبانی شما با وضعیت "بسته شده" خاتمه یافته است
            </div>
            :
            <div className="typing-message w-100 mt-auto d-flex flex-row">
                <label htmlFor="attach-file-chat" className="attach-file-logo">
                  <AttachFileChatLogo className="position-relative gh"/>
                <input type="file" id="attach-file-chat" className="d-none"/>
                </label>
                <input type="text" placeholder="پیام خود را بنویسید"/>
                <div className="send-message me-auto p-3">
                    ارسال
                </div>
            </div>
          }
        </>
    )
}

export default BackupChat